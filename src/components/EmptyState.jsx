import React from "react";

export default function EmptyState({ filter }) {
  const message =
    filter === "active"
      ? "No active todos — enjoy your free time!"
      : filter === "completed"
      ? "No completed todos yet."
      : "No todos yet. Add your first one!";
  return (
    <div className="h-40 grid place-items-center text-center text-gray-500 dark:text-gray-400">
      <p>{message}</p>
    </div>
  );
}
