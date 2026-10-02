import { site } from "../content/site";
import { Section } from "./Section";

export function Mobile() {
  return (
    <Section
      id="mobile"
      kicker={site.mobile.kicker}
      title={site.mobile.title}
      subtitle={site.mobile.subtitle}
      tone="navy"
    >
      <ul className="flex flex-wrap gap-2">
        {site.mobile.chips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
          >
            {chip}
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-3xl text-lg leading-relaxed text-white/80">
        {site.mobile.body}
      </p>
    </Section>
  );
}
