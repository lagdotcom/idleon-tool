export type BundleCode = "bun_i";

/* unknown codes?
  crabcakeB
  frogD
  frogGG
  frogGR
  frogGR2
  frogGR3
  frogGR4
  frogP
  frogR
  frogW
  frogY
  iceBossZ
  iceBossZ2
  iceBossZ3
  iceknight
  mushP"
  mushR"
  potatoB
  rocky
  sheepB
  shovelY
  skele2
  slimeR
  snakeY
  snakeZ
  snakeZ2
  snakeZ3
  steakR
  target
  totem
*/

// etc.
export type NPCCode =
  | "Bandit_Bob"
  | "Bellows"
  | "Bill_Brr"
  | "Builder_Bird"
  | "Carpenter_Cardinal"
  | "Carpetiem"
  | "Centurion"
  | "Clown"
  | "Coastiolyte"
  | "Constructor_Crow"
  | "Cowbo_Jones"
  | "Crystalswine"
  | "Dazey"
  | "Desert_Davey"
  | "Djonnut"
  | "Dog_Bone"
  | "Egggulyte"
  | "Eliteus"
  | "Falloween_Pumpkin"
  | "Fishpaste97"
  | "Funguy"
  | "Gangster_Gus"
  | "Giftmas_Blobulyte"
  | "Glumlee"
  | "Gobo"
  | "Goldric"
  | "Grasslands_Gary"
  | "Hamish"
  | "Hoggindaz"
  | "Iceland_Irwin"
  | "Krunk"
  | "Lonely_Hunter"
  | "Loominadi"
  | "Lord_of_the_Hunt"
  | "Loveulyte"
  | "Meel"
  | "Mr_Pigibank"
  | "Mutton"
  | "Nebula_Neddy"
  | "Obol_Altar"
  | "Oinkin"
  | "Omar_Da_Ogar"
  | "Papua_Piggea"
  | "Picnic_Stowaway"
  | "Postboy_Pablob"
  | "Promotheus"
  | "Scripticus"
  | "Scubidew"
  | "Shuvelle"
  | "Snake_Jar"
  | "Snouts"
  | "Speccius"
  | "Sprout"
  | "Stiltzcho"
  | "TP_Pete"
  | "Telescope"
  | "Tiki_Chief"
  | "Toadstall"
  | "Town_Marble"
  | "Typhoon"
  | "Walupiggy"
  | "Wellington"
  | "Whattso"
  | "Woodsman"
  | "XxX_Cattleprod_XxX"
  | "Yondergreen"
  | "questDisp";

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
  | "flake"
  | "frogBIG"
  | "frogG"
  | "glass"
  | "goblinG"
  | "jarSand"
  | "mamoth"
  | "mimicA"
  | "moonman"
  | "mushG"
  | "mushW"
  | "penguin"
  | "pincermin"
  | "plank"
  | "poopSmall"
  | "potato"
  | "ram"
  | "ratB"
  | "sandcastle"
  | "sandgiant"
  | "sheep"
  | "slimeG"
  | "snakeB"
  | "snakeG"
  | "snailZ"
  | "snowball"
  | "speaker"
  | "stache"
  | "steak"
  | "thermostat"
  | "w4a2"
  | "w4a3"
  | "w4b1"
  | "w4b2"
  | "w4b3"
  | "w4b4"
  | "w4b5"
  | "w5a1"
  | "w5a2"
  | "w5a3"
  | "w5a4"
  | "w5a5"
  | "w5b1"
  | "w5b2"
  | "w5b3"
  | "w5b4"
  | "w5b5"
  | "w5b6"
  | "w5c1"
  | "w5c2"
  | "w6a1"
  | "w6a2"
  | "w6a3"
  | "w6a4"
  | "w6a5"
  | "w6b1"
  | "w6b2"
  | "w6b3"
  | "w6b4"
  | "w6c1"
  | "w6c2"
  | "w6d1"
  | "w6d2"
  | "w6d3";

export type MiniBossCode =
  | "babayaga"
  | "babaMummy"
  | "babaHour"
  | "poopBig"
  | "mini3a"
  | "mini4a"
  | "mini5a"
  | "mini6a";

