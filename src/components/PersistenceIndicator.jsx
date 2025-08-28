import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

export default function PersistenceIndicator() {
  const todos = useSelector((state) => state.todos.items);
  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState(false);
  const prevTodos = useRef(null); // store previous state

  useEffect(() => {
    if (prevTodos.current === null) {
      prevTodos.current = todos;
      return;
    }

    if (JSON.stringify(prevTodos.current) !== JSON.stringify(todos)) {
      setStatus("Saved");
      setVisible(true);

      const timer = setTimeout(() => setVisible(false), 1500);
      prevTodos.current = todos; // update reference
      return () => clearTimeout(timer);
    }
  }, [todos]);

  return (
    <div
      className={`text-center text-sm text-green-600 dark:text-green-600 mt-1 h-4 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {status}
    </div>
  );
}
