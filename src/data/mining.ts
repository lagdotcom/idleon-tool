import copperBar from "../img/Copper_Bar.png";
import copperOre from "../img/Copper_Ore.png";
import copperPickaxe from "../img/Copper_Pickaxe.png";
import copperVein from "../img/Copper_Vein.png";
import dementiaBar from "../img/Dementia_Bar.png";
import dementiaOre from "../img/Dementia_Ore.png";
import dementiaPickaxe from "../img/Dementia_Pickaxe.png";
import dementiaVein from "../img/Dementia_Vein.png";
import destroyerOfTheMolloGomme from "../img/Destroyer_of_the_Mollo_Gomme.png";
import dreadloBar from "../img/Dreadlo_Bar.png";
import dreadloOre from "../img/Dreadlo_Ore.png";
import dreadloPickolo from "../img/Dreadlo_Pickolo.png";
import dreadloVein from "../img/Dreadlo_Vein.png";
import godshardBar from "../img/Godshard_Bar.png";
import godshardOre from "../img/Godshard_Ore.png";
import godshardVein from "../img/Godshard_Vein.png";
import goldBar from "../img/Gold_Bar.png";
import goldOre from "../img/Gold_Ore.png";
import goldPickaxe from "../img/Gold_Pickaxe.png";
import goldVein from "../img/Gold_Vein.png";
import ironBar from "../img/Iron_Bar.png";
import ironOre from "../img/Iron_Ore.png";
import ironPickaxe from "../img/Iron_Pickaxe.png";
import ironVein from "../img/Iron_Vein.png";
import junkPickaxe from "../img/Junk_Pickaxe.png";
import lustreBar from "../img/Lustre_Bar.png";
import lustreOre from "../img/Lustre_Ore.png";
import lustrePickaxe from "../img/Lustre_Pickaxe.png";
import lustreVein from "../img/Lustre_Vein.png";
import marbiglassPickaxe from "../img/Marbiglass_Pickaxe.png";
import marbleBar from "../img/Marble_Bar.png";
import marbleOre from "../img/Marble_Ore.png";
import marbleVein from "../img/Marble_Vein.png";
import platinumBar from "../img/Platinum_Bar.png";
import platinumOre from "../img/Platinum_Ore.png";
import platinumPickaxe from "../img/Platinum_Pickaxe.png";
import platinumVein from "../img/Platinum_Vein.png";
import poopyPickaxe from "../img/Poopy_Pickaxe.png";
import skeweredSnek from "../img/Skewered_Snek.png";
import starfireBar from "../img/Starfire_Bar.png";
import starfireOre from "../img/Starfire_Ore.png";
import starfirePickaxe from "../img/Starfire_Pickaxe.png";
import starfireVein from "../img/Starfire_Vein.png";
import voidBar from "../img/Void_Bar.png";
import voidImperiumPik from "../img/Void_Imperium_Pik.png";
import voidOre from "../img/Void_Ore.png";
import voidVein from "../img/Void_Vein.png";
import { DropTable4 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const pick = getItemMaker("pickaxes");
export const pickaxes = [
  pick("Junk Pickaxe", junkPickaxe),
  pick("Copper Pickaxe", copperPickaxe),
  pick("Iron Pickaxe", ironPickaxe),
  pick("Skewered Snek", skeweredSnek),
  pick("Poopy Pickaxe", poopyPickaxe),
  pick("Gold Pickaxe", goldPickaxe),
  pick("Platinum Pickaxe", platinumPickaxe),
  pick("Dementia Pickaxe", dementiaPickaxe),
  pick("Void Imperium Pik", voidImperiumPik),
  pick("Lustre Pickaxe", lustrePickaxe),
  pick("Starfire Pickaxe", starfirePickaxe),
  pick("Dreadlo Pickolo", dreadloPickolo),
  pick("Marbiglass Pickaxe", marbiglassPickaxe),
  pick("Destroyer of the Mollo Gomme", destroyerOfTheMolloGomme),
];

const ob = getItemMaker("ores & bars");
export const oresAndBars = [
  ob("Copper Ore", copperOre),
  ob("Iron Ore", ironOre),
  ob("Gold Ore", goldOre),
  ob("Platinum Ore", platinumOre),
  ob("Dementia Ore", dementiaOre),
  ob("Void Ore", voidOre),
  ob("Lustre Ore", lustreOre),
  ob("Starfire Ore", starfireOre),
  ob("Dreadlo Ore", dreadloOre),
  ob("Godshard Ore", godshardOre),
  ob("Marble Ore", marbleOre),

  ob("Copper Bar", copperBar),
  ob("Iron Bar", ironBar),
  ob("Gold Bar", goldBar),
  ob("Platinum Bar", platinumBar),
  ob("Dementia Bar", dementiaBar),
  ob("Void Bar", voidBar),
  ob("Lustre Bar", lustreBar),
  ob("Starfire Bar", starfireBar),
  ob("Dreadlo Bar", dreadloBar),
  ob("Godshard Bar", godshardBar),
  ob("Marble Bar", marbleBar),
];

const node = getDropperMaker("node");
export const nodes = [
  node(
    "Copper Vein",
    copperVein,
    "Tunnels Entrance",
    d("Copper Ore", NaN),
    d("Copper Ore Card", 5000),
    t(DropTable4, 154),
  ),
  node(
    "Iron Vein",
    ironVein,
    "Freefall Caverns",
    d("Iron Ore", NaN),
    d("Iron Ore Card", 7690),
    t(DropTable4, 143),
  ),
  node(
    "Gold Vein",
    goldVein,
    "Freefall Caverns",
    d("Gold Ore", NaN),
    d("Gold Ore Card", 9090),
    t(DropTable4, 133),
  ),
  node(
    "Platinum Vein",
    platinumVein,
    "The Ol Straightaway",
    d("Platinum Ore", NaN),
    d("Platinum Ore Card", 12500),
    t(DropTable4, 130),
  ),
  node(
    "Dementia Vein",
    dementiaVein,
    "The Ol Straightaway",
    d("Dementia Ore", NaN),
    d("Dementia Ore Card", 16700),
    t(DropTable4, 122),
  ),
  node(
    "Void Vein",
    voidVein,
    "Echoing Egress",
    d("Void Ore", NaN),
    d("Void Ore Card", 16700),
    t(DropTable4, 111),
  ),
  node(
    "Lustre Vein",
    lustreVein,
    "Echoing Egress",
    d("Lustre Ore", NaN),
    d("Lustre Ore Card", 16700),
    t(DropTable4, 105),
  ),
  node(
    "Starfire Vein",
    starfireVein,
    "Slip Slidy Ledges",
    d("Starfire Ore", NaN),
    d("Starfire Ore Card", 33300),
    t(DropTable4, 90.9),
  ),
  node(
    "Dreadlo Vein",
    dreadloVein,
    "Slip Slidy Ledges",
    d("Dreadlo Ore", NaN),
    d("Dreadlo Ore Card", 33300),
    t(DropTable4, 76.9),
  ),
  node(
    "Godshard Vein",
    godshardVein,
    "Motherlode Pit",
    d("Godshard Ore", NaN),
    d("Godshard Ore Card", 500000),
    t(DropTable4, 66.7),
  ),
  node(
    "Marble Vein",
    marbleVein,
    "Equinox Valley",
    d("Marble Ore", NaN),
    d("Dreadlo Ore Card", 100000000),
    t(DropTable4, 76.9),
  ),
];
