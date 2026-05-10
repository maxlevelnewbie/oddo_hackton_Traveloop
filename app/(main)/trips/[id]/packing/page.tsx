import { PageHeader } from "@/components/common/page-header";
import { PackingChecklist } from "@/components/packing/packing-checklist";

type TripPackingPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TripPackingPage({ params }: Readonly<TripPackingPageProps>) {
  const { id } = await params;

  return (
    <div>
      <PageHeader title={`Packing: ${id}`} description="Organize essentials by category and track packing progress." />
      <PackingChecklist />
    </div>
  );
}

