import { PhoneLink } from "@/components/PhoneLink";

/** Visible homepage phone for Google Business Profile call verification */
export function HomePhone() {
  return (
    <section
      id="call"
      aria-label="Call Divine Taxi Ujjain"
      className="border-y border-stone bg-foam px-5 py-10 sm:px-8 sm:py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
            Call for booking
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-yeseva)] text-2xl text-ink sm:text-3xl">
            Divine Taxi Service Ujjain phone number
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink-soft sm:text-base">
            Call us anytime for Ujjain darshan taxi, Indore airport transfer, and
            outstation cab booking.
          </p>
        </div>

        <div className="shrink-0 border border-saffron bg-saffron/15 px-5 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-saffron-deep">
            Official phone
          </p>
          <PhoneLink
            className="mt-1 block font-[family-name:var(--font-yeseva)] text-3xl tracking-wide text-temple transition hover:text-saffron-deep sm:text-4xl"
            numberClassName="tracking-wide"
          />
          <p className="mt-1 text-sm text-ink-soft">
            WhatsApp available on the same number
          </p>
        </div>
      </div>
    </section>
  );
}
