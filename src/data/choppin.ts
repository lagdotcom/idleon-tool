import {
  DropTable5,
  DropTable11,
  DropTable17,
  DropTable22,
  DropTable28,
  DropTable33,
} from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const hatchet = getItemMaker("hatchets");
const ll = getItemMaker("logs & leaves");

export const hatchets = [
  hatchet("Old Hatchet", "EquipmentToolsHatchet0"),
  hatchet("Copper Chopper", "EquipmentToolsHatchet3"),
  hatchet("Iron Hatchet", "EquipmentToolsHatchet1"),
  hatchet("Grumbie the Hatchet Hammer"),
  hatchet("Golden Axe", "EquipmentToolsHatchet2"),
  hatchet("Stinky Axe", "EquipmentToolsHatchet2b"),
  hatchet("Plat Hatchet", "EquipmentToolsHatchet4"),
  hatchet("Dementia Dicer"),
  hatchet("Void Imperium Axe", "EquipmentToolsHatchet7"),
  hatchet("Lustre Logger", "EquipmentToolsHatchet6"),
  hatchet("Starfire Hatchet"),
  hatchet("Dreadlo Hatchet", "EquipmentToolsHatchet9"),
  hatchet("Marbiglass Hatchet"),
  hatchet("Annihilator of the Yggdrasil"),
];

export const logsAndLeaves = [
  ll("Grass Leaf", "Leaf1"),
  ll("Twisty Leaf", "Leaf2"),
  ll("Arctic Leaf", "Leaf3"),
  ll("Galactic Leaf", "Leaf4"),
  ll("Magma Leaf", "Leaf5"),
  ll("Spirit Leaf", "Leaf6"),

  ll("Oak Logs", "OakTree"),
  ll("Bleach Logs", "BirchTree"),
  ll("Jungle Logs", "JungleTree"),
  ll("Forest Fibres", "ForestTree"),
  ll("Potty Rolls", "ToiletTree"),
  ll("Tropilogs", "PalmTree"),
  ll("Veiny Logs", "StumpTree"),
  ll("Tundra Logs", "SaharanFoal"),
  ll("Wispy Lumber", "Tree7"),
  ll("Alien Hive Chunk", "AlienTree"),
  ll("Cubed Logs", "Tree8"),
  ll("Maple Logs", "Tree9"),
  ll("Dandielogs", "Tree10"),
  ll("Willow Logs"),
  ll("Bamboo Logs", "Tree12"),
  ll("Effervescent Logs"),
];

const tree = getDropperMaker("tree");

export const trees = [
  tree(
    "Oak Tree",
    "Spore Meadows",
    d("Oak Logs", NaN),
    d("Oak Logs Card", 2500),
    t(DropTable5, 125),
  ),
  tree(
    "Birch Tree",
    "Valley of the Beans",
    d("Bleach Logs", NaN),
    d("Bleach Logs Card", 3450),
    t(DropTable5, 118),
  ),
  tree(
    "Jungle Tree",
    "Vegetable Patch",
    d("Jungle Logs", NaN),
    d("Jungle Logs Card", 4760),
    t(DropTable5, 111),
  ),
  tree(
    "Forest Tree",
    "Tucked Away",
    d("Forest Fibres", NaN),
    d("Forest Fibres Card", 5880),
    t(DropTable5, 105),
  ),
  tree(
    "Palm Tree",
    "Dessert Dunes",
    d("Tropilogs", NaN),
    d("Tropilogs Card", 9090),
    t(DropTable11, 66.7),
  ),
  tree(
    "Toilet Tree",
    "Poopy Sewers",
    d("Potty Rolls", NaN),
    d("Potty Rolls Card", 8330),
    t(DropTable5, 94.3),
  ),
  tree(
    "Stump Tree",
    "Hollowed Trunk",
    d("Veiny Logs", NaN),
    d("Veiny Logs Card", 7690),
    t(DropTable5, 98),
  ),
  tree(
    "Saharan Foal",
    "Steep Sheep Ledge",
    d("Tundra Logs", NaN),
    d("Tundra Logs Card", 10000),
    t(DropTable17, 112),
  ),
  tree(
    "Wispy Tree",
    "Waterlogged Entrance",
    d("Wispy Lumber", NaN),
    d("Wispy Lumber Card", 10000),
    t(DropTable17, 112),
  ),
  tree(
    "Alien Tree",
    "Outskirts of Fallstar Isle",
    d("Alien Hive Chunk", NaN),
    d("Alien Hive Chunk Card", 100000),
    t(DropTable22, 123),
  ),
  tree(
    "Cubed Tree",
    "Standstill Plains",
    d("Cubed Logs", NaN),
    d("Cubed Logs Card", 25000),
    t(DropTable22, 112),
  ),
  tree(
    "Maple Tree",
    "The Killer Roundabout",
    d("Maple Logs", NaN),
    d("Maple Logs Card", 100000),
    d("Magma Leaf", 204),
  ),
  tree(
    "Dandelioli Tree",
    "Erruption River",
    d("Dandielogs", NaN),
    d("Dandielogs Card", 200000),
    t(DropTable28, 112),
  ),
  tree(
    "Equinox Willow Tree",
    "Equinox Valley",
    d("Willow Logs", NaN),
    d("Dandielogs Card", 100000000),
    t(DropTable28, 112),
  ),
  tree(
    "Bamboo Tree",
    "Irrigation Station",
    d("Bamboo Logs", NaN),
    d("Bamboo Logs Card", 25000000),
    t(DropTable33, 112),
  ),
  tree(
    "Effervescent Eucalyptus Tree",
    "Dozey Dogpark",
    d("Effervescent Logs", NaN),
    d("Effervescent Logs Card", 25000000),
    t(DropTable33, 112),
  ),
];
