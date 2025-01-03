import * as THREE from 'three';
import {
    AU,
    DISTANCE_SCALE,
    simulationSpeed,
    distanceUnits,
    backgroundTextures,
    jwstScaleFactor
} from './scripts/data/constants.js';
import {state} from "./scripts/data/variables.js";
import {
    calcPlanetOffset,
    createCircle,
    drawConnection,
    pushTextToLabel,
    toggleSpacecraftSelected,
    updateLabel,
    updateLighting,
    updateTargetList,
    updateSelectionElement,
    changeBackground,
    setTargetPlanet, toggleTransitionAnimation, toggleCameraLock, toggleCameraSunLock, initPlanetScaleSlider
} from "./scripts/design/designUtils.js";
import {getPointXBeyondLine, PlanetRingGeometry} from "./scripts/utils.js";
import {
    scene,
    camera,
    renderer,
    textureLoader,
    gltfLoader,
    sunLight, controls, controls2, loadingManager, adjustFOV
} from './scripts/setup/scene.js';
import {OrbitTrail, Planet, Ring, Spacecraft} from "./scripts/setup/classes.js";
import { initEventListeners } from "./scripts/eventListeners.js";
import {
    sun2kTexture, sun8kTexture,
    mercury2kTexture, mercury8kTexture,
    venus2kTexture, venus8kTexture,
    earth2kTexture, earth8kTexture,
    mars2kTexture, mars8kTexture,
    jupiter2kTexture, jupiter8kTexture, jupiterRingTexture,
    saturn2kTexture, saturn8kTexture, saturnRingTexture,
    uranus2kTexture, uranusRingTexture,
    neptune2kTexture, neptuneRingTexture, moon2kTexture, jwstModelPath
} from "./scripts/data/paths.js";


let cameraOffset = new THREE.Vector3(0.001, 0.01, 0.001); // Default offset
let jwstCameraOffset = new THREE.Vector3(jwstScaleFactor * 3, jwstScaleFactor * 3, jwstScaleFactor * 3)

const setCameraOffset = newOffset => { cameraOffset.copy(newOffset)};
const setJwstCameraOffset = newOffset => { jwstCameraOffset.copy(newOffset)};

// planets
const sun = new Planet("Sun", 696340 * state.PLANET_SCALE, 0,  150 * 365, 1.98892 * 10 ** 30, 0xFF740F, 0, 0, 0, true, sun2kTexture.href, sun8kTexture.href);

const mercury = new Planet("Mercury", 2440 * state.PLANET_SCALE, 0,  58*24, 0.33010* 10 ** 24, 0x949494,0.387 * AU * DISTANCE_SCALE, 0, 0, false, mercury2kTexture.href, mercury8kTexture.href);
mercury.zVel = 47.39996051284;

const venus = new Planet("Venus", 6051.8 * state.PLANET_SCALE, 177.4, -243*24,4.867 * 10 ** 24, 0xff9900,0.72 * AU * DISTANCE_SCALE, 0, 0, false, venus2kTexture.href, venus8kTexture.href);
venus.zVel = 35.019991414096;

const earth = new Planet("Earth", 6371 * state.PLANET_SCALE, 23.5, 24,5.9722 * 10 ** 24, 0x006eff,AU * DISTANCE_SCALE, 0, 0, false, earth2kTexture.href, earth8kTexture.href);
earth.zVel = 29.78299948;

const mars = new Planet("Mars", 3389.5 * state.PLANET_SCALE,  25.19, 24.5,6.39 * 10 ** 23, 0xff4d00,1.524 * AU * DISTANCE_SCALE, 0, 0, false, mars2kTexture.href, mars8kTexture.href);
mars.zVel = 24.076988672178;

const jupiter = new Planet("Jupiter", 69911 * state.PLANET_SCALE,  3.13, 10,1.898 * 10 ** 27, 0xB39B83,5.2 * AU * DISTANCE_SCALE, 0, 0, false, jupiter2kTexture.href, jupiter8kTexture.href);
jupiter.zVel = 13.06000369219;
new Ring(jupiter, 1.4, 1.7, 0xC0B09E,0.9, jupiterRingTexture.href);

const saturn = new Planet("Saturn", 58232 * state.PLANET_SCALE,  0, 10.5,5.683 * 10 ** 26, 0xd8ca9d,9.538 * AU * DISTANCE_SCALE, 0, 0, false, saturn2kTexture.href, saturn8kTexture.href);
saturn.zVel = 9.679981775672;
new Ring(saturn, 1.6, 2.7, 0xdcc49d, 0.9, saturnRingTexture.href);

