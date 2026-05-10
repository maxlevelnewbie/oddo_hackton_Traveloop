import { PublicItinerary } from "@/components/shared/public-itinerary";

type SharedPageProps = {
  params: Promise<{ publicId: string }>;
};

export default async function SharedPage({ params }: Readonly<SharedPageProps>) {
  const { publicId } = await params;
  return <PublicItinerary publicId={publicId} />;
}

