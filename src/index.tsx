import "./global.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";

import App from "./components/App";
import { loadTodo } from "./serialisation";
import { createStore } from "./state/store";

const todo = loadTodo();
const store = createStore({ app: {}, todo });

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById("app")!);
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
);