const uranus = new Planet("Uranus", 25362 * state.PLANET_SCALE, 97.7, 17,8.681 * 10 ** 25, 0x72eded,19.56 * AU * DISTANCE_SCALE, 0, 0, false, uranus2kTexture.href);
uranus.zVel = 6.7999974;
new Ring(uranus, 1.6, 2.1, 0xd5f7f7, 0.9, uranusRingTexture.href);

const neptune = new Planet("Neptune", 24622 * state.PLANET_SCALE, 8.32, 16, 1.024 * 10 ** 26, 0x233fc4,29.90 * AU * DISTANCE_SCALE, 0, 0, false, neptune2kTexture.href);
neptune.zVel = 5.4299794;
new Ring(neptune, 1.5, 2.3, 0xc2caed, 0.9, neptuneRingTexture.href);

const planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
const discardedPlanets = [];


state.spacecraft = new Spacecraft(
    1000,
    0, 0, -3 * AU * DISTANCE_SCALE,
    0.04,
    0.25,
    0.0001, // 0.000001 (causes vector-line-bugs)
    0.2,
);


camera.position.y = 40; // moving out the camera
controls.update();

// loading
let firstLoad = true
loadingManager.onProgress = ( item, loaded, total ) =>  {
    document.getElementById('loading-progress').innerHTML = ": " + loaded + "/" + total
}
loadingManager.onLoad = ()=>{
    document.getElementById('loading-title').textContent = 'Loading Textures'
    document.getElementById('loading-screen').style.display = 'none'
    if (firstLoad) {
        initEventListeners({
            jwstCameraOffset: jwstCameraOffset,
            planets: planets,
            discardedPlanets: discardedPlanets,
            sun: sun,
            earth: earth,
            moon: moon,
            moonOrbitTrail: moonOrbitTrail,
            ISS: ISS,
            issOrbitTrail: issOrbitTrail,
            jwst: jwst,
            jwstPlane: jwstPlane,
            constellationSphere: constellationSphere,
            connectionOutline: connectionOutline,
            moveToPlanet: moveToPlanet,
            moveToSpacecraft: moveToSpacecraft,
            moveToDefault: moveToDefault,
            moveToJWST: moveToJWST,
            updateEarthSystemVisibility: updateEarthSystemVisibility,
            updateEarthSystemScaling: updateEarthSystemScaling,
            setCameraOffset: setCameraOffset,
            setJwstCameraOffset: setJwstCameraOffset,
        })
        setMenuSettings()
    }
    // if (firstLoad) { // todo: remove spacecraft default select
    //     toggleSpacecraftSelected(true, planets)
    //     toggleCameraLock(true)
    // }
    firstLoad = false
}

function changePlanetScale(newPlanetScale) {
    const oldPlanetScale = state.PLANET_SCALE
    state.PLANET_SCALE = DISTANCE_SCALE * newPlanetScale
    for (const planet of planets) {
        let newPlanetRadius = planet.radius / oldPlanetScale * state.PLANET_SCALE
        planet.radius = newPlanetRadius;

        const newGeometry = new THREE.SphereGeometry(newPlanetRadius, 64, 32);
        newGeometry.rotateY(THREE.MathUtils.degToRad(90));

        planet.sphere.geometry.dispose();
        planet.sphere.geometry = newGeometry;
        if (planet.atmosphere) {
            planet.atmosphere.geometry.dispose();
            planet.atmosphere.geometry = new THREE.SphereGeometry(newPlanetRadius * 1.03, 64, 64)
        }
        if (planet.glowSphere) {
            planet.glowSphere.geometry.dispose();
            planet.glowSphere.geometry = new THREE.SphereGeometry(newPlanetRadius * 2, 64, 32)
        }
        if (planet.clouds) {
            planet.clouds.geometry.dispose();
            planet.clouds.geometry = new THREE.SphereGeometry(newPlanetRadius * 1.005, 64, 32)
        }
        if (planet.axisLine) {
            planet.axisLine.geometry.dispose();

            const axisHeight = newPlanetRadius * 2
            const axisCoords = [
                new THREE.Vector3(0, -axisHeight, 0),
                new THREE.Vector3(0, axisHeight, 0)
            ];
            planet.axisLine.geometry = new THREE.BufferGeometry().setFromPoints(axisCoords)
        }
        if (planet.ring) {
            planet.ring.ringObj.geometry.dispose();

            const innerRadius = newPlanetRadius * planet.ring.innerRadiusFactor;
            const outerRadius = newPlanetRadius * planet.ring.outerRadiusFactor;
            planet.ring.ringObj.geometry = new PlanetRingGeometry(innerRadius, outerRadius, 96, 96);
        }
    }
    moon.geometry.dispose();
    moon.geometry = new THREE.SphereGeometry(1737.4 * state.PLANET_SCALE, 32, 16);

    issOrbitTrail.reset()
    ISS.position.set(earth.radius * 1.1, 0, 0);

    // jwst
    const newJwstScaleFactor = jwstScaleFactor * state.PLANET_SCALE / DISTANCE_SCALE / 10
    jwst.scale.set(newJwstScaleFactor, newJwstScaleFactor, newJwstScaleFactor);
    setJwstCameraOffset(new THREE.Vector3(newJwstScaleFactor * 3, newJwstScaleFactor * 3, newJwstScaleFactor * 3))

    updateEarthSystemScaling()

    if (state.targetPlanet && state.isCameraLocked) {
        cameraOffset = calcPlanetOffset(state.targetPlanet);
        camera.position.copy(state.targetPlanet.sphere.position).add(cameraOffset);
        camera.lookAt(state.targetPlanet.sphere.position);
    }
}

