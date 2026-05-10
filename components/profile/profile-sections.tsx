import Image from 'next/image';

export function ProfileSections() {
  return (
    <section className="grid gap-4">
      <article className="glass-card rounded-2xl p-5">
        <h2 className="font-semibold text-white">Avatar Upload</h2>
        <div className="mt-3 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-linear-to-r from-blue-500 to-emerald-500 text-lg font-bold text-white">
            <Image src="/images/three_cat.jpg" alt="Avatar" width={64} height={64} className="h-full w-full object-cover" />
          </div>
          <button type="button" className="rounded-xl border border-slate-700 px-3 py-1.5 text-sm text-slate-200">
            Change Avatar
          </button>
        </div>
      </article>

      <article className="glass-card rounded-2xl p-5">
        <h2 className="font-semibold text-white">Personal Info</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <input className="rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm outline-none" defaultValue="Kunal" />
          <input className="rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm outline-none" defaultValue="kunal@example.com" />
        </div>
      </article>

      <article className="glass-card rounded-2xl p-5">
        <h2 className="font-semibold text-white">Preferences</h2>
        <p className="mt-2 text-sm text-slate-400">Currency, travel style, and notification settings.</p>
      </article>

      <article className="glass-card rounded-2xl border border-red-500/30 p-5">
        <h2 className="font-semibold text-red-200">Danger Zone</h2>
        <button type="button" className="mt-3 rounded-xl bg-red-600/80 px-3 py-2 text-sm text-white">
          Delete Account
        </button>
      </article>
    </section>
  );
}

