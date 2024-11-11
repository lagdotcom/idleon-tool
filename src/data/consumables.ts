import _1HRTimeCandy from "../img/1_HR_Time_Candy.png";
import _2HRTimeCandy from "../img/2_HR_Time_Candy.png";
import _4HRTimeCandy from "../img/4_HR_Time_Candy.png";
import _12HRTimeCandy from "../img/12_HR_Time_Candy.png";
import _24HRTimeCandy from "../img/24_HR_Time_Candy.png";
import _72HRTimeCandy from "../img/72_HR_Time_Candy.png";
import anvilResetWhetstone from "../img/Anvil_Reset_Whetstone.png";
import basketball from "../img/Basketball.png";
import blackPearl from "../img/Black_Pearl.png";
import bottledTownTeleport from "../img/Bottled_Town_Teleport.png";
import bottledWorldTownTeleport from "../img/Bottled_World_Town_Teleport.png";
import colosseumTicket from "../img/Colosseum_Ticket.png";
import cosmicTimeCandy from "../img/Cosmic_Time_Candy.png";
import cropTransferTicket from "../img/Crop_Transfer_Ticket.png";
import divinityPearl from "../img/Divinity_Pearl.png";
import eliteClassSwapToken from "../img/Elite_Class_Swap_Token.png";
import eventPoint from "../img/Event_Point.png";
import forestVillaKey from "../img/Forest_Villa_Key.png";
import gem from "../img/Gem.png";
import goldFoodCoupon from "../img/Gold_Food_Coupon.png";
import goldPocketwatch from "../img/Gold_Pocketwatch.png";
import hatPremiumifier from "../img/Hat_Premiumifier.png";
import holyPearl from "../img/Holy_Pearl.png";
import largeExperienceBalloon from "../img/Large_Experience_Balloon.png";
import mediumExperienceBalloon from "../img/Medium_Experience_Balloon.png";
import postOfficeBoxResetoMagnifico from "../img/Post_Office_Box_Reseto_Magnifico.png";
import premiumBonusSwapper from "../img/Premium_Bonus_Swapper.png";
import premiumStoneRefunder from "../img/Premium_Stone_Refunder.png";
import reallyReallyResourceCoupon from "../img/Really_Really_Resource_Coupon.png";
import resourceCoupon from "../img/Resource_Coupon.png";
import secretMap from "../img/Secret_Map.png";
import silverPen from "../img/Silver_Pen.png";
import silverPocketwatch from "../img/Silver_Pocketwatch.png";
import smallExperienceBalloon from "../img/Small_Experience_Balloon.png";
import spookyTimeCandy from "../img/Spooky_Time_Candy.png";
import starTalentResetPotion from "../img/Star_Talent_Reset_Potion.png";
import steamyTimeCandy from "../img/Steamy_Time_Candy.png";
import subClassSwapToken from "../img/Sub_Class_Swap_Token.png";
import talentPointResetFragment from "../img/Talent_Point_Reset_Fragment.png";
import talentPointResetPotion from "../img/Talent_Point_Reset_Potion.png";
import talentPointSpecialTab from "../img/Talent_Point_Special_Tab.png";
import talentPointTab1 from "../img/Talent_Point_Tab_1.png";
import talentPointTab2 from "../img/Talent_Point_Tab_2.png";
import talentPointTab3 from "../img/Talent_Point_Tab_3.png";
import talentPointTab4 from "../img/Talent_Point_Tab_4.png";
import { getItemMaker } from "./tools";

const candy = getItemMaker("time candy");
export const timeCandy = [
  candy("1 HR Time Candy", _1HRTimeCandy),
  candy("2 HR Time Candy", _2HRTimeCandy),
  candy("4 HR Time Candy", _4HRTimeCandy),
  candy("12 HR Time Candy", _12HRTimeCandy),
  candy("24 HR Time Candy", _24HRTimeCandy),
  candy("72 HR Time Candy", _72HRTimeCandy),
  candy("Steamy Time Candy", steamyTimeCandy),
  candy("Spooky Time Candy", spookyTimeCandy),
  candy("Cosmic Time Candy", cosmicTimeCandy),
];

const balloon = getItemMaker("exp balloons");
export const expBalloons = [
  balloon("Small Experience Balloon", smallExperienceBalloon),
  balloon("Medium Experience Balloon", mediumExperienceBalloon),
  balloon("Large Experience Balloon", largeExperienceBalloon),
];

const char = getItemMaker("character");
export const characterConsumables = [
  char("Basketball", basketball),
  char("Secret Map", secretMap),
  char("Event Point", eventPoint),
  char("Talent Point Reset Fragment", talentPointResetFragment),
  char("Talent Point Reset Potion", talentPointResetPotion),
  char("Star Talent Reset Potion", starTalentResetPotion),
  char("Sub Class Swap Token", subClassSwapToken),
  char("Elite Class Swap Token", eliteClassSwapToken),
  char("Post Office Box Reseto Magnifico", postOfficeBoxResetoMagnifico),
  char("Hat Premiumifier", hatPremiumifier),
  char("Premium Stone Refunder", premiumStoneRefunder),
  char("Premium Bonus Swapper", premiumBonusSwapper),
  char("Gold Food Coupon", goldFoodCoupon),
  char("Resource Coupon", resourceCoupon),
  char("Really Really Resource Coupon", reallyReallyResourceCoupon),
  char("Black Pearl", blackPearl),
  char("Divinity Pearl", divinityPearl),
  char("Holy Pearl", holyPearl),
  char("Silver Pocketwatch", silverPocketwatch),
  char("Gold Pocketwatch", goldPocketwatch),
  char("Crop Transfer Ticket", cropTransferTicket),
  char("Anvil Reset Whetstone", anvilResetWhetstone),
  char("Bottled Town Teleport", bottledTownTeleport),
  char("Bottled World Town Teleport", bottledWorldTownTeleport),
];

const acc = getItemMaker("account");
export const accountConsumables = [
  acc("Forest Villa Key", forestVillaKey),
  acc("Colosseum Ticket", colosseumTicket),
  acc("Silver Pen", silverPen),
  acc("Gem", gem),
  acc("Talent Point Tab 1", talentPointTab1),
  acc("Talent Point Tab 2", talentPointTab2),
  acc("Talent Point Tab 3", talentPointTab3),
  acc("Talent Point Tab 4", talentPointTab4),
  acc("Talent Point Special Tab", talentPointSpecialTab),
];
