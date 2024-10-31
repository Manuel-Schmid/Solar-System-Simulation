import * as THREE from "three";

export function createStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 40000; // Number of stars
    const positions = new Float32Array(starCount * 3); // x, y, z for each star
    const colors = new Float32Array(starCount * 3); // r, g, b for each star

    const colorOptions = [
        new THREE.Color().setHex( 0xffffff ), // white
        new THREE.Color().setHex( 0xff0000 ),
        new THREE.Color().setHex( 0xff00ea ),
        new THREE.Color().setHex( 0x001eff ),
    ];

    for (let i = 0; i < starCount; i++) {
        let x, y, z;

        // Generate positions while excluding the center range of -500 to 500 for x, y, and z
        do {
            x = (Math.random() - 0.5) * 2000; // Scale to your desired range
            y = (Math.random() - 0.5) * 2000; // Scale to your desired range
            z = (Math.random() - 0.5) * 2000; // Scale to your desired range
        } while (Math.abs(x) < 400 && Math.abs(y) < 400 && Math.abs(z) < 400); // Check if within the exclusion zone

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