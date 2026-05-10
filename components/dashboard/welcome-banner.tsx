"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";

export function WelcomeBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8"
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-linear-to-r from-blue-500/30 to-indigo-500/30 blur-3xl" />
      <p className="text-sm text-slate-400">{format(new Date(), "EEEE, dd MMMM yyyy")}</p>
      <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Ready for your next adventure?</h2>
      <p className="mt-2 max-w-xl text-sm text-slate-300">
        Build your trip timeline, track budget, and keep all travel notes in one place.
      </p>
      <button
        type="button"
        className="mt-6 rounded-xl bg-linear-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
      >
        Plan New Trip
      </button>
    </motion.section>
  );
}

