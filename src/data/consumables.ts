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
  candy("Cosmic Time Candy", "Timecandy9"),
];

const balloon = getItemMaker("exp balloons");
export const expBalloons = [
  balloon("Small Experience Balloon", "ExpBalloon1"),
  balloon("Medium Experience Balloon", "ExpBalloon2"),
  balloon("Large Experience Balloon", "ExpBalloon3"),
];

const char = getItemMaker("character");
export const characterConsumables = [
  char("Basketball"),
  char("Secret Map"),
  char("Event Point", "Quest89"),
  char("Talent Point Reset Fragment", "ResetFrag"),
  char("Talent Point Reset Potion", "ResetCompleted"),
  char("Star Talent Reset Potion", "ResetCompletedS"),
  char("Sub Class Swap Token"),
  char("Elite Class Swap Token"),
  char("Post Office Box Reseto Magnifico", "ResetBox"),
  char("Hat Premiumifier", "Ht"),
  char("Premium Stone Refunder"),
  char("Premium Bonus Swapper"),
  char("Gold Food Coupon", "Gfoodcoupon"),
  char("Resource Coupon"),
  char("Really Really Resource Coupon", "ItemsCoupon2"),
  char("Black Pearl", "Pearl4"),
  char("Divinity Pearl", "Pearl6"),
  char("Holy Pearl", "Pearl5"),
  char("Silver Pocketwatch"),
  char("Gold Pocketwatch"),
  char("Crop Transfer Ticket"),
  char("Anvil Reset Whetstone"),
  char("Bottled Town Teleport", "rtt0"),
  char("Bottled World Town Teleport"),
  char("Equinox Mirror", "Quest78"),
];

const acc = getItemMaker("account");
export const accountConsumables = [
  acc("Forest Villa Key", "Key1"),
  acc("Efaunt's Tomb Key", "Key2"),
  acc("Chizoar's Cavern Key", "Key3"),
  acc("Troll's Enclave Key", "Key4"),
  acc("Kruk's Volcano Key", "Key5"),
  acc("Colosseum Ticket"),
  acc("Silver Pen", "SilverPen"),
  acc("Gem", "PremiumGem"),
  acc("Talent Point Tab 1"),
  acc("Talent Point Tab 2"),
  acc("Talent Point Tab 3"),
  acc("Talent Point Tab 4"),
  acc("Talent Point Special Tab"),
  acc("Dungeon Credits", "DungCredits1"),
  acc("Dungeon Credits Flurbo Edition"),
  acc("Keychain Fragment", "KeyFrag"),
  acc("Pet Egg", "PetEgg"),
  acc("Cooking Ladle", "Ladle"),
  acc("Cosmic Ball"),
  acc("Garbage"),
  acc("Sailing Gold Bar"),
];
