import { site } from "../content/site";

export function Intro() {
  return (
    <section className="bg-page text-navy" aria-labelledby="intro-heading">
      <div className="mx-auto w-11/12 max-w-6xl py-20 md:py-28">
        <h2
          id="intro-heading"
          className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
        >
          {site.intro.lines[0]}
          <br />
          {site.intro.lines[1]}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {site.intro.body}
        </p>
        <p className="font-mono mt-6 text-sm font-medium tracking-wide text-indigo-500">
          {site.intro.location}
        </p>
        <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
