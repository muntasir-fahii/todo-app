import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "all",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title: title.trim(),
            completed: false,
            createdAt: Date.now(),
          },
        };
      },
    },
    toggleTodo(state, action) {
      const t = state.items.find((x) => x.id === action.payload);
      if (t) t.completed = !t.completed;
    },
    editTodo(state, action) {
      const { id, title } = action.payload;
      const t = state.items.find((x) => x.id === id);
      if (t) t.title = title.trim();
    },
    deleteTodo(state, action) {
      state.items = state.items.filter((x) => x.id !== action.payload);
    },
    clearCompleted(state) {
      state.items = state.items.filter((x) => !x.completed);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },

    replaceAll(state, action) {
      return action.payload;
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  clearCompleted,
  setFilter,
  replaceAll,
} = todosSlice.actions;

// selectors
export const selectTodosState = (s) => s.todos;
export const selectItems = (s) => s.todos.items;
export const selectFilter = (s) => s.todos.filter;

export const selectStats = createSelector([selectItems], (items) => {
  const total = items.length;
  const completed = items.filter((t) => t.completed).length;
  const remaining = total - completed;
  return { total, completed, remaining };
});

export const selectFiltered = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    if (filter === "active") return items.filter((t) => !t.completed);
    if (filter === "completed") return items.filter((t) => t.completed);
    return items;
  }
);

export default todosSlice.reducer;
