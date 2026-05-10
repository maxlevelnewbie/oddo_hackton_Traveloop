import { PageHeader } from "@/components/common/page-header";

type EditTripPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditTripPage({ params }: Readonly<EditTripPageProps>) {
  const { id } = await params;

  return (
    <div>
      <PageHeader title={`Edit Trip: ${id}`} description="Update basic details, timeline range, and visuals." />
      <section className="glass-card rounded-3xl p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label>
            <span className="mb-1 block text-xs text-slate-400">Trip Name</span>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none" defaultValue="Europe Summer Escape" />
          </label>
          <label>
            <span className="mb-1 block text-xs text-slate-400">Date Range</span>
            <input className="w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 outline-none" defaultValue="12 Jun - 20 Jun" />
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

