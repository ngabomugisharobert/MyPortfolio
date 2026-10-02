import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "page" | "mist" | "navy";
};

const tones = {
  page: "bg-page text-navy",
  mist: "bg-mist text-navy",
  navy: "bg-navy text-white",
} as const;

export function Section({
  id,
  kicker,
  title,
  subtitle,
  children,
  tone = "page",
}: SectionProps) {
  const subtitleClass =
    tone === "navy" ? "text-white/70" : "text-muted";

  return (
    <section id={id} className={tones[tone]}>
      <div className="mx-auto w-11/12 max-w-6xl py-20 md:py-28">
        <p
          className={`font-mono text-xs font-medium uppercase tracking-[0.22em] ${
            tone === "navy" ? "text-indigo-300" : "text-indigo-500"
          }`}
        >
          {kicker}
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${subtitleClass}`}>
            {subtitle}
          </p>
        ) : null}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
