// src/components/TodoItem.js
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../todosSlice";

export default function TodoItem({ todo, disableControls }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.title);
  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  function commitEdit() {
    const v = value.trim();
    if (v && v !== todo.title) {
      dispatch(editTodo({ id: todo.id, title: v }));
    }
    setEditing(false);
    setValue(v || todo.title);
  }

  return (
    <div className="flex items-start gap-3 p-3 sm:p-4">
      {!disableControls ? (
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="mt-1 h-5 w-5 rounded"
          aria-label={todo.completed ? "Mark as active" : "Mark as completed"}
        />
      ) : (
        <div className="mt-1 h-5 w-5" aria-hidden />
      )}

      <div className="flex-1">
        {editing ? (
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitEdit();
              if (e.key === "Escape") {
                setEditing(false);
                setValue(todo.title);
              }
            }}
            onBlur={commitEdit}
            className="w-full rounded-lg bg-gray-100 dark:bg-gray-700 px-2 py-1"
          />
        ) : (
          <p
            className={`leading-6 ${
              todo.completed ? "line-through opacity-60" : ""
            }`}
          >
            {todo.title}
          </p>
        )}

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {new Date(todo.createdAt).toLocaleString()}
        </p>
      </div>

      <div className="flex items-center gap-2">
        {!disableControls && !todo.completed && !editing && (
          <button
            onClick={() => setEditing(true)}
            className="text-base font-medium px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            Edit
          </button>
        )}
        {!editing && (
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-base font-medium px-2 py-1 rounded-lg bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
