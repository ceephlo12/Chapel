import { CTAButton, GoldDivider, PackageCard, SectionEyebrow } from "@/components/editorial";
import { packages } from "@/lib/data/packages";
import { siteContent } from "@/lib/data/siteContent";

export default function PackagesPage() {
  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <section className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div className="max-w-3xl">
          <SectionEyebrow>Wedding package browsing</SectionEyebrow>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-7xl">
            Ceremony packages with a New Orleans sense of occasion.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            Each package is presented as a ceremony mood, not a transaction. Browse the feeling,
            then request a date for chapel-team review.
          </p>
        </div>
        <div className="paper-panel rounded-[6px] p-6">
          <SectionEyebrow>Planning note</SectionEyebrow>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            {siteContent.scheduleNote} The chapel team confirms final timing, package fit, and
            ceremony details.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-2">
        {packages.map((weddingPackage, index) => (
          <PackageCard
            key={weddingPackage.slug}
            weddingPackage={weddingPackage}
            image={weddingPackage.image}
            featured={index === 1}
          />
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-7xl border-y border-brass/20 py-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <SectionEyebrow>White-glove path</SectionEyebrow>
            <h2 className="mt-3 font-serif text-4xl">Need the chapel team to guide the choice?</h2>
            <p className="mt-4 text-base leading-8 text-ink-soft">
              Describe the celebration, guest flow, photography priorities, carriage ideas, or
              second line hopes before the chapel confirms anything.
            </p>
            <GoldDivider className="mt-7 max-w-lg" />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <CTAButton href="/availability">Request Your Date</CTAButton>
            <CTAButton href="/save-the-date" variant="secondary">
              Ask the Chapel Team
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
