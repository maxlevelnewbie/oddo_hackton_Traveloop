"use client";

import { Bell, Plus, Search } from "lucide-react";

export function TopNavbar() {
  return (
    <header className="glass-card sticky top-4 z-20 mx-4 mt-4 flex h-16 items-center justify-between rounded-2xl px-4 sm:px-6">
      <div className="flex w-full max-w-md items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          aria-label="Search trips"
          placeholder="Search trips, cities, activities..."
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
      </div>

      <div className="ml-4 flex items-center gap-3">
        <button
          type="button"
          className="hidden items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm font-medium text-white transition hover:brightness-110 sm:flex"
        >
          <Plus className="h-4 w-4" />
          Quick Create
        </button>
        <button type="button" className="rounded-xl border border-slate-700/70 p-2 text-slate-300 hover:bg-slate-800/80">
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-r from-emerald-500 to-blue-500 text-sm font-bold text-white">
          K
        </div>
      </div>
    </header>
  );
}

