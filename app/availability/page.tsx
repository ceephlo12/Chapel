import Link from "next/link";
import {
  BookingSummaryCard,
  CTAButton,
  GoldDivider,
  SectionEyebrow
} from "@/components/editorial";
import { availabilityDays } from "@/lib/data/availability";
import { eventsForDate } from "@/lib/data/cityEvents";
import { packages } from "@/lib/data/packages";
import { siteContent } from "@/lib/data/siteContent";

type AvailabilityPageProps = {
  searchParams: Promise<{ package?: string }>;
};

const statusStyles = {
  open: "bg-sage text-ivory",
  limited: "bg-champagne text-soft-black",
  "request-only": "bg-dusty-rose text-soft-black",
  unavailable: "bg-espresso/15 text-espresso"
};

const statusLabels = {
  open: "Mock Open",
  limited: "Mock Limited",
  "request-only": "Request Only",
  unavailable: "Unavailable"
};

export default async function AvailabilityPage({ searchParams }: AvailabilityPageProps) {
  const params = await searchParams;
  const selectedPackage = packages.find((item) => item.slug === params.package);
  const highlightedDay = availabilityDays.find((day) => day.status !== "unavailable") ?? availabilityDays[0];
  const highlightedEvents = eventsForDate(highlightedDay.date);

  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <SectionEyebrow>Soft hold request calendar</SectionEyebrow>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-7xl">
            Choose a date to request, not reserve.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
            {siteContent.requestNote} This concept calendar is presentation-only and does not show
            real chapel availability.
          </p>
        </div>
        <BookingSummaryCard
          title={selectedPackage ? selectedPackage.name : "Help me choose"}
          rows={[
            { label: "Preferred package", value: selectedPackage?.name ?? "Choose after the date" },
            { label: "Chapel address", value: siteContent.address },
            { label: "Request language", value: "Soft hold request only" }
          ]}
          note={siteContent.scheduleNote}
        />
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[1fr_340px]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {availabilityDays.map((day) => {
            const requestHref = `/save-the-date?date=${day.date}${
              selectedPackage ? `&package=${selectedPackage.slug}` : ""
            }`;

            return (
              <article key={day.date} className="paper-panel flex min-h-[330px] flex-col rounded-[6px] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionEyebrow>Preferred date</SectionEyebrow>
                    <h2 className="mt-3 font-serif text-4xl">{day.label}</h2>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${statusStyles[day.status]}`}
                  >
                    {statusLabels[day.status]}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-ink-soft">{day.note}</p>

                <GoldDivider className="my-6" />

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                  Times shown
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {day.times.length > 0 ? (
                    day.times.map((time, index) => (
                      <span
                        key={time}
                        className={`border px-3 py-2 text-sm ${
                          index === 0 && day.status !== "unavailable"
                            ? "border-espresso bg-espresso text-ivory"
                            : "border-brass/30 bg-cream/50 text-espresso"
                        }`}
                      >
                        {time}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm italic text-ink-soft">No request windows shown</span>
                  )}
                </div>

                <div className="mt-auto pt-7">
                  {day.status === "unavailable" ? (
                    <CTAButton href="/save-the-date" variant="secondary" className="w-full">
                      Ask for Alternatives
                    </CTAButton>
                  ) : (
                    <Link
                      href={requestHref}
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-champagne/70 bg-espresso px-5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition hover:bg-soft-black"
                    >
                      Request This Date
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <aside className="paper-panel rounded-[6px] p-6 lg:sticky lg:top-28">
          <SectionEyebrow>Make a Weekend of It</SectionEyebrow>
          <h2 className="mt-3 font-serif text-4xl">Your ceremony is only the beginning.</h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            See what your guests can experience while they are in New Orleans.
          </p>
          <GoldDivider className="my-6" />
          {highlightedEvents.length > 0 ? (
            highlightedEvents.map((event) => (
              <div key={event.name} className="mt-5 text-sm leading-6 text-ink-soft">
                <p className="font-medium text-espresso">{event.name}</p>
                <p>{event.summary}</p>
                <p className="mt-1 italic">{event.planningTip}</p>
              </div>
            ))
          ) : (
            <p className="text-sm leading-7 text-ink-soft">
              No mock city events are attached to the featured date.
            </p>
          )}
          <p className="mt-6 border-t border-brass/20 pt-5 text-sm leading-7 text-ink-soft">
            {siteContent.availabilityNote}
          </p>
        </aside>
      </section>
    </main>
  );
}
