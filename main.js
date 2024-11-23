import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createCircle, createStars, drawConnection} from "./scripts/design_utils";
import {convertDistance, PlanetRingGeometry} from "./scripts/utils";
import FakeGlowMaterial from "./scripts/GlowMaterial";
import {EXRLoader, GLTFLoader} from "three/addons";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.00001, 1000 );
const renderer = new THREE.WebGLRenderer({antialias: true});
const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const exrLoader = new EXRLoader(loadingManager);
const gltfLoader = new GLTFLoader(loadingManager);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

loadingManager.onLoad = ()=>{ document.getElementById('loading-screen').style.display = 'none' }
loadingManager.onProgress = ( item, loaded, total ) =>  {document.getElementById('loading-progress').textContent = loaded + "/" + total }

const controls = new OrbitControls( camera, renderer.domElement );

// constants
const G = 6.67428e-11  // Gravitational constant
const AU = 1.496e+8 // 1 AU in km
const LM = 1.799e+7 // 1 Light minute in km
const DISTANCE_SCALE = 0.0000001 // multiply km distances by this
const PLANET_SCALE = DISTANCE_SCALE * 10 // multiply km distances by this
const TIME = 60 * 60 * 6   // 6 = one year in 24 Seconds
let distanceUnits = ["km", "au", "lm"] // units for distances
let backgroundTextures = [false, "starmaps/celestial_grid_16k.png", "starmaps/constellation_bounds_8k.png", "starmaps/constellation_figures_8k.png"]

// setting variables:
let SHOW_LABEL = true;
let SHOW_ORBITS = true;
let HIGH_QUALITY_TEXTURES = false;
let SHOW_CONNECTION = false;
let SHOW_VECTORS = false;
let REALISTIC_LIGHTING = true;
let TRUE_ROTATION_SPEEDS = false;
let PAUSED = false;

// program variables
let targetPlanet = null; // Default to the sun
let jwstSelected = false; // Default to the sun
let inEarthSystem = false;
let isCameraLocked = false; // Flag to indicate if the camera is locked to a planet
let isCameraSunLocked = false; // Flag to indicate if the camera is locked to a planet
let cameraOffset = new THREE.Vector3(0.001, 0.01, 0.001); // Default offset
let distanceUnit = distanceUnits[0];
let backgroundGrid = backgroundTextures[0];
let birdseye = true;

class Planet {
    constructor(name, radius, axialTilt, dayLength, mass, colorHex, x=0, y=0, z=0, isSun=false, lowQMapPath=null, highQMapPath=null) {
        this.name = name
        this.xVel = 0;
        this.zVel = 0;
        this.mass = mass;
        this.radius = radius;
        this.axialTilt = axialTilt;
        this.rotationSpeed = -1 * 1.57 / (dayLength / 24); // sci-acc
        this.distanceToSun = 0;
        this.isSun = isSun;
        this.orbits = [];
        this.colorHex = colorHex;
        this.lowQMapPath = lowQMapPath;
        this.highQMapPath = highQMapPath;
        this.atmosphere = null
        this.glowSphere = null

        this.geometry = new THREE.SphereGeometry( radius, 64, 32 );
        this.geometry.rotateY(THREE.MathUtils.degToRad(90));

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

            if (this.name === "Earth") {
                // add roughness & clouds
                this.material.roughnessMap = textureLoader.load('planet_textures/2k/Ocean.png');
                this.material.metalnessMap = textureLoader.load('planet_textures/2k/Ocean_og.png');
                this.material.roughness = 0.5
                this.material.metalness = 0.7

                const cloudTexture = textureLoader.load('planet_textures/2k/2k_earth_clouds.jpg')
                texture.colorSpace = THREE.SRGBColorSpace

                let cloudGeo = new THREE.SphereGeometry(this.radius * 1.005, 64, 32)
                let cloudsMat = new THREE.MeshStandardMaterial({
                    alphaMap: cloudTexture,
                    transparent: true,
                })
                this.clouds = new THREE.Mesh(cloudGeo, cloudsMat)
                this.clouds.rotation.x = THREE.MathUtils.degToRad(axialTilt); // axis tilt
                this.clouds.position.set(x, y, z)
                scene.add(this.clouds)

                // add atmosphere
                let atmosphereGeo = new THREE.SphereGeometry(this.radius * 1.03, 64, 64)
                let atmosphereMat = new THREE.MeshStandardMaterial({
                    color: new THREE.Color("#003cff"),
                    opacity: 0.1,
                    transparent: true,
                    roughness: 0.7,
                    metalness: 0.6,
                })
                this.atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat)
                this.atmosphere.position.set(x, y, z)
                scene.add(this.atmosphere);
            }

