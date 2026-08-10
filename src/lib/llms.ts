import { PHONE_DISPLAY } from "@/lib/contact";
import { SITE_DESCRIPTION, SITE_NAME, SITE_PAGES, absoluteUrl } from "@/lib/site";

export function buildLlmsTxt() {
  const pages = SITE_PAGES.map(
    (page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`,
  ).join("\n");

  return `# ${SITE_NAME} Service Ujjain

> ${SITE_DESCRIPTION}

Divine Taxi is a local taxi and tour partner in Ujjain, Madhya Pradesh, India. We provide airport transfers, temple darshan cabs, outstation tours, and group vehicles with WhatsApp booking.

Contact: ${PHONE_DISPLAY}
Website: ${absoluteUrl("/")}

## Pages

${pages}

## Key services

- [Airport taxi](${absoluteUrl("/services")}): Indore airport pickup and drop from Ujjain
- [Ujjain darshan packages](${absoluteUrl("/packages")}): Mahakal and major temple tour cabs
- [Contact / book](${absoluteUrl("/contact")}): Call or WhatsApp to reserve a taxi

## Optional

- [Sitemap](${absoluteUrl("/sitemap.xml")}): Full list of indexable URLs
- [Robots](${absoluteUrl("/robots.txt")}): Crawler access rules
`;
}
