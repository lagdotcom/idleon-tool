import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GItemName, Quantity } from "../flavours";

export type OwnedState = Record<GItemName, Quantity>;
const initialState: OwnedState = {};

const ownedSlice = createSlice({
  name: "owned",
  initialState,
  reducers: {
    setOwned(_, { payload }: PayloadAction<OwnedState>) {
      return payload;
    },
  },
});

export const { setOwned } = ownedSlice.actions;

export default ownedSlice.reducer;
