import { useMemo } from "react";

import { Coins } from "../flavours";
import styles from "./CoinsDisplay.module.scss";

interface CoinType {
  abbreviation: string;
  name: string;
  className: string;
  multiple: Coins;
  limit: boolean;
}

const ct = (
  abbreviation: string,
  name: string,
  className: string,
  exponent: number,
  limit = true,
): CoinType => ({
  abbreviation,
  name,
  className,
  multiple: 10n ** BigInt(exponent),
  limit,
});

const multiples = [
  ct("e", "eclipse", styles.eclipse, 28, false),
  ct("o", "orberal", styles.orberal, 26),
  ct("m", "marbiglass", styles.marbiglass, 24),
  ct("t", "tydal", styles.tydal, 22),
  ct("S", "sunder", styles.sunder, 20),
  ct("G", "godshard", styles.godshard, 18),
  ct("D", "dreadlo", styles.dreadlo, 16),
  ct("f", "starfire", styles.starfire, 14),
  ct("l", "lustre", styles.lustre, 12),
  ct("v", "void", styles.void, 10),
  ct("d", "dementia", styles.dementia, 8),
  ct("p", "platinum", styles.platinum, 6),
  ct("g", "gold", styles.gold, 4),
  ct("s", "silver", styles.silver, 2),
  ct("c", "copper", styles.copper, 0),
];

export default function CoinsDisplay({ amount }: { amount: Coins }) {
  const elements = useMemo(() => {
    const elements: JSX.Element[] = [];

    for (const {
      abbreviation,
      name,
      className,
      multiple,
      limit,
    } of multiples) {
      let raw = amount / multiple;
      if (limit) raw %= 100n;
      const coins = Math.floor(Number(raw));
      if (!coins) continue;

      elements.push(
        <span key={name} className={className} title={name}>
          {coins}
          {abbreviation}
        </span>,
      );
    }

    return elements;
  }, [amount]);

  return <span className={styles.coins}>{elements}</span>;
}
