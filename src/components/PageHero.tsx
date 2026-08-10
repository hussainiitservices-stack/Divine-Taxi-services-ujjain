import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  detail: string;
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  detail,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[52svh] overflow-hidden bg-river text-foam sm:min-h-[58svh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="animate-ken-burns object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(26,34,40,0.84) 0%, rgba(44,74,94,0.55) 50%, rgba(122,31,31,0.4) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[52svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[58svh] sm:px-8 sm:pb-16 sm:pt-28">
        <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.2em] text-saffron sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up-delay-1 mt-3 max-w-3xl font-[family-name:var(--font-yeseva)] text-3xl leading-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-sm leading-relaxed text-foam/85 sm:text-lg">
          {detail}
        </p>
      </div>
    </section>
  );
}
