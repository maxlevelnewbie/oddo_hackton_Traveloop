"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Account created (UI demo).");
  };

  return (
    <div className="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8">
      <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Traveloop</p>
      <h1 className="mt-2 text-2xl font-semibold text-white">Create your account</h1>
      <p className="mt-1 text-sm text-slate-400">Start planning your next adventure in minutes.</p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block">
          <span className="mb-1 block text-xs text-slate-400">Full name</span>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-400">Email</span>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-blue-500"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-400">Password</span>
          <div className="flex items-center rounded-xl border border-slate-700/70 bg-slate-900/70 px-3">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="w-full bg-transparent py-2.5 text-sm text-slate-200 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-slate-400 hover:text-slate-200"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-400">Confirm password</span>
          <input
            type="password"
            required
            className="w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-blue-500"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-linear-to-r from-emerald-600 to-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
        >
          Create account
        </button>
      </form>

      <p className="mt-5 text-sm text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-300 hover:text-blue-200">
          Login
        </Link>
      </p>
    </div>
  );
}

