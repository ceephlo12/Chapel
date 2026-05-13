import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { availabilityDays } from "@/lib/data/availability";
import { eventsForDate } from "@/lib/data/cityEvents";
import { packages } from "@/lib/data/packages";
import { siteContent } from "@/lib/data/siteContent";

type AvailabilityPageProps = {
  searchParams: Promise<{ package?: string }>;
};

const statusStyles = {
  open: "bg-moss text-ivory",
  limited: "bg-brass text-ivory",
  "request-only": "bg-rouge text-ivory",
  unavailable: "bg-espresso/20 text-espresso"
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

  return (
    <main className="px-5 py-14 md:px-8 md:py-20">
      <section className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Mock availability calendar
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-none md:text-7xl">
            Choose a date to request, not reserve.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-soft">
            {siteContent.requestNote} This concept calendar is presentation-only and does not show
            real chapel availability.
          </p>
        </div>
        <aside className="border border-brass/20 bg-cream/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
            Package context
          </p>
          <h2 className="mt-3 font-serif text-3xl">
            {selectedPackage ? selectedPackage.name : "Choose after the date"}
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink-soft">
            {selectedPackage
              ? selectedPackage.description
              : "You can browse dates first, then tell the chapel team which ceremony style feels right."}
          </p>
        </aside>
      </section>

      <section className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
        {availabilityDays.map((day) => {
          const cityEvents = eventsForDate(day.date);
          const requestHref = `/save-the-date?date=${day.date}${
            selectedPackage ? `&package=${selectedPackage.slug}` : ""
          }`;

          return (
            <article
              key={day.date}
              className="flex min-h-[360px] flex-col border border-brass/20 bg-ivory p-6 shadow-[0_18px_60px_rgba(43,29,23,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                    Preferred date
                  </p>
                  <h2 className="mt-3 font-serif text-4xl">{day.label}</h2>
                </div>
                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${statusStyles[day.status]}`}>
                  {statusLabels[day.status]}
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-ink-soft">{day.note}</p>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                  Times shown
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {day.times.length > 0 ? (
                    day.times.map((time) => (
                      <span key={time} className="border border-brass/30 px-3 py-2 text-sm">
                        {time}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm italic text-ink-soft">No request windows shown</span>
                  )}
                </div>
              </div>

              <div className="mt-6 border-t border-brass/20 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                  Nearby New Orleans events
                </p>
                {cityEvents.length > 0 ? (
                  cityEvents.map((event) => (
                    <div key={event.name} className="mt-3 text-sm leading-6 text-ink-soft">
                      <p className="font-medium text-espresso">{event.name}</p>
                      <p>{event.summary}</p>
                      <p className="mt-1 italic">{event.planningTip}</p>
                    </div>
                  ))
                ) : (
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    No mock city events are attached to this date.
                  </p>
                )}
              </div>

              <div className="mt-auto pt-7">
                {day.status === "unavailable" ? (
                  <ButtonLink href="/save-the-date" variant="secondary" className="w-full">
                    Ask for Alternatives
                  </ButtonLink>
                ) : (
                  <Link
                    href={requestHref}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-espresso px-5 text-center text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition hover:bg-[#3a2921]"
                  >
                    Request This Date
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </section>

      <section className="mx-auto mt-12 max-w-7xl border-y border-brass/20 py-8 text-sm leading-7 text-ink-soft">
        <p>{siteContent.availabilityNote}</p>
        <p>{siteContent.scheduleNote}</p>
      </section>
    </main>
  );
}