            if(this.name === "Venus") {
                const atmosphereTexture = textureLoader.load('planet_textures/2k/2k_venus_atmosphere.jpg')
                atmosphereTexture.colorSpace = THREE.SRGBColorSpace

                let atmosphereGeo = new THREE.SphereGeometry(this.radius * 1.015, 64, 64)
                let atmosphereMat = new THREE.MeshStandardMaterial({
                    map: atmosphereTexture,
                    opacity: 0.6,
                    transparent: true,
                    roughness: 0.7,
                    metalness: 0.6,
                })
                this.atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat)
                this.atmosphere.rotation.x = THREE.MathUtils.degToRad(axialTilt); // axis tilt
                this.atmosphere.position.set(x, y, z)
                scene.add(this.atmosphere);
            }
        }

        if (isSun) {
            // sun glow effect
            const fakeGlowMaterial = new FakeGlowMaterial({
                falloff: 0.4,
                glowColor: new THREE.Color("#ff0000"),
                glowSharpness: 0.7,
            });
            this.glowSphere = new THREE.Mesh( new THREE.SphereGeometry( radius * 2, 64, 32 ), fakeGlowMaterial);
            scene.add(this.glowSphere);
        }

        this.sphere = new THREE.Mesh(this.geometry, this.material);
        this.sphere.rotation.x = THREE.MathUtils.degToRad(axialTilt); // axis tilt
        this.sphere.position.set(x, y, z)
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

        // vectors
        const gVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );
        const gVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.gVectorLine = new THREE.Line( gVectorLineGeometry, gVectorLineMaterial );
        this.gVectorLine.frustumCulled = false;

        const vVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );
        const vVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.vVectorLine = new THREE.Line( vVectorLineGeometry, vVectorLineMaterial );
        this.vVectorLine.frustumCulled = false;

        if (!isSun) {
            const axisHeight = this.radius * 2
            const axisCoords = [
                new THREE.Vector3(0, -axisHeight, 0), // Start below the sphere
                new THREE.Vector3(0, axisHeight, 0)   // End above the sphere
            ];
            const axisLineMaterial = new THREE.LineBasicMaterial( { color: 0x00ff08 } );
            const axisLineGeometry = new THREE.BufferGeometry().setFromPoints(axisCoords);
            this.axisLine = new THREE.Line( axisLineGeometry, axisLineMaterial );
            this.axisLine.rotation.x = THREE.MathUtils.degToRad(axialTilt); // axis tilt
            this.axisLine.frustumCulled = false;
        }

        if (this.name === "Uranus") {
            this.sphere.rotation.x = THREE.MathUtils.degToRad(0);
            this.axisLine.rotation.x = THREE.MathUtils.degToRad(0);
            this.sphere.rotation.z = THREE.MathUtils.degToRad(axialTilt);
            this.axisLine.rotation.z = THREE.MathUtils.degToRad(axialTilt);
        }

        this.ring = null
    }
    updatePosition(planets) {
        let totalFx = 0;
        let totalFz = 0;
        for (const planet of planets) {
            if (planet.name === this.name) {
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

        this.updateVectorLines(addedXVel, addedZVel)
        this.orbits.push(new THREE.Vector3( this.sphere.position.x, this.sphere.position.y, this.sphere.position.z ))

        if (this.ring) this.ring.ringObj.position.copy(this.sphere.position)
        if (this.glowSphere) this.glowSphere.position.copy(this.sphere.position)
        if (this.clouds) this.clouds.position.copy(this.sphere.position)
        if (this.atmosphere) this.atmosphere.position.copy(this.sphere.position)
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
    updateVectorLines(addedXVel, addedZVel) {
        if (SHOW_VECTORS) {
            const gVectorLinePoints = [
                new THREE.Vector3(this.sphere.position.x, 0, this.sphere.position.z),
                new THREE.Vector3(this.sphere.position.x + addedXVel, 0, this.sphere.position.z + addedZVel)
            ]

            const vVectorLinePoints = [
                new THREE.Vector3(this.sphere.position.x, 0, this.sphere.position.z),
                new THREE.Vector3(this.sphere.position.x + ((this.xVel * DISTANCE_SCALE) * TIME * 10), 0, this.sphere.position.z + ((this.zVel * DISTANCE_SCALE) * TIME * 10))
            ]

            this.gVectorLine.geometry.setFromPoints( gVectorLinePoints );
            this.vVectorLine.geometry.setFromPoints( vVectorLinePoints );
            scene.add( this.gVectorLine );
            scene.add( this.vVectorLine );
            if(!this.isSun) {
                scene.add( this.axisLine );
                this.axisLine.position.set(this.sphere.position.x, this.sphere.position.y, this.sphere.position.z)
            }
        } else {
            scene.remove( this.gVectorLine );
            scene.remove( this.vVectorLine );
            if(!this.isSun) scene.remove( this.axisLine );
        }
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
    constructor(planet, innerRadiusFactor, outerRadiusFactor, color, opacity, lowQMapPath=null, highQMapPath=null) {
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
            opacity: opacity,                 // Set opacity (adjust for overall transparency)
            roughness: 0.5,             // Control the roughness of the ring's surface
            metalness: 0.1,             // Optional: Set metalness for the ring's surface
            map: alphaTexture,     // Apply the alpha texture (this controls transparency)
            // Optional: Additional settings for alpha map handling
            alphaTest: 0.3,             // Optional: Alpha cutoff for rendering (0.5 = no transparency below this value)
            depthTest: true,            // Optional: Control depth testing behavior
            depthWrite: false           // Optional: Prevent depth writes for transparent areas
        });

        if (alphaTexture) ringMaterial.color = null;

        // noinspection JSCheckFunctionSignatures
        this.ringObj = new THREE.Mesh(ringGeometry, ringMaterial);
        this.ringObj.rotation.x = THREE.MathUtils.degToRad(this.parentPlanet.axialTilt + 90); // axis tilt
        this.ringObj.position.set(this.parentPlanet.sphere.position.x, this.parentPlanet.sphere.position.y, this.parentPlanet.sphere.position.z);    // Center the ring at the planet's position

        if (this.parentPlanet.name === "Uranus") {
            this.ringObj.rotation.x = THREE.MathUtils.degToRad(90); // axis tilt
            this.ringObj.rotation.y = THREE.MathUtils.degToRad(this.parentPlanet.axialTilt); // axis tilt
        }

        scene.add(this.ringObj);
    }
}

const sun = new Planet("Sun", 696340 * PLANET_SCALE, 0,  150 * 365, 1.98892 * 10 ** 30, 0xFF740F, 0, 0, 0, true, 'planet_textures/2k/2k_sun.jpg', 'planet_textures/8k/8k_sun.jpg'); // 'planet_textures/2k/2k_sun.jpg'

const mercury = new Planet("Mercury", 2440 * PLANET_SCALE, 0,  58*24, 	0.33010* 10 ** 24, 0x777676,0.387 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_mercury.jpg', 'planet_textures/8k/8k_mercury.jpg');
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

const saturn = new Planet("Saturn", 58232 * PLANET_SCALE,  0, 10.5,5.683 * 10 ** 26, 0x8d8549,9.538 * AU * DISTANCE_SCALE, 0, 0, false, 'planet_textures/2k/2k_saturn.jpg', 'planet_textures/8k/8k_saturn.jpg');
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

camera.position.y = 40; // moving out the camera
controls.update();


// lighting
const sunLight = new THREE.PointLight(0xffffff, 3, 1000);
sunLight.position.set(0, 0, 0);
sunLight.decay = 0;
const softAmbientLight = new THREE.AmbientLight(0x404040, 0.7); // Soft white ambient light
const brightAmbientLight = new THREE.AmbientLight(0xffffff, 2.5);
updateLighting()

// create star background
const stars = createStars()
scene.add(stars);

// exrLoader.load('starmaps/starmap_2020_8k.exr' , (starmapTexture) =>
// exrLoader.load('starmaps/starmap_2020_8k_gal.exr' , (starmapTexture) =>
// exrLoader.load('starmaps/starmap_2020_4k_gal.exr' , (starmapTexture) =>
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
const moonOrbit = new THREE.Object3D();
scene.add(moonOrbit); // Add the orbit object to the scene
moon.position.set(0.002606 * AU * DISTANCE_SCALE, 0, 0); // Position of moon relative to planet
moon.rotation.y = Math.PI;
moonOrbit.add(moon); // Add the moon to the parent object
// moonOrbit.rotation.x = THREE.MathUtils.degToRad(5.14); // axis tilt


// create James Webb space telescope
const jwstScaleFactor = 0.0001
const jwstCenterDistance = 0.005

let jwst = null
const jwstPlane = new THREE.Object3D();
const jwstOrbit = createCircle(jwstCenterDistance, 0xA2A1A1,128);
gltfLoader.load('models/jwst.glb' , (gltf) =>
{
    jwst = gltf.scene
    jwst.rotation.x = THREE.MathUtils.degToRad(90)

    scene.add(jwstPlane); // Add the orbit object to the scene
    jwstPlane.add(jwst)
    jwstPlane.add(jwstOrbit)

    jwst.position.set(jwstCenterDistance, 0, 0);
    jwst.scale.set(jwstScaleFactor, jwstScaleFactor, jwstScaleFactor);
    jwstPlane.rotation.y = THREE.MathUtils.degToRad(90)
});

let jwstCameraOffset = new THREE.Vector3(jwstScaleFactor * 3, jwstScaleFactor * 3, jwstScaleFactor * 3)


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
    if (event.key.toLowerCase() === 'k') {
        const grid_texture_index = backgroundTextures.indexOf(backgroundGrid)
        if (grid_texture_index < backgroundTextures.length - 1) backgroundGrid = backgroundTextures[grid_texture_index + 1]
        else backgroundGrid = backgroundTextures[0]
        updateGridTexture();
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
    if (event.key.toLowerCase() === 'd') { // cycle distance unit
        if (SHOW_LABEL && targetPlanet && !targetPlanet.isSun) { // only update if planet is selected
            const unit_index = distanceUnits.indexOf(distanceUnit)
            if (unit_index < distanceUnits.length - 1) distanceUnit = distanceUnits[unit_index + 1]
            else distanceUnit = distanceUnits[0]
            pushTextToLabel('Cycle distance unit')
            updateLabel();
        }
        return
    }
    if (event.key.toLowerCase() === 'e') { // lock/unlock camera to target planet
        if (jwstSelected) {
            pushTextToLabel(isCameraLocked ? 'Unlock camera' : 'Lock camera')
            if (isCameraLocked) {
                isCameraLocked = false
            } else {
                isCameraLocked = true;
                const jwstWorldPosition = new THREE.Vector3();
                jwst.getWorldPosition(jwstWorldPosition);

                if (PAUSED) jwstCameraOffset = new THREE.Vector3().subVectors(camera.position, jwstWorldPosition);
                else cameraOffset = jwstCameraOffset
            }
            return
        }

        if (!targetPlanet) return
        if (targetPlanet.sphere.position.length() > 0) { // if target planet is not the sun
            pushTextToLabel(isCameraLocked ? 'Unlock camera' : 'Lock camera')
            if (isCameraLocked) {
                isCameraLocked = false
                isCameraSunLocked = false
            } else {
                isCameraLocked = true;
                if (event.shiftKey) {
                    isCameraSunLocked = true
                }
                if (PAUSED) cameraOffset = new THREE.Vector3().subVectors(camera.position, targetPlanet.sphere.position);
                else cameraOffset = calcPlanetOffset(targetPlanet)
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
        pushTextToLabel('Evolve planet into a star')
        if (targetPlanet && !targetPlanet.isSun) {
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
                    if (targetPlanet.name === "Earth") scene.remove(moonOrbit);

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
        if (SHOW_ORBITS) jwstPlane.add(jwstOrbit)
        else jwstPlane.remove(jwstOrbit)
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
    }
    if (event.key.toLowerCase() === 'v') {
        SHOW_VECTORS = !SHOW_VECTORS;
        pushTextToLabel(SHOW_VECTORS ? 'Show planetary vectors' : 'Hide planetary vectors')

        for (const planet of planets) {
            planet.updateVectorLines(0,0)
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

        updateJWSTPosition()
        const jwstWorldPosition = new THREE.Vector3();
        jwst.getWorldPosition(jwstWorldPosition);

        const targetPosition = jwstWorldPosition
        jwstCameraOffset = new THREE.Vector3(jwstScaleFactor * 3, jwstScaleFactor * 3, jwstScaleFactor * 3)
        cameraOffset = jwstCameraOffset
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
                if (SHOW_ORBITS) jwstPlane.add(jwstOrbit)
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

function updateLabel() {
    const labelContainer = document.getElementById('label-container');
    const distanceLabel = document.getElementById('distance-label');
    const speedLabel = document.getElementById('speed-label');
    const weightLabel = document.getElementById('weight-label');
    if (!SHOW_LABEL || !targetPlanet) { // if no target planet or birdseye view: no label
        labelContainer.style.display = 'none';
    } else {
        if (targetPlanet.isSun) distanceLabel.textContent = ""
        else distanceLabel.textContent = convertDistance(targetPlanet.distanceToSun, distanceUnit, AU, LM)

        const v = Math.sqrt(targetPlanet.xVel ** 2 + targetPlanet.zVel ** 2)
        speedLabel.textContent = v.toPrecision(4) + " km/s"
        weightLabel.textContent = targetPlanet.mass.toPrecision(4) + " kg";
        labelContainer.style.display = '';
    }
}

function updateGridTexture() {
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

// Move camera to selected planet
function moveToPlanet(planet, topDown=false) {
    jwstSelected = false
    if (SHOW_ORBITS) jwstPlane.remove(jwstOrbit)
    inEarthSystem = (planet.name === "Earth");
    if (planet === targetPlanet && !planet.isSun) return;
    if(targetPlanet && !planet.isSun) targetPlanet.sphere.rotation.y = 0 // reset planet rotation

    let showLabelChanged = false
    if (SHOW_LABEL) {
        SHOW_LABEL = false // make label stop updating during transition
        showLabelChanged = true
    }

    isCameraLocked = false
    let targetPosition = null
    if (inEarthSystem) moonOrbit.position.copy(earth.sphere.position); // centers moon orbit on earth

    if (topDown) targetPosition = new THREE.Vector3(planet.sphere.position.x, planet.sphere.position.y + 40, planet.sphere.position.z);
    else if (planet.isSun) targetPosition = new THREE.Vector3(planet.sphere.position.x + planet.radius + 0.4, planet.sphere.position.y + planet.radius, planet.sphere.position.z + planet.radius + 0.4)
    else {
        targetPosition = new THREE.Vector3(planet.sphere.position.x, planet.sphere.position.y, planet.sphere.position.z)
    }
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
            if (!topDown && !targetPlanet.isSun) isCameraLocked = true
            if (showLabelChanged) SHOW_LABEL = true
            if (SHOW_LABEL) updateLabel()
        }
    }

    animate();
}

function calcPlanetOffset(planet) {
    return new THREE.Vector3(((0 - planet.sphere.position.x) / planet.sphere.position.x) * (planet.radius * 4), planet.radius, ((0 - planet.sphere.position.z) / planet.sphere.position.z) * (planet.radius * 4))
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
    }, 800); // time in ms
}

function updateJWSTPosition() {
    const d = 0.010027 * AU * DISTANCE_SCALE
    const P1 = new THREE.Vector3()
    const P2 = new THREE.Vector3()
    sun.sphere.getWorldPosition(P1);
    earth.sphere.getWorldPosition(P2);

    // update Orbit position
    const vectorLen = Math.sqrt(((P2.x - P1.x) ** 2) + ((P2.z - P1.z) ** 2))
    jwstPlane.position.x = (P2.x + (d * ((P2.x - P1.x) / vectorLen)))
    jwstPlane.position.z = (P2.z + (d * ((P2.z - P1.z) / vectorLen)))

    // update orbit plane horizontal alignment
    const alpha = Math.atan2((P2.z - P1.z), P2.x - P1.x);
    jwstPlane.rotation.y = THREE.MathUtils.degToRad(90) - alpha

    // update orbit plane vertical rotation
    jwstPlane.rotation.z +=  -0.007
}

function rotateTargetPlanet() {
    sun.sphere.rotation.y += -0.001;
    if (inEarthSystem) {
        moonOrbit.position.copy(earth.sphere.position); // centers moon orbit on earth
        moonOrbit.rotation.y += TRUE_ROTATION_SPEEDS ? -0.0585 : -0.027;// moon orbit speed
        earth.clouds.rotation.y = earth.sphere.rotation.y * 1.3
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
            planet.updatePosition(planets)
        }
        rotateTargetPlanet()
        if (jwstSelected) updateJWSTPosition()

        if (REALISTIC_LIGHTING) sunLight.position.copy(sun.sphere.position)
        if (SHOW_CONNECTION) drawConnection([sun.sphere.position, earth.sphere.position, jwstPlane.position], connectionGeo);
        if (SHOW_LABEL) updateLabel()
    }

    if (jwstSelected) {
        const jwstWorldPosition = new THREE.Vector3();
        jwst.getWorldPosition(jwstWorldPosition);

        if (isCameraLocked) {
            camera.position.copy(jwstWorldPosition).add(jwstCameraOffset);
            camera.lookAt(jwstWorldPosition);
        } else {
            controls.target.copy(jwstWorldPosition);
            controls.update();
        }
    } else if (targetPlanet) {
        if (isCameraLocked) {
            if (isCameraSunLocked) {
                const d = targetPlanet.radius * 20

                // Calculate the unit vector from the planet to the Sun
                const toSunVector = new THREE.Vector3(
                    sun.sphere.position.x - targetPlanet.sphere.position.x,
                    0, // Assuming you're working in the XZ plane
                    sun.sphere.position.z - targetPlanet.sphere.position.z
                ).normalize();

                // Calculate the camera offset to ensure the correct distance
                cameraOffset.set(
                    -d * toSunVector.x, // Negative to place the camera behind the planet
                    0,                  // Y-axis offset, adjust if needed for elevation
                    -d * toSunVector.z
                );
            }
            camera.position.copy(targetPlanet.sphere.position).add(cameraOffset);
            camera.lookAt(targetPlanet.sphere.position);
        } else {
            controls.target.copy(targetPlanet.sphere.position);
            controls.update();
        }
    }

    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );
