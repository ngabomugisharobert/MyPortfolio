import { site } from "../content/site";

export function Nav() {
  return (
    <header className="font-sans fixed top-0 z-40 w-full bg-navy">
      <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between gap-3 py-3">
        <a
          href="#header"
          className="shrink-0 cursor-pointer text-2xl font-bold text-white md:text-3xl"
        >
          <span>
            {site.nav.logo}
            <span className="ml-2 inline-block h-3 w-3 rounded-full bg-red-400" />
          </span>
        </a>
        <nav
          className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-xs text-white sm:text-sm md:gap-x-4 md:text-xl"
          aria-label="Primary"
        >
          {site.nav.links.map((link) => (
            <a key={link.to} href={`#${link.to}`} className="cursor-pointer">
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
