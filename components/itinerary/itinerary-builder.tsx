"use client";

const stops = [
  { city: "Paris", dates: "12 Jun - 15 Jun", days: "3 Days" },
  { city: "Amsterdam", dates: "15 Jun - 18 Jun", days: "3 Days" },
  { city: "Brussels", dates: "18 Jun - 20 Jun", days: "2 Days" },
];

const dayPlan = [
  { time: "08:00", activity: "Breakfast at local cafe", category: "Food", cost: "$20" },
  { time: "10:00", activity: "Eiffel Tower", category: "Culture", cost: "$35" },
  { time: "14:00", activity: "Seine Cruise", category: "Nature", cost: "$42" },
  { time: "19:00", activity: "Dinner", category: "Food", cost: "$50" },
];

const suggestions = [
  { name: "Louvre Museum", rating: "4.8", duration: "2h", cost: "$24" },
  { name: "Montmartre Walk", rating: "4.7", duration: "1.5h", cost: "$0" },
  { name: "Night Food Tour", rating: "4.9", duration: "3h", cost: "$65" },
];

export function ItineraryBuilder() {
  return (
    <section className="grid gap-4 xl:grid-cols-[280px_1fr_320px]">
      <aside className="glass-card rounded-3xl p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-white">City Stops</h3>
          <button type="button" className="rounded-lg bg-blue-600 px-2.5 py-1 text-xs text-white">
            Add
          </button>
        </div>
        <div className="space-y-3">
          {stops.map((stop) => (
            <article key={stop.city} className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-3">
              <p className="font-medium text-slate-100">{stop.city}</p>
              <p className="text-xs text-slate-400">{stop.dates}</p>
              <p className="mt-1 text-xs text-emerald-300">{stop.days}</p>
            </article>
          ))}
        </div>
      </aside>

      <main className="glass-card rounded-3xl p-4">
        <h3 className="mb-4 text-xl font-semibold text-white">Day 1 Timeline</h3>
        <div className="space-y-3">
          {dayPlan.map((entry) => (
            <article key={`${entry.time}-${entry.activity}`} className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-blue-300">{entry.time}</p>
                <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-200">{entry.category}</span>
              </div>
              <p className="mt-1 font-medium text-white">{entry.activity}</p>
              <p className="mt-1 text-xs text-slate-400">Estimated: {entry.cost}</p>
            </article>
          ))}
        </div>
      </main>

      <aside className="glass-card rounded-3xl p-4">
        <h3 className="mb-4 font-semibold text-white">Activity Suggestions</h3>
        <div className="mb-3 flex flex-wrap gap-2">
          {["Adventure", "Food", "Nature", "Nightlife", "Culture"].map((tag) => (
            <span key={tag} className="chip rounded-full px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-3">
          {suggestions.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-700/70 bg-slate-900/70 p-3">
              <p className="font-medium text-white">{item.name}</p>
              <p className="mt-1 text-xs text-slate-400">
                {item.duration} · {item.cost} · ⭐ {item.rating}
              </p>
              <button type="button" className="mt-2 rounded-lg bg-emerald-600 px-2.5 py-1 text-xs text-white">
                Add
              </button>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}

