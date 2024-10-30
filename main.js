import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const G = 6.67428e-11  // Gravitational constant
const AU = 1.496e+8 // 1 AU in km
const TRUE_SCALE = 0.0001 // multiply km distances by this
const PLANET_SCALE = 0.001 // multiply km distances by this

class Planet {
    constructor( radius, mass, colorHex, x=0, y=0, z=0, xVel=0, zVel=0, isSun=false) {
        this.xVel = xVel;
        this.zVel = zVel;
        this.mass = mass;
        this.distanceToSun = 0;
        this.isSun = isSun
        this.geometry = new THREE.SphereGeometry( radius, 32, 16 );
        this.material = new THREE.MeshBasicMaterial( { color: colorHex } ); // hex code in format "0xffffff"
        this.sphere = new THREE.Mesh( this.geometry, this.material );
        this.sphere.position.set(x, y, z)
        scene.add( this.sphere );
    }
    updatePosition(planets) {
        if (this.isSun) { return } // fixed sun, this
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
        this.xVel += totalFx / this.mass  * TRUE_SCALE * 0.01
        this.zVel += totalFz / this.mass * TRUE_SCALE * 0.01
        console.log(this.xVel)
        console.log(this.zVel)
        this.sphere.position.x += this.xVel
        this.sphere.position.z += this.zVel
    }
    attraction(other) { // attraction between self & other planet
        const distance_x = (other.sphere.position.x - this.sphere.position.x) / TRUE_SCALE / 0.01;
        const distance_z = other.sphere.position.z - this.sphere.position.z / TRUE_SCALE / 0.01;
        const distance = Math.sqrt(distance_x ** 2 + distance_z ** 2)
        // console.log(distance)
        if (other.isSun) {
            this.distanceToSun = distance
        }
        const force = G * this.mass * other.mass / distance ** 2 // law of attraction
        const theta = Math.atan2(distance_z, distance_x)
        const force_x = Math.cos(theta) * force
        const force_z = Math.sin(theta) * force
        return [{force_x: force_x, force_z: force_z}]
    }
}

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const sun = new Planet(696340 * TRUE_SCALE, 1.98892 * 10 ** 30, 0xffa900);
sun.isSun = true;

const earth = new Planet(6371 * PLANET_SCALE, 5.9722 * 10 ** 24, 0x009dff, AU * TRUE_SCALE * 0.01, 0, 0);
earth.zVel = 1
const planets = [sun, earth];

camera.position.z = 140; // moving out the camera
controls.update();


let counter = 0;
function render() { // runs with 60 fps
    // sphere.rotation.y += 0.01;
    // earth.sphere.position.x += 0.1
    // counter ++
    if (counter < 10) {
        for (const planet of planets){
            planet.updatePosition(planets)
        }
    }


    renderer.render( scene, camera );
}
renderer.setAnimationLoop( render );

