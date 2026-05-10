import { CalendarClock, CircleDollarSign, MapPinned, PlaneTakeoff } from "lucide-react";

const stats = [
  { label: "Total Trips", value: "12", icon: PlaneTakeoff, trend: "+2 this month" },
  { label: "Cities Visited", value: "29", icon: MapPinned, trend: "+4 recently" },
  { label: "Budget Used", value: "$8,450", icon: CircleDollarSign, trend: "68% of yearly goal" },
  { label: "Upcoming Trips", value: "3", icon: CalendarClock, trend: "Next in 12 days" },
];

export function StatsCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map(({ label, value, icon: Icon, trend }) => (
        <article key={label} className="glass-card rounded-3xl p-5 transition hover:scale-[1.01]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-1 text-2xl font-semibold text-white">{value}</p>
            </div>
            <Icon className="h-5 w-5 text-blue-300" />
          </div>
          <p className="mt-3 text-xs text-slate-400">{trend}</p>
        </article>
      ))}
    </section>
  );
}

