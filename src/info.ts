import { argv } from "process";
import { question } from "readline-sync";

import { droppers, items, recipes, sinks } from "./data/catalogue.ts";
import shops from "./data/shops.ts";
import { allDropTables } from "./data/tables.ts";
import { GItem } from "./data/types.ts";
import { entries } from "./tools.ts";

async function findItem(value: string) {
  const exact = items.find(
    (i) =>
      i.name.toLocaleLowerCase() === value ||
      i.code?.toLocaleLowerCase() === value,
  );
  if (exact) return exact;

  const prefixed = items.filter((i) =>
    i.name.toLocaleLowerCase().startsWith(value),
  );
  if (prefixed.length === 1) return prefixed[0];

  const { levenshteinEditDistance } = await import("levenshtein-edit-distance");
  let best = Infinity;
  let bestItem: GItem | undefined;
  for (const item of items) {
    const nd = levenshteinEditDistance(value, item.name, true);
    const cd = item.code
      ? levenshteinEditDistance(value, item.code, true)
      : Infinity;
    const d = Math.min(nd, cd);

    if (d < best) {
      best = d;
      bestItem = item;
    }
  }

  return bestItem;
}

async function main() {
  const search = argv.slice(2).join(" ").trim() || question("Item Name/Code: ");
  const item = await findItem(search.toLocaleLowerCase());
  if (!item) {
    console.log("Couldn't find an item with that name or code.");
    return;
  }
  const name = item.name;
  console.log(`Match: ${name} (${item.code})`);

  {
    const matches = shops.filter((s) => s.stock.find((e) => e.item === name));
    if (matches.length)
      console.log(
        `Sold in Shops: ${matches.map((s) => `${s.name} x${s.stock.find((e) => e.item === name)?.stock}`).join(", ")}`,
      );
  }

  {
    const matches = entries(allDropTables).filter(([, drops]) =>
      drops.find((e) => e.type === "item" && e.item === name),
    );
    if (matches.length) {
      console.log(
        `In Drop Tables: ${matches
          .map(
            ([tableName]) =>
              `${tableName} (${droppers
                .filter((dr) =>
                  dr.drops.find(
                    (d) =>
                      d.type === "table" &&
                      matches.find(([, drops]) => drops === d.drops),
                  ),
                )
                .map((d) => d.name)
                .join(", ")})`,
          )
          .join(", ")}`,
      );
    }

    {
      const matches = droppers.filter((dr) =>
        dr.drops.find((d) => d.type === "item" && d.item === name),
      );
      if (matches.length)
        console.log(`Dropped by: ${matches.map((dr) => dr.name).join(", ")}`);
    }
  }

  {
    const matches = recipes.filter((r) => r.input.find((q) => q.item === name));
    if (matches.length) {
      console.log("In Recipes:");
      for (const r of matches)
        console.log(
          `  ${r.input.map((q) => `${q.item} x${q.qty}`).join(", ")} => ${r.output}`,
        );
    }
  }

  {
    const matches = sinks.filter((s) => s.inputs.find((q) => q.item === name));
    if (matches.length)
      console.log(
        `Used in: ${matches.map((s) => `${s.name} (${s.type})`).join(", ")}`,
      );
  }
}
void main();
