import { RootState } from "./store";

export const selectAppSaving = (state: RootState) => state.app.saving;

export const selectOwned = (state: RootState) => state.owned;

export const selectTodo = (state: RootState) => state.todo;
