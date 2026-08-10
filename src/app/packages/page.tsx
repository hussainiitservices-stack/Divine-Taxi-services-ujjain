import type { Metadata } from "next";
import { Packages } from "@/components/Packages";
import { PageHero } from "@/components/PageHero";
import { placeImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ujjain Tour Packages & Cab Plans",
  description:
    "Book Ujjain darshan, Indore airport packages, Omkareshwar, Maheshwar, Mandu, Bhopal lake trips, and Madhya Pradesh tour packages with Divine Taxi.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Ujjain Tour Packages | Divine Taxi",
    description:
      "Pilgrimage and outstation cab packages from Ujjain across Madhya Pradesh.",
    url: "/packages",
    images: [
      {
        url: placeImages.omkareshwarJyotirlinga,
        alt: "Omkareshwar package available with Divine Taxi from Ujjain",
      },
    ],
  },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Pilgrimage and heritage cab packages."
        detail="Curated routes from Ujjain — temple days, airport + darshan combos, and longer Madhya Pradesh journeys."
        image={placeImages.omkareshwarJyotirlinga}
        imageAlt="Omkareshwar Jyotirlinga temple — popular Divine Taxi day trip from Ujjain"
      />
      <Packages showFeatured />
    </>
  );
}
