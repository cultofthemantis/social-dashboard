"use client";

import Toggle from "./DarkModeToggle";

export default function Header({ total }: { total: number }) {
  return (
    <div className="relative mb-10">
  
      <div className="absolute top-0 left-0 w-full h-48 bg-[var(--top-bg)] rounded-b-3xl -z-10"></div>

      <div className="pt-8 flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Social Media Dashboard
          </h1>
          <p className="text-sm text-[var(--subtext)]">
            Total Followers: {total.toLocaleString()}
          </p>
        </div>

        <Toggle />
      </div>
    </div>
  );
}