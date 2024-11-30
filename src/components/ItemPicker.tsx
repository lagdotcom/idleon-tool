import { useCallback, useMemo } from "react";

import { items as allItems } from "../data/catalogue";
import { useAppDispatch } from "../state/hooks";
import { saveSoon } from "../state/thunks";
import { addTodo } from "../state/todo";
import { array } from "../tools";
import ItemCard, { ItemCardClickHandler } from "./ItemCard";

function getCategorizedItems(filter?: string) {
  const filteredItems = filter
    ? allItems.filter(
        (i) =>
          i.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
          i.category.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
      )
    : allItems;
  const categories = array(new Set(filteredItems.map((item) => item.category)));

  return categories.map((category) => ({
    category,
    items: filteredItems.filter((i) => i.category === category).sort(),
  }));
}

export default function ItemPicker({ filter }: { filter?: string }) {
  const dispatch = useAppDispatch();
  const clicked = useCallback<ItemCardClickHandler>(
    (name, qty) => {
      dispatch(addTodo({ name, qty }));
      dispatch(saveSoon());
    },
    [dispatch],
  );

  const categorisedItems = useMemo(() => getCategorizedItems(filter), [filter]);

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
