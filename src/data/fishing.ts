import anglerOfTheIliunne from "../img/Angler_of_the_Iliunne.png";
import basicBobber from "../img/Basic_Bobber.png";
import bloach from "../img/Bloach.png";
import caulifish from "../img/Caulifish.png";
import copperFishRod from "../img/Copper_Fish_Rod.png";
import copperTwine from "../img/Copper_Twine.png";
import crashBox from "../img/Crash_Box.png";
import dementiaRodForFishing from "../img/Dementia_Rod_for_Fishing.png";
import dreadloRod from "../img/Dreadlo_Rod.png";
import dualhookProngs from "../img/Dualhook_Prongs.png";
import dynamite from "../img/Dynamite.png";
import electricalWiring from "../img/Electrical_Wiring.png";
import equinoxFish from "../img/Equinox_Fish.png";
import fatAlbert from "../img/Fat_Albert.png";
import funFlags from "../img/Fun_Flags.png";
import goldFishingRod from "../img/Gold_Fishing_Rod.png";
import goldTwine from "../img/Gold_Twine.png";
import goldfish from "../img/Goldfish.png";
import hermitCan from "../img/Hermit_Can.png";
import icefish from "../img/Icefish.png";
import ironFishingRod from "../img/Iron_Fishing_Rod.png";
import ironHook from "../img/Iron_Hook.png";
import itsABoyCelebration from "../img/Its_a_Boy_Celebration.png";
import itsAGirlCelebration from "../img/Its_a_Girl_Celebration.png";
import itsAlrightCelebration from "../img/Its_Alright_Celebration.png";
import jellyfish from "../img/Jellyfish.png";
import jumboShrimp from "../img/Jumbo_Shrimp.png";
import kraken from "../img/Kraken.png";
import largeFishingSpot from "../img/Large_Fishing_Spot.gif";
import leafyVines from "../img/Leafy_Vines.png";
import literalElephant from "../img/Literal_Elephant.png";
import lustreRod from "../img/Lustre_Rod.png";
import mantaRay from "../img/Manta_Ray.png";
import marbiglassRod from "../img/Marbiglass_Rod.png";
import masslessUnitForPhysicsQuestions from "../img/Massless_Unit_for_Physics_Questions.png";
import mediumFishingSpot from "../img/Medium_Fishing_Spot.gif";
import needledrop from "../img/Needledrop.png";
import notDynamite from "../img/Not_Dynamite.png";
import onePoundOfFeathers from "../img/One_Pound_of_Feathers.png";
import onePoundOfSteel from "../img/One_Pound_of_Steel.png";
import platFishingRod from "../img/Plat_Fishing_Rod.png";
import platinumTwine from "../img/Platinum_Twine.png";
import sandShark from "../img/Sand_Shark.png";
import scripticusSpoons from "../img/Scripticus_Spoons.png";
import shellfish from "../img/Shellfish.png";
import silverTwine from "../img/Silver_Twine.png";
import skelefish from "../img/Skelefish.png";
import smallFishingSpot from "../img/Small_Fishing_Spot.gif";
import starfireRod from "../img/Starfire_Rod.png";
import tripleThreat from "../img/Triple_Threat.png";
import valvePatentedCircleThingies from "../img/Valve_Patented_Circle_Thingies.png";
import voidImperiumRod from "../img/Void_Imperium_Rod.png";
import wienerLinks from "../img/Wiener_Links.png";
import wormieWeight from "../img/Wormie_Weight.png";
import zeusGonFishin from "../img/Zeus_Gon_Fishin.png";
import { DropTable9 } from "./tables";
import {
  getDropperMaker,
  getItemMaker,
  mkDrop as d,
  mkTableDrop as t,
} from "./tools";

const f = getItemMaker("fish");
export const fish = [
  f("Goldfish", goldfish, "Fish1"),
  f("Hermit Can", hermitCan, "Fish2"),
  f("Jellyfish", jellyfish, "Fish3"),
  f("Bloach", bloach, "Fish4"),
  f("Skelefish", skelefish),
  f("Sand Shark", sandShark),
  f("Manta Ray", mantaRay),
  f("Kraken", kraken),
  f("Icefish", icefish),
  f("Shellfish", shellfish),
  f("Jumbo Shrimp", jumboShrimp),
  f("Caulifish", caulifish),
  f("Equinox Fish", equinoxFish),
];

