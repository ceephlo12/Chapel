import { HelpInquiryModal } from "@/components/ChapelTeamHelp";
import { BookingSummaryCard, SectionEyebrow } from "@/components/editorial";
import { SaveTheDateForm } from "@/components/SaveTheDateForm";
import { availabilityDays } from "@/lib/data/availability";
import { packages } from "@/lib/data/packages";
import { siteContent } from "@/lib/data/siteContent";

type SaveTheDatePageProps = {
  searchParams: Promise<{ date?: string; package?: string }>;
};

export default async function SaveTheDatePage({ searchParams }: SaveTheDatePageProps) {
  const params = await searchParams;
  const selectedDate = availabilityDays.find((day) => day.date === params.date);
  const selectedPackage = packages.find((item) => item.slug === params.package);

  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <SectionEyebrow>Soft hold request</SectionEyebrow>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-7xl">
            Tell the chapel team what you are hoping for.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            This mock form creates an availability request only. The chapel team confirms final
            ceremony timing, package details, and booking steps.
          </p>

          <div className="mt-8">
            <BookingSummaryCard
              title="Request summary"
              rows={[
                { label: "Preferred date", value: selectedDate?.label ?? "Not selected yet" },
                { label: "Package", value: selectedPackage?.name ?? "Help me choose" },
                { label: "Chapel address", value: siteContent.address }
              ]}
              note={siteContent.scheduleNote}
            />
            <HelpInquiryModal
              className="mt-4 w-full"
              preferredPackage={selectedPackage?.slug ?? ""}
              preferredDate={selectedDate?.date ?? ""}
            />
          </div>
        </aside>

        <SaveTheDateForm
          defaultDate={selectedDate?.date ?? ""}
          defaultPackage={selectedPackage?.slug ?? ""}
        />
      </section>
    </main>
  );
}
