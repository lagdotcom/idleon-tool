import furShirt from "../img/Fur_Shirt.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("shirt");

const shirts = [i("Fur Shirt", furShirt)];
export default shirts;
