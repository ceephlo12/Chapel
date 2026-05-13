import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { packages } from "@/lib/data/packages";
import { siteContent } from "@/lib/data/siteContent";

export default function HomePage() {
  const featuredPackages = packages.slice(0, 3);

  return (
    <main>
      <section className="relative min-h-[calc(100vh-88px)] overflow-hidden">
        <Image
          src="/images/fqwc-hero-concept.png"
          alt="Editorial concept image of a romantic French Quarter chapel courtyard"
          fill
          priority
          className="object-cover"
        />
        <div className="image-vignette absolute inset-0" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-end px-5 pb-14 pt-24 md:px-8 md:pb-20">
          <div className="max-w-3xl text-ivory">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
              333 Burgundy Street, New Orleans
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.9] md:text-8xl">
              French Quarter Wedding Chapel
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-cream">
              A refined concept for an intimate French Quarter wedding chapel, shaped for small
              ceremonies, soft holds, second lines, carriage moments, and a more graceful planning
              path.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/packages">Browse Packages</ButtonLink>
              <ButtonLink href="/availability" variant="secondary" className="border-ivory/60 text-ivory hover:bg-ivory/10">
                View Mock Availability
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
              Intimate by design
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">
              A chapel experience that feels cared for, not commercial.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-ink-soft">
            <p>{siteContent.intro}</p>
            <p>{siteContent.guestNote}</p>
            <p className="font-medium text-espresso">{siteContent.availabilityNote}</p>
          </div>
        </div>
      </section>

      <section className="bg-cream/70 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
                Wedding packages
              </p>
              <h2 className="mt-4 font-serif text-5xl">Choose the feeling first.</h2>
            </div>
            <ButtonLink href="/packages" variant="secondary">
              See All Packages
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredPackages.map((weddingPackage) => (
              <article
                key={weddingPackage.slug}
                className="border border-brass/20 bg-ivory p-7 shadow-[0_18px_60px_rgba(43,29,23,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                  {weddingPackage.eyebrow}
                </p>
                <h3 className="mt-4 font-serif text-3xl">{weddingPackage.name}</h3>
                <p className="mt-4 min-h-24 text-sm leading-7 text-ink-soft">
                  {weddingPackage.description}
                </p>
                <p className="mt-6 border-t border-brass/20 pt-5 text-sm font-medium text-espresso">
                  {weddingPackage.guestRange}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
              White-glove help
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-tight">
              Not sure what fits? Ask the chapel team to shape the request.
            </h2>
          </div>
          <div className="border-l border-brass/30 pl-6 text-sm leading-7 text-ink-soft">
            <p>
              Couples can request help with ceremony timing, guest flow, city-event awareness,
              package fit, and photo-friendly pacing before a final booking is confirmed.
            </p>
            <ButtonLink href="/save-the-date" className="mt-6 w-full">
              Start a Soft Hold Request
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-espresso px-5 py-16 text-ivory md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              Photography note
            </p>
            <h2 className="mt-4 font-serif text-5xl">Teresa Newman Photography</h2>
          </div>
          <p className="text-base leading-8 text-cream/80">
            {siteContent.photographer} In the finished site, this section can become a tasteful
            gallery or preferred photography note using chapel-approved imagery.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Chapel legacy
          </p>
          <h2 className="mt-4 font-serif text-4xl">Remembering Rev. Tony</h2>
          <p className="mt-5 text-base leading-8 text-ink-soft">{siteContent.legacy}</p>
        </div>
      </section>
    </main>
  );
}