const rod = getItemMaker("fishing rods");
export const fishingRods = [
  rod("Copper Fish Rod", copperFishRod, "FishingRod2"),
  rod("Iron Fishing Rod", ironFishingRod),
  rod("Gold Fishing Rod", goldFishingRod),
  rod("Plat Fishing Rod", platFishingRod),
  rod("Dementia Rod for Fishing", dementiaRodForFishing),
  rod("Void Imperium Rod", voidImperiumRod),
  rod("Lustre Rod", lustreRod),
  rod("Starfire Rod", starfireRod),
  rod("Dreadlo Rod", dreadloRod),
  rod("Marbiglass Rod", marbiglassRod),
  rod("Angler of the Iliunne", anglerOfTheIliunne),
];

const accessory = getItemMaker("fishing accessories");
export const fishingAccessories = [
  accessory("Gold Twine", goldTwine),
  accessory("Platinum Twine", platinumTwine),
  accessory("Scripticus Spoons", scripticusSpoons),
  accessory("Its a Boy Celebration", itsABoyCelebration),
  accessory("Its a Girl Celebration", itsAGirlCelebration),
  accessory("Its Alright Celebration", itsAlrightCelebration),
  accessory("Iron Hook", ironHook),
  accessory("Basic Bobber", basicBobber),
  accessory("Silver Twine", silverTwine),
  accessory("Fun Flags", funFlags),
  accessory("Electrical Wiring", electricalWiring),
  accessory("Wiener Links", wienerLinks),
  accessory("Zeus Gon Fishin", zeusGonFishin),
  accessory("Dualhook Prongs", dualhookProngs),
  accessory("One Pound of Feathers", onePoundOfFeathers),
  accessory(
    "Massless Unit for Physics Questions",
    masslessUnitForPhysicsQuestions,
  ),
  accessory("Literal Elephant", literalElephant),
  accessory("Triple Threat", tripleThreat),
  accessory("Crash Box", crashBox),
  accessory("Fat Albert", fatAlbert),
  accessory("Valve Patented Circle Thingies", valvePatentedCircleThingies),
  accessory("Copper Twine", copperTwine),
  accessory("Wormie Weight", wormieWeight),
  accessory("Leafy Vines", leafyVines),
  accessory("One Pound of Steel", onePoundOfSteel),
  accessory("Needledrop", needledrop),
  accessory("Dynamite", dynamite),
  accessory("Not Dynamite", notDynamite),
];

const spot = getDropperMaker("fishing spot");
export const fishingSpots = [
  spot(
    "Small Fishing Spot",
    smallFishingSpot,
    "Salty Shores / Faraway Piers",
    d("Goldfish", NaN),
    d("Hermit Can", NaN),
    d("Jellyfish", NaN),
    d("Bloach", NaN),
    d("Goldfish Card", 500),
    d("Hermit Can Card", 556),
    d("Jellyfish Card", 625),
    d("Bloach Card", 714),
    t(DropTable9, 83.3),
  ),
  spot(
    "Medium Fishing Spot",
    mediumFishingSpot,
    "Deepwater Docks",
    d("Skelefish", NaN),
    d("Sand Shark", NaN),
    d("Manta Ray", NaN),
    d("Kraken", NaN),
    d("Skelefish Card", 1000),
    d("Sand Shark Card", 2500),
    d("Manta Ray Card", 10000),
    d("Kraken Card", 40000),
    t(DropTable9, 83.3),
  ),
  spot(
    "Large Fishing Spot",
    largeFishingSpot,
    "Seasalt Island",
    d("Icefish", NaN),
    d("Shellfish", NaN),
    d("Jumbo Shrimp", NaN),
    d("Caulifish", NaN),
    d("Icefish Card", 1000),
    d("Shellfish Card", 2500),
    d("Jumbo Shrimp Card", 10000),
    d("Caulifish Card", 40000),
    t(DropTable9, 83.3),
  ),
];
