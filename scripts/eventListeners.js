import * as THREE from "three";
import {
    calcPlanetOffset,
    pushTextToLabel,
    toggleSpacecraftSelected,
    updateGridTexture,
    updateLabel,
    updateLighting
} from "./design/designUtils";
import {adjustFOV, camera, scene, textureLoader} from "./setup/scene";
import {getDistanceBetweenPoints} from "./utils";
import {Planet} from "./setup/classes";

export function initEventListeners({
                                       controls,
                                       jwstCameraOffset,
                                       planets,
                                       discardedPlanets,
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
                                   }) {
    window.addEventListener('mousedown', (event) => {
        if (!spacecraftSelected) return
        isMouseDown = true;
        document.querySelector('canvas').style.cursor = 'none'
        lastMousePosition.x = event.clientX; // Initialize last position
        lastMousePosition.y = event.clientY;
    });

    window.addEventListener('mousemove', (event) => {
        if (!spacecraftSelected || !isMouseDown || PAUSED) return; // Only track movement while mouse button is pressed

        let deltaX = event.clientX - lastMousePosition.x;
        let deltaY = event.clientY - lastMousePosition.y;

        deltaX = 100 * deltaX / window.innerWidth;
        deltaY = 100 * deltaY / window.innerHeight;

        // axis flip fix
        if ((spacecraft.obj.rotation.x >= THREE.MathUtils.degToRad(90)) || (spacecraft.obj.rotation.x <= THREE.MathUtils.degToRad(-90))) {
            deltaX *= -1
        }

        spacecraft.rotateSpacecraft(deltaY * spacecraft.angularVelocity, deltaX * spacecraft.angularVelocity)

        lastMousePosition.x = event.clientX;
        lastMousePosition.y = event.clientY;
    });

    window.addEventListener('mouseup', () => {
        document.querySelector('canvas').style.cursor = ''
        if (!spacecraftSelected) return
        isMouseDown = false;
    });
    document.addEventListener('keyup', (event) => {
        if (spacecraftSelected) {
            if (event.key.toLowerCase() === 'w') {
                forwardPressed = false;
            }
            if (event.key.toLowerCase() === 'a') {
                portPressed = false;
            }
            if (event.key.toLowerCase() === 's') {
                backwardPressed = false;
            }
            if (event.key.toLowerCase() === 'd') {
                starboardPressed = false;
            }
            if (event.key === 'ArrowLeft') {
                rotatePortPressed = false;
            }
            if (event.key === 'ArrowRight') {
                rotateStarboardPressed = false;
            }
            if (event.key === 'Shift') {
                handbrakePressed = false;
            }
        }
    });
    window.addEventListener('keydown', (event) => {
        document.activeElement.blur();
        if (event.code === 'Space') { // un/pause the game
            togglePause(!PAUSED)
        }
        if (spacecraftSelected) { // spacecraft controls
            if (event.key.toLowerCase() === 'w') {
                forwardPressed = true;
            }
            if (event.key.toLowerCase() === 'a') {
                portPressed = true;
            }
            if (event.key.toLowerCase() === 's') {
                backwardPressed = true;
            }
            if (event.key.toLowerCase() === 'd') {
                starboardPressed = true;
            }
            if (event.key === 'ArrowLeft') {
                rotatePortPressed = true;
            }
            if (event.key === 'ArrowRight') {
                rotateStarboardPressed = true;
            }
            if (event.key === 'Shift') {
                handbrakePressed = true;
            }
            if (event.key.toLowerCase() === 'b') {
                switchSpacecraftPerspective(!spacecraftFirstPerson)
            }
            if (event.key.toLowerCase() === 'h') {
                toggleShipLight(!spacecraftLight)
            }
            if (event.key.toLowerCase() === 'ü') {
                toggleAscensionAxis(!ACTIVE_ASCENSION_AXIS)
                return
            }
            if (event.key.toLowerCase() === 'g') {
                toggleSpacecraftGravity(!spacecraftGravity)
                toggleSpacecraftMatchVelocity(false)
                pushTextToLabel(spacecraftGravity ? 'Enable orbital mechanics' : 'Disable orbital mechanics');
                return
            }
            if (targetPlanet) {
                if (event.key.toLowerCase() === 'r') {
                    toggleSpacecraftMatchVelocity(!spacecraftMatchVelocity)
                    toggleSpacecraftGravity(false)
                    pushTextToLabel(spacecraftMatchVelocity ? 'Enable match velocity' : 'Disable match velocity');
                    return
                }
            }
            if (event.key === 'Control') {
                spacecraft.shoot()
            }
        }
        if (event.key.toLowerCase() === 'l') { // switch lighting
            toggleRealisticLighting(!REALISTIC_LIGHTING)
            return
        }
        if (event.key.toLowerCase() === 'k') {
            const grid_texture_index = backgroundTextures.indexOf(backgroundGrid)
            if (grid_texture_index < backgroundTextures.length - 1) cycleBackgroundGrid(backgroundTextures[grid_texture_index + 1])
            else cycleBackgroundGrid(backgroundTextures[0])
            return
        }
        if (event.key.toLowerCase() === 'z') {
            toggleTrueRotationSpeeds(!TRUE_ROTATION_SPEEDS)
            return
        }
        if (event.key.toLowerCase() === 'i') { // hide/show label
            toggleLabel(!SHOW_LABEL)
            return
        }
        if (event.key.toLowerCase() === 'u') { // cycle distance unit
            // if (SHOW_LABEL && ((targetPlanet && !targetPlanet.isSun) || spacecraftSelected)) { // only update if planet is selected
                const unit_index = distanceUnits.indexOf(distanceUnit)
                if (unit_index < distanceUnits.length - 1) cycleDistanceUnit(distanceUnits[unit_index + 1])
                else cycleDistanceUnit(distanceUnits[0])
            // }
            return
        }
        if (event.key === 'Enter') { // todo: move camera to spacecraft smoothly
            jwstSelected = false
            targetPlanet = null
            isCameraLocked = true
            toggleSpacecraftSelected(true)
            updateLabel()
            // if (!PAUSED) spacecraft.container.rotation.z = THREE.MathUtils.lerp(spacecraft.container.rotation.z, Math.PI, 2.5) // do a flip
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
                }
                return
            }

            if (jwstSelected && !PAUSED) {
                pushTextToLabel(isCameraLocked ? 'Unlock camera' : 'Lock camera')
                if (isCameraLocked) {
                    isCameraLocked = false
                    isCameraSunLocked = false
                } else {
                    isCameraLocked = true;
                    const jwstWorldPosition = new THREE.Vector3();
                    jwst.getWorldPosition(jwstWorldPosition);

                    setJwstCameraOffset(new THREE.Vector3().subVectors(camera.position, jwstWorldPosition))
                }
                return
            }

            if (targetPlanet && !PAUSED) {
                pushTextToLabel(isCameraLocked ? 'Unlock camera' : 'Lock camera')
                if (isCameraLocked) {
                    isCameraLocked = false
                    isCameraSunLocked = false
                } else {
                    isCameraLocked = true;
                    setCameraOffset(new THREE.Vector3().subVectors(camera.position, targetPlanet.sphere.position))
                }
            }
            return
        }
        if ((event.key === 'Shift') && !spacecraftSelected) {
            if (targetPlanet || jwstSelected) {
                if (!PAUSED) {
                    isCameraSunLocked = !isCameraSunLocked
                    pushTextToLabel(isCameraSunLocked ? 'Lock camera to sun' : 'Unlock camera from sun')
                    if (isCameraSunLocked && targetPlanet) sunLockedCameraDistance = getDistanceBetweenPoints(targetPlanet.sphere.position, camera.position)
                    else if (!isCameraSunLocked) {
                        cameraSunLockChanged = false
                        if(targetPlanet) setCameraOffset(calcPlanetOffset(targetPlanet))
                        else if (jwstSelected) setCameraOffset(jwstCameraOffset)
                    }
                } else {
                    if (cameraSunLockChanged) {
                        cameraSunLockChanged = false
                        pushTextToLabel('Unlock camera from sun')
                    }
                }
            }
        }
        if (event.key.toLowerCase() === 's' && !spacecraftSelected) {
            pushTextToLabel('Decrease planet speed')
            if (targetPlanet) {
                targetPlanet.xVel *= 0.8
                targetPlanet.yVel *= 0.8
                targetPlanet.zVel *= 0.8
            }
        }
        if (event.key.toLowerCase() === 'f') {
            pushTextToLabel('Increase planet speed')
            if (targetPlanet) {
                targetPlanet.xVel *= 1.2
                targetPlanet.yVel *= 1.2
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
                const newSun = new Planet(targetPlanet.name + " (Star)", 696340 * PLANET_SCALE, 0, 150 * 365, 1.98892 * 10 ** 30, targetPlanet.colorHex, targetPlanet.sphere.position.x, 0, targetPlanet.sphere.position.z, true, 'planet_textures/2k/2k_sun.jpg', 'planet_textures/8k/8k_sun.jpg'); // 'planet_textures/2k/2k_sun.jpg'
                newSun.xVel = targetPlanet.xVel;
                newSun.yVel = targetPlanet.yVel;
                newSun.zVel = targetPlanet.zVel;
                newSun.orbits.push(targetPlanet.orbits[targetPlanet.orbits.length - 2]);
                newSun.orbits.push(targetPlanet.orbits[targetPlanet.orbits.length - 1]);
                if (SHOW_ORBITS) newSun.drawOrbits()
                for (let i = 0; i <= planets.length - 1; i++) {
                    if (planets[i] === targetPlanet) {
                        scene.remove(planets[i].sphere)
                        if (planets[i].ring) scene.remove(planets[i].ring.ringObj)
                        if (planets[i].atmosphere) scene.remove(planets[i].atmosphere)
                        if (planets[i].clouds) scene.remove(planets[i].clouds)
                        if (targetPlanet.name === "Earth") {
                            inEarthSystem = false;
                            updateEarthSystemVisibility(false);
                        }
                        planets[i].updateVectorLines(null, null, SHOW_VECTORS, true)

                        planets[i] = newSun
                        discardedPlanets.push(targetPlanet)
                        targetPlanet = newSun
                        if (!spacecraftSelected) {
                            isCameraLocked = false
                            if(!birdseye) camera.position.copy(targetPlanet.sphere.position).add(calcPlanetOffset(targetPlanet));
                        }
                        return
                    }
                }
            }
        }
        if (event.key.toLowerCase() === 'x') {
            isCameraLocked = false;
            jwstSelected = false;
            isCameraSunLocked = false
            toggleSpacecraftSelected(false)
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
            if (event.altKey) {
                toggleSpacecraftOrbit()
                return
            }
            togglePlanetOrbits(!SHOW_ORBITS)
        }
        if (event.key.toLowerCase() === 'q') {
            toggleHighQualityTextures(!HIGH_QUALITY_TEXTURES)
        }
        if (event.key.toLowerCase() === 'p') {
            pushTextToLabel('Reset orbits')
            for (const planet of [...planets, ...discardedPlanets]) {
                planet.resetOrbit()
            }
            discardedPlanets.length = 0 // clear discarded planets array
            spacecraft.resetOrbit()
        }
        if (event.key.toLowerCase() === 'v') {
            toggleVectors(!SHOW_VECTORS)
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
                if (event.altKey) {
                    if (planets[number] === targetPlanet && spacecraftSelected) return
                    birdseye = true
                    targetPlanet = planets[number]
                    if (SHOW_LABEL) {
                        updateLabel()
                    }
                }
                else moveToPlanet(planets[number]);
                pushTextToLabel('Move to ' + planets[number].name)
            }
        }
        if (event.key.toLowerCase() === 'j') {
            toggleSpacecraftSelected(false)
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
    document.getElementById('PAUSED').addEventListener("change", (event) => {
        togglePause(event.target.checked)
    });
    document.getElementById('SHOW_LABEL').addEventListener("change", (event) => {
        toggleLabel(event.target.checked)
    });
    document.getElementById('SHOW_ORBITS').addEventListener("change", (event) => {
        togglePlanetOrbits(event.target.checked)
    });
    document.getElementById('SHOW_SPACECRAFT_ORBIT').addEventListener("change", (event) => {
        toggleSpacecraftOrbit()
    });
    document.getElementById('HIGH_QUALITY_TEXTURES').addEventListener("change", (event) => {
        toggleHighQualityTextures(event.target.checked)
    });
    document.getElementById('SHOW_VECTORS').addEventListener("change", (event) => {
        toggleVectors(event.target.checked)
    });
    document.getElementById('REALISTIC_LIGHTING').addEventListener("change", (event) => {
        toggleRealisticLighting(event.target.checked)
    });
    document.getElementById('TRUE_ROTATION_SPEEDS').addEventListener("change", (event) => {
        toggleTrueRotationSpeeds(event.target.checked)
    });
    document.getElementById('ACTIVE_ASCENSION_AXIS').addEventListener("change", (event) => {
        toggleAscensionAxis(event.target.checked)
    });
    document.getElementById('DISTANCE_UNIT_SELECT').addEventListener("change", (event) => {
        cycleDistanceUnit(distanceUnits[event.target.value])
    });
    document.getElementById('BACKGROUND_GRID_SELECT').addEventListener("change", (event) => {
        cycleBackgroundGrid(backgroundTextures[event.target.value])
    });
    document.getElementById('SPACECRAFT_FIRST_PERSON').addEventListener("change", (event) => {
        switchSpacecraftPerspective(event.target.checked)
    });
    document.getElementById('SPACECRAFT_GRAVITY').addEventListener("change", (event) => {
        toggleSpacecraftGravity(event.target.checked)
        pushTextToLabel(spacecraftGravity ? 'Enable orbital mechanics' : 'Disable orbital mechanics');
    });
    document.getElementById('SPACECRAFT_MATCH_VELOCITY').addEventListener("change", (event) => {
        toggleSpacecraftMatchVelocity(event.target.checked)
        pushTextToLabel(spacecraftMatchVelocity ? 'Enable match velocity' : 'Disable match velocity');
    });
    document.getElementById('SPACECRAFT_LIGHT').addEventListener("change", (event) => {
        toggleShipLight(event.target.checked)
    });


    let cameraSunLockChanged = false;
    function togglePause(pause) {
        PAUSED = pause;
        pushTextToLabel(PAUSED ? 'Pause' : 'Unpause')
        document.getElementById('PAUSED_CB').checked = PAUSED

        if (spacecraftSelected) isCameraLocked = true
        else {
            isCameraLocked = !PAUSED
            if (PAUSED && !jwstSelected) {
                cameraSunLockChanged = isCameraSunLocked;
                isCameraSunLocked = false
            } else if (cameraSunLockChanged) {
                sunLockedCameraDistance = getDistanceBetweenPoints(targetPlanet.sphere.position, camera.position)
                isCameraSunLocked = true
            }

            if(jwstSelected) {
                const jwstWorldPosition = new THREE.Vector3();
                jwst.getWorldPosition(jwstWorldPosition);
                if (isCameraLocked) setJwstCameraOffset(new THREE.Vector3().subVectors(camera.position, jwstWorldPosition))
            } else if (targetPlanet) {
                if (isCameraLocked) setCameraOffset(new THREE.Vector3().subVectors(camera.position, targetPlanet.sphere.position))
            }
        }
    }

    // scene update functionality
    function toggleLabel(visible) {
        SHOW_LABEL = visible
        pushTextToLabel(SHOW_LABEL ? 'Show info label' : 'Hide info label')
        document.getElementById('SHOW_LABEL_CB').checked = SHOW_LABEL
        updateLabel()
    }
    function togglePlanetOrbits(visible) {
        SHOW_ORBITS = visible
        pushTextToLabel(SHOW_ORBITS ? 'Show orbits' : 'Hide orbits')
        document.getElementById('SHOW_ORBITS_CB').checked = SHOW_ORBITS
        for (const planet of [...planets, ...discardedPlanets]) {
            if (SHOW_ORBITS) scene.add(planet.orbitLine);
            else scene.remove(planet.orbitLine);
        }
        spacecraft.toggleOrbitLine(SHOW_ORBITS)
        document.getElementById('SHOW_SPACECRAFT_ORBIT_CB').checked = SHOW_ORBITS
        if (inEarthSystem) {
            moonOrbitTrail.updateOrbitTrail(moon, earth.sphere)
            issOrbitTrail.updateOrbitTrail(ISS, earth.sphere)
        }
        jwstOrbit.visible = SHOW_ORBITS;
    }
    function toggleSpacecraftOrbit() {
        spacecraft.toggleOrbitLine(spacecraft.orbitLine.parent === null)
        document.getElementById('SHOW_SPACECRAFT_ORBIT_CB').checked = spacecraft.orbitLine.parent !== null
        pushTextToLabel(SHOW_ORBITS ? 'Show spacecraft orbit' : 'Hide spacecraft orbits')
    }
    function toggleHighQualityTextures(enable) {
        HIGH_QUALITY_TEXTURES = enable;
        document.getElementById('HIGH_QUALITY_TEXTURES_CB').checked = HIGH_QUALITY_TEXTURES

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
    function toggleVectors(enable) {
        SHOW_VECTORS = enable;
        document.getElementById('SHOW_VECTORS_CB').checked = SHOW_VECTORS

        pushTextToLabel(SHOW_VECTORS ? 'Show planetary vectors' : 'Hide planetary vectors')
        for (const planet of planets) {
            planet.updateVectorLines(0,0, SHOW_VECTORS)
        }
    }
    function toggleRealisticLighting(enable) {
        REALISTIC_LIGHTING = enable;
        document.getElementById('REALISTIC_LIGHTING_CB').checked = REALISTIC_LIGHTING

        pushTextToLabel(REALISTIC_LIGHTING ? 'Enable realistic lighting' : 'Disable realistic lighting');
        updateLighting()
    }
    function toggleTrueRotationSpeeds(enable) {
        TRUE_ROTATION_SPEEDS = enable;
        document.getElementById('TRUE_ROTATION_SPEEDS_CB').checked = TRUE_ROTATION_SPEEDS

        pushTextToLabel(TRUE_ROTATION_SPEEDS ? 'Enable accurate rotation speeds' : 'Disable accurate rotation speeds')
    }
    function toggleAscensionAxis(enable) {
        ACTIVE_ASCENSION_AXIS = enable
        document.getElementById('ACTIVE_ASCENSION_AXIS_CB').checked = ACTIVE_ASCENSION_AXIS

        pushTextToLabel(ACTIVE_ASCENSION_AXIS ? 'Enable ascension axis' : 'Disable ascension axis');
        if (!ACTIVE_ASCENSION_AXIS) {
            spacecraft.container.position.y = 0;
            spacecraft.obj.rotation.x = 0;
            spacecraft.yVel = 0;
        }
        updateLabel()
    }
    function cycleDistanceUnit(unitValue) {
        distanceUnit = unitValue
        document.getElementById('DISTANCE_UNIT_SELECT').value = distanceUnits.indexOf(distanceUnit).toString();

        pushTextToLabel('Cycle distance unit')
        updateLabel();
    }
    function cycleBackgroundGrid(texture) {
        backgroundGrid = texture
        document.getElementById('BACKGROUND_GRID_SELECT').value = backgroundTextures.indexOf(backgroundGrid).toString();

        updateGridTexture(constellationSphere);
    }
    function switchSpacecraftPerspective(firstPerson) {
        spacecraftFirstPerson = firstPerson
        document.getElementById('SPACECRAFT_FIRST_PERSON_CB').checked = spacecraftFirstPerson
        pushTextToLabel(spacecraftFirstPerson ? 'Enable cockpit view' : 'Disable cockpit view');
    }
    function toggleSpacecraftGravity(enable) {
        spacecraftGravity = enable
        document.getElementById('SPACECRAFT_GRAVITY_CB').checked = spacecraftGravity
    }
    function toggleSpacecraftMatchVelocity(enable) {
        spacecraftMatchVelocity = enable
        document.getElementById('SPACECRAFT_MATCH_VELOCITY_CB').checked = spacecraftMatchVelocity
    }
    function toggleShipLight(enable) {
        spacecraftLight = enable
        document.getElementById('SPACECRAFT_LIGHT_CB').checked = spacecraftLight

        spacecraftLight = enable
        pushTextToLabel(spacecraftLight ? 'Enable spacecraft light' : 'Disable spacecraft light');
        spacecraft.obj.shipLight.visible = spacecraftLight
    }
}
