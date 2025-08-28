import React from "react";

export default function Loader({ label = "Loading" }) {
  return (
    <div className="h-40 grid place-items-center">
      <div className="flex items-center gap-3">
        <span className="inline-block h-4 w-4 rounded-full border-2 border-gray-300 border-t-transparent animate-spin" />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {label}
        </span>
      </div>
    </div>
  );
}
