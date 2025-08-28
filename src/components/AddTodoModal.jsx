// src/components/AddTodoModal.js
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { addTodo } from "../todosSlice";

export default function AddTodoModal({ open, onClose }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setTitle("");
      setError("");
    }
  }, [open]);

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setError("Title required");
      return;
    }
    dispatch(addTodo(trimmed));
    onClose();
  }

  function onKeyDown(e) {
    if (e.key === "Escape") onClose();
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onKeyDown={onKeyDown}
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-5">
        <h2 className="text-xl font-semibold">Add Todo</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block text-base font-medium mb-1">Title</label>
            <input
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit(e);
                if (e.key === "Escape") onClose();
              }}
              placeholder="e.g., Buy groceries"
              className="w-full rounded-xl bg-gray-100 dark:bg-gray-700 px-3 py-2"
            />
            {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-teal-900 text-white border-teal-600 font-medium"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
