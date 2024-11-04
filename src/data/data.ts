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

// https://idleon.wiki/wiki/The_Slab
export const items = [
  ...choppinItems,
  ...miningItems,
  ...food,
  ...monsterDrops,
  ...shirts,
  ...statues,
  ...cards,
];

export const droppers = [...monsters, ...nodes, ...trees];

export const recipes = [...forge, ...smithing];
