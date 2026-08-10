export const SITE_NAME = "Divine Taxi";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.divinetaxiserviceujjain.com"
).replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "Reliable taxi service in Ujjain for Mahakaleshwar darshan, Indore airport transfers, railway pickups, and Madhya Pradesh tour packages with professional local drivers.";

export const SITE_KEYWORDS = [
  "taxi service in Ujjain",
  "Ujjain taxi",
  "Divine Taxi Ujjain",
  "Divine Taxi Service Ujjain",
  "Mahakaleshwar taxi",
  "Ujjain cab booking",
  "Indore airport taxi Ujjain",
  "Ujjain darshan taxi",
  "Omkareshwar taxi from Ujjain",
  "Ujjain to Bhopal cab",
  "tempo traveller Ujjain",
];

export type SitePage = {
  path: string;
  title: string;
  description: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

/** All public pages included in sitemap, robots, and llm.txt */
export const SITE_PAGES: SitePage[] = [
  {
    path: "/",
    title: "Home",
    description:
      "Divine Taxi Service Ujjain — book cabs for Mahakal darshan, Indore airport, and Madhya Pradesh tours.",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    title: "About Us",
    description:
      "About Divine Taxi — local taxi service in Ujjain for pilgrims, families, and outstation travel.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services",
    title: "Services",
    description:
      "Airport taxi, local Ujjain cabs, outstation tours, VIP darshan support, and ritual travel.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/packages",
    title: "Packages",
    description:
      "Ujjain darshan, airport packages, Omkareshwar, Maheshwar, Mandu, Bhopal, and MP tour packages.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Call or WhatsApp Divine Taxi Ujjain to book a cab — fast confirmation for local and outstation rides.",
    changeFrequency: "monthly",
    priority: 0.85,
  },
];

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
