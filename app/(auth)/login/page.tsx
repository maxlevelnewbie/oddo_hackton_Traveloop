"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Logged in (UI demo).");
  };

  return (
    <div className="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8">
      <p className="text-sm uppercase tracking-[0.25em] text-blue-300">Traveloop</p>
      <h1 className="mt-2 text-2xl font-semibold text-white">Welcome back</h1>
      <p className="mt-1 text-sm text-slate-400">Sign in to manage your upcoming adventures.</p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block">
          <span className="mb-1 block text-xs text-slate-400">Email</span>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-blue-500"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-400">Password</span>
          <div className="flex items-center rounded-xl border border-slate-700/70 bg-slate-900/70 px-3">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="w-full bg-transparent py-2.5 text-sm text-slate-200 outline-none"
              placeholder="••••••••"
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

        <label className="flex items-center gap-2 text-sm text-slate-300">
          <input type="checkbox" />
          Remember me
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
        >
          Login
        </button>
      </form>

      <div className="my-4 flex items-center gap-2">
        <div className="h-px flex-1 bg-slate-700" />
        <p className="text-xs text-slate-500">OR</p>
        <div className="h-px flex-1 bg-slate-700" />
      </div>

      <button type="button" className="w-full rounded-xl border border-slate-700 px-4 py-2.5 text-sm text-slate-200">
        Continue with Google
      </button>

      <p className="mt-5 text-sm text-slate-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-300 hover:text-blue-200">
          Sign up
        </Link>
      </p>
    </div>
  );
}

