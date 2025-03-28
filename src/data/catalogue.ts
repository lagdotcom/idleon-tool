import {
  alchemyDroppers,
  alchemyLiquids,
  alchemyRecipes,
  alchemySinks,
} from "./alchemy";
import { dnaSplicers } from "./breeding";
import { cards } from "./cards";
import { bugCatchingNets, bugNests, bugs } from "./catching";
import { hatchets, logsAndLeaves } from "./choppin";
import { trees } from "./choppin";
import { colosseumChests } from "./colosseum";
import {
  extraConstructionRecipes,
  refineryRecipes,
  refinerySalts,
} from "./construction";
import {
  accountConsumables,
  characterConsumables,
  expBalloons,
  timeCandy,
} from "./consumables";
import { cookingFoods } from "./cooking";
import {
  fish,
  fishingAccessories,
  fishingRods,
  fishingSpots,
  islandExpeditionsRecipes,
} from "./fishing";
import { boostFood, goldenFood, healthFood } from "./food";
import { forgeRecipes } from "./forge";
import { helmets } from "./helmets";
import { keychains } from "./keychains";
import {
  jewelRecipes,
  labChips,
  labJewels,
  nanochipRecipes,
} from "./laboratory";
import { materials } from "./materials";
import { nodes, oresAndBars, pickaxes } from "./mining";
import { misc } from "./misc";
import { monsterDrops } from "./monsterDrops";
import { monsters } from "./monsters";
import { obols } from "./obols";
import { pants } from "./pants";
import { pendants } from "./pendants";
import { postOfficeDrops, postOfficeOrders } from "./postOffice";
import { capes, chatRings, nameTags, premiumHelmets } from "./premium";
import { questItems } from "./questItems";
import { randomEvents } from "./randomEvents";
import { recipeItems } from "./recipes";
import { rings } from "./rings";
import { seasonalEvents } from "./seasonalEvents";
import { shirts } from "./shirts";
import { shoes } from "./shoes";
import { smithingTab1 } from "./smithingTab1";
import { smithingTab2 } from "./smithingTab2";
import { smithingTab3 } from "./smithingTab3";
import { smithingTab4 } from "./smithingTab4";
import { smithingTab5 } from "./smithingTab5";
import { stamps, stampSinks } from "./stamps";
import { statues } from "./statues";
import { specialTalentBooks } from "./talentBooks";
import { critters, trapBoxSets, trappingLocations } from "./trapping";
import { trophies } from "./trophies";
import { GDrop, GItemDrop } from "./types";
import {
  anvilExpansions,
  capacityPouches,
  inventoryBags,
  storageChests,
} from "./unlocks";
import { premiumStones, upgradeStones } from "./upgrades";
import { weapons } from "./weapons";
import { world1Quests } from "./world1Quests";
import { world2Quests } from "./world2Quests";
import { world3Quests } from "./world3Quests";
import { world4Quests } from "./world4Quests";
import { world5Quests } from "./world5Quests";
import { world6Quests } from "./world6Quests";
import { souls, worshipSkulls, worshipTotems } from "./worship";

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
  ...alchemyLiquids,
  ...critters,
  ...souls,
  ...refinerySalts,
  ...cookingFoods,
  ...labJewels,
  ...labChips,
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
  ...alchemyDroppers,
  ...postOfficeDrops,
  ...trappingLocations,
  ...worshipTotems,
  ...randomEvents,
  ...seasonalEvents,
];

export const expandedDroppers = droppers.map((d) => ({
  ...d,
  drops: expandDropTable(d.drops),
}));
export type GExpandedDropper = (typeof expandedDroppers)[number];

export const recipes = [
  ...forgeRecipes,
  ...smithingTab1,
  ...smithingTab2,
  ...smithingTab3,
  ...smithingTab4,
  ...smithingTab5,
  ...alchemyRecipes,
  ...refineryRecipes,
  ...extraConstructionRecipes,
  ...jewelRecipes,
  ...nanochipRecipes,
  ...islandExpeditionsRecipes,
];

export const sinks = [...stampSinks, ...alchemySinks, ...postOfficeOrders];

export const quests = [
  ...world1Quests,
  ...world2Quests,
  ...world3Quests,
  ...world4Quests,
  ...world5Quests,
  ...world6Quests,
];
