"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PhoneLink } from "@/components/PhoneLink";
import { SiteLogo } from "@/components/SiteLogo";
import { SITE_URL } from "@/lib/site";
import { navLinks } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        solid
          ? "bg-ink/92 text-foam shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
          : "bg-transparent text-foam"
      }`}
    >
      <div
        itemScope
        itemType="https://schema.org/TaxiService"
        itemID={`${SITE_URL}/#business`}
      >
        <meta itemProp="name" content="Divine Taxi Service Ujjain" />
        <meta itemProp="url" content={SITE_URL} />
        <PhoneLink
          prefix="Call now "
          className="flex items-center justify-center gap-2 bg-saffron px-4 py-2 text-center text-sm font-semibold tracking-wide text-ink"
          numberClassName="font-[family-name:var(--font-yeseva)] text-base tracking-wider sm:text-lg"
        />
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8 sm:py-3">
        <SiteLogo />

        <nav
          className="hidden items-center gap-6 text-sm lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-saffron ${
                  active ? "text-saffron" : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <PhoneLink
            className="bg-saffron px-4 py-2 font-semibold tracking-wide text-ink transition-colors hover:bg-saffron-deep hover:text-foam"
            numberClassName="tracking-wide"
          />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
            className="border border-foam/35 px-3 py-1.5 text-sm"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100svh-7.5rem)] overflow-y-auto border-t border-foam/10 bg-ink/98 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 text-base">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2.5 transition-colors hover:text-saffron ${
                    pathname === link.href ? "text-saffron" : ""
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
