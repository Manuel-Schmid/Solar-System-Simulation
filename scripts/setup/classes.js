import * as THREE from "three";
import FakeGlowMaterial from "../design/GlowMaterial";
import {getPositionDistance, PlanetRingGeometry} from "../utils";
import {adjustFOV, gltfLoader, scene, textureLoader} from "./scene";
import {updateLabel} from "../design/designUtils";

export class Spacecraft {
    constructor(mass, x, y, z, angularVelocity, acceleration, scale, tiltAngle) {
        this.xVel = 0;
        this.yVel = 0;
        this.zVel = 0;
        this.mass = mass;
        this.angularVelocity = angularVelocity;
        this.acceleration = acceleration;
        this.obj = null;
        this.orbits = [];
        this.bolts = [];
        this.scale = scale
        this.distanceTosun = 0;
        this.distanceToTarget = 0;
        this.tiltAngle = tiltAngle
        this.container = new THREE.Object3D();
        this.container.scale.set(scale, scale, scale);
        this.container.position.set(x, y, z)

        this.flameMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 }, // For animation
                scale: { value: scale },
                originalScale: { value: 0.001 },
                // color1: { value: new THREE.Color(0xCE4F00) }, // Base color  0x00A8CE
                // color2: { value: new THREE.Color(0xCE8D00) }, // Tip color  0x00A8CE
                color1: { value: new THREE.Color(0x0030ce) }, // Base color  0x00A8CE
                color2: { value: new THREE.Color( 0x00A8CE) }, // Tip color  0x00A8CE
            },
            vertexShader: `
    varying vec3 vPosition;
    void main() {
        vPosition = position; // Pass position to fragment shader
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
            fragmentShader: `
    uniform float time;
    uniform float scale; // Current scale
    uniform float originalScale; // Reference scale (0.001)
    uniform vec3 color1; // Base color
    uniform vec3 color2; // Tip color
    varying vec3 vPosition;

    // 2D noise function
    float noise(vec2 uv) {
        return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
        // Compute the normalized position based on the scale ratio
        float scaleRatio = scale / originalScale;
        float normalizedY = vPosition.y * scaleRatio;

        // Add procedural noise for texture, adjusted for scale ratio
        float flameNoise = noise(vec2(normalizedY * 5.0, time * 0.5)) * 0.5 + 0.5;

        // Blend base color and tip color based on height, adjusted for scale ratio
        float heightFactor = smoothstep(0.0, 1.0, normalizedY + 0.5);
        vec3 flameColor = mix(color1, color2, heightFactor);

        // Combine noise and height factor for final intensity
        float intensity = flameNoise;

        // Normalize intensity for additive blending consistency
        intensity = clamp(intensity, 0.0, 1.0); // Prevent oversaturation

        // Add fading transparency toward the edges
        float alpha = smoothstep(0.0, 1.0, intensity) * 2.8;

        // Output the flame color with transparency
        gl_FragColor = vec4(flameColor * intensity, alpha);
    }
    `,
            transparent: true, // Allows blending with the background
            blending: THREE.AdditiveBlending, // Glow effect
        });

        const shipLight = new THREE.PointLight(0xFF4D00, 0.03, 10); // 0x500505 0x7A1515
        shipLight.position.set(0, 0, 0); // Centered relative to the spaceship
        shipLight.visible = spacecraftLight

        const flameGeometry = new THREE.ConeGeometry(500 * scale, 2000 * scale, 32); //
        const flame1 = new THREE.Mesh(flameGeometry, this.flameMaterial);
        const flame2 = new THREE.Mesh(flameGeometry, this.flameMaterial);
        const flame3 = new THREE.Mesh(flameGeometry, this.flameMaterial);
        const flame4 = new THREE.Mesh(flameGeometry, this.flameMaterial);

        flame1.position.set(1.04, -1.2, -2.3)
        flame1.scale.set(0.001 / scale,0.001 / scale,0.0007 / scale);
        flame1.rotation.x = THREE.MathUtils.degToRad(-90)

        flame2.position.set(-1.04, -1.2, -2.3)
        flame2.scale.set(0.001 / scale,0.001 / scale,0.0007 / scale);
        flame2.rotation.x = THREE.MathUtils.degToRad(-90)

        flame3.position.set(1.5, -0.95, 6)
        flame3.scale.set(0.0011 / scale,0.0044 / scale,0.00033 / scale);
        flame3.rotation.x = THREE.MathUtils.degToRad(-270)
        flame3.rotation.z = THREE.MathUtils.degToRad(-6)

        flame4.position.set(-1.5, -0.95, 6)
        flame4.scale.set(0.0011 / scale,0.0044 / scale,0.00033 / scale);
        flame4.rotation.x = THREE.MathUtils.degToRad(-270)
        flame4.rotation.z = THREE.MathUtils.degToRad(6)

        const cameraHelperFar = new THREE.Object3D();
        cameraHelperFar.position.set(0, 8, -20);

        const cameraHelperClose = new THREE.Object3D();
        cameraHelperClose.position.set(0, 3, -10);

        const firstPersonCameraHelper = new THREE.Object3D();
        firstPersonCameraHelper.position.set(0, 1, 0);

        // model
        // gltfLoader.load('models/spacecraft_fullSize.glb' , (gltf) =>
        gltfLoader.load('models/spacecraft.glb' , (gltf) =>
        {
            this.obj = gltf.scene
            this.obj.position.set(0,0,0)

            this.obj.add(shipLight);
            this.obj.shipLight = shipLight;

            this.obj.add(flame1)
            this.obj.flame1 = flame1;
            this.obj.add(flame2)
            this.obj.flame2 = flame2;
            this.obj.add(flame3)
            this.obj.flame3 = flame3;
            this.obj.add(flame4)
            this.obj.flame4 = flame4;

            this.obj.flame1.visible = false;
            this.obj.flame2.visible = false;
            this.obj.flame3.visible = false;
            this.obj.flame4.visible = false;

            this.obj.add(cameraHelperFar);
            this.obj.cameraHelperFar = cameraHelperFar;

            this.obj.add(cameraHelperClose);
            this.obj.cameraHelperClose = cameraHelperClose;

            this.obj.add(firstPersonCameraHelper);
            this.obj.firstPersonCameraHelper = firstPersonCameraHelper;

            // dev only:
            // const axesHelper = new THREE.AxesHelper(10);
            // this.obj.add(axesHelper);
            // const axesHelper2 = new THREE.AxesHelper(20);
            // this.container.add(axesHelper2);

            this.container.add(this.obj);
            scene.add(this.container);
        });

        const gVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0xfc0303 } );
        const gVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.gVectorLine = new THREE.Line( gVectorLineGeometry, gVectorLineMaterial );
        this.gVectorLine.frustumCulled = false;

        const yVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0x0ffc03 } );
        const yVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.yVectorLine = new THREE.Line( yVectorLineGeometry, yVectorLineMaterial );
        this.yVectorLine.frustumCulled = false;

        const resVectorLineMaterial = new THREE.LineBasicMaterial( { color: 0x0ffc03 } );
        const resVectorLineGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), new THREE.Vector3(0,0,0)]);
        this.resVectorLine = new THREE.Line( resVectorLineGeometry, resVectorLineMaterial );
        this.resVectorLine.frustumCulled = false;

        // orbits
        const maxPoints = 1000;  // Arbitrary initial size, can be increased dynamically
        this.orbitPositions = new Float32Array(maxPoints * 3);
        this.orbitGeometry = new THREE.BufferGeometry();
        this.orbitGeometry.setAttribute('position', new THREE.BufferAttribute(this.orbitPositions, 3));
        const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x6203fc });
        this.orbitLine = new THREE.Line(this.orbitGeometry, orbitMaterial);
        this.currentOrbitPointCount = 0;
        this.orbitLine.frustumCulled = false;
        this.orbitLine.renderOrder = -3;
        this.orbitLine.material.depthTest = true;
        this.orbitLine.material.depthWrite = true;
        scene.add(this.orbitLine);
    }
    changeMomentum() {
        const yaw = this.container.rotation.y; // Y-axis rotation (yaw)
        const pitch = this.obj.rotation.x;     // X-axis rotation (pitch)

        const forwardX = Math.sin(yaw) * Math.cos(pitch); // Forward movement along X-axis
        const forwardY = -Math.sin(pitch);                // Forward movement along Y-axis
        const forwardZ = Math.cos(yaw) * Math.cos(pitch); // Forward movement along Z-axis

        const leftX = Math.sin(yaw + Math.PI / 2);        // Lateral (sideways) movement along X-axis
        const leftZ = Math.cos(yaw + Math.PI / 2);        // Lateral (sideways) movement along Z-axis

        const lateralAcceleration = this.acceleration * 0.75; // Reduce lateral acceleration

        // scaling velocities (smooth arrival)
        let accelScale = 1
        if (targetPlanet && !spacecraftMatchVelocity && !spacecraftGravity) {
            const CLOSE_DISTANCE = targetPlanet.radius * 200 / PLANET_SCALE; // start of downscaling
            const MIN_ACCEL_SCALE = 0.001; // Minimum scaling factor for acceleration
            const distanceToTarget = this.distanceToTarget;

            if (distanceToTarget < CLOSE_DISTANCE) {
                accelScale = Math.max(MIN_ACCEL_SCALE, distanceToTarget / CLOSE_DISTANCE);
                // console.log("acceleration scaling factor: " + accelScale);
            }
        }

        if (forwardPressed) {
            this.xVel += forwardX * this.acceleration * accelScale;
            if (ACTIVE_ASCENSION_AXIS) this.yVel += forwardY * this.acceleration * accelScale;
            this.zVel += forwardZ * this.acceleration * accelScale;

            this.obj.flame1.visible = true;
            this.obj.flame2.visible = true;
            adjustFOV(Math.min(SPACECRAFT_FOV * 1.2, 170));
        }
        if (backwardPressed) {
            this.xVel -= forwardX * this.acceleration * accelScale;
            if (ACTIVE_ASCENSION_AXIS) this.yVel -= forwardY * this.acceleration * accelScale;
            this.zVel -= forwardZ * this.acceleration * accelScale;

            this.obj.flame3.visible = true;
            this.obj.flame4.visible = true;
            adjustFOV(SPACECRAFT_FOV * 0.85);
        }
        if (portPressed) {
            this.xVel += leftX * lateralAcceleration * accelScale;
            this.zVel += leftZ * lateralAcceleration * accelScale;

            this.container.rotation.z = THREE.MathUtils.lerp(this.container.rotation.z, -this.tiltAngle, 0.08);
        }
        if (starboardPressed) {
            this.xVel -= leftX * lateralAcceleration * accelScale;
            this.zVel -= leftZ * lateralAcceleration * accelScale;

            this.container.rotation.z = THREE.MathUtils.lerp(this.container.rotation.z, this.tiltAngle, 0.08);
        }
        if (handbrakePressed) {
            this.xVel = 0;
            this.yVel = 0;
            this.zVel = 0;
            adjustFOV(SPACECRAFT_FOV * 0.85)
            updateLabel()
        }
        if (rotatePortPressed && !targetPlanet) {
            this.container.rotation.y += this.angularVelocity;
        }
        if (rotateStarboardPressed && !targetPlanet) {
            this.container.rotation.y -= this.angularVelocity;
        }
    }
    rotateSpacecraft(xAngle, yAngle) {
        this.container.rotation.y -= yAngle;
        const pitchQuaternion = new THREE.Quaternion();
        const localX = new THREE.Vector3(1, 0, 0); // Local X-axis for pitch rotation
        pitchQuaternion.setFromAxisAngle(localX, xAngle);  // Apply rotation to the local X-axis
        this.obj.quaternion.multiply(pitchQuaternion);  // Apply to the spacecraft object
    }
    updatePosition(planets, sunPosition) {
        let addedXVel = 0;
        let addedYVel = 0;
        let addedZVel = 0;

        if (!targetPlanet) spacecraftMatchVelocity = false
        if (spacecraftMatchVelocity) {
            this.xVel = targetPlanet.xVel;
            this.yVel = targetPlanet.yVel;
            this.zVel = targetPlanet.zVel;
        } else {
            if (spacecraftGravity) {
                let totalFx = 0;
                let totalFy = 0;
                let totalFz = 0;
                for (const planet of planets) {
                    const forces = this.attraction(planet)
                    totalFx += forces[0].force_x; // Force in N
                    totalFy += forces[0].force_y; // y-force optional
                    totalFz += forces[0].force_z; // Force in N
                }

                addedXVel = ((totalFx / this.mass)/1000) * TIME
                addedYVel = ((totalFy / this.mass)/1000) * TIME;
                addedZVel = ((totalFz / this.mass)/1000) * TIME
                this.xVel += addedXVel; // in km/s
                this.yVel += addedYVel;
                this.zVel += addedZVel;
            }
        }

        this.container.position.x += ((this.xVel * DISTANCE_SCALE) * TIME)
        this.container.position.y += ((this.yVel * DISTANCE_SCALE) * TIME);
        this.container.position.z += ((this.zVel * DISTANCE_SCALE) * TIME)

        if (!spacecraftGravity) {
            this.distanceToSun = getPositionDistance(sunPosition, this.container.position) / 1000
            if (targetPlanet) this.distanceToTarget = getPositionDistance(targetPlanet.sphere.position, this.container.position) / 1000
        }

        // console.log("xVel: " + Math.round(this.xVel * 1000) / 1000 + " | zVel: " + Math.round(this.zVel * 1000) / 1000)
        this.updateVectorLines(addedXVel, addedYVel, addedZVel);
        this.orbits.push(new THREE.Vector3( this.container.position.x, this.container.position.y, this.container.position.z ))
        this.drawOrbits()
    }
    attraction(planet) {
        const distance_x = ((planet.sphere.position.x - this.container.position.x) / DISTANCE_SCALE) * 1000 // distance in meters;
        const distance_y = ((planet.sphere.position.y - this.container.position.y) / DISTANCE_SCALE) * 1000; // distance in meters
        const distance_z = ((planet.sphere.position.z - this.container.position.z) / DISTANCE_SCALE) * 1000 // distance in meters;
        const distance = Math.sqrt(distance_x ** 2 + distance_y ** 2 + distance_z ** 2); // Total distance in km
        if (planet.isSun) this.distanceToSun = distance / 1000
        if (planet === targetPlanet) this.distanceToTarget = distance / 1000

        const force = G * this.mass * planet.mass / distance ** 2; // Law of attraction
        const theta = Math.atan2(distance_z, distance_x); // Horizontal angle
        const phi = Math.atan2(distance_y, Math.sqrt(distance_x ** 2 + distance_z ** 2)); // Vertical angle

        const force_x = Math.cos(phi) * Math.cos(theta) * force;
        const force_y = Math.sin(phi) * force;
        const force_z = Math.cos(phi) * Math.sin(theta) * force;

        return [{ force_x: force_x, force_y: force_y, force_z: force_z }];
    }
    updateVectorLines(addedXVel, addedYVel, addedZVel) {
        if (SHOW_VECTORS) {
            if (spacecraftGravity) {
                const gVectorLinePoints = [
                    new THREE.Vector3(this.container.position.x, this.container.position.y, this.container.position.z),
                    new THREE.Vector3(this.container.position.x + addedXVel, this.container.position.y + addedYVel, this.container.position.z + addedZVel)
                ]
                this.gVectorLine.geometry.setFromPoints( gVectorLinePoints );
                scene.add( this.gVectorLine );
            }
            else scene.remove(this.gVectorLine)

            // const xVectorLinePoints = [
            //     new THREE.Vector3(this.container.position.x, this.container.position.y, this.container.position.z),
            //     new THREE.Vector3(
            //         this.container.position.x + ((this.xVel * DISTANCE_SCALE) * TIME * 10),
            //         this.container.position.y,
            //         this.container.position.z
            //     )
            // ];

            // const yVectorLinePoints = [
            //     new THREE.Vector3(this.container.position.x, this.container.position.y, this.container.position.z),
            //     new THREE.Vector3(
            //         this.container.position.x,
            //         this.container.position.y + ((this.yVel * DISTANCE_SCALE) * TIME * 10),
            //         this.container.position.z
            //     )
            // ];

            // const zVectorLinePoints = [
            //     new THREE.Vector3(this.container.position.x, this.container.position.y, this.container.position.z),
            //     new THREE.Vector3(
            //         this.container.position.x,
            //         this.container.position.y,
            //         this.container.position.z + ((this.zVel * DISTANCE_SCALE) * TIME * 10)
            //     )
            // ];

            const resVectorLinePoints = [
                new THREE.Vector3(this.container.position.x, this.container.position.y, this.container.position.z),
                new THREE.Vector3(
                    this.container.position.x + ((this.xVel * DISTANCE_SCALE) * TIME * 10),
                    this.container.position.y + ((this.yVel * DISTANCE_SCALE) * TIME * 10),
                    this.container.position.z + ((this.zVel * DISTANCE_SCALE) * TIME * 10)
                )
            ];

            this.resVectorLine.geometry.setFromPoints( resVectorLinePoints );
            scene.add( this.resVectorLine );
        } else {
            scene.remove(this.gVectorLine)
            scene.remove( this.resVectorLine );
        }
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
    toggleOrbitLine(visible) {
        if (visible) scene.add(this.orbitLine)
        else scene.remove(this.orbitLine);
    }
    resetOrbit() {
        this.currentOrbitPointCount = 0;
        this.orbitGeometry.setDrawRange(0, this.currentOrbitPointCount);
        this.orbitGeometry.attributes.position.needsUpdate = true; // Notify Three.js of the update
    }
    shoot() {
        const bolt = new Bolt(this.scale);
        this.bolts.push(bolt);
    }
    updateBolts() {
        for (const bolt of this.bolts) {
            bolt.lifetime += 1
            if (bolt.lifetime < 200) {
                bolt.boltContainer.position.copy(this.container.position)
                bolt.boltContainer.bolt1.position.z += 2;
                bolt.boltContainer.bolt2.position.z += 2;
            } else {
                this.bolts.shift();
                scene.remove(bolt.boltContainer);
            }
        }
    }
}

export class Bolt {
    constructor(spacecraftScale) {
        this.lifetime = 0;
        this.boltContainer = new THREE.Object3D();
        this.boltContainerInner = new THREE.Object3D();

        this.boltContainer.position.copy(spacecraft.container.position)

        this.boltContainer.rotation.copy(spacecraft.container.rotation);
        this.boltContainerInner.rotation.copy(spacecraft.obj.rotation);

        this.boltContainer.scale.set(spacecraftScale, spacecraftScale, spacecraftScale)

        const geometry = new THREE.CylinderGeometry( 1, 1, 30, 32 );
        const material = new THREE.MeshBasicMaterial( {color: 0x3cff00} );
        this.bolt1 = new THREE.Mesh( geometry, material );
        this.bolt2 = new THREE.Mesh( geometry, material );
        this.bolt1.scale.set(0.00001 / spacecraftScale,0.00001 / spacecraftScale,0.00001 / spacecraftScale);
        this.bolt2.scale.set(0.00001 / spacecraftScale,0.00001 / spacecraftScale,0.00001 / spacecraftScale);

        this.bolt1.position.set(4.6, -0.5, 3.6)
        this.bolt2.position.set(-4.6, -0.5, 3.6)

        this.bolt1.rotation.x = THREE.MathUtils.degToRad(90)
        this.bolt2.rotation.x = THREE.MathUtils.degToRad(90)

        this.boltContainerInner.add(this.bolt1);
        this.boltContainerInner.add(this.bolt2);

        this.boltContainer.add(this.boltContainerInner)

        this.boltContainer.bolt1 = this.bolt1;
        this.boltContainer.bolt2 = this.bolt2;

        scene.add(this.boltContainer)
    }
}

export class Planet {
    constructor(name, radius, axialTilt, dayLength, mass, colorHex, x=0, y=0, z=0, isSun=false, lowQMapPath=null, highQMapPath=null) {
        this.name = name
        this.xVel = 0;
        this.yVel = 0;
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
        this.ring = null

        this.geometry = new THREE.SphereGeometry( radius, 64, 32 );
        this.geometry.rotateY(THREE.MathUtils.degToRad(90));

        this.material = new THREE.MeshStandardMaterial({
            color: colorHex,
            roughness: 0.8, // less rough, more reflective
            // metalness: 0.1, // metallic, reflective effect
        });
        if (lowQMapPath || highQMapPath) {
            this.material.color = null;
            const texture = textureLoader.load(HIGH_QUALITY_TEXTURES ? highQMapPath : lowQMapPath);
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
                    polygonOffset: true,
                    polygonOffsetFactor: -1, // Adjust as needed (negative to push closer, positive to pull farther)
                    polygonOffsetUnits: -1,
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
                    visible: false, // set true if visible atmosphere is wanted
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
            this.glowSphere.renderOrder = -1;
            scene.add(this.glowSphere);
        }

        this.sphere = new THREE.Mesh(this.geometry, this.material);
        this.sphere.rotation.x = THREE.MathUtils.degToRad(axialTilt); // axis tilt
        this.sphere.position.set(x, y, z)
        if (this.isSun) this.sphere.renderOrder = -2;
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
        this.orbitLine.renderOrder = -3;
        this.orbitLine.material.depthTest = true;
        this.orbitLine.material.depthWrite = false;
        if (SHOW_ORBITS) scene.add(this.orbitLine);

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
            const axisLineGeometry = new THREE.BufferGeometry().setFromPoints(axisCoords);
            const axisLineMaterial = new THREE.LineBasicMaterial( { color: 0x00ff08 } );
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
        this.innerRadiusFactor = innerRadiusFactor
        this.outerRadiusFactor = outerRadiusFactor

        const innerRadius = this.parentPlanet.radius * this.innerRadiusFactor; // Inner radius slightly larger than planet
        const outerRadius = this.parentPlanet.radius * this.outerRadiusFactor; // Outer radius of the ring

        const ringGeometry = new PlanetRingGeometry(innerRadius, outerRadius, 96, 96);

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
        this.parentPlanet.ring = this
    }
}

export class OrbitTrail {
    constructor(maxLength, color, rotateWithEarth) {
        this.rotateWithEarth = rotateWithEarth
        this.orbitTrailGeometry = new THREE.BufferGeometry();
        this.maxPoints = maxLength; // Limit the number of points in the trail
        this.positions = new Float32Array(this.maxPoints * 3); // Each point has 3 coordinates (x, y, z)
        this.orbitTrailGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        this.orbitTrailMaterial = new THREE.LineBasicMaterial({ color: color });
        this.orbitTrailObj = new THREE.Line(this.orbitTrailGeometry, this.orbitTrailMaterial);
        this.orbitTrailObj.frustumCulled = false;
        this.numPoints = 0;
    }
    reset() {
        this.positions.fill(0);
        this.numPoints = 0;
        this.orbitTrailGeometry.attributes.position.needsUpdate = true;
    }
    updateOrbitTrail(satellite, earth) {
        if (SHOW_ORBITS) scene.add(this.orbitTrailObj)
        else {
            scene.remove(this.orbitTrailObj)
            this.reset()
            return
        }

        const satelliteWorldPosition = new THREE.Vector3();
        satellite.getWorldPosition(satelliteWorldPosition);  // Get satellite position in world coordinates

        // Calculate position relative to Earth
        const satelliteRelativeToEarth = new THREE.Vector3();
        satelliteRelativeToEarth.subVectors(satelliteWorldPosition, earth.position);

        // Shift positions in the trail to make room for new points if the max length is reached
        if (this.numPoints === this.maxPoints) {
            for (let i = 0; i < (this.maxPoints - 1) * 3; i++) {
                this.positions[i] = this.positions[i + 3]; // Shift positions array
            }
            this.numPoints--;
        }

        // Add the new point (relative to Earth)
        const lastIndex = this.numPoints * 3;
        this.positions[lastIndex] = satelliteRelativeToEarth.x;
        this.positions[lastIndex + 1] = satelliteRelativeToEarth.y;
        this.positions[lastIndex + 2] = satelliteRelativeToEarth.z;

        this.numPoints = Math.min(this.numPoints + 1, this.maxPoints);

        if (this.rotateWithEarth) {
            // Apply Earth's rotation only to the latest point (the new point)
            const earthRotationMatrix = new THREE.Matrix4().makeRotationY(-earth.rotation.y); // Earth’s current rotation matrix around Y-axis

            // Rotate only the newly added point (relative to Earth)
            const latestPosition = new THREE.Vector3(
                this.positions[lastIndex],
                this.positions[lastIndex + 1],
                this.positions[lastIndex + 2]
            );

            // Apply the rotation to the latest point
            latestPosition.applyMatrix4(earthRotationMatrix);

            // Update the position of the latest point after rotation
            this.positions[lastIndex] = latestPosition.x;
            this.positions[lastIndex + 1] = latestPosition.y;
            this.positions[lastIndex + 2] = latestPosition.z;
        }

        // Update the trail geometry
        this.orbitTrailGeometry.setDrawRange(0, this.numPoints);
        this.orbitTrailGeometry.attributes.position.needsUpdate = true;

        // Update the trail's position relative to Earth
        this.orbitTrailObj.position.copy(earth.position);
    }
}
