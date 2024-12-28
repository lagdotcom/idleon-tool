import { getDropperMaker, mkDrop as d, mkTableDrop as t } from "./tools";

const m = getDropperMaker("seasonal event");

// TODO
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const range = (min: number, max: number) => NaN;

export const seasonalEvents = [
  m(
    "Giftmas Present 2024",
    "anywhere",
    d("Gem", 5, range(1, 12)),
    t(
      [
        d("Golden Kebabs", 25.3, range(1, 3)),
        d("Golden Meat Pie", 25.3, range(1, 3)),
        d("Golden Nomwich", 25.3, range(1, 3)),
        d("Golden Ham", 25.3, range(1, 3)),
        d("Golden Cake", 31.5, range(1, 3)),
      ],
      6.32,
    ),
    t(
      [
        d("1 HR Time Candy", 11.1),
        d("2 HR Time Candy", 22.2),
        d("4 HR Time Candy", 50),
        d("12 HR Time Candy", 143),
        d("24 HR Time Candy", 333),
      ],
      6.06,
    ),
    d("Small Experience Balloon", 40, 2),
    d("Husky Hat", 1000),
    d("Hat Premiumifier", 500),
    d("Star Talent Reset Potion", 1000),
    d("Epic Santa Hat", 1000),
    d("Bedsheet with Holes", 1000),
    d("Snowflake Nametag", 500),
    d("Gold Food Coupon", 16.1, 2),
    d("Gold Food Coupon", 20, 5),
    t(
      [
        d("Ghost (Event) Card", 30.3),
        d("Giftmas Blobulyte Card", 30.3),
        d("Meaning of Giftmas Card", 30.3),
      ],
      10,
    ),
    d("Golden Giftmas Box Card", 50),
    t(
      [
        d("Giftybread Man", 40, range(5, 10)),
        d("Chogg Nog", 40, range(5, 10)),
        d("Candy Canes", 40, range(5, 10)),
        d("Mistleberries", 40, range(5, 10)),
      ],
      10,
    ),
    d("Giftmas Helmet Upgrade Stone", 33.33),
    d("Giftmas Tool Upgrade Stone", 33.33),
    d("Mystery Upgrade Stone IV", 50),
    d("Golden Gift", 100),
  ),

  m(
    "Golden Gift",
    "anywhere",
    t([d("Event Point", 5.56, 2), d("Event Point", 2.13)], 1.54),
    t(
      [
        d("12 HR Time Candy", 12.5),
        d("24 HR Time Candy", 50),
        d("Cosmic Time Candy", 20),
        d("Medium Experience Balloon", 20, 4),
        d("Large Experience Balloon", 20, 4),
      ],
      4,
    ),
    t(
      [
        d("Love Ring", 100),
        d("Leafy Ring", 100),
        d("Wealth Ring", 100),
        d("Bob Ring", 100),
        d("Bubble Ring", 100),
        d("Cthulu's Ring", 100),
        d("Megafeather Nametag", 100),
        d("Spring Flowers Nametag", 100),
        d("Nightshade Nametag", 100),
        d("Apple Launch Hat", 100),
      ],
      10,
    ),
  ),

  m(
    "Giftmas 2024 Wheel",
    "Blunder Hills",
    t(
      [
        d("Event Point", 1, 10),
        d("Cosmic Ball", 1, 15),
        d("Frostyman Nametag", 1),
      ],
      87.7,
    ),
    t(
      [d("Event Point", 1, 5), d("Cosmic Ball", 1, 5), d("Holiday Chest", 1)],
      26.9,
    ),
    t([d("Event Point", 1, 3), d("Cosmic Ball", 1, 2)], 9.52),
    t([d("Event Point", 1, 2), d("Cosmic Ball", 1, 1)], 5.17),
    t([d("Event Point", 1, 1)], 4.1),
    t([d("Event Point", 1, 1)], 2.45),
  ),
];
