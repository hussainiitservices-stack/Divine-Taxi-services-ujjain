import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/contact";
import { navLinks } from "@/lib/nav";

const offerings = [
  "Airport transfer",
  "Local taxi",
  "Ujjain darshan",
  "Outstation cabs",
  "MP heritage tours",
];

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-foam sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <SiteLogo variant="footer" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foam/70">
            Trusted taxi and tour partner in Ujjain for darshan, airport rides,
            and Madhya Pradesh journeys.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-foam/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-saffron">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-foam/80">
            {offerings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron">
            Need assistance?
          </p>
          <p className="mt-4 text-sm text-foam/70">
            Reach out anytime — we are happy to help plan your ride.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-3 inline-block text-lg font-semibold text-foam transition hover:text-saffron"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappLink(
              "Namaste Divine Taxi, I need assistance with a booking.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm font-medium text-foam/80 underline-offset-4 transition hover:text-saffron hover:underline"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-foam/15 pt-6 text-sm text-foam/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Divine Taxi Ujjain</p>
        <p>
          Designed and developed by{" "}
          <a
            href="https://hussainiitservices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foam/75 underline-offset-4 transition hover:text-saffron hover:underline"
          >
            hussainiitservices.com
          </a>
        </p>
      </div>
    </footer>
  );
}
