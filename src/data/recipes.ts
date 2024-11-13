import beginnerRecipe from "../img/Beginner_Recipe.png";
import noviceRecipe from "../img/Novice_Recipe.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("anvil recipes");

export const recipeItems = [
  i("Copper Band (Beginner Recipe)", beginnerRecipe),
  i("Iron Boots (Beginner Recipe)", beginnerRecipe),
  i("Steel Band (Beginner Recipe)", beginnerRecipe),
  i("Goo Galoshes (Beginner Recipe)", beginnerRecipe),
  i("Fur Shirt (Beginner Recipe)", beginnerRecipe),
  i("Double Goopi (Beginner Recipe)", beginnerRecipe),
  i("Bleached Designer Wode Patch Pants (Beginner Recipe)", beginnerRecipe),
  i("Serrated Rex Ring (Beginner Recipe)", beginnerRecipe),
  i("Fishing Overalls (Beginner Recipe)", beginnerRecipe),
  i("Bandito Pantaloon (Beginner Recipe)", beginnerRecipe),

  i("Defenders Dignity (Novice Recipe)", noviceRecipe),
  i("Strung Bludgeon (Novice Recipe)", noviceRecipe),
  i("Polished Bludgeon (Novice Recipe)", noviceRecipe),
  i("Googley Eyes (Novice Recipe)", noviceRecipe),
  i("Dootjat Eye (Novice Recipe)", noviceRecipe),
  i("Protectors Pride (Novice Recipe)", noviceRecipe),
  i("Skullfish Pendant (Novice Recipe)", noviceRecipe),
  i("Star Talent Reset Potion (Novice Recipe)", noviceRecipe),
];
