import { useCallback, useMemo, useState } from "react";
import { Button } from "react-aria-components";

import { expandedDroppers, GExpandedDropper, recipes } from "../data/catalogue";
import { materialProduction } from "../data/materials";
import quests from "../data/quests";
import shops from "../data/shops";
import { GQuest, GRecipe, GShop } from "../data/types";
import { GItemName, Quantity } from "../flavours";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { selectTodo } from "../state/selectors";
import { saveSoon } from "../state/thunks";
import { addTodo, TodoState } from "../state/todo";
import styles from "./App.module.scss";
import FilterField from "./FilterField";
import ItemPicker from "./ItemPicker";
import MiniItem from "./MiniItem";
import ResultsDisplay from "./ResultsDisplay";
import SavingIndicator from "./SavingIndicator";

class Gatherer {
  droppers: Set<GExpandedDropper>;
  produce: TodoState;
  quests: Set<GQuest>;
  recipes: Set<GRecipe>;
  shops: Set<GShop>;
  unknown: TodoState;
  wanted: TodoState;

  constructor() {
    this.droppers = new Set();
    this.produce = {};
    this.quests = new Set();
    this.recipes = new Set();
    this.shops = new Set();
    this.unknown = {};
    this.wanted = {};
  }

  want(wantItem: GItemName, wantQty: Quantity) {
    this.wanted[wantItem] = (this.wanted[wantItem] ?? 0) + wantQty;

    const drop = expandedDroppers.filter((r) =>
      r.drops.find((d) => d.item === wantItem),
    );
    for (const dropper of drop) this.droppers.add(dropper);

    const ql = Array.from(quests).filter((q) =>
      q.outputs.find((n) => n.item === wantItem),
    );
    for (const quest of ql) this.quests.add(quest);

    const recipe = recipes.find((r) => r.output === wantItem);
    if (recipe) {
      this.recipes.add(recipe);
      for (const { item, qty } of recipe.input) this.want(item, qty * wantQty);
    }

    const sl = Array.from(shops).filter((s) =>
      s.stock.find((e) => e.item === wantItem),
    );
    for (const shop of sl) this.shops.add(shop);

    if (materialProduction.includes(wantItem)) {
      this.produce[wantItem] = (this.produce[wantItem] ?? 0) + wantQty;
      return;
    }

    if (!drop.length && !ql.length && !recipe && !sl.length)
      this.unknown[wantItem] = (this.unknown[wantItem] ?? 0) + wantQty;
  }

  results() {
    const { droppers, produce, quests, recipes, shops, unknown, wanted } = this;
    return {
      droppers: Array.from(droppers).sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
      produce: Object.entries(produce),
      quests: Array.from(quests),
      recipes: Array.from(recipes).sort((a, b) =>
        a.output.localeCompare(b.output),
      ),
      shops: Array.from(shops),
      unknown: Object.entries(unknown),
      wanted: Object.entries(wanted),
    };
  }
}

function gather(todo: TodoState) {
  const g = new Gatherer();
  for (const [name, qty] of Object.entries(todo)) g.want(name, qty);

  return g.results();
}

export default function App() {
  const todo = useAppSelector(selectTodo);
  const results = useMemo(() => gather(todo), [todo]);
  const [filter, setFilter] = useState("");

  const dispatch = useAppDispatch();
  const clearTodo = useCallback(
    (name: GItemName) => () => {
      dispatch(addTodo({ name, qty: -Infinity }));
      dispatch(saveSoon());
    },
    [dispatch],
  );

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.left}>
          <FilterField onChange={setFilter} />
          <ItemPicker filter={filter} />
        </div>
        <div className={styles.right}>
          <ResultsDisplay {...results} />
        </div>
        <div className={styles.todo}>
          {Object.entries(todo).map(([name, qty]) => (
            <div key={name} className={styles.entry}>
              <Button onPress={clearTodo(name)}>X</Button>
              <MiniItem name={name} Tag="span">
                x{qty}
              </MiniItem>
            </div>
          ))}
        </div>
      </div>
      <SavingIndicator />
    </>
  );
}
