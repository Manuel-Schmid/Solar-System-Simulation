import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {createStars, updateTriangles} from "./design_utils";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const G = 6.67428e-11  // Gravitational constant
const AU = 1.496e+8 // 1 AU in km
const TRUE_SCALE = 0.000001 // multiply km distances by this
const PLANET_SCALE = 0.001 // multiply km distances by this

// setting variables:
let SHOW_ORBITS = true;

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
        const text = convertDistance(this.distanceToSun) + " km";
        this.context.clearRect(0, 0, 256, 256); // Clear the previous text
        this.context.fillText(text, 0, 24);
        this.spriteMaterial.map.needsUpdate = true; // Refresh the texture
    }
}

function convertDistance(value) { // todo delete
    return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")
}


const sun = new Planet(696340 * 0.00005, 1.98892 * 10 ** 30, 0xffa900, 0, 0, 0, true);


const mercury = new Planet(2440 * PLANET_SCALE, 	0.33010* 10 ** 24, 0x8f8f8f,0.387 * AU * TRUE_SCALE, 0, 0);
mercury.zVel = 1.49602;

const venus = new Planet(6051.8 * PLANET_SCALE, 4.867 * 10 ** 24, 0xff9900,0.72 * AU * TRUE_SCALE, 0, 0);
venus.zVel = 1.105288;

const earth = new Planet(6371 * PLANET_SCALE, 5.9722 * 10 ** 24, 0x009dff,AU * TRUE_SCALE, 0, 0);
earth.zVel = 0.94; // speed in og project / 31.684042

// const moon = new Planet(1000 * PLANET_SCALE, 7.34767 * 10 ** 22, 0x8f8f8f,(AU + (0.002710 * AU)) * TRUE_SCALE, 0, 0);
// moon.zVel = 0.032287;
// moon.zVel = 0.032287 + 0.94;

const mars = new Planet(3389.5 * PLANET_SCALE, 6.39 * 10 ** 23, 0xff1e00,1.524 * AU * TRUE_SCALE, 0, 0);
mars.zVel = 0.759909

// const jupiter = new Planet(3389.5 * PLANET_SCALE, 1.898 * 10 ** 27, 0xd8ca9d,5.2 * AU * TRUE_SCALE, 0, 0);
// jupiter.zVel = 0.412195
//
// const saturn = new Planet(3389.5 * PLANET_SCALE, 5.683 * 10 ** 26, 0xd6c96f,9.538 * AU * TRUE_SCALE, 0, 0);
// saturn.zVel = 0.305516
//
// const uranus = new Planet(3389.5 * PLANET_SCALE, 8.681 * 10 ** 25, 0x51dbdb,19.56 * AU * TRUE_SCALE, 0, 0);
// uranus.zVel = 0.214619
//
// const neptune = new Planet(3389.5 * PLANET_SCALE, 1.024 * 10 ** 26, 0x233fc4,29.90 * AU * TRUE_SCALE, 0, 0);
// neptune.zVel = 0.171379

const planets = [sun, mercury, venus, earth, mars]; // , jupiter, saturn, uranus, neptune

camera.position.y = 400; // moving out the camera
controls.update();

// Call function to create stars
const stars = createStars()
scene.add(stars);

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


function render() { // runs with 60 fps
    for (const planet of planets){
        planet.updatePosition(planets)
    }

    updateTriangles(planets, sun.sphere.position, [closeTriangleGeo, farTriangleGeo]);

    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );