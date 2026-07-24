"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/#about" },
  { label: "AI Features", href: "#" },
  { label: "Support", href: "#" },
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
      // Hero is the sticky scroll track; the About section starts right after it.
      const heroEnd =
        document.getElementById("about")?.offsetTop ?? window.innerHeight * 3;
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
        className={`flex items-center justify-between px-6 py-4 md:px-10 lg:px-16 ${
          solid ? "text-ink" : "text-white [text-shadow:0_1px_16px_rgba(0,0,0,0.35)]"
        }`}
      >
        {/* Wordmark */}
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          Consistent For Life
        </Link>

        {/* Nav links (desktop) */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-body text-sm font-semibold transition-opacity hover:opacity-70 ${
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
            aria-label="Cart"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
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
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-white"
          >
            <div className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-16">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-heading text-lg font-semibold tracking-tight"
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
                    className="block py-3 text-center font-heading text-3xl font-semibold tracking-tight text-white transition-opacity hover:opacity-70 sm:text-4xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center justify-center gap-6 px-6 py-8 font-body text-sm text-white/60">
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
