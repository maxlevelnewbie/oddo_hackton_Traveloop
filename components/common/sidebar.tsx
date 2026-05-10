import Link from "next/link";
import { Compass, LayoutDashboard, LogOut, NotebookPen, PackageCheck, UserCircle2, Wallet } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/trips", label: "My Trips", icon: Compass },
  { href: "/trips", label: "Budget", icon: Wallet },
  { href: "/trips", label: "Notes", icon: NotebookPen },
  { href: "/trips", label: "Packing", icon: PackageCheck },
  { href: "/profile", label: "Profile", icon: UserCircle2 },
];

export function Sidebar() {
  return (
    <aside className="glass-card sticky top-0 hidden h-screen w-72 flex-col rounded-r-3xl p-6 lg:flex">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-rrom-blue-500 to-emerald-500 font-bold text-white">
          T
        </div>
        <div>
          <p className="text-lg font-semibold text-white">Traveloop</p>
          <p className="text-xs text-slate-400">Travel planner</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={`${href}-${label}`}
            href={href}
            className="group flex items-center gap-3 rounded-xl px-3 py-2 text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
          >
            <Icon className="h-4 w-4 text-slate-400 transition group-hover:text-blue-300" />
            <span className="text-sm">{label}</span>
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="mt-6 flex items-center gap-2 rounded-xl border border-slate-700/70 px-3 py-2 text-sm text-slate-300 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-200"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </aside>
  );
}

