import * as THREE from "three";

// function to find either closest or farthest 2 vectors in a list
export function findVectorPair(vectorList, findClosest = true) {
    const numVectors = vectorList.length / 3;
    let extremeDistance = findClosest ? Infinity : -Infinity; // Initialize distance based on search type
    let extremePair = [null, null];

    for (let i = 0; i < numVectors; i++) {
        const v1 = new THREE.Vector3(
            vectorList[i * 3],
            vectorList[i * 3 + 1],
            vectorList[i * 3 + 2]
        );

        for (let j = i + 1; j < numVectors; j++) {
            const v2 = new THREE.Vector3(
                vectorList[j * 3],
                vectorList[j * 3 + 1],
                vectorList[j * 3 + 2]
            );

            const distance = v1.distanceTo(v2);
            if ((findClosest && distance < extremeDistance) || (!findClosest && distance > extremeDistance)) {
                extremeDistance = distance;
                extremePair = [v1.clone(), v2.clone()];
            }
        }
    }
    return extremePair;
}

export function formatDistance(value) { // todo delete
    return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")
}

export function convertDistance(distance, distance_unit, AU, LM) {
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

export class PlanetRingGeometry extends THREE.BufferGeometry {
    constructor(
        innerRadius = 0.5,
        outerRadius = 1,
        thetaSegments = 32,
        phiSegments = 1,
        thetaStart = 0,
        thetaLength = Math.PI * 2
    ) {
        super();

        this.parameters = {
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            thetaSegments: thetaSegments,
            phiSegments: phiSegments,
            thetaStart: thetaStart,
            thetaLength: thetaLength,
        };

        thetaSegments = Math.max(3, thetaSegments);
        phiSegments = Math.max(1, phiSegments);

        // buffers

        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];

        // some helper variables

        let radius = innerRadius;
        const radiusStep = (outerRadius - innerRadius) / phiSegments;
        const vertex = new THREE.Vector3();
        let uv = new THREE.Vector2();

        // generate vertices, normals and uvs

        for (let j = 0; j <= phiSegments; j++) {
            for (let i = 0; i <= thetaSegments; i++) {
                // values are generate from the inside of the ring to the outside

                const segment = thetaStart + (i / thetaSegments) * thetaLength;

                // vertex

                vertex.x = radius * Math.cos(segment);
                vertex.y = radius * Math.sin(segment);

                vertices.push(vertex.x, vertex.y, vertex.z);

                // normal

                normals.push(0, 0, 1);

                // uv
                uv = new THREE.Vector2(j / phiSegments, i / thetaSegments);

                uvs.push(uv.x, uv.y);
            }

            // increase the radius for next row of vertices

            radius += radiusStep;
        }

        // indices

        for (let j = 0; j < phiSegments; j++) {
            const thetaSegmentLevel = j * (thetaSegments + 1);

            for (let i = 0; i < thetaSegments; i++) {
                const segment = i + thetaSegmentLevel;

                const a = segment;
                const b = segment + thetaSegments + 1;
                const c = segment + thetaSegments + 2;
                const d = segment + 1;

                // faces

                indices.push(a, b, d);
                indices.push(b, c, d);
            }
        }

        // build geometry

        this.setIndex(indices);
        this.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(vertices, 3)
        );
        this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    }
}

