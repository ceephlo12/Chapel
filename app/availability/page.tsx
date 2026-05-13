import { HelpInquiryModal } from "@/components/ChapelTeamHelp";
import Link from "next/link";
import {
  BookingSummaryCard,
  CTAButton,
  GoldDivider,
  SectionEyebrow
} from "@/components/editorial";
import { availabilityDays } from "@/lib/data/availability";
import { eventsNearDate } from "@/lib/data/cityEvents";
import { packages } from "@/lib/data/packages";
import { siteContent } from "@/lib/data/siteContent";

type AvailabilityPageProps = {
  searchParams: Promise<{ package?: string; date?: string }>;
};

const statusStyles = {
  open: "bg-sage text-ivory",
  limited: "bg-champagne text-soft-black",
  "request-only": "bg-dusty-rose text-soft-black",
  unavailable: "bg-espresso/15 text-espresso"
};

const statusLabels = {
  open: "Request Window",
  limited: "Limited Window",
  "request-only": "Team Review",
  unavailable: "Not Shown"
};

export default async function AvailabilityPage({ searchParams }: AvailabilityPageProps) {
  const params = await searchParams;
  const selectedPackage = packages.find((item) => item.slug === params.package);
  const selectedDay =
    availabilityDays.find((day) => day.date === params.date) ??
    availabilityDays.find((day) => day.status !== "unavailable") ??
    availabilityDays[0];
  const nearbyEvents = eventsNearDate(selectedDay.date, 3);

  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <div>
          <SectionEyebrow>Soft hold request calendar</SectionEyebrow>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-7xl">
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
            const weekendHref = `/availability?date=${day.date}${
              selectedPackage ? `&package=${selectedPackage.slug}` : ""
            }`;
            const requestHref = `/save-the-date?date=${day.date}${
              selectedPackage ? `&package=${selectedPackage.slug}` : ""
            }`;
            const isSelected = day.date === selectedDay.date;

            return (
              <article
                key={day.date}
                className={`paper-panel flex min-h-[350px] flex-col rounded-[6px] p-6 ${
                  isSelected ? "outline outline-2 outline-champagne" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionEyebrow>{isSelected ? "Selected date" : "Preferred date"}</SectionEyebrow>
                    <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{day.label}</h2>
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
                  <Link
                    href={weekendHref}
                    className="mb-3 inline-flex min-h-11 w-full items-center justify-center rounded-[3px] border border-brass/40 bg-ivory/55 px-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-espresso transition hover:bg-parchment/50"
                  >
                    Preview Weekend
                  </Link>
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
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Your ceremony is only the beginning.
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            See what your guests can experience while they&apos;re in New Orleans.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-brass">
            Within 3 days of {selectedDay.label}
          </p>
          <GoldDivider className="my-6" />
          {nearbyEvents.length > 0 ? (
            nearbyEvents.map((event) => (
              <div key={`${event.date}-${event.title}`} className="mt-5 text-sm leading-6 text-ink-soft">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-medium text-espresso">{event.title}</p>
                  <span className="text-xs uppercase tracking-[0.14em] text-brass">{event.type}</span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  {event.date}
                  {event.location ? ` / ${event.location}` : ""}
                </p>
                <p className="mt-2">{event.description}</p>
                <p className="mt-1 italic">{event.planningTip}</p>
                <HelpInquiryModal
                  buttonLabel="Ask the Chapel Team About Guest Planning"
                  className="mt-4 w-full px-4 text-[11px]"
                  preferredPackage={selectedPackage?.slug ?? ""}
                  preferredDate={selectedDay.date}
                  helpContext={`Tell the chapel team what guest planning help you need for ${event.title}, including timing, neighborhood suggestions, or weekend flow.`}
                />
              </div>
            ))
          ) : (
            <p className="text-sm leading-7 text-ink-soft">
              No mock city events are shown within three days of this date.
            </p>
          )}
          <p className="mt-6 border-t border-brass/20 pt-5 text-sm leading-7 text-ink-soft">
            Mock event notes are for presentation only and are not a complete city calendar.
          </p>
          <HelpInquiryModal
            className="mt-6 w-full"
            preferredPackage={selectedPackage?.slug ?? ""}
            preferredDate={selectedDay.date}
          />
        </aside>
      </section>
    </main>
  );
}
