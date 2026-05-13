import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { WeddingPackage } from "@/lib/data/packages";

type CTAButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  type?: "button" | "submit";
};

const buttonBase =
  "inline-flex min-h-12 items-center justify-center rounded-[3px] px-6 text-center text-sm font-semibold uppercase tracking-[0.14em] transition focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:ring-offset-2";

const buttonStyles = {
  primary:
    "border border-champagne/70 bg-espresso text-ivory shadow-[0_12px_30px_rgba(36,28,23,0.18)] hover:border-champagne hover:bg-soft-black hover:shadow-[0_14px_38px_rgba(185,151,91,0.22)]",
  secondary: "border border-brass/60 bg-ivory/55 text-espresso hover:bg-parchment/50",
  light: "border border-ivory/70 bg-ivory/10 text-ivory hover:bg-ivory/20"
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button"
}: CTAButtonProps) {
  const classes = `${buttonBase} ${buttonStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

export function SectionEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-champagne" : "text-brass"
      }`}
    >
      {children}
    </p>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-gradient-to-r from-transparent via-champagne to-transparent ${className}`} />;
}

type EditorialHeroProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  image: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

export function EditorialHero({
  eyebrow,
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta
}: EditorialHeroProps) {
  return (
    <section className="relative min-h-[82vh] overflow-hidden md:min-h-[86vh]">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="image-vignette absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-end px-5 pb-12 pt-24 md:min-h-[86vh] md:px-8 md:pb-16">
        <div className="max-w-3xl text-ivory">
          <SectionEyebrow light>{eyebrow}</SectionEyebrow>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.94] md:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-cream md:text-xl md:leading-9">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            <CTAButton href={secondaryCta.href} variant="light">
              {secondaryCta.label}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

type FeatureSplitProps = {
  eyebrow: string;
  title: string;
  body: ReactNode;
  image: string;
  imageAlt: string;
  cta?: { href: string; label: string };
  reverse?: boolean;
  dark?: boolean;
};

export function FeatureSplit({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  cta,
  reverse = false,
  dark = false
}: FeatureSplitProps) {
  return (
    <section className={`${dark ? "bg-espresso text-ivory" : ""} px-5 py-16 md:px-8 md:py-24`}>
      <div
        className={`mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center ${
          reverse ? "md:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div>
          <SectionEyebrow light={dark}>{eyebrow}</SectionEyebrow>
          <h2 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">{title}</h2>
          <div className={`mt-6 space-y-5 text-base leading-8 ${dark ? "text-cream/85" : "text-ink-soft"}`}>
            {body}
          </div>
          {cta ? (
            <CTAButton href={cta.href} variant={dark ? "light" : "secondary"} className="mt-8">
              {cta.label}
            </CTAButton>
          ) : null}
        </div>
        <div className="ornamental-frame relative aspect-[4/5] overflow-hidden rounded-[6px] shadow-[0_24px_70px_rgba(36,28,23,0.16)]">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export function MagazineQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mx-auto max-w-4xl px-5 py-14 text-center md:px-8">
      <GoldDivider className="mx-auto max-w-xs" />
      <p className="mx-auto mt-8 font-serif text-4xl leading-tight text-espresso md:text-5xl">
        {children}
      </p>
      <GoldDivider className="mx-auto mt-8 max-w-xs" />
    </blockquote>
  );
}

export function PackageCard({
  weddingPackage,
  image,
  featured = false
}: {
  weddingPackage: WeddingPackage;
  image: string;
  featured?: boolean;
}) {
  return (
    <article className={`paper-panel overflow-hidden rounded-[6px] ${featured ? "md:row-span-2" : ""}`}>
      <div className="relative aspect-[4/3]">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <div className="p-6 md:p-7">
        <SectionEyebrow>{weddingPackage.eyebrow}</SectionEyebrow>
        <h3 className="mt-3 font-serif text-4xl leading-tight">{weddingPackage.name}</h3>
        <p className="mt-4 text-sm leading-7 text-ink-soft">{weddingPackage.description}</p>
        <GoldDivider className="my-6" />
        <p className="text-sm">
          <span className="font-semibold text-espresso">Best for: </span>
          <span className="text-ink-soft">{weddingPackage.idealFor}</span>
        </p>
        <ul className="mt-5 grid gap-2 text-sm leading-6 text-ink-soft">
          {weddingPackage.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-espresso">{weddingPackage.startingFrom}</p>
          <CTAButton href={`/availability?package=${weddingPackage.slug}`} variant="secondary" className="px-4">
            Check Availability
          </CTAButton>
        </div>
      </div>
    </article>
  );
}

export function BookingSummaryCard({
  title,
  rows,
  note
}: {
  title: string;
  rows: { label: string; value: string }[];
  note?: string;
}) {
  return (
    <aside className="paper-panel rounded-[6px] p-6">
      <SectionEyebrow>Soft hold summary</SectionEyebrow>
      <h2 className="mt-3 font-serif text-3xl">{title}</h2>
      <dl className="mt-5 space-y-4 text-sm leading-6">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="font-semibold text-espresso">{row.label}</dt>
            <dd className="text-ink-soft">{row.value}</dd>
          </div>
        ))}
      </dl>
      {note ? <p className="mt-5 border-t border-brass/20 pt-5 text-sm leading-6 text-ink-soft">{note}</p> : null}
    </aside>
  );
}
