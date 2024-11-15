import { dnaSplicers } from "./breeding";
import { cards } from "./cards";
import { bugCatchingNets, bugNests, bugs } from "./catching";
import { hatchets, logsAndLeaves } from "./choppin";
import { trees } from "./choppin";
import { colosseumChests } from "./colosseum";
import { refinerySalts } from "./construction";
import {
  accountConsumables,
  characterConsumables,
  expBalloons,
  timeCandy,
} from "./consumables";
import { fish, fishingAccessories, fishingRods, fishingSpots } from "./fishing";
import { boostFood, goldenFood, healthFood } from "./food";
import forge from "./forge";
import helmets from "./helmets";
import { keychains } from "./keychains";
import { materials } from "./materials";
import { nodes, oresAndBars, pickaxes } from "./mining";
import { misc } from "./misc";
import { monsterDrops } from "./monsterDrops";
import monsters from "./monsters";
import { obols } from "./obols";
import pants from "./pants";
import { pendants } from "./pendants";
import { capes, chatRings, nameTags, premiumHelmets } from "./premium";
import { questItems } from "./questItems";
import { randomEvents } from "./randomEvents";
import { recipeItems } from "./recipes";
import rings from "./rings";
import shirts from "./shirts";
import shoes from "./shoes";
import smithing from "./smithing";
import { stamps } from "./stamps";
import statues from "./statue";
import { specialTalentBooks } from "./talentBooks";
import { critters, trapBoxSets } from "./trapping";
import { trophies } from "./trophies";
import { GDrop, GItemDrop } from "./types";
import {
  anvilExpansions,
  capacityPouches,
  inventoryBags,
  storageChests,
} from "./unlocks";
import { premiumStones, upgradeStones } from "./upgrades";
import weapons from "./weapons";
import { souls, worshipSkulls } from "./worship";

// https://idleon.wiki/wiki/Items
export const items = [
  ...weapons,
  ...helmets,
  ...shirts,
  ...pants,
  ...shoes,
  ...pendants,
  ...rings,
  ...premiumHelmets,
  ...trophies,
  ...keychains,
  ...chatRings,
  ...capes,
  ...nameTags,
  ...pickaxes,
  ...hatchets,
  ...fishingRods,
  ...fishingAccessories,
  ...bugCatchingNets,
  ...trapBoxSets,
  ...worshipSkulls,
  ...dnaSplicers,
  ...monsterDrops,
  ...questItems,
  ...materials,
  ...oresAndBars,
  ...logsAndLeaves,
  ...fish,
  ...bugs,
  ...critters,
  ...souls,
  ...refinerySalts,
  ...healthFood,
  ...boostFood,
  ...goldenFood,
  ...timeCandy,
  ...expBalloons,
  ...characterConsumables,
  ...accountConsumables,
  ...misc,
  ...inventoryBags,
  ...capacityPouches,
  ...storageChests,
  ...upgradeStones,
  ...premiumStones,
  ...anvilExpansions,
  ...recipeItems,
  ...stamps,
  ...statues,
  ...obols,
  ...cards,
  ...specialTalentBooks,
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

export const droppers = [
  ...monsters,
  ...colosseumChests,
  ...nodes,
  ...trees,
  ...fishingSpots,
  ...bugNests,
  ...randomEvents,
].map((d) => ({
  ...d,
  drops: expandDropTable(d.drops),
}));
export type GExpandedDropper = (typeof droppers)[number];

export const recipes = [...forge, ...smithing];
