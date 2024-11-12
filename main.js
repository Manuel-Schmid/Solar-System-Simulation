import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createStars, updateTriangles} from "./design_utils";
import {formatDistance, PlanetRingGeometry} from "./utils";
import FakeGlowMaterial from "./GlowMaterial";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.00001, 1000 );
const renderer = new THREE.WebGLRenderer();
const textureLoader = new THREE.TextureLoader();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const G = 6.67428e-11  // Gravitational constant
const AU = 1.496e+8 // 1 AU in km
const LM = 1.799e+7 // 1 Light minute in km
const DISTANCE_SCALE = 0.0000001 // multiply km distances by this
const PLANET_SCALE = DISTANCE_SCALE * 10 // multiply km distances by this
const TIME = 60 * 60 * 6   // one year in 12 Seconds
let distance_units = ["km", "au", "lm"] // units for distances

// setting variables:
let SHOW_LABEL = true;
let SHOW_ORBITS = true;
let HIGH_QUALITY_TEXTURES = false;
let SHOW_TRIANGLES = false;
let SHOW_VECTORS = false;
let REALISTIC_LIGHTING = true;
let PAUSED = false;

// program variables
let targetPlanet = null; // Default to the sun
let isCameraLocked = false; // Flag to indicate if the camera is locked to a planet
let cameraOffset = new THREE.Vector3(0.001, 0.01, 0.001); // Default offset
let distance_unit = distance_units[0];
let birdseye = true;

class Planet {
    constructor(name, radius, mass, colorHex, x=0, y=0, z=0, isSun=false, lowQMapPath=null, highQMapPath=null) {
        this.name = name
        this.xVel = 0;
        this.zVel = 0;
        this.mass = mass;
        this.radius = radius;
        this.distanceToSun = 0;
        this.isSun = isSun;
        this.orbits = [];
        this.colorHex = colorHex;
        this.lowQMapPath = lowQMapPath;
        this.highQMapPath = highQMapPath;
        this.glowSphere = null

        this.geometry = new THREE.SphereGeometry( radius, 64, 32 );
        this.material = new THREE.MeshStandardMaterial({
            color: colorHex,
            roughness: 0.8, // less rough, more reflective
            // metalness: 0.1, // metallic, reflective effect
        });
        if (lowQMapPath) {
            this.material.color = null;
            const texture = textureLoader.load(lowQMapPath);
            texture.colorSpace = THREE.SRGBColorSpace
            this.material.map = texture;

            if (isSun) { // noinspection JSValidateTypes
                this.material = new THREE.MeshBasicMaterial({ map: texture });
            }
        }

        if (isSun) {
            // sun glow effect
            const fakeGlowMaterial = new FakeGlowMaterial({
                falloff: 0.4,
                glowColor: new THREE.Color("#ff0000"),
                // glowColor: new THREE.Color("#ff2f00"),
                glowSharpness: 0.7,
            });
            // noinspection JSCheckFunctionSignatures
            this.glowSphere = new THREE.Mesh( new THREE.SphereGeometry( radius * 2, 64, 32 ), fakeGlowMaterial);
            scene.add(this.glowSphere);
        }

        // noinspection JSCheckFunctionSignatures
        this.sphere = new THREE.Mesh(this.geometry, this.material);
        this.sphere.position.set(x, y, z)
        // this.sphere.castShadow = true;
        scene.add( this.sphere );

        // orbits
        const maxPoints = 1000;  // Arbitrary initial size, can be increased dynamically
        this.orbitPositions = new Float32Array(maxPoints * 3);
        this.orbitGeometry = new THREE.BufferGeometry();
        this.orbitGeometry.setAttribute('position', new THREE.BufferAttribute(this.orbitPositions, 3));
        const orbitMaterial = new THREE.LineBasicMaterial({ color: this.colorHex });
        this.orbitLine = new THREE.Line(this.orbitGeometry, orbitMaterial);
        this.currentOrbitPointCount = 0;
        this.orbitLine.frustumCulled = false;
        scene.add(this.orbitLine);

        const gVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );
        const gVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.gVectorLine = new THREE.Line( gVectorLineGeometry, gVectorLineMaterial );
        this.gVectorLine.frustumCulled = false;

