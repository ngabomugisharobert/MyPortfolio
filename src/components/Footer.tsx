import { site } from "../content/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex w-11/12 max-w-6xl flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-semibold">{site.footer.name}</p>
          <p className="mt-1 text-sm text-white/60">{site.footer.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${site.footer.email}`}
            className="hover:text-indigo-300"
          >
            {site.footer.email}
          </a>
          {site.footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
