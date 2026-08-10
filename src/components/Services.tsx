import Link from "next/link";
import { whatsappLink } from "@/lib/contact";

export const services = [
  {
    title: "Airport taxi",
    detail: "Indore airport pickup and drop with flight-aware timing.",
  },
  {
    title: "Local taxi",
    detail: "City rides for temples, hotels, markets, and station transfers.",
  },
  {
    title: "Outstation cabs",
    detail: "Day trips and overnight travel across Madhya Pradesh.",
  },
  {
    title: "Roundtrip & one-way",
    detail: "Flexible booking for return journeys or single drops.",
  },
  {
    title: "VIP darshan support",
    detail: "Early aarti pickups and patient waits around temple timings.",
  },
  {
    title: "Poojan & rituals",
    detail: "Quiet, respectful transport for family ceremonies and visits.",
  },
];

type ServicesProps = {
  limit?: number;
  showLink?: boolean;
};

export function Services({ limit, showLink = false }: ServicesProps) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
          Services
        </p>
        <h2 className="mt-3 max-w-xl font-[family-name:var(--font-yeseva)] text-2xl text-ink sm:text-4xl">
          Cabs for every kind of Ujjain journey.
        </h2>
        <p className="mt-4 max-w-xl text-ink-soft">
          From airport transfers to temple corridors, book the ride that matches
          your plan.
        </p>

        <ul className="mt-14 grid gap-x-10 gap-y-10 border-t border-stone pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <li key={service.title}>
              <h3 className="font-[family-name:var(--font-yeseva)] text-xl text-temple">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                {service.detail}
              </p>
              <a
                href={whatsappLink(
                  `Namaste, I want to book ${service.title} with Divine Taxi. Please share details.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-river underline-offset-4 transition hover:text-saffron-deep hover:underline"
              >
                Enquire
              </a>
            </li>
          ))}
        </ul>

        {showLink && (
          <Link
            href="/services"
            className="mt-10 inline-block text-sm font-semibold tracking-wide text-temple underline-offset-4 hover:underline"
          >
            See all services →
          </Link>
        )}
      </div>
    </section>
  );
}
