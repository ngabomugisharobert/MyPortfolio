import { site } from "../content/site";
import { Section } from "./Section";

export function Leadership() {
  return (
    <Section
      id="leadership"
      kicker={site.leadership.kicker}
      title={site.leadership.title}
      subtitle={site.leadership.subtitle}
      tone="mist"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.leadership.cards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-line bg-white p-7 shadow-[0_20px_50px_-35px_rgba(9,28,41,0.45)]"
          >
            <h3 className="text-xl font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
