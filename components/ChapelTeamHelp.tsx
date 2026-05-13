"use client";

import { FormEvent, useState } from "react";
import { CTAButton, GoldDivider, SectionEyebrow } from "@/components/editorial";
import { availabilityDays } from "@/lib/data/availability";
import { packages } from "@/lib/data/packages";

type HelpInquiryModalProps = {
  buttonLabel?: string;
  className?: string;
  preferredPackage?: string;
  preferredDate?: string;
  variant?: "primary" | "secondary" | "light";
  helpContext?: string;
};

export function HelpInquiryModal({
  buttonLabel = "Ask the Chapel Team for Help",
  className = "",
  preferredPackage = "",
  preferredDate = "",
  variant = "secondary",
  helpContext = ""
}: HelpInquiryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(preferredPackage);
  const [selectedDate, setSelectedDate] = useState(preferredDate);

  function openModal() {
    setSelectedPackage(preferredPackage);
    setSelectedDate(preferredDate);
    setIsSubmitted(false);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function submitHelpRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      <CTAButton type="button" variant={variant} className={className} onClick={openModal}>
        {buttonLabel}
      </CTAButton>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-soft-black/55 px-4 py-8">
          <div className="paper-panel relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[6px] p-6 pt-12 md:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft"
            >
              Close
            </button>

            {isSubmitted ? (
              <div className="pr-10">
                <SectionEyebrow>Inquiry received in this mockup</SectionEyebrow>
                <h2 className="mt-4 font-serif text-4xl leading-tight">
                  The chapel team will follow up.
                </h2>
                <p className="mt-5 text-base leading-8 text-ink-soft">
                  Prefer a little guidance? The chapel team can help you choose the right ceremony
                  time, guest flow, Teresa Newman Photography interest, and French Quarter weekend
                  experience.
                </p>
                <GoldDivider className="my-7" />
                <p className="text-sm leading-7 text-ink-soft">
                  This is a concierge-style inquiry for the concept mockup. It does not confirm a
                  booking or promise an immediate response.
                </p>
                <div className="mt-8">
                  <CTAButton type="button" onClick={closeModal}>
                    Return to the Page
                  </CTAButton>
                </div>
              </div>
            ) : (
              <form onSubmit={submitHelpRequest} className="pr-10">
                <SectionEyebrow>White-glove help</SectionEyebrow>
                <h2 className="mt-4 font-serif text-4xl leading-tight">
                  Prefer a little guidance?
                </h2>
                <p className="mt-5 text-base leading-8 text-ink-soft">
                  The chapel team can help you choose the right ceremony time, guest flow,
                  Teresa Newman Photography interest, and French Quarter weekend experience.
                </p>

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-espresso">
                    Name
                    <input
                      name="name"
                      required
                      placeholder="Avery Jordan"
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
                    Preferred package if known
                    <select
                      name="package"
                      value={selectedPackage}
                      onChange={(event) => setSelectedPackage(event.target.value)}
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
                  <label className="grid gap-2 text-sm font-medium text-espresso md:col-span-2">
                    Preferred date if known
                    <select
                      name="date"
                      value={selectedDate}
                      onChange={(event) => setSelectedDate(event.target.value)}
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
                </div>

                <label className="mt-7 grid gap-2 text-sm font-medium text-espresso">
                  What do you need help with?
                  <textarea
                    name="needs"
                    required
                    rows={5}
                    placeholder={
                      helpContext ||
                      "Tell the chapel team about timing, guest flow, Teresa Newman Photography interest, or the French Quarter weekend experience."
                    }
                    className="border border-brass/30 bg-cream/40 px-4 py-3 text-base outline-none focus:border-brass"
                  />
                </label>

                <p className="mt-6 text-sm leading-7 text-ink-soft">
                  The chapel team will follow up.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <CTAButton type="submit">Send Help Inquiry</CTAButton>
                  <CTAButton type="button" variant="secondary" onClick={closeModal}>
                    Not Right Now
                  </CTAButton>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