function updateEarthSystemScaling() {
    moonOrbitTrail.reset()
    moon.position.set(earth.radius * 60.3 * state.earthSystemScaling, 0, 0);

    // Jwst L2 Halo SIZE
    const newJwstDistance = earth.radius * 62.8 * state.earthSystemScaling
    jwst.position.set(newJwstDistance, 0, 0);
    jwstPlane.remove(jwstOrbit)
    jwstOrbit.geometry.dispose();
    jwstOrbit = createCircle(newJwstDistance, 0xA2A1A1,128);
    jwstPlane.add(jwstOrbit);

    if (state.jwstSelected) {
        updateJWSTPosition()
        const jwstWorldPosition = new THREE.Vector3();
        jwst.getWorldPosition(jwstWorldPosition);
        camera.position.copy(jwstWorldPosition).add(jwstCameraOffset);
        camera.lookAt(jwstWorldPosition);
    }

    toggleJWSTSelected(state.jwstSelected)
}

function setMenuSettings() { // set interface default values
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        if (checkbox.id === "PAUSED_CB") checkbox.checked = state.PAUSED;
        else if (checkbox.id === "SHOW_LABEL_CB") checkbox.checked = state.SHOW_LABEL;
        else if (checkbox.id === "SHOW_ORBITS_CB") checkbox.checked = state.SHOW_ORBITS;
        else if (checkbox.id === "SHOW_SPACECRAFT_ORBIT_CB") checkbox.checked = state.SHOW_ORBITS;
        else if (checkbox.id === "HIGH_QUALITY_TEXTURES_CB") checkbox.checked = state.HIGH_QUALITY_TEXTURES;
        else if (checkbox.id === "SHOW_VECTORS_CB") checkbox.checked = state.SHOW_VECTORS;
        else if (checkbox.id === "REALISTIC_LIGHTING_CB") checkbox.checked = state.REALISTIC_LIGHTING;
        else if (checkbox.id === "EARTH_SYSTEM_SCALING_CB") checkbox.checked = state.earthSystemScaling !== 1;
        else if (checkbox.id === "TRUE_ROTATION_SPEEDS_CB") checkbox.checked = state.TRUE_ROTATION_SPEEDS;
        else if (checkbox.id === "ACTIVE_ASCENSION_AXIS_CB") checkbox.checked = state.ACTIVE_ASCENSION_AXIS;
        else if (checkbox.id === "SPACECRAFT_FIRST_PERSON_CB") checkbox.checked = state.spacecraftFirstPerson;
        else if (checkbox.id === "SPACECRAFT_GRAVITY_CB") checkbox.checked = state.spacecraftGravity;
        else if (checkbox.id === "SPACECRAFT_MATCH_VELOCITY_CB") checkbox.checked = state.spacecraftMatchVelocity;
        else if (checkbox.id === "SPACECRAFT_LIGHT_CB") checkbox.checked = state.spacecraftLight;
        else if (checkbox.id === "CAMERA_LOCK_CB") checkbox.checked = state.isCameraLocked;
        else if (checkbox.id === "CAMERA_SUN_LOCK_CB") checkbox.checked = state.isCameraSunLocked;
    });
    document.querySelectorAll("select").forEach((select) => {
        if (select.id === "DISTANCE_UNIT_SELECT") {
            select.value = distanceUnits.indexOf(state.distanceUnit).toString();
        }
    });
    updateTargetList(planets, state.spacecraftSelected)

    document.getElementById("simulation-speed").addEventListener("input", (event) => {
        const speedKeys = Object.keys(simulationSpeed);

        const sliderValue = event.target.value;
        const speedLabel = speedKeys[sliderValue]; // Map slider value to speed label
        const speedValue = simulationSpeed[speedLabel];

        document.getElementById("simulation-speed-display").textContent = speedLabel;
        state.TIME = 60 * 60 * speedValue; // update simulation speed
    });
    document.getElementById("spacecraft-fov").addEventListener("input", (event) => {
        const fovValue = event.target.value;
        document.getElementById("spacecraft-fov-display").textContent = `${fovValue}°`;

        state.SPACECRAFT_FOV = fovValue
        adjustFOV(state.SPACECRAFT_FOV)
    });
    document.getElementById("planet-scale").addEventListener("input", (event) => {
        let newPlanetScale = parseInt(event.target.value, 10);
        if (newPlanetScale > 1) {
            newPlanetScale = Math.round(newPlanetScale / 2) * 2; // Snap to the nearest multiple of 2
        }
        event.target.value = newPlanetScale;
        document.getElementById("planet-scale-display").textContent = newPlanetScale.toString();
        changePlanetScale(newPlanetScale)
    });
}

