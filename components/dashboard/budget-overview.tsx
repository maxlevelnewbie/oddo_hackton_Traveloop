"use client";

import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const spendByCategory = [
  { name: "Flights", value: 1600, color: "#2563eb" },
  { name: "Hotels", value: 1200, color: "#4f46e5" },
  { name: "Activities", value: 780, color: "#10b981" },
  { name: "Food", value: 520, color: "#0ea5e9" },
];

const monthlySpend = [
  { month: "Jan", amount: 800 },
  { month: "Feb", amount: 1250 },
  { month: "Mar", amount: 980 },
  { month: "Apr", amount: 1540 },
  { month: "May", amount: 1320 },
];

export function BudgetOverview() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="glass-card rounded-3xl p-4">
        <h3 className="mb-3 text-lg font-semibold text-white">Expense Split</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={spendByCategory} dataKey="value" nameKey="name" innerRadius={50} outerRadius={85} paddingAngle={4}>
                {spendByCategory.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="glass-card rounded-3xl p-4">
        <h3 className="mb-3 text-lg font-semibold text-white">Monthly Spending</h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlySpend}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="amount" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </section>
  );
}

