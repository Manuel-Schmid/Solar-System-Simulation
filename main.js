import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {createStars, updateTriangles} from "./design_utils";
import {formatDistance} from "./utils";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
// controls.enableDamping = true;
// controls.dampingFactor = 0.1; // Adjust this value for smoother transitions (0.05 to 0.2 works well)


const G = 6.67428e-11  // Gravitational constant
const AU = 1.496e+8 // 1 AU in km
const LM = 1.799e+7 // 1 Light minute in km
const TRUE_SCALE = 0.000001 // multiply km distances by this
const PLANET_SCALE = 0.001 // multiply km distances by this
const VELOCITY_FACTOR = 31.684042 // divide km/s by this
let distance_units = ["km", "au", "lm"] // units for distances

// setting variables:
let SHOW_ORBITS = true;
let PAUSED = false;
let distance_unit = distance_units[0];


class Planet {
    constructor( radius, mass, colorHex, x=0, y=0, z=0, isSun=false) {
        this.xVel = 0;
        this.zVel = 0;
        this.mass = mass;
        this.distanceToSun = 0;
        this.isSun = isSun;
        this.orbits = [];
        this.colorHex = colorHex;
        this.geometry = new THREE.SphereGeometry( radius, 32, 16 );
        this.material = new THREE.MeshBasicMaterial( { color: colorHex } ); // hex code in format "0xffffff"
        this.sphere = new THREE.Mesh( this.geometry, this.material );
        this.sphere.position.set(x, y, z)
        scene.add( this.sphere );

        this.label = null
        if (!isSun) {
            this.label = this.createLabel(0 + " km");
            this.sphere.add(this.label);
        }
    }
    updatePosition(planets) {
        if (this.isSun) { return } // fixed sun
        let totalFx = 0;
        let totalFz = 0;
        for (const planet of planets) {
            if (planet.mass === this.mass) {
                continue;
            }
            const forces = this.attraction(planet)
            totalFx += forces[0].force_x
            totalFz += forces[0].force_z
        }
        this.xVel += totalFx / this.mass * TRUE_SCALE
        this.zVel += totalFz / this.mass * TRUE_SCALE
        this.sphere.position.x += this.xVel
        this.sphere.position.z += this.zVel
        this.orbits.push(new THREE.Vector3( this.sphere.position.x, this.sphere.position.y, this.sphere.position.z ))

        this.updateLabel()
        if (SHOW_ORBITS) this.drawOrbits()
    }
    attraction(other) { // attraction between self & other planet
        const distance_x = (other.sphere.position.x - this.sphere.position.x) / TRUE_SCALE;
        // console.log("X: " + Math.round(this.sphere.position.x) + " | Y: " + Math.round(this.sphere.position.z))

        const distance_z = (other.sphere.position.z - this.sphere.position.z) / TRUE_SCALE;
        const distance = Math.sqrt(distance_x ** 2 + distance_z ** 2) // distance in km
        // console.log(convertDistance(distance)) // todo
        if (other.isSun) {
            this.distanceToSun = distance
        }
        const force = G * this.mass * other.mass / distance ** 2 // law of attraction
        const theta = Math.atan2(distance_z, distance_x)
        const force_x = Math.cos(theta) * force
        const force_z = Math.sin(theta) * force
        return [{force_x: force_x, force_z: force_z}]
    }
    drawOrbits() {
        const orbitMaterial = new THREE.LineBasicMaterial( { color: this.colorHex } );
        let orbitGeometry = undefined;
        if (this.orbits.length <= 1) {
            orbitGeometry = new THREE.BufferGeometry().setFromPoints(this.orbits);
        } else {
            const travelled = [this.orbits[this.orbits.length - 2], this.orbits[this.orbits.length - 1]]
            orbitGeometry = new THREE.BufferGeometry().setFromPoints(travelled);
        }
        if (!orbitGeometry) return orbitGeometry; // catch orbitGeometry undefined
        const line = new THREE.Line( orbitGeometry, orbitMaterial );
        scene.add(line);
    }
    createLabel(text) {
        const canvas = document.createElement('canvas');
        this.context = canvas.getContext('2d');
        this.context.font = '24px Arial';
        this.context.fillStyle = 'white';
        this.context.fillText(text, 0, 24);

        const texture = new THREE.CanvasTexture(canvas);
        this.spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(this.spriteMaterial);
        sprite.scale.set(50, 25, 25);
        sprite.position.set(0, 0, 0);
        return sprite;
    }
    updateLabel() {
        const distanceText = convertDistance(this.distanceToSun) + " " + distance_unit;
        this.context.clearRect(0, 0, 256, 256); // Clear the previous text
        this.context.fillText(distanceText, 0, 24);
        this.spriteMaterial.map.needsUpdate = true; // Refresh the texture
    }
}

