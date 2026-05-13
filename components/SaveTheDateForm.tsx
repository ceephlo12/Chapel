"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { availabilityDays } from "@/lib/data/availability";
import { packages } from "@/lib/data/packages";

type SaveTheDateFormProps = {
  defaultDate: string;
  defaultPackage: string;
};

export function SaveTheDateForm({ defaultDate, defaultPackage }: SaveTheDateFormProps) {
  const router = useRouter();
  const [date, setDate] = useState(defaultDate);
  const [packageSlug, setPackageSlug] = useState(defaultPackage);
  const [helpPath, setHelpPath] = useState("team-guidance");

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const coupleName = String(form.get("coupleName") || "Your request");
    const selectedPackage = packages.find((item) => item.slug === packageSlug);
    const selectedDate = availabilityDays.find((day) => day.date === date);
    const params = new URLSearchParams({
      couple: coupleName,
      date: selectedDate?.label ?? "Preferred date to be reviewed",
      package: selectedPackage?.name ?? "Help me choose",
      help: helpPath
    });

    router.push(`/confirmation?${params.toString()}`);
  }

  return (
    <form onSubmit={submitRequest} className="border border-brass/20 bg-ivory p-6 shadow-[0_20px_70px_rgba(43,29,23,0.08)] md:p-9">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-espresso">
          Couple name
          <input
            name="coupleName"
            required
            placeholder="Avery & Jordan"
            className="min-h-12 border border-brass/30 bg-cream/40 px-4 text-base outline-none focus:border-brass"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-espresso">
          Email
          <input
            name="email"
            type="email"
            required
            placeholder="name@example.com"
            className="min-h-12 border border-brass/30 bg-cream/40 px-4 text-base outline-none focus:border-brass"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-espresso">
          Phone
          <input
            name="phone"
            placeholder="(504) 555-0133"
            className="min-h-12 border border-brass/30 bg-cream/40 px-4 text-base outline-none focus:border-brass"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-espresso">
          Estimated guests
          <input
            name="guestCount"
            type="number"
            min="0"
            max="60"
            placeholder="24"
            className="min-h-12 border border-brass/30 bg-cream/40 px-4 text-base outline-none focus:border-brass"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-espresso">
          Preferred date
          <select
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="min-h-12 border border-brass/30 bg-cream/40 px-4 text-base outline-none focus:border-brass"
          >
            <option value="">Help me choose</option>
            {availabilityDays.map((day) => (
              <option key={day.date} value={day.date}>
                {day.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-espresso">
          Ceremony package
          <select
            name="package"
            value={packageSlug}
            onChange={(event) => setPackageSlug(event.target.value)}
            className="min-h-12 border border-brass/30 bg-cream/40 px-4 text-base outline-none focus:border-brass"
          >
            <option value="">Help me choose</option>
            {packages.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-8 border border-brass/20 p-5">
        <legend className="px-2 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
          Preferred planning path
        </legend>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ["team-guidance", "Ask the chapel team", "Best when you want white-glove help."],
            ["date-first", "Date request first", "Best when timing matters most."],
            ["package-first", "Package fit first", "Best when ceremony style is the priority."]
          ].map(([value, label, description]) => (
            <label
              key={value}
              className={`cursor-pointer border p-4 transition ${
                helpPath === value
                  ? "border-brass bg-champagne/20"
                  : "border-brass/20 bg-cream/30 hover:bg-cream/60"
              }`}
            >
              <input
                type="radio"
                name="helpPath"
                value={value}
                checked={helpPath === value}
                onChange={() => setHelpPath(value)}
                className="sr-only"
              />
              <span className="block font-serif text-2xl">{label}</span>
              <span className="mt-2 block text-sm leading-6 text-ink-soft">{description}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-7 grid gap-2 text-sm font-medium text-espresso">
        Celebration notes
        <textarea
          name="notes"
          rows={6}
          placeholder="Tell us about ceremony style, guest flow, second line interest, carriage ideas, or timing concerns."
          className="border border-brass/30 bg-cream/40 px-4 py-3 text-base outline-none focus:border-brass"
        />
      </label>

      <div className="mt-8 flex flex-col gap-4 border-t border-brass/20 pt-7 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-ink-soft">
          No payment is collected in this mockup. This does not confirm a booking.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-espresso px-6 text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition hover:bg-[#3a2921]"
        >
          Send Soft Hold Request
        </button>
      </div>
    </form>
  );
}
