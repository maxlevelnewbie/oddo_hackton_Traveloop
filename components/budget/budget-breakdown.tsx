"use client";

import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const categoryData = [
  { name: "Flights", value: 1600 },
  { name: "Hotels", value: 1200 },
  { name: "Activities", value: 780 },
  { name: "Food", value: 520 },
  { name: "Misc", value: 220 },
];

const trendData = [
  { day: "D1", amount: 220 },
  { day: "D2", amount: 280 },
  { day: "D3", amount: 190 },
  { day: "D4", amount: 260 },
  { day: "D5", amount: 315 },
];

export function BudgetBreakdown() {
  return (
    <section className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="glass-card rounded-2xl p-4">
          <p className="text-sm text-slate-400">Total Cost</p>
          <p className="mt-1 text-2xl font-semibold text-white">$4,320</p>
        </article>
        <article className="glass-card rounded-2xl p-4">
          <p className="text-sm text-slate-400">Daily Average</p>
          <p className="mt-1 text-2xl font-semibold text-white">$216</p>
        </article>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <article className="glass-card rounded-2xl p-4 xl:col-span-1">
          <h3 className="mb-2 font-semibold text-white">Category Split</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={80} fill="#2563eb" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>
        <article className="glass-card rounded-2xl p-4 xl:col-span-2">
          <h3 className="mb-2 font-semibold text-white">Trip Spend Trend</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>
      </div>

      <article className="glass-card rounded-2xl p-4">
        <h3 className="mb-2 font-semibold text-white">Expense Categories</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="value" fill="#4f46e5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </section>
  );
}

