import { Button, Input, Label, SearchField } from "react-aria-components";

import styles from "./FilterField.module.scss";

export default function FilterField({
  onChange,
}: {
  onChange(value: string): void;
}) {
  return (
    <SearchField className={styles.filter} onChange={onChange}>
      <Label>Filter</Label>
      <Input className={styles.input} />
      <Button className={styles.button}>✕</Button>
    </SearchField>
  );
}
