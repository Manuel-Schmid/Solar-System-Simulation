import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {createStars, updateTriangles} from "./design_utils";
import {formatDistance} from "./utils";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.00001, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );1

const G = 6.67428e-11  // Gravitational constant
const AU = 1.496e+8 // 1 AU in km
const LM = 1.799e+7 // 1 Light minute in km
const DISTANCE_SCALE = 0.0000001 // multiply km distances by this
const PLANET_SCALE = DISTANCE_SCALE // multiply km distances by this
const TIME = 60 * 60 * 6   // one year in 12 Seconds
let distance_units = ["km", "au", "lm"] // units for distances

// setting variables:
let SHOW_LABEL = true;
let SHOW_ORBITS = true;
let SHOW_TRIANGLES = false;
let SHOW_VECTORS = false;
let PAUSED = false;

// program variables
let targetPlanet = null; // Default to the sun
let isCameraLocked = false; // Flag to indicate if the camera is locked to a planet
let cameraOffset = new THREE.Vector3(0.001, 0.01, 0.001); // Default offset
let distance_unit = distance_units[0];
let birdseye = true;

class Planet {
    constructor(radius, mass, colorHex, x=0, y=0, z=0, isSun=false) {
        this.xVel = 0;
        this.zVel = 0;
        this.mass = mass;
        this.radius = radius;
        this.distanceToSun = 0;
        this.isSun = isSun;
        this.orbits = [];
        this.colorHex = colorHex;
        this.geometry = new THREE.SphereGeometry( radius, 32, 16 );
        this.material = new THREE.MeshBasicMaterial( { color: colorHex } ); // hex code in format "0xffffff"
        this.sphere = new THREE.Mesh( this.geometry, this.material );
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

        const gVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );
        const gVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.gVectorLine = new THREE.Line( gVectorLineGeometry, gVectorLineMaterial );
        this.gVectorLine.frustumCulled = false;

        const vVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );
        const vVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.vVectorLine = new THREE.Line( vVectorLineGeometry, vVectorLineMaterial );
        this.vVectorLine.frustumCulled = false;

        this.ring = null
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

            const v = Math.sqrt(targetPlanet.xVel ** 2 + targetPlanet.zVel ** 2)
            const forceV = (this.mass * ((v*1000)  ** 2)) / this.distanceToSun * 1000
            const vVectorLinePoints = [
                new THREE.Vector3(this.sphere.position.x + this.radius, 0, this.sphere.position.z + this.radius),
                new THREE.Vector3(this.sphere.position.x + this.radius + ((this.xVel * DISTANCE_SCALE) * TIME), 0, this.sphere.position.z + this.radius + ((this.zVel * DISTANCE_SCALE) * TIME))
            ]

            this.gVectorLine.geometry.setFromPoints( gVectorLinePoints );
            this.vVectorLine.geometry.setFromPoints( vVectorLinePoints );
            scene.add( this.gVectorLine );
            scene.add( this.vVectorLine );
        }

        this.orbits.push(new THREE.Vector3( this.sphere.position.x, this.sphere.position.y, this.sphere.position.z ))

        if (this.ring) this.ring.updatePosition()
        if (SHOW_ORBITS) this.drawOrbits()
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
    clearOrbit() {
        this.currentOrbitPointCount = 0;
        this.orbitGeometry.setDrawRange(0, this.currentOrbitPointCount);
        this.orbitGeometry.attributes.position.needsUpdate = true; // Notify Three.js of the update

    }
}

class Ring {
    constructor(planet, innerRadiusFactor, outerRadiusFactor, color, xAngle, yAngle=0) {
        this.parentPlanet = planet
        const innerRadius = this.parentPlanet.radius * innerRadiusFactor; // Inner radius slightly larger than planet
        const outerRadius = this.parentPlanet.radius * outerRadiusFactor; // Outer radius of the ring
        const ringSegments = 32;

        const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, ringSegments);
        const ringMaterial = new THREE.MeshBasicMaterial({
            color: color,  // Ring color
            side: THREE.DoubleSide, // Render on both sides
            transparent: false,  // Optional: Make the ring partially transparent
            opacity: 1          // Adjust transparency as needed
        });

