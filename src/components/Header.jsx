import React from "react";
import { useSelector } from "react-redux";

import PersistenceIndicator from "./PersistenceIndicator";

export default function Header() {
  const todos = useSelector((state) => state.todos.items);
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <header className="text-center mb-2 md:mb-6 flex flex-col gap-2">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
        Todo App
      </h1>
      <p className="text-base text-gray-500 dark:text-gray-400">
        Total: {total} | Completed: {completed} | Remaining: {remaining}
      </p>
      <PersistenceIndicator /> {/* ✅ new indicator */}
    </header>
  );
}