changeBackground(backgroundTextures.indexOf(state.backgroundTexture).toString())
initPlanetScaleSlider()
updateLighting()

// add constellation grid sphere
const constellationSphereGeometry = new THREE.SphereGeometry(5000, 60, 40);
constellationSphereGeometry.scale(-1, 1, 1); // Invert the sphere to make the inside visible
const constellationMaterial = new THREE.MeshBasicMaterial({
    transparent: true,
    opacity: 1.0
});
const constellationSphere = new THREE.Mesh(constellationSphereGeometry, constellationMaterial);

// create triangle between two planets and an object (e.g. the sun, JWST)
const connectionGeo = new THREE.BufferGeometry();
const connectionMat = new THREE.LineBasicMaterial({ color: new THREE.Color().setHex( 0x00ff08 ) }); // Line material
const connectionOutline = new THREE.LineLoop(connectionGeo, connectionMat); // Create the line loop
connectionOutline.frustumCulled = false;


// create moon
const moonGeometry = new THREE.SphereGeometry(1737.4 * state.PLANET_SCALE, 32, 16); // Smaller radius for the moon
const moonMapPath = moon2kTexture.href
const moonTexture = textureLoader.load(moonMapPath);
moonTexture.colorSpace = THREE.SRGBColorSpace
const moonMaterial = new THREE.MeshStandardMaterial({
    // color: 0x8f8f8f,
    map: moonTexture,
    roughness: 0.8, // less rough, more reflective
});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
const moonPlane = new THREE.Object3D();
// const moonOrbit = createCircle(0.002606 * AU * DISTANCE_SCALE, 0xA2A1A1,128);
moonPlane.add(moon)
moon.position.set(earth.radius * 60.3 * state.earthSystemScaling, 0, 0);
moon.rotation.y = Math.PI;
moonPlane.position.copy(moon.position);
moonPlane.rotation.x = THREE.MathUtils.degToRad(5.14); // axis tilt

const moonOrbitTrail = new OrbitTrail(200, 0xA2A1A1, false) // 250 for full circle


// create ISS
const issPlane = new THREE.Object3D();
const issScaleFactor = 0.000001

const issGeometry = new THREE.BoxGeometry(50, 50, 50);
const issMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // red cube instead of ISS model
const ISS = new THREE.Mesh(issGeometry, issMaterial);

issPlane.add(ISS)
ISS.visible = false; // make ISS-cube invisible

ISS.position.set(earth.radius * 1.1, 0, 0);
ISS.rotation.y = THREE.MathUtils.degToRad(90);
ISS.scale.set(issScaleFactor, issScaleFactor, issScaleFactor);
issPlane.rotation.x = THREE.MathUtils.degToRad(51.6);

issPlane.position.copy(ISS.position);

const issOrbitTrail = new OrbitTrail(3000, 0xFF00A6, true)
issOrbitTrail.orbitTrailObj.rotation.x = THREE.MathUtils.degToRad(23.5);


// create James Webb space telescope
let jwst = null
const jwstPlane = new THREE.Object3D();
let jwstOrbit = createCircle(earth.radius * 62.8 * state.earthSystemScaling, 0xA2A1A1,128);

