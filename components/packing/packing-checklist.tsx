"use client";

import { useMemo, useState } from "react";

type PackingItem = {
  id: string;
  label: string;
  done: boolean;
  category: "Clothing" | "Electronics" | "Documents" | "Toiletries";
};

const initialItems: PackingItem[] = [
  { id: "passport", label: "Passport", done: false, category: "Documents" },
  { id: "charger", label: "Charger", done: false, category: "Electronics" },
  { id: "jacket", label: "Jacket", done: true, category: "Clothing" },
  { id: "toothbrush", label: "Toothbrush", done: false, category: "Toiletries" },
];

export function PackingChecklist() {
  const [items, setItems] = useState(initialItems);

  const progress = useMemo(() => {
    const done = items.filter((item) => item.done).length;
    return Math.round((done / items.length) * 100);
  }, [items]);

  const grouped = useMemo(
    () =>
      ["Clothing", "Electronics", "Documents", "Toiletries"].map((category) => ({
        category,
        items: items.filter((item) => item.category === category),
      })),
    [items],
  );

  return (
    <section className="space-y-4">
      <article className="glass-card rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-300">Checklist Progress</p>
          <p className="text-sm font-medium text-emerald-300">{progress}%</p>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full rounded-full bg-linear-to-r from-blue-500 to-emerald-500" style={{ width: `${progress}%` }} />
        </div>
      </article>

      {grouped.map((group) => (
        <article key={group.category} className="glass-card rounded-2xl p-4">
          <h3 className="mb-3 font-semibold text-white">{group.category}</h3>
          <div className="space-y-2">
            {group.items.map((item) => (
              <label key={item.id} className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => {
                    setItems((prev) => prev.map((p) => (p.id === item.id ? { ...p, done: !p.done } : p)));
                  }}
                />
                <span className={item.done ? "text-slate-400 line-through" : "text-slate-200"}>{item.label}</span>
              </label>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

