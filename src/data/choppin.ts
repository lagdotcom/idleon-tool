import birchTree from "../img/Birch_Tree.png";
import bleachLogs from "../img/Bleach_Logs.png";
import copperChopper from "../img/Copper_Chopper.png";
import forestFibres from "../img/Forest_Fibres.png";
import forestTree from "../img/Forest_Tree.png";
import goldenAxe from "../img/Golden_Axe.png";
import grassLeaf from "../img/Grass_Leaf.png";
import ironHatchet from "../img/Iron_Hatchet.png";
import jungleLogs from "../img/Jungle_Logs.png";
import jungleTree from "../img/Jungle_Tree.png";
import oakLogs from "../img/Oak_Logs.png";
import oakTree from "../img/Oak_Tree.png";
import oldHatchet from "../img/Old_Hatchet.png";
import { DropTable5 } from "./tables";
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
  hatchet("Golden Axe", goldenAxe),

  leaf("Grass Leaf", grassLeaf),
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
    d("Oak Logs", 1),
    d("Oak Logs Card", 2500),
    t(DropTable5, 125),
  ),
  tree(
    "Birch Tree",
    birchTree,
    "Valley of the Beans",
    d("Bleach Logs", 1),
    d("Bleach Logs Card", 3450),
    t(DropTable5, 118),
  ),
  tree(
    "Jungle Tree",
    jungleTree,
    "Vegetable Patch",
    d("Jungle Logs", 1),
    d("Jungle Logs Card", 4760),
    t(DropTable5, 111),
  ),
  tree(
    "Forest Tree",
    forestTree,
    "Tucked Away",
    d("Forest Fibres", 1),
    d("Forest Fibres Card", 5880),
    t(DropTable5, 105),
  ),
];
