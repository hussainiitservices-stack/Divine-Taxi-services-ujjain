import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  variant?: "header" | "footer";
};

export function SiteLogo({ variant = "header" }: SiteLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center rounded-md bg-white/95 px-1.5 py-1 ${
        isFooter ? "px-2 py-1.5" : ""
      }`}
      aria-label="Divine Taxi Service home"
    >
      <Image
        src="/logo.png"
        alt="Divine Taxi Service logo — car and temple icon for Ujjain taxi booking"
        width={isFooter ? 88 : 64}
        height={isFooter ? 96 : 70}
        className={
          isFooter
            ? "h-11 w-auto object-contain sm:h-12"
            : "h-8 w-auto object-contain sm:h-9"
        }
        priority={variant === "header"}
      />
    </Link>
  );
}