        const vVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );
        const vVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.vVectorLine = new THREE.Line( vVectorLineGeometry, vVectorLineMaterial );
        this.vVectorLine.frustumCulled = false;

        const tangentLineMaterial = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        const tangentLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.tangentLine = new THREE.Line( tangentLineGeometry, tangentLineMaterial );
        this.tangentLine.frustumCulled = false;

        this.ring = null
    }
    updatePosition(planets) {
        let totalFx = 0;
        let totalFz = 0;
        for (const planet of planets) {
            if (planet.mass === this.mass) {
                continue;
            }
            const forces = this.attraction(planet)
            totalFx += forces[0].force_x // Force in N
            totalFz += forces[0].force_z // Force in N
        }

        const addedXVel = ((totalFx / this.mass)/1000) * TIME
        const addedZVel = ((totalFz / this.mass)/1000) * TIME
        this.xVel += addedXVel // in km/s
        this.zVel += addedZVel // in km/s

        this.sphere.position.x += ((this.xVel * DISTANCE_SCALE) * TIME)
        this.sphere.position.z += ((this.zVel * DISTANCE_SCALE) * TIME)

        if (SHOW_VECTORS) {
            const gVectorLinePoints = [
                new THREE.Vector3(this.sphere.position.x + this.radius, 0, this.sphere.position.z + this.radius),
                new THREE.Vector3(this.sphere.position.x + this.radius + addedXVel, 0, this.sphere.position.z + this.radius + addedZVel)
            ]

            const vVectorLinePoints = [
                new THREE.Vector3(this.sphere.position.x + this.radius, 0, this.sphere.position.z + this.radius),
                new THREE.Vector3(this.sphere.position.x + this.radius + ((this.xVel * DISTANCE_SCALE) * TIME * 10), 0, this.sphere.position.z + this.radius + ((this.zVel * DISTANCE_SCALE) * TIME * 10))
            ]

            // const lastPoint = this.orbits[this.orbits.length - 1];
            // console.log(lastPoint);
            // const tangentLinePoints = [
            //     new THREE.Vector3(lastPoint.x, lastPoint.y, lastPoint.z),
            //     new THREE.Vector3(this.sphere.position.x * 2, this.sphere.position.y, this.sphere.position.z * 2)
            // ]

            this.gVectorLine.geometry.setFromPoints( gVectorLinePoints );
            this.vVectorLine.geometry.setFromPoints( vVectorLinePoints );
            // this.tangentLine.geometry.setFromPoints( tangentLinePoints );
            scene.add( this.gVectorLine );
            scene.add( this.vVectorLine );
            // scene.add( this.tangentLine );
        }

        this.orbits.push(new THREE.Vector3( this.sphere.position.x, this.sphere.position.y, this.sphere.position.z ))

        if (this.ring) this.ring.updatePosition()
        if (this.glowSphere) this.glowSphere.position.copy(this.sphere.position)
        this.drawOrbits()
    }
    attraction(other) { // attraction between self & other planet
        const distance_x = ((other.sphere.position.x - this.sphere.position.x) / DISTANCE_SCALE) * 1000 // distance in meters;
        const distance_z = ((other.sphere.position.z - this.sphere.position.z) / DISTANCE_SCALE) * 1000 // distance in meters;
        const distance = (Math.sqrt(distance_x ** 2 + distance_z ** 2)) // distance in km
        if (other.isSun) {
            this.distanceToSun = distance / 1000
        }
        const force = G * this.mass * other.mass / distance ** 2 // law of attraction
        const theta = Math.atan2(distance_z, distance_x)
        const force_x = Math.cos(theta) * force
        const force_z = Math.sin(theta) * force
        return [{force_x: force_x, force_z: force_z}]
    }
    drawOrbits() {
        if (this.orbits.length < 2) return;
        const lastPoint = this.orbits[this.orbits.length - 1];
        this.addOrbitPoint(lastPoint);
    }
    addOrbitPoint(point) {
        this.orbits.push(point);
        if (this.currentOrbitPointCount >= this.orbitPositions.length / 3) {
            const newPositions = new Float32Array(this.orbitPositions.length * 2); // If exceeds buffer size, expand it
            newPositions.set(this.orbitPositions);
            this.orbitPositions = newPositions;
            this.orbitGeometry.setAttribute('position', new THREE.BufferAttribute(this.orbitPositions, 3));
        }

        const index = this.currentOrbitPointCount * 3;
        this.orbitPositions[index] = point.x;
        this.orbitPositions[index + 1] = point.y;
        this.orbitPositions[index + 2] = point.z;

        this.currentOrbitPointCount++;
        this.orbitGeometry.setDrawRange(0, this.currentOrbitPointCount);
        this.orbitGeometry.attributes.position.needsUpdate = true; // Notify Three.js of the update
    }
    resetOrbit() {
        this.currentOrbitPointCount = 0;
        this.orbitGeometry.setDrawRange(0, this.currentOrbitPointCount);
        this.orbitGeometry.attributes.position.needsUpdate = true; // Notify Three.js of the update
    }
}

