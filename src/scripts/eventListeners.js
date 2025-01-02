import * as THREE from "three";
import {
    distanceUnits,
    backgroundGridTextures,
} from './data/constants.js';
import {state} from "./data/variables.js";
import {
    calcPlanetOffset,
    changeBackground,
    pushTextToLabel, setTargetPlanet, toggleCameraLock, toggleCameraSunLock,
    updateGridTexture,
    updateLabel,
    updateLighting, updateSelectionElement,
    updateTargetList,
} from "./design/designUtils.js";
import { camera, scene, textureLoader} from "./setup/scene.js";
import {getDistanceBetweenPoints} from "./utils.js";
import {Planet} from "./setup/classes.js";
import {earthCloud2kTexture, earthCloud8kTexture, sun2kTexture, sun8kTexture} from "./data/paths.js";

export function initEventListeners({
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
                                       jwstPlane,
                                       constellationSphere,
                                       connectionOutline,
                                       moveToPlanet,
                                       moveToSpacecraft,
                                       moveToDefault,
                                       moveToJWST,
                                       updateEarthSystemVisibility,
                                       updateEarthSystemScaling,
                                       setCameraOffset,
                                       setJwstCameraOffset,
                                   }) {
    // mouse controls
    window.addEventListener('mousedown', (event) => {
        if (!state.spacecraftSelected || event.target.nodeName !== 'CANVAS') return
        state.isMouseDown = true;
        document.querySelector('canvas').style.cursor = 'none'
        state.lastMousePosition.x = event.clientX; // Initialize last position
        state.lastMousePosition.y = event.clientY;
    });

    window.addEventListener('mousemove', (event) => {
        if (!state.spacecraftSelected || !state.isMouseDown || state.PAUSED) return; // Only track movement while mouse button is pressed

        let deltaX = event.clientX - state.lastMousePosition.x;
        let deltaY = event.clientY - state.lastMousePosition.y;

        deltaX = 100 * deltaX / window.innerWidth;
        deltaY = 100 * deltaY / window.innerHeight;

        // axis flip fix
        if ((state.spacecraft.obj.rotation.x >= THREE.MathUtils.degToRad(90)) || (state.spacecraft.obj.rotation.x <= THREE.MathUtils.degToRad(-90))) {
            deltaX *= -1
        }

        state.spacecraft.rotateSpacecraft(deltaY * state.spacecraft.angularVelocity, deltaX * state.spacecraft.angularVelocity)

        state.lastMousePosition.x = event.clientX;
        state.lastMousePosition.y = event.clientY;
    });

    window.addEventListener('mouseup', () => {
        document.querySelector('canvas').style.cursor = ''
        if (!state.spacecraftSelected) return
        state.isMouseDown = false;
    });

    // keyboard controls
    document.addEventListener('keyup', (event) => {
        if (state.spacecraftSelected) {
            if (event.key.toLowerCase() === 'w') {
                state.forwardPressed = false;
            }
            if (event.key.toLowerCase() === 'a') {
                state.portPressed = false;
            }
            if (event.key.toLowerCase() === 's') {
                state.backwardPressed = false;
            }
            if (event.key.toLowerCase() === 'd') {
                state.starboardPressed = false;
            }
            if (event.key === 'ArrowLeft') {
                state.rotatePortPressed = false;
            }
            if (event.key === 'ArrowRight') {
                state.rotateStarboardPressed = false;
            }
            if (event.key === 'Shift') {
                state.handbrakePressed = false;
            }
        }
    });
    window.addEventListener('keydown', (event) => {
        document.activeElement.blur();
        if (state.transitionAnimationActive) return
        if (event.code === 'Space') { // un/pause the game
            event.preventDefault();
            togglePause(!state.PAUSED)
        }
        if (state.spacecraftSelected) { // spacecraft controls
            if (event.key.toLowerCase() === 'w') {
                state.forwardPressed = true;
            }
            if (event.key.toLowerCase() === 'a') {
                state.portPressed = true;
            }
            if (event.key.toLowerCase() === 's') {
                state.backwardPressed = true;
            }
            if (event.key.toLowerCase() === 'd') {
                state.starboardPressed = true;
            }
            if (event.key === 'ArrowLeft') {
                state.rotatePortPressed = true;
            }
            if (event.key === 'ArrowRight') {
                state.rotateStarboardPressed = true;
            }
            if (event.key === 'Shift') {
                state.handbrakePressed = true;
            }
            if (event.key.toLowerCase() === 'b') {
                switchSpacecraftPerspective(!state.spacecraftFirstPerson)
            }
            if (event.key.toLowerCase() === 'h') {
                toggleShipLight(!state.spacecraftLight)
            }
            if (event.key.toLowerCase() === 'ü') {
                toggleAscensionAxis(!state.ACTIVE_ASCENSION_AXIS)
                return
            }
            if (event.key.toLowerCase() === 'g') {
                toggleSpacecraftGravity(!state.spacecraftGravity)
                toggleSpacecraftMatchVelocity(false)
                pushTextToLabel(state.spacecraftGravity ? 'Enable orbital mechanics' : 'Disable orbital mechanics');
                return
            }
            if (state.targetPlanet) {
                if (event.key.toLowerCase() === 'r') {
                    toggleSpacecraftMatchVelocity(!state.spacecraftMatchVelocity)
                    toggleSpacecraftGravity(false)
                    pushTextToLabel(state.spacecraftMatchVelocity ? 'Enable match velocity' : 'Disable match velocity');
                    return
                }
            }
            if (event.key === 'Control') {
                state.spacecraft.shoot()
            }
        }
        if (event.key.toLowerCase() === 'l') { // switch lighting
            toggleRealisticLighting(!state.REALISTIC_LIGHTING)
            return
        }
        if (event.key.toLowerCase() === 'k') {
            const grid_texture_index = backgroundGridTextures.indexOf(state.backgroundGrid)
            if (grid_texture_index < backgroundGridTextures.length - 1) cycleBackgroundGrid(backgroundGridTextures[grid_texture_index + 1])
            else cycleBackgroundGrid(backgroundGridTextures[0])
            return
        }
        if (event.key.toLowerCase() === 'z') {
            toggleTrueRotationSpeeds(!state.TRUE_ROTATION_SPEEDS)
            return
        }
        if (event.key.toLowerCase() === 'i') { // hide/show label
            toggleLabel(!state.SHOW_LABEL)
            return
        }
        if (event.key.toLowerCase() === 'u') { // cycle distance unit
            const unit_index = distanceUnits.indexOf(state.distanceUnit)
            if (unit_index < distanceUnits.length - 1) cycleDistanceUnit(distanceUnits[unit_index + 1])
            else cycleDistanceUnit(distanceUnits[0])
            return
        }
        if (event.key === 'Enter') {
            if (!state.spacecraftSelected) moveToSpacecraft();
            else moveToDefault()
        }
        if (event.key.toLowerCase() === 'e') { // lock/unlock camera to target planet
            switchCameraLock()
        }
        if ((event.key === 'Shift') && !state.spacecraftSelected) {
            if ((state.targetPlanet && state.targetPlanet.name !== "Sun") || state.jwstSelected) {
                switchCameraSunLock()
            }
        }
        if (event.key.toLowerCase() === 's' && !state.spacecraftSelected) {
            if (state.targetPlanet) state.targetPlanet.changeSpeed(0.8)
        }
        if (event.key.toLowerCase() === 'f' && !state.spacecraftSelected) {
            if (state.targetPlanet) state.targetPlanet.changeSpeed(1.2)
        }
        if (event.key.toLowerCase() === 'm') {
            if (state.targetPlanet) state.targetPlanet.changeMass(2)
        }
        if (event.key.toLowerCase() === 'n') {
            if (state.targetPlanet) state.targetPlanet.changeMass(0.5)
        }
        if (event.key.toLowerCase() === 'c') {
            pushTextToLabel('Move to Sun')
            moveToPlanet(sun, true);
        }
        if (event.key.toLowerCase() === '.') {
            if (state.targetPlanet && !state.targetPlanet.isSun) {
                transformTargetPlanet();
            }
        }
        if (event.key.toLowerCase() === 'x') {
            moveToDefault()
        }
        if (event.key.toLowerCase() === 'o') {
            if (event.altKey) {
                toggleSpacecraftOrbit()
                return
            }
            toggleOrbits(!state.SHOW_ORBITS)
        }
        if (event.key.toLowerCase() === 'q') {
            toggleHighQualityTextures(!state.HIGH_QUALITY_TEXTURES)
        }
        if (event.key.toLowerCase() === 'p') {
            resetAllOrbits()
        }
        if (event.key.toLowerCase() === 'v') {
            toggleVectors(!state.SHOW_VECTORS)
        }
        if (event.key.toLowerCase() === 't') {
            state.SHOW_CONNECTION = !state.SHOW_CONNECTION
            pushTextToLabel(state.SHOW_CONNECTION ? 'Show connection' : 'Hide connection')
            if (state.SHOW_CONNECTION) {
                scene.add(connectionOutline);
            } else {
                scene.remove(connectionOutline);
            }
        }
        if (event.key >= '0' && event.key <= '9') {
            const number = parseInt(event.key);
            if (planets[number]) {
                if (!state.spacecraftSelected && event.altKey) altMoveToPlanet(planets[number])
                else changeTarget(state.targets.indexOf(planets[number].name))
            }
        }
        if (event.key.toLowerCase() === 'j') {
            moveToJWST();
        }
    });

    // interface controls
    document.getElementById('PAUSED').addEventListener("change", (event) => {
        togglePause(event.target.checked)
    });
    document.getElementById('SHOW_LABEL').addEventListener("change", (event) => {
        toggleLabel(event.target.checked)
    });
    document.getElementById('SHOW_ORBITS').addEventListener("change", (event) => {
        toggleOrbits(event.target.checked)
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
    document.getElementById('EARTH_SYSTEM_SCALING').addEventListener("change", (event) => {
        toggleEarthSystemScaling(event.target.checked)
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
    document.getElementById('BACKGROUND_SELECT').addEventListener("change", (event) => {
        changeBackground(event.target.value)
    });
    document.getElementById('BACKGROUND_GRID_SELECT').addEventListener("change", (event) => {
        cycleBackgroundGrid(backgroundGridTextures[event.target.value])
    });
    document.getElementById('SPACECRAFT_FIRST_PERSON').addEventListener("change", (event) => {
        switchSpacecraftPerspective(event.target.checked)
    });
    document.getElementById('SPACECRAFT_GRAVITY').addEventListener("change", (event) => {
        toggleSpacecraftGravity(event.target.checked)
        pushTextToLabel(state.spacecraftGravity ? 'Enable orbital mechanics' : 'Disable orbital mechanics');
    });
    document.getElementById('SPACECRAFT_MATCH_VELOCITY').addEventListener("change", (event) => {
        toggleSpacecraftMatchVelocity(event.target.checked)
        pushTextToLabel(state.spacecraftMatchVelocity ? 'Enable match velocity' : 'Disable match velocity');
    });
    document.getElementById('SPACECRAFT_LIGHT').addEventListener("change", (event) => {
        toggleShipLight(event.target.checked)
    });
    document.getElementById('TARGET_SELECT').addEventListener("change", (event) => {
        changeTarget(event.target.value)
    });
    document.getElementById('decrease-speed').addEventListener("click", () => {
        state.targetPlanet.changeSpeed(0.8)
    });
    document.getElementById('increase-speed').addEventListener("click", () => {
        state.targetPlanet.changeSpeed(1.2)
    });
    document.getElementById('decrease-mass').addEventListener("click", () => {
        state.targetPlanet.changeMass(0.5)
    });
    document.getElementById('increase-mass').addEventListener("click", () => {
        state.targetPlanet.changeMass(2)
    });
    document.getElementById('TRANSFORM_PLANET').addEventListener("click", () => {
        transformTargetPlanet()
    });
    document.getElementById('TOGGLE_SPACECRAFT_BTN').addEventListener("click", () => {
        if (!state.spacecraftSelected) moveToSpacecraft();
        else moveToDefault()
    });
    document.getElementById('RESET_ORBITS_BTN').addEventListener("click", () => {
        resetAllOrbits()
    });
    document.getElementById('CAMERA_LOCK').addEventListener("change", (event) => {
        switchCameraLock()
    });
    document.getElementById('CAMERA_SUN_LOCK').addEventListener("change", (event) => {
        switchCameraSunLock()
    });

    function togglePause(pause) {
        state.PAUSED = pause;
        pushTextToLabel(state.PAUSED ? 'Pause' : 'Unpause')
        document.getElementById('PAUSED_CB').checked = state.PAUSED
        if (state.birdseye) {
            toggleCameraLock(false)
            return
        }

        if (state.spacecraftSelected) toggleCameraLock(true)
        else if(state.targetPlanet || state.jwstSelected) {
            toggleCameraLock(!state.PAUSED)
            if (state.PAUSED) {
                state.cameraSunLockChanged = state.isCameraSunLocked;
                state.isCameraSunLocked = false
            } else if (state.cameraSunLockChanged) {
                if (state.targetPlanet) state.sunLockedCameraDistance = getDistanceBetweenPoints(state.targetPlanet.sphere.position, camera.position)
                state.isCameraSunLocked = true
            }

            if(state.jwstSelected) {
                const jwstWorldPosition = new THREE.Vector3();
                jwst.getWorldPosition(jwstWorldPosition);
                if (state.isCameraLocked) setJwstCameraOffset(new THREE.Vector3().subVectors(camera.position, jwstWorldPosition))
            } else if (state.targetPlanet) {
                if (state.isCameraLocked) setCameraOffset(new THREE.Vector3().subVectors(camera.position, state.targetPlanet.sphere.position))
            }
        }
    }

    // scene update functionality
    function toggleLabel(visible) {
        state.SHOW_LABEL = visible
        pushTextToLabel(state.SHOW_LABEL ? 'Show info label' : 'Hide info label')
        document.getElementById('SHOW_LABEL_CB').checked = state.SHOW_LABEL
        updateLabel()
    }
    function toggleOrbits(visible) {
        state.SHOW_ORBITS = visible
        pushTextToLabel(state.SHOW_ORBITS ? 'Show orbits' : 'Hide orbits')
        document.getElementById('SHOW_ORBITS_CB').checked = state.SHOW_ORBITS
        for (const planet of [...planets, ...discardedPlanets]) {
            if (state.SHOW_ORBITS) scene.add(planet.orbitLine);
            else scene.remove(planet.orbitLine);
        }
        state.spacecraft.toggleOrbitLine(state.SHOW_ORBITS)
        document.getElementById('SHOW_SPACECRAFT_ORBIT_CB').checked = state.SHOW_ORBITS
        if (state.inEarthSystem) {
            moonOrbitTrail.updateOrbitTrail(moon, earth.sphere)
            issOrbitTrail.updateOrbitTrail(ISS, earth.sphere)
        }
        jwstPlane.children[1].visible = state.SHOW_ORBITS;
    }
    function toggleSpacecraftOrbit() {
        state.spacecraft.toggleOrbitLine(state.spacecraft.orbitLine.parent === null)
        document.getElementById('SHOW_SPACECRAFT_ORBIT_CB').checked = state.spacecraft.orbitLine.parent !== null
        pushTextToLabel(state.SHOW_ORBITS ? 'Show spacecraft orbit' : 'Hide spacecraft orbits')
    }
    function toggleHighQualityTextures(enable) {
        state.HIGH_QUALITY_TEXTURES = enable;
        document.getElementById('HIGH_QUALITY_TEXTURES_CB').checked = state.HIGH_QUALITY_TEXTURES

        pushTextToLabel(state.HIGH_QUALITY_TEXTURES ? 'Texture quality: 8k' : 'Texture quality: 2k')
        document.getElementById('loading-screen').style.display = ''
        for (const planet of planets) {
            if (planet.lowQMapPath && planet.highQMapPath) {
                const texture = textureLoader.load(state.HIGH_QUALITY_TEXTURES && planet.highQMapPath ? planet.highQMapPath : planet.lowQMapPath);
                texture.colorSpace = THREE.SRGBColorSpace
                planet.sphere.material.map = texture
            }
            if (planet.ring && planet.ring.lowQMapPath && planet.ring.highQMapPath) {
                const alphaTexture = textureLoader.load(state.HIGH_QUALITY_TEXTURES && planet.ring.highQMapPath ? planet.ring.highQMapPath : planet.ring.lowQMapPath);
                alphaTexture.colorSpace = THREE.SRGBColorSpace
                alphaTexture.anisotropy = 32;  // Improve texture quality if needed
                planet.ring.ringObj.material.map = alphaTexture
            }
        }
        const earthCloudTexture = textureLoader.load(state.HIGH_QUALITY_TEXTURES ? earthCloud8kTexture.href : earthCloud2kTexture.href)
        earthCloudTexture.colorSpace = THREE.SRGBColorSpace
        earth.clouds.material.alphaMap = earthCloudTexture
    }
    function toggleVectors(enable) {
        state.SHOW_VECTORS = enable;
        document.getElementById('SHOW_VECTORS_CB').checked = state.SHOW_VECTORS

        pushTextToLabel(state.SHOW_VECTORS ? 'Show planetary vectors' : 'Hide planetary vectors')
        for (const planet of planets) {
            planet.updateVectorLines(0,0, state.SHOW_VECTORS)
        }
        state.spacecraft.updateVectorLines(0,0,0)
    }
    function toggleRealisticLighting(enable) {
        state.REALISTIC_LIGHTING = enable;
        document.getElementById('REALISTIC_LIGHTING_CB').checked = state.REALISTIC_LIGHTING

        pushTextToLabel(state.REALISTIC_LIGHTING ? 'Enable realistic lighting' : 'Disable realistic lighting');
        updateLighting()
    }
    function toggleEarthSystemScaling(enable) {
        state.earthSystemScaling = enable ? 0.1 : 1
        document.getElementById('EARTH_SYSTEM_SCALING_CB').checked = enable

        updateEarthSystemScaling();
        pushTextToLabel(enable ? 'Switch to scaled down earth system' : 'Switch to true scale earth system')
    }
    function toggleTrueRotationSpeeds(enable) {
        state.TRUE_ROTATION_SPEEDS = enable;
        document.getElementById('TRUE_ROTATION_SPEEDS_CB').checked = state.TRUE_ROTATION_SPEEDS

        pushTextToLabel(state.TRUE_ROTATION_SPEEDS ? 'Enable accurate rotation speeds' : 'Disable accurate rotation speeds')
    }
    function toggleAscensionAxis(enable) {
        state.ACTIVE_ASCENSION_AXIS = enable
        document.getElementById('ACTIVE_ASCENSION_AXIS_CB').checked = state.ACTIVE_ASCENSION_AXIS

        pushTextToLabel(state.ACTIVE_ASCENSION_AXIS ? 'Enable ascension axis' : 'Disable ascension axis');
        if (!state.ACTIVE_ASCENSION_AXIS) {
            state.spacecraft.container.position.y = 0;
            state.spacecraft.obj.rotation.x = 0;
            state.spacecraft.yVel = 0;
        }
        updateLabel()
    }
    function cycleDistanceUnit(unitValue) {
        state.distanceUnit = unitValue
        document.getElementById('DISTANCE_UNIT_SELECT').value = distanceUnits.indexOf(state.distanceUnit).toString();

        pushTextToLabel('Cycle distance unit')
        updateLabel();
    }
    function cycleBackgroundGrid(texture) {
        state.backgroundGrid = texture
        document.getElementById('BACKGROUND_GRID_SELECT').value = backgroundGridTextures.indexOf(state.backgroundGrid).toString();

        updateGridTexture(constellationSphere);
    }
    function switchSpacecraftPerspective(firstPerson) {
        state.spacecraftFirstPerson = firstPerson
        document.getElementById('SPACECRAFT_FIRST_PERSON_CB').checked = state.spacecraftFirstPerson
        pushTextToLabel(state.spacecraftFirstPerson ? 'Enable cockpit view' : 'Disable cockpit view');
    }
    function toggleSpacecraftGravity(enable) {
        state.spacecraftGravity = enable
        document.getElementById('SPACECRAFT_GRAVITY_CB').checked = state.spacecraftGravity
    }
    function toggleSpacecraftMatchVelocity(enable) {
        state.spacecraftMatchVelocity = enable
        document.getElementById('SPACECRAFT_MATCH_VELOCITY_CB').checked = state.spacecraftMatchVelocity
    }
    function toggleShipLight(enable) {
        state.spacecraftLight = enable
        document.getElementById('SPACECRAFT_LIGHT_CB').checked = state.spacecraftLight

        state.spacecraftLight = enable
        pushTextToLabel(state.spacecraftLight ? 'Enable spacecraft light' : 'Disable spacecraft light');
        state.spacecraft.obj.shipLight.visible = state.spacecraftLight
    }
    function changeTarget(targetIdx) {
        const targetName = state.targets[targetIdx]

        if (state.spacecraftSelected) {
            if (targetName === "Free flight") {
                pushTextToLabel('Enable free flight')
                moveToSpacecraft()
            }else { //  target is a planet
                let targetP = planets.find(planet => planet.name === targetName);
                altMoveToPlanet(targetP)
                // document.getElementById('target-planet-settings').style.color = convertRGBToHex(targetP.colorHex)
            }
        } else {
            if (targetName === "None") {
                moveToDefault();
            } else if (targetName === "JWST") {
                moveToJWST();
            } else { //  target is a planet
                let targetP = planets.find(planet => planet.name === targetName);
                moveToPlanet(targetP);
                // document.getElementById('target-planet-settings').style.color = convertRGBToHex(targetP.colorHex)
            }
        }
    }
    function altMoveToPlanet(planet) {
        if (planet === state.targetPlanet) return
        pushTextToLabel('Target: ' + planet.name)
        if (!state.spacecraftSelected) state.birdseye = true
        setTargetPlanet(planet)
        if (state.SHOW_LABEL) updateLabel()
        if (state.spacecraftSelected) document.getElementById("SPACECRAFT_MATCH_VELOCITY").classList.remove('disabled')
        updateSelectionElement("TARGET_SELECT", state.targets.indexOf(planet.name))
    }
    function transformTargetPlanet() {
        pushTextToLabel('Turn ' + state.targetPlanet.name + ' into a star')
        const newSun = new Planet(
            state.targetPlanet.name + " (Star)",
            696340 * state.PLANET_SCALE,
            0,
            150 * 365,
            1.98892 * 10 ** 30,
            state.targetPlanet.colorHex,
            state.targetPlanet.sphere.position.x,
            0,
            state.targetPlanet.sphere.position.z,
            true,
            state.HIGH_QUALITY_TEXTURES ? sun8kTexture.href : sun2kTexture.href
        );
        newSun.xVel = state.targetPlanet.xVel;
        newSun.yVel = state.targetPlanet.yVel;
        newSun.zVel = state.targetPlanet.zVel;
        newSun.orbits.push(state.targetPlanet.orbits[state.targetPlanet.orbits.length - 2]);
        newSun.orbits.push(state.targetPlanet.orbits[state.targetPlanet.orbits.length - 1]);
        if (state.SHOW_ORBITS) newSun.drawOrbits()
        for (let i = 0; i <= planets.length - 1; i++) {
            if (planets[i] === state.targetPlanet) {
                scene.remove(planets[i].sphere)
                if (planets[i].ring) scene.remove(planets[i].ring.ringObj)
                if (planets[i].atmosphere) scene.remove(planets[i].atmosphere)
                if (planets[i].clouds) scene.remove(planets[i].clouds)
                if (state.targetPlanet.name === "Earth") {
                    state.inEarthSystem = false;
                    updateEarthSystemVisibility(false);
                }
                planets[i].updateVectorLines(null, null, state.SHOW_VECTORS, true)

                planets[i] = newSun
                planets[i].updatePosition(planets)

                discardedPlanets.push(state.targetPlanet)
                updateTargetList(planets, state.spacecraftSelected, state.targetPlanet.name)
                setTargetPlanet(newSun)
                if (!state.spacecraftSelected) {
                    toggleCameraLock(false)
                    toggleCameraSunLock(false)
                    if(!state.birdseye) camera.position.copy(state.targetPlanet.sphere.position).add(calcPlanetOffset(state.targetPlanet));
                }
                return
            }
        }
    }
    function resetAllOrbits() {
        pushTextToLabel('Reset orbits')
        for (const planet of [...planets, ...discardedPlanets]) {
            planet.resetOrbit()
        }
        discardedPlanets.length = 0 // clear discarded planets array
        state.spacecraft.resetOrbit()
    }
    function switchCameraLock() {
        if (state.spacecraftSelected) {
            pushTextToLabel(state.isCameraLocked ? 'Unlock camera' : 'Lock camera')
            if (state.isCameraLocked) {
                toggleCameraLock(false)
                toggleCameraSunLock(false)
            } else {
                toggleCameraLock(true)
                const spacecraftWorldPosition = new THREE.Vector3();
                state.spacecraft.obj.getWorldPosition(spacecraftWorldPosition);
            }
            return
        }

        if (state.jwstSelected && !state.PAUSED) {
            pushTextToLabel(state.isCameraLocked ? 'Unlock camera' : 'Lock camera')
            if (state.isCameraLocked) {
                toggleCameraLock(false)
                toggleCameraSunLock(false)
            } else {
                toggleCameraLock(true)
                const jwstWorldPosition = new THREE.Vector3();
                jwst.getWorldPosition(jwstWorldPosition);

                setJwstCameraOffset(new THREE.Vector3().subVectors(camera.position, jwstWorldPosition))
            }
            return
        }

        if (state.targetPlanet && !state.PAUSED) {
            pushTextToLabel(state.isCameraLocked ? 'Unlock camera' : 'Lock camera')
            if (state.isCameraLocked) {
                toggleCameraLock(false)
                toggleCameraSunLock(false)
            } else {
                toggleCameraLock(true)
                setCameraOffset(new THREE.Vector3().subVectors(camera.position, state.targetPlanet.sphere.position))
            }
        }
    }
    function switchCameraSunLock() {
        if (!state.PAUSED) {
            toggleCameraSunLock(!state.isCameraSunLocked)
            pushTextToLabel(state.isCameraSunLocked ? 'Lock camera to sun' : 'Unlock camera from sun')
            if (state.isCameraSunLocked && state.targetPlanet) state.sunLockedCameraDistance = getDistanceBetweenPoints(state.targetPlanet.sphere.position, camera.position)
            else if (!state.isCameraSunLocked) {
                state.cameraSunLockChanged = false
                if (state.targetPlanet) setCameraOffset(calcPlanetOffset(state.targetPlanet))
                else if (state.jwstSelected) setCameraOffset(jwstCameraOffset)
            }
        } else {
            state.cameraSunLockChanged = !state.cameraSunLockChanged
            pushTextToLabel(state.cameraSunLockChanged ? 'Lock camera to sun' : 'Unlock camera from sun')
            document.getElementById('CAMERA_SUN_LOCK_CB').checked = state.cameraSunLockChanged
        }
    }
}
