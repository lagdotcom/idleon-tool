import { getItemMaker } from "./tools";

const stone = getItemMaker("upgrade stones");
export const upgradeStones = [
  stone("Easter Armor Stone"),
  stone("Summer Armor Stone", "StoneAeB"),
  stone("Armor Upgrade Stone I", "StoneA1"),
  stone("Armor Upgrade Stone G", "StoneA1b"),
  stone("Armor Upgrade Stone II", "StoneA2"),
  stone("Armor Upgrade Stone B", "StoneA2b"),
  stone("Armor Upgrade Stone III", "StoneA3"),
  stone("Armor Upgrade Stone C", "StoneA3b"),
  stone("Armor Upgrade Stone IV", "StoneA4"),
  stone("Armor Upgrade Stone V", "StoneA5"),
  stone("Armor Upgrade Stone SK", "StoneA6"),
  stone("Armor Upgrade Stone VI", "StoneA7"),
  stone("Easter Weapon Stone"),
  stone("Summer Weapon Stone", "StoneWeb"),
  stone("Weapon Upgrade Stone I", "StoneW1"),
  stone("Weapon Upgrade Stone II", "StoneW2"),
  stone("Weapon Upgrade Stone III", "StoneW3"),
  stone("Weapon Upgrade Stone C"),
  stone("Warped Weapon Upgrade Stone", "StoneW6"),
  stone("Weapon Upgrade Stone IV", "StoneW4"),
  stone("Weapon Upgrade Stone V", "StoneW5"),
  stone("Weapon Upgrade Stone SK", "StoneW7"),
  stone("Weapon Upgrade Stone VI", "StoneW8"),
  stone("Easter Tool Upgrade Stone"),
  stone("Tool Upgrade Stone I", "StoneT1"),
  stone("Giftmas Tool Upgrade Stone", "StoneT1e"),
  stone("Summer Tool Upgrade Stone"),
  stone("Tool Upgrade Stone II", "StoneT2"),
  stone("Tool Upgrade Stone III", "StoneT3"),
  stone("Tool Upgrade Stone IV", "StoneT4"),
  stone("Tool Upgrade Stone V", "StoneT5"),
  stone("Tool Upgrade Stone SK", "StoneT6"),
  stone("Tool Upgrade Stone VI", "StoneT7"),
  stone("Helmet Upgrade Stone I", "StoneHelm1"),
  stone("Warped Helmet Upgrade Stone", "StoneHelm6"),
  stone("Giftmas Helmet Upgrade Stone", "StoneHelm1b"),
  stone("Helmet Upgrade Stone SK"),
  stone("Mystery Upgrade Stone I", "StoneZ1"),
  stone("Mystery Upgrade Stone II", "StoneZ2"),
  stone("Mystery Upgrade Stone III", "StoneZ3"),
  stone("Mystery Upgrade Stone IV", "StoneZ4"),
];

const premium = getItemMaker("premium stones");
export const premiumStones = [
  premium("Hat Premiumifier"),
  premium("Premium Stone Refunder"),
  premium("Premium Bonus Swapper"),
  premium("Premium STR Stone", "StonePremSTR"),
  premium("Premium AGI Stone", "StonePremAGI"),
  premium("Premium WIS Stone", "StonePremWIS"),
  premium("Premium LUK Stone", "StonePremLUK"),
];
