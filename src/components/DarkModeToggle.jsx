import React, { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 rounded-lg bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 transition-colors duration-500 font-medium"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
