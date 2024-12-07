import { getItemMaker } from "./tools";

const candy = getItemMaker("time candy");
export const timeCandy = [
  candy("1 HR Time Candy", "Timecandy1"),
  candy("2 HR Time Candy", "Timecandy2"),
  candy("4 HR Time Candy", "Timecandy3"),
  candy("12 HR Time Candy", "Timecandy4"),
  candy("24 HR Time Candy", "Timecandy5"),
  candy("72 HR Time Candy", "Timecandy6"),
  candy("Steamy Time Candy"),
  candy("Spooky Time Candy"),
  candy("Cosmic Time Candy"),
];

const balloon = getItemMaker("exp balloons");
export const expBalloons = [
  balloon("Small Experience Balloon", "ExpBalloon1"),
  balloon("Medium Experience Balloon", "ExpBalloon2"),
  balloon("Large Experience Balloon"),
];

const char = getItemMaker("character");
export const characterConsumables = [
  char("Basketball"),
  char("Secret Map"),
  char("Event Point"),
  char("Talent Point Reset Fragment", "ResetFrag"),
  char("Talent Point Reset Potion", "ResetCompleted"),
  char("Star Talent Reset Potion", "ResetCompletedS"),
  char("Sub Class Swap Token"),
  char("Elite Class Swap Token"),
  char("Post Office Box Reseto Magnifico"),
  char("Hat Premiumifier"),
  char("Premium Stone Refunder"),
  char("Premium Bonus Swapper"),
  char("Gold Food Coupon"),
  char("Resource Coupon"),
  char("Really Really Resource Coupon"),
  char("Black Pearl"),
  char("Divinity Pearl"),
  char("Holy Pearl", "Pearl5"),
  char("Silver Pocketwatch"),
  char("Gold Pocketwatch"),
  char("Crop Transfer Ticket"),
  char("Anvil Reset Whetstone"),
  char("Bottled Town Teleport", "rtt0"),
  char("Bottled World Town Teleport"),
  char("Equinox Mirror"),
];

const acc = getItemMaker("account");
export const accountConsumables = [
  acc("Forest Villa Key"),
  acc("Efaunt's Tomb Key"),
  acc("Chizoar's Cavern Key"),
  acc("Troll's Enclave Key"),
  acc("Kruk's Volcano Key"),
  acc("Colosseum Ticket"),
  acc("Silver Pen"),
  acc("Gem"),
  acc("Talent Point Tab 1"),
  acc("Talent Point Tab 2"),
  acc("Talent Point Tab 3"),
  acc("Talent Point Tab 4"),
  acc("Talent Point Special Tab"),
];
