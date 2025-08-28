// src/components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

export default function TodoList({ items, currentFilter }) {
  if (!items || items.length === 0) {
    return <EmptyState filter={currentFilter} />;
  }

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700 rounded-xl overflow-hidden">
      {items.map((t) => (
        <li key={t.id} className="bg-white dark:bg-gray-800">
          <TodoItem todo={t} disableControls={currentFilter === "completed"} />
        </li>
      ))}
    </ul>
  );
}
