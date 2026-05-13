import { ButtonLink } from "@/components/ButtonLink";
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
      <section className="mx-auto max-w-4xl border border-brass/20 bg-ivory p-7 text-center shadow-[0_22px_80px_rgba(43,29,23,0.09)] md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          Request received in this mockup
        </p>
        <h1 className="mt-5 font-serif text-6xl leading-none md:text-7xl">
          The chapel team would follow up from here.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
          This confirmation page acknowledges a soft hold request only. It does not confirm a real
          booking, collect payment, or guarantee a ceremony time.
        </p>

        <dl className="mx-auto mt-10 grid max-w-2xl gap-4 text-left md:grid-cols-2">
          <div className="border border-brass/20 bg-cream/50 p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">Couple</dt>
            <dd className="mt-2 font-serif text-3xl">{params.couple ?? "Soft hold request"}</dd>
          </div>
          <div className="border border-brass/20 bg-cream/50 p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">Date</dt>
            <dd className="mt-2 font-serif text-3xl">{params.date ?? "To be reviewed"}</dd>
          </div>
          <div className="border border-brass/20 bg-cream/50 p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">Package</dt>
            <dd className="mt-2 font-serif text-3xl">{params.package ?? "Help me choose"}</dd>
          </div>
          <div className="border border-brass/20 bg-cream/50 p-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">Path</dt>
            <dd className="mt-2 font-serif text-3xl">
              {params.help ? helpLabels[params.help] : "Ask the chapel team"}
            </dd>
          </div>
        </dl>

        <div className="editorial-rule mx-auto my-10 max-w-lg" />

        <p className="mx-auto max-w-2xl text-sm leading-7 text-ink-soft">
          {siteContent.availabilityNote} {siteContent.requestNote}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/packages" variant="secondary">
            Review Packages
          </ButtonLink>
          <ButtonLink href="/">Return Home</ButtonLink>
        </div>
      </section>
    </main>
  );
}
