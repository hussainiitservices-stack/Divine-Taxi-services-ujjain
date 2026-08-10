import type { Metadata } from "next";
import { BookRide } from "@/components/BookRide";
import { PageHero } from "@/components/PageHero";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/contact";
import { placeImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact & Book Taxi in Ujjain",
  description:
    "Contact Divine Taxi Ujjain for cab booking, airport transfers, and tour packages via call or WhatsApp. Fast confirmation for local and outstation rides.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Divine Taxi Ujjain",
    description:
      "Call or WhatsApp to book taxis for darshan, airport, and Madhya Pradesh tours.",
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
        detail="Call, WhatsApp, or send the form — we confirm cars and timings quickly."
        image={placeImages.boreshwar}
        imageAlt="Book Divine Taxi for Ujjain temple visits and outstation travel"
      />

      <section className="border-b border-stone bg-mist px-5 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              Call
            </h2>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-block break-all text-lg font-semibold text-ink hover:text-temple"
            >
              {PHONE_DISPLAY}
            </a>
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
