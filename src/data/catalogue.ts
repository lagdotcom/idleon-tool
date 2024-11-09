import cards from "./cards";
import bugs from "./catching";
import { hatchets, logsAndLeaves } from "./choppin";
import { trees } from "./choppin";
import { boostFood, goldenFood, healthFood } from "./food";
import forge from "./forge";
import helmets from "./helmets";
import materials from "./materials";
import { nodes, oresAndBars, pickaxes } from "./mining";
import monsterDrops from "./monsterDrops";
import monsters from "./monsters";
import pants from "./pants";
import { pendants } from "./pendants";
import questItems from "./questItems";
import rings from "./rings";
import shirts from "./shirts";
import shoes from "./shoes";
import smithing from "./smithing";
import statues from "./statue";
import { GDrop, GItemDrop } from "./types";
import {
  anvilExpansions,
  capacityPouches,
  inventoryBags,
  storageChests,
} from "./unlocks";
import weapons from "./weapons";

// https://idleon.wiki/wiki/The_Slab
export const items = [
  ...weapons,
  ...helmets,
  ...shirts,
  ...pants,
  ...shoes,
  ...pendants,
  ...rings,
  // ...premiumHelmets,
  // ...trophies,
  // ...keychains,
  // ...chatRings,
  // ...capes,
  // ...nameTags,
  ...pickaxes,
  ...hatchets,
  // ...fishingRods,
  // ...bugCatchingNets,
  // ...trapBoxSets,
  // ...worshipSkulls,
  // ...dnaSplicers,
  ...monsterDrops,
  ...questItems,
  ...materials,
  ...oresAndBars,
  ...logsAndLeaves,
  // ...fish,
  ...bugs,
  // ...critters,
  // ...souls,
  // ...refinerySalts,
  ...healthFood,
  ...boostFood,
  ...goldenFood,
  // ...timeCandy,
  // ...expBalloons,
  // ...character,
  // ...account,
  // ...misc,
  ...inventoryBags,
  ...capacityPouches,
  ...storageChests,
  // ...upgradeStones,
  // ...premiumStones,
  ...anvilExpansions,
  // ...stamps,
  ...statues,
  // ...obols,
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
export type GExpandedDropper = (typeof droppers)[number];

export const recipes = [...forge, ...smithing];
