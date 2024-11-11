import armorUpgradeStoneB from "../img/Armor_Upgrade_Stone_B.png";
import armorUpgradeStoneC from "../img/Armor_Upgrade_Stone_C.png";
import armorUpgradeStoneG from "../img/Armor_Upgrade_Stone_G.png";
import armorUpgradeStoneI from "../img/Armor_Upgrade_Stone_I.png";
import armorUpgradeStoneII from "../img/Armor_Upgrade_Stone_II.png";
import armorUpgradeStoneIII from "../img/Armor_Upgrade_Stone_III.png";
import armorUpgradeStoneIV from "../img/Armor_Upgrade_Stone_IV.png";
import armorUpgradeStoneSK from "../img/Armor_Upgrade_Stone_SK.png";
import armorUpgradeStoneV from "../img/Armor_Upgrade_Stone_V.png";
import armorUpgradeStoneVI from "../img/Armor_Upgrade_Stone_VI.png";
import easterArmorStone from "../img/Easter_Armor_Stone.png";
import easterToolUpgradeStone from "../img/Easter_Tool_Upgrade_Stone.png";
import easterWeaponStone from "../img/Easter_Weapon_Stone.png";
import giftmasHelmetUpgradeStone from "../img/Giftmas_Helmet_Upgrade_Stone.png";
import giftmasToolUpgradeStone from "../img/Giftmas_Tool_Upgrade_Stone.png";
import hatPremiumifier from "../img/Hat_Premiumifier.png";
import helmetUpgradeStoneI from "../img/Helmet_Upgrade_Stone_I.png";
import helmetUpgradeStoneSK from "../img/Helmet_Upgrade_Stone_SK.png";
import mysteryUpgradeStoneI from "../img/Mystery_Upgrade_Stone_I.png";
import mysteryUpgradeStoneII from "../img/Mystery_Upgrade_Stone_II.png";
import mysteryUpgradeStoneIII from "../img/Mystery_Upgrade_Stone_III.png";
import mysteryUpgradeStoneIV from "../img/Mystery_Upgrade_Stone_IV.png";
import premiumAGIStone from "../img/Premium_AGI_Stone.png";
import premiumBonusSwapper from "../img/Premium_Bonus_Swapper.png";
import premiumLUKStone from "../img/Premium_LUK_Stone.png";
import premiumStoneRefunder from "../img/Premium_Stone_Refunder.png";
import premiumSTRStone from "../img/Premium_STR_Stone.png";
import premiumWISStone from "../img/Premium_WIS_Stone.png";
import summerArmorStone from "../img/Summer_Armor_Stone.png";
import summerToolUpgradeStone from "../img/Summer_Tool_Upgrade_Stone.png";
import summerWeaponStone from "../img/Summer_Weapon_Stone.png";
import toolUpgradeStoneI from "../img/Tool_Upgrade_Stone_I.png";
import toolUpgradeStoneII from "../img/Tool_Upgrade_Stone_II.png";
import toolUpgradeStoneIII from "../img/Tool_Upgrade_Stone_III.png";
import toolUpgradeStoneIV from "../img/Tool_Upgrade_Stone_IV.png";
import toolUpgradeStoneSK from "../img/Tool_Upgrade_Stone_SK.png";
import toolUpgradeStoneV from "../img/Tool_Upgrade_Stone_V.png";
import toolUpgradeStoneVI from "../img/Tool_Upgrade_Stone_VI.png";
import warpedHelmetUpgradeStone from "../img/Warped_Helmet_Upgrade_Stone.png";
import warpedWeaponUpgradeStone from "../img/Warped_Weapon_Upgrade_Stone.png";
import weaponUpgradeStoneC from "../img/Weapon_Upgrade_Stone_C.png";
import weaponUpgradeStoneI from "../img/Weapon_Upgrade_Stone_I.png";
import weaponUpgradeStoneII from "../img/Weapon_Upgrade_Stone_II.png";
import weaponUpgradeStoneIII from "../img/Weapon_Upgrade_Stone_III.png";
import weaponUpgradeStoneIV from "../img/Weapon_Upgrade_Stone_IV.png";
import weaponUpgradeStoneSK from "../img/Weapon_Upgrade_Stone_SK.png";
import weaponUpgradeStoneV from "../img/Weapon_Upgrade_Stone_V.png";
import weaponUpgradeStoneVI from "../img/Weapon_Upgrade_Stone_VI.png";
import { getItemMaker } from "./tools";

