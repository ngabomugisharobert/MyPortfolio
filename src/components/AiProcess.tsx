import { site } from "../content/site";
import { Section } from "./Section";

export function AiProcess() {
  return (
    <Section
      id="process"
      kicker={site.ai.kicker}
      title={site.ai.title}
      subtitle={site.ai.subtitle}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {site.ai.cards.map((card) => (
          <article key={card.title} className="border-l-2 border-indigo-500 pl-6">
            <h3 className="text-xl font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
          </article>
        ))}
      </div>
      <ul className="mt-12 flex flex-wrap gap-2">
        {site.ai.chips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-line bg-mist px-4 py-2 text-sm font-medium text-ink"
          >
            {chip}
          </li>
        ))}
      </ul>
    </Section>
  );
}
