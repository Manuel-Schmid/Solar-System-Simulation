import {
    celestialGridTexture,
    constellationBoundsTexture,
    constellationFiguresTexture,
    starmap4kTexture, starmap8kGalTexture, starmap8kTexture
} from "./paths.js";

export const G = 6.67428e-11;  // Gravitational constant
export const AU = 1.496e+8;    // 1 AU in km
export const LM = 1.799e+7;    // 1 Light minute in km
export const c = 299792;       // lightspeed in km/s
export const DISTANCE_SCALE = 0.0000001; // multiply km distances by this
export const REALTIME_FACTOR = 4.56621 * 10**-6; //

export const simulationSpeed = {
    "3s/Ey": 48,
    "6s/Ey": 24,
    "12s/Ey": 12,
    "24s/Ey": 6,
    "48s/Ey": 3,
    "72s/Ey": 2,
    "144s/Ey": 1,
    "Realtime": REALTIME_FACTOR,
};

export const presets = ["recommended", "realistic", "cinematic"]; // add "high_performance"
export let distanceUnits = ["km", "au", "lm"]; // units for distances
export let backgroundGridTextures = [
    false,
    celestialGridTexture.href,
    constellationBoundsTexture.href,
    constellationFiguresTexture.href
];
export const backgroundTextures = [
    false,
    starmap4kTexture.href,
    starmap8kGalTexture.href,
    starmap8kTexture.href
];
export const jwstScaleFactor = 0.0001;
