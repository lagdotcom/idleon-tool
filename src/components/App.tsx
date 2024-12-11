import { useCallback, useMemo, useState } from "react";
import { Button } from "react-aria-components";

import { alchemyProduction } from "../data/alchemy";
import {
  expandedDroppers,
  GExpandedDropper,
  quests,
  recipes,
} from "../data/catalogue";
import { materialProduction } from "../data/materials";
import shops from "../data/shops";
import { GQuest, GRecipe, GShop } from "../data/types";
import { GItemName, Quantity } from "../flavours";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { OwnedState } from "../state/owned";
import { selectOwned, selectTodo } from "../state/selectors";
import { saveSoon } from "../state/thunks";
import { addTodo, TodoState } from "../state/todo";
import { array, entries } from "../tools";
import styles from "./App.module.scss";
import FilterField from "./FilterField";
import ItemPicker from "./ItemPicker";
import MiniItem from "./MiniItem";
import ResultsDisplay from "./ResultsDisplay";
import SavingIndicator from "./SavingIndicator";
import UploadButton from "./UploadButton";

class Gatherer {
  droppers: Set<GExpandedDropper>;
  haveAlready: Map<GItemName, Quantity>;
  produce: TodoState;
  quests: Set<GQuest>;
  recipes: Set<GRecipe>;
  shops: Set<GShop>;
  unknown: TodoState;
  totalWanted: TodoState;

  constructor() {
    this.droppers = new Set();
    this.haveAlready = new Map();
    this.produce = {};
    this.quests = new Set();
    this.recipes = new Set();
    this.shops = new Set();
    this.unknown = {};
    this.totalWanted = {};
  }

  have(item: GItemName, qty: Quantity) {
    this.haveAlready.set(item, qty);
  }

  want(item: GItemName, qty: Quantity) {
    this.totalWanted[item] = (this.totalWanted[item] ?? 0) + qty;

    const drop = expandedDroppers.filter((r) =>
      r.drops.find((d) => d.item === item),
    );
    for (const dropper of drop) this.droppers.add(dropper);

    const ql = array(quests).filter((q) =>
      q.outputs.find((n) => n.item === item),
    );
    for (const quest of ql) this.quests.add(quest);

    const recipe = recipes.find((r) => r.output === item);
    if (recipe) {
      this.recipes.add(recipe);
      for (const i of recipe.input) this.want(i.item, i.qty * qty);
    }

    const sl = array(shops).filter((s) => s.stock.find((e) => e.item === item));
    for (const shop of sl) this.shops.add(shop);

    if (materialProduction.includes(item) || alchemyProduction.includes(item)) {
      this.produce[item] = (this.produce[item] ?? 0) + qty;
      return;
    }

    if (!drop.length && !ql.length && !recipe && !sl.length)
      this.unknown[item] = (this.unknown[item] ?? 0) + qty;
  }

  results() {
    const {
      droppers,
      haveAlready,
      produce,
      quests,
      recipes,
      shops,
      totalWanted,
      unknown,
    } = this;

    const owned: [GItemName, Quantity][] = [];
    const needed: [GItemName, Quantity][] = [];
    const wanted = entries(totalWanted);
    for (const [item, qty] of wanted) {
      const got = haveAlready.get(item) ?? 0;
      const need = qty - got;
      if (need > 0) needed.push([item, need]);
      if (got > 0) owned.push([item, got]);
    }

    return {
      droppers: array(droppers).sort((a, b) => a.name.localeCompare(b.name)),
      needed,
      owned,
      produce: entries(produce),
      quests: array(quests),
      recipes: array(recipes).sort((a, b) => a.output.localeCompare(b.output)),
      shops: array(shops),
      unknown: entries(unknown),
      wanted,
    };
  }
}

function gather(todo: TodoState, owned: OwnedState) {
  const g = new Gatherer();
  for (const [name, qty] of entries(owned)) g.have(name, qty);
  for (const [name, qty] of entries(todo)) g.want(name, qty);

  return g.results();
}

export default function App() {
  const owned = useAppSelector(selectOwned);
  const todo = useAppSelector(selectTodo);
  const results = useMemo(() => gather(todo, owned), [owned, todo]);
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
          <div className={styles.top}>
            <FilterField onChange={setFilter} />
            <UploadButton />
          </div>
          <ItemPicker filter={filter} />
        </div>
        <div className={styles.right}>
          <ResultsDisplay {...results} />
        </div>
        <div className={styles.todo}>
          {entries(todo).map(([name, qty]) => (
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
