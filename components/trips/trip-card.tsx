import Link from "next/link";

export type TripCardData = {
  id: string;
  title: string;
  range: string;
  cities: number;
  budget: string;
  status: string;
  image?: string;
};

export function TripCard({ id, title, range, cities, budget, status, image }: Readonly<TripCardData>) {
  return (
    <article className="glass-card group overflow-hidden rounded-3xl">
      <div
        className="h-44 overflow-hidden bg-linear-to-r from-blue-600/40 via-indigo-600/30 to-emerald-500/30 transition duration-300 group-hover:scale-105"
        style={
          image
            ? {
                backgroundImage: `linear-gradient(120deg, rgba(37, 99, 235, 0.5), rgba(79, 70, 229, 0.4), rgba(16, 185, 129, 0.4)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-xs text-slate-400">{range}</p>
        <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
          <span>{cities} Cities</span>
          <span>{budget}</span>
        </div>
        <p className="mt-2 text-xs text-emerald-300">{status}</p>
        <div className="mt-4 flex gap-2">
          <Link href={`/trips/${id}`} className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white">
            View
          </Link>
          <Link
            href={`/trips/${id}/edit`}
            className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200"
          >
            Edit
          </Link>
          <button type="button" className="rounded-lg border border-red-400/30 px-3 py-1.5 text-xs text-red-200">
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

