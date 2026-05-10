import Link from "next/link";

const actions = [
  { href: "/trips/new", label: "Create Trip" },
  { href: "/trips", label: "Open My Trips" },
  { href: "/profile", label: "Update Profile" },
];

export function QuickActions() {
  return (
    <section className="glass-card rounded-3xl p-4">
      <h3 className="mb-3 text-lg font-semibold text-white">Quick Actions</h3>
      <div className="flex flex-wrap gap-2">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 transition hover:border-blue-400/50"
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