        this.ringObj = new THREE.Mesh(ringGeometry, ringMaterial);
        this.ringObj.rotation.x =  xAngle * Math.PI / 180; // rotation angle of the ring
        this.ringObj.rotation.y = yAngle * Math.PI / 180
        this.ringObj.position.set(this.parentPlanet.sphere.position.x, this.parentPlanet.sphere.position.y, this.parentPlanet.sphere.position.z);    // Center the ring at the planet's position

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


const sun = new Planet(696340 * PLANET_SCALE, 1.98892 * 10 ** 30, 0xffffff, 0, 0, 0, true);

const mercury = new Planet(2440 * PLANET_SCALE, 	0.33010* 10 ** 24, 0x777676,0.387 * AU * DISTANCE_SCALE, 0, 0);
mercury.zVel = 47.39996051284; // speed in km/s

const venus = new Planet(6051.8 * PLANET_SCALE, 4.867 * 10 ** 24, 0xff9900,0.72 * AU * DISTANCE_SCALE, 0, 0);
venus.zVel = 35.019991414096;

const earth = new Planet(6371 * PLANET_SCALE, 5.9722 * 10 ** 24, 0x006eff,AU * DISTANCE_SCALE, 0, 0);
earth.zVel = 29.78299948;

const mars = new Planet(3389.5 * PLANET_SCALE, 6.39 * 10 ** 23, 0xff4d00,1.524 * AU * DISTANCE_SCALE, 0, 0);
mars.zVel = 24.076988672178

const jupiter = new Planet(69911 * PLANET_SCALE, 1.898 * 10 ** 27, 0xd8ca9d,5.2 * AU * DISTANCE_SCALE, 0, 0);
jupiter.zVel = 13.06000369219;
const jupiterRing = new Ring(jupiter, 1.4, 1.5, 0xe1d6c4, 90)
jupiter.ring = jupiterRing

const saturn = new Planet(58232 * PLANET_SCALE, 5.683 * 10 ** 26, 0x8d8549,9.538 * AU * DISTANCE_SCALE, 0, 0);
saturn.zVel = 9.679981775672;
const saturnRing = new Ring(saturn, 1.6, 2.7, 0x736c39, 90)
saturn.ring = saturnRing

const uranus = new Planet(25362 * PLANET_SCALE, 8.681 * 10 ** 25, 0x51dbdb,19.56 * AU * DISTANCE_SCALE, 0, 0);
uranus.zVel = 6.7999974;
const uranusRing = new Ring(uranus, 1.5, 1.6, 0xb0ffff, 188, 135)
uranus.ring = uranusRing

const neptune = new Planet(24622 * PLANET_SCALE, 1.024 * 10 ** 26, 0x233fc4,29.90 * AU * DISTANCE_SCALE, 0, 0);
neptune.zVel = 5.4299794

const planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];


camera.position.y = 40; // moving out the camera
targetPlanet = sun
controls.update();


// create star background
const stars = createStars()
scene.add(stars);

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
const moonMaterial = new THREE.MeshBasicMaterial({ color: 0x8f8f8f }); // White color
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
const moonOrbit = new THREE.Object3D();
scene.add(moonOrbit); // Add the orbit object to the scene
moon.position.set(0.002606 * AU * DISTANCE_SCALE, 0, 0); // Position of moon relative to planet
moonOrbit.add(moon); // Add the moon to the parent object


