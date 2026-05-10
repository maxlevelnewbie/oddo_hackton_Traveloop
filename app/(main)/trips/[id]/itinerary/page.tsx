import { PageHeader } from "@/components/common/page-header";
import { ItineraryBuilder } from "@/components/itinerary/itinerary-builder";

type TripItineraryPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TripItineraryPage({ params }: Readonly<TripItineraryPageProps>) {
  const { id } = await params;

  return (
    <div>
      <PageHeader title={`Itinerary: ${id}`} description="Plan day-wise activities with city stops and smart suggestions." />
      <ItineraryBuilder />
    </div>
  );
}

