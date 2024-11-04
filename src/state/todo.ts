import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GItemName, Quantity } from "../flavours";

export type TodoState = Record<GItemName, number>;
const initialState: TodoState = {};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(
      state,
      {
        payload: { name, qty },
      }: PayloadAction<{ name: GItemName; qty: Quantity }>,
    ) {
      const changed = (state[name] ?? 0) + qty;

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      if (changed <= 0) delete state[name];
      else state[name] = changed;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
