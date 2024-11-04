import { useCallback } from "react";

import { items as allItems } from "../data/data";
import { useAppDispatch } from "../state/hooks";
import { saveSoon } from "../state/thunks";
import { addTodo } from "../state/todo";
import ItemCard, { ItemCardClickHandler } from "./ItemCard";

function getCategorisedItems() {
  const categories = Array.from(new Set(allItems.map((item) => item.category)));

  return categories.map((category) => ({
    category,
    items: allItems.filter((i) => i.category === category).sort(),
  }));
}
const categorisedItems = getCategorisedItems();

export default function ItemPicker() {
  const dispatch = useAppDispatch();
  const clicked = useCallback<ItemCardClickHandler>(
    (name, qty) => {
      dispatch(addTodo({ name, qty }));
      dispatch(saveSoon());
    },
    [dispatch],
  );

  return (
    <>
      {categorisedItems.map(({ category, items }) => (
        <div key={category}>
          <div>{category}</div>
          <div>
            {items
              // .sort((a, b) => a.name.localeCompare(b.name))
              .map(({ name }) => (
                <ItemCard key={name} name={name} onClick={clicked} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
}
