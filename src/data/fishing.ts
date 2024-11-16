import { DropTable9 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const f = getItemMaker("fish");
export const fish = [
  f("Goldfish", "Fish1"),
  f("Hermit Can", "Fish2"),
  f("Jellyfish", "Fish3"),
  f("Bloach", "Fish4"),
  f("Skelefish"),
  f("Sand Shark"),
  f("Manta Ray"),
  f("Kraken"),
  f("Icefish"),
  f("Shellfish"),
  f("Jumbo Shrimp"),
  f("Caulifish"),
  f("Equinox Fish"),
];

const rod = getItemMaker("fishing rods");
export const fishingRods = [
  rod("Copper Fish Rod", "FishingRod2"),
  rod("Iron Fishing Rod", "FishingRod3"),
  rod("Gold Fishing Rod"),
  rod("Plat Fishing Rod"),
  rod("Dementia Rod for Fishing"),
  rod("Void Imperium Rod"),
  rod("Lustre Rod"),
  rod("Starfire Rod"),
  rod("Dreadlo Rod"),
  rod("Marbiglass Rod"),
  rod("Angler of the Iliunne"),
];

const acc = getItemMaker("fishing accessories");
export const fishingAccessories = [
  acc("Gold Twine"),
  acc("Platinum Twine"),
  acc("Scripticus Spoons"),
  acc("Its a Boy Celebration"),
  acc("Its a Girl Celebration"),
  acc("Its Alright Celebration"),
  acc("Iron Hook"),
  acc("Basic Bobber"),
  acc("Silver Twine"),
  acc("Fun Flags"),
  acc("Electrical Wiring"),
  acc("Wiener Links"),
  acc("Zeus Gon Fishin"),
  acc("Dualhook Prongs"),
  acc("One Pound of Feathers"),
  acc("Massless Unit for Physics Questions"),
  acc("Literal Elephant"),
  acc("Triple Threat"),
  acc("Crash Box"),
  acc("Fat Albert"),
  acc("Valve Patented Circle Thingies"),
  acc("Copper Twine"),
  acc("Wormie Weight"),
  acc("Leafy Vines"),
  acc("One Pound of Steel"),
  acc("Needledrop"),
  acc("Dynamite"),
  acc("Not Dynamite"),
];

const spot = getDropperMaker("fishing spot");
export const fishingSpots = [
  spot(
    "Small Fishing Spot",
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
