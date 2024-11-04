import { useCallback } from "react";
import { Button } from "react-aria-components";

import { GItemName } from "../flavours";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { selectTodo } from "../state/selectors";
import { saveSoon } from "../state/thunks";
import { addTodo } from "../state/todo";
import styles from "./App.module.scss";
import ItemPicker from "./ItemPicker";
import SavingIndicator from "./SavingIndicator";

export default function App() {
  const todo = useAppSelector(selectTodo);
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
