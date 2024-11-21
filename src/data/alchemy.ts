import {
  getDropperMaker,
  getItemMaker,
  getRecipeMaker,
  getSinkMaker,
  mkIQ as n,
  mkPercentageDrop as pd,
} from "./tools";

const i = getItemMaker("alchemy liquids");
export const alchemyLiquids = [
  i("Water Droplets"),
  i("Liquid Nitrogen"),
  i("Trench Seawater"),
  i("Toxic Mercury"),
];

const droplets = n("Water Droplets", NaN);
const nitrogen = n("Liquid Nitrogen", NaN);
const seawater = n("Trench Seawater", NaN);

const s = getSinkMaker("Alchemy");
export const liquidShop = [
  s("Mediocre Obols", droplets),
  s("Weak UPG Stone", droplets),
  s("Decent Obols", droplets, nitrogen),
  s("Grand Obols", nitrogen, seawater),
  s("Bargain Tag", nitrogen, seawater),
];

const r = getRecipeMaker("alchemy");
export const liquidRecipes = [
  r("Distilled Water", droplets),
  r("Gem", droplets),
  r("Tick Tock (Special Talent Book)", droplets),
  r("Small Experience Balloon", droplets),
  r("Talent Point Tab 2", droplets, nitrogen),
  r("Dense Water", seawater),
  r("Gem", seawater),
  r("Talent Point Tab 3", seawater),
];

const d = getDropperMaker("alchemy shop");
export const liquidDrops = [
  d(
    "Mediocre Obols",
    "YumYum Grotto",
    pd("Bronze STR Obol", 18),
    pd("Bronze AGI Obol", 18),
    pd("Bronze WIS Obol", 18),
    pd("Bronze LUK Obol", 18),
    pd("Bronze Obol of Small Swings", 10),
    pd("Bronze Obol of Chippin Chops", 17),
    pd("Bronze Obol of Puny Damage", 7),
    pd("Bronze Obol of Cards", 2),
  ),
  d(
    "Decent Obols",
    "YumYum Grotto",
    pd("Bronze STR Obol", 11),
    pd("Bronze AGI Obol", 11),
    pd("Bronze WIS Obol", 11),
    pd("Bronze LUK Obol", 6),
    pd("Bronze Obol of Finite Fish", 11),
    pd("Bronze Obol of Few Flies", 11),
    pd("Bronze Obol of Puny Damage", 7),
    pd("Silver STR Obol", 4),
    pd("Silver AGI Obol", 4),
    pd("Silver WIS Obol", 4),
    pd("Silver LUK Obol", 1),
    pd("Silver Obol of Moderate Mining", 4),
    pd("Silver Obol of Big Bark", 4),
    pd("Silver Obol of Puny Pikes", 4),
    pd("Silver Obol of Big Bugs", 3),
    pd("Silver Obol of Little Damage", 2),
    pd("Silver Obol of Cards", 2),
  ),
  d(
    "Grand Obols",
    "YumYum Grotto",
    pd("Bronze STR Obol", 11),
    pd("Bronze AGI Obol", 11),
    pd("Bronze WIS Obol", 11),
    pd("Bronze Obol of Trapping", 4),
    pd("Bronze Obol of Construction", 6),
    pd("Bronze Obol of Worship", 4),
    pd("Bronze Obol of Multikill", 11),
    pd("Bronze Obol of Defence", 11),
    pd("Silver STR Obol", 4),
    pd("Silver AGI Obol", 4),
    pd("Silver WIS Obol", 4),
    pd("Silver Obol of Trapping", 3),
    pd("Silver Obol of Construction", 3),
    pd("Silver Obol of Worship", 3),
    pd("Silver Obol of Little Damage", 2),
    pd("Gold STR Obol", 1.925),
    pd("Gold AGI Obol", 1.925),
    pd("Gold WIS Obol", 1.925),
    pd("Gold LUK Obol", 1.925),
    pd("Golden Obol of Cards", 0.3),
  ),

  d(
    "Weak UPG Stones",
    "YumYum Grotto",
    pd("Armor Upgrade Stone G", 4),
    pd("Weapon Upgrade Stone I", 18),
    pd("Helmet Upgrade Stone I", 14),
    pd("Armor Upgrade Stone I", 38),
    pd("Tool Upgrade Stone I", 26),
  ),

  d(
    "Level Up Gift Reward",
    "anywhere",
    pd("Birthday Hat", 0.03),
    pd("Gem", 31.97),
    pd("Small Experience Balloon", 4),
    pd("1 HR Time Candy", 3),
    pd("2 HR Time Candy", 1),
    pd("4 HR Time Candy", 0.3),
    pd("12 HR Time Candy", 0.05),
    pd("24 HR Time Candy", 0.02),
    pd("Fun Flags", 0.73),
    pd("Power Statue", 18.9),
    pd("Speed Statue", 18.9),
    pd("Mining Statue", 18.9),
    pd("Feasty Statue", 18.9),
    pd("Health Statue", 18.9),
    pd("Kachow Statue", 18.9),
    pd("Lumberbob Statue", 18.9),
    pd("Thicc Skin Statue", 18.9),
    pd("Sukka Foo", 0.5),
    pd("Mystery Upgrade Stone I", 1),
    pd("Small EXP Potion", 13.5),
    pd("Average EXP Potion", 13.5),
    pd("Decent EXP Potion", 13.5),
    pd("Card Stamp", 0.3),
    pd("Birthday Card", 24.7),

    pd("Pre Crime Box", NaN),
  ),
];
