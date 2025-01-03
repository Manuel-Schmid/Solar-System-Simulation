import * as THREE from "three";
import {
    AU,
    LM,
    c,
    DISTANCE_SCALE,
    backgroundTextures,
} from '../data/constants.js';
import {state} from "../data/variables.js";
import {convertDistance, convertHexTo0x, convertHexToRGB} from "../utils.js";
import {
    adjustFOV,
    brightAmbientLight, controls, controls2,
    exrLoader,
    scene,
    softAmbientLight,
    sunLight,
    textureLoader
} from "../setup/scene.js";

export function createStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000; // Number of stars
    const positions = new Float32Array(starCount * 3); // x, y, z for each star
    const colors = new Float32Array(starCount * 3); // r, g, b for each star

    const colorOptions = [
        new THREE.Color().setHex( convertHexTo0x("#ffffff") ), // white
        new THREE.Color().setHex( convertHexTo0x("#f3a4a4") ), // red
        new THREE.Color().setHex( convertHexTo0x("#cbb9ea") ), // purple
        new THREE.Color().setHex( convertHexTo0x("#f6c68e") ), // yellow

        // new THREE.Color().setHex( convertHexTo0x("#7300ff") ), // blue
        // new THREE.Color().setHex( convertHexTo0x("#ff00ea") ), // pink
        // new THREE.Color().setHex( convertHexTo0x("#ff0000") ), // red
    ];

    for (let i = 0; i < starCount; i++) {
        let x, y, z;

        do {
            x = (Math.random() - 0.5) * 4000; // coordinates scaled to range
            y = (Math.random() - 0.5) * 4000; // coordinates scaled to range
            z = (Math.random() - 0.5) * 4000; // coordinates scaled to range
        } while (Math.abs(x) < 500 && Math.abs(y) < 200 && Math.abs(z) < 500); // excluded center range

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Select a random color from the colorOptions array
        const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        colors[i * 3] = color.r;   // Red channel
        colors[i * 3 + 1] = color.g; // Green channel
        colors[i * 3 + 2] = color.b; // Blue channel
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); // Add color attribute

    const starMaterial = new THREE.PointsMaterial({ size: 0.5, sizeAttenuation: true, vertexColors: true }); // Use vertex colors
    return new THREE.Points(starGeometry, starMaterial) // returns stars
}

export function createCircle(radius, color, segments) {
    const circleGeometry = new THREE.CircleGeometry(radius, segments);

    // Remove center vertex
    const itemSize = 3;
    circleGeometry.setAttribute( 'position',
        new THREE.BufferAttribute(
            circleGeometry.attributes.position.array.slice( itemSize,
                circleGeometry.attributes.position.array.length - itemSize
            ), itemSize
        )
    );
    circleGeometry.index = null;

    return new THREE.LineLoop(circleGeometry,
        new THREE.LineBasicMaterial({ color: color }));
}


export function drawConnection(positions, connectionGeo) {
    const connectionPoints = new Float32Array(positions.length * 3);
    for (let i = 0; i < positions.length; i++) {
        connectionPoints[i * 3] = positions[i].x;
        connectionPoints[i * 3 + 1] = positions[i].y;
        connectionPoints[i * 3 + 2] = positions[i].z;
    }
    connectionGeo.setAttribute('position', new THREE.BufferAttribute(connectionPoints, 3));
}

export function pushTextToLabel(text) {
    const actionLabelContainer = document.getElementById('action-label-container')
    const actionLabel = document.getElementById('action-label')
    actionLabel.textContent = text
    actionLabelContainer.style.display = ""
    window.setTimeout(function() {
        actionLabelContainer.classList.remove('center-label-show')
        actionLabelContainer.style.display = "none"
    }, 800); // time in ms
}

