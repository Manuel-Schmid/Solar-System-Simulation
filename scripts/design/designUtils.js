import * as THREE from "three";
import {convertDistance, convertHexToRGB} from "../utils";
import {
    adjustFOV,
    brightAmbientLight,
    exrLoader,
    scene,
    softAmbientLight,
    sunLight,
    textureLoader
} from "../setup/scene";

export function createStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000; // Number of stars
    const positions = new Float32Array(starCount * 3); // x, y, z for each star
    const colors = new Float32Array(starCount * 3); // r, g, b for each star

    const colorOptions = [
        // new THREE.Color().setHex( 0xffffff ), // white
        // new THREE.Color().setHex( 0xf3a4a4 ), // red
        // new THREE.Color().setHex( 0xb9b9ea ), // purple
        // new THREE.Color().setHex( 0xf6c68e ), // purple

        new THREE.Color().setHex( 0x7300ff ), // blue
        new THREE.Color().setHex( 0xff00ea ), // pink
        new THREE.Color().setHex( 0xff0000 ), // red
    ];

    for (let i = 0; i < starCount; i++) {
        let x, y, z;

        // Generate positions while excluding the center range of -500 to 500 for x, y, and z
        do {
            x = (Math.random() - 0.5) * 3000; // Scale to your desired range
            y = (Math.random() - 0.5) * 3000; // Scale to your desired range
            z = (Math.random() - 0.5) * 3000; // Scale to your desired range
        } while (Math.abs(x) < 200 && Math.abs(y) < 200 && Math.abs(z) < 200); // Check if within the exclusion zone

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
    if (!SHOW_LABEL || (!targetPlanet && !spacecraftSelected)) { // if no target planet or birdseye view: no label
        labelContainer.style.display = 'none';
    } else {
        if (targetPlanet) targetLabel.textContent = targetPlanet.name
        if (targetPlanet && !spacecraftSelected) {
            targetLabel.style.color = ''
            labelContainer.style.color = convertHexToRGB(targetPlanet.colorHex)
            if (targetPlanet.isSun) distanceLabel.textContent = ""
            else distanceLabel.textContent = convertDistance(targetPlanet.distanceToSun, distanceUnit, AU, LM)
            const v = Math.sqrt(targetPlanet.xVel ** 2 + targetPlanet.yVel ** 2 + targetPlanet.zVel ** 2);
            speedLabel.textContent = v.toPrecision(4) + " km/s"
            weightLabel.textContent = targetPlanet.mass.toPrecision(4) + " kg";
        } else if (spacecraftSelected) {
            if (targetPlanet) {
                targetLabel.style.color = convertHexToRGB(targetPlanet.colorHex)
                distanceLabel.textContent = convertDistance(spacecraft.distanceToTarget, distanceUnit, AU, LM)
                if (spacecraftMatchVelocity) labelContainer.style.color = convertHexToRGB(targetPlanet.colorHex)
                else labelContainer.style.color = '#ffffff'
            }
            else {
                labelContainer.style.color = "#ffffff"
                targetLabel.textContent = ""
                distanceLabel.textContent = convertDistance(spacecraft.distanceToSun, distanceUnit, AU, LM)
                weightLabel.textContent = "";
            }
            const v = Math.sqrt(spacecraft.xVel ** 2 + spacecraft.yVel ** 2 + spacecraft.zVel ** 2);
            const vInLightspeed = v / c
            const cPercentageText = (vInLightspeed >= 0.001) ? ' | ' + vInLightspeed.toPrecision(2) + 'c' : ''
            let speedText = v.toPrecision(4) + " km/s" + cPercentageText
            if (spacecraftMatchVelocity) speedText = "[ " + speedText + " ]"
            speedLabel.textContent = speedText
        }

        labelContainer.style.display = '';
    }
}

