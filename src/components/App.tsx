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
import { addQty, array, entries, getQty } from "../tools";
import styles from "./App.module.scss";
import FilterField from "./FilterField";
import ItemPicker from "./ItemPicker";
import MiniItem from "./MiniItem";
import ResultsDisplay from "./ResultsDisplay";
import SavingIndicator from "./SavingIndicator";
import UploadButton from "./UploadButton";

class Gatherer {
  haveAlready: Map<GItemName, Quantity>;
  totalWanted: Map<GItemName, Quantity>;

  constructor() {
    this.haveAlready = new Map();
    this.totalWanted = new Map();
  }

  have(item: GItemName, qty: Quantity) {
    this.haveAlready.set(item, qty);
  }

  want(item: GItemName, qty: Quantity) {
    addQty(this.totalWanted, item, qty);
  }

  private source(item: GItemName, qty: Quantity) {
    const myDroppers = new Set<GExpandedDropper>();
    const myQuests = new Set<GQuest>();
    const myRecipes = new Set<GRecipe>();
    const myWants = new Map<GItemName, Quantity>();
    const myShops = new Set<GShop>();
    let myProduce = 0;
    let myUnknown = 0;

    const drop = expandedDroppers.filter((r) =>
      r.drops.find((d) => d.item === item),
    );
    for (const dropper of drop) myDroppers.add(dropper);

    const ql = array(quests).filter((q) =>
      q.outputs.find((n) => n.item === item),
    );
    for (const quest of ql) myQuests.add(quest);

    const recipe = recipes.find((r) => r.output === item);
    if (recipe) {
      myRecipes.add(recipe);
      for (const i of recipe.input) addQty(myWants, i.item, i.qty * qty);
    }

    const sl = array(shops).filter((s) => s.stock.find((e) => e.item === item));
    for (const shop of sl) myShops.add(shop);

    if (materialProduction.includes(item) || alchemyProduction.includes(item))
      myProduce = qty;
    else if (!drop.length && !ql.length && !recipe && !sl.length)
      myUnknown = qty;

    return {
      droppers: myDroppers,
      quests: myQuests,
      recipes: myRecipes,
      wants: myWants,
      shops: myShops,
      produce: myProduce,
      unknown: myUnknown,
    };
  }

  results() {
    const { totalWanted, haveAlready } = this;

    const droppers = new Set<GExpandedDropper>();
    const quests = new Set<GQuest>();
    const recipes = new Set<GRecipe>();
    const shops = new Set<GShop>();
    const produce = new Map<GItemName, Quantity>();
    const unknown = new Map<GItemName, Quantity>();

    const owned = new Map<GItemName, Quantity>();
    const needed = new Map<GItemName, Quantity>();
    const processed = new Map<GItemName, Quantity>();
    const wantedQueue = array(totalWanted);
    while (wantedQueue.length) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const [item, qty] = wantedQueue.shift()!;

      const alreadyProcessed = getQty(processed, item);
      const totalQty: Quantity = alreadyProcessed + qty;
      const alreadyOwned = getQty(haveAlready, item);
      const surplus: Quantity = alreadyOwned - totalQty;

      if (surplus >= 0) {
        owned.set(item, totalQty);
      } else {
        if (alreadyOwned) owned.set(item, alreadyOwned);
        const stillNeed = -surplus;
        needed.set(item, stillNeed);

        const toProcess = Math.min(qty, stillNeed);
        const s = this.source(item, toProcess);

        for (const x of s.droppers) droppers.add(x);
        if (s.produce) addQty(produce, item, s.produce);
        for (const x of s.quests) quests.add(x);
        for (const x of s.recipes) recipes.add(x);
        for (const x of s.shops) shops.add(x);
        if (s.unknown) addQty(unknown, item, s.unknown);

        for (const [wantItem, wantQty] of s.wants)
          wantedQueue.push([wantItem, wantQty]);
      }

      processed.set(item, totalQty);
    }

    return {
      droppers: array(droppers).sort((a, b) => a.name.localeCompare(b.name)),
      needed: array(needed),
      owned: array(owned),
      produce: array(produce),
      quests: array(quests).sort((a, b) => a.name.localeCompare(b.name)),
      recipes: array(recipes).sort((a, b) => a.output.localeCompare(b.output)),
      shops: array(shops).sort((a, b) => a.name.localeCompare(b.name)),
      unknown: array(unknown),
      wanted: array(processed),
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
