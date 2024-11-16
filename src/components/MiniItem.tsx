import { memo, PropsWithChildren } from "react";

import { imageURLs } from "../data/images";
import { GItemName } from "../flavours";
import styles from "./MiniItem.module.scss";

const MiniItem = memo(function MiniItem({
  name,
  children,
  Tag = "li",
}: PropsWithChildren<{ name: GItemName; Tag?: "li" | "h3" | "span" }>) {
  const img = imageURLs[name];

  return (
    <Tag className={styles.mini}>
      {img ? (
        <img src={img} alt={name} />
      ) : (
        <div className={styles.placeholder}>?</div>
      )}
      <span className={styles.name}>{name}</span>
      {children && <span className={styles.extra}>{children}</span>}
    </Tag>
  );
});
export default MiniItem;
