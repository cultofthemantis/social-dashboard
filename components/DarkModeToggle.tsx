"use client";

import { useEffect, useState } from "react";

export default function Toggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex items-center gap-3 mt-4 md:mt-0">
      <span className="text-sm text-[var(--subtext)]">Dark Mode</span>

      <button
        onClick={() => setDark(!dark)}
        className={`w-12 h-6 rounded-full flex items-center p-1 transition ${
          dark
            ? "bg-gradient-to-r from-[hsl(210,78%,56%)] to-[hsl(146,68%,55%)]"
            : "bg-[hsl(230,22%,74%)]"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition ${
            dark ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}