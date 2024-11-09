import alienHiveChunk from "../img/Alien_Hive_Chunk.png";
import alienTree from "../img/Alien_Tree.png";
import annihilatorOfTheYggdrasil from "../img/Annihilator_of_the_Yggdrasil.png";
import arcticLeaf from "../img/Arctic_Leaf.png";
import bambooLogs from "../img/Bamboo_Logs.png";
import bambooTree from "../img/Bamboo_Tree.png";
import birchTree from "../img/Birch_Tree.png";
import bleachLogs from "../img/Bleach_Logs.png";
import copperChopper from "../img/Copper_Chopper.png";
import cubedLogs from "../img/Cubed_Logs.png";
import cubedTree from "../img/Cubed_Tree.png";
import dandelioliTree from "../img/Dandelioli_Tree.png";
import dandielogs from "../img/Dandielogs.png";
import dementiaDicer from "../img/Dementia_Dicer.png";
import dreadloHatchet from "../img/Dreadlo_Hatchet.png";
import effervescentEucalyptusTree from "../img/Effervescent_Eucalyptus_Tree.png";
import effervescentLogs from "../img/Effervescent_Logs.png";
import equinoxWillowTree from "../img/Equinox_Willow_Tree.png";
import forestFibres from "../img/Forest_Fibres.png";
import forestTree from "../img/Forest_Tree.png";
import galacticLeaf from "../img/Galactic_Leaf.png";
import goldenAxe from "../img/Golden_Axe.png";
import grassLeaf from "../img/Grass_Leaf.png";
import grumbieTheHatchetHammer from "../img/Grumbie_the_Hatchet_Hammer.png";
import ironHatchet from "../img/Iron_Hatchet.png";
import jungleLogs from "../img/Jungle_Logs.png";
import jungleTree from "../img/Jungle_Tree.png";
import lustreLogger from "../img/Lustre_Logger.png";
import magmaLeaf from "../img/Magma_Leaf.png";
import mapleLogs from "../img/Maple_Logs.png";
import mapleTree from "../img/Maple_Tree.png";
import marbiglassHatchet from "../img/Marbiglass_Hatchet.png";
import oakLogs from "../img/Oak_Logs.png";
import oakTree from "../img/Oak_Tree.png";
import oldHatchet from "../img/Old_Hatchet.png";
import palmTree from "../img/Palm_Tree.png";
import platHatchet from "../img/Plat_Hatchet.png";
import pottyRolls from "../img/Potty_Rolls.png";
import saharanFoal from "../img/Saharan_Foal.png";
import spiritLeaf from "../img/Spirit_Leaf.png";
import starfireHatchet from "../img/Starfire_Hatchet.png";
import stinkyAxe from "../img/Stinky_Axe.png";
import stumpTree from "../img/Stump_Tree.png";
import toiletTree from "../img/Toilet_Tree.png";
import tropilogs from "../img/Tropilogs.png";
import tundraLogs from "../img/Tundra_Logs.png";
import twistyLeaf from "../img/Twisty_Leaf.png";
import veinyLogs from "../img/Veiny_Logs.png";
import voidImperiumAxe from "../img/Void_Imperium_Axe.png";
import willowLogs from "../img/Willow_Logs.png";
import wispyLumber from "../img/Wispy_Lumber.png";
import wispyTree from "../img/Wispy_Tree.png";
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
  hatchet("Old Hatchet", oldHatchet),
  hatchet("Copper Chopper", copperChopper),
  hatchet("Iron Hatchet", ironHatchet),
  hatchet("Grumbie the Hatchet Hammer", grumbieTheHatchetHammer),
  hatchet("Golden Axe", goldenAxe),
  hatchet("Stinky Axe", stinkyAxe),
  hatchet("Plat Hatchet", platHatchet),
  hatchet("Dementia Dicer", dementiaDicer),
  hatchet("Void Imperium Axe", voidImperiumAxe),
  hatchet("Lustre Logger", lustreLogger),
  hatchet("Starfire Hatchet", starfireHatchet),
  hatchet("Dreadlo Hatchet", dreadloHatchet),
  hatchet("Marbiglass Hatchet", marbiglassHatchet),
  hatchet("Annihilator of the Yggdrasil", annihilatorOfTheYggdrasil),
];