class Ring {
    constructor(planet, innerRadiusFactor, outerRadiusFactor, color, xAngle, yAngle=0, lowQMapPath=null, highQMapPath=null) {
        this.parentPlanet = planet
        this.lowQMapPath = lowQMapPath;
        this.highQMapPath = highQMapPath;
        const innerRadius = this.parentPlanet.radius * innerRadiusFactor; // Inner radius slightly larger than planet
        const outerRadius = this.parentPlanet.radius * outerRadiusFactor; // Outer radius of the ring
        const ringSegments = 96;

        const ringGeometry = new PlanetRingGeometry(innerRadius, outerRadius, ringSegments, ringSegments);

        let alphaTexture = null;
        if (this.lowQMapPath) {
            alphaTexture = textureLoader.load(this.lowQMapPath);
            alphaTexture.colorSpace = THREE.SRGBColorSpace
            alphaTexture.anisotropy = 32;  // Optional: Improve texture quality if needed
        }

        const ringMaterial = new THREE.MeshStandardMaterial({
            color: color,
            emissive: color, // Make the Sun emit light (self-illumination)
            emissiveIntensity: 0.5, // Adjust intensity of emission
            side: THREE.DoubleSide,     // Render on both sides of the ring
            transparent: true,          // Enable transparency (important for alpha maps)
            opacity: 1,                 // Set opacity (adjust for overall transparency)
            roughness: 0.5,             // Control the roughness of the ring's surface
            metalness: 0.1,             // Optional: Set metalness for the ring's surface
            map: alphaTexture,     // Apply the alpha texture (this controls transparency)
            // Optional: Additional settings for alpha map handling
            alphaTest: 0.5,             // Optional: Alpha cutoff for rendering (0.5 = no transparency below this value)
            depthTest: true,            // Optional: Control depth testing behavior
            depthWrite: false           // Optional: Prevent depth writes for transparent areas
        });

        if (alphaTexture) ringMaterial.color = null;

        // noinspection JSCheckFunctionSignatures
        this.ringObj = new THREE.Mesh(ringGeometry, ringMaterial);
        this.ringObj.rotation.x =  xAngle * Math.PI / 180; // rotation angle of the ring
        this.ringObj.rotation.y = yAngle * Math.PI / 180
        this.ringObj.position.set(this.parentPlanet.sphere.position.x, this.parentPlanet.sphere.position.y, this.parentPlanet.sphere.position.z);    // Center the ring at the planet's position

        // this.ringObj.receiveShadow = true
        scene.add(this.ringObj);
    }
    updatePosition() {
        this.ringObj.position.set(this.parentPlanet.sphere.position.x, this.parentPlanet.sphere.position.y, this.parentPlanet.sphere.position.z)
    }
}

function convertDistance(distance) {
    if (distance_unit === "km") {
        return formatDistance(distance) + " " + distance_unit
    } else if (distance_unit === "au") {
        return (distance / AU).toPrecision(4) + " " + distance_unit // round to 4 significant decimals
    } else if (distance_unit === "lm") {
        const lh = Math.floor(distance/LM/60)
        const lm = Math.floor(distance/LM%60)
        const ls = String((Math.floor((distance % LM) / (LM / 60)))).padStart(2, '0')
        if (lh > 0) return lh + ":" +  String(lm).padStart(2, '0') + ":" + ls + " " + "lh";
        return lm + ":" + ls + " " + distance_unit
    }
    return 0;
}


const sun = new Planet("Sun", 696340 * PLANET_SCALE, 1.98892 * 10 ** 30, 0xFF740F, 0, 0, 0, true, 'planet_textures/2k/2k_sun.jpg', 'planet_textures/8k/8k_sun.jpg'); // 'planet_textures/2k/2k_sun.jpg'

