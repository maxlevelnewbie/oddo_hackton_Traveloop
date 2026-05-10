type EmptyStateProps = {
  title: string;
  description: string;
  ctaLabel?: string;
};

export function EmptyState({ title, description, ctaLabel }: Readonly<EmptyStateProps>) {
  return (
    <div className="glass-card rounded-3xl p-8 text-center">
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
      {ctaLabel ? (
        <button
          type="button"
          className="mt-5 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white"
        >
          {ctaLabel}
        </button>
      ) : null}
    </div>
  );
}

