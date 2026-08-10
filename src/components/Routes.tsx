import Image from "next/image";
import { whatsappLink } from "@/lib/contact";
import { placeImages } from "@/lib/images";

const routes = [
  { name: "Ujjain to Airport", note: "Indore · ~55 km" },
  { name: "Ujjain to Indore", note: "City transfers" },
  { name: "Ujjain to Omkareshwar", note: "Day pilgrimage" },
  { name: "Ujjain to Bhopal", note: "Outstation" },
  { name: "Ujjain to Baglamukhi", note: "Temple visit" },
  { name: "Ujjain to Maheshwar", note: "Narmada ghats" },
];

export function Routes() {
  return (
    <section id="routes" className="relative overflow-hidden bg-mist">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-80 lg:min-h-full">
          <Image
            src={placeImages.maheshwar}
            alt="Maheshwar heritage destination on popular Divine Taxi routes from Ujjain"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mist via-mist/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-mist/30 lg:to-mist" />
        </div>

        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 sm:py-20 lg:px-14">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
            Popular routes
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-yeseva)] text-3xl text-ink sm:text-4xl">
            Where pilgrims and travellers go most.
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Local drivers who know festival traffic, ghat lanes, and the quiet
            shortcuts around the old city.
          </p>

          <ul className="mt-8 divide-y divide-stone border-y border-stone">
            {routes.map((route) => (
              <li
                key={route.name}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div>
                  <p className="font-[family-name:var(--font-yeseva)] text-lg text-ink">
                    {route.name}
                  </p>
                  <p className="text-sm text-ink-soft">{route.note}</p>
                </div>
                <a
                  href={whatsappLink(
                    `Namaste Divine Taxi, I want to book ${route.name}. Please share details.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm font-semibold text-river underline-offset-4 transition hover:text-saffron-deep hover:underline"
                >
                  Book
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
