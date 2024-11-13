import carrotHorror from "../img/Carrot_Horror.png";
import cedarPendant from "../img/Cedar_Pendant.png";
import chaoticAmarokPendant from "../img/Chaotic_Amarok_Pendant.png";
import chizoarsBlankie from "../img/Chizoars_Blankie.png";
import chizoarsCausticScarf from "../img/Chizoars_Caustic_Scarf.png";
import crescentMoonPendant from "../img/Crescent_Moon_Pendant.png";
import deathbloomFlowerPendant from "../img/Deathbloom_Flower_Pendant.png";
import deathlyClusterPendant from "../img/Deathly_Cluster_Pendant.png";
import fishheadPendant from "../img/Fishhead_Pendant.png";
import fuscismatia from "../img/Fuscismatia.png";
import hallowedTailPendant from "../img/Hallowed_Tail_Pendant.png";
import littleWoodenKatana from "../img/Little_Wooden_Katana.png";
import persephonesBouquet from "../img/Persephones_Bouquet.png";
import polishedBludgeon from "../img/Polished_Bludgeon.png";
import skullfishPendant from "../img/Skullfish_Pendant.png";
import sleekShank from "../img/Sleek_Shank.png";
import strungBludgeon from "../img/Strung_Bludgeon.png";
import strungToothOfTheDivine from "../img/Strung_Tooth_of_the_Divine.png";
import tarantulight from "../img/Tarantulight.png";
import theDivineScarf from "../img/The_Divine_Scarf.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("pendants");

export const pendants = [
  i("Little Wooden Katana", littleWoodenKatana),
  i("Sleek Shank", sleekShank, "EquipmentPendant10"),
  i("Crescent Moon Pendant", crescentMoonPendant),
  i("Deathbloom Flower Pendant", deathbloomFlowerPendant),
  i("Carrot Horror", carrotHorror, "EquipmentPendant11"),
  i("Strung Bludgeon", strungBludgeon),
  i("Tarantulight", tarantulight, "EquipmentPendant12"),
  i("Cedar Pendant", cedarPendant, "EquipmentPendant19"),
  i("Chaotic Amarok Pendant", chaoticAmarokPendant),
  i("Polished Bludgeon", polishedBludgeon),
  i("Fishhead Pendant", fishheadPendant),
  i("Skullfish Pendant", skullfishPendant),
  i("Fuscismatia", fuscismatia),
  i("Deathly Cluster Pendant", deathlyClusterPendant),
  i("Chizoars Blankie", chizoarsBlankie),
  i("Hallowed Tail Pendant", hallowedTailPendant),
  i("Chizoars Caustic Scarf", chizoarsCausticScarf),
  i("Persephones Bouquet", persephonesBouquet),
  i("Strung Tooth of the Divine", strungToothOfTheDivine),
  i("The Divine Scarf", theDivineScarf),
];
