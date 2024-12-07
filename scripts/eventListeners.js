import * as THREE from "three";
import {calcPlanetOffset, pushTextToLabel, updateGridTexture, updateLabel, updateLighting} from "./design/designUtils";
import {camera, scene, textureLoader} from "./setup/scene";
import {getDistanceBetweenPoints} from "./utils";
import {Planet} from "./setup/classes";

export function initEventListeners({
                                       controls,
                                       cameraOffset,
                                       jwstCameraOffset,
                                       planets,
                                       sun,
                                       earth,
                                       moon,
                                       moonOrbitTrail,
                                       ISS,
                                       issOrbitTrail,
                                       jwst,
                                       jwstOrbit,
                                       jwstPlane,
                                       constellationSphere,
                                       connectionOutline,
                                       moveToPlanet,
                                       updateEarthSystemVisibility,
                                       updateJWSTPosition,
                                       setCameraOffset,
                                       setJwstCameraOffset,
                                       setSpacecraftCameraOffset,
                                   }) {
    document.addEventListener('keyup', (event) => {
        if (spacecraftSelected) {
            if (event.key === 'ArrowUp') {
                forwardPressed = false;
            }
            if (event.key === 'ArrowDown') {
                backwardPressed = false;
            }
            if (event.key === 'ArrowLeft') {
                portPressed = false;
            }
            if (event.key === 'ArrowRight') {
                starboardPressed = false;
            }
            if (event.key.toLowerCase() === 'a') {
                rotatePortPressed = false;
            }
            if (event.key.toLowerCase() === 'd') {
                rotateStarboardPressed = false;
            }
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space') { // un/pause the game
            PAUSED = !PAUSED;
            pushTextToLabel(PAUSED ? 'Pause' : 'Unpause')
            return
        }
        if (spacecraftSelected) { // spacecraft controls
            if (event.key === 'ArrowUp') {
                forwardPressed = true;
            }
            if (event.key === 'ArrowDown') {
                backwardPressed = true;
            }
            if (event.key === 'ArrowLeft') {
                portPressed = true;
            }
            if (event.key === 'ArrowRight') {
                starboardPressed = true;
            }
            if (event.key.toLowerCase() === 'a') {
                rotatePortPressed = true;
            }
            if (event.key.toLowerCase() === 'd') {
                rotateStarboardPressed = true;
            }
        }
        if (event.key.toLowerCase() === 'l') { // switch lighting
            REALISTIC_LIGHTING = !REALISTIC_LIGHTING;
            pushTextToLabel(REALISTIC_LIGHTING ? 'Enable realistic lighting' : 'Disable realistic lighting');
            updateLighting()
            return
        }
        if (event.key.toLowerCase() === 'g') {
            spacecraftGravity = !spacecraftGravity;
            pushTextToLabel(spacecraftGravity ? 'Enable orbital mechanics' : 'Disable orbital mechanics');
            return
        }
        if (event.key.toLowerCase() === 'k') {
            const grid_texture_index = backgroundTextures.indexOf(backgroundGrid)
            if (grid_texture_index < backgroundTextures.length - 1) backgroundGrid = backgroundTextures[grid_texture_index + 1]
            else backgroundGrid = backgroundTextures[0]
            updateGridTexture(constellationSphere);
            return
        }
        if (event.key.toLowerCase() === 'r') {
            TRUE_ROTATION_SPEEDS = !TRUE_ROTATION_SPEEDS;
            pushTextToLabel(TRUE_ROTATION_SPEEDS ? 'Enable accurate rotation speeds' : 'Disable accurate rotation speeds')
        }
        if (event.key.toLowerCase() === 'i') { // hide/show label
            SHOW_LABEL = !SHOW_LABEL;
            pushTextToLabel(SHOW_LABEL ? 'Show planet info' : 'Hide planet info')
            updateLabel()
            return
        }
        if (event.key.toLowerCase() === 'u') { // cycle distance unit
            if (SHOW_LABEL && ((targetPlanet && !targetPlanet.isSun) || spacecraftSelected)) { // only update if planet is selected
                const unit_index = distanceUnits.indexOf(distanceUnit)
                if (unit_index < distanceUnits.length - 1) distanceUnit = distanceUnits[unit_index + 1]
                else distanceUnit = distanceUnits[0]
                pushTextToLabel('Cycle distance unit')
                updateLabel();
            }
            return
        }
        if (event.key === 'Enter') { // todo: move camera to spacecraft smoothly
            jwstSelected = false
            targetPlanet = null
            spacecraftSelected = true
            isCameraLocked = true
        }
        if (event.key.toLowerCase() === 'e') { // lock/unlock camera to target planet
            if (spacecraftSelected) {
                pushTextToLabel(isCameraLocked ? 'Unlock camera' : 'Lock camera')
                if (isCameraLocked) {
                    isCameraLocked = false
                    isCameraSunLocked = false
                } else {
                    isCameraLocked = true;
                    const spacecraftWorldPosition = new THREE.Vector3();
                    spacecraft.obj.getWorldPosition(spacecraftWorldPosition);

                    if (PAUSED) setSpacecraftCameraOffset(new THREE.Vector3().subVectors(camera.position, spacecraftWorldPosition));
                    else setSpacecraftCameraOffset(spacecraft.calcSpacecraftCameraOffset())
                }
                return
            }

            if (jwstSelected) {
                pushTextToLabel(isCameraLocked ? 'Unlock camera' : 'Lock camera')
                if (isCameraLocked) {
                    isCameraLocked = false
                    isCameraSunLocked = false
                } else {
                    isCameraLocked = true;
                    const jwstWorldPosition = new THREE.Vector3();
                    jwst.getWorldPosition(jwstWorldPosition);

                    if (PAUSED) setJwstCameraOffset(new THREE.Vector3().subVectors(camera.position, jwstWorldPosition))
                    else setCameraOffset(jwstCameraOffset)
                }
                return
            }

            if (targetPlanet) {
                pushTextToLabel(isCameraLocked ? 'Unlock camera' : 'Lock camera')
                if (isCameraLocked) {
                    isCameraLocked = false
                    isCameraSunLocked = false
                } else {
                    isCameraLocked = true;
                    if (PAUSED) setCameraOffset(new THREE.Vector3().subVectors(camera.position, targetPlanet.sphere.position))
                    else setCameraOffset(calcPlanetOffset(targetPlanet))
                }
            }
            return
        }
        if (event.shiftKey) {
            if (targetPlanet || jwstSelected) {
                isCameraSunLocked = !isCameraSunLocked
                pushTextToLabel(isCameraSunLocked ? 'Lock camera to sun' : 'Unlock camera from sun')
                if (isCameraSunLocked && !isCameraLocked && targetPlanet) sunLockedCameraDistance = getDistanceBetweenPoints(targetPlanet.sphere.position, camera.position)
            }
        }
        if (event.key.toLowerCase() === 's') {
            pushTextToLabel('Decrease planet speed')
            if (targetPlanet) {
                targetPlanet.xVel *= 0.8
                targetPlanet.zVel *= 0.8
            }
        }
        if (event.key.toLowerCase() === 'f') {
            pushTextToLabel('Increase planet speed')
            if (targetPlanet) {
                targetPlanet.xVel *= 1.2
                targetPlanet.zVel *= 1.2
            }
        }
        if (event.key.toLowerCase() === 'm') {
            pushTextToLabel('Double planet mass')
            if (targetPlanet) {
                targetPlanet.mass *= 2
            }
        }
        if (event.key.toLowerCase() === 'n') {
            pushTextToLabel('Half planet mass')
            if (targetPlanet) {
                targetPlanet.mass *= 0.5
            }
        }
        if (event.key.toLowerCase() === 'c') {
            pushTextToLabel('Move to Sun')
            moveToPlanet(sun, true);
        }
        if (event.key.toLowerCase() === '.') {
            if (targetPlanet && !targetPlanet.isSun) {
                pushTextToLabel('Evolve planet into a star')
                const newSun = new Planet(targetPlanet.name + "Sun", 696340 * PLANET_SCALE, 0, 150 * 365, 1.98892 * 10 ** 30, targetPlanet.colorHex, targetPlanet.sphere.position.x, 0, targetPlanet.sphere.position.z, true, 'planet_textures/2k/2k_sun.jpg', 'planet_textures/8k/8k_sun.jpg'); // 'planet_textures/2k/2k_sun.jpg'
                newSun.xVel = targetPlanet.xVel;
                newSun.zVel = targetPlanet.zVel;
                newSun.orbits = targetPlanet.orbits;
                for (let i = 0; i < planets.length - 1; i++) {
                    if (planets[i] === targetPlanet) {
                        scene.remove(planets[i].sphere)
                        if (planets[i].ring) scene.remove(planets[i].ring.ringObj)
                        if (planets[i].atmosphere) scene.remove(planets[i].atmosphere)
                        if (planets[i].clouds) scene.remove(planets[i].clouds)
                        if (targetPlanet.name === "Earth") updateEarthSystemVisibility(false);
                        planets[i].updateVectorLines(null, null, SHOW_VECTORS, true)

                        planets[i] = newSun
                        targetPlanet = newSun
                        if (isCameraLocked) moveToPlanet(targetPlanet)
                        return
                    }
                }
            }
        }
        if (event.key.toLowerCase() === 'x') {
            isCameraLocked = false;
            jwstSelected = false;
            spacecraftSelected = false;
            isCameraSunLocked = false
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
                    targetPlanet = null;
                    if (SHOW_LABEL) updateLabel()
                }
            }
            animate();
        }
        if (event.key.toLowerCase() === 'o') {
            SHOW_ORBITS = !SHOW_ORBITS;
            pushTextToLabel(SHOW_ORBITS ? 'Show Orbits' : 'Hide Orbits')
            for (const planet of planets) {
                if (SHOW_ORBITS) scene.add(planet.orbitLine);
                else scene.remove(planet.orbitLine);
            }
            if (inEarthSystem) {
                moonOrbitTrail.updateOrbitTrail(moon, earth.sphere)
                issOrbitTrail.updateOrbitTrail(ISS, earth.sphere)
            }
            jwstOrbit.visible = SHOW_ORBITS;
        }
        if (event.key.toLowerCase() === 'q') {
            HIGH_QUALITY_TEXTURES = !HIGH_QUALITY_TEXTURES;
            pushTextToLabel(HIGH_QUALITY_TEXTURES ? 'Texture quality: 8k' : 'Texture quality: 2k')
            document.getElementById('loading-screen').style.display = ''
            for (const planet of planets) {
                if (planet.lowQMapPath && planet.highQMapPath) {
                    const texture = textureLoader.load(HIGH_QUALITY_TEXTURES ? planet.highQMapPath : planet.lowQMapPath);
                    texture.colorSpace = THREE.SRGBColorSpace
                    planet.sphere.material.map = texture
                }
                if (planet.ring && planet.ring.lowQMapPath && planet.ring.highQMapPath) {
                    const alphaTexture = textureLoader.load(HIGH_QUALITY_TEXTURES ? planet.ring.highQMapPath : planet.ring.lowQMapPath);
                    alphaTexture.colorSpace = THREE.SRGBColorSpace
                    alphaTexture.anisotropy = 32;  // Improve texture quality if needed
                    planet.ring.ringObj.material.map = alphaTexture
                }
            }
            const earthCloudTexture = textureLoader.load(HIGH_QUALITY_TEXTURES ? 'planet_textures/8k/8k_earth_clouds.jpg' : 'planet_textures/2k/2k_earth_clouds.jpg')
            earthCloudTexture.colorSpace = THREE.SRGBColorSpace
            earth.clouds.material.alphaMap = earthCloudTexture
        }
        if (event.key.toLowerCase() === 'p') {
            pushTextToLabel('Reset orbits')
            for (const planet of planets) {
                planet.resetOrbit()
            }
            spacecraft.resetOrbit()
        }
        if (event.key.toLowerCase() === 'v') {
            SHOW_VECTORS = !SHOW_VECTORS;
            pushTextToLabel(SHOW_VECTORS ? 'Show planetary vectors' : 'Hide planetary vectors')

            for (const planet of planets) {
                planet.updateVectorLines(0,0, SHOW_VECTORS)
            }
        }
        if (event.key.toLowerCase() === 't') {
            SHOW_CONNECTION = !SHOW_CONNECTION
            pushTextToLabel(SHOW_CONNECTION ? 'Show connection' : 'Hide connection')
            if (SHOW_CONNECTION) {
                scene.add(connectionOutline);
            } else {
                scene.remove(connectionOutline);
            }
        }
        if (event.key >= '0' && event.key <= '9') {
            isCameraSunLocked = false
            const number = parseInt(event.key);
            if (planets[number]) {
                pushTextToLabel('Move to ' + planets[number].name)
                if (event.altKey) {
                    birdseye = true
                    targetPlanet = planets[number]
                    if (SHOW_LABEL) {
                        updateLabel()
                    }
                }
                else moveToPlanet(planets[number]);
            }
        }
        if (event.key.toLowerCase() === 'j') {
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
            const jwstWorldPosition = new THREE.Vector3();
            jwst.getWorldPosition(jwstWorldPosition);

            const targetPosition = jwstWorldPosition
            setJwstCameraOffset(new THREE.Vector3(jwstScaleFactor * 3, jwstScaleFactor * 3, jwstScaleFactor * 3))
            setCameraOffset(jwstCameraOffset)
            targetPosition.x += jwstCameraOffset.x
            targetPosition.y += jwstCameraOffset.y
            targetPosition.z += jwstCameraOffset.z

            const duration = 1; // Duration the movement in seconds
            const startPosition = camera.position.clone();
            const startTime = performance.now()

            function animateJWST() {
                const elapsed = (performance.now() - startTime) / 1000; // Convert to seconds
                const t = Math.min(elapsed / duration, 1); // Normalize time to [0, 1]
                camera.position.lerpVectors(startPosition, targetPosition, t); // Smoothly move camera
                controls.target.copy(jwstWorldPosition); // Update the OrbitControls target to the new planet
                controls.update(); // Update controls to apply the new target

                if (t < 1) {
                    requestAnimationFrame(animateJWST); // Continue animation
                } else { // animation is finished
                    targetPlanet = null;
                    scene.add(jwstPlane)
                    if (SHOW_ORBITS) jwstOrbit.visible = true;
                    jwstSelected = true
                    inEarthSystem = true
                    isCameraLocked = true
                    if (showLabelChanged) SHOW_LABEL = true
                    if (SHOW_LABEL) updateLabel()
                }
            }

            animateJWST();
        }
    });
}
