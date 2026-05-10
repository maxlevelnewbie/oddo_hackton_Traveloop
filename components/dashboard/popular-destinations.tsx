const destinations = [
  { city: "Tokyo", country: "Japan", budget: "$120/day", score: "9.4" },
  { city: "Rome", country: "Italy", budget: "$95/day", score: "9.1" },
  { city: "Barcelona", country: "Spain", budget: "$110/day", score: "8.9" },
  { city: "Bangkok", country: "Thailand", budget: "$70/day", score: "9.0" },
];

export function PopularDestinations() {
  return (
    <section>
      <h3 className="mb-4 text-xl font-semibold text-white">Popular Destinations</h3>
      <div className="flex snap-x gap-4 overflow-x-auto pb-2">
        {destinations.map((d) => (
          <article key={d.city} className="glass-card min-w-64 snap-start rounded-2xl p-4">
            <div className="mb-3 h-24 rounded-xl bg-linear-to-r from-indigo-600/30 to-blue-600/30" />
            <p className="text-lg font-semibold text-white">{d.city}</p>
            <p className="text-sm text-slate-400">{d.country}</p>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
              <span>{d.budget}</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">{d.score}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

