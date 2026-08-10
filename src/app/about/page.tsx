import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Advantage } from "@/components/Advantage";
import { PageHero } from "@/components/PageHero";
import { placeImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us — Taxi Service in Ujjain",
  description:
    "About Divine Taxi Ujjain — local taxi service for Mahakaleshwar darshan, Indore airport transfers, railway pickups, and Madhya Pradesh outstation tours.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Divine Taxi | Taxi Service in Ujjain",
    description:
      "Local drivers, clean cars, and reliable taxi service across Ujjain and Madhya Pradesh.",
    url: "/about",
    images: [
      {
        url: placeImages.mahakaleshwar,
        alt: "Mahakaleshwar Temple served by Divine Taxi in Ujjain",
      },
    ],
  },
};

const coverage = [
  {
    title: "Temple & darshan taxis",
    detail:
      "Mahakaleshwar, Harsiddhi, Kal Bhairav, Mangalnath, Chintaman Ganesh, and Shipra ghat visits with patient waits for aarti timings.",
  },
  {
    title: "Airport & station transfers",
    detail:
      "On-time pickups from Ujjain Junction and comfortable transfers to Devi Ahilya Bai Holkar Airport, Indore.",
  },
  {
    title: "City & outstation travel",
    detail:
      "Hotel transfers, local sightseeing, and outstation cabs to Omkareshwar, Maheshwar, Mandu, Bhopal, Dewas, and more.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Taxi service rooted in Ujjain."
        detail="Divine Taxi is a local cab and tour partner helping pilgrims and travellers move safely across the sacred city and beyond."
        image={placeImages.mahakaleshwar}
        imageAlt="Mahakaleshwar Temple in Ujjain where Divine Taxi provides cab service"
      />

      <section className="bg-foam px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
              Our story
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-yeseva)] text-3xl text-ink sm:text-4xl">
              Built for pilgrims and everyday travellers in Ujjain.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Divine Taxi provides reliable taxi service in Ujjain for temple
                darshan, hotel transfers, railway station pickups, and Indore
                airport rides. We understand early Bhasma Aarti timings, festival
                traffic near Mahakal, and the quiet lanes that save precious
                minutes during busy pilgrimage days.
              </p>
              <p>
                Whether you are visiting for a day of Mahakaleshwar darshan or
                planning a longer Madhya Pradesh journey, our local drivers help
                you travel comfortably with clear fares and simple WhatsApp
                booking.
              </p>
              <p>
                Families, solo pilgrims, and tour groups trust us for clean
                vehicles — from sedans and Innova-class cars to tempo travellers
                for larger parties.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden bg-stone">
            <Image
              src={placeImages.omkareshwar}
              alt="Omkareshwar temple day trip available with Divine Taxi from Ujjain"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
            What we provide
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-yeseva)] text-3xl text-ink sm:text-4xl">
            Complete taxi coverage across Ujjain and nearby destinations.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft">
            From first light at the temples to late-night station arrivals, our
            cabs stay ready for your plan.
          </p>

          <ul className="mt-12 grid gap-8 border-t border-stone pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {coverage.map((item) => (
              <li key={item.title}>
                <h3 className="font-[family-name:var(--font-yeseva)] text-xl text-temple">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-foam px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
            How booking works
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-yeseva)] text-3xl text-ink sm:text-4xl">
            Simple steps to book your Ujjain cab.
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Share your trip",
                detail:
                  "Tell us pickup point, destination, date, and preferred vehicle on call or WhatsApp.",
              },
              {
                step: "02",
                title: "Confirm fare & car",
                detail:
                  "We confirm availability, route plan, and transparent pricing before you travel.",
              },
              {
                step: "03",
                title: "Ride with ease",
                detail:
                  "Your driver arrives on time — ready for temple waits, airport runs, or outstation tours.",
              },
            ].map((item) => (
              <li key={item.step} className="border-t border-stone pt-6">
                <span className="font-[family-name:var(--font-yeseva)] text-2xl text-saffron-deep">
                  {item.step}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-yeseva)] text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>

          <Link
            href="/contact"
            className="mt-12 inline-flex bg-temple px-6 py-3 text-sm font-semibold tracking-wide text-foam transition-colors hover:bg-saffron-deep"
          >
            Book a taxi in Ujjain
          </Link>
        </div>
      </section>

      <Advantage />
    </>
  );
}
