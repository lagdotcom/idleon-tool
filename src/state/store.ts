import {
  combineReducers,
  configureStore,
  createSelector,
} from "@reduxjs/toolkit";

import app from "./app";
import owned from "./owned";
import todo from "./todo";

const reducer = combineReducers({ app, owned, todo });
export type RootState = ReturnType<typeof reducer>;

export const createStore = (preloadedState?: RootState) =>
  configureStore({ reducer, preloadedState });

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore["dispatch"];

export const createAppSelector = createSelector.withTypes<RootState>();
