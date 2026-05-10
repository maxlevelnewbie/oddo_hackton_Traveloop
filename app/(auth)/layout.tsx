export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-linear-to-br from-blue-700 via-indigo-700 to-emerald-600 p-10 lg:flex">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mt-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-100/80">Traveloop</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Travel smarter. Plan beautifully.</h1>
          <p className="mt-3 max-w-md text-blue-100">One place for trips, budgets, itinerary, packing, and daily notes.</p>
        </div>
      </section>
      <section className="flex items-center justify-center p-6 sm:p-10">{children}</section>
    </div>
  );
}

