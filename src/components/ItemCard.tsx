import { MouseEvent, useCallback } from "react";

import { imageURLs } from "../data/images";
import { GItemName, Quantity } from "../flavours";
import styles from "./ItemCard.module.scss";

export type ItemCardClickHandler = (name: GItemName, qty: Quantity) => void;

export default function ItemCard({
  name,
  onClick,
}: {
  name: GItemName;
  onClick?: ItemCardClickHandler;
}) {
  const img = imageURLs[name];

  const clicked = useCallback(
    (e: MouseEvent) => {
      let amount = 1;
      if (e.shiftKey) amount *= 10;
      if (e.ctrlKey) amount *= 100;

      if (e.type === "contextmenu") {
        e.preventDefault();
        amount *= -1;
      }

      onClick?.(name, amount);
    },
    [name, onClick],
  );

  return (
    <button
      className={styles.card}
      onClick={clicked}
      onContextMenu={clicked}
      title={name}
    >
      <img src={img} alt={name} />
    </button>
  );
}
