import bejeweledRing from "../img/Bejeweled_Ring.png";
import chefRing from "../img/Chef_Ring.png";
import copperBand from "../img/Copper_Band.png";
import dawnStopwatch from "../img/Dawn_Stopwatch.png";
import deathWish from "../img/Death_Wish.png";
import defendersDignity from "../img/Defenders_Dignity.png";
import dementedEmperorOpal from "../img/Demented_Emperor_Opal.png";
import doobleGoopi from "../img/Dooble_Goopi.png";
import duneKillerRing from "../img/Dune_Killer_Ring.png";
import efauntTrunculus from "../img/Efaunt_Trunculus.png";
import elfTwistRing from "../img/Elf_Twist_Ring.png";
import frisbeeRing from "../img/Frisbee_Ring.png";
import labRing from "../img/Lab_Ring.png";
import magmaKillerRing from "../img/Magma_Killer_Ring.png";
import midnightStopwatch from "../img/Midnight_Stopwatch.png";
import nebulaKillerRing from "../img/Nebula_Killer_Ring.png";
import neutronIceRing from "../img/Neutron_Ice_Ring.png";
import protectorsPride from "../img/Protectors_Pride.png";
import pugilistDemise from "../img/Pugilist_Demise.png";
import rexRing from "../img/Rex_Ring.png";
import sanicRing from "../img/Sanic_Ring.png";
import serratedRexRing from "../img/Serrated_Rex_Ring.png";
import silverStopwatch from "../img/Silver_Stopwatch.png";
import soupedLabRing from "../img/Souped_Lab_Ring.png";
import steelBand from "../img/Steel_Band.png";
import tenacityRing from "../img/Tenacity_Ring.png";
import tundraKillerRing from "../img/Tundra_Killer_Ring.png";
import zeroPointStopwatch from "../img/Zero_Point_Stopwatch.png";
import { getItemMaker } from "./tools";

const i = getItemMaker("rings");

const rings = [
  i("Copper Band", copperBand),
  i("Pugilist Demise", pugilistDemise, "EquipmentRings7"),
  i("Steel Band", steelBand, "EquipmentRings3"),
  i("Elf Twist Ring", elfTwistRing, "EquipmentRings21"),
  i("Silver Stopwatch", silverStopwatch),
  i("Dooble Goopi", doobleGoopi),
  i("Rex Ring", rexRing),
  i("Defenders Dignity", defendersDignity),
  i("Frisbee Ring", frisbeeRing),
  i("Serrated Rex Ring", serratedRexRing),
  i("Death Wish", deathWish),
  i("Sanic Ring", sanicRing),
  i("Bejeweled Ring", bejeweledRing),
  i("Protectors Pride", protectorsPride),
  i("Efaunt Trunculus", efauntTrunculus),
  i("Dawn Stopwatch", dawnStopwatch),
  i("Midnight Stopwatch", midnightStopwatch),
  i("Neutron Ice Ring", neutronIceRing),
  i("Lab Ring", labRing),
  i("Chef Ring", chefRing),
  i("Souped Lab Ring", soupedLabRing),
  i("Tenacity Ring", tenacityRing),
  i("Zero Point Stopwatch", zeroPointStopwatch),
  i("Demented Emperor Opal", dementedEmperorOpal),
  i("Dune Killer Ring", duneKillerRing),
  i("Tundra Killer Ring", tundraKillerRing),
  i("Nebula Killer Ring", nebulaKillerRing),
  i("Magma Killer Ring", magmaKillerRing),
];
export default rings;
