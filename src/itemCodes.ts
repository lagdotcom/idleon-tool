import { readFileSync } from "fs";

import { items } from "./data/catalogue";
import { CharIndex, IdleonToolboxJson } from "./toolbox/IdleonToolbox";

function main() {
  const data = readFileSync("./local-only/toolbox.json", { encoding: "utf-8" });

  const json = JSON.parse(data) as IdleonToolboxJson;

  let ci: CharIndex = -1;
  for (const name of json.charNames) {
    ci++;
    console.log(`\n#${ci}: ${name}`);

    console.log("-- Equipment:");
    for (const da of json.data[`EquipOrder_${ci}`]) {
      for (let i = 0; i < da.length; i++) {
        const code = da[`${i}`];
        if (code === "Blank") continue;

        const name = items.find((i) => i.code === code)?.name;
        console.log(`${code} (${name ?? "???"})`);
      }
    }

    console.log("-- Inventory:");
    let ji = -1;
    for (const code of json.data[`InventoryOrder_${ci}`]) {
      ji++;
      if (code === "Blank" || code === "LockedInvSpace") continue;

      const qty = json.data[`ItemQTY_${ci}`][ji];
      const name = items.find((i) => i.code === code)?.name;
      console.log(`${code} x${qty} (${name ?? "???"})`);
    }
  }

  console.log("\n-- Chest:");
  let ki = -1;
  for (const code of json.data.ChestOrder) {
    ki++;
    if (code === "Blank" || code === "LockedInvSpace") continue;

    const qty = json.data.ChestQuantity[ki];
    const name = items.find((i) => i.code === code)?.name;
    console.log(`${code} x${qty} (${name ?? "???"})`);
  }
}
main();
