import { Sidebar } from "@/components/common/sidebar";
import { TopNavbar } from "@/components/common/top-navbar";

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen lg:flex">
      <Sidebar />
      <div className="flex-1">
        <TopNavbar />
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}

