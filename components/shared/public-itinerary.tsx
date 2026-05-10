type PublicItineraryProps = {
  publicId: string;
};

export function PublicItinerary({ publicId }: Readonly<PublicItineraryProps>) {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
      <section className="glass-card rounded-3xl p-8">
        <p className="text-sm text-slate-400">Public Itinerary #{publicId}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Europe Summer Escape</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">Read-only shared trip timeline with destinations, budget, and activities.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm text-white">
            Copy Trip
          </button>
          <button type="button" className="rounded-xl border border-slate-700 px-4 py-2 text-sm text-slate-200">
            Share
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="glass-card rounded-3xl p-5">
          <h2 className="font-semibold text-white">Timeline View</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Day 1: Eiffel Tower · Seine Cruise · Dinner</li>
            <li>Day 2: Louvre · Montmartre · Night Walk</li>
            <li>Day 3: Train to Amsterdam · Canal Tour</li>
          </ul>
        </article>
        <article className="glass-card rounded-3xl p-5">
          <h2 className="font-semibold text-white">Budget Summary</h2>
          <p className="mt-3 text-sm text-slate-300">Estimated total: $4,320 · Daily average: $216</p>
          <div className="mt-4 h-32 rounded-2xl bg-linear-to-r from-emerald-500/20 to-blue-500/20" />
        </article>
      </section>
    </main>
  );
}