function convertDistance(distance) {
    let calculatedDistance = 0;
    if (distance_unit === "km") {
        calculatedDistance = formatDistance(distance)
    } else if (distance_unit === "au") {
        calculatedDistance = (distance / AU).toPrecision(4) // round to 4 significant decimals
    } else if (distance_unit === "lm") {
        const lm = Math.floor(distance / LM)
        const ls = Math.floor((distance % LM) / (LM / 60))
        calculatedDistance = lm + ":" + ls
    }
    return calculatedDistance;
}


const sun = new Planet(696340 * 0.00005, 1.98892 * 10 ** 30, 0xffffff, 0, 0, 0, true);

const mercury = new Planet(2440 * PLANET_SCALE, 	0.33010* 10 ** 24, 0x777676,0.387 * AU * TRUE_SCALE, 0, 0);
mercury.zVel = 47.39996051284 / VELOCITY_FACTOR;

const venus = new Planet(6051.8 * PLANET_SCALE, 4.867 * 10 ** 24, 0xff9900,0.72 * AU * TRUE_SCALE, 0, 0);
venus.zVel = 35.019991414096 / VELOCITY_FACTOR;

const earth = new Planet(6371 * PLANET_SCALE, 5.9722 * 10 ** 24, 0x006eff,AU * TRUE_SCALE, 0, 0);
earth.zVel = 29.78299948 / VELOCITY_FACTOR; // speed in og project / 31.684042

const mars = new Planet(3389.5 * PLANET_SCALE, 6.39 * 10 ** 23, 0xff4d00,1.524 * AU * TRUE_SCALE, 0, 0);
mars.zVel = 24.076988672178 / VELOCITY_FACTOR

const jupiter = new Planet(3389.5 * PLANET_SCALE, 1.898 * 10 ** 27, 0xd8ca9d,5.2 * AU * TRUE_SCALE, 0, 0);
jupiter.zVel = 13.06000369219 / VELOCITY_FACTOR;

const saturn = new Planet(3389.5 * PLANET_SCALE, 5.683 * 10 ** 26, 0xd6c96f,9.538 * AU * TRUE_SCALE, 0, 0);
saturn.zVel = 9.679981775672 / VELOCITY_FACTOR

const uranus = new Planet(3389.5 * PLANET_SCALE, 8.681 * 10 ** 25, 0x51dbdb,19.56 * AU * TRUE_SCALE, 0, 0);
uranus.zVel = 6.7999974 / VELOCITY_FACTOR

const neptune = new Planet(3389.5 * PLANET_SCALE, 1.024 * 10 ** 26, 0x233fc4,29.90 * AU * TRUE_SCALE, 0, 0);
neptune.zVel = 5.4299794 / VELOCITY_FACTOR

const planets = [sun, mercury, venus, earth, mars];
// const planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

camera.position.y = 400; // moving out the camera
controls.update();

// Call function to create stars
// const stars = createStars()
// scene.add(stars);

// create triangle 1 between two planets closest to each other and the sun
const closeTriangleGeo = new THREE.BufferGeometry();
const closeTriangleMat = new THREE.LineBasicMaterial({ color: new THREE.Color().setHex( 0x00ff08 ) }); // Line material
const closeTriangleOutline = new THREE.LineLoop(closeTriangleGeo, closeTriangleMat); // Create the line loop
scene.add(closeTriangleOutline);

// create triangle 2 between two planets farthest to each other and the sun
const farTriangleGeo = new THREE.BufferGeometry();
const farTriangleMat = new THREE.LineBasicMaterial({ color: new THREE.Color().setHex( 0xfc0341 ) }); // Line material
const farTriangleOutline = new THREE.LineLoop(farTriangleGeo, farTriangleMat); // Create the line loop
scene.add(farTriangleOutline);

// create asteroid belt
// const ringGeometry = new THREE.TorusGeometry(2.8 * AU * TRUE_SCALE, 0.3, 16, 100); // Major radius 1.5, tube radius 0.1
// const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x8f8f8f, side: THREE.DoubleSide }); // Yellow color
// const asteroidBelt = new THREE.Mesh(ringGeometry, ringMaterial);
// asteroidBelt.rotation.x = Math.PI / 2; // Rotate ring to be horizontal
// scene.add(asteroidBelt);

