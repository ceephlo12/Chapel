import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { packages } from "@/lib/data/packages";
import { siteContent } from "@/lib/data/siteContent";

export default function PackagesPage() {
  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Wedding package browsing
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-7xl">
            Packages with a New Orleans sense of occasion.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            Browse the ceremony style first, then choose a preferred date and time. Final timing,
            package fit, and ceremony details are confirmed by the chapel team.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-2">
        {packages.map((weddingPackage, index) => (
          <article
            key={weddingPackage.slug}
            className={`border border-brass/20 bg-ivory p-7 shadow-[0_18px_60px_rgba(43,29,23,0.07)] md:p-9 ${
              index === 1 ? "lg:row-span-2 lg:flex lg:flex-col lg:justify-between" : ""
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                  {weddingPackage.eyebrow}
                </p>
                <p className="text-sm italic text-ink-soft">{weddingPackage.tone}</p>
              </div>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl">{weddingPackage.name}</h2>
              <p className="mt-5 text-base leading-8 text-ink-soft">
                {weddingPackage.description}
              </p>
            </div>

            <div className="mt-8 grid gap-6 border-t border-brass/20 pt-7 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                  Guest feeling
                </p>
                <p className="mt-2 text-sm leading-6 text-espresso">{weddingPackage.guestRange}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                  Best for
                </p>
                <p className="mt-2 text-sm leading-6 text-espresso">{weddingPackage.idealFor}</p>
              </div>
            </div>

            <ul className="mt-7 grid gap-3 text-sm leading-6 text-ink-soft">
              {weddingPackage.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 border-t border-brass/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-espresso">{weddingPackage.startingFrom}</p>
              <Link
                href={`/availability?package=${weddingPackage.slug}`}
                className="text-sm font-semibold uppercase tracking-[0.14em] text-brass transition hover:text-espresso"
              >
                Check mock dates
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-7xl border-y border-brass/20 py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="font-serif text-4xl">Need the chapel team to guide the choice?</h2>
            <p className="mt-4 text-base leading-8 text-ink-soft">
              The white-glove path lets couples describe the celebration and request help choosing
              a package, timing, and guest flow before the chapel confirms anything.
            </p>
            <p className="mt-4 text-sm font-medium text-espresso">{siteContent.scheduleNote}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <ButtonLink href="/availability">View Availability</ButtonLink>
            <ButtonLink href="/save-the-date" variant="secondary">
              Ask for Help
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
