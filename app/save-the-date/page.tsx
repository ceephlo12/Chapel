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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Soft hold request
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-7xl">
            Tell the chapel team what you are hoping for.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-soft">
            This mock form creates an availability request only. The chapel team confirms final
            ceremony timing, package details, and booking steps.
          </p>

          <div className="mt-8 border border-brass/20 bg-cream/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
              Request summary
            </p>
            <dl className="mt-4 space-y-4 text-sm leading-6">
              <div>
                <dt className="font-semibold text-espresso">Preferred date</dt>
                <dd className="text-ink-soft">{selectedDate?.label ?? "Not selected yet"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-espresso">Package</dt>
                <dd className="text-ink-soft">{selectedPackage?.name ?? "Help me choose"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-espresso">Availability note</dt>
                <dd className="text-ink-soft">{siteContent.scheduleNote}</dd>
              </div>
            </dl>
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
