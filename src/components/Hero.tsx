import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import { heroImage } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-river text-foam">
      <Image
        src={heroImage}
        alt="Mahakaleshwar Temple in Ujjain — Divine Taxi cab service for darshan and city travel"
        fill
        priority
        className="animate-ken-burns object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(26,34,40,0.82) 0%, rgba(44,74,94,0.5) 48%, rgba(122,31,31,0.38) 100%), radial-gradient(ellipse at 75% 15%, rgba(201,137,42,0.2), transparent 48%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-20">
        <h1 className="animate-fade-up font-[family-name:var(--font-yeseva)] text-5xl leading-none tracking-wide text-foam sm:text-7xl md:text-8xl lg:text-9xl">
          Divine Taxi
        </h1>
        <div className="animate-draw-line mt-4 h-px w-24 bg-saffron sm:w-36" />
        <p className="animate-fade-up-delay-1 mt-6 max-w-2xl font-[family-name:var(--font-yeseva)] text-xl leading-snug text-foam sm:text-3xl md:text-4xl">
          Trusted taxi service in Ujjain.
        </p>
        <p className="animate-fade-up-delay-2 mt-4 max-w-lg text-sm leading-relaxed text-foam/85 sm:text-lg">
          Comfortable cabs for Mahakal darshan, Indore airport transfers, and
          Madhya Pradesh heritage tours.
        </p>
        <div className="animate-fade-up-delay-3 mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="bg-saffron px-5 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-saffron-deep hover:text-foam sm:px-6 sm:text-base"
            >
              Book a ride
            </Link>
            <Link
              href="/packages"
              className="border border-foam/50 px-5 py-3 text-sm font-medium tracking-wide text-foam transition-colors hover:border-foam hover:bg-foam/10 sm:px-6 sm:text-base"
            >
              View packages
            </Link>
          </div>
          <p className="text-sm text-foam/80 sm:text-base">
            Call{" "}
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-semibold tracking-wide text-saffron underline-offset-4 hover:underline"
              itemProp="telephone"
            >
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
