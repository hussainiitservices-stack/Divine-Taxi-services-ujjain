import type { Metadata } from "next";
import { BookRide } from "@/components/BookRide";
import { PageHero } from "@/components/PageHero";
import { PhoneLink } from "@/components/PhoneLink";
import { PHONE_DISPLAY, whatsappLink } from "@/lib/contact";
import { placeImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact & Book Taxi in Ujjain",
  description:
    `Contact Divine Taxi Ujjain at ${PHONE_DISPLAY} for cab booking, airport transfers, and tour packages. Call or WhatsApp for local and outstation rides.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Divine Taxi Ujjain",
    description: `Call ${PHONE_DISPLAY} or WhatsApp to book taxis for darshan, airport, and Madhya Pradesh tours.`,
    url: "/contact",
    images: [
      {
        url: placeImages.boreshwar,
        alt: "Contact Divine Taxi for Ujjain temple and tour cab booking",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your Ujjain taxi."
        detail={`Call ${PHONE_DISPLAY}, WhatsApp, or send the form — we confirm cars and timings quickly.`}
        image={placeImages.boreshwar}
        imageAlt="Book Divine Taxi for Ujjain temple visits and outstation travel"
      />

      <section className="border-b border-stone bg-mist px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          <div className="border border-saffron bg-saffron/15 px-5 py-4 sm:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              Official phone
            </h2>
            <PhoneLink
              className="mt-2 inline-block font-[family-name:var(--font-yeseva)] text-2xl tracking-wide text-temple hover:text-saffron-deep sm:text-3xl"
              numberClassName="tracking-wide"
            />
            <p className="mt-2 text-sm text-ink-soft">
              Divine Taxi Service Ujjain booking line
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              WhatsApp
            </h2>
            <a
              href={whatsappLink("Namaste Divine Taxi, I want to book a cab.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-lg font-semibold text-ink hover:text-temple"
            >
              Chat now
            </a>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              Service area
            </h2>
            <p className="mt-2 text-lg font-semibold text-ink">
              Ujjain · Indore · MP tours
            </p>
          </div>
        </div>
      </section>

      <BookRide />
    </>
  );
}
