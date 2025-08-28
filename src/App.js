import React, { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import TodoList from "./components/TodoList";
import AddTodoModal from "./components/AddTodoModal";
import { useSelector, useDispatch } from "react-redux";
import { selectFiltered, selectStats, clearCompleted } from "./todosSlice";
import DarkModeToggle from "./components/DarkModeToggle";

export default function App() {
  const dispatch = useDispatch();
  const items = useSelector(selectFiltered);
  const stats = useSelector(selectStats);
  const filter = useSelector((s) => s.todos.filter);

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full transition-colors duration-500 bg-slate-100-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-2xl mx-auto flex flex-col p-4 sm:p-6 lg:p-8">
        <div className="flex items-center md:items-start flex-col md:flex-row justify-between md:gap-4">
          <Header stats={stats} />
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded-xl bg-teal-900 text-white font-medium hover:bg-blue-700"
            >
              Add Todo
            </button>
            <DarkModeToggle />
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white dark:bg-gray-800 shadow p-4 sm:p-6">
          <Filters />

          <div className="mt-4 min-h-[160px]">
            <TodoList items={items} currentFilter={filter} />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-base opacity-75">
              Completed: {stats.completed} / {stats.total} • Remaining:{" "}
              {stats.remaining}
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(clearCompleted())}
                className="text-base font-medium px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-700"
              >
                Clear completed
              </button>
            </div>
          </div>
        </div>
      </div>

      <AddTodoModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
