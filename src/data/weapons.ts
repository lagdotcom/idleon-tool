import bandageWraps from "../img/Bandage_Wraps.png";
import birchLongbow from "../img/Birch_Longbow.png";
import blackholeBow from "../img/Blackhole_Bow.png";
import blizzardBow from "../img/Blizzard_Bow.png";
import boxingGloves from "../img/Boxing_Gloves.png";
import carrotLauncher from "../img/Carrot_Launcher.png";
import cattleCoreSoothsayerStaff from "../img/Cattle_Core_Soothsayer_Staff.png";
import crackledSkullDestroyer from "../img/Crackled_Skull_Destroyer.png";
import crowsNest from "../img/Crows_Nest.png";
import deuscythe from "../img/Deuscythe.png";
import diabolicalContinuit from "../img/Diabolical_Continuit.png";
import diabolicalFleshRipper from "../img/Diabolical_Flesh_Ripper.png";
import diabolicalGauntlet from "../img/Diabolical_Gauntlet.png";
import diabolicalOpticule from "../img/Diabolical_Opticule.png";
import doublestringGodshooter from "../img/Doublestring_Godshooter.png";
import eclecticOrdeal from "../img/Eclectic_Ordeal.png";
import elegantSpear from "../img/Elegant_Spear.png";
import enforcedSlasher from "../img/Enforced_Slasher.png";
import gnarledWand from "../img/Gnarled_Wand.png";
import greyGatsby from "../img/Grey_Gatsby.png";
import knuckleSabers from "../img/Knuckle_Sabers.png";
import magmaMaul from "../img/Magma_Maul.png";
import magnifiqueGodcaster from "../img/Magnifique_Godcaster.png";
import massiveGodbreaker from "../img/Massive_Godbreaker.png";
import mittensOfTheGods from "../img/Mittens_of_the_Gods.png";
import moltenCoreKnucklers from "../img/Molten_Core_Knucklers.png";
import pentastudSlapper from "../img/Pentastud_Slapper.png";
import pharaohBow from "../img/Pharaoh_Bow.png";
import pristineLongbow from "../img/Pristine_Longbow.png";
import quarterstaff from "../img/Quarterstaff.png";
import royalBayonet from "../img/Royal_Bayonet.png";
import sedimentCoreGrunkler from "../img/Sediment_Core_Grunkler.png";
import shardsureLeif from "../img/Shardsure_Leif.png";
import skullLance from "../img/Skull_Lance.png";
import skullslipHallow from "../img/Skullslip_Hallow.png";
import slimsharpFin from "../img/Slimsharp_Fin.png";
import sparkyMarbleStaff from "../img/Sparky_Marble_Staff.png";
import spikedMenace from "../img/Spiked_Menace.png";
import spineTinglerSniper from "../img/Spine_Tingler_Sniper.png";
import sprigglyStorm from "../img/Spriggly_Storm.png";
import staffOfTheUndeadPlague from "../img/Staff_of_the_Undead_Plague.png";
import starlight from "../img/Starlight.png";
import steelAxe from "../img/Steel_Axe.png";
import theIceBreaker from "../img/The_Ice_Breaker.png";
import theStingers from "../img/The_Stingers.png";
import uninflatedGlove from "../img/Uninflated_Glove.png";
import woodenBow from "../img/Wooden_Bow.png";
import woodenSpear from "../img/Wooden_Spear.png";
import { getItemMaker } from "./tools";

const fist = getItemMaker("fisticuffs");
const warrior = getItemMaker("warrior weapons");
const bow = getItemMaker("bows");
const wand = getItemMaker("wands");

const weapons = [
  fist("Boxing Gloves", boxingGloves),
  fist("The Stingers", theStingers, "EquipmentPunching2"),
  fist("Bandage Wraps", bandageWraps),
  fist("Uninflated Glove", uninflatedGlove),
  fist("Eclectic Ordeal", eclecticOrdeal),
  fist("Knuckle Sabers", knuckleSabers),
  fist("Diabolical Gauntlet", diabolicalGauntlet),
  fist("Molten Core Knucklers", moltenCoreKnucklers),
  fist("Crackled Skull Destroyer", crackledSkullDestroyer),
  fist("Pentastud Slapper", pentastudSlapper),
  fist("Mittens of the Gods", mittensOfTheGods),

  warrior("Wooden Spear", woodenSpear),
  warrior("Steel Axe", steelAxe, "TestObj7"),
  warrior("Royal Bayonet", royalBayonet),
  warrior("Enforced Slasher", enforcedSlasher),
  warrior("The Ice Breaker", theIceBreaker),
  warrior("Deuscythe", deuscythe),
  warrior("Slimsharp Fin", slimsharpFin),
  warrior("Diabolical Flesh Ripper", diabolicalFleshRipper),
  warrior("Magma Maul", magmaMaul),
  warrior("Skull Lance", skullLance),
  warrior("Elegant Spear", elegantSpear),
  warrior("Massive Godbreaker", massiveGodbreaker),

  bow("Wooden Bow", woodenBow),
  bow("Birch Longbow", birchLongbow),
  bow("Carrot Launcher", carrotLauncher, "EquipmentBows4"),
  bow("Spiked Menace", spikedMenace, "EquipmentBows5"),
  bow("Pharaoh Bow", pharaohBow),
  bow("Blizzard Bow", blizzardBow),
  bow("Blackhole Bow", blackholeBow),
  bow("Shardsure Leif", shardsureLeif),
  bow("Diabolical Continuit", diabolicalContinuit),
  bow("Sediment Core Grunkler", sedimentCoreGrunkler),
  bow("Spine Tingler Sniper", spineTinglerSniper),
  bow("Pristine Longbow", pristineLongbow),
  bow("Doublestring Godshooter", doublestringGodshooter),

  wand("Gnarled Wand", gnarledWand),
  wand("Quarterstaff", quarterstaff),
  wand("Starlight", starlight, "EquipmentWands5"),
  wand("Crows Nest", crowsNest),
  wand("Spriggly Storm", sprigglyStorm),
  wand("Grey Gatsby", greyGatsby),
  wand("Skullslip Hallow", skullslipHallow),
  wand("Diabolical Opticule", diabolicalOpticule),
  wand("Cattle Core Soothsayer Staff", cattleCoreSoothsayerStaff),
  wand("Staff of the Undead Plague", staffOfTheUndeadPlague),
  wand("Sparky Marble Staff", sparkyMarbleStaff),
  wand("Magnifique Godcaster", magnifiqueGodcaster),
];
export default weapons;