export type MonsterCode =
  | MonsterTarget
  | MiniBossCode
  | "Crystal0"
  | "Crystal1"
  | "Crystal2"
  | "Crystal3"
  | "Crystal4"
  | "Crystal5"
  | "poopD"
  | "wolfA"
  | "wolfB"
  | "wolfC"
  | "shovelR"
  | "skele"
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
export type CritterCode =
  | "Critter1"
  | "Critter2"
  | "Critter3"
  | "Critter4"
  | "Critter5"
  | "Critter6"
  | "Critter7"
  | "Critter8"
  | "Critter9"
  | "Critter10";
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
  | "fallEvent1"
  | "loveEvent"
  | "loveEvent2"
  | "loveEvent3"
  | "springEvent1"
  | "springEvent2"
  | "xmasEvent"
  | "xmasEvent2"
  | "xmasEvent3"
  | "ghost";
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
export type ForgeCode = "ForgeA" | "ForgeB";
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
export type AFKTarget = MonsterTarget | DropperCode;

export type CardCode =
  | MonsterCode
  | "Bandit_Bob"
  | ForgeCode
  | OreCode
  | TreeCode
  | FishCode
  | BugCode
  | CritterCardCode
  | SoulCardCode
  | EventCardCode;

export type PetCode =
  | "beanG"
  | "crabcake"
  | "frogG"
  | "jarSand"
  | "mimicA"
  | "mushR"
  | "Pet0"
  | "Pet1"
  | "slimeG"
  | "snakeG";

export enum ClassCode {
  Journeyman = 2,

  Barbarian = 8,
  Squire = 9,

  Bowman = 20,
  Hunter = 21,

  Shaman = 33,
}

export enum MapCode {
  SporeMeadows = 1,
  FreefallCaverns = 7,
  TheOlStraightaway = 10,
  TheBaseOfTheBark = 13,
  JunglePerimeter = 16,
  VegetablePatch = 24,

  JarBridge = 51,
  SaltyShores = 54,
  FarawayPiers = 55,

  ShiftySandbox = 58,
  PincerPlateau = 59,
  TheRing = 62,
  SandsOfTime = 64,

  RefrigerationStation = 105,
}

export enum InvBagCode {
  InventoryBagA = "0",
  InventoryBagB = "1",
  InventoryBagC = "2",
  InventoryBagD = "3",
  InventoryBagE = "4",
  InventoryBagF = "5",

  InventoryBagU = "20",

  TotallyNormalAndNotFakeBag = "101",
  Blunderbag = "102",
  SandySatchel = "103",
  BummoBag = "104",
  CapitalistCase = "105",
  WealthyWallet = "106",
}

export enum InvStorageCode {
  StorageChest1 = "0",
  StorageChest2 = "1",
  StorageChest3 = "2",
  StorageChest4 = "3",
  StorageChest5 = "4",
  StorageChest6 = "5",
  StorageChest7 = "6",
  StorageChest8 = "7",
  StorageChest9 = "8",
  StorageChest10 = "9",
  StorageChest11 = "10",
  StorageChest12 = "11",
  StorageChest13 = "12",
  StorageChest14 = "13",
  StorageChest15 = "14",
  StorageChest16 = "15",
  StorageChest17 = "16",
  StorageChest18 = "17",
  StorageChest19 = "18",
  StorageChest20 = "19",
  StorageChest21 = "20",
  StorageChest22 = "21",
  StorageChest23 = "22",
  StorageChest24 = "23",
  StorageChest25 = "24",
  StorageChest26 = "25",
  StorageChest27 = "26",
  StorageChest28 = "27",

  DankPaypayChest = "100",
  // GelatinousChest = "",
  // CheesyChest = "",
  // WoodlinChest = "",
  // NinjaChest = "",
  // CosmicStorageChest = "",
  // StorageChest90 = "",
  // StorageChest91 = "",
  // StorageChest92 = "",
  // StorageChest93 = "",
  // StorageChest94 = "",
  // StorageChest95 = "",
  // StorageChest96 = "",
  // StorageChest97 = "",
  // StorageChest98 = "",
  // StorageChest99 = "",
  // StorageChest99B = "",
  // StorageChest99C = "",
}

export type QuestCode =
  | "Bandit_Bob1"
  | "Bandit_Bob2"
  | "Bandit_Bob3"
  | "Bandit_Bob4"
  | "Bellows1"
  | "Bellows2"
  | "Bellows3"
  | "Bellows4"
  | "Bill_Brr1"
  | "Bill_Brr2"
  | "Bill_Brr3"
  | "Bill_Brr4"
  | "Bill_Brr5"
  | "Bill_Brr6"
  | "Bill_Brr7"
  | "Blobbo1"
  | "Blobbo2"
  | "Bubbulyte1"
  | "Builder_Bird1"
  | "Bushlyte1"
  | "Bushlyte2"
  | "Bushlyte3"
  | "Cactolyte1"
  | "Cactolyte2"
  | "Cactolyte3"
  | "Cactolyte4"
  | "Capital_P1"
  | "Capital_P2"
  | "Capital_P3"
  | "Carpenter_Cardinal1"
  | "Carpetiem1"
  | "Carpetiem2"
  | "Carpetiem3"
  | "Carpetiem4"
  | "Centurion1"
  | "Centurion2"
  | "Centurion3"
  | "Centurion4"
  | "Centurion5"
  | "Centurion6"
  | "Centurion7"
  | "Centurion8"
  | "Coastiolyte1"
  | "Coastiolyte2"
  | "Constructor_Crow1"
  | "Cowbo_Jones1"
  | "Cowbo_Jones10"
  | "Cowbo_Jones11"
  | "Cowbo_Jones12"
  | "Cowbo_Jones13"
  | "Cowbo_Jones14"
  | "Cowbo_Jones15"
  | "Cowbo_Jones2"
  | "Cowbo_Jones3"
  | "Cowbo_Jones4"
  | "Cowbo_Jones5"
  | "Cowbo_Jones6"
  | "Cowbo_Jones7"
  | "Cowbo_Jones8"
  | "Cowbo_Jones9"
  | "Crystalswine4"
  | "Crystalswine5"
  | "Crystalswine6"
  | "Dazey1"
  | "Dazey2"
  | "Desert_Davey2"
  | "Djonnut1"
  | "Djonnut2"
  | "Djonnut3"
  | "Dog_Bone1"
  | "Dog_Bone2"
  | "Egggulyte1"
  | "Egggulyte2"
  | "Eliteus1"
  | "Eliteus2"
  | "Falloween_Pumpkin1"
  | "Falloween_Pumpkin2"
  | "Falloween_Pumpkin3"
  | "Falloween_Pumpkin4"
  | "Falloween_Pumpkin5"
  | "Fishpaste971"
  | "Fishpaste972"
  | "Funguy1"
  | "Funguy2"
  | "Funguy3"
  | "Funguy4"
  | "Funguy5"
  | "Gangster_Gus1"
  | "Gangster_Gus2"
  | "Gangster_Gus3"
  | "Giftmas_Blobulyte1"
  | "Giftmas_Blobulyte2"
  | "Giftmas_Blobulyte3"
  | "Glumlee1"
  | "Glumlee2"
  | "Glumlee3"
  | "Glumlee4"
  | "Glumlee5"
  | "Gobo1"
  | "Gobo2"
  | "Gobo3"
  | "Gobo4"
  | "Gobo5"
  | "Goldric1"
  | "Goldric2"
  | "Goldric3"
  | "Goldric4"
  | "Goldric5"
  | "Goldric6"
  | "Hamish1"
  | "Hamish2"
  | "Hamish3"
  | "Hoggindaz1"
  | "Hoggindaz10"
  | "Hoggindaz2"
  | "Hoggindaz3"
  | "Hoggindaz4"
  | "Hoggindaz5"
  | "Hoggindaz6"
  | "Hoggindaz7"
  | "Hoggindaz8"
  | "Hoggindaz9"
  | "Hoov1"
  | "Hoov2"
  | "Hoov3"
  | "Hoov4"
  | "Iceland_Irwin1"
  | "Krunk1"
  | "Krunk2"
  | "Krunk3"
  | "Lafu_Shi1"
  | "Lafu_Shi2"
  | "Lafu_Shi3"
  | "Lafu_Shi4"
  | "Lafu_Shi5"
  | "Lafu_Shi6"
  | "Lava_Larry1"
  | "Lonely_Hunter1"
  | "Lonely_Hunter2"
  | "Lonely_Hunter3"
  | "Loominadi1"
  | "Loominadi2"
  | "Loominadi3"
  | "Loominadi4"
  | "Lord_of_the_Hunt1"
  | "Lord_of_the_Hunt10"
  | "Lord_of_the_Hunt11"
  | "Lord_of_the_Hunt2"
  | "Lord_of_the_Hunt3"
  | "Lord_of_the_Hunt4"
  | "Lord_of_the_Hunt5"
  | "Lord_of_the_Hunt6"
  | "Lord_of_the_Hunt7"
  | "Lord_of_the_Hunt8"
  | "Lord_of_the_Hunt9"
  | "Loveulyte1"
  | "Loveulyte2"
  | "Meel1"
  | "Meel2"
  | "Monolith1"
  | "Monolith2"
  | "Monolith3"
  | "Mr_Pigibank1"
  | "Muhmuguh1"
  | "Muhmuguh2"
  | "Muhmuguh3"
  | "Mutton1"
  | "Mutton2"
  | "Mutton3"
  | "Mutton4"
  | "Nebula_Neddy1"
  | "Nebulyte1"
  | "Nebulyte2"
  | "Nebulyte3"
  | "Nebulyte4"
  | "Obol_Altar1"
  | "Oinkin1"
  | "Oinkin2"
  | "Oinkin3"
  | "Omar_Da_Ogar1"
  | "Omar_Da_Ogar2"
  | "Omar_Da_Ogar3"
  | "Omar_Da_Ogar4"
  | "Omar_Da_Ogar5"
  | "Omar_Da_Ogar6"
  | "Papua_Piggea1"
  | "Papua_Piggea2"
  | "Papua_Piggea3"
  | "Papua_Piggea4"
  | "Picnic_Stowaway1"
  | "Picnic_Stowaway10"
  | "Picnic_Stowaway11"
  | "Picnic_Stowaway12"
  | "Picnic_Stowaway2"
  | "Picnic_Stowaway3"
  | "Picnic_Stowaway4"
  | "Picnic_Stowaway5"
  | "Picnic_Stowaway6"
  | "Picnic_Stowaway7"
  | "Picnic_Stowaway8"
  | "Picnic_Stowaway9"
  | "Pirate_Porkchop1"
  | "Pirate_Porkchop2"
  | "Pirate_Porkchop3"
  | "Pirate_Porkchop4"
  | "Poigu1"
  | "Poigu2"
  | "Poigu3"
  | "Postboy_Pablob1"
  | "Promotheus1"
  | "Promotheus2"
  | "Promotheus3"
  | "Promotheus4"
  | "Rift_Ripper1"
  | "Rocklyte1"
  | "Rocklyte2"
  | "Rocklyte3"
  | "Royal_Worm1"
  | "Royal_Worm2"
  | "Royal_Worm3"
  | "Royal_Worm4"
  | "Royal_Worm5"
  | "Royal_Worm6"
  | "Royal_Worm7"
  | "Royal_Worm8"
  | "Royal_Worm9"
  | "Scripticus10"
  | "Scripticus11"
  | "Scripticus12"
  | "Scripticus13"
  | "Scripticus2"
  | "Scripticus3"
  | "Scripticus4"
  | "Scripticus5"
  | "Scripticus6"
  | "Scripticus7"
  | "Scripticus8"
  | "Scripticus9"
  | "Scubidew1"
  | "Scubidew2"
  | "Scubidew3"
  | "Secretkeeper1"
  | "Shuvelle1"
  | "Shuvelle2"
  | "Shuvelle3"
  | "Shuvelle4"
  | "Shuvelle5"
  | "Shuvelle6"
  | "Shuvelle7"
  | "Slargon1"
  | "Slargon2"
  | "Slargon3"
  | "Slargon4"
  | "Snake_Jar1"
  | "Snake_Jar2"
  | "Snake_Jar3"
  | "Snake_Jar4"
  | "Snouts1"
  | "Snouts2"
  | "Snouts3"
  | "Snouts4"
  | "Speccius1"
  | "Speccius2"
  | "Spirit_Sungmin1"
  | "Sprout1"
  | "Sprout2"
  | "Sprout3"
  | "Sprout4"
  | "Stiltzcho1"
  | "Stiltzcho2"
  | "Stiltzcho3"
  | "Stiltzcho4"
  | "Stiltzcho5"
  | "Stiltzcho6"
  | "Sussy_Gene1"
  | "Sussy_Gene2"
  | "Sussy_Gene3"
  | "TP_Pete1"
  | "TP_Pete2"
  | "TP_Pete3"
  | "Telescope1"
  | "Tiki_Chief1"
  | "Tiki_Chief2"
  | "Tiki_Chief3"
  | "Tiki_Chief4"
  | "Tired_Mole1"
  | "Tired_Mole2"
  | "Tired_Mole3"
  | "Toadstall1"
  | "Toadstall2"
  | "Toadstall3"
  | "Town_Marble1"
  | "Typhoon1"
  | "Walupiggy1"
  | "Walupiggy2"
  | "Walupiggy3"
  | "Walupiggy4"
  | "Wellington1"
  | "Wellington2"
  | "Wellington3"
  | "Wellington4"
  | "Whattso1"
  | "Whattso2"
  | "Whattso3"
  | "Whattso4"
  | "Woodlin_Elder1"
  | "Woodlin_Elder2"
  | "Woodlin_Elder3"
  | "Woodlin_Elder4"
  | "Woodlin_Elder5"
  | "Woodsman1"
  | "Woodsman2"
  | "Woodsman3"
  | "Woodsman4"
  | "Worldo1"
  | "Worldo2"
  | "XxX_Cattleprod_XxX1"
  | "XxX_Cattleprod_XxX2"
  | "XxX_Cattleprod_XxX3"
  | "Yondergreen1"
  | "Yondergreen2"
  | "Yondergreen3"
  | "Yondergreen4"
  | "Yondergreen5"
  | "Yondergreen6"
  | "Yondergreen7";

