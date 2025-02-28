import { DropTable4 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const pick = getItemMaker("pickaxes");
export const pickaxes = [
  pick("Junk Pickaxe", "EquipmentTools1"),
  pick("Copper Pickaxe", "EquipmentTools2"),
  pick("Iron Pickaxe", "EquipmentTools3"),
  pick("Skewered Snek"),
  pick("Poopy Pickaxe", "EquipmentTools10"),
  pick("Gold Pickaxe", "EquipmentTools5"),
  pick("Platinum Pickaxe", "EquipmentTools6"),
  pick("Dementia Pickaxe", "EquipmentTools7"),
  pick("Void Imperium Pik", "EquipmentTools11"),
  pick("Lustre Pickaxe"),
  pick("Starfire Pickaxe"),
  pick("Dreadlo Pickolo"),
  pick("Marbiglass Pickaxe"),
  pick("Destroyer of the Mollo Gomme"),
];

const ob = getItemMaker("ores & bars");
export const oresAndBars = [
  ob("Copper Ore", "Copper"),
  ob("Iron Ore", "Iron"),
  ob("Gold Ore", "Gold"),
  ob("Platinum Ore", "Plat"),
  ob("Dementia Ore", "Dementia"),
  ob("Void Ore", "Void"),
  ob("Lustre Ore", "Lustre"),
  ob("Starfire Ore"),
  ob("Dreadlo Ore"),
  ob("Godshard Ore"),
  ob("Marble Ore", "Marble"),

  ob("Copper Bar", "CopperBar"),
  ob("Iron Bar", "IronBar"),
  ob("Gold Bar", "GoldBar"),
  ob("Platinum Bar", "PlatBar"),
  ob("Dementia Bar", "DementiaBar"),
  ob("Void Bar", "VoidBar"),
  ob("Lustre Bar", "LustreBar"),
  ob("Starfire Bar"),
  ob("Dreadlo Bar"),
  ob("Godshard Bar"),
  ob("Marble Bar", "MarbleBar"),
];

const node = getDropperMaker("node");
export const nodes = [
  node(
    "Copper Vein",
    "Tunnels Entrance",
    d("Copper Ore", NaN),
    d("Copper Ore Card", 5000),
    t(DropTable4, 154),
  ),
  node(
    "Iron Vein",
    "Freefall Caverns",
    d("Iron Ore", NaN),
    d("Iron Ore Card", 7690),
    t(DropTable4, 143),
  ),
  node(
    "Gold Vein",
    "Freefall Caverns",
    d("Gold Ore", NaN),
    d("Gold Ore Card", 9090),
    t(DropTable4, 133),
  ),
  node(
    "Platinum Vein",
    "The Ol Straightaway",
    d("Platinum Ore", NaN),
    d("Platinum Ore Card", 12500),
    t(DropTable4, 130),
  ),
  node(
    "Dementia Vein",
    "The Ol Straightaway",
    d("Dementia Ore", NaN),
    d("Dementia Ore Card", 16700),
    t(DropTable4, 122),
  ),
  node(
    "Void Vein",
    "Echoing Egress",
    d("Void Ore", NaN),
    d("Void Ore Card", 16700),
    t(DropTable4, 111),
  ),
  node(
    "Lustre Vein",
    "Echoing Egress",
    d("Lustre Ore", NaN),
    d("Lustre Ore Card", 16700),
    t(DropTable4, 105),
  ),
  node(
    "Starfire Vein",
    "Slip Slidy Ledges",
    d("Starfire Ore", NaN),
    d("Starfire Ore Card", 33300),
    t(DropTable4, 90.9),
  ),
  node(
    "Dreadlo Vein",
    "Slip Slidy Ledges",
    d("Dreadlo Ore", NaN),
    d("Dreadlo Ore Card", 33300),
    t(DropTable4, 76.9),
  ),
  node(
    "Godshard Vein",
    "Motherlode Pit",
    d("Godshard Ore", NaN),
    d("Godshard Ore Card", 500000),
    t(DropTable4, 66.7),
  ),
  node(
    "Marble Vein",
    "Equinox Valley",
    d("Marble Ore", NaN),
    d("Dreadlo Ore Card", 100000000),
    t(DropTable4, 76.9),
  ),
];
