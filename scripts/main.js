import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {
    calcPlanetOffset,
    createCircle,
    createStars,
    drawConnection,
    updateLabel, updateLighting
} from "./design/designUtils";
import { getPointXBeyondLine } from "./utils";
import {
    scene,
    camera,
    renderer,
    textureLoader,
    exrLoader,
    gltfLoader,
    sunLight, loadingManager, adjustFOV
} from './setup/scene';
import {OrbitTrail, Planet, Ring, Spacecraft} from "./setup/classes";
import { initEventListeners } from "./eventListeners";


// setup
const controls = new OrbitControls( camera, renderer.domElement );
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
const jupiterRing = new Ring(jupiter, 1.4, 1.5, 0xC0B09E,0.9)
jupiter.ring = jupiterRing

const saturn = new Planet("Saturn", 58232 * PLANET_SCALE,  0, 10.5,5.683 * 10 ** 26, 0xd3cc81,9.538 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_saturn.jpg', 'planet_textures/8k/8k_saturn.jpg');
saturn.zVel = 9.679981775672;
const saturnRing = new Ring(saturn, 1.6, 2.7, 0xdcc49d, 1, 'planet_textures/2k/2k_saturn_ring_alpha.png') // todo
saturn.ring = saturnRing

const uranus = new Planet("Uranus", 25362 * PLANET_SCALE, 97.7, 17,8.681 * 10 ** 25, 0x51dbdb,19.56 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_uranus.jpg');
uranus.zVel = 6.7999974;
const uranusRing = new Ring(uranus, 1.5, 1.6, 0xb0ffff, 0.5)
uranus.ring = uranusRing

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
const leftElement = document.getElementById('loaded-elements-left');
const rightElement = document.getElementById('loaded-elements-right');
function addLoadedItem(item) {
    leftElement.innerHTML += item + "<br>";
    if (leftElement.scrollHeight > leftElement.offsetHeight) {
        leftElement.innerHTML = leftElement.innerHTML.replace(item + "<br>", '');
        rightElement.innerHTML += item + "<br>";
    }
}

loadingManager.onProgress = ( item, loaded, total ) =>  {
    document.getElementById('loading-progress').innerHTML = loaded + "/" + total + "<br>" + item
    addLoadedItem(item)
}
loadingManager.onLoad = ()=>{
    document.getElementById('loading-screen').style.display = 'none'
    if (firstLoad) {
        initEventListeners({
            controls: controls,
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
            jwstOrbit: jwstOrbit,
            jwstPlane: jwstPlane,
            constellationSphere: constellationSphere,
            connectionOutline: connectionOutline,
            moveToPlanet: moveToPlanet,
            updateEarthSystemVisibility: updateEarthSystemVisibility,
            updateJWSTPosition: updateJWSTPosition,
            setCameraOffset: setCameraOffset,
            setJwstCameraOffset: setJwstCameraOffset,
        })
    }
    if (firstLoad) { // todo: only temp
        spacecraftSelected = true
        isCameraLocked = true
    }
    firstLoad = false
}

updateLighting()

// create star background
const stars = createStars()
scene.add(stars);

// exrLoader.load('starmaps/starmap_2020_8k.exr' , (starmapTexture) =>
// exrLoader.load('starmaps/starmap_2020_4k_gal.exr' , (starmapTexture) =>
// exrLoader.load('starmaps/starmap_2020_8k_gal.exr' , (starmapTexture) =>
// {
//     starmapTexture.mapping = THREE.EquirectangularReflectionMapping
//     // scene.environment = starmapTexture; // Set environment for reflections
//     scene.background = starmapTexture;
// });

// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1;

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
moon.position.set(0.002606 * AU * DISTANCE_SCALE, 0, 0); // Position of moon relative to planet
moon.rotation.y = Math.PI;
moonPlane.position.copy(moon.position);
moonPlane.rotation.x = THREE.MathUtils.degToRad(5.14); // axis tilt

const moonOrbitTrail = new OrbitTrail(200, 0xA2A1A1, false) // 250 for full circle


// create ISS
const issPlane = new THREE.Object3D();
let ISS = null
let issOrbitTrail = null
const issScaleFactor = 0.000001

gltfLoader.load('models/ISS_stationary.glb' , (gltf) =>
{
    ISS = gltf.scene
    // ISS.rotation.x = THREE.MathUtils.degToRad(90)

    issPlane.add(ISS)

    ISS.position.set(earth.radius * 1.1, 0, 0);
    ISS.rotation.y = THREE.MathUtils.degToRad(90);
    ISS.scale.set(issScaleFactor, issScaleFactor, issScaleFactor);
    issPlane.rotation.x = THREE.MathUtils.degToRad(51.6);

    issPlane.position.copy(ISS.position);

    issOrbitTrail = new OrbitTrail(3000, 0xFF00A6, true)
    issOrbitTrail.orbitTrailObj.rotation.x = THREE.MathUtils.degToRad(23.5);
});



// create James Webb space telescope
let jwst = null
const jwstPlane = new THREE.Object3D();
const jwstOrbit = createCircle(jwstCenterDistance, 0xA2A1A1,128);
gltfLoader.load('models/jwst.glb' , (gltf) =>
{
    jwst = gltf.scene
    jwst.rotation.x = THREE.MathUtils.degToRad(90)

    jwstPlane.add(jwst)
    jwstPlane.add(jwstOrbit)

    jwst.position.set(jwstCenterDistance, 0, 0);
    jwst.scale.set(jwstScaleFactor, jwstScaleFactor, jwstScaleFactor);
    jwstPlane.rotation.y = THREE.MathUtils.degToRad(90)
});


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
    spacecraftSelected = false
    jwstSelected = false
    if (SHOW_ORBITS) jwstOrbit.visible = false;
    inEarthSystem = (planet.name === "Earth");
    if (planet === targetPlanet && !planet.isSun) return;
    if(targetPlanet && !planet.isSun) targetPlanet.sphere.rotation.y = 0 // reset planet rotation

    let showLabelChanged = false
    if (SHOW_LABEL) {
        SHOW_LABEL = false // make label stop updating during transition
        showLabelChanged = true
    }

    isCameraLocked = false
    isCameraSunLocked = false
    let targetPosition = null
    updateEarthSystemVisibility(inEarthSystem)

    if (topDown) targetPosition = new THREE.Vector3(planet.sphere.position.x, planet.sphere.position.y + 40, planet.sphere.position.z);
    else targetPosition = new THREE.Vector3(planet.sphere.position.x, planet.sphere.position.y, planet.sphere.position.z)

    cameraOffset = calcPlanetOffset(planet)
    targetPosition.x += cameraOffset.x
    targetPosition.y += cameraOffset.y
    targetPosition.z += cameraOffset.z

    const duration = 1; // Duration the movement in seconds
    const startPosition = camera.position.clone();
    const startTime = performance.now();

    function animate() {
        const elapsed = (performance.now() - startTime) / 1000; // Convert to seconds
        const t = Math.min(elapsed / duration, 1); // Normalize time to [0, 1]
        camera.position.lerpVectors(startPosition, targetPosition, t); // Smoothly move camera
        controls.target.copy(planet.sphere.position); // Update the OrbitControls target to the new planet
        controls.update(); // Update controls to apply the new target

        if (t < 1) {
            requestAnimationFrame(animate); // Continue animation
        } else { // animation is finished
            targetPlanet = planet;
            birdseye = topDown
            if (!topDown) isCameraLocked = true
            if (showLabelChanged) SHOW_LABEL = true
            if (SHOW_LABEL) updateLabel()
        }
    }

    animate();
}

function updateJWSTPosition() {
    const d = 0.010027 * AU * DISTANCE_SCALE
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

function render() { // runs with 60 fps
    if(!PAUSED) {
        for (const planet of planets) {
            planet.updatePosition(planets, SHOW_VECTORS)
        }
        rotateTargetPlanet()
        if (spacecraftSelected) {
            spacecraft.updatePosition(planets, sun.sphere.position)
            if (!portPressed && !starboardPressed) {
                spacecraft.container.rotation.z = THREE.MathUtils.lerp(spacecraft.container.rotation.z, 0, 0.08);
            }
            if (!forwardPressed) {
                spacecraft.obj.flame1.visible = false;
                spacecraft.obj.flame2.visible = false;
            } else {
                spacecraft.flameMaterial.uniforms.time.value += 2500 * spacecraft.scale;
            }
            if ((!forwardPressed && !backwardPressed && !handbrakePressed) && (Math.round(camera.fov) !== STANDARD_FOV)) {
                // spacecraft.obj.rotation.x = THREE.MathUtils.lerp(spacecraft.container.rotation.x, 0, 0.1);
                adjustFOV(STANDARD_FOV)
            }
            // Smoothly reset to no tilt
            if ((forwardPressed || backwardPressed || portPressed || starboardPressed || rotatePortPressed || rotateStarboardPressed || handbrakePressed) && !spacecraftMatchVelocity) {
                spacecraft.changeMomentum()
            }
        }
        if (jwstSelected) updateJWSTPosition()

        if (REALISTIC_LIGHTING) sunLight.position.copy(sun.sphere.position)
        if (SHOW_CONNECTION) drawConnection([sun.sphere.position, earth.sphere.position, jwstPlane.position], connectionGeo);
        if (SHOW_LABEL) updateLabel()
    }

    if (jwstSelected) {
        const jwstWorldPosition = new THREE.Vector3();
        jwst.getWorldPosition(jwstWorldPosition);

        if (isCameraSunLocked) {
            const jwstOrbitWorldPosition = new THREE.Vector3();
            jwstOrbit.getWorldPosition(jwstOrbitWorldPosition);

            const d = 0.0006 * AU * DISTANCE_SCALE
            const P3 = getPointXBeyondLine(sun.sphere.position, jwstOrbitWorldPosition, d)
            camera.position.copy(new THREE.Vector3(P3.x, 0, P3.z))
            camera.lookAt(jwstOrbitWorldPosition);

        } else if (isCameraLocked) {
            camera.position.copy(jwstWorldPosition).add(jwstCameraOffset);
            camera.lookAt(jwstWorldPosition);
        } else {
            controls.target.copy(jwstWorldPosition);
            controls.update();
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
                // const spacecraftQuaternion = new THREE.Quaternion();
                // spacecraftQuaternion.setFromEuler(spacecraft.container.rotation);
                // camera.rotation.setFromQuaternion(spacecraftQuaternion);
                // camera.rotation.y += Math.PI
            // }
        } else {
            controls.target.copy(spacecraft.container.position);
            controls.update();
        }
    }
    else if (targetPlanet) {
        if (!isCameraSunLocked) sunLockedCameraDistance = 0
        if (isCameraSunLocked) {
            const d = (sunLockedCameraDistance > 0) ? sunLockedCameraDistance : targetPlanet.radius * AU * DISTANCE_SCALE
            const P3 = getPointXBeyondLine(sun.sphere.position, targetPlanet.sphere.position, d)
            camera.position.copy(new THREE.Vector3(P3.x, 0, P3.z))
            camera.lookAt(targetPlanet.sphere.position);
        }
        else if (isCameraLocked) {
            camera.position.copy(targetPlanet.sphere.position).add(cameraOffset);
            camera.lookAt(targetPlanet.sphere.position);
        }
        else {
            controls.target.copy(targetPlanet.sphere.position);
            controls.update();
        }
    }
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );
