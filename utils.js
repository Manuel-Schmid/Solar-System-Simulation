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
