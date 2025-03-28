import { getItemMaker } from "./tools";

const i = getItemMaker("materials");
export const materials = [
  i("Thread", "CraftMat1"),
  i("Cue Tape", "CraftMat3"),
  i("Trusty Nails", "CraftMat5"),
  i("Boring Brick", "CraftMat6"),
  i("Chain Link", "CraftMat7"),
  i("Leather Hide", "CraftMat9"),
  i("Pinion Spur", "CraftMat8"),
  i("Lugi Bracket", "CraftMat10"),
  i("Purple Screw", "CraftMat11"),
  i("Thingymabob", "CraftMat12"),
  i("Tangled Cords", "CraftMat13"),
  i("PVC Pipe", "CraftMat14"),

  i("Distilled Water", "PureWater"),
  i("Dense Water", "PureWater2"),
];

export const materialProduction = [
  "Thread",
  "Trusty Nails",
  "Boring Brick",
  "Chain Link",
  "Leather Hide",
  "Pinion Spur",
  "Lugi Bracket",
  "Purple Screw",
  "Thingymabob",
  "Tangled Cords",
  "PVC Pipe",

  "Distilled Water",
  "Dense Water",
];