export function updateLabel() {
    const labelContainer = document.getElementById('label-container');
    const targetLabel = document.getElementById('target-label');
    const distanceLabel = document.getElementById('distance-label');
    const speedLabel = document.getElementById('speed-label');
    const weightLabel = document.getElementById('weight-label');
    if (!state.SHOW_LABEL || (!state.targetPlanet && !state.spacecraftSelected)) { // if no target planet or birdseye view: no label
        labelContainer.style.display = 'none';
    } else {
        if (state.targetPlanet) targetLabel.textContent = state.targetPlanet.name
        if (state.targetPlanet && !state.spacecraftSelected) {
            targetLabel.style.color = ''
            labelContainer.style.color = convertHexToRGB(state.targetPlanet.colorHex)
            if (state.targetPlanet.isSun) distanceLabel.textContent = ""
            else distanceLabel.textContent = convertDistance(state.targetPlanet.distanceToSun, state.distanceUnit, AU, LM)
            const v = Math.sqrt(state.targetPlanet.xVel ** 2 + state.targetPlanet.yVel ** 2 + state.targetPlanet.zVel ** 2);
            speedLabel.textContent = v.toPrecision(4) + " km/s"
            weightLabel.textContent = state.targetPlanet.mass.toPrecision(4) + " kg";
        } else if (state.spacecraftSelected) {
            if (state.targetPlanet) {
                targetLabel.style.color = convertHexToRGB(state.targetPlanet.colorHex)
                distanceLabel.textContent = convertDistance(state.spacecraft.distanceToTarget, state.distanceUnit, AU, LM)
                if (state.spacecraftMatchVelocity) labelContainer.style.color = convertHexToRGB(state.targetPlanet.colorHex)
                else labelContainer.style.color = '#ffffff'
            }
            else {
                labelContainer.style.color = "#ffffff"
                targetLabel.textContent = ""
                distanceLabel.textContent = convertDistance(state.spacecraft.distanceToSun, state.distanceUnit, AU, LM)
                weightLabel.textContent = "";
            }
            const v = Math.sqrt(state.spacecraft.xVel ** 2 + state.spacecraft.yVel ** 2 + state.spacecraft.zVel ** 2);
            const vInLightspeed = v / c
            const cPercentageText = (vInLightspeed >= 0.001) ? ' | ' + vInLightspeed.toPrecision(2) + 'c' : ''
            let speedText = v.toPrecision(4) + " km/s" + cPercentageText
            if (state.spacecraftMatchVelocity) speedText = "[ " + speedText + " ]"
            speedLabel.textContent = speedText
        }

        labelContainer.style.display = '';
    }
}

export function updateLighting() {
    if (state.REALISTIC_LIGHTING) {
        scene.add(sunLight)
        scene.add(softAmbientLight);
        scene.remove(brightAmbientLight);

    } else {
        scene.remove(sunLight)
        scene.remove(softAmbientLight);
        scene.add(brightAmbientLight);
    }
}

export function updateGridTexture(constellationSphere) {
    if (state.backgroundGrid) {
        document.getElementById('loading-screen').style.display = ''
        textureLoader.load(state.backgroundGrid, (constellationTexture) => {
            constellationTexture.mapping = THREE.EquirectangularReflectionMapping;
            constellationTexture.colorSpace = THREE.SRGBColorSpace;
            constellationSphere.material.map = constellationTexture;
            scene.add(constellationSphere);
        });
    }
    else scene.remove(constellationSphere);
}
export function setTargetPlanet(planet) {
    state.targetPlanet = planet
    if (state.targetPlanet !== null) {
        document.getElementById('target-planet-label').textContent = state.targetPlanet.name + ": "
        document.getElementById('target-planet-settings').classList.remove('hidden')
        if (state.targetPlanet.isSun) document.getElementById('PLANET_TRANSFORM_ITEM').classList.add('disabled')
        else document.getElementById('PLANET_TRANSFORM_ITEM').classList.remove('disabled')
    }
    else document.getElementById('target-planet-settings').classList.add('hidden')
}
export function toggleSpacecraftSelected(selected, planets) {
    if(selected !== state.spacecraftSelected) updateTargetList(planets, selected,  null);
    state.spacecraftSelected = selected;
    if (state.spacecraftSelected) {
        state.spacecraftMatchVelocity = false
        document.getElementById("TOGGLE_SPACECRAFT_BTN").textContent = "Leave spacecraft"
        document.getElementById("SPACECRAFT_MATCH_VELOCITY").classList.add('disabled')
        document.getElementById('SPACECRAFT_MATCH_VELOCITY_CB').checked = false

        document.getElementById('spacecraft-settings').classList.remove('hidden')
        adjustFOV(state.SPACECRAFT_FOV)
    }
    else {
        document.getElementById("TOGGLE_SPACECRAFT_BTN").textContent = "Enter spacecraft"
        document.getElementById('spacecraft-settings').classList.add('hidden')
        adjustFOV(state.STANDARD_FOV, false)
    }
}

