import { Chance, GItemName, Quantity, URLString } from "../flavours";

export type GItemCategory =
  | "bar"
  | "boost food"
  | "card"
  | "golden food"
  | "hatchet"
  | "health food"
  | "leaf"
  | "log"
  | "monster drop"
  | "ore"
  | "shirt"
  | "statue";

export interface GItem {
  category: GItemCategory;
  name: GItemName;
  img: URLString;
}

export type GRecipeType = "forge" | "smithing";

export interface GRecipeInput {
  item: GItemName;
  qty: Quantity;
}

export interface GRecipe {
  type: GRecipeType;
  output: GItemName;
  input: GRecipeInput[];
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

export type GDropperType = "monster" | "tree" | "node";

export interface GDropper {
  type: GDropperType;
  img: URLString;
  name: string;
  area: string;
  drops: GDrop[];
}
