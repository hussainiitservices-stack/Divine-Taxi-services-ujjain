import Image from "next/image";
import { whatsappLink } from "@/lib/contact";
import { fleetCars } from "@/lib/images";

type CarsProps = {
  limit?: number;
};

export function Cars({ limit }: CarsProps) {
  const cars = limit ? fleetCars.slice(0, limit) : fleetCars;

  return (
    <section className="bg-foam px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
          Our cars
        </p>
        <h2 className="mt-3 max-w-xl font-[family-name:var(--font-yeseva)] text-2xl text-ink sm:text-4xl">
          Clean taxis for every group size in Ujjain.
        </h2>
        <p className="mt-4 max-w-xl text-ink-soft">
          Sedan, Innova, Ertiga, Tavera, and tempo traveller — book the car that
          fits your journey.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <li key={car.name} className="group">
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(160deg, #2c4a5e 0%, #1a2228 55%, #7a1f1f 130%)",
                }}
              >
                <Image
                  src={car.image}
                  alt={car.alt}
                  fill
                  className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105 sm:p-6"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-yeseva)] text-xl text-ink">
                {car.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-temple">{car.seats}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {car.ideal}
              </p>
              <a
                href={whatsappLink(
                  `Namaste Divine Taxi, I want to book the ${car.name}. Please share availability and pricing.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-river underline-offset-4 transition hover:text-saffron-deep hover:underline"
              >
                Book this car →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