const mercury = new Planet("Mercury", 2440 * PLANET_SCALE, 	0.33010* 10 ** 24, 0x777676,0.387 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_mercury.jpg', 'planet_textures/8k/8k_mercury.jpg');
mercury.zVel = 47.39996051284; // speed in km/s

const venus = new Planet("Venus", 6051.8 * PLANET_SCALE, 4.867 * 10 ** 24, 0xff9900,0.72 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_venus_surface.jpg', 'planet_textures/8k/8k_venus_surface.jpg');
venus.zVel = 35.019991414096;

const earth = new Planet("Earth", 6371 * PLANET_SCALE, 5.9722 * 10 ** 24, 0x006eff,AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_earth_daymap.jpg', 'planet_textures/8k/8k_earth_daymap.jpg');
earth.zVel = 29.78299948;

const mars = new Planet("Mars", 3389.5 * PLANET_SCALE, 6.39 * 10 ** 23, 0xff4d00,1.524 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_mars.jpg', 'planet_textures/8k/8k_mars.jpg');
mars.zVel = 24.076988672178

const jupiter = new Planet("Jupiter", 69911 * PLANET_SCALE, 1.898 * 10 ** 27, 0xd8ca9d,5.2 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_jupiter.jpg', 'planet_textures/8k/8k_jupiter.jpg');
jupiter.zVel = 13.06000369219;
const jupiterRing = new Ring(jupiter, 1.4, 1.5, 0xC0B09E, 90)
jupiter.ring = jupiterRing

const saturn = new Planet("Saturn", 58232 * PLANET_SCALE, 5.683 * 10 ** 26, 0x8d8549,9.538 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_saturn.jpg', 'planet_textures/8k/8k_saturn.jpg');
saturn.zVel = 9.679981775672;
const saturnRing = new Ring(saturn, 1.6, 2.7, 0xdcc49d, 90, 0, 'planet_textures/2k/2k_saturn_ring_alpha.png') // todo
saturn.ring = saturnRing

const uranus = new Planet("Uranus", 25362 * PLANET_SCALE, 8.681 * 10 ** 25, 0x51dbdb,19.56 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_uranus.jpg');
uranus.zVel = 6.7999974;
const uranusRing = new Ring(uranus, 1.5, 1.6, 0xb0ffff, 188, 135)
uranus.ring = uranusRing

const neptune = new Planet("Neptune", 24622 * PLANET_SCALE, 1.024 * 10 ** 26, 0x233fc4,29.90 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_neptune.jpg');
neptune.zVel = 5.4299794

const planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];


camera.position.y = 40; // moving out the camera
// targetPlanet = sun
controls.update();


// lighting
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const sunLight = new THREE.PointLight(0xffffff, 3, 1000);
sunLight.position.set(0, 0, 0);
// sunLight.castShadow = true;
sunLight.decay = 0;

const softAmbientLight = new THREE.AmbientLight(0x404040, 0.7); // Soft white ambient light
const brightAmbientLight = new THREE.AmbientLight(0xffffff, 2.5);

updateLighting()


// create star background
const stars = createStars()
scene.add(stars);

// textureLoader.load('8k_stars_milky_way.jpg' , function(texture)
// textureLoader.load('8k_stars.jpg' , function(texture)
// {
//     texture.colorSpace = THREE.SRGBColorSpace
//     scene.background = texture;
// });


// create triangle 1 between two planets closest to each other and the sun
const closeTriangleGeo = new THREE.BufferGeometry();
const closeTriangleMat = new THREE.LineBasicMaterial({ color: new THREE.Color().setHex( 0x00ff08 ) }); // Line material
const closeTriangleOutline = new THREE.LineLoop(closeTriangleGeo, closeTriangleMat); // Create the line loop
closeTriangleOutline.frustumCulled = false;

// create triangle 2 between two planets farthest to each other and the sun
const farTriangleGeo = new THREE.BufferGeometry();
const farTriangleMat = new THREE.LineBasicMaterial({ color: new THREE.Color().setHex( 0xfc0341 ) }); // Line material
const farTriangleOutline = new THREE.LineLoop(farTriangleGeo, farTriangleMat); // Create the line loop
farTriangleOutline.frustumCulled = false;

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
const moonOrbit = new THREE.Object3D();
scene.add(moonOrbit); // Add the orbit object to the scene
moon.position.set(0.002606 * AU * DISTANCE_SCALE, 0, 0); // Position of moon relative to planet
moon.rotation.y = Math.PI;
moonOrbit.add(moon); // Add the moon to the parent object


// event listeners
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { // un/pause the game
        PAUSED = !PAUSED;
        pushTextToLabel(PAUSED ? 'Pause' : 'Unpause')
        return
    }

    if (event.key.toLowerCase() === 'l') { // switch lighting
        REALISTIC_LIGHTING = !REALISTIC_LIGHTING;
        pushTextToLabel(REALISTIC_LIGHTING ? 'Enable realistic lighting' : 'Disable realistic lighting');
        updateLighting()
        return
    }

    if (event.key.toLowerCase() === 'i') { // hide/show label
        SHOW_LABEL = !SHOW_LABEL;
        pushTextToLabel(SHOW_LABEL ? 'Show planet info' : 'Hide planet info')
        updateLabel()
        return
    }

    if (event.key.toLowerCase() === 'd') { // cycle distance unit
        if (SHOW_LABEL && targetPlanet && !targetPlanet.isSun) { // only update if planet is selected
            const unit_index = distance_units.indexOf(distance_unit)
            if (unit_index < distance_units.length - 1) distance_unit = distance_units[unit_index + 1]
            else distance_unit = distance_units[0]
            pushTextToLabel('Cycle distance unit')
            updateLabel();
        }
        return
    }

    if (event.key.toLowerCase() === 'e') { // lock/unlock camera to target planet
        if (targetPlanet.sphere.position.length() > 0) { // if target planet is not the sun
            pushTextToLabel(isCameraLocked ? 'Unlock camera' : 'Lock camera')
            if (isCameraLocked) {
                unlockCamera(); // Unlock if already locked
            } else {
                lockCameraToPlanet(targetPlanet); // Lock to the current target
            }
        }
        return
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

    if (event.key.toLowerCase() === 'c') {
        pushTextToLabel('Move to Sun')
        moveToPlanet(sun, true);
    }

    if (event.key.toLowerCase() === 'x') {
        isCameraLocked = false;
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
    }

    if (event.key.toLowerCase() === 'q') {
        HIGH_QUALITY_TEXTURES = !HIGH_QUALITY_TEXTURES;
        pushTextToLabel(HIGH_QUALITY_TEXTURES ? 'Texture quality: 8k' : 'Texture quality: 2k')
        for (const planet of planets) {
            if (planet.lowQMapPath && planet.highQMapPath) {
                const texture = textureLoader.load(HIGH_QUALITY_TEXTURES ? planet.highQMapPath : planet.lowQMapPath);
                texture.colorSpace = THREE.SRGBColorSpace
                planet.sphere.material.map = texture
            }
            if (planet.ring && planet.ring.lowQMapPath && planet.ring.highQMapPath) {
                const alphaTexture = textureLoader.load(HIGH_QUALITY_TEXTURES ? planet.ring.highQMapPath : planet.ring.lowQMapPath);
                alphaTexture.colorSpace = THREE.SRGBColorSpace
                alphaTexture.anisotropy = 32;  // Optional: Improve texture quality if needed
                planet.ring.ringObj.material.map = alphaTexture
            }
        }
    }

    if (event.key.toLowerCase() === 'r') {
        pushTextToLabel('Reset orbits')
        for (const planet of planets) {
            planet.resetOrbit()
        }
    }

    if (event.key.toLowerCase() === 'v') {
        SHOW_VECTORS = !SHOW_VECTORS;
        pushTextToLabel(SHOW_VECTORS ? 'Show planetary vectors' : 'Hide planetary vectors')

        for (const planet of planets) {
            if (SHOW_VECTORS) {
                scene.add( planet.gVectorLine );
                scene.add( planet.vVectorLine );
            } else {
                scene.remove( planet.gVectorLine );
                scene.remove( planet.vVectorLine );
            }
        }
    }

    if (event.key.toLowerCase() === 't') {
        SHOW_TRIANGLES = !SHOW_TRIANGLES
        pushTextToLabel(SHOW_TRIANGLES ? 'Show triangles' : 'Hide triangles')
        if (SHOW_TRIANGLES) {
            scene.add(closeTriangleOutline);
            scene.add(farTriangleOutline);
        } else {
            scene.remove(closeTriangleOutline);
            scene.remove(farTriangleOutline);
        }
    }

    if (event.key >= '0' && event.key <= '9') {
        const number = parseInt(event.key);
        if (planets[number]) {
            pushTextToLabel('Move to ' + planets[number].name)
            if (event.altKey && birdseye) {
                targetPlanet = planets[number]
                if (SHOW_LABEL) {
                    updateLabel()
                }
            }
            else moveToPlanet(planets[number]);
        }
    }
});

function updateLabel() {
    const labelContainer = document.getElementById('label-container');
    const distanceLabel = document.getElementById('distance-label');
    const speedLabel = document.getElementById('speed-label');
    const weightLabel = document.getElementById('weight-label');
    if (!SHOW_LABEL || !targetPlanet) { // if no target planet or birdseye view: no label
        labelContainer.style.display = 'none';
    } else {
        if (targetPlanet.isSun) distanceLabel.textContent = ""
        else distanceLabel.textContent = convertDistance(targetPlanet.distanceToSun)

        const v = Math.sqrt(targetPlanet.xVel ** 2 + targetPlanet.zVel ** 2)
        speedLabel.textContent = v.toPrecision(4) + " km/s"
        weightLabel.textContent = targetPlanet.mass.toPrecision(4) + " kg";
        labelContainer.style.display = '';
    }
}

// Move camera to selected planet
function moveToPlanet(planet, topDown=false) {
    if (planet === targetPlanet && !planet.isSun) return;
    let showLabelChanged = false
    if (SHOW_LABEL) {
        SHOW_LABEL = false // make label stop updating during transition
        showLabelChanged = true
    }

    isCameraLocked = false
    let targetPosition = null

    if (topDown) targetPosition = new THREE.Vector3(planet.sphere.position.x, planet.sphere.position.y + 40, planet.sphere.position.z);
    else if (planet.isSun) targetPosition = new THREE.Vector3(planet.sphere.position.x + planet.radius + 0.4, planet.sphere.position.y + planet.radius, planet.sphere.position.z + planet.radius + 0.4)
    else if(PAUSED) targetPosition = new THREE.Vector3(planet.sphere.position.x, planet.sphere.position.y + 0.01, planet.sphere.position.z + 0.001)
    else targetPosition = planet.sphere.position.clone().add(new THREE.Vector3(
            ((0 - planet.sphere.position.x) / planet.sphere.position.x) * (planet.radius * 8),
            planet.radius,
            ((0 - planet.sphere.position.z) / planet.sphere.position.z) * (planet.radius * 4)))

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
            if (!topDown && !targetPlanet.isSun) isCameraLocked = true
            if (showLabelChanged) SHOW_LABEL = true
            if (SHOW_LABEL) updateLabel()
        }
    }

    animate();
}

function updateLighting() {
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

function pushTextToLabel(text) {
    const actionLabelContainer = document.getElementById('action-label-container')
    const actionLabel = document.getElementById('action-label')
    actionLabel.textContent = text
    actionLabelContainer.style.display = ""
    window.setTimeout(function() {
        actionLabelContainer.classList.remove('center-label-show')
        actionLabelContainer.style.display = "none"
    }, 700); // time in ms
}

function lockCameraToPlanet(planet) {
    isCameraLocked = true;
    cameraOffset = new THREE.Vector3().subVectors(camera.position, planet.sphere.position); // Calculate offset based on planet's current position
}

function unlockCamera() {
    isCameraLocked = false;
}

function render() { // runs with 60 fps
    if(!PAUSED) {
        for (const planet of planets) {
            planet.updatePosition(planets)

            moonOrbit.position.copy(earth.sphere.position); // centers moon orbit on earth
            moonOrbit.rotation.y += 0.012; // moon orbit speed
        }
        if (targetPlanet) targetPlanet.sphere.rotation.y += 0.005; // only rotate targeted planet
        if (REALISTIC_LIGHTING) sunLight.position.copy(sun.sphere.position)

        if (SHOW_TRIANGLES) updateTriangles(planets, sun.sphere.position, [closeTriangleGeo, farTriangleGeo]);
        if (SHOW_LABEL) updateLabel()
    }

    if (targetPlanet) {
        if (isCameraLocked) {
            camera.position.copy(targetPlanet.sphere.position).add(new THREE.Vector3(((0-targetPlanet.sphere.position.x) / targetPlanet.sphere.position.x) * (targetPlanet.radius * 4), targetPlanet.radius, ((0-targetPlanet.sphere.position.z) / targetPlanet.sphere.position.z) * (targetPlanet.radius * 4)));
            camera.lookAt(targetPlanet.sphere.position);
        } else {
            // If not locked, allow OrbitControls to manage the camera freely
            controls.target.copy(targetPlanet.sphere.position);
            controls.update();
        }
    }

    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );
