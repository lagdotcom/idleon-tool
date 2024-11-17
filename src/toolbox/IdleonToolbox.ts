import { BundleCode, CardCode, CharIndex, ClassCode, ItemCode } from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type EscapedJson<T> = string;

export type numberQ = `${number}`;

export interface TimeAway {
  Arcade: number;
  GlobalTime: number;
  Player: number;
  Sailing: number;
  Construction: number;
  Printer: number;
  Cauldron: number;
  Cooking: number;
  DailyRewards: number;
  BookLib: number;
  Pets: number;
  ShopRestock: number;
  PostOfficeRefresh: number;
  Forge: number;
}

export interface DataArray<T> {
  length: number;
  [key: numberQ]: T;
}

export type StampLevel = DataArray<number | numberQ>;

export type Refinery = [
  number[], // times?
  string[], // names?
  [number, number, number, number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
  [number, number, number, number, number],
];

export interface CarryCap {
  Souls: number;
  Chopping: number;
  Mining: number;
  Quests: number;
  fillerz: number;
  Fishing: number;
  Critters: number;
  Foods: number;
  bCraft: number;
  Statues: number;
  Bugs: number;
}

export interface ObolInvMap {
  Defence: number;
  STR: number;
  WIS: number;
  Weapon_Power: number;
  LUK: number;
  Reach: number;
  Speed: number;
  AGI: number;
}

export interface EMm1 {
  Upgrade_Slots_Left: number;
  Weapon_Power: number;
  Speed: number;
  Reach: number;
  Power: number;
  Defence: number;
  STR: number;
  AGI: number;
  WIS: number;
  LUK: number;
}
export interface EMm0 extends EMm1 {
  UQ1val: number;
  UQ2val: number;
}

export interface IMm {
  Weapon_Power: number;
  Speed: number;
  Reach: number;
  Power: number;
  Defence: number;
  STR: number;
  AGI: number;
  WIS: number;
  LUK: number;
  UQ1txt: number;
  UQ2txt: number;
}

export type Guild = [
  number[],
  [number, number, number],
  [number, number, number],
  [number, number, number],
  [number, number, number],
  [number, number, number],
  [number, number, number],
  [number, number, number],
  [number, number, number],
  [number, number, number],
];

export type Rift = [
  number,
  number,
  string,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export type Territory = [
  number,
  number,
  number,
  string,
  number,
  string,
  number,
  string,
  number,
];

export type Gaming = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  "",
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

export interface DataJson {
  AchieveReg: EscapedJson<number[]>;
  AnvilCraftStatus: EscapedJson<number[][]>;
  ArcadeUpg: EscapedJson<number[]>;
  ArcUnclaim: EscapedJson<unknown>;
  Atoms: number[];
  BGsel: number;
  BGunlocked: (0 | 1)[];
  Boats: EscapedJson<number[][]>;
  BossInfo: DataArray<number>[];
  Breeding: EscapedJson<number[][]>;
  BribeStatus: (1 | 0 | -1)[];
  BugInfo: EscapedJson<number[][]>;
  bun_i: number;
  BundlesReceived: EscapedJson<Record<BundleCode, 1>>;
  Captains: EscapedJson<number[][]>;
  Cards0: EscapedJson<Record<string, number>>;
  Cards1: EscapedJson<string[]>;
  CauldronBubbles: EscapedJson<[0 | string, number, number][]>;
  CauldronInfo: DataArray<number>[];
  CauldronJobs0: EscapedJson<number[]>;
  CauldronJobs1: EscapedJson<number[]>;
  CauldronP2W: EscapedJson<number[][]>;
  CauldUpgLVs: number[];
  CauldUpgXPs: [number];
  ChestOrder: (ItemCode | "Blank" | "LockedInvSpace")[];
  ChestQuantity: number[];
  CloudsaveTimer: number;
  CMm: EscapedJson<Record<numberQ, EMm0>>;
  CMmLENGTH: number;
  CogM: EscapedJson<Record<numberQ, { a: number; b: number; c: number }>>;
  CogO: EscapedJson<string[]>;
  Cooking: EscapedJson<number[][]>;
  CSver: number;
  CYAFKdoubles: number;
  CYAnvilTabsOwned: number;
  CYCharSlotsMTX: number;
  CYColosseumTickets: number;
  CYDeliveryBoxComplete: number;
  CYDeliveryBoxMisc: number;
  CYDeliveryBoxStreak: number;
  CYGems: number;
  CYGoldPens: number;
  CYKeysAll: number[];
  CYNPC: number[];
  CYObolFragments: number;
  CYSilverPens: number;
  CYTalentPoints: number[];
  CYWorldTeleports: number;
  Divinity: number[];
  DoOnceREAL: number;
  Dream: number[];
  DungUpg: EscapedJson<number[][]>;
  FamValColosseumHighscores: number[];
  FamValFishingToolkitOwned: DataArray<number>[];
  FamValMinigameHiscores: number[];
  FamValWorldSelected: number;
  FarmCrop: EscapedJson<unknown>;
  FarmPlot: EscapedJson<[number[]]>;
  FarmRank: EscapedJson<number[][]>;
  FarmUpg: number[];
  FlagP: EscapedJson<number[]>;
  FlagU: EscapedJson<number[]>;
  ForgeIntProg: number[];
  ForgeItemOrder: (ItemCode | "Blank")[];
  ForgeItemQty: number[];
  ForgeLV: number[];
  Gaming: Gaming;
  GamingSprout: EscapedJson<[number, number, number, number, number, number][]>;
  GemItemsPurchased: EscapedJson<number[]>;
  GemsOwned: number;
  GemsPacksPurchased: number[];
  Guild: EscapedJson<Guild>;
  HintStatus: EscapedJson<(1 | -1)[][]>;
  Holes: EscapedJson<number[][]>;
  InvStorageUsed: EscapedJson<Record<numberQ, numberQ>>;
  KRbest: EscapedJson<Record<string, number>>;
  Lab: EscapedJson<number[][]>;
  Meals: EscapedJson<number[][]>;
  MoneyBANK: number;
  Ninja: EscapedJson<unknown>;
  ObolEqMAPz1: EscapedJson<unknown>;
  ObolEqMAPz2: EscapedJson<unknown>;
  ObolEqO1: (
    | ItemCode
    | "Blank"
    | "ObolLocked1"
    | "ObolLocked2"
    | "ObolLocked3"
    | "ObolLocked4"
  )[];
  ObolEqO2: string[];
  ObolInvOr: DataArray<ItemCode | "Blank" | "LockedInvSpace">[];
  ObolInvOwn: number[];
  OptLacc: unknown[];
  Pets: EscapedJson<[string, number, number, number][]>;
  PetsStored: EscapedJson<[string, number, number, number][]>;
  PostOfficeInfo: DataArray<number | string>[];
  PostOfficeInfo0: DataArray<string | number>[];
  PostOfficeInfo1: DataArray<number>[];
  PrayOwned: EscapedJson<number[]>;
  Print: EscapedJson<("Blank" | 0)[]>;
  PrinterXtra: unknown[];
  Refinery: EscapedJson<Refinery>;
  Rift: Rift;
  SailChests: EscapedJson<[]>;
  Sailing: EscapedJson<number[][]>;
  SaltLick: EscapedJson<number[]>;
  ServerGems: number;
  ServerGemsReceived: number;
  ShopStock: DataArray<number>[];
  Shrine: EscapedJson<number[][]>;
  SSprog: EscapedJson<[string, number][]>;
  StampLv: DataArray<number>[];
  StampLvM: [StampLevel, StampLevel, StampLevel];
  StarSg: EscapedJson<Record<string, 1>>;
  SteamAchieve: EscapedJson<number[]>;
  StuG: EscapedJson<number[]>;
  Summon: EscapedJson<number[][]>;
  TaskZZ0: EscapedJson<number[][]>;
  TaskZZ1: EscapedJson<number[][]>;
  TaskZZ2: EscapedJson<number[][]>;
  TaskZZ3: EscapedJson<number[][]>;
  TaskZZ4: EscapedJson<number[]>;
  TaskZZ5: EscapedJson<number[]>;
  Territory: EscapedJson<Territory[]>;
  TimeAway: EscapedJson<TimeAway>;
  TotemInfo: EscapedJson<number[][]>;
  Tower: EscapedJson<number[]>;
  WeeklyBoss: EscapedJson<Record<string, number>>;

  [key: `AFKtarget_${CharIndex}`]: string;
  [key: `AnvilPA_${CharIndex}`]: DataArray<number>[];
  [key: `AnvilPAselect_${CharIndex}`]: number[];
  [key: `AnvilPAstats_${CharIndex}`]: number[];
  [key: `AtkCD_${CharIndex}`]: EscapedJson<Record<numberQ, number>>;
  [key: `AttackLoadout_${CharIndex}`]: EscapedJson<("Null" | number)[][]>;
  [key: `AttackLoadoutpre_${CharIndex}`]: EscapedJson<("Null" | number)[][]>;
  [key: `BuffsActive_${CharIndex}`]: DataArray<number>[];
  [key: `CardEquip_${CharIndex}`]: (CardCode | "B")[];
  [key: `CardPreset_${CharIndex}`]: EscapedJson<(CardCode | "B")[][]>;
  [key: `CharacterClass_${CharIndex}`]: ClassCode;
  [key: `CharSAVED_${CharIndex}`]: number;
  [key: `CSetEq_${CharIndex}`]: EscapedJson<Record<string, number>>;
  [key: `CurrentMap_${CharIndex}`]: number;
  [key: `EMm0_${CharIndex}`]: EscapedJson<Record<numberQ, EMm0>>;
  [key: `EMm1_${CharIndex}`]: EscapedJson<Record<numberQ, EMm1>>;
  [key: `EMmLENGTH0_${CharIndex}`]: number;
  [key: `EMmLENGTH1_${CharIndex}`]: number;
  [key: `EquipOrder_${CharIndex}`]: DataArray<ItemCode | "Blank">[];
  [key: `EquipQTY_${CharIndex}`]: DataArray<number>[];
  [key: `Exp0_${CharIndex}`]: number[];
  [key: `ExpReq0_${CharIndex}`]: number[];
  [key: `FoodCD_${CharIndex}`]: number[];
  [key: `FoodSlO_${CharIndex}`]: number;
  [key: `IMm_${CharIndex}`]: EscapedJson<Record<numberQ, IMm>>;
  [key: `IMmLENGTH_${CharIndex}`]: number;
  [key: `InvBagsUsed_${CharIndex}`]: EscapedJson<Record<numberQ, number>>;
  [key: `InventoryOrder_${CharIndex}`]: (
    | ItemCode
    | "Blank"
    | "LockedInvSpace"
  )[];
  [key: `ItemQTY_${CharIndex}`]: number[];
  [key: `KLA_${CharIndex}`]: EscapedJson<number[][]>;
  [key: `LockedSlots_${CharIndex}`]: number[];
  [key: `Lv0_${CharIndex}`]: number[];
  [key: `MaxCarryCap_${CharIndex}`]: EscapedJson<CarryCap>;
  [key: `Money_${CharIndex}`]: number;
  [key: `NPCdialogue_${CharIndex}`]: EscapedJson<Record<string, number>>;
  [key: `ObolEqMAP_${CharIndex}`]: EscapedJson<Record<numberQ, unknown>>;
  [key: `ObolEqO0_${CharIndex}`]: (
    | ItemCode
    | "Blank"
    | "ObolLocked1"
    | "ObolLocked2"
    | "ObolLocked3"
    | "ObolLocked4"
  )[];
  [key: `ObolInvMAP_${CharIndex}`]: EscapedJson<{ "0": ObolInvMap }>;
  [key: `OptL_${CharIndex}`]: number[];
  [key: `OptL2_${CharIndex}`]: DataArray<number | string>[];
  [key: `PlayerStuff_${CharIndex}`]: EscapedJson<number[]>;
  [key: `PldTraps_${CharIndex}`]: EscapedJson<number[][]>;
  [key: `POu_${CharIndex}`]: EscapedJson<number[]>;
  [key: `Prayers_${CharIndex}`]: EscapedJson<number[]>;
  [key: `PTimeAway_${CharIndex}`]: number;
  [key: `PVFishingSpotIndex_${CharIndex}`]: number;
  [key: `PVFishingToolkit_${CharIndex}`]: [number, number];
  [key: `PVGender_${CharIndex}`]: number;
  [key: `PVInstaRevives_${CharIndex}`]: number;
  [key: `PVMinigamePlays_${CharIndex}`]: number;
  [key: `PVStatList_${CharIndex}`]: number[];
  [key: `PVtStarSign_${CharIndex}`]: string;
  [key: `QuestComplete_${CharIndex}`]: EscapedJson<Record<string, -1 | 0 | 1>>;
  [key: `QuestHm_${CharIndex}`]: DataArray<number | string>[];
  [key: `QuestStatus_${CharIndex}`]: EscapedJson<
    Record<string, (number | numberQ)[]>
  >;
  [key: `RespTime_${CharIndex}`]: number;
  [key: `SL_${CharIndex}`]: EscapedJson<Record<numberQ, number>>;
  [key: `SLpre_${CharIndex}`]: EscapedJson<Record<numberQ, number>>;
  [key: `SM_${CharIndex}`]: EscapedJson<Record<numberQ, number>>;
  [key: `StatueLevels_${CharIndex}`]: EscapedJson<[number, number][]>;
}

export interface IdleonToolboxJson {
  data: DataJson;
  charNames: string[];
  companion: {
    e: string;
    l: string[];
    o: number[];
    t: number;
    x: number;
    y: number;
  };
  guildData: {
    stats: [
      number[],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
      [number, number, number],
    ];
    members: {
      a: string;
      b: string;
      c: number;
      d: number;
      e: number;
      f: number;
      g: number;
    }[];
    points: number;
  };
  serverVars: {
    "0TwitchLive": number;
    "1LavaChat": string;
    A_divArc: string;
    A_empoExpon: number;
    abc: number;
    AncientArtiPCT: number;
    AncientOddPerIsland: number;
    ArcadeBonuses: number[];
    ArcadeRotation: string;
    AutoLoot: number;
    ChipRepo: number[];
    CompBatch: number;
    DampenServerPlayerMvmt: number;
    DivCostAfter3: number;
    Dungeon_CardMulti: number;
    Dungeon_CredMulti: number;
    Dungeon_FlurboMulti: number;
    Dungeon1_time: number;
    EventActive: "No";
    EventTimerBypass: number;
    EventVal1: number;
    GameVERSION: number;
    GamingFertCostExpA: number;
    GemBundleOffer: string;
    GemBundleOffer2: string;
    GemBundleOffer3: string;
    GemPopupBundle: string;
    GemPopupLvREQ: number;
    GuildRank: string[];
    HappyHours: number[];
    KillroySwap: number;
    LavaHacks: number;
    LetIOSin: number;
    LtdShopNum: number;
    NewStuffButton: number;
    OfferBunC: number;
    OGtrophy: number;
    PCpurchases: number;
    PristineCharm: number;
    RandEvntHr: number;
    RandEvntWorld: number;
    RandomTest: number;
    RateAgain: number;
    RemoveVials: number;
    StarterBundleReset: number;
    SteamEvent: number;
    Test: string;
    TestData: string;
    TomeOn: number;
    TomePct: number[];
    voteCategories: number[];
    votePercent: number[];
    WhateverKeyYouWant: string;
    worldCounts: number[];
    WorldSelRNG: number;
  };
  accountCreateTime: number;
  lastUpdated: number;
}
