const points = [
  {
    title: "Safe & reliable",
    detail: "Well-kept vehicles with experienced local drivers.",
  },
  {
    title: "Always available",
    detail: "Early aarti pickups and late-night station arrivals welcome.",
  },
  {
    title: "Wide coverage",
    detail: "Ujjain city, Indore airport, and popular MP pilgrimage routes.",
  },
  {
    title: "Clear pricing",
    detail: "Straightforward fares with no surprise add-ons at drop.",
  },
];

export function Advantage() {
  return (
    <section
      id="advantage"
      className="relative overflow-hidden bg-river px-5 py-20 text-foam sm:px-8 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 10% 20%, rgba(201,137,42,0.18), transparent 40%), radial-gradient(ellipse at 90% 80%, rgba(122,31,31,0.25), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-saffron">
          Why Divine Taxi
        </p>
        <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-yeseva)] text-3xl sm:text-4xl md:text-5xl">
          The Divine Taxi advantage.
        </h2>
        <p className="mt-4 max-w-xl text-foam/75">
          Premium travel made simple — for pilgrims, families, and everyday city
          rides.
        </p>

        <ul className="mt-14 grid gap-8 border-t border-foam/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <li key={point.title} className="animate-rise" style={{ animationDelay: `${index * 80}ms` }}>
              <span className="font-[family-name:var(--font-yeseva)] text-3xl text-saffron/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-yeseva)] text-xl">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foam/75 sm:text-base">
                {point.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