gltfLoader.load(jwstModelPath.href, (gltf) =>
{
    jwst = gltf.scene
    jwst.rotation.x = THREE.MathUtils.degToRad(90)

    jwstPlane.add(jwst)
    jwstPlane.add(jwstOrbit)

    jwst.position.set(earth.radius * 62.8 * state.earthSystemScaling, 0, 0);
    jwst.scale.set(jwstScaleFactor, jwstScaleFactor, jwstScaleFactor);
    jwstPlane.rotation.y = THREE.MathUtils.degToRad(90)

    const pointLight = new THREE.PointLight(0xffffff, 0.003, 10000 * DISTANCE_SCALE); // (color, intensity, distance)
    pointLight.position.set(1, 4, 0); // Set the light's position
    jwst.add(pointLight);
});

function toggleJWSTSelected(selected) {
    state.jwstSelected = selected
    if (state.jwstSelected) {
        scene.add(jwstPlane)
        jwstOrbit.visible = state.SHOW_ORBITS;
    }
    else scene.remove(jwstPlane)
}

function updateEarthSystemVisibility(visible) {
    if (visible) {
        moonPlane.position.copy(earth.sphere.position)
        issPlane.position.copy(earth.sphere.position)
        if (state.jwstSelected || state.movingToJwst) scene.add(jwstPlane)
        scene.add(moonPlane)
        scene.add(issPlane)
        scene.add(moonOrbitTrail.orbitTrailObj)
        scene.add(issOrbitTrail.orbitTrailObj)
    } else {
        scene.remove(jwstPlane);
        scene.remove(moonPlane)
        scene.remove(issPlane)
        scene.remove(moonOrbitTrail.orbitTrailObj)
        scene.remove(issOrbitTrail.orbitTrailObj)
        issOrbitTrail.reset()
    }
}

// Move camera to selected planet
function moveToPlanet(planet, topDown=false) {
    if (planet === state.targetPlanet && !planet.isSun && !state.spacecraftSelected) {
        cameraOffset = calcPlanetOffset(planet)
        toggleCameraLock(true)
        return
    }
    toggleTransitionAnimation(true)
    pushTextToLabel('Move to ' + planet.name)
    toggleSpacecraftSelected(false, planets)
    toggleJWSTSelected(false)
    if (state.SHOW_ORBITS) jwstOrbit.visible = false;
    state.inEarthSystem = (planet.name === "Earth");
    if(state.targetPlanet && !planet.isSun) state.targetPlanet.sphere.rotation.y = 0 // reset planet rotation

    let showLabelChanged = false
    if (state.SHOW_LABEL) {
        state.SHOW_LABEL = false // make label stop updating during transition
        showLabelChanged = true
    }

    state.isCameraLocked = false
    state.isCameraSunLocked = false
    updateEarthSystemVisibility(state.inEarthSystem)

    const duration = 1; // Duration the movement in seconds
    const startPosition = camera.position.clone();
    const startTime = performance.now();

    function animate() {
        const elapsed = (performance.now() - startTime) / 1000; // Convert to seconds
        const t = Math.min(elapsed / duration, 1); // Normalize time to [0, 1]

        const dynamicTargetPosition = planet.sphere.position.clone();
        if (topDown) dynamicTargetPosition.y += 40; // Add height for top-down view

        cameraOffset = calcPlanetOffset(planet);
        dynamicTargetPosition.add(cameraOffset);

        camera.position.lerpVectors(startPosition, dynamicTargetPosition, t);
        controls.target.copy(planet.sphere.position);
        controls.update();

        if (t < 1) {
            requestAnimationFrame(animate); // Continue animation
        } else { // animation is finished
            setTargetPlanet(planet)
            state.birdseye = topDown
            toggleCameraLock(!topDown && !state.PAUSED)
            toggleCameraSunLock(false)
            if (showLabelChanged) state.SHOW_LABEL = true
            if (state.SHOW_LABEL) updateLabel()
            updateSelectionElement("TARGET_SELECT", state.targets.indexOf(planet.name))
            toggleTransitionAnimation(false)
        }
    }

    animate();
}

function moveToSpacecraft() {  // todo: move camera to spacecraft smoothly
    state.birdseye = false;
    toggleJWSTSelected(false)
    setTargetPlanet(null)
    toggleSpacecraftSelected(true, planets)
    toggleCameraLock(true)
    toggleCameraSunLock(false)
    updateLabel()
    updateSelectionElement("TARGET_SELECT", state.targets.indexOf("Free flight"))
    // if (!state.PAUSED) state.spacecraft.container.rotation.z = THREE.MathUtils.lerp(state.spacecraft.container.rotation.z, Math.PI, 2.5) // do a flip
}

