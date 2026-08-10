"use client";

import { useState, type FormEvent } from "react";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/contact";

export function BookRide() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const pickup = String(data.get("pickup") || "").trim();
    const drop = String(data.get("drop") || "").trim();
    const when = String(data.get("when") || "").trim();
    const vehicle = String(data.get("vehicle") || "").trim();

    const message = [
      "Namaste, I would like to book Divine Taxi.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Pickup: ${pickup}`,
      `Drop: ${drop}`,
      `Vehicle: ${vehicle || "Any available"}`,
      `When: ${when || "As soon as possible"}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="book" className="bg-foam px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron-deep">
            Book your ride
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-yeseva)] text-2xl text-ink sm:text-4xl">
            Tell us where to meet you in Ujjain.
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Share your pickup details and we will confirm on WhatsApp within
            minutes. Need help first? Call anytime.
          </p>
          <div className="mt-8 space-y-3 text-sm text-ink-soft">
            <p>
              Call{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                className="font-semibold text-temple underline-offset-4 hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>Available daily · Early aarti pickups welcome</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-stone bg-mist/70 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-ink-soft">
              Name
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="mt-2 w-full border border-stone bg-foam px-3 py-2.5 text-ink outline-none transition focus:border-saffron"
              />
            </label>
            <label className="block text-sm text-ink-soft">
              Phone
              <input
                required
                name="phone"
                type="tel"
                autoComplete="tel"
                className="mt-2 w-full border border-stone bg-foam px-3 py-2.5 text-ink outline-none transition focus:border-saffron"
              />
            </label>
            <label className="block text-sm text-ink-soft sm:col-span-2">
              Pickup
              <input
                required
                name="pickup"
                type="text"
                placeholder="Ujjain Junction, hotel, temple…"
                className="mt-2 w-full border border-stone bg-foam px-3 py-2.5 text-ink outline-none transition focus:border-saffron"
              />
            </label>
            <label className="block text-sm text-ink-soft sm:col-span-2">
              Drop
              <input
                required
                name="drop"
                type="text"
                placeholder="Mahakal Temple, Indore Airport…"
                className="mt-2 w-full border border-stone bg-foam px-3 py-2.5 text-ink outline-none transition focus:border-saffron"
              />
            </label>
            <label className="block text-sm text-ink-soft">
              Vehicle
              <select
                name="vehicle"
                className="mt-2 w-full border border-stone bg-foam px-3 py-2.5 text-ink outline-none transition focus:border-saffron"
                defaultValue=""
              >
                <option value="">Any available</option>
                <option value="Sedan">Sedan</option>
                <option value="Innova">Innova</option>
                <option value="Ertiga">Ertiga</option>
                <option value="Tavera">Tavera</option>
                <option value="Tempo Traveller">Tempo Traveller</option>
              </select>
            </label>
            <label className="block text-sm text-ink-soft">
              Date & time
              <input
                name="when"
                type="text"
                placeholder="Tomorrow 4:30 AM"
                className="mt-2 w-full border border-stone bg-foam px-3 py-2.5 text-ink outline-none transition focus:border-saffron"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-temple px-6 py-3 text-sm font-semibold tracking-wide text-foam transition-colors hover:bg-saffron-deep sm:w-auto"
          >
            Send on WhatsApp
          </button>

          {submitted && (
            <p className="mt-4 text-sm text-river">
              Opening WhatsApp with your booking details…
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
