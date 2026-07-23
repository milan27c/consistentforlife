"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag } from "lucide-react";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Innovation", href: "/#about" },
  { label: "Our Impact", href: "/impact" },
  { label: "Support", href: "#" },
];

export default function Header() {
  const pathname = usePathname();
  // Only the homepage has the dark hero to sit transparently over.
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);

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
              className={`font-body text-sm font-medium transition-opacity hover:opacity-70 ${
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
        </div>
      </div>
    </header>
  );
}