export function updateTargetList(planets, selected, oldPlanetName=null) {
    const selectElement = document.getElementById("TARGET_SELECT")
    let selectedIdx = 0

    if (oldPlanetName) selectedIdx = state.targets.indexOf(oldPlanetName);
    state.targets.length = 0; // clear array
    state.targets.push(selected ? "Free flight" : "None")
    for (const planet of planets) {
        state.targets.push(planet.name)
    }
    if (!selected) state.targets.push("JWST")

    selectElement.innerHTML = ""
    state.targets.forEach((target, index) => {
        const option = document.createElement("option");
        option.value = index.toString();
        option.selected = index === selectedIdx
        option.textContent = target;
        selectElement.appendChild(option);
    });

    // for (const planet of planets) {
    //     for (let i = 0; i < selectElement.options.length; i++) {
    //         const option = selectElement.options[i];
    //         if (option.text === planet.name) option.style.color = convertRGBToHex(planet.colorHex)
    //     }
    // }
}

export function toggleCameraLock(lock) {
    resetControls()
    state.isCameraLocked = lock
    document.getElementById('CAMERA_LOCK_CB').checked = state.isCameraLocked

    const enableLockCB = ((state.targetPlanet && !state.PAUSED) || (state.jwstSelected && !state.PAUSED) || (state.spacecraftSelected))
    if (enableLockCB) document.getElementById('CAMERA_LOCK').classList.remove('disabled')
    else document.getElementById('CAMERA_LOCK').classList.add('disabled')
}

function resetControls() {
    controls._sphericalDelta.set(0, 0, 0);
    controls._panOffset.set(0, 0, 0);

    controls2._lastAngle = 0;
    controls2._eye.set(0, 0, 0);
    controls2._zoomStart.set(1, 1); // Reset zoom-related changes
    controls2._zoomEnd.set(1, 1);   // Reset zoom-related changes
}

export function toggleCameraSunLock(sunLock) {
    state.isCameraSunLocked = sunLock
    document.getElementById('CAMERA_SUN_LOCK_CB').checked = state.isCameraSunLocked

    const enableSunLockCB = (((state.targetPlanet && state.targetPlanet.name !== "Sun") || state.jwstSelected) && !state.spacecraftSelected)
    if (enableSunLockCB) document.getElementById('CAMERA_SUN_LOCK').classList.remove('disabled')
    else document.getElementById('CAMERA_SUN_LOCK').classList.add('disabled')
}

export function changeBackground(backgroundTextureIdx) {
    const newBackground = backgroundTextures[backgroundTextureIdx]
    if (!newBackground) {
        if (state.starBackground === null) state.starBackground = createStars()
        scene.background = null;
        scene.add(state.starBackground);
    } else {
        scene.remove(state.starBackground);

        const backgroundPath = newBackground

        if (backgroundPath) {
            document.getElementById('loading-screen').style.display = ''
            exrLoader.load(backgroundPath, (starmapTexture) =>
            {
                starmapTexture.mapping = THREE.EquirectangularReflectionMapping
                // scene.environment = starmapTexture; // Set environment for reflections
                scene.background = starmapTexture;
            });
            // renderer.toneMapping = THREE.ACESFilmicToneMapping;
            // renderer.toneMappingExposure = 1;
        }
    }

    updateSelectionElement("BACKGROUND_SELECT", backgroundTextureIdx)
}

export function initPlanetScaleSlider() {
    let sliderScaleValue = state.PLANET_SCALE / DISTANCE_SCALE
    if (sliderScaleValue > 1) {
        sliderScaleValue = Math.round(sliderScaleValue / 2) * 2; // Snap to the nearest multiple of 2
    }
    document.getElementById("planet-scale").value = sliderScaleValue
    document.getElementById("planet-scale-display").textContent = sliderScaleValue.toString();
}

export function updateSelectionElement(selectElementID, selectedIdx) {
    const selectElement = document.getElementById(selectElementID)
    selectElement.value = selectedIdx
}

export function toggleTransitionAnimation(animationActive) {
    state.transitionAnimationActive = animationActive
    document.activeElement.blur();
    state.cameraSunLockChanged = false;
    if (state.transitionAnimationActive) document.getElementById('menu-content').classList.add('disabled')
    else document.getElementById('menu-content').classList.remove('disabled')
}

export function calcPlanetOffset(planet) {
    if (planet.isSun) {
        return new THREE.Vector3(((0 - planet.sphere.position.x) / planet.sphere.position.x) * (planet.radius * 1.8), planet.radius, ((0 - planet.sphere.position.z) / planet.sphere.position.z) * (planet.radius * 1.8))
    } else {
        return new THREE.Vector3(((0 - planet.sphere.position.x) / planet.sphere.position.x) * (planet.radius * 4), planet.radius, ((0 - planet.sphere.position.z) / planet.sphere.position.z) * (planet.radius * 4))
    }
}
