"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Search, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Impact", href: "/impact" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Newsroom", href: "/newsroom" },
];

export default function Header() {
  const pathname = usePathname();
  // Only the homepage has the dark hero to sit transparently over.
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Non-home pages have no dark hero, so the header stays solid (initial state).
    if (!isHome) return;
    const onScroll = () => {
      // Hero is the sticky scroll track; the deliveries gallery (or, failing
      // that, the Impact section) starts right after it and isn't dark, so
      // the header needs to go solid as soon as that section begins.
      const heroEnd =
        document.getElementById("deliveries")?.offsetTop ??
        document.getElementById("impact")?.offsetTop ??
        window.innerHeight * 3;
      setSolid(window.scrollY > heroEnd - 72);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Defer the initial read so we don't setState synchronously inside the effect.
    const raf = requestAnimationFrame(onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    // The trigger is mobile-only, so close the overlay if we cross into desktop.
    if (!menuOpen) return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-neutral-200 bg-surface" : "bg-transparent"
      }`}
    >
      <div
        className={`section-px flex items-center justify-between py-4 ${
          solid ? "text-ink" : "text-white [text-shadow:0_1px_16px_rgba(0,0,0,0.35)]"
        }`}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="whitespace-nowrap font-heading text-[1.35rem]/[2.1rem] font-semibold tracking-tight"
        >
          Consistent For Life
        </Link>

        {/* Nav links (desktop) */}
        {/* Tighter gap at lg: the larger link text leaves little room beside the wordmark */}
        <nav className="hidden items-center gap-4 lg:flex xl:gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap font-body text-[1.05rem]/6 font-semibold transition-opacity hover:opacity-70 ${
                solid ? "text-neutral-700" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          >
            <Search className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70 lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col bg-surface text-ink"
          >
            <div className="section-px flex items-center justify-between py-4">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-heading text-[1.35rem]/[2.1rem] font-semibold tracking-tight"
              >
                Consistent For Life
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-center font-heading text-3xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-70 sm:text-4xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-6 border-t border-neutral-200 px-6 py-8 font-body text-sm text-neutral-500">
              <a href="#" className="transition-opacity hover:opacity-70">Account</a>
              <a href="#" className="transition-opacity hover:opacity-70">Wishlist</a>
              <a href="#" className="transition-opacity hover:opacity-70">Settings</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
