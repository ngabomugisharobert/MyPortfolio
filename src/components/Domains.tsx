import { site } from "../content/site";
import { Section } from "./Section";

export function Domains() {
  return (
    <Section
      id="domains"
      kicker={site.domains.kicker}
      title={site.domains.title}
      tone="mist"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.domains.items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl bg-white p-7 ring-1 ring-line"
          >
            <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
