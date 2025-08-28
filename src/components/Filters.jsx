import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../todosSlice";

const options = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export default function Filters() {
  const dispatch = useDispatch();
  const current = useSelector((s) => s.todos.filter);

  return (
    <div className="flex items-center gap-2">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => dispatch(setFilter(o.key))}
          className={
            `px-3 py-1.5 rounded-xl text-sm font-medium border transition ` +
            (current === o.key
              ? "bg-teal-900 text-white border-teal-600"
              : "bg-gray-100 dark:bg-gray-700 border-transparent hover:bg-gray-200 dark:hover:bg-gray-600")
          }
          aria-pressed={current === o.key}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
