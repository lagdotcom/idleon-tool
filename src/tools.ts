import { Quantity } from "./flavours";

export const array = Array.from;

export const entries = Object.entries;

export function naturals(count: number) {
  return array(Array(count).keys());
}

export function getQty<K>(map: Map<K, Quantity>, item: K) {
  return map.get(item) ?? (0 as Quantity);
}

export function addQty<K>(map: Map<K, Quantity>, item: K, qty: Quantity) {
  return map.set(item, getQty(map, item) + qty);
}
