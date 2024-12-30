import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
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
} from "./design/designUtils";
import {getPointXBeyondLine, PlanetRingGeometry} from "./utils";
import {
    scene,
    camera,
    renderer,
    textureLoader,
    gltfLoader,
    sunLight, loadingManager, adjustFOV
} from './setup/scene';
import {OrbitTrail, Planet, Ring, Spacecraft} from "./setup/classes";
import { initEventListeners } from "./eventListeners";
import {TrackballControls} from "three/addons";


// setup
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.1; // damping for rotation/panning
controls.screenSpacePanning = true;

controls.enableZoom = false;
controls.rotateSpeed = 0.7;

const controls2 = new TrackballControls(camera, renderer.domElement);
controls2.noRotate = true;
controls2.noPan = true;
controls2.noZoom = false;
controls2.zoomSpeed = 1;
controls2.dynamicDampingFactor = 0.15; // damping for zooming

let cameraOffset = new THREE.Vector3(0.001, 0.01, 0.001); // Default offset
let jwstCameraOffset = new THREE.Vector3(jwstScaleFactor * 3, jwstScaleFactor * 3, jwstScaleFactor * 3)

const setCameraOffset = newOffset => { cameraOffset.copy(newOffset)};
const setJwstCameraOffset = newOffset => { jwstCameraOffset.copy(newOffset)};

// planets
const sun = new Planet("Sun", 696340 * PLANET_SCALE, 0,  150 * 365, 1.98892 * 10 ** 30, 0xFF740F, 0, 0, 0, true, 'planet_textures/2k/2k_sun.jpg', 'planet_textures/8k/8k_sun.jpg'); // 'planet_textures/2k/2k_sun.jpg'

