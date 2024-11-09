import amarokPaws from "../img/Amarok_Paws.png";
import anglerBoots from "../img/Angler_Boots.png";
import banditoBoots from "../img/Bandito_Boots.png";
import cavernTrekkers from "../img/Cavern_Trekkers.png";
import chefHatShoes from "../img/Chef_Hat_Shoes.png";
import chizoarWalkers from "../img/Chizoar_Walkers.png";
import cookingClogs from "../img/Cooking_Clogs.png";
import copperBoots from "../img/Copper_Boots.png";
import deepSeaGaloshes from "../img/Deep_Sea_Galoshes.png";
import dementiaBoots from "../img/Dementia_Boots.png";
import deviousSlippersOfTheDivine from "../img/Devious_Slippers_of_the_Divine.png";
import diabolicalToeTips from "../img/Diabolical_Toe_Tips.png";
import divvySlippers from "../img/Divvy_Slippers.png";
import dripOfTheGods from "../img/Drip_of_the_Gods.png";
import efauntsBrokenAnkles from "../img/Efaunts_Broken_Ankles.png";
import fiberousFootings from "../img/Fiberous_Footings.png";
import flipFlops from "../img/Flip_Flops.png";
import goldBoots from "../img/Gold_Boots.png";
import gooGaloshes from "../img/Goo_Galoshes.png";
import ironBoots from "../img/Iron_Boots.png";
import laboratoryScrubs from "../img/Laboratory_Scrubs.png";
import loggerHeels from "../img/Logger_Heels.png";
import lustreShieldshoe from "../img/Lustre_Shieldshoe.png";
import magmaCoreLavarunners from "../img/Magma_Core_Lavarunners.png";
import marbiglassSoles from "../img/Marbiglass_Soles.png";
import platinumBoots from "../img/Platinum_Boots.png";
import roughRockers from "../img/Rough_Rockers.png";
import sheekScrubs from "../img/Sheek_Scrubs.png";
import solesOfTheTroll from "../img/Soles_of_the_Troll.png";
import spaggyWesterados from "../img/Spaggy_Westerados.png";
import voidImperiumKicks from "../img/Void_Imperium_Kicks.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("shoes");

const shoes = [
  i("Flip Flops", flipFlops),
  i("Copper Boots", copperBoots),
  i("Goo Galoshes", gooGaloshes),
  i("Iron Boots", ironBoots),
  i("Cavern Trekkers", cavernTrekkers),
  i("Logger Heels", loggerHeels),
  i("Angler Boots", anglerBoots),
  i("Bandito Boots", banditoBoots),
  i("Gold Boots", goldBoots),
  i("Amarok Paws", amarokPaws),
  i("Platinum Boots", platinumBoots),
  i("Dementia Boots", dementiaBoots),
  i("Efaunts Broken Ankles", efauntsBrokenAnkles),
  i("Void Imperium Kicks", voidImperiumKicks),
  i("Chizoar Walkers", chizoarWalkers),
  i("Cooking Clogs", cookingClogs),
  i("Laboratory Scrubs", laboratoryScrubs),
  i("Spaggy Westerados", spaggyWesterados),
  i("Lustre Shieldshoe", lustreShieldshoe),
  i("Fiberous Footings", fiberousFootings),
  i("Deep Sea Galoshes", deepSeaGaloshes),
  i("Rough Rockers", roughRockers),
  i("Chef Hat Shoes", chefHatShoes),
  i("Sheek Scrubs", sheekScrubs),
  i("Diabolical Toe Tips", diabolicalToeTips),
  i("Soles of the Troll", solesOfTheTroll),
  i("Divvy Slippers", divvySlippers),
  i("Magma Core Lavarunners", magmaCoreLavarunners),
  i("Devious Slippers of the Divine", deviousSlippersOfTheDivine),
  i("Marbiglass Soles", marbiglassSoles),
  i("Drip of the Gods", dripOfTheGods),
];
export default shoes;
