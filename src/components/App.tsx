import { useCallback, useMemo } from "react";
import { Button } from "react-aria-components";

import { droppers, items, recipes } from "../data/catalogue";
import { GDropper } from "../data/types";
import { GItemName, Quantity } from "../flavours";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { selectTodo } from "../state/selectors";
import { saveSoon } from "../state/thunks";
import { addTodo, TodoState } from "../state/todo";
import styles from "./App.module.scss";
import ItemPicker from "./ItemPicker";
import SavingIndicator from "./SavingIndicator";

class Gatherer {
  droppers: Set<GDropper>;
  produce: TodoState;
  unknown: TodoState;

  constructor() {
    this.droppers = new Set();
    this.produce = {};
    this.unknown = {};
  }

  want(wantItem: GItemName, wantQty: Quantity) {
    const drop = droppers.filter((r) =>
      r.drops.find((d) => d.item === wantItem),
    );
    for (const dropper of drop) this.droppers.add(dropper);

    const recipe = recipes.find((r) => r.output === wantItem);
    if (recipe)
      for (const { item, qty } of recipe.input) this.want(item, qty * wantQty);

    const item = items.find((i) => i.name === wantItem);
    if (item?.category === "production") {
      this.produce[wantItem] = (this.produce[wantItem] ?? 0) + wantQty;
      return;
    }

    if (!drop.length && !recipe)
      this.unknown[wantItem] = (this.unknown[wantItem] ?? 0) + wantQty;
  }
}

function gather(todo: TodoState) {
  const g = new Gatherer();
  for (const [name, qty] of Object.entries(todo)) g.want(name, qty);

  return g;
}

export default function App() {
  const todo = useAppSelector(selectTodo);
  const g = useMemo(() => gather(todo), [todo]);
  console.log(g);

  const dispatch = useAppDispatch();
  const clearTodo = useCallback(
    (name: GItemName) => () => {
      dispatch(addTodo({ name, qty: -Infinity }));
      dispatch(saveSoon());
    },
    [dispatch],
  );

  return (
    <div className={styles.layout}>
      <div className={styles.top}>
        <SavingIndicator />
      </div>
      <div className={styles.left}>
        <ItemPicker />
      </div>
      <div className={styles.right}>
        {Object.entries(todo).map(([name, qty]) => (
          <div key={name}>
            <Button onPress={clearTodo(name)}>X</Button>
            {name} x{qty}
          </div>
        ))}
      </div>
    </div>
  );
}
