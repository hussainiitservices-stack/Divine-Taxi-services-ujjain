import { PHONE_TEL, PHONE_DISPLAY } from "@/lib/contact";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: PHONE_TEL,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ujjain",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.1765,
      longitude: 75.7885,
    },
    areaServed: [
      { "@type": "City", name: "Ujjain" },
      { "@type": "City", name: "Indore" },
      { "@type": "City", name: "Bhopal" },
      { "@type": "State", name: "Madhya Pradesh" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_TEL,
      contactType: "customer service",
      availableLanguage: ["en", "hi"],
      areaServed: "IN",
    },
    sameAs: [`https://wa.me/${PHONE_TEL.replace("+", "")}`],
    knowsAbout: [
      "Ujjain taxi service",
      "Mahakaleshwar darshan cab",
      "Indore airport transfer",
      "Madhya Pradesh tour packages",
    ],
    slogan: `Call ${PHONE_DISPLAY} for taxi booking in Ujjain`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