// create moon
const moonGeometry = new THREE.SphereGeometry(1737.4 * PLANET_SCALE, 32, 16); // Smaller radius for the moon
const moonMaterial = new THREE.MeshBasicMaterial({ color: 0x8f8f8f }); // White color
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
const moonOrbit = new THREE.Object3D();
scene.add(moonOrbit); // Add the orbit object to the scene
moon.position.set(0.06 * AU * TRUE_SCALE, 0, 0); // Position of moon relative to planet
moonOrbit.add(moon); // Add the moon to the parent object


// Add raycaster and mouse vector for planet selection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let targetPlanet = sun.sphere; // Default to the sun
let isCameraLocked = false; // Flag to indicate if the camera is locked to a planet
let cameraOffset = new THREE.Vector3(0, 0, 0); // Default offset

window.addEventListener('mousedown', (event) => { // Handle mouse click
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    isCameraLocked = false;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(planets.map(planet => planet.sphere));

    if (intersects.length > 0) {
        if (targetPlanet !== intersects[0].object) {
            moveToPlanet(intersects[0].object); // Get the planet from intersected object
        }
    }
});

// Pause functionality
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { // un/pause the game
        PAUSED = !PAUSED;
        return
    }

    if (event.key.toLowerCase() === 'd') { // cycle distance unit
        const unit_index = distance_units.indexOf(distance_unit)
        if (unit_index < distance_units.length - 1) distance_unit = distance_units[unit_index + 1]
        else distance_unit = distance_units[0]

        for (const planet of planets) {
            if (!planet.isSun) planet.updateLabel() // manually update labels (so it updates during pause as well)
        }
        return
    }

    if (event.key.toLowerCase() === 'e') { // lock/unlock camera to target planet
        if (targetPlanet.position.length() > 0) { // if target planet is not the sun
            if (isCameraLocked) {
                unlockCamera(); // Unlock if already locked
            } else {
                lockCameraToPlanet(targetPlanet); // Lock to the current target
            }
        }
        return
    }

    if (event.key.toLowerCase() === 'c') {
        moveToPlanet(sun.sphere, true);
    }

    if (event.key >= '1' && event.key <= '9') {
        const number = parseInt(event.key);
        if (planets[number]) {
            moveToPlanet(planets[number].sphere);
        }
    }
});

// Move camera to selected planet
function moveToPlanet(planet, topDown=false) {
    isCameraLocked = false;
    targetPlanet = planet;
    let targetPosition = new THREE.Vector3(planet.position.x, planet.position.y + 50, planet.position.z + 100); // Adjust camera position
    if (topDown) targetPosition = new THREE.Vector3(planet.position.x, planet.position.y + 400, planet.position.z); // Adjust camera position
    const duration = 1; // Duration the movement in seconds
    const startPosition = camera.position.clone();
    const startTime = performance.now();

    function animate() {
        const elapsed = (performance.now() - startTime) / 1000; // Convert to seconds
        const t = Math.min(elapsed / duration, 1); // Normalize time to [0, 1]
        camera.position.lerpVectors(startPosition, targetPosition, t); // Smoothly move camera
        controls.target.copy(planet.position); // Update the OrbitControls target to the new planet
        controls.update(); // Update controls to apply the new target

        if (t < 1) {
            requestAnimationFrame(animate); // Continue animation
        }
    }

    animate();
}


// Function to lock the camera to a target planet
function lockCameraToPlanet(planet) {
    isCameraLocked = true;
    // Calculate initial offset based on the planet's current position
    cameraOffset = new THREE.Vector3().subVectors(camera.position, planet.position);
}

// Function to unlock the camera from the target planet
function unlockCamera() {
    isCameraLocked = false;
}

function render() { // runs with 60 fps
    if(!PAUSED) {
        for (const planet of planets) {
            planet.updatePosition(planets)
            // planet.sphere.rotation.x += 0.01; // rotation around own axis

            moonOrbit.position.copy(earth.sphere.position); // centers moon orbit on earth
            moonOrbit.rotation.y += 0.02; // speed of moons orbit around earth
        }

        updateTriangles(planets, sun.sphere.position, [closeTriangleGeo, farTriangleGeo]);
    }

    // Update the camera's position if locked to a target planet
    if (isCameraLocked && targetPlanet) {
        // Update camera's position based on the planet's position and fixed offset
        camera.position.copy(targetPlanet.position).add(cameraOffset);
        camera.lookAt(targetPlanet.position);
    } else {
        // If not locked, allow OrbitControls to manage the camera freely
        controls.target.copy(targetPlanet.position);
        // controls.target.lerp(targetPlanet.position, 0.1); // Lerp factor of 0.1 for smoother transitions
        controls.update();
    }



    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );