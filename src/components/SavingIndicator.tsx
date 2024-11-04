import { useAppSelector } from "../state/hooks";
import { selectAppSaving } from "../state/selectors";
import styles from "./SavingIndicator.module.scss";

export default function SavingIndicator() {
  const saving = useAppSelector(selectAppSaving);

  if (saving) return <div className={`${styles.icon} ${styles.spin}`}>💾</div>;

  return <div className={styles.icon}>✔️</div>;
}
