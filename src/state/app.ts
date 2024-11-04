import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  saving?: boolean;
}

const initialState: AppState = {};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppSaving(state, { payload }: PayloadAction<boolean>) {
      state.saving = payload;
    },
  },
});

export const { setAppSaving } = appSlice.actions;

export default appSlice.reducer;