function moveToDefault() {
    toggleTransitionAnimation(true)
    state.isCameraLocked = false;
    state.isCameraSunLocked = false
    toggleJWSTSelected(false)
    toggleSpacecraftSelected(false, planets)
    pushTextToLabel('Topdown view')

    const duration = 1;
    const startPosition = camera.position.clone();
    const startTime = performance.now();

    const targetPosition = new THREE.Vector3(0,40,0)

    function animate() {
        const elapsed = (performance.now() - startTime) / 1000; // Convert to seconds
        const t = Math.min(elapsed / duration, 1); // Normalize time to [0, 1]
        camera.position.lerpVectors(startPosition, targetPosition, t); // Smoothly move camera
        controls.target.copy(new THREE.Vector3(0,0,0)); // Update the OrbitControls target to the new planet
        controls.update(); // Update controls to apply the new target

        if (t < 1) {
            requestAnimationFrame(animate); // Continue animation
        } else { // animation is finished
            state.birdseye = true
            setTargetPlanet(null)
            toggleCameraLock(false)
            toggleCameraSunLock(false)
            if (state.SHOW_LABEL) updateLabel()
            updateSelectionElement("TARGET_SELECT", state.targets.indexOf("None"))
            toggleTransitionAnimation(false)
        }
    }
    animate();
}

function moveToJWST() {
    toggleTransitionAnimation(true)
    state.movingToJwst = true
    jwstOrbit.visible = false;
    toggleSpacecraftSelected(false, planets)
    pushTextToLabel('Move to James Webb Space Telescope')
    if(state.targetPlanet && !state.targetPlanet.isSun) state.targetPlanet.sphere.rotation.y = 0 // reset planet rotation
    let showLabelChanged = false
    if (state.SHOW_LABEL) {
        state.SHOW_LABEL = false // make label stop updating during transition
        showLabelChanged = true
    }

    state.isCameraLocked = false
    state.isCameraSunLocked = false

    updateJWSTPosition()

    const currentJwstScaleFactor = jwstScaleFactor * state.PLANET_SCALE / DISTANCE_SCALE / 10
    setJwstCameraOffset(new THREE.Vector3(currentJwstScaleFactor * 3, currentJwstScaleFactor * 3, currentJwstScaleFactor * 3))
    setCameraOffset(jwstCameraOffset)

    const duration = 1; // Duration the movement in seconds
    const startPosition = camera.position.clone();
    const startTime = performance.now()

    function animateJWST() {
        const elapsed = (performance.now() - startTime) / 1000; // Convert to seconds
        const t = Math.min(elapsed / duration, 1); // Normalize time to [0, 1]

        const jwstWorldPosition = new THREE.Vector3();
        jwst.getWorldPosition(jwstWorldPosition);

        const dynamicTargetPosition = jwstWorldPosition.clone().add(jwstCameraOffset);
        camera.position.lerpVectors(startPosition, dynamicTargetPosition, t);

        controls.target.copy(jwstWorldPosition); // Update the OrbitControls target to the new planet
        controls.update(); // Update controls to apply the new target

        if (t < 1) {
            requestAnimationFrame(animateJWST); // Continue animation
        } else { // animation is finished
            setTargetPlanet(null)
            state.inEarthSystem = true
            state.birdseye = false
            updateEarthSystemVisibility(state.inEarthSystem)
            toggleJWSTSelected(true)
            toggleCameraLock(!state.PAUSED)
            toggleCameraSunLock(false)
            if (showLabelChanged) state.SHOW_LABEL = true
            if (state.SHOW_LABEL) updateLabel()
            updateSelectionElement("TARGET_SELECT", state.targets.indexOf("JWST"))
            state.movingToJwst = false
            toggleTransitionAnimation(false)
        }
    }
    animateJWST();
}

function updateJWSTPosition() {
    const d = earth.radius * 235.4 * state.earthSystemScaling
    const P1 = new THREE.Vector3()
    const P2 = new THREE.Vector3()
    sun.sphere.getWorldPosition(P1);
    earth.sphere.getWorldPosition(P2);

    // update Orbit position
    const P3 = getPointXBeyondLine(P1, P2, d)
    jwstPlane.position.x = P3.x
    jwstPlane.position.z = P3.z

    // update orbit plane horizontal alignment
    const alpha = Math.atan2((P2.z - P1.z), P2.x - P1.x);
    jwstPlane.rotation.y = THREE.MathUtils.degToRad(90) - alpha

    // update orbit plane vertical rotation
    jwstPlane.rotation.z +=  -0.007
    jwst.rotation.y +=  0.005
}

