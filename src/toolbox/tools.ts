import { Quantity } from "../flavours";
import { naturals } from "../tools";
import { DataArray, IdleonToolboxJson } from "./IdleonToolbox";
import { CharIndex, ItemCode } from "./types";

function extractDataArray<T>(array: DataArray<T>) {
  return naturals(array.length).map((i) => array[`${i}`]);
}

function addQty<T>(item: T, qty: Quantity = 1) {
  return { item, qty };
}

const isRealObol = (
  obol:
    | ItemCode
    | "Blank"
    | "ObolLocked1"
    | "ObolLocked2"
    | "ObolLocked3"
    | "ObolLocked4",
): obol is ItemCode => obol !== "Blank" && !obol.startsWith("ObolLocked");

const isRealItemEntry = (entry: {
  item: ItemCode | "Blank" | "LockedInvSpace";
  qty: Quantity;
}): entry is { item: ItemCode; qty: Quantity } =>
  entry.item !== "Blank" && entry.item !== "LockedInvSpace";

export function getCharacter(json: IdleonToolboxJson, ci: CharIndex) {
  const EquipOrder = json.data[`EquipOrder_${ci}`].flatMap(extractDataArray);
  const EquipQty = json.data[`EquipQTY_${ci}`].flatMap(extractDataArray);
  const equipment = EquipOrder.map((item, i) =>
    addQty(item, EquipQty[i]),
  ).filter(isRealItemEntry);

  const Inventory = json.data[`InventoryOrder_${ci}`];
  const InventoryQty = json.data[`ItemQTY_${ci}`];
  const inventory = Inventory.map((item, i) =>
    addQty(item, InventoryQty[i]),
  ).filter(isRealItemEntry);

  const obols = json.data[`ObolEqO0_${ci}`]
    .filter(isRealObol)
    .map((item) => addQty(item));

  return { equipment, inventory, obols };
}

export function getAllOwnedItems(json: IdleonToolboxJson) {
  const counts = new Map<ItemCode, Quantity>();

  const add = ({ item, qty }: { item: ItemCode; qty: Quantity }) =>
    counts.set(item, qty + (counts.get(item) ?? 0));

  for (let ci: CharIndex = 0; ci < json.charNames.length; ci++) {
    const { equipment, inventory, obols } = getCharacter(json, ci);

    equipment.forEach(add);
    inventory.forEach(add);
    obols.forEach(add);
  }

  const storage = json.data.ChestOrder.map((item, i) =>
    addQty(item, json.data.ChestQuantity[i]),
  ).filter(isRealItemEntry);
  storage.forEach(add);

  const obolInventory = json.data.ObolInvOr.flatMap(extractDataArray)
    .map((item) => addQty(item))
    .filter(isRealItemEntry);
  obolInventory.forEach(add);

  const obols = json.data.ObolEqO1.filter(isRealObol).map((item) =>
    addQty(item),
  );
  obols.forEach(add);

  return counts;
}
