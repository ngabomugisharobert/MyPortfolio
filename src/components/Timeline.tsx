import { site } from "../content/site";
import { Section } from "./Section";

export function Timeline() {
  return (
    <Section
      id="career"
      kicker={site.timeline.kicker}
      title={site.timeline.title}
      subtitle={site.timeline.subtitle}
    >
      <ol className="relative border-l border-line md:ml-28">
        {site.timeline.roles.map((role) => (
          <li key={role.title} className="relative mb-12 last:mb-0 pl-8 md:pl-12">
            <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-indigo-500" />
            <p className="font-mono mb-1 text-xs font-medium tracking-[0.18em] text-indigo-500 uppercase md:absolute md:top-0 md:-left-28 md:w-20 md:text-right">
              {role.year}
            </p>
            <p className="text-sm text-muted">{role.dates}</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight">{role.title}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted">{role.body}</p>
          </li>
        ))}
      </ol>
      <ul className="mt-12 space-y-2 text-muted">
        {site.timeline.education.map((item) => (
          <li key={item} className="max-w-2xl text-sm md:text-base">
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