export function updateLighting() {
    if (REALISTIC_LIGHTING) {
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
    if (backgroundGrid) {
        document.getElementById('loading-screen').style.display = ''
        textureLoader.load(backgroundGrid, (constellationTexture) => {
            constellationTexture.mapping = THREE.EquirectangularReflectionMapping;
            constellationTexture.colorSpace = THREE.SRGBColorSpace;
            constellationSphere.material.map = constellationTexture;
            scene.add(constellationSphere);
        });
    }
    else scene.remove(constellationSphere);
}
export function setTargetPlanet(planet) {
    targetPlanet = planet
    if (targetPlanet !== null) {
        document.getElementById('target-planet-label').textContent = targetPlanet.name + ": "
        document.getElementById('target-planet-settings').classList.remove('hidden')
        if (targetPlanet.isSun) document.getElementById('PLANET_TRANSFORM_ITEM').classList.add('disabled')
        else document.getElementById('PLANET_TRANSFORM_ITEM').classList.remove('disabled')
    }
    else document.getElementById('target-planet-settings').classList.add('hidden')
}
export function toggleSpacecraftSelected(selected, planets) {
    if(selected !== spacecraftSelected) updateTargetList(planets, selected,  null);
    spacecraftSelected = selected;
    if (spacecraftSelected) {
        spacecraftMatchVelocity = false
        document.getElementById("TOGGLE_SPACECRAFT_BTN").textContent = "Leave spacecraft"
        document.getElementById("SPACECRAFT_MATCH_VELOCITY").classList.add('disabled')
        document.getElementById('SPACECRAFT_MATCH_VELOCITY_CB').checked = false

        document.getElementById('spacecraft-settings').classList.remove('hidden')
        adjustFOV(SPACECRAFT_FOV)
    }
    else {
        document.getElementById("TOGGLE_SPACECRAFT_BTN").textContent = "Enter spacecraft"
        document.getElementById('spacecraft-settings').classList.add('hidden')
        adjustFOV(STANDARD_FOV, false)
    }
}

export function updateTargetList(planets, spacecraftSelected, oldPlanetName=null) {
    const selectElement = document.getElementById("TARGET_SELECT")
    let selectedIdx = 0

    if (oldPlanetName) selectedIdx = targets.indexOf(oldPlanetName);
    targets.length = 0; // clear array
    targets.push(spacecraftSelected ? "Free flight" : "None")
    for (const planet of planets) {
        targets.push(planet.name)
    }
    if (!spacecraftSelected) targets.push("JWST")

    selectElement.innerHTML = ""
    targets.forEach((target, index) => {
        const option = document.createElement("option");
        option.value = index.toString();
        option.selected = index === selectedIdx
        option.textContent = target;
        selectElement.appendChild(option);
    });
}

export function changeBackground(value) {
    value = parseInt(value);
    if (value === 0) {
        if (starBackground === null) starBackground = createStars()
        scene.background = null;
        scene.add(starBackground);
    } else {
        scene.remove(starBackground);

        let backgroundPath = null
        if (value === 1) backgroundPath = 'starmaps/starmap_2020_4k_gal.exr'
        else if (value === 2) backgroundPath = 'starmaps/starmap_2020_8k_gal.exr'
        else if (value === 3) backgroundPath = 'starmaps/starmap_2020_8k.exr'

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

    updateSelectionElement("BACKGROUND_SELECT", value)
}

export function updateSelectionElement(selectElementID, selectedIdx) {
    const selectElement = document.getElementById(selectElementID)
    selectElement.value = selectedIdx
}

export function calcPlanetOffset(planet) {
    if (planet.isSun) {
        return new THREE.Vector3(((0 - planet.sphere.position.x) / planet.sphere.position.x) * (planet.radius * 1.8), planet.radius, ((0 - planet.sphere.position.z) / planet.sphere.position.z) * (planet.radius * 1.8))
    } else {
        return new THREE.Vector3(((0 - planet.sphere.position.x) / planet.sphere.position.x) * (planet.radius * 4), planet.radius, ((0 - planet.sphere.position.z) / planet.sphere.position.z) * (planet.radius * 4))
    }
}
