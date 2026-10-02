import { site } from "../content/site";
import { useStartAnimation } from "../hooks/useStartAnimation";
import { useTypewriter } from "../hooks/useTypewriter";

export function Header() {
  const animated = useStartAnimation();
  const typed = useTypewriter(site.header.typical, site.header.typicalPauseMs);
  const hidden = "translate-y-10 opacity-0";
  const shown = "translate-y-0 opacity-100";

  return (
    <section
      id="header"
      className="flex min-h-screen items-center justify-center bg-navy"
    >
      <div className="flex flex-col items-center justify-center md:w-10/12 md:flex-row-reverse md:justify-between">
        <div className="w-full md:w-2/5">
          <img
            src={site.header.img}
            alt={`${site.name} - Senior Android Developer`}
            className="mx-auto w-full"
            width={2160}
            height={2777}
          />
        </div>

        <div className="font-dosis w-full text-center md:w-3/5 md:text-left">
          <h2
            className={`text-3xl font-bold text-white transition duration-[2000ms] ease-in-out md:text-4xl lg:text-6xl ${
              animated ? shown : hidden
            }`}
          >
            {site.header.text[0]}
            <br />
            {site.header.text[1]}
          </h2>
          <h1
            className={`text-2xl text-gray-400 transition duration-[3000ms] ease-in-out md:text-4xl ${
              animated ? shown : hidden
            }`}
          >
            {site.header.text[2]}
            <span className="inline-block min-h-[1.2em]">
              {typed}
              <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-[0.08em] bg-gray-400 align-middle">
                &nbsp;
              </span>
            </span>
          </h1>
          <a
            href={site.header.btnHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`animate-hero-bounce mt-10 inline-block rounded-lg bg-indigo-500 px-10 py-3 text-lg uppercase text-white transition duration-[3500ms] ease-in-out hover:bg-indigo-300 ${
              animated ? shown : hidden
            }`}
          >
            {site.header.btnText}
          </a>
        </div>
      </div>
    </section>
  );
}