const mercury = new Planet("Mercury", 2440 * PLANET_SCALE, 0,  58*24, 	0.33010* 10 ** 24, 0x949494,0.387 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_mercury.jpg', 'planet_textures/8k/8k_mercury.jpg');
mercury.zVel = 47.39996051284; // speed in km/s

const venus = new Planet("Venus", 6051.8 * PLANET_SCALE, 177.4, -243*24,4.867 * 10 ** 24, 0xff9900,0.72 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_venus_surface.jpg', 'planet_textures/8k/8k_venus_surface.jpg');
venus.zVel = 35.019991414096;

const earth = new Planet("Earth", 6371 * PLANET_SCALE, 23.5, 24,5.9722 * 10 ** 24, 0x006eff,AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_earth_daymap.jpg', 'planet_textures/8k/8k_earth_daymap.jpg');
earth.zVel = 29.78299948;

const mars = new Planet("Mars", 3389.5 * PLANET_SCALE,  25.19, 24.5,6.39 * 10 ** 23, 0xff4d00,1.524 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_mars.jpg', 'planet_textures/8k/8k_mars.jpg');
mars.zVel = 24.076988672178

const jupiter = new Planet("Jupiter", 69911 * PLANET_SCALE,  3.13, 10,1.898 * 10 ** 27, 0xd8ca9d,5.2 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_jupiter.jpg', 'planet_textures/8k/8k_jupiter.jpg');
jupiter.zVel = 13.06000369219;
new Ring(jupiter, 1.4, 1.5, 0xC0B09E,0.9)

const saturn = new Planet("Saturn", 58232 * PLANET_SCALE,  0, 10.5,5.683 * 10 ** 26, 0xd3cc81,9.538 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_saturn.jpg', 'planet_textures/8k/8k_saturn.jpg');
saturn.zVel = 9.679981775672;
new Ring(saturn, 1.6, 2.7, 0xdcc49d, 1, 'planet_textures/2k/2k_saturn_ring_alpha.png') // todo

const uranus = new Planet("Uranus", 25362 * PLANET_SCALE, 97.7, 17,8.681 * 10 ** 25, 0x51dbdb,19.56 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_uranus.jpg');
uranus.zVel = 6.7999974;
new Ring(uranus, 1.5, 1.6, 0xb0ffff, 0.5)

const neptune = new Planet("Neptune", 24622 * PLANET_SCALE, 8.32, 16, 1.024 * 10 ** 26, 0x233fc4,29.90 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_neptune.jpg');
neptune.zVel = 5.4299794

const planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
const discardedPlanets = [];


spacecraft = new Spacecraft(
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
    const oldPlanetScale = PLANET_SCALE
    PLANET_SCALE = DISTANCE_SCALE * newPlanetScale
    for (const planet of planets) {
        let newPlanetRadius = planet.radius / oldPlanetScale * PLANET_SCALE
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
    moon.geometry = new THREE.SphereGeometry(1737.4 * PLANET_SCALE, 32, 16);

    issOrbitTrail.reset()
    ISS.position.set(earth.radius * 1.1, 0, 0);

    // jwst
    const newJwstScaleFactor = jwstScaleFactor * PLANET_SCALE / DISTANCE_SCALE / 10
    jwst.scale.set(newJwstScaleFactor, newJwstScaleFactor, newJwstScaleFactor);
    setJwstCameraOffset(new THREE.Vector3(newJwstScaleFactor * 3, newJwstScaleFactor * 3, newJwstScaleFactor * 3))

    updateEarthSystemScaling()

    if (targetPlanet && isCameraLocked) {
        cameraOffset = calcPlanetOffset(targetPlanet);
        camera.position.copy(targetPlanet.sphere.position).add(cameraOffset);
        camera.lookAt(targetPlanet.sphere.position);
    }
}

function updateEarthSystemScaling() {
    moonOrbitTrail.reset()
    moon.position.set(earth.radius * 60.3 * earthSystemScaling, 0, 0);

    // Jwst L2 Halo SIZE
    const newJwstDistance = earth.radius * 62.8 * earthSystemScaling
    jwst.position.set(newJwstDistance, 0, 0);
    jwstPlane.remove(jwstOrbit)
    jwstOrbit.geometry.dispose();
    jwstOrbit = createCircle(newJwstDistance, 0xA2A1A1,128);
    jwstPlane.add(jwstOrbit);

    if (jwstSelected) {
        updateJWSTPosition()
        const jwstWorldPosition = new THREE.Vector3();
        jwst.getWorldPosition(jwstWorldPosition);
        camera.position.copy(jwstWorldPosition).add(jwstCameraOffset);
        camera.lookAt(jwstWorldPosition);
    }

    toggleJWSTSelected(jwstSelected)
}

function setMenuSettings() { // set interface default values
    document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
        if (checkbox.id === "PAUSED_CB") checkbox.checked = PAUSED;
        else if (checkbox.id === "SHOW_LABEL_CB") checkbox.checked = SHOW_LABEL;
        else if (checkbox.id === "SHOW_ORBITS_CB") checkbox.checked = SHOW_ORBITS;
        else if (checkbox.id === "SHOW_SPACECRAFT_ORBIT_CB") checkbox.checked = SHOW_ORBITS;
        else if (checkbox.id === "HIGH_QUALITY_TEXTURES_CB") checkbox.checked = HIGH_QUALITY_TEXTURES;
        else if (checkbox.id === "SHOW_VECTORS_CB") checkbox.checked = SHOW_VECTORS;
        else if (checkbox.id === "REALISTIC_LIGHTING_CB") checkbox.checked = REALISTIC_LIGHTING;
        else if (checkbox.id === "EARTH_SYSTEM_SCALING_CB") checkbox.checked = earthSystemScaling !== 1;
        else if (checkbox.id === "TRUE_ROTATION_SPEEDS_CB") checkbox.checked = TRUE_ROTATION_SPEEDS;
        else if (checkbox.id === "ACTIVE_ASCENSION_AXIS_CB") checkbox.checked = ACTIVE_ASCENSION_AXIS;
        else if (checkbox.id === "SPACECRAFT_FIRST_PERSON_CB") checkbox.checked = spacecraftFirstPerson;
        else if (checkbox.id === "SPACECRAFT_GRAVITY_CB") checkbox.checked = spacecraftGravity;
        else if (checkbox.id === "SPACECRAFT_MATCH_VELOCITY_CB") checkbox.checked = spacecraftMatchVelocity;
        else if (checkbox.id === "SPACECRAFT_LIGHT_CB") checkbox.checked = spacecraftLight;
        else if (checkbox.id === "CAMERA_LOCK_CB") checkbox.checked = isCameraLocked;
        else if (checkbox.id === "CAMERA_SUN_LOCK_CB") checkbox.checked = isCameraSunLocked;
    });
    document.querySelectorAll("select").forEach((select) => {
        if (select.id === "DISTANCE_UNIT_SELECT") {
            select.value = distanceUnits.indexOf(distanceUnit).toString();
        }
    });
    updateTargetList(planets, spacecraftSelected)

    document.getElementById("simulation-speed").addEventListener("input", (event) => {
        const speedKeys = Object.keys(simulationSpeed);

        const sliderValue = event.target.value;
        const speedLabel = speedKeys[sliderValue]; // Map slider value to speed label
        const speedValue = simulationSpeed[speedLabel];

        document.getElementById("simulation-speed-display").textContent = speedLabel;
        TIME = 60 * 60 * speedValue; // update simulation speed
    });
    document.getElementById("spacecraft-fov").addEventListener("input", (event) => {
        const fovValue = event.target.value;
        document.getElementById("spacecraft-fov-display").textContent = `${fovValue}°`;

        SPACECRAFT_FOV = fovValue
        adjustFOV(SPACECRAFT_FOV)
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

changeBackground(backgroundTextures.indexOf(backgroundTexture).toString())
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
const moonGeometry = new THREE.SphereGeometry(1737.4 * PLANET_SCALE, 32, 16); // Smaller radius for the moon
const moonMapPath = 'planet_textures/2k/2k_moon.jpg'
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
moon.position.set(earth.radius * 60.3 * earthSystemScaling, 0, 0);
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
let jwstOrbit = createCircle(earth.radius * 62.8 * earthSystemScaling, 0xA2A1A1,128);
gltfLoader.load('models/jwst.glb' , (gltf) =>
{
    jwst = gltf.scene
    jwst.rotation.x = THREE.MathUtils.degToRad(90)

    jwstPlane.add(jwst)
    jwstPlane.add(jwstOrbit)

    jwst.position.set(earth.radius * 62.8 * earthSystemScaling, 0, 0);
    jwst.scale.set(jwstScaleFactor, jwstScaleFactor, jwstScaleFactor);
    jwstPlane.rotation.y = THREE.MathUtils.degToRad(90)

    const pointLight = new THREE.PointLight(0xffffff, 0.003, 10000 * DISTANCE_SCALE); // (color, intensity, distance)
    pointLight.position.set(1, 4, 0); // Set the light's position
    jwst.add(pointLight);
});

function toggleJWSTSelected(selected) {
    jwstSelected = selected
    if (jwstSelected) {
        scene.add(jwstPlane)
        jwstOrbit.visible = SHOW_ORBITS;
    }
    else scene.remove(jwstPlane)
}

function updateEarthSystemVisibility(visible) {
    if (visible) {
        moonPlane.position.copy(earth.sphere.position)
        issPlane.position.copy(earth.sphere.position)
        scene.add(jwstPlane)
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
    if (planet === targetPlanet && !planet.isSun && !spacecraftSelected) {
        cameraOffset = calcPlanetOffset(planet)
        toggleCameraLock(true)
        return
    }
    toggleTransitionAnimation(true)
    pushTextToLabel('Move to ' + planet.name)
    toggleSpacecraftSelected(false, planets)
    toggleJWSTSelected(false)
    if (SHOW_ORBITS) jwstOrbit.visible = false;
    inEarthSystem = (planet.name === "Earth");
    if(targetPlanet && !planet.isSun) targetPlanet.sphere.rotation.y = 0 // reset planet rotation

    let showLabelChanged = false
    if (SHOW_LABEL) {
        SHOW_LABEL = false // make label stop updating during transition
        showLabelChanged = true
    }

    isCameraLocked = false
    isCameraSunLocked = false
    updateEarthSystemVisibility(inEarthSystem)

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
            birdseye = topDown
            toggleCameraLock(!topDown && !PAUSED)
            toggleCameraSunLock(false)
            if (showLabelChanged) SHOW_LABEL = true
            if (SHOW_LABEL) updateLabel()
            updateSelectionElement("TARGET_SELECT", targets.indexOf(planet.name))
            toggleTransitionAnimation(false)
        }
    }

    animate();
}

function moveToSpacecraft() {  // todo: move camera to spacecraft smoothly
    birdseye = false;
    toggleJWSTSelected(false)
    setTargetPlanet(null)
    toggleSpacecraftSelected(true, planets)
    toggleCameraLock(true)
    toggleCameraSunLock(false)
    updateLabel()
    updateSelectionElement("TARGET_SELECT", targets.indexOf("Free flight"))
    // if (!PAUSED) spacecraft.container.rotation.z = THREE.MathUtils.lerp(spacecraft.container.rotation.z, Math.PI, 2.5) // do a flip
}

function moveToDefault() {
    toggleTransitionAnimation(true)
    isCameraLocked = false;
    isCameraSunLocked = false
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
            birdseye = true
            setTargetPlanet(null)
            toggleCameraLock(false)
            toggleCameraSunLock(false)
            if (SHOW_LABEL) updateLabel()
            updateSelectionElement("TARGET_SELECT", targets.indexOf("None"))
            toggleTransitionAnimation(false)
        }
    }
    animate();
}

function moveToJWST() {
    toggleTransitionAnimation(true)
    movingToJwst = true
    jwstOrbit.visible = false;
    toggleSpacecraftSelected(false, planets)
    pushTextToLabel('Move to James Webb Space Telescope')
    if(targetPlanet && !targetPlanet.isSun) targetPlanet.sphere.rotation.y = 0 // reset planet rotation
    let showLabelChanged = false
    if (SHOW_LABEL) {
        SHOW_LABEL = false // make label stop updating during transition
        showLabelChanged = true
    }

    isCameraLocked = false
    isCameraSunLocked = false

    updateJWSTPosition()

    const currentJwstScaleFactor = jwstScaleFactor * PLANET_SCALE / DISTANCE_SCALE / 10
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
            inEarthSystem = true
            birdseye = false
            updateEarthSystemVisibility(inEarthSystem)
            toggleJWSTSelected(true)
            toggleCameraLock(!PAUSED)
            toggleCameraSunLock(false)
            if (showLabelChanged) SHOW_LABEL = true
            if (SHOW_LABEL) updateLabel()
            updateSelectionElement("TARGET_SELECT", targets.indexOf("JWST"))
            movingToJwst = false
            toggleTransitionAnimation(false)
        }
    }
    animateJWST();
}

function updateJWSTPosition() {
    const d = earth.radius * 235.4 * earthSystemScaling
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
    if (inEarthSystem) {
        earth.sphere.rotation.y += TRUE_ROTATION_SPEEDS ? earth.rotationSpeed : -0.009
        // moon
        moonPlane.position.copy(earth.sphere.position); // centers moon orbit on earth
        moonPlane.rotation.y += TRUE_ROTATION_SPEEDS ? -0.0585 : -0.027;// moon orbit speed
        moonOrbitTrail.updateOrbitTrail(moon, earth.sphere)
        // iss
        issPlane.position.copy(earth.sphere.position); // centers moon orbit on earth
        issPlane.rotation.y += TRUE_ROTATION_SPEEDS ? -0.4446 : -0.2; // iss orbit speed (7.6x faster than the moon)
        issOrbitTrail.orbitTrailObj.rotation.y = earth.sphere.rotation.y
        issOrbitTrail.updateOrbitTrail(ISS, earth.sphere)
        // atmosphere
        earth.clouds.rotation.y = earth.sphere.rotation.y * 1.3
        return
    }
    if (targetPlanet && !targetPlanet.isSun) {
         if (targetPlanet === uranus) {
            targetPlanet.sphere.rotation.x += TRUE_ROTATION_SPEEDS ? targetPlanet.rotationSpeed : -0.009;
            return
        }
        targetPlanet.sphere.rotation.y += TRUE_ROTATION_SPEEDS ? targetPlanet.rotationSpeed : -0.009
        if (targetPlanet === venus) venus.atmosphere.rotation.y = venus.sphere.rotation.y * 1.2;
    }
}

function updateControls(controlsPosition) {
    controls.target.copy(controlsPosition);
    controls.update();
    controls2.target.copy(controls.target);
    controls2.update();
}

function render() { // runs with 60 fps
    if(!PAUSED) {
        for (const planet of planets) {
            planet.updatePosition(planets, SHOW_VECTORS)
        }
        rotateTargetPlanet()
        if (spacecraftSelected) {
            spacecraft.updatePosition(planets, sun.sphere.position)
            spacecraft.updateBolts()
            if (!portPressed && !starboardPressed) {
                spacecraft.container.rotation.z = THREE.MathUtils.lerp(spacecraft.container.rotation.z, 0, 0.08);
            }
            if (!forwardPressed) {
                spacecraft.obj.flame1.visible = false;
                spacecraft.obj.flame2.visible = false;
            }
            if (!backwardPressed) {
                spacecraft.obj.flame3.visible = false;
                spacecraft.obj.flame4.visible = false;
            }
            if (forwardPressed || backwardPressed) {
                spacecraft.flameMaterial.uniforms.time.value += 2500 * spacecraft.scale;
            }
            if ((!forwardPressed && !backwardPressed && !handbrakePressed) && (Math.round(camera.fov) !== SPACECRAFT_FOV)) {
                // spacecraft.obj.rotation.x = THREE.MathUtils.lerp(spacecraft.container.rotation.x, 0, 0.1);
                adjustFOV(SPACECRAFT_FOV)
            }
            // Smoothly reset to no tilt
            if ((forwardPressed || backwardPressed || portPressed || starboardPressed || rotatePortPressed || rotateStarboardPressed || handbrakePressed) && !spacecraftMatchVelocity) {
                spacecraft.changeMomentum()
            }
        }
        if (jwstSelected || movingToJwst) updateJWSTPosition()

        if (REALISTIC_LIGHTING) sunLight.position.copy(sun.sphere.position)
        if (SHOW_CONNECTION) drawConnection([sun.sphere.position, earth.sphere.position, jwstPlane.position], connectionGeo);
        if (SHOW_LABEL) updateLabel()
    }

    if (jwstSelected && !transitionAnimationActive) {
        const jwstWorldPosition = new THREE.Vector3();
        jwst.getWorldPosition(jwstWorldPosition);

        if (isCameraSunLocked) {
            const jwstOrbitWorldPosition = new THREE.Vector3();
            jwstOrbit.getWorldPosition(jwstOrbitWorldPosition);

            const d = 0.4 * earth.radius * 235.4 * earthSystemScaling
            const P3 = getPointXBeyondLine(sun.sphere.position, jwstOrbitWorldPosition, d)
            camera.position.copy(new THREE.Vector3(P3.x, 0, P3.z))
            camera.lookAt(jwstOrbitWorldPosition);

        } else if (isCameraLocked) {
            camera.position.copy(jwstWorldPosition).add(jwstCameraOffset);
            camera.lookAt(jwstWorldPosition);
        } else {
            updateControls(jwstWorldPosition)
        }
    } else if (spacecraftSelected) {
        if (isCameraLocked) {
            if (!targetPlanet) { // free flight
                const globalCameraPosition = new THREE.Vector3();
                if (spacecraftFirstPerson) spacecraft.obj.firstPersonCameraHelper.getWorldPosition(globalCameraPosition);
                else spacecraft.obj.cameraHelperFar.getWorldPosition(globalCameraPosition);
                camera.position.copy(globalCameraPosition);

                // camera look forward
                const localForward = new THREE.Vector3(0, 0, 1);
                const containerQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, spacecraft.container.rotation.y, 0));
                const objQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spacecraft.obj.rotation.x, 0, 0));
                const globalForward = localForward.applyQuaternion(containerQuat.multiply(objQuat));
                camera.lookAt(spacecraft.container.position.clone().add(globalForward.multiplyScalar(10)));

                // axis flip fix
                if (spacecraft.obj.rotation.x >= THREE.MathUtils.degToRad(90)) {
                    camera.rotation.z += THREE.MathUtils.degToRad(180)
                } else if (spacecraft.obj.rotation.x <= THREE.MathUtils.degToRad(-90)) {
                    camera.rotation.z -= THREE.MathUtils.degToRad(180)
                }
            }
            else { // spacecraft locked to planet
                const direction = new THREE.Vector3();
                direction.subVectors(targetPlanet.sphere.position, spacecraft.container.position);
                const yaw = Math.atan2(direction.x, direction.z); // Use atan2 to get the angle in the horizontal plane
                spacecraft.container.rotation.y = yaw; // no rotate animation

                const globalCameraPosition = new THREE.Vector3();
                if (spacecraftFirstPerson) spacecraft.obj.firstPersonCameraHelper.getWorldPosition(globalCameraPosition);
                else spacecraft.obj.cameraHelperClose.getWorldPosition(globalCameraPosition);

                camera.position.copy(globalCameraPosition);
                camera.lookAt(targetPlanet.sphere.position);
            }
            // first person camera tilt (only if first person and only while the tilt is still being lerped)
            // if (spacecraftFirstPerson) { // optimization (causes lags sometimes):  && (portPressed || starboardPressed || (Math.abs(spacecraft.container.rotation.z) > 0.0000005 && Math.abs(spacecraft.container.rotation.z) <= spacecraft.tiltAngle))
            //      //   almost works, but turning around y breaks z-rotation: solve by wrapping camera in container
            //     const zRotation = new THREE.Euler(0, 0, spacecraft.container.rotation.z, 'XYZ');
            //     const zQuaternion = new THREE.Quaternion();
            //     zQuaternion.setFromEuler(zRotation);
            //     camera.quaternion.multiplyQuaternions(zQuaternion, camera.quaternion);
            // }
        } else {
            updateControls(spacecraft.container.position)
        }
    }
    else if (targetPlanet && !transitionAnimationActive) {
        if (!isCameraSunLocked) sunLockedCameraDistance = 0
        if (isCameraSunLocked) {
            const d = (sunLockedCameraDistance > 0) ? sunLockedCameraDistance : targetPlanet.radius * AU * PLANET_SCALE / 10
            const P3 = getPointXBeyondLine(sun.sphere.position, targetPlanet.sphere.position, d)
            camera.position.copy(new THREE.Vector3(P3.x, 0, P3.z))
            camera.lookAt(targetPlanet.sphere.position);
        }
        else if (isCameraLocked) {
            camera.position.copy(targetPlanet.sphere.position).add(cameraOffset);
            camera.lookAt(targetPlanet.sphere.position);
        }
        else {
            updateControls(targetPlanet.sphere.position)
        }
    } else if (!transitionAnimationActive) { // default (0,0,0) target
        updateControls(new THREE.Vector3(0,0,0))
    }
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );
