import { memo, PropsWithChildren } from "react";

import { items } from "../data/catalogue";
import { GItemName } from "../flavours";
import styles from "./MiniItem.module.scss";

const MiniItem = memo(function MiniItem({
  name,
  children,
  Tag = "li",
}: PropsWithChildren<{ name: GItemName; Tag?: "li" | "h3" | "span" }>) {
  const item = items.find((i) => i.name === name);

  return (
    <Tag className={styles.mini}>
      {item ? (
        <img src={item.img} alt={name} />
      ) : (
        <div className={styles.placeholder}>?</div>
      )}
      <span className={styles.name}>{name}</span>
      {children && <span className={styles.extra}>{children}</span>}
    </Tag>
  );
});
export default MiniItem;
