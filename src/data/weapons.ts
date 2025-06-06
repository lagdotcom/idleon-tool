import { getItemMaker } from "./tools";

const fist = getItemMaker("fisticuffs");
const warrior = getItemMaker("warrior weapons");
const bow = getItemMaker("bows");
const wand = getItemMaker("wands");

export const weapons = [
  fist("Boxing Gloves", "EquipmentPunching1"),
  fist("The Stingers", "EquipmentPunching2"),
  fist("Bandage Wraps", "EquipmentPunching3"),
  fist("Uninflated Glove", "EquipmentPunching4"),
  fist("Eclectic Ordeal", "EquipmentPunching5"),
  fist("Knuckle Sabers", "EquipmentPunching6"),
  fist("Diabolical Gauntlet"),
  fist("Molten Core Knucklers"),
  fist("Crackled Skull Destroyer"),
  fist("Pentastud Slapper"),
  fist("Mittens of the Gods"),

  warrior("Wooden Spear"),
  warrior("Steel Axe", "TestObj7"),
  warrior("Royal Bayonet", "TestObj3"),
  warrior("Enforced Slasher", "EquipmentSword1"),
  warrior("The Ice Breaker", "EquipmentSword2"),
  warrior("Deuscythe", "EquipmentSword3"),
  warrior("Slimsharp Fin"),
  warrior("Diabolical Flesh Ripper"),
  warrior("Magma Maul"),
  warrior("Skull Lance"),
  warrior("Elegant Spear"),
  warrior("Massive Godbreaker"),

  bow("Wooden Bow"),
  bow("Birch Longbow", "EquipmentBows3"),
  bow("Carrot Launcher", "EquipmentBows4"),
  bow("Spiked Menace", "EquipmentBows5"),
  bow("Pharaoh Bow", "EquipmentBows6"),
  bow("Blizzard Bow", "EquipmentBows7"),
  bow("Blackhole Bow", "EquipmentBows8"),
  bow("Shardsure Leif"),
  bow("Diabolical Continuit"),
  bow("Sediment Core Grunkler", "EquipmentBows11"),
  bow("Spine Tingler Sniper"),
  bow("Pristine Longbow"),
  bow("Doublestring Godshooter"),

  wand("Gnarled Wand"),
  wand("Quarterstaff"),
  wand("Starlight", "EquipmentWands5"),
  wand("Crows Nest", "EquipmentWands6"),
  wand("Spriggly Storm", "EquipmentWands3"),
  wand("Grey Gatsby"),
  wand("Skullslip Hallow"),
  wand("Diabolical Opticule"),
  wand("Cattle Core Soothsayer Staff"),
  wand("Staff of the Undead Plague"),
  wand("Sparky Marble Staff"),
  wand("Magnifique Godcaster"),
];
