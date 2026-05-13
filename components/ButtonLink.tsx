import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-espresso text-ivory hover:bg-[#3a2921]"
      : "border border-brass/50 text-espresso hover:bg-champagne/20";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-sm px-6 text-sm font-semibold uppercase tracking-[0.14em] transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
