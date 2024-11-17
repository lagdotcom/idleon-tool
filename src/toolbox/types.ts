export type BundleCode = "bun_i";

export type MonsterTarget =
  | "acorn"
  | "beanG"
  | "bloque"
  | "branch"
  | "cactus"
  | "carrotO"
  | "coconut"
  | "crabcake"
  | "demonP"
  | "eye"
  | "frogBIG"
  | "mimicA"
  | "moonman"
  | "plank"
  | "sandcastle"
  | "sandgiant"
  | "snailZ"
  | "steak";

export type MonsterCode =
  | MonsterTarget
  | "Crystal0"
  | "Crystal1"
  | "Crystal2"
  | "Crystal3"
  | "Crystal4"
  | "Crystal5"
  | "wolfA"
  | "wolfB"
  | "wolfC"
  | "babayaga"
  | "Boss2A"
  | "Boss2B"
  | "Boss2C"
  | "Boss3A"
  | "Boss3B"
  | "Boss3C"
  | "Boss4A"
  | "Boss4B"
  | "Boss4C"
  | "Boss5A"
  | "Boss5B"
  | "Boss5C"
  | "Boss6A"
  | "Boss6B"
  | "Boss6C";
export type BugCode =
  | "Bug1"
  | "Bug2"
  | "Bug3"
  | "Bug4"
  | "Bug5"
  | "Bug6"
  | "Bug7"
  | "Bug8"
  | "Bug9"
  | "Bug10"
  | "Bug12"
  | "Bug13";
export type CritterCardCode =
  | "CritterCard1"
  | "CritterCard2"
  | "CritterCard3"
  | "CritterCard4"
  | "CritterCard5"
  | "CritterCard6"
  | "CritterCard7"
  | "CritterCard8"
  | "CritterCard9"
  | "CritterCard10";
export type EventCardCode =
  | "EasterEvent1"
  | "EasterEvent2"
  | "SummerEvent1"
  | "SummerEvent2"
  | "fallEvent1";
export type FishingSpotCode = "FishSmall";
export type FishCode =
  | "Fish1"
  | "Fish2"
  | "Fish3"
  | "Fish4"
  | "Fish5"
  | "Fish6"
  | "Fish7"
  | "Fish8"
  | "Fish9"
  | "Fish10"
  | "Fish11"
  | "Fish12";
export type OreCode =
  | "Copper"
  | "Iron"
  | "Gold"
  | "Plat"
  | "Dementia"
  | "Void"
  | "Lustre"
  | "Starfire"
  | "Dreadlo"
  | "Godshard"
  | "Marble";
export type SoulCardCode =
  | "SoulCard1"
  | "SoulCard2"
  | "SoulCard3"
  | "SoulCard4"
  | "SoulCard5"
  | "SoulCard6"
  | "SoulCard7";
export type TreeCode =
  | "OakTree"
  | "BirchTree"
  | "JungleTree"
  | "ForestTree"
  | "PalmTree"
  | "ToiletTree"
  | "StumpTree"
  | "SaharanFoal"
  | "Tree7"
  | "Tree8"
  | "Tree9"
  | "Tree10"
  | "AlienTree"
  | "Tree12"
  | "Tree13";

export type DropperCode = FishingSpotCode | TreeCode;
export type AnvilCode = MonsterTarget | DropperCode;

export type CardCode =
  | MonsterCode
  | "Bandit_Bob"
  | OreCode
  | TreeCode
  | FishCode
  | BugCode
  | CritterCardCode
  | SoulCardCode
  | EventCardCode;

export enum ClassCode {
  Journeyman = 2,

  Barbarian = 8,
  Squire = 9,

  Bowman = 20,
  Hunter = 21,

  Shaman = 33,
}

export enum MapCode {
  VegetablePatch = 24,

  SaltyShores = 54,
  FarawayPiers = 55,

  ShiftySandbox = 58,
  SandsOfTime = 64,
}

// https://spin.atomicobject.com/typescript-flexible-nominal-typing/
interface Flavouring<FlavourT> {
  _type?: FlavourT;
}
type Flavour<T, FlavourT> = T & Flavouring<FlavourT>;

export type CharIndex = Flavour<number, "CharIndex">;
export type ItemCode = Flavour<string, "ItemCode">;