function rotateTargetPlanet() {
    sun.sphere.rotation.y += -0.001;
    if (state.inEarthSystem) {
        earth.sphere.rotation.y += state.TRUE_ROTATION_SPEEDS ? earth.rotationSpeed : -0.009
        // moon
        moonPlane.position.copy(earth.sphere.position); // centers moon orbit on earth
        moonPlane.rotation.y += state.TRUE_ROTATION_SPEEDS ? -0.0585 : -0.027;// moon orbit speed
        moonOrbitTrail.updateOrbitTrail(moon, earth.sphere)
        // iss
        issPlane.position.copy(earth.sphere.position); // centers moon orbit on earth
        issPlane.rotation.y += state.TRUE_ROTATION_SPEEDS ? -0.4446 : -0.2; // iss orbit speed (7.6x faster than the moon)
        issOrbitTrail.orbitTrailObj.rotation.y = earth.sphere.rotation.y
        issOrbitTrail.updateOrbitTrail(ISS, earth.sphere)
        // atmosphere
        earth.clouds.rotation.y = earth.sphere.rotation.y * 1.3
        return
    }
    if (state.targetPlanet && !state.targetPlanet.isSun) {
         if (state.targetPlanet === uranus) {
            state.targetPlanet.sphere.rotation.x += state.TRUE_ROTATION_SPEEDS ? state.targetPlanet.rotationSpeed : -0.009;
            return
        }
        state.targetPlanet.sphere.rotation.y += state.TRUE_ROTATION_SPEEDS ? state.targetPlanet.rotationSpeed : -0.009
        if (state.targetPlanet === venus) venus.atmosphere.rotation.y = venus.sphere.rotation.y * 1.2;
    }
}

function updateControls(controlsPosition) {
    controls.target.copy(controlsPosition);
    controls.update();
    controls2.target.copy(controls.target);
    controls2.update();
}

