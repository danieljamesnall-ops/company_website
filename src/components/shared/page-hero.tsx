export function PageHero({
  badge,
  title,
  description,
}: {
  badge?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="gradient-mesh border-b border-white/5 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <span className="inline-block rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            {badge}
          </span>
        )}
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
