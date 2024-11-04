import { Chance, GItemName, Quantity, URLString } from "../flavours";
import {
  GDrop,
  GDropper,
  GDropperType,
  GItem,
  GItemCategory,
  GItemDrop,
  GRecipe,
  GRecipeInput,
  GRecipeType,
  GTableDrop,
} from "./types";

export const getItemMaker =
  (category: GItemCategory) =>
  (name: string, img: URLString): GItem => ({
    category,
    name,
    img,
  });

export const getRecipeMaker =
  (type: GRecipeType) =>
  (output: GItemName, ...input: GRecipe["input"]): GRecipe => ({
    type,
    input,
    output,
  });

export const mkInput = (item: GItemName, qty: Quantity = 1): GRecipeInput => ({
  item,
  qty,
});

export const mkDrop = (
  item: GItemName,
  chance: Chance,
  qty: Quantity = 1,
): GItemDrop => ({
  type: "item",
  item,
  qty,
  chance,
});

export const mkTableDrop = (drops: GDrop[], chance: Chance): GTableDrop => ({
  type: "table",
  drops,
  chance,
});

export const getDropperMaker =
  (type: GDropperType) =>
  (
    name: string,
    img: URLString,
    area: string,
    ...drops: GDrop[]
  ): GDropper => ({
    type,
    name,
    img,
    area,
    drops,
  });