function render() { // runs with 60 fps
    if(!state.PAUSED) {
        for (const planet of planets) {
            planet.updatePosition(planets)
        }
        rotateTargetPlanet()
        if (state.spacecraftSelected) {
            state.spacecraft.updatePosition(planets, sun.sphere.position)
            state.spacecraft.updateBolts()
            if (!state.portPressed && !state.starboardPressed) {
                state.spacecraft.container.rotation.z = THREE.MathUtils.lerp(state.spacecraft.container.rotation.z, 0, 0.08);
            }
            if (!state.forwardPressed) {
                state.spacecraft.obj.flame1.visible = false;
                state.spacecraft.obj.flame2.visible = false;
            }
            if (!state.backwardPressed) {
                state.spacecraft.obj.flame3.visible = false;
                state.spacecraft.obj.flame4.visible = false;
            }
            if (state.forwardPressed || state.backwardPressed) {
                state.spacecraft.flameMaterial.uniforms.time.value += 2500 * state.spacecraft.scale;
            }
            if ((!state.forwardPressed && !state.backwardPressed && !state.handbrakePressed) && (Math.round(camera.fov) !== state.SPACECRAFT_FOV)) {
                // state.spacecraft.obj.rotation.x = THREE.MathUtils.lerp(state.spacecraft.container.rotation.x, 0, 0.1);
                adjustFOV(state.SPACECRAFT_FOV)
            }
            // Smoothly reset to no tilt
            if ((state.forwardPressed || state.backwardPressed || state.portPressed || state.starboardPressed || state.rotatePortPressed || state.rotateStarboardPressed || state.handbrakePressed) && !state.spacecraftMatchVelocity) {
                state.spacecraft.changeMomentum()
            }
        }
        if (state.jwstSelected || state.movingToJwst) updateJWSTPosition()

        if (state.REALISTIC_LIGHTING) sunLight.position.copy(sun.sphere.position)
        if (state.SHOW_CONNECTION) drawConnection([sun.sphere.position, earth.sphere.position, jwstPlane.position], connectionGeo);
        if (state.SHOW_LABEL) updateLabel()
    }

    if (state.jwstSelected && !state.transitionAnimationActive) {
        const jwstWorldPosition = new THREE.Vector3();
        jwst.getWorldPosition(jwstWorldPosition);

        if (state.isCameraSunLocked) {
            const jwstOrbitWorldPosition = new THREE.Vector3();
            jwstOrbit.getWorldPosition(jwstOrbitWorldPosition);

            const d = 0.4 * earth.radius * 235.4 * state.earthSystemScaling
            const P3 = getPointXBeyondLine(sun.sphere.position, jwstOrbitWorldPosition, d)
            camera.position.copy(new THREE.Vector3(P3.x, 0, P3.z))
            camera.lookAt(jwstOrbitWorldPosition);

        } else if (state.isCameraLocked) {
            camera.position.copy(jwstWorldPosition).add(jwstCameraOffset);
            camera.lookAt(jwstWorldPosition);
        } else {
            updateControls(jwstWorldPosition)
        }
    } else if (state.spacecraftSelected) {
        if (state.isCameraLocked) {
            if (!state.targetPlanet) { // free flight
                const globalCameraPosition = new THREE.Vector3();
                if (state.spacecraftFirstPerson) state.spacecraft.obj.firstPersonCameraHelper.getWorldPosition(globalCameraPosition);
                else state.spacecraft.obj.cameraHelperFar.getWorldPosition(globalCameraPosition);
                camera.position.copy(globalCameraPosition);

                // camera look forward
                const localForward = new THREE.Vector3(0, 0, 1);
                const containerQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, state.spacecraft.container.rotation.y, 0));
                const objQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(state.spacecraft.obj.rotation.x, 0, 0));
                const globalForward = localForward.applyQuaternion(containerQuat.multiply(objQuat));
                camera.lookAt(state.spacecraft.container.position.clone().add(globalForward.multiplyScalar(10)));

                // axis flip fix
                if (state.spacecraft.obj.rotation.x >= THREE.MathUtils.degToRad(90)) {
                    camera.rotation.z += THREE.MathUtils.degToRad(180)
                } else if (state.spacecraft.obj.rotation.x <= THREE.MathUtils.degToRad(-90)) {
                    camera.rotation.z -= THREE.MathUtils.degToRad(180)
                }
            }
            else { // spacecraft locked to planet
                const direction = new THREE.Vector3();
                direction.subVectors(state.targetPlanet.sphere.position, state.spacecraft.container.position);
                const yaw = Math.atan2(direction.x, direction.z); // Use atan2 to get the angle in the horizontal plane
                state.spacecraft.container.rotation.y = yaw; // no rotate animation

                const globalCameraPosition = new THREE.Vector3();
                if (state.spacecraftFirstPerson) state.spacecraft.obj.firstPersonCameraHelper.getWorldPosition(globalCameraPosition);
                else state.spacecraft.obj.cameraHelperClose.getWorldPosition(globalCameraPosition);

                camera.position.copy(globalCameraPosition);
                camera.lookAt(state.targetPlanet.sphere.position);
            }
            // first person camera tilt (only if first person and only while the tilt is still being lerped)
            // if (state.spacecraftFirstPerson) { // optimization (causes lags sometimes):  && (state.portPressed || state.starboardPressed || (Math.abs(state.spacecraft.container.rotation.z) > 0.0000005 && Math.abs(state.spacecraft.container.rotation.z) <= state.spacecraft.tiltAngle))
            //      //   almost works, but turning around y breaks z-rotation: solve by wrapping camera in container
            //     const zRotation = new THREE.Euler(0, 0, state.spacecraft.container.rotation.z, 'XYZ');
            //     const zQuaternion = new THREE.Quaternion();
            //     zQuaternion.setFromEuler(zRotation);
            //     camera.quaternion.multiplyQuaternions(zQuaternion, camera.quaternion);
            // }
        } else {
            updateControls(state.spacecraft.container.position)
        }
    }
    else if (state.targetPlanet && !state.transitionAnimationActive) {
        if (!state.isCameraSunLocked) state.sunLockedCameraDistance = 0
        if (state.isCameraSunLocked) {
            const d = (state.sunLockedCameraDistance > 0) ? state.sunLockedCameraDistance : state.targetPlanet.radius * AU * state.PLANET_SCALE / 10
            const P3 = getPointXBeyondLine(sun.sphere.position, state.targetPlanet.sphere.position, d)
            camera.position.copy(new THREE.Vector3(P3.x, 0, P3.z))
            camera.lookAt(state.targetPlanet.sphere.position);
        }
        else if (state.isCameraLocked) {
            camera.position.copy(state.targetPlanet.sphere.position).add(cameraOffset);
            camera.lookAt(state.targetPlanet.sphere.position);
        }
        else {
            updateControls(state.targetPlanet.sphere.position)
        }
    } else if (!state.transitionAnimationActive) { // default (0,0,0) target
        updateControls(new THREE.Vector3(0,0,0))
    }
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );
