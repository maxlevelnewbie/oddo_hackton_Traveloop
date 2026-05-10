import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";

type TripPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TripDetailsPage({ params }: Readonly<TripPageProps>) {
  const { id } = await params;

  return (
    <div>
      <PageHeader title={`Trip: ${id}`} description="Trip overview with quick access to itinerary, budget, notes, and packing." />
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { href: `/trips/${id}/itinerary`, label: "Itinerary Builder" },
          { href: `/trips/${id}/budget`, label: "Budget Breakdown" },
          { href: `/trips/${id}/notes`, label: "Notes / Journal" },
          { href: `/trips/${id}/packing`, label: "Packing Checklist" },
        ].map((item) => (
          <Link key={item.href} href={item.href} className="glass-card rounded-2xl p-5 text-slate-200 transition hover:border-blue-400/40">
            {item.label}
          </Link>
        ))}
      </section>
    </div>
  );
}

