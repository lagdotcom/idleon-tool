import productionItems from "./anvil";
import cards from "./cards";
import { choppinItems } from "./choppin";
import { trees } from "./choppin";
import food from "./food";
import forge from "./forge";
import { miningItems, nodes } from "./mining";
import monsterDrops from "./monsterDrops";
import monsters from "./monsters";
import shirts from "./shirts";
import smithing from "./smithing";
import statues from "./statue";
import { GDrop, GItemDrop } from "./types";

// https://idleon.wiki/wiki/The_Slab
export const items = [
  ...choppinItems,
  ...miningItems,
  ...food,
  ...monsterDrops,
  ...productionItems,
  ...shirts,
  ...statues,
  ...cards,
];

function expandDropTable(table: GDrop[], multiplier = 1): GItemDrop[] {
  const drops: GItemDrop[] = [];

  for (const entry of table) {
    if (entry.type === "item")
      drops.push({ ...entry, chance: entry.chance * multiplier });
    else drops.push(...expandDropTable(entry.drops, entry.chance * multiplier));
  }

  // TODO consolidate entries for the same item and qty??

  return drops.sort((a, b) => {
    if (a.chance !== b.chance) return a.chance - b.chance;
    return a.item.localeCompare(b.item);
  });
}

export const droppers = [...monsters, ...nodes, ...trees].map((d) => ({
  ...d,
  drops: expandDropTable(d.drops),
}));

export const recipes = [...forge, ...smithing];