// event listeners
window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { // un/pause the game
        PAUSED = !PAUSED;
        return
    }

    if (event.key.toLowerCase() === 'd') { // cycle distance unit
        if (SHOW_LABEL && targetPlanet && !targetPlanet.isSun) { // only update if planet is selected
            const unit_index = distance_units.indexOf(distance_unit)
            if (unit_index < distance_units.length - 1) distance_unit = distance_units[unit_index + 1]
            else distance_unit = distance_units[0]
            updateLabel();
        }
        return
    }

    if (event.key.toLowerCase() === 'e') { // lock/unlock camera to target planet
        if (targetPlanet.sphere.position.length() > 0) { // if target planet is not the sun
            if (isCameraLocked) {
                unlockCamera(); // Unlock if already locked
            } else {
                lockCameraToPlanet(targetPlanet); // Lock to the current target
            }
        }
        return
    }

    if (event.key.toLowerCase() === 's') {
        if (targetPlanet && !targetPlanet.isSun) {
            targetPlanet.xVel *= 0.8
            targetPlanet.zVel *= 0.8
        }
    }

    if (event.key.toLowerCase() === 'f') {
        if (targetPlanet && !targetPlanet.isSun) {
            targetPlanet.xVel *= 1.2
            targetPlanet.zVel *= 1.2
        }
    }

    if (event.key.toLowerCase() === 'm') {
        if (targetPlanet) {
            targetPlanet.mass *= 2
        }
    }

    if (event.key.toLowerCase() === 'c') {
        moveToPlanet(sun, true);
    }

    if (event.key.toLowerCase() === 'o') {
        SHOW_ORBITS = !SHOW_ORBITS;
    }

    if (event.key.toLowerCase() === 'r') {
        for (const planet of planets) {
            planet.clearOrbit()
        }
    }

    if (event.key.toLowerCase() === 'v') {
        SHOW_VECTORS = !SHOW_VECTORS;

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
            if (event.altKey && birdseye) {
                targetPlanet = planets[number]
                if (SHOW_LABEL) updateLabel()
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

    if (!targetPlanet || targetPlanet.isSun && birdseye) { // if no target planet or birdseye view: no label
        labelContainer.style.display = 'none';
    } else {
        if(!targetPlanet.isSun) {
            distanceLabel.textContent = convertDistance(targetPlanet.distanceToSun)
            const v = Math.sqrt(targetPlanet.xVel ** 2 + targetPlanet.zVel ** 2)
            speedLabel.textContent = v.toPrecision(4) + " km/s"
        } else {
            distanceLabel.textContent = ""
            speedLabel.textContent = ""
        }
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
    else if (planet.isSun) targetPosition = new THREE.Vector3(planet.sphere.position.x + planet.radius, planet.sphere.position.y + planet.radius, planet.sphere.position.z + planet.radius)
    else if(PAUSED) targetPosition = new THREE.Vector3(planet.sphere.position.x, planet.sphere.position.y + 0.01, planet.sphere.position.z + 0.001)
    else targetPosition = (planet.sphere.position).add(new THREE.Vector3(
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
            // planet.sphere.rotation.x += 0.01; // rotation around own axis

            moonOrbit.position.copy(earth.sphere.position); // centers moon orbit on earth
            moonOrbit.rotation.y += 0.012; // moon orbit speed
        }

        if (SHOW_TRIANGLES) updateTriangles(planets, sun.sphere.position, [closeTriangleGeo, farTriangleGeo]);
        if (SHOW_LABEL) updateLabel()
    }

    if (isCameraLocked && targetPlanet) {
        camera.position.copy(targetPlanet.sphere.position).add(new THREE.Vector3(((0-targetPlanet.sphere.position.x) / targetPlanet.sphere.position.x) * (targetPlanet.radius * 4), targetPlanet.radius, ((0-targetPlanet.sphere.position.z) / targetPlanet.sphere.position.z) * (targetPlanet.radius * 4)));
        camera.lookAt(targetPlanet.sphere.position);
    } else {
        // If not locked, allow OrbitControls to manage the camera freely
        controls.target.copy(targetPlanet.sphere.position);
        controls.update();
    }

    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );
