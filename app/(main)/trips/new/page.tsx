import { PageHeader } from "@/components/common/page-header";

const stepLabels = ["Basic Info", "Destinations", "Activities", "Budget", "Review"];

export default function NewTripPage() {
  return (
    <div>
      <PageHeader title="Create Trip" description="Build your trip in guided steps." />

      <section className="glass-card rounded-3xl p-6">
        <ol className="mb-6 grid gap-2 sm:grid-cols-5">
          {stepLabels.map((label, index) => (
            <li key={label} className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
              {index + 1}. {label}
            </li>
          ))}
        </ol>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-xs text-slate-400">Trip Name</span>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none" />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-slate-400">Cover Image Upload</span>
            <input type="file" className="w-full rounded-xl border border-dashed border-slate-600 bg-slate-900/70 px-3 py-2 text-sm" />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-slate-400">Start Date</span>
            <input type="date" className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none" />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-slate-400">End Date</span>
            <input type="date" className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none" />
          </label>
          <label className="sm:col-span-2">
            <span className="mb-1 block text-xs text-slate-400">Description</span>
            <textarea className="h-28 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none" />
          </label>
        </div>
      </section>
    </div>
  );
}

