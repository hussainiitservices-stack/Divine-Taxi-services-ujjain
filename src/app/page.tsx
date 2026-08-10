import type { Metadata } from "next";
import Link from "next/link";
import { Advantage } from "@/components/Advantage";
import { Cars } from "@/components/Cars";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Routes } from "@/components/Routes";
import { Services } from "@/components/Services";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Divine Taxi | Taxi Service in Ujjain",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Divine Taxi | Taxi Service in Ujjain",
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={3} showLink />
      <Cars />
      <Advantage />
      <Packages showFeatured limit={4} showLink />
      <Routes />

      <section className="bg-river px-5 py-16 text-foam sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-yeseva)] text-2xl sm:text-3xl md:text-4xl">
              Book your Ujjain taxi today
            </h2>
            <p className="mt-3 max-w-md text-foam/75">
              Call or WhatsApp for darshan, airport, and outstation cab
              bookings.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit bg-saffron px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-saffron-deep hover:text-foam"
          >
            Contact & book
          </Link>
        </div>
      </section>
    </>
  );
}
