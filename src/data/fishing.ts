import bloach from "../img/Bloach.png";
import caulifish from "../img/Caulifish.png";
import equinoxFish from "../img/Equinox_Fish.png";
import goldfish from "../img/Goldfish.png";
import hermitCan from "../img/Hermit_Can.png";
import icefish from "../img/Icefish.png";
import jellyfish from "../img/Jellyfish.png";
import jumboShrimp from "../img/Jumbo_Shrimp.png";
import kraken from "../img/Kraken.png";
import largeFishingSpot from "../img/Large_Fishing_Spot.gif";
import mantaRay from "../img/Manta_Ray.png";
import mediumFishingSpot from "../img/Medium_Fishing_Spot.gif";
import sandShark from "../img/Sand_Shark.png";
import shellfish from "../img/Shellfish.png";
import skelefish from "../img/Skelefish.png";
import smallFishingSpot from "../img/Small_Fishing_Spot.gif";
import { DropTable9 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const i = getItemMaker("fish");

export const fish = [
  i("Goldfish", goldfish),
  i("Hermit Can", hermitCan),
  i("Jellyfish", jellyfish),
  i("Bloach", bloach),
  i("Skelefish", skelefish),
  i("Sand Shark", sandShark),
  i("Manta Ray", mantaRay),
  i("Kraken", kraken),
  i("Icefish", icefish),
  i("Shellfish", shellfish),
  i("Jumbo Shrimp", jumboShrimp),
  i("Caulifish", caulifish),
  i("Equinox Fish", equinoxFish),
];

const spot = getDropperMaker("fishing spot");

export const fishingSpots = [
  spot(
    "Small Fishing Spot",
    smallFishingSpot,
    "Salty Shores / Faraway Piers",
    d("Goldfish", NaN),
    d("Hermit Can", NaN),
    d("Jellyfish", NaN),
    d("Bloach", NaN),
    d("Goldfish Card", 500),
    d("Hermit Can Card", 556),
    d("Jellyfish Card", 625),
    d("Bloach Card", 714),
    t(DropTable9, 83.3),
  ),
  spot(
    "Medium Fishing Spot",
    mediumFishingSpot,
    "Deepwater Docks",
    d("Skelefish", NaN),
    d("Sand Shark", NaN),
    d("Manta Ray", NaN),
    d("Kraken", NaN),
    d("Skelefish Card", 1000),
    d("Sand Shark Card", 2500),
    d("Manta Ray Card", 10000),
    d("Kraken Card", 40000),
    t(DropTable9, 83.3),
  ),
  spot(
    "Large Fishing Spot",
    largeFishingSpot,
    "Seasalt Island",
    d("Icefish", NaN),
    d("Shellfish", NaN),
    d("Jumbo Shrimp", NaN),
    d("Caulifish", NaN),
    d("Icefish Card", 1000),
    d("Shellfish Card", 2500),
    d("Jumbo Shrimp Card", 10000),
    d("Caulifish Card", 40000),
    t(DropTable9, 83.3),
  ),
];
