import { MouseEvent, useCallback } from "react";

import { items } from "../data/data";
import { GItemName, Quantity } from "../flavours";

export type ItemCardClickHandler = (name: GItemName, qty: Quantity) => void;

export default function ItemCard({
  name,
  onClick,
}: {
  name: GItemName;
  onClick?: ItemCardClickHandler;
}) {
  const item = items.find((i) => i.name === name);
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
    <button onClick={clicked} onContextMenu={clicked} title={name}>
      <img src={item?.img} alt={name} />
    </button>
  );
}
