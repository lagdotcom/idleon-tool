import { DropTable9 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  getRecipeMaker,
  mkDrop as d,
  mkIQ as n,
  mkTableDrop as t,
} from "./tools";

const f = getItemMaker("fish");
export const fish = [
  f("Goldfish", "Fish1"),
  f("Hermit Can", "Fish2"),
  f("Jellyfish", "Fish3"),
  f("Bloach", "Fish4"),
  f("Skelefish", "Fish5"),
  f("Sand Shark", "Fish6"),
  f("Manta Ray", "Fish7"),
  f("Kraken", "Fish8"),
  f("Icefish"),
  f("Shellfish"),
  f("Jumbo Shrimp"),
  f("Caulifish"),
  f("Equinox Fish", "Fish13"),
];

const rod = getItemMaker("fishing rods");
export const fishingRods = [
  rod("Copper Fish Rod", "FishingRod2"),
  rod("Iron Fishing Rod", "FishingRod3"),
  rod("Gold Fishing Rod", "FishingRod4"),
  rod("Plat Fishing Rod", "FishingRod5"),
  rod("Dementia Rod for Fishing", "FishingRod6"),
  rod("Void Imperium Rod", "FishingRod7"),
  rod("Lustre Rod", "FishingRod8"),
  rod("Starfire Rod"),
  rod("Dreadlo Rod"),
  rod("Marbiglass Rod"),
  rod("Angler of the Iliunne"),
];

const acc = getItemMaker("fishing accessories");
export const fishingAccessories = [
  acc("Gold Twine"),
  acc("Platinum Twine", "Line4"),
  acc("Scripticus Spoons"),
  acc("Its a Boy Celebration"),
  acc("Its a Girl Celebration", "Line13"),
  acc("Its Alright Celebration"),
  acc("Iron Hook"),
  acc("Basic Bobber"),
  acc("Silver Twine"),
  acc("Fun Flags"),
  acc("Electrical Wiring"),
  acc("Wiener Links", "Line8"),
  acc("Zeus Gon Fishin"),
  acc("Dualhook Prongs", "Weight4"),
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

const r = getRecipeMaker("island expeditions");
export const islandExpeditionsRecipes = [
  r("Skelefish Stamp", n("Garbage", 20)),
  r("Amplestample Stamp", n("Garbage", 40)),
  r("Golden Sixes Stamp", n("Garbage", 80)),
  r("Stat Wallstreet Stamp", n("Garbage", 300)),
  r("Filthy Damage (Special Talent Book)", n("Garbage", 450)),
  r("Trash Tuna Nametag", n("Garbage", 1500)),
  r("Rando Event Looty (Special Talent Book)", n("Message Bottle", 200)),
];
