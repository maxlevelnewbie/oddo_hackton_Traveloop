import { BudgetBreakdown } from "@/components/budget/budget-breakdown";
import { PageHeader } from "@/components/common/page-header";

type TripBudgetPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TripBudgetPage({ params }: Readonly<TripBudgetPageProps>) {
  const { id } = await params;

  return (
    <div>
      <PageHeader title={`Budget: ${id}`} description="Track costs with charts, category split, and spending trend." />
      <BudgetBreakdown />
    </div>
  );
}

