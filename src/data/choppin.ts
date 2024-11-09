import annihilatorOfTheYggdrasil from "../img/Annihilator_of_the_Yggdrasil.png";
import arcticLeaf from "../img/Arctic_Leaf.png";
import birchTree from "../img/Birch_Tree.png";
import bleachLogs from "../img/Bleach_Logs.png";
import copperChopper from "../img/Copper_Chopper.png";
import dementiaDicer from "../img/Dementia_Dicer.png";
import dreadloHatchet from "../img/Dreadlo_Hatchet.png";
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
import marbiglassHatchet from "../img/Marbiglass_Hatchet.png";
import oakLogs from "../img/Oak_Logs.png";
import oakTree from "../img/Oak_Tree.png";
import oldHatchet from "../img/Old_Hatchet.png";
import palmTree from "../img/Palm_Tree.png";
import platHatchet from "../img/Plat_Hatchet.png";
import spiritLeaf from "../img/Spirit_Leaf.png";
import starfireHatchet from "../img/Starfire_Hatchet.png";
import stinkyAxe from "../img/Stinky_Axe.png";
import stumpTree from "../img/Stump_Tree.png";
import toiletTree from "../img/Toilet_Tree.png";
import twistyLeaf from "../img/Twisty_Leaf.png";
import voidImperiumAxe from "../img/Void_Imperium_Axe.png";
import { DropTable5, DropTable11 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const hatchet = getItemMaker("hatchet");

const leaf = getItemMaker("leaf");
const log = getItemMaker("log");

export const choppinItems = [
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

  leaf("Grass Leaf", grassLeaf),
  leaf("Twisty Leaf", twistyLeaf),
  leaf("Arctic Leaf", arcticLeaf),
  leaf("Galactic Leaf", galacticLeaf),
  leaf("Magma Leaf", magmaLeaf),
  leaf("Spirit Leaf", spiritLeaf),

  log("Oak Logs", oakLogs),
  log("Bleach Logs", bleachLogs),
  log("Jungle Logs", jungleLogs),
  log("Forest Fibres", forestFibres),
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
    d("Veiny Logs Card", 98),
    t(DropTable5, 98),
  ),
];
