"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

type FooterColumn = {
  heading: string;
  accent?: boolean;
  links: string[];
  subheading?: string;
  subLinks?: string[];
};

const COLUMNS: FooterColumn[] = [
  {
    heading: "About Us",
    links: ["Our story", "Our Impact", "Company history", "Careers"],
  },
  {
    heading: "Shop",
    links: ["All products", "New releases", "Featured products", "Categories"],
  },
  {
    heading: "Our Identity",
    links: ["Logo & wordmark", "Color & gradient", "Photography", "Typography", "Design system"],
  },
  {
    heading: "Newsroom",
    links: ["Press releases", "Media kit"],
    subheading: "Sustainability",
    subLinks: ["Carbon neutrality", "Circularity", "Ethics & compliance", "Policies & reports"],
  },
  {
    heading: "Investor Relations",
    links: ["Corporate governance", "Financial information", "Stock information", "IR events"],
  },
  {
    heading: "AI Features",
    accent: true,
    links: ["AI Picture Engine", "Smart Home Intelligence", "Adaptive Sound Stage", "Next Gen Processor"],
  },
];

const LEGAL_LINKS = ["Site map", "Privacy Policy", "Cookie Policy", "Cookie Settings", "Legal", "Affiliates"];

const INTRO =
  "We focus on designing dependable electronics for everyday life, built to work the same way years from now as they do today. To explore everything we offer, take a look at our site map for the full picture of what we do.";

export default function Footer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <footer className="bg-neutral-100">
      {/* Intro line */}
      <div className="border-b border-ink/10 px-6 py-5 md:px-10 lg:px-16">
        <p className="max-w-5xl font-body text-sm leading-relaxed text-neutral-600">
          <span className={expanded ? "" : "line-clamp-1"}>{INTRO}</span>{" "}
          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="font-semibold text-ink underline underline-offset-2"
            >
              More
            </button>
          )}
        </p>
      </div>

      {/* Link columns */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 px-6 py-14 sm:grid-cols-3 md:px-10 lg:grid-cols-6 lg:px-16">
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h3
              className={`font-heading text-base font-semibold ${
                col.accent ? "text-secondary" : "text-ink"
              }`}
            >
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-neutral-600 transition-colors hover:text-ink"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {col.subheading && (
              <>
                <h3 className="mt-6 font-heading text-base font-semibold text-ink">
                  {col.subheading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.subLinks?.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-sm text-neutral-600 transition-colors hover:text-ink"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Language + social */}
      <div className="flex flex-col gap-6 border-t border-ink/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-16">
        <a
          href="#"
          className="inline-flex items-center gap-2 font-body text-sm font-semibold text-ink underline underline-offset-2"
        >
          <Globe className="h-4 w-4" strokeWidth={1.75} />
          Global, English
        </a>
        <div className="flex items-center gap-3">
          <SocialIcon label="Facebook">
            <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14v-2c0-.28.22-.5.5-.5H14V9z" />
          </SocialIcon>
          <SocialIcon label="Instagram">
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" />
            <circle cx="16.2" cy="7.8" r="0.9" />
          </SocialIcon>
          <SocialIcon label="YouTube">
            <path d="M9.8 9.2v5.6l4.9-2.8-4.9-2.8z" />
            <rect x="3.5" y="6" width="17" height="12" rx="3" fill="none" stroke="currentColor" />
          </SocialIcon>
          <SocialIcon label="LinkedIn">
            <rect x="5" y="10" width="2.6" height="8" />
            <circle cx="6.3" cy="6.8" r="1.5" />
            <path d="M11 10h2.5v1.4c.6-1 1.6-1.6 2.9-1.6 2.2 0 3.6 1.4 3.6 4.1V18h-2.6v-3.7c0-1.1-.5-1.9-1.5-1.9-.8 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V18H11v-8z" />
          </SocialIcon>
        </div>
      </div>

      {/* Legal bar */}
      <div className="bg-neutral-800 px-6 py-8 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <nav className="flex flex-wrap gap-x-2 gap-y-1 font-body text-xs text-neutral-300">
              {LEGAL_LINKS.map((link, i) => (
                <span key={link} className="flex items-center gap-2">
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                  {i < LEGAL_LINKS.length - 1 && <span className="text-neutral-600">|</span>}
                </span>
              ))}
            </nav>
            <p className="mt-3 font-body text-xs text-neutral-400">
              Copyright &copy; {new Date().getFullYear()} Consistent For Life. All Rights Reserved
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex w-fit items-center gap-3 rounded-2xl bg-surface px-4 py-3 transition-opacity hover:opacity-90"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldIcon />
            </span>
            <span className="font-body text-xs font-semibold leading-snug text-ink underline underline-offset-2">
              Consistent For Life
              <br />
              Ethics Hotline
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-warm-grey transition-opacity hover:opacity-80"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="m9.5 12 1.8 1.8L14.5 10" />
    </svg>
  );
}
