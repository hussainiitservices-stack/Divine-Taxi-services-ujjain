import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/contact";
import { placeImages } from "@/lib/images";

const featured = {
  title: "All over Madhya Pradesh tour",
  detail:
    "Explore the heart of India — temples of Ujjain and Omkareshwar, forts of Mandu, wildlife of Kanha, and the heritage of Khajuraho. A complete MP journey tailored for you.",
  message:
    "Namaste Divine Taxi, I am interested in the All over Madhya Pradesh Tour. Please share details.",
  image: placeImages.madhyaPradeshTour,
  alt: "Madhya Pradesh tour package covering Ujjain temples and heritage destinations",
};

export const packages = [
  {
    title: "Airport + Ujjain darshan",
    route: "Indore Airport → Ujjain darshan → Airport",
    image: placeImages.mahakaleshwar,
    alt: "Mahakaleshwar Temple Ujjain darshan package with Indore airport taxi",
    message:
      "Namaste Divine Taxi, I am interested in the Indore Airport + Ujjain Darshan package. Please share details.",
  },
  {
    title: "Airport pickup & drop",
    route: "Ujjain ↔ Indore Airport",
    image: placeImages.indore,
    alt: "Indore airport taxi pickup and drop from Ujjain",
    message:
      "Namaste Divine Taxi, I am interested in Ujjain to Indore Airport transfer. Please share details.",
  },
  {
    title: "Ujjain darshan tour",
    route: "Mahakal, Harsiddhi, Kal Bhairav & more",
    image: placeImages.mahakaleshwar,
    alt: "Ujjain darshan taxi tour covering Mahakaleshwar and major temples",
    message:
      "Namaste Divine Taxi, I am interested in the Ujjain Darshan Tour. Please share details.",
  },
  {
    title: "Boreshwar Mahadev",
    route: "Ujjain → Boreshwar Mahadev",
    image: placeImages.boreshwar,
    alt: "Boreshwar Mahadev temple taxi package from Ujjain",
    message:
      "Namaste Divine Taxi, I am interested in the Ujjain - Boreshwar Mahadev package. Please share details.",
  },
  {
    title: "Omkareshwar day trip",
    route: "Ujjain → Omkareshwar → Ujjain",
    image: placeImages.omkareshwar,
    alt: "Omkareshwar Jyotirlinga day trip cab from Ujjain",
    message:
      "Namaste Divine Taxi, I am interested in the Ujjain–Omkareshwar package. Please share details.",
  },
  {
    title: "Maheshwar tour",
    route: "Ujjain → Maheshwar",
    image: placeImages.maheshwar,
    alt: "Maheshwar Narmada ghats tour taxi from Ujjain",
    message:
      "Namaste Divine Taxi, I am interested in the Ujjain–Maheshwar package. Please share details.",
  },
  {
    title: "Mandu heritage",
    route: "Ujjain → Mandu",
    image: placeImages.mandu,
    alt: "Mandu fort heritage tour cab from Ujjain",
    message:
      "Namaste Divine Taxi, I am interested in the Ujjain–Mandu package. Please share details.",
  },
  {
    title: "Bhopal journey",
    route: "Ujjain → Bhopal",
    image: "/places/bhopal-upper-lake.jpg",
    alt: "Sunset over Upper Lake Bhojtal in Bhopal with boats on the water",
    message:
      "Namaste Divine Taxi, I am interested in the Ujjain–Bhopal package. Please share details.",
  },
  {
    title: "Dewas visit",
    route: "Ujjain → Dewas",
    image: placeImages.dewas,
    alt: "Dewas outstation taxi service from Ujjain",
    message:
      "Namaste Divine Taxi, I am interested in the Ujjain–Dewas package. Please share details.",
  },
  {
    title: "Pachmarhi getaway",
    route: "Ujjain → Pachmarhi",
    image: placeImages.pachmarhi,
    alt: "Pachmarhi hill station cab hire from Ujjain",
    message:
      "Namaste Divine Taxi, I am interested in the Ujjain–Pachmarhi package. Please share details.",
  },
];

type PackagesProps = {
  showFeatured?: boolean;
  limit?: number;
  showLink?: boolean;
};

export function Packages({
  showFeatured = true,
  limit,
  showLink = false,
}: PackagesProps) {
  const items = limit ? packages.slice(0, limit) : packages;

  return (
    <section className="bg-foam">
      {showFeatured && (
        <div className="relative min-h-[28rem] overflow-hidden text-foam">
          <Image
            src={featured.image}
            alt={featured.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(26,34,40,0.88) 0%, rgba(44,74,94,0.72) 55%, rgba(26,34,40,0.55) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto flex min-h-[22rem] max-w-6xl flex-col justify-end px-4 py-12 sm:min-h-[28rem] sm:px-8 sm:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-saffron sm:text-sm">
              Featured package
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-yeseva)] text-2xl sm:text-4xl md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foam/85 sm:text-lg">
              {featured.detail}
            </p>
            <a
              href={whatsappLink(featured.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit bg-saffron px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-saffron-deep hover:text-foam"
            >
              Enquire now
            </a>
          </div>
        </div>
      )}

      <div className="px-4 py-16 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
            Tour packages
          </p>
          <h2 className="mt-3 max-w-xl font-[family-name:var(--font-yeseva)] text-2xl text-ink sm:text-4xl">
            Pilgrimage and outstation packages from Ujjain.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Choose a route, send an enquiry, and we will confirm vehicle and
            timing on WhatsApp.
          </p>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {items.map((pkg) => (
              <li key={pkg.title} className="group border-t border-stone pt-6">
                <div className="relative mb-4 aspect-[16/10] overflow-hidden bg-stone">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-yeseva)] text-xl text-ink transition-colors group-hover:text-temple">
                  {pkg.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft sm:text-base">
                  {pkg.route}
                </p>
                <a
                  href={whatsappLink(pkg.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-semibold tracking-wide text-river underline-offset-4 transition hover:text-saffron-deep hover:underline"
                >
                  Enquire →
                </a>
              </li>
            ))}
          </ul>

          {showLink && (
            <Link
              href="/packages"
              className="mt-10 inline-block text-sm font-semibold tracking-wide text-temple underline-offset-4 hover:underline"
            >
              Browse all packages →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
