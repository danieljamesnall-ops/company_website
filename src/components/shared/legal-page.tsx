import { PageHero } from "@/components/shared/page-hero";

type Section = { title: string; content: string[] };

export function LegalPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHero title={title} description={description} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-white">
                  {i + 1}. {section.title}
                </h2>
                <ul className="mt-4 space-y-2">
                  {section.content.map((line) => (
                    <li
                      key={line}
                      className="text-sm leading-relaxed text-slate-400"
                    >
                      {line.startsWith("–") || line.startsWith("-") ? line : `– ${line}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
