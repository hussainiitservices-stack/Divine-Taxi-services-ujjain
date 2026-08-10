import type { Metadata } from "next";
import Link from "next/link";
import { Cars } from "@/components/Cars";
import { PageHero } from "@/components/PageHero";
import { Routes } from "@/components/Routes";
import { Services } from "@/components/Services";
import { placeImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Taxi Services in Ujjain",
  description:
    "Airport taxi, local Ujjain cabs, outstation tours, VIP darshan support, and ritual travel with Divine Taxi in Ujjain.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Taxi Services in Ujjain | Divine Taxi",
    description:
      "Book airport transfers, local darshan taxis, and outstation cabs across Madhya Pradesh.",
    url: "/services",
    images: [
      {
        url: placeImages.mahakaleshwar,
        alt: "Divine Taxi services near Mahakaleshwar Temple Ujjain",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Taxi services for every Ujjain plan."
        detail="Airport runs, city darshan, outstation packages, and special temple timings — booked in minutes."
        image={placeImages.mahakaleshwar}
        imageAlt="Mahakaleshwar Temple in Ujjain served by Divine Taxi cab service"
      />
      <Services />
      <Cars />
      <Routes />
      <section className="bg-mist px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-ink-soft">
            Not sure which service fits? Tell us your dates and we will suggest
            the right car.
          </p>
          <Link
            href="/contact"
            className="inline-flex w-fit bg-temple px-6 py-3 text-sm font-semibold tracking-wide text-foam transition-colors hover:bg-saffron-deep"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </>
  );
}