const stone = getItemMaker("upgrade stones");
export const upgradeStones = [
  stone("Easter Armor Stone", easterArmorStone),
  stone("Summer Armor Stone", summerArmorStone),
  stone("Armor Upgrade Stone I", armorUpgradeStoneI),
  stone("Armor Upgrade Stone G", armorUpgradeStoneG),
  stone("Armor Upgrade Stone II", armorUpgradeStoneII),
  stone("Armor Upgrade Stone B", armorUpgradeStoneB),
  stone("Armor Upgrade Stone III", armorUpgradeStoneIII),
  stone("Armor Upgrade Stone C", armorUpgradeStoneC),
  stone("Armor Upgrade Stone IV", armorUpgradeStoneIV),
  stone("Armor Upgrade Stone V", armorUpgradeStoneV),
  stone("Armor Upgrade Stone SK", armorUpgradeStoneSK),
  stone("Armor Upgrade Stone VI", armorUpgradeStoneVI),
  stone("Easter Weapon Stone", easterWeaponStone),
  stone("Summer Weapon Stone", summerWeaponStone),
  stone("Weapon Upgrade Stone I", weaponUpgradeStoneI),
  stone("Weapon Upgrade Stone II", weaponUpgradeStoneII),
  stone("Weapon Upgrade Stone III", weaponUpgradeStoneIII),
  stone("Weapon Upgrade Stone C", weaponUpgradeStoneC),
  stone("Warped Weapon Upgrade Stone", warpedWeaponUpgradeStone),
  stone("Weapon Upgrade Stone IV", weaponUpgradeStoneIV),
  stone("Weapon Upgrade Stone V", weaponUpgradeStoneV),
  stone("Weapon Upgrade Stone SK", weaponUpgradeStoneSK),
  stone("Weapon Upgrade Stone VI", weaponUpgradeStoneVI),
  stone("Easter Tool Upgrade Stone", easterToolUpgradeStone),
  stone("Tool Upgrade Stone I", toolUpgradeStoneI),
  stone("Giftmas Tool Upgrade Stone", giftmasToolUpgradeStone),
  stone("Summer Tool Upgrade Stone", summerToolUpgradeStone),
  stone("Tool Upgrade Stone II", toolUpgradeStoneII),
  stone("Tool Upgrade Stone III", toolUpgradeStoneIII),
  stone("Tool Upgrade Stone IV", toolUpgradeStoneIV),
  stone("Tool Upgrade Stone V", toolUpgradeStoneV),
  stone("Tool Upgrade Stone SK", toolUpgradeStoneSK),
  stone("Tool Upgrade Stone VI", toolUpgradeStoneVI),
  stone("Helmet Upgrade Stone I", helmetUpgradeStoneI),
  stone("Warped Helmet Upgrade Stone", warpedHelmetUpgradeStone),
  stone("Giftmas Helmet Upgrade Stone", giftmasHelmetUpgradeStone),
  stone("Helmet Upgrade Stone SK", helmetUpgradeStoneSK),
  stone("Mystery Upgrade Stone I", mysteryUpgradeStoneI),
  stone("Mystery Upgrade Stone II", mysteryUpgradeStoneII),
  stone("Mystery Upgrade Stone III", mysteryUpgradeStoneIII),
  stone("Mystery Upgrade Stone IV", mysteryUpgradeStoneIV),
];

const premium = getItemMaker("premium stones");
export const premiumStones = [
  premium("Hat Premiumifier", hatPremiumifier),
  premium("Premium Stone Refunder", premiumStoneRefunder),
  premium("Premium Bonus Swapper", premiumBonusSwapper),
  premium("Premium STR Stone", premiumSTRStone),
  premium("Premium AGI Stone", premiumAGIStone),
  premium("Premium WIS Stone", premiumWISStone),
  premium("Premium LUK Stone", premiumLUKStone),
];