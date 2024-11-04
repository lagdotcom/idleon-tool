import copperBar from "../img/Copper_Bar.png";
import copperOre from "../img/Copper_Ore.png";
import copperVein from "../img/Copper_Vein.png";
import goldBar from "../img/Gold_Bar.png";
import goldOre from "../img/Gold_Ore.png";
import goldVein from "../img/Gold_Vein.png";
import ironBar from "../img/Iron_Bar.png";
import ironOre from "../img/Iron_Ore.png";
import ironVein from "../img/Iron_Vein.png";
import { DropTable4 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const ore = getItemMaker("ore");
const bar = getItemMaker("bar");

export const miningItems = [
  ore("Copper Ore", copperOre),
  bar("Copper Bar", copperBar),

  ore("Iron Ore", ironOre),
  bar("Iron Bar", ironBar),

  ore("Gold Ore", goldOre),
  bar("Gold Bar", goldBar),
];

const node = getDropperMaker("node");

export const nodes = [
  node(
    "Copper Vein",
    copperVein,
    "Tunnels Entrance",
    d("Copper Ore", 1),
    d("Copper Ore Card", 5000),
    t(DropTable4, 154),
  ),
  node(
    "Iron Vein",
    ironVein,
    "Freefall Caverns",
    d("Iron Ore", 1),
    d("Iron Ore Card", 7690),
    t(DropTable4, 143),
  ),
  node(
    "Gold Vein",
    goldVein,
    "Freefall Caverns",
    d("Gold Ore", 1),
    d("Gold Ore Card", 9090),
    t(DropTable4, 133),
  ),
];
