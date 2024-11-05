import anvilTab2 from "../img/Anvil_Tab_2.png";
import anvilTab3 from "../img/Anvil_Tab_3.png";
import anvilTab4 from "../img/Anvil_Tab_4.png";
import anvilTab5 from "../img/Anvil_Tab_5.png";
import anvilTab6 from "../img/Anvil_Tab_6.png";
import averageChoppinPouch from "../img/Average_Choppin_Pouch.png";
import averageFishPouch from "../img/Average_Fish_Pouch.png";
import averageFoodPouch from "../img/Average_Food_Pouch.png";
import averageMaterialsPouch from "../img/Average_Material_Pouch.png";
import averageMiningPouch from "../img/Average_Mining_Pouch.png";
import blunderbag from "../img/Blunderbag.png";
import crampedChoppinPouch from "../img/Cramped_Choppin_Pouch.png";
import crampedFishPouch from "../img/Cramped_Fish_Pouch.png";
import crampedFoodPouch from "../img/Cramped_Food_Pouch.png";
import crampedMaterialsPouch from "../img/Cramped_Material_Pouch.png";
import crampedMiningPouch from "../img/Cramped_Mining_Pouch.png";
import inventoryBagA from "../img/Inventory_Bag_A.png";
import inventoryBagB from "../img/Inventory_Bag_B.png";
import inventoryBagC from "../img/Inventory_Bag_C.png";
import inventoryBagD from "../img/Inventory_Bag_D.png";
import inventoryBagE from "../img/Inventory_Bag_E.png";
import inventoryBagF from "../img/Inventory_Bag_F.png";
import inventoryBagG from "../img/Inventory_Bag_G.png";
import inventoryBagH from "../img/Inventory_Bag_H.png";
import miniMaterialsPouch from "../img/Mini_Materials_Pouch.png";
import miniatureChoppinPouch from "../img/Miniature_Choppin_Pouch.png";
import miniatureMiningPouch from "../img/Miniature_Mining_Pouch.png";
import minisculeFoodPouch from "../img/Miniscule_Food_Pouch.png";
import smallChoppinPouch from "../img/Small_Choppin_Pouch.png";
import smallFishPouch from "../img/Small_Fish_Pouch.png";
import smallFoodPouch from "../img/Small_Food_Pouch.png";
import smallMaterialsPouch from "../img/Small_Material_Pouch.png";
import smallMiningPouch from "../img/Small_Mining_Pouch.png";
import snakeskinventoryBag from "../img/Snakeskinventory_Bag.png";
import totallyNormalBag from "../img/Totally_Normal_and_not_fake_Bag.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("unlock");

const unlocks = [
  i("Anvil Tab 2", anvilTab2),
  i("Anvil Tab 3", anvilTab3),
  i("Anvil Tab 4", anvilTab4),
  i("Anvil Tab 5", anvilTab5),
  i("Anvil Tab 6", anvilTab6),

  i("Inventory Bag A", inventoryBagA),
  i("Inventory Bag B", inventoryBagB),
  i("Inventory Bag C", inventoryBagC),
  i("Inventory Bag D", inventoryBagD),
  i("Inventory Bag E", inventoryBagE),
  i("Inventory Bag F", inventoryBagF),
  i("Inventory Bag G", inventoryBagG),
  i("Inventory Bag H", inventoryBagH),
  i("Snakeskinventory Bag", snakeskinventoryBag),
  i("Totally Normal and not fake Bag", totallyNormalBag),
  i("Blunderbag", blunderbag),

  i("Mini Materials Pouch", miniMaterialsPouch),
  i("Cramped Material Pouch", crampedMaterialsPouch),
  i("Small Material Pouch", smallMaterialsPouch),
  i("Average Material Pouch", averageMaterialsPouch),

  i("Miniscule Food Pouch", minisculeFoodPouch),
  i("Cramped Food Pouch", crampedFoodPouch),
  i("Small Food Pouch", smallFoodPouch),
  i("Average Food Pouch", averageFoodPouch),

  i("Miniature Choppin Pouch", miniatureChoppinPouch),
  i("Cramped Choppin Pouch", crampedChoppinPouch),
  i("Small Choppin Pouch", smallChoppinPouch),
  i("Average Choppin Pouch", averageChoppinPouch),

  i("Miniature Mining Pouch", miniatureMiningPouch),
  i("Cramped Mining Pouch", crampedMiningPouch),
  i("Small Mining Pouch", smallMiningPouch),
  i("Average Mining Pouch", averageMiningPouch),

  i("Cramped Fish Pouch", crampedFishPouch),
  i("Small Fish Pouch", smallFishPouch),
  i("Average Fish Pouch", averageFishPouch),
];
export default unlocks;
