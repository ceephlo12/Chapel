import Link from "next/link";
import type { ReactNode } from "react";
import { siteContent } from "@/lib/data/siteContent";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/availability", label: "Availability" },
  { href: "/save-the-date", label: "Request Date" }
];

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-brass/20 bg-ivory/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          <Link href="/" className="font-serif text-2xl leading-none text-espresso md:text-3xl">
            {siteContent.name}
          </Link>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft md:gap-x-5 md:text-xs">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-espresso">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-brass/20 bg-espresso px-5 py-12 text-ivory md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <p className="font-serif text-3xl">{siteContent.name}</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-cream/80">{siteContent.intro}</p>
          </div>
          <div className="text-sm leading-6 text-cream/80">
            <p className="font-semibold uppercase tracking-[0.14em] text-champagne">Address</p>
            <p className="mt-2">{siteContent.address}</p>
          </div>
          <div className="text-sm leading-6 text-cream/80">
            <p className="font-semibold uppercase tracking-[0.14em] text-champagne">Explore</p>
            <div className="mt-2 grid gap-1">
              <Link href="/packages" className="hover:text-ivory">Packages</Link>
              <Link href="/availability" className="hover:text-ivory">Availability request</Link>
              <Link href="/save-the-date" className="hover:text-ivory">Ask the chapel team</Link>
            </div>
          </div>
          <div className="text-sm leading-6 text-cream/80">
            <p className="font-semibold uppercase tracking-[0.14em] text-champagne">Concept Note</p>
            <p className="mt-2">{siteContent.disclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
