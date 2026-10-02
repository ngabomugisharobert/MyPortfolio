import { site } from "../content/site";
import { Section } from "./Section";

export function Writing() {
  return (
    <Section
      id="writing"
      kicker={site.writing.kicker}
      title={site.writing.title}
    >
      <div className="divide-y divide-line border-y border-line">
        {site.writing.articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between md:gap-10"
          >
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold tracking-tight group-hover:text-indigo-500">
                {article.title}
              </h3>
              <p className="mt-2 text-muted">{article.summary}</p>
            </div>
            <p className="font-mono shrink-0 text-xs text-muted">
              {article.tag}, {article.readTime}
              <span className="ml-2 text-indigo-500" aria-hidden>
                →
              </span>
            </p>
          </a>
        ))}
      </div>
      <a
        href={site.writing.viewAllHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block text-lg font-semibold text-indigo-500 hover:text-indigo-300"
      >
        {site.writing.viewAllLabel} →
      </a>
    </Section>
  );
}
