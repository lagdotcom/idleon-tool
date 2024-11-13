import { Chance, Coins, GItemName, Quantity, URLString } from "../flavours";
import { ItemCode } from "../toolbox/IdleonToolbox";

export type GItemCategory =
  | "fisticuffs"
  | "warrior weapons"
  | "bows"
  | "wands"
  | "helmets"
  | "shirts"
  | "pants"
  | "shoes"
  | "pendants"
  | "rings"
  | "premium helmets"
  | "trophies"
  | "keychains"
  | "chat rings"
  | "capes"
  | "nametags"
  | "pickaxes"
  | "hatchets"
  | "fishing rods"
  | "fishing accessories"
  | "bug catching nets"
  | "trap box sets"
  | "worship skulls"
  | "dna splicers"
  | "monster drops"
  | "quest items"
  | "materials"
  | "ores & bars"
  | "logs & leaves"
  | "fish"
  | "bugs"
  | "critters"
  | "souls"
  | "refinery salts"
  | "health food"
  | "boost food"
  | "golden food"
  | "time candy"
  | "exp balloons"
  | "character"
  | "account"
  | "misc"
  | "inventory bags"
  | "capacity pouches"
  | "storage chests"
  | "upgrade stones"
  | "premium stones"
  | "anvil expansions"
  | "anvil recipes"
  | "stamps"
  | "statues"
  | "obols"
  | "cards"
  | "special talent books";

export interface GItem {
  code?: ItemCode;
  category: GItemCategory;
  name: GItemName;
  img: URLString;
}

export type GRecipeType = "forge" | "smithing";

export interface GItemQty {
  item: GItemName;
  qty: Quantity;
}

export interface GRecipe {
  type: GRecipeType;
  output: GItemName;
  input: GItemQty[];
}

export interface GItemDrop {
  type: "item";
  item: GItemName;
  qty: Quantity;
  chance: Chance;
}

export interface GTableDrop {
  type: "table";
  drops: GDrop[];
  chance: Chance;
}

export type GDrop = GItemDrop | GTableDrop;

export type GDropperType =
  | "bug nest"
  | "colosseum chest"
  | "fishing spot"
  | "monster"
  | "node"
  | "tree";

export interface GDropper {
  type: GDropperType;
  img: URLString;
  name: string;
  area: string;
  drops: GDrop[];
}

export interface GQuest {
  npc: string;
  name: string;
  inputs: GItemQty[];
  outputs: GItemQty[];
}

export interface GShopEntry {
  item: GItemName;
  stock: Quantity;
  cost: Coins;
}

export interface GShop {
  name: string;
  stock: GShopEntry[];
}
