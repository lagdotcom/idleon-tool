import { getItemMaker } from "./tools";

const fist = getItemMaker("fisticuffs");
const warrior = getItemMaker("warrior weapons");
const bow = getItemMaker("bows");
const wand = getItemMaker("wands");

export const weapons = [
  fist("Boxing Gloves"),
  fist("The Stingers", "EquipmentPunching2"),
  fist("Bandage Wraps", "EquipmentPunching3"),
  fist("Uninflated Glove"),
  fist("Eclectic Ordeal"),
  fist("Knuckle Sabers"),
  fist("Diabolical Gauntlet"),
  fist("Molten Core Knucklers"),
  fist("Crackled Skull Destroyer"),
  fist("Pentastud Slapper"),
  fist("Mittens of the Gods"),

  warrior("Wooden Spear"),
  warrior("Steel Axe", "TestObj7"),
  warrior("Royal Bayonet", "TestObj3"),
  warrior("Enforced Slasher"),
  warrior("The Ice Breaker"),
  warrior("Deuscythe"),
  warrior("Slimsharp Fin"),
  warrior("Diabolical Flesh Ripper"),
  warrior("Magma Maul"),
  warrior("Skull Lance"),
  warrior("Elegant Spear"),
  warrior("Massive Godbreaker"),

  bow("Wooden Bow"),
  bow("Birch Longbow"),
  bow("Carrot Launcher", "EquipmentBows4"),
  bow("Spiked Menace", "EquipmentBows5"),
  bow("Pharaoh Bow"),
  bow("Blizzard Bow"),
  bow("Blackhole Bow"),
  bow("Shardsure Leif"),
  bow("Diabolical Continuit"),
  bow("Sediment Core Grunkler"),
  bow("Spine Tingler Sniper"),
  bow("Pristine Longbow"),
  bow("Doublestring Godshooter"),

  wand("Gnarled Wand"),
  wand("Quarterstaff"),
  wand("Starlight", "EquipmentWands5"),
  wand("Crows Nest"),
  wand("Spriggly Storm"),
  wand("Grey Gatsby"),
  wand("Skullslip Hallow"),
  wand("Diabolical Opticule"),
  wand("Cattle Core Soothsayer Staff"),
  wand("Staff of the Undead Plague"),
  wand("Sparky Marble Staff"),
  wand("Magnifique Godcaster"),
];
