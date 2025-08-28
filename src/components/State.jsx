// src/components/Stats.js
import React from "react";

export default function Stats({ stats }) {
  return (
    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
      <div>
        Total: <span className="font-medium">{stats.total}</span>
      </div>
      <div>
        Completed: <span className="font-medium">{stats.completed}</span>
      </div>
      <div>
        Remaining: <span className="font-medium">{stats.remaining}</span>
      </div>
    </div>
  );
}
