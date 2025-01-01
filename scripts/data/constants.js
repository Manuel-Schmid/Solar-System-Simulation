const G = 6.67428e-11  // Gravitational constant
const AU = 1.496e+8 // 1 AU in km
const LM = 1.799e+7 // 1 Light minute in km
const c = 299792 // lightspeed in km/s
const DISTANCE_SCALE = 0.0000001 // multiply km distances by this
const REALTIME_FACTOR = 4.56621*10**-6 //
const simulationSpeed = {
    "3s/Ey": 48,
    "6s/Ey": 24,
    "12s/Ey": 12,
    "24s/Ey": 6,
    "48s/Ey": 3,
    "72s/Ey": 2,
    "144s/Ey": 1,
    "Realtime": REALTIME_FACTOR,
}

const presets = ["recommended", "realistic", "cinematic"]; // add "high_performance"
let distanceUnits = ["km", "au", "lm"] // units for distances
let backgroundGridTextures = [false, "/starmaps/celestial_grid_16k.png", "/starmaps/constellation_bounds_8k.png", "/starmaps/constellation_figures_8k.png"]
const backgroundTextures = [false, '/starmaps/starmap_2020_4k_gal.exr', '/starmaps/starmap_2020_8k_gal.exr', '/starmaps/starmap_2020_8k.exr']

const jwstScaleFactor = 0.0001
