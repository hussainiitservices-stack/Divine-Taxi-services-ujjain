"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { PHONE_TEL } from "@/lib/contact";
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
          <a
            href={`tel:${PHONE_TEL}`}
            className="border border-foam/35 px-4 py-2 transition-colors hover:border-saffron hover:bg-saffron hover:text-ink"
          >
            Call
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE_TEL}`}
            className="border border-foam/35 px-3 py-1.5 text-sm transition-colors hover:border-saffron hover:bg-saffron hover:text-ink"
          >
            Call
          </a>
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
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-foam/10 bg-ink/98 px-4 py-4 lg:hidden"
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
