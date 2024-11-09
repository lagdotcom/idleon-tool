import { useCallback, useState } from "react";
import { Button } from "react-aria-components";

import { GExpandedDropper } from "../data/catalogue";
import { GQuest, GRecipe, GShop } from "../data/types";
import { GItemName, Quantity } from "../flavours";
import MiniItem from "./MiniItem";
import styles from "./ResultsDisplay.module.scss";

function DropperDisplay({
  dropper: { name, img, drops, area },
  wanted,
}: {
  dropper: GExpandedDropper;
  wanted: GItemName[];
}) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((x) => !x), []);

  const big = drops.filter((d) => wanted.includes(d.item));
  const small = drops.filter((d) => !wanted.includes(d.item));

  return (
    <div className={styles.dropper}>
      <img src={img} alt={name} />
      <div className={styles.name}>{name}</div>
      <div className={styles.area}>{area}</div>
      <ul className={styles.wanted}>
        {big.map((d, n) => (
          <MiniItem key={n} name={d.item}>
            {isNaN(d.chance) ? "(skill)" : `1/${Math.round(d.chance)}`}
          </MiniItem>
        ))}
      </ul>
      {small.length && (
        <div className={styles.extra}>
          <Button onPress={toggle}>Show/Hide Extra Drops</Button>
          {open && (
            <ul>
              {small.map((d, n) => (
                <MiniItem key={n} name={d.item}>
                  {isNaN(d.chance) ? "(skill)" : `1/${Math.round(d.chance)}`}
                </MiniItem>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function RecipeDisplay({
  recipe,
  qty = 1,
}: {
  recipe: GRecipe;
  qty?: Quantity;
}) {
  return (
    <div className={styles.recipe}>
      <MiniItem Tag="h3" name={recipe.output}>
        x{qty} ({recipe.type})
      </MiniItem>
      <ul>
        {recipe.input.map((ri) => (
          <MiniItem key={ri.item} name={ri.item}>
            x{ri.qty * qty}
          </MiniItem>
        ))}
      </ul>
    </div>
  );
}

function QuestDisplay({ quest }: { quest: GQuest }) {
  return (
    <div>
      <h3>
        {quest.name} ({quest.npc})
      </h3>

      <h4>Requirements:</h4>
      <ul>
        {quest.inputs.map((ri) => (
          <MiniItem key={ri.item} name={ri.item}>
            x{ri.qty}
          </MiniItem>
        ))}
      </ul>

      <h4>Rewards:</h4>
      <ul>
        {quest.outputs.map((ri) => (
          <MiniItem key={ri.item} name={ri.item}>
            x{ri.qty}
          </MiniItem>
        ))}
      </ul>
    </div>
  );
}

function ShopDisplay({
  shop: { name, stock },
  wanted,
}: {
  shop: GShop;
  wanted: GItemName[];
}) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((x) => !x), []);

  const big = stock.filter((d) => wanted.includes(d.item));
  const small = stock.filter((d) => !wanted.includes(d.item));

  return (
    <div className={styles.dropper}>
      <div className={styles.name}>{name}</div>
      <ul className={styles.wanted}>
        {big.map((e, n) => (
          <MiniItem key={n} name={e.item}>
            {e.cost}c {e.stock}/day
          </MiniItem>
        ))}
      </ul>
      {small.length && (
        <div className={styles.extra}>
          <Button onPress={toggle}>Show/Hide Other Items</Button>
          {open && (
            <ul>
              {small.map((e, n) => (
                <MiniItem key={n} name={e.item}>
                  {e.cost}g {e.stock}/day
                </MiniItem>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function getQty(name: GItemName, wanted: [GItemName, Quantity][]) {
  const entry = wanted.find((w) => w[0] === name);
  if (entry) return entry[1];
}

export default function ResultsDisplay({
  droppers,
  produce,
  quests,
  recipes,
  shops,
  unknown,
  wanted,
}: {
  droppers: GExpandedDropper[];
  produce: [GItemName, Quantity][];
  quests: GQuest[];
  recipes: GRecipe[];
  shops: GShop[];
  unknown: [GItemName, Quantity][];
  wanted: [GItemName, Quantity][];
}) {
  const wantedItems = wanted.map((w) => w[0]);

  return (
    <div className={styles.results}>
      {wanted.length > 0 && (
        <div className={styles.section}>
          <h2>Total Wanted</h2>
          <ul>
            {wanted.map(([name, qty]) => (
              <MiniItem key={name} name={name}>
                x{qty}
              </MiniItem>
            ))}
          </ul>
        </div>
      )}
      {unknown.length > 0 && (
        <div className={styles.section}>
          <h2>Unknown</h2>
          <ul>
            {unknown.map(([name, qty]) => (
              <MiniItem key={name} name={name}>
                x{qty}
              </MiniItem>
            ))}
          </ul>
        </div>
      )}
      {produce.length > 0 && (
        <div className={styles.section}>
          <h2>Produce</h2>
          <ul>
            {produce.map(([name, qty]) => (
              <MiniItem key={name} name={name}>
                x{qty}
              </MiniItem>
            ))}
          </ul>
        </div>
      )}
      {recipes.length > 0 && (
        <div className={styles.section}>
          <h2>Recipes</h2>
          {recipes.map((r) => (
            <RecipeDisplay
              key={r.output}
              recipe={r}
              qty={getQty(r.output, wanted)}
            />
          ))}
        </div>
      )}
      {quests.length > 0 && (
        <div className={styles.section}>
          <h2>Quests</h2>
          {quests.map((q) => (
            <QuestDisplay key={q.name} quest={q} />
          ))}
        </div>
      )}
      {shops.length > 0 && (
        <div className={styles.section}>
          <h2>Shops</h2>
          {shops.map((shop) => (
            <ShopDisplay key={shop.name} shop={shop} wanted={wantedItems} />
          ))}
        </div>
      )}
      {droppers.length > 0 && (
        <div className={styles.section}>
          <h2>Drops</h2>
          {droppers.map((d) => (
            <DropperDisplay key={d.name} dropper={d} wanted={wantedItems} />
          ))}
        </div>
      )}
    </div>
  );
}
