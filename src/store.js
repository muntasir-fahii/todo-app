import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

const PERSIST_KEY = "todos_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(PERSIST_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

function saveState(todosState) {
  try {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(todosState));
  } catch {}
}

const persisted = loadState();

const store = configureStore({
  reducer: { todos: todosReducer },
  preloadedState: persisted ? { todos: persisted } : undefined,
});

store.subscribe(() => {
  saveState(store.getState().todos);
});

export default store;
