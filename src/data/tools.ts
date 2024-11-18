import { Chance, Coins, GItemName, Quantity } from "../flavours";
import { ItemCode } from "../toolbox/types";
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
  (name: string, code?: ItemCode): GItem => ({
    category,
    name,
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
  (name: string, area: string, ...drops: GDrop[]): GDropper => ({
    type,
    name,
    area,
    drops,
  });

export const mkQuest = (
  npc: string,
  name: string,
  inputs: GItemQty[],
  outputs: GItemQty[],
): GQuest => ({ npc, name, inputs, outputs });

const coins = (...denominations: number[]) => {
  let total: Coins = 0n;
  let multiple = 1n;
  for (const d of denominations) {
    total += BigInt(d) * multiple;
    multiple *= 100n;
  }

  return total;
};

export const silver = (s: number, c = 0) => coins(c, s);
export const gold = (g: number, s = 0, c = 0) => coins(c, s, g);
export const platinum = (p: number, g = 0, s = 0, c = 0) => coins(c, s, g, p);
export const dementia = (d: number, p = 0, g = 0, s = 0, c = 0) =>
  coins(c, s, g, p, d);
export const voidC = (v: number, d = 0, p = 0, g = 0, s = 0, c = 0) =>
  coins(c, s, g, p, d, v);
export const lustre = (l: number, v = 0, d = 0, p = 0, g = 0, s = 0, c = 0) =>
  coins(c, s, g, p, d, v, l);
export const starfire = (
  sf: number,
  l = 0,
  v = 0,
  d = 0,
  p = 0,
  g = 0,
  s = 0,
  c = 0,
) => coins(c, s, g, p, d, v, l, sf);
export const dreadlo = (
  dr: number,
  sf = 0,
  l = 0,
  v = 0,
  d = 0,
  p = 0,
  g = 0,
  s = 0,
  c = 0,
) => coins(c, s, g, p, d, v, l, sf, dr);
export const godshard = (
  go: number,
  dr = 0,
  sf = 0,
  l = 0,
  v = 0,
  d = 0,
  p = 0,
  g = 0,
  s = 0,
  c = 0,
) => coins(c, s, g, p, d, v, l, sf, dr, go);
export const sunder = (
  su: number,
  go = 0,
  dr = 0,
  sf = 0,
  l = 0,
  v = 0,
  d = 0,
  p = 0,
  g = 0,
  s = 0,
  c = 0,
) => coins(c, s, g, p, d, v, l, sf, dr, go, su);
export const tydal = (
  t: number,
  su = 0,
  go = 0,
  dr = 0,
  sf = 0,
  l = 0,
  v = 0,
  d = 0,
  p = 0,
  g = 0,
  s = 0,
  c = 0,
) => coins(c, s, g, p, d, v, l, sf, dr, go, su, t);
