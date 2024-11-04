import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

import { saveTodo } from "../serialisation";
import { setAppSaving } from "./app";
import { RootState } from "./store";

type AppThunk = ThunkAction<void, RootState, undefined, UnknownAction>;

let saveTimeout = 0;

export const saveSoon = (): AppThunk => (dispatch, getState) => {
  dispatch(setAppSaving(true));

  if (saveTimeout) clearTimeout(saveTimeout);

  saveTimeout = setTimeout(() => {
    saveTodo(getState().todo);
    dispatch(setAppSaving(false));
  }, 1000) as unknown as number;
};
