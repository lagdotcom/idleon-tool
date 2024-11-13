import { Chance, GItemName, Quantity, URLString } from "../flavours";
import { ItemCode } from "../toolbox/IdleonToolbox";
import {
  GDrop,
  GDropper,
  GDropperType,
  GItem,
  GItemCategory,
  GItemDrop,
  GItemQty,
  GQuest,
  GRecipe,
  GRecipeType,
  GTableDrop,
} from "./types";

export const getItemMaker =
  (category: GItemCategory) =>
  (name: string, img: URLString, code?: ItemCode): GItem => ({
    category,
    name,
    img,
    code,
  });

export const getRecipeMaker =
  (type: GRecipeType) =>
  (output: GItemName, ...input: GRecipe["input"]): GRecipe => ({
    type,
    input,
    output,
  });

export const mkIQ = (item: GItemName, qty: Quantity = 1): GItemQty => ({
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

export const mkQuest = (
  npc: string,
  name: string,
  inputs: GItemQty[],
  outputs: GItemQty[],
): GQuest => ({ npc, name, inputs, outputs });
