import * as THREE from "three";
import {findVectorPair} from "./utils";

export function createStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 40000; // Number of stars
    const positions = new Float32Array(starCount * 3); // x, y, z for each star
    const colors = new Float32Array(starCount * 3); // r, g, b for each star

    const colorOptions = [
        // new THREE.Color().setHex( 0xffffff ), // white
        // new THREE.Color().setHex( 0xf3a4a4 ), // red
        // new THREE.Color().setHex( 0xb9b9ea ), // purple
        // new THREE.Color().setHex( 0xf6c68e ), // purple

        new THREE.Color().setHex( 0x7300ff ), // blue
        new THREE.Color().setHex( 0xff00ea ), // pink
        // new THREE.Color().setHex( 0xff0000 ), // red
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

export function updateTriangles(planets, sunPosition, triangleGeos) {
    planets = planets.filter(planet => !planet.isSun)
    const planetVectors = new Float32Array(planets.length * 3); // Allocate space for x, y, z of each planet

    planets.forEach((planet, index) => {
        planetVectors[index * 3] = planet.sphere.position.x;
        planetVectors[index * 3 + 1] = planet.sphere.position.y;
        planetVectors[index * 3 + 2] = planet.sphere.position.z;
    });

    // first triangle
    const closestPair = findVectorPair(planetVectors, true);

    const closeTriangleCords = new Float32Array([
        sunPosition.x, sunPosition.y, sunPosition.z,
        closestPair[0].x, closestPair[0].y, closestPair[0].z,
        closestPair[1].x, closestPair[1].y, closestPair[1].z,
    ])

    triangleGeos[0].setAttribute('position', new THREE.BufferAttribute(closeTriangleCords, 3));

    // second triangle
    if (triangleGeos.length === 2) {
        const furthestPair = findVectorPair(planetVectors, false);

        const farTriangleCords = new Float32Array([
            sunPosition.x, sunPosition.y, sunPosition.z,
            furthestPair[0].x, furthestPair[0].y, furthestPair[0].z,
            furthestPair[1].x, furthestPair[1].y, furthestPair[1].z,
        ])

        triangleGeos[1].setAttribute('position', new THREE.BufferAttribute(farTriangleCords, 3));
    }
}
