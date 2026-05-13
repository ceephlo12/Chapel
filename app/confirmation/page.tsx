import { BookingSummaryCard, CTAButton, GoldDivider, SectionEyebrow } from "@/components/editorial";
import { siteContent } from "@/lib/data/siteContent";

type ConfirmationPageProps = {
  searchParams: Promise<{
    couple?: string;
    date?: string;
    package?: string;
    help?: string;
  }>;
};

const helpLabels: Record<string, string> = {
  "team-guidance": "Ask the chapel team",
  "date-first": "Date request first",
  "package-first": "Package fit first"
};

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const params = await searchParams;

  return (
    <main className="px-5 py-14 md:px-8 md:py-24">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_390px] lg:items-center">
        <div>
          <SectionEyebrow>Soft hold request received</SectionEyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-none md:text-7xl">
            The chapel team would follow up from here.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
            This confirmation page acknowledges a soft hold request only. It does not confirm a
            real booking, collect payment, or guarantee a ceremony time.
          </p>
          <GoldDivider className="my-9 max-w-xl" />
          <p className="max-w-2xl text-sm leading-7 text-ink-soft">
            {siteContent.availabilityNote} {siteContent.requestNote}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/packages" variant="secondary">
              Review Packages
            </CTAButton>
            <CTAButton href="/">Return Home</CTAButton>
          </div>
        </div>

        <BookingSummaryCard
          title={params.couple ?? "Soft hold request"}
          rows={[
            { label: "Preferred date", value: params.date ?? "To be reviewed" },
            { label: "Package", value: params.package ?? "Help me choose" },
            {
              label: "Planning path",
              value: params.help ? helpLabels[params.help] : "Ask the chapel team"
            },
            { label: "Request type", value: "Availability request" }
          ]}
          note="The next step would be a chapel-team review of timing, details, and package fit."
        />
      </section>
    </main>
  );
}
