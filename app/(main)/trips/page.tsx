import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { TripCard, type TripCardData } from "@/components/trips/trip-card";

const tripList: TripCardData[] = [
  { id: "paris-2026", title: "Paris + Amsterdam", range: "12 Jun - 20 Jun", cities: 2, budget: "$2,400", status: "Planning in progress" },
  { id: "tokyo-2026", title: "Tokyo Explorer", range: "01 Aug - 07 Aug", cities: 1, budget: "$1,850", status: "Booked" },
  { id: "bali-2026", title: "Bali Workcation", range: "15 Sep - 25 Sep", cities: 3, budget: "$2,100", status: "Draft" },
];

export default function TripsPage() {
  return (
    <div>
      <PageHeader
        title="My Trips"
        description="Switch between grid and list views to manage your itinerary quickly."
        action={
          <Link href="/trips/new" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">
            New Trip
          </Link>
        }
      />

      <div className="mb-4 inline-flex rounded-xl border border-slate-700/70 bg-slate-900/70 p-1 text-sm">
        <button type="button" className="rounded-lg bg-slate-700 px-3 py-1.5 text-slate-100">
          Grid
        </button>
        <button type="button" className="rounded-lg px-3 py-1.5 text-slate-300">
          List
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tripList.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </div>
    </div>
  );
}

