import amarokHinds from "../img/Amarok_Hinds.png";
import banditoPantaloon from "../img/Bandito_Pantaloon.png";
import bleachedDesignerWodePatchPants from "../img/Bleached_Designer_Wode_Patch_Pants.png";
import chizoarScaledLeggings from "../img/Chizoar_Scaled_Leggings.png";
import copperPlatelegs from "../img/Copper_Platelegs.png";
import dementiaShins from "../img/Dementia_Shins.png";
import diabolicalTrimedLegGuards from "../img/Diabolical_Trimed_Leg_Guards.png";
import dirtyCoalMinerBaggySootPants from "../img/Dirty_Coal_Miner_Baggy_Soot_Pants.png";
import efauntHipilium from "../img/Efaunt_Hipilium.png";
import fishingOveralls from "../img/Fishing_Overalls.png";
import giveUpOnLifePants from "../img/Give_Up_On_Life_Pants.png";
import goldPlatelegs from "../img/Gold_Platelegs.png";
import ironPlatelegs from "../img/Iron_Platelegs.png";
import lustreScales from "../img/Lustre_Scales.png";
import magmaCoreBattleskirt from "../img/Magma_Core_Battleskirt.png";
import marbiglassLegplates from "../img/Marbiglass_Legplates.png";
import platinumShins from "../img/Platinum_Shins.png";
import spikedLeggingsOfTheDivine from "../img/Spiked_Leggings_of_the_Divine.png";
import tattersOfTheGods from "../img/Tatters_of_the_Gods.png";
import tornJeans from "../img/Torn_Jeans.png";
import trimmedRunePlatelegs from "../img/Trimmed_Rune_Platelegs.png";
import twistedScales from "../img/Twisted_Scales.png";
import voidImperiumShardshins from "../img/Void_Imperium_Shardshins.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("pants");

const pants = [
  i("Torn Jeans", tornJeans),
  i("Give Up On Life Pants", giveUpOnLifePants),
  i("Copper Platelegs", copperPlatelegs),
  i("Iron Platelegs", ironPlatelegs),
  i("Dirty Coal Miner Baggy Soot Pants", dirtyCoalMinerBaggySootPants),
  i("Bleached Designer Wode Patch Pants", bleachedDesignerWodePatchPants),
  i("Fishing Overalls", fishingOveralls),
  i("Bandito Pantaloon", banditoPantaloon),
  i("Gold Platelegs", goldPlatelegs),
  i("Amarok Hinds", amarokHinds),
  i("Platinum Shins", platinumShins),
  i("Dementia Shins", dementiaShins),
  i("Efaunt Hipilium", efauntHipilium),
  i("Trimmed Rune Platelegs", trimmedRunePlatelegs),
  i("Void Imperium Shardshins", voidImperiumShardshins),
  i("Chizoar Scaled Leggings", chizoarScaledLeggings),
  i("Lustre Scales", lustreScales),
  i("Diabolical Trimed Leg Guards", diabolicalTrimedLegGuards),
  i("Twisted Scales", twistedScales),
  i("Magma Core Battleskirt", magmaCoreBattleskirt),
  i("Spiked Leggings of the Divine", spikedLeggingsOfTheDivine),
  i("Marbiglass Legplates", marbiglassLegplates),
  i("Tatters of the Gods", tattersOfTheGods),
];
export default pants;