export const logsAndLeaves = [
  ll("Grass Leaf", grassLeaf),
  ll("Twisty Leaf", twistyLeaf),
  ll("Arctic Leaf", arcticLeaf),
  ll("Galactic Leaf", galacticLeaf),
  ll("Magma Leaf", magmaLeaf),
  ll("Spirit Leaf", spiritLeaf),

  ll("Oak Logs", oakLogs),
  ll("Bleach Logs", bleachLogs),
  ll("Jungle Logs", jungleLogs),
  ll("Forest Fibres", forestFibres),
  ll("Tropilogs", tropilogs),
  ll("Potty Rolls", pottyRolls),
  ll("Veiny Logs", veinyLogs),
  ll("Tundra Logs", tundraLogs),
  ll("Wispy Lumber", wispyLumber),
  ll("Alien Hive Chunk", alienHiveChunk),
  ll("Cubed Logs", cubedLogs),
  ll("Maple Logs", mapleLogs),
  ll("Dandielogs", dandielogs),
  ll("Willow Logs", willowLogs),
  ll("Bamboo Logs", bambooLogs),
  ll("Effervescent Logs", effervescentLogs),
];

const tree = getDropperMaker("tree");

export const trees = [
  tree(
    "Oak Tree",
    oakTree,
    "Spore Meadows",
    d("Oak Logs", NaN),
    d("Oak Logs Card", 2500),
    t(DropTable5, 125),
  ),
  tree(
    "Birch Tree",
    birchTree,
    "Valley of the Beans",
    d("Bleach Logs", NaN),
    d("Bleach Logs Card", 3450),
    t(DropTable5, 118),
  ),
  tree(
    "Jungle Tree",
    jungleTree,
    "Vegetable Patch",
    d("Jungle Logs", NaN),
    d("Jungle Logs Card", 4760),
    t(DropTable5, 111),
  ),
  tree(
    "Forest Tree",
    forestTree,
    "Tucked Away",
    d("Forest Fibres", NaN),
    d("Forest Fibres Card", 5880),
    t(DropTable5, 105),
  ),
  tree(
    "Palm Tree",
    palmTree,
    "Dessert Dunes",
    d("Tropilogs", NaN),
    d("Tropilogs Card", 9090),
    t(DropTable11, 66.7),
  ),
  tree(
    "Toilet Tree",
    toiletTree,
    "Poopy Sewers",
    d("Potty Rolls", NaN),
    d("Potty Rolls Card", 8330),
    t(DropTable5, 94.3),
  ),
  tree(
    "Stump Tree",
    stumpTree,
    "Hollowed Trunk",
    d("Veiny Logs", NaN),
    d("Veiny Logs Card", 7690),
    t(DropTable5, 98),
  ),
  tree(
    "Saharan Foal",
    saharanFoal,
    "Steep Sheep Ledge",
    d("Tundra Logs", NaN),
    d("Tundra Logs Card", 10000),
    t(DropTable17, 112),
  ),
  tree(
    "Wispy Tree",
    wispyTree,
    "Waterlogged Entrance",
    d("Wispy Lumber", NaN),
    d("Wispy Lumber Card", 10000),
    t(DropTable17, 112),
  ),
  tree(
    "Alien Tree",
    alienTree,
    "Outskirts of Fallstar Isle",
    d("Alien Hive Chunk", NaN),
    d("Alien Hive Chunk Card", 100000),
    t(DropTable22, 123),
  ),
  tree(
    "Cubed Tree",
    cubedTree,
    "Standstill Plains",
    d("Cubed Logs", NaN),
    d("Cubed Logs Card", 25000),
    t(DropTable22, 112),
  ),
  tree(
    "Maple Tree",
    mapleTree,
    "The Killer Roundabout",
    d("Maple Logs", NaN),
    d("Maple Logs Card", 100000),
    d("Magma Leaf", 204),
  ),
  tree(
    "Dandelioli Tree",
    dandelioliTree,
    "Erruption River",
    d("Dandielogs", NaN),
    d("Dandielogs Card", 200000),
    t(DropTable28, 112),
  ),
  tree(
    "Equinox Willow Tree",
    equinoxWillowTree,
    "Equinox Valley",
    d("Willow Logs", NaN),
    d("Dandielogs Card", 100000000),
    t(DropTable28, 112),
  ),
  tree(
    "Bamboo Tree",
    bambooTree,
    "Irrigation Station",
    d("Bamboo Logs", NaN),
    d("Bamboo Logs Card", 25000000),
    t(DropTable33, 112),
  ),
  tree(
    "Effervescent Eucalyptus Tree",
    effervescentEucalyptusTree,
    "Dozey Dogpark",
    d("Effervescent Logs", NaN),
    d("Effervescent Logs Card", 25000000),
    t(DropTable33, 112),
  ),
];
