const industries = [
  "Startups",
  "Retail",
  "Healthcare",
  "Finance",
  "Real Estate",
  "Professional Services",
  "E-Commerce",
  "Non-Profits",
];

export function TrustBar() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
          Trusted by businesses across industries
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-white/5 bg-navy-900/40 px-4 py-2 text-sm text-slate-400"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
