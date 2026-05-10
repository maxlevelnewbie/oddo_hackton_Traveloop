import { TripCard, type TripCardData } from "@/components/trips/trip-card";

const trips: TripCardData[] = [
  { id: "paris-2026", title: "Paris + Amsterdam", range: "12 Jun - 20 Jun", cities: 2, budget: "$2,400", status: "Planning in progress" },
  { id: "tokyo-2026", title: "Tokyo Explorer", range: "01 Aug - 07 Aug", cities: 1, budget: "$1,850", status: "Booked" },
  { id: "bali-2026", title: "Bali Workcation", range: "15 Sep - 25 Sep", cities: 3, budget: "$2,100", status: "Draft" },
];

export function RecentTrips() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Recent Trips</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {trips.map((trip) => (
          <TripCard key={trip.id} {...trip} />
        ))}
      </div>
    </section>
  );
}