export type StarSign =
  | "Activelius"
  | "All_Rounder"
  | "All_Rounderi"
  | "Blue_Hedgehog"
  | "Bob_Build_Guy"
  | "Centaurii"
  | "Chronus_Cosmos"
  | "Dwarfo_Beardus"
  | "Fast_Frog"
  | "Fatty_Doodoo"
  | "Flexo_Bendo"
  | "Gum_Drop"
  | "Hipster_Logger"
  | "Lucky_Larry"
  | "Miniature_Game"
  | "Mount_Eaterest"
  | "Muscle_Man"
  | "Ned_Kelly"
  | "Pack_Mule"
  | "Pie_Seas"
  | "Pirate_Booty"
  | "Robinhood"
  | "Shoe_Fly"
  | "Smart_Stooge"
  | "The_Book_Worm"
  | "The_Buff_Guy"
  | "The_Fallen_Titan"
  | "The_Fuzzy_Dice";

export type BubbleCode = "a2" | "c3" | "b3" | "_3";

export type CogCode =
  | "Cog0A0"
  | "Cog0A00"
  | "Cog0ad"
  | "Cog0B0"
  | "Cog0B1"
  | "Cog0di"
  | "Cog1A00"
  | "Cog1ad";

export enum FishingLureCode {
  Lure0 = 0,
  Lure1 = 1,
  Lure2 = 2,
  Lure3 = 3,
  Lure6 = 6,
  Lure12 = 12,
}

export enum FishingAdornmentCode {
  Adornment0 = 0,
  Adornment11 = 11,
}

// https://spin.atomicobject.com/typescript-flexible-nominal-typing/
interface Flavouring<FlavourT> {
  _type?: FlavourT;
}
type Flavour<T, FlavourT> = T & Flavouring<FlavourT>;

export type AccountName = Flavour<string, "AccountName">;
export type CharIndex = Flavour<number, "CharIndex">;
export type ItemCode = Flavour<string, "ItemCode">;
export type MillisecondTimestamp = Flavour<number, "MillisecondTimestamp">;
export type Seconds = Flavour<number, "Seconds">;
export type UnixTimestamp = Flavour<number, "UnixTimestamp">;
