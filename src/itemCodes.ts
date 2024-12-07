import { readFileSync } from "fs";

import { items } from "./data/catalogue";
import { IdleonToolboxJson } from "./toolbox/IdleonToolbox";
import { getAllOwnedItems } from "./toolbox/tools";
import { CharIndex } from "./toolbox/types";

function* enumerate<T, I extends number = number>(
  array: T[],
): Generator<[T, I]> {
  let i = -1 as I;
  for (const item of array) {
    i++;
    yield [item, i];
  }
}

function main() {
  const data = readFileSync("./local-only/toolbox.json", { encoding: "utf-8" });

  const json = JSON.parse(data) as IdleonToolboxJson;

  for (const [name, ci] of enumerate<string, CharIndex>(json.charNames)) {
    console.log(`\n#${ci}: ${name}`);

    console.log("-- Equipment:");
    for (const da of json.data[`EquipOrder_${ci}`]) {
      for (let ei = 0; ei < da.length; ei++) {
        const code = da[`${ei}`];
        if (code === "Blank") continue;

        const name = items.find((i) => i.code === code)?.name;
        console.log(`${code} (${name ?? "???"})`);
      }
    }

    console.log("-- Inventory:");
    for (const [code, ii] of enumerate(json.data[`InventoryOrder_${ci}`])) {
      if (code === "Blank" || code === "LockedInvSpace") continue;

      const qty = json.data[`ItemQTY_${ci}`][ii];
      const name = items.find((i) => i.code === code)?.name;
      console.log(`${code} x${qty} (${name ?? "???"})`);
    }

    console.log("-- Obols:");
    for (const code of json.data[`ObolEqO0_${ci}`]) {
      if (code === "Blank" || code.startsWith("ObolLocked")) continue;

      const name = items.find((i) => i.code === code)?.name;
      console.log(`${code} (${name ?? "???"})`);
    }
  }

  console.log("\n-- Storage:");
  for (const [code, si] of enumerate(json.data.ChestOrder)) {
    if (code === "Blank" || code === "LockedInvSpace") continue;

    const qty = json.data.ChestQuantity[si];
    const name = items.find((i) => i.code === code)?.name;
    console.log(`${code} x${qty} (${name ?? "???"})`);
  }

  console.log("\n-- Obol Inventory:");
  for (const obols of json.data.ObolInvOr) {
    for (let oi = 0; oi < obols.length; oi++) {
      const code = obols[`${oi}`];
      if (code === "Blank" || code === "LockedInvSpace") continue;

      const name = items.find((i) => i.code === code)?.name;
      console.log(`${code} (${name ?? "???"})`);
    }
  }

  console.log("\n-- Obols:");
  for (const code of json.data.ObolEqO1) {
    if (code === "Blank" || code.startsWith("ObolLocked")) continue;

    const name = items.find((i) => i.code === code)?.name;
    console.log(`${code} (${name ?? "???"})`);
  }

  console.log("\n-- Total Owned Items:");
  for (const [code, qty] of getAllOwnedItems(json)) {
    const name = items.find((i) => i.code === code)?.name;
    console.log(`${code} (${name ?? "???"}) x${qty}`);
  }
}
main();
