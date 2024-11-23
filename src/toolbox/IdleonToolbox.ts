import { Percentage } from "../flavours";
import {
  AccountName,
  AFKTarget,
  BubbleCode,
  BundleCode,
  CardCode,
  CharIndex,
  ClassCode,
  CogCode,
  CritterCode,
  FishingAdornmentCode,
  FishingLureCode,
  InvBagCode,
  InvStorageCode,
  ItemCode,
  MapCode,
  MillisecondTimestamp,
  MonsterCode,
  NPCCode,
  QuestCode,
  Seconds,
  StarSign,
  UnixTimestamp,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type EscapedJson<T> = string;

export type numberQ = `${number}`;

export interface TimeAway {
  Arcade: UnixTimestamp;
  GlobalTime: UnixTimestamp;
  Player: UnixTimestamp;
  Sailing: UnixTimestamp;
  Construction: UnixTimestamp;
  Printer: UnixTimestamp;
  Cauldron: UnixTimestamp;
  Cooking: UnixTimestamp;
  DailyRewards: UnixTimestamp;
  BookLib: UnixTimestamp;
  Pets: UnixTimestamp;
  ShopRestock: UnixTimestamp;
  PostOfficeRefresh: UnixTimestamp;
  Forge: UnixTimestamp;
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

export interface EnhanceInfo {
  Weapon_Power?: number;
  Speed?: number;
  Reach?: number;
  Power?: number;
  Defence?: number;
  STR?: number;
  AGI?: number;
  WIS?: number;
  LUK?: number;
  UQ1txt?: number;
  UQ1val?: number;
  UQ2val?: number;
  UQ2txt?: number;
}
export type UpgradeInfo = EnhanceInfo & { Upgrade_Slots_Left: number };

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

export type PrinterInfo = [
  number,
  number,
  number,
  number,
  number,

  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
  ItemCode | "Blank",
  number,
];

export type CYKeysAll = [
  forestVillaKey: number,
  efauntsTombKey: number,
  chizoarsCavernKey: number,
  trollsEnclaveKey: number,
  kruksVolcanoKey: number,
  number,
  number,
  number,
];

export interface BasicCogInfo {
  a?: number; // + Build Rate/HR
  b?: number; // + Construct EXP/HR
  c?: number; // + Flaggy Rate/HR
}
export interface BoostCogInfo {
  h: "adjacent" | "diagonal";
  d?: Percentage; // +% Bonus Construct EXP
  e?: Percentage; // +% Build Rate (to cogs)
  g?: Percentage; // +% Flaggy Rate (to cogs)
}
export type CogInfo = BasicCogInfo | (BasicCogInfo & BoostCogInfo);

export type ColosseumHighScores = [
  number,
  sandstone: number,
  dewdrop: number,
  chillsnap: number,
  astro: number,
  molten: number,
  whimsical: number,
  number,
];

export type MiniGameHighScores = [
  chopping: number,
  fishing: number,
  catching: number,
  mining: number,
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
];

export type ShrineInfo = [
  map: MapCode,
  number,
  number,
  level: number,
  progress: number,
  number,
];

export type TrapInfo = [
  map: MapCode,
  x: number,
  y: number,
  critter: CritterCode,
  number,
  number,
  duration: Seconds,
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
  Cards0: EscapedJson<Record<CardCode, number>>;
  Cards1: EscapedJson<string[]>;
  CauldronBubbles: EscapedJson<(BubbleCode | 0)[]>;
  CauldronInfo: DataArray<number>[];
  CauldronJobs0: EscapedJson<number[]>;
  CauldronJobs1: EscapedJson<number[]>;
  CauldronP2W: EscapedJson<number[][]>;
  CauldUpgLVs: number[];
  CauldUpgXPs: [number];
  ChestOrder: (ItemCode | "Blank" | "LockedInvSpace")[];
  ChestQuantity: number[];
  CloudsaveTimer: number;
  CMm: EscapedJson<Record<numberQ, EnhanceInfo>>;
  CMmLENGTH: number;
  CogM: EscapedJson<Record<numberQ, CogInfo>>;
  CogO: EscapedJson<("Blank" | CogCode | `Player_${string}`)[]>;
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
  CYKeysAll: CYKeysAll;
  CYNPC: number[];
  CYObolFragments: number;
  CYSilverPens: number;
  CYTalentPoints: number[];
  CYWorldTeleports: number;
  Divinity: number[];
  DoOnceREAL: number;
  Dream: number[];
  DungUpg: EscapedJson<number[][]>;
  FamValColosseumHighscores: ColosseumHighScores;
  FamValFishingToolkitOwned: [
    DataArray<FishingLureCode>,
    DataArray<FishingAdornmentCode>,
  ];
  FamValMinigameHiscores: MiniGameHighScores;
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
  InvStorageUsed: EscapedJson<Record<InvStorageCode, numberQ>>;
  KRbest: EscapedJson<Record<MonsterCode, number>>;
  Lab: EscapedJson<number[][]>;
  Meals: EscapedJson<number[][]>;
  MoneyBANK: number;
  Ninja: EscapedJson<unknown>;
  ObolEqMAPz1: EscapedJson<Record<numberQ, unknown>>;
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
  PostOfficeInfo0: DataArray<string | number>[];
  PostOfficeInfo1: DataArray<number>[];
  PostOfficeInfo2: DataArray<string | number>[];
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
  Shrine: EscapedJson<ShrineInfo[]>;
  SSprog: EscapedJson<[string, number][]>;
  StampLv: DataArray<number>[];
  StampLvM: [StampLevel, StampLevel, StampLevel];
  StarSg: EscapedJson<Record<StarSign, 1>>;
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

  [key: `AFKtarget_${CharIndex}`]: AFKTarget;
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
  [key: `CurrentMap_${CharIndex}`]: MapCode;
  [key: `EMm0_${CharIndex}`]: EscapedJson<Record<numberQ, UpgradeInfo>>;
  [key: `EMm1_${CharIndex}`]: EscapedJson<Record<numberQ, UpgradeInfo>>;
  [key: `EMmLENGTH0_${CharIndex}`]: number;
  [key: `EMmLENGTH1_${CharIndex}`]: number;
  [key: `EquipOrder_${CharIndex}`]: DataArray<ItemCode | "Blank">[];
  [key: `EquipQTY_${CharIndex}`]: DataArray<number>[];
  [key: `Exp0_${CharIndex}`]: number[];
  [key: `ExpReq0_${CharIndex}`]: number[];
  [key: `FoodCD_${CharIndex}`]: number[];
  [key: `FoodSlO_${CharIndex}`]: number;
  [key: `IMm_${CharIndex}`]: EscapedJson<Record<numberQ, UpgradeInfo>>;
  [key: `IMmLENGTH_${CharIndex}`]: number;
  [key: `InvBagsUsed_${CharIndex}`]: EscapedJson<Record<InvBagCode, unknown>>;
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
  [key: `NPCdialogue_${CharIndex}`]: EscapedJson<Record<NPCCode, number>>;
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
  [key: `PldTraps_${CharIndex}`]: EscapedJson<TrapInfo[]>;
  [key: `POu_${CharIndex}`]: EscapedJson<number[]>;
  [key: `Prayers_${CharIndex}`]: EscapedJson<number[]>;
  [key: `PTimeAway_${CharIndex}`]: UnixTimestamp;
  [key: `PVFishingSpotIndex_${CharIndex}`]: number;
  [key: `PVFishingToolkit_${CharIndex}`]: [
    FishingLureCode,
    FishingAdornmentCode,
  ];
  [key: `PVGender_${CharIndex}`]: number;
  [key: `PVInstaRevives_${CharIndex}`]: number;
  [key: `PVMinigamePlays_${CharIndex}`]: number;
  [key: `PVStatList_${CharIndex}`]: [
    strength: number,
    agility: number,
    wisdom: number,
    luck: number,
    primaryLevel: number,
  ];
  [key: `PVtStarSign_${CharIndex}`]: string;
  [key: `QuestComplete_${CharIndex}`]: EscapedJson<
    Record<QuestCode, -1 | 0 | 1>
  >;
  [key: `QuestHm_${CharIndex}`]: DataArray<number | string>[];
  [key: `QuestStatus_${CharIndex}`]: EscapedJson<
    Record<QuestCode, (number | numberQ)[]>
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
    t: MillisecondTimestamp;
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
      a: AccountName;
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
    votePercent: Percentage[];
    WhateverKeyYouWant: string;
    worldCounts: number[];
    WorldSelRNG: number;
  };
  accountCreateTime: MillisecondTimestamp;
  lastUpdated: MillisecondTimestamp;
}
