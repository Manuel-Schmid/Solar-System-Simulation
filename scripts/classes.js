import * as THREE from "three";
import FakeGlowMaterial from "./GlowMaterial";
import {PlanetRingGeometry} from "./utils";
import {scene, textureLoader} from "./scene";

export class Planet {
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
    updatePosition(planets, SHOW_VECTORS) {
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

        this.updateVectorLines(addedXVel, addedZVel, SHOW_VECTORS)
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
    updateVectorLines(addedXVel, addedZVel, SHOW_VECTORS, remove=false) {
        if (SHOW_VECTORS && !remove) {
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

export class Ring {
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

export class OrbitTrail {
    constructor(maxLength, color) {
        this.orbitTrailGeometry = new THREE.BufferGeometry();
        this.maxPoints = maxLength; // Limit the number of points in the trail
        this.positions = new Float32Array(this.maxPoints * 3); // Each point has 3 coordinates (x, y, z)
        this.orbitTrailGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        this.orbitTrailMaterial = new THREE.LineBasicMaterial({ color: color });
        this.orbitTrailObj = new THREE.Line(this.orbitTrailGeometry, this.orbitTrailMaterial);
        this.orbitTrailObj.frustumCulled = false;
        scene.add(this.orbitTrailObj);
        this.numPoints = 0;
    }
    reset() {
        this.positions.fill(0);
        this.numPoints = 0;
        this.orbitTrailGeometry.attributes.position.needsUpdate = true;
    }
}
