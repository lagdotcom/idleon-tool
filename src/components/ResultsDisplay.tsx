import { PropsWithChildren, useCallback, useState } from "react";
import { Button } from "react-aria-components";

import { GExpandedDropper, items } from "../data/catalogue";
import { GRecipe } from "../data/types";
import { GItemName, Quantity } from "../flavours";
import styles from "./ResultsDisplay.module.scss";

function MiniItem({
  name,
  children,
  Tag = "li",
}: PropsWithChildren<{ name: GItemName; Tag?: "li" | "h3" }>) {
  const item = items.find((i) => i.name === name);

  return (
    <Tag className={styles.mini}>
      {item ? (
        <img src={item.img} alt={name} />
      ) : (
        <div className={styles.placeholder}>?</div>
      )}
      <span className={styles.name}>{name}</span>
      <span className={styles.extra}>{children}</span>
    </Tag>
  );
}

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
            1/{Math.round(d.chance)}
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
                  1/{Math.round(d.chance)}
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

function getQty(name: GItemName, wanted: [GItemName, Quantity][]) {
  const entry = wanted.find((w) => w[0] === name);
  if (entry) return entry[1];
}

export default function ResultsDisplay({
  droppers,
  produce,
  recipes,
  unknown,
  wanted,
}: {
  droppers: GExpandedDropper[];
  produce: [GItemName, Quantity][];
  recipes: GRecipe[];
  unknown: [GItemName, Quantity][];
  wanted: [GItemName, Quantity][];
}) {
  return (
    <div className={styles.results}>
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
      {droppers.length > 0 && (
        <div className={styles.section}>
          <h2>Drops</h2>
          {droppers.map((d) => (
            <DropperDisplay
              key={d.name}
              dropper={d}
              wanted={wanted.map((w) => w[0])}
            />
          ))}
        </div>
      )}
    </div>
  );
}
