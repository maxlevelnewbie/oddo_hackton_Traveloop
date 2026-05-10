"use client";

import { useState } from "react";

const notesSeed = [
  { id: "n1", title: "Day 1 Ideas", body: "Try local bakery near the Louvre and sunset river walk.", time: "2026-06-12 09:20" },
  { id: "n2", title: "Packing Reminder", body: "Carry travel adapter and printed insurance copy.", time: "2026-06-10 18:02" },
];

export function NotesJournal() {
  const [selectedId, setSelectedId] = useState(notesSeed[0]?.id ?? "");

  const selected = notesSeed.find((note) => note.id === selectedId) ?? notesSeed[0];

  return (
    <section className="grid gap-4 lg:grid-cols-[280px_1fr]">
      <aside className="glass-card rounded-3xl p-4">
        <h3 className="mb-3 font-semibold text-white">Notes</h3>
        <div className="space-y-2">
          {notesSeed.map((note) => (
            <button
              key={note.id}
              type="button"
              onClick={() => setSelectedId(note.id)}
              className={`w-full rounded-xl border px-3 py-2 text-left ${
                selected?.id === note.id ? "border-blue-400/60 bg-blue-500/10" : "border-slate-700/70 bg-slate-900/70"
              }`}
            >
              <p className="text-sm font-medium text-slate-100">{note.title}</p>
              <p className="mt-1 text-xs text-slate-400">{note.time}</p>
            </button>
          ))}
        </div>
      </aside>

      <article className="glass-card rounded-3xl p-4">
        <h3 className="font-semibold text-white">{selected?.title}</h3>
        <p className="mt-1 text-xs text-slate-400">Markdown supported · {selected?.time}</p>
        <textarea
          defaultValue={selected?.body}
          className="mt-4 h-72 w-full rounded-2xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100 outline-none focus:border-blue-500"
        />
      </article>
    </section>
  );
}

