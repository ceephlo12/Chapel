import Image from "next/image";
import { HelpInquiryModal } from "@/components/ChapelTeamHelp";
import {
  CTAButton,
  EditorialHero,
  FeatureSplit,
  GoldDivider,
  MagazineQuote,
  PackageCard,
  SectionEyebrow
} from "@/components/editorial";
import { availabilityDays } from "@/lib/data/availability";
import { cityEvents } from "@/lib/data/cityEvents";
import { packages } from "@/lib/data/packages";
import { siteContent } from "@/lib/data/siteContent";

export default function HomePage() {
  const featuredPackages = packages.slice(0, 3);
  const featuredDate = availabilityDays.find((day) => day.status === "open") ?? availabilityDays[0];

  return (
    <main>
      <EditorialHero
        eyebrow="French Quarter Wedding Chapel"
        title={
          <>
            A French Quarter Wedding,
            <br />
            Beautifully Held.
          </>
        }
        subtitle="Intimate ceremonies, elopements, carriage weddings, and second line celebrations in the heart of New Orleans."
        image="/images/fqwc-hero-concept.png"
        primaryCta={{ href: "/packages", label: "View the Ceremony Packages" }}
        secondaryCta={{ href: "/availability", label: "Request a Date" }}
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <SectionEyebrow>Intimate by design</SectionEyebrow>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              A chapel experience with the warmth of New Orleans and the polish of an editorial
              wedding weekend.
            </h2>
          </div>
          <div className="paper-panel rounded-[6px] p-7 md:p-9">
            <p className="text-lg leading-9 text-ink-soft">{siteContent.intro}</p>
            <GoldDivider className="my-7" />
            <div className="grid gap-5 text-sm leading-7 text-ink-soft sm:grid-cols-2">
              <p>{siteContent.guestNote}</p>
              <p>{siteContent.availabilityNote}</p>
            </div>
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="The setting"
        title="Old New Orleans atmosphere, held close."
        image="/images/courtyard-feature.png"
        imageAlt="Editorial concept image of a French Quarter courtyard wedding setting"
        body={
          <>
            <p>
              Think antique iron balconies, warm plaster, candlelit chapel moments, and a ceremony
              path that keeps the day personal rather than overproduced.
            </p>
            <p>
              This concept positions the chapel as a refined destination for couples who want a
              small wedding with a strong sense of place.
            </p>
          </>
        }
        cta={{ href: "/availability", label: "Request Your Date" }}
      />

      <section className="bg-cream/70 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>Ceremony packages</SectionEyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Choose the feeling first.
              </h2>
            </div>
            <CTAButton href="/packages" variant="secondary">
              View the Ceremony Packages
            </CTAButton>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPackages.map((weddingPackage) => (
              <PackageCard
                key={weddingPackage.slug}
                weddingPackage={weddingPackage}
                image={weddingPackage.image}
                helpAction={
                  <HelpInquiryModal
                    className="w-full px-4"
                    preferredPackage={weddingPackage.slug}
                  />
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <SectionEyebrow>Availability request</SectionEyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                A refined path to ask for the date.
              </h2>
            <p className="mt-6 text-base leading-8 text-ink-soft">{siteContent.requestNote}</p>
            <CTAButton href="/availability" className="mt-8">
              Request a Date
            </CTAButton>
          </div>
          <div className="paper-panel rounded-[6px] p-7">
            <SectionEyebrow>Featured mock date</SectionEyebrow>
            <p className="mt-4 font-serif text-4xl sm:text-5xl">{featuredDate.label}</p>
            <p className="mt-4 text-sm leading-7 text-ink-soft">{featuredDate.note}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredDate.times.map((time) => (
                <span key={time} className="border border-brass/30 bg-cream/45 px-3 py-2 text-sm">
                  {time}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureSplit
        eyebrow="Make a Weekend of It"
        title="Your ceremony is only the beginning."
        image="/images/second-line-feature.png"
        imageAlt="Editorial concept image of a New Orleans second line wedding detail"
        reverse
        body={
          <>
            <p>
              See what your guests can experience while they are in New Orleans, from French
              Quarter music blocks to gallery weekends and riverfront holiday activity.
            </p>
            <div className="grid gap-3">
              {cityEvents.slice(0, 3).map((event) => (
                <div key={event.title} className="border-l border-champagne pl-4">
                  <p className="font-medium text-espresso">{event.title}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-brass">
                    {event.type}
                    {event.location ? ` / ${event.location}` : ""}
                  </p>
                  <p className="mt-1 text-sm leading-6">{event.planningTip}</p>
                </div>
              ))}
            </div>
          </>
        }
        cta={{ href: "/availability", label: "Plan the Weekend" }}
      />

      <FeatureSplit
        eyebrow="Teresa Newman Photography"
        title="Photography with a Sense of Place"
        image="/images/photography-feature.png"
        imageAlt="Editorial concept image of wedding photography details"
        dark
        body={<p>{siteContent.photographer}</p>}
        cta={{ href: "/save-the-date", label: "Ask About Photography" }}
      />

      <FeatureSplit
        eyebrow="Chapel legacy"
        title="Honoring Rev. Tony's Legacy"
        image="/images/legacy-feature.png"
        imageAlt="Warm editorial still life suggesting chapel legacy"
        reverse
        body={<p>{siteContent.legacy}</p>}
      />

      <MagazineQuote>
        Ceremony times are available by request and confirmed by the chapel team.
      </MagazineQuote>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[6px] bg-espresso text-ivory">
          <div className="grid md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <SectionEyebrow light>Begin the request</SectionEyebrow>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Tell the chapel team what you are hoping for.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-cream/85">
                Share a date, ceremony style, and guest count. The chapel team follows up to review
                availability, timing, and the right package fit.
              </p>
              <CTAButton href="/save-the-date" variant="light" className="mt-8">
                Ask the Chapel Team
              </CTAButton>
            </div>
            <div className="relative min-h-72">
              <Image src="/images/carriage-feature.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
