import { BudgetOverview } from "@/components/dashboard/budget-overview";
import { PopularDestinations } from "@/components/dashboard/popular-destinations";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentTrips } from "@/components/dashboard/recent-trips";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <WelcomeBanner />
      <StatsCards />
      <RecentTrips />
      <div className="grid gap-4 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <BudgetOverview />
        </div>
        <QuickActions />
      </div>
      <PopularDestinations />
    </div>
  );
}

