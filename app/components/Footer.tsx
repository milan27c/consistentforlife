"use client";

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

export default function Footer() {
  return (
    <footer className="bg-neutral-900">

      {/* Link columns */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-neutral-700 px-6 py-14 sm:grid-cols-3 md:px-10 lg:grid-cols-6 lg:px-16">
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h3
              className={`font-heading text-base font-semibold ${
                col.accent ? "text-secondary" : "text-white"
              }`}
            >
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-body text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {col.subheading && (
              <>
                <h3 className="mt-6 font-heading text-base font-semibold text-white">
                  {col.subheading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.subLinks?.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-sm text-neutral-400 transition-colors hover:text-white"
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
      <div className="flex flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-16">
        <a
          href="#"
          className="inline-flex items-center gap-2 font-body text-sm font-semibold text-neutral-300 underline underline-offset-2 transition-colors hover:text-white"
        >
          <Globe className="h-4 w-4" strokeWidth={1.75} />
          Global, English
        </a>
        <div className="flex items-center gap-3">
          <SocialIcon label="Facebook" href="https://facebook.com" icon="facebook" />
          <SocialIcon label="Instagram" href="https://instagram.com" icon="instagram" />
          <SocialIcon label="YouTube" href="https://youtube.com" icon="youtube" />
          <SocialIcon label="LinkedIn" href="https://linkedin.com" icon="linkedin" />
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-neutral-700 px-6 py-8 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <nav className="flex flex-wrap gap-x-2 gap-y-1 font-body text-xs text-neutral-400">
              {LEGAL_LINKS.map((link, i) => (
                <span key={link} className="flex items-center gap-2">
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                  {i < LEGAL_LINKS.length - 1 && <span className="text-neutral-600">|</span>}
                </span>
              ))}
            </nav>
            <p className="mt-3 font-body text-xs text-neutral-500">
              Copyright &copy; {new Date().getFullYear()} Consistent For Life. All Rights Reserved
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex w-fit items-center gap-3 rounded-2xl bg-neutral-800 px-4 py-3 transition-colors hover:bg-neutral-700"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
              <ShieldIcon />
            </span>
            <span className="font-body text-xs font-semibold leading-snug text-white underline underline-offset-2">
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

function SocialIcon({ label, href, icon }: { label: string; href: string; icon: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700 transition-colors hover:bg-primary"
      title={label}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        {icon === "facebook" && (
          <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14v-2c0-.28.22-.5.5-.5H14V9z" />
        )}
        {icon === "instagram" && (
          <>
            <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
          </>
        )}
        {icon === "youtube" && (
          <>
            <path d="M9.8 9.2v5.6l4.9-2.8-4.9-2.8z" fill="currentColor" />
            <rect x="3.5" y="6" width="17" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}
        {icon === "linkedin" && (
          <>
            <rect x="5" y="10" width="2.6" height="8" fill="currentColor" />
            <circle cx="6.3" cy="6.8" r="1.5" fill="currentColor" />
            <path d="M11 10h2.5v1.4c.6-1 1.6-1.6 2.9-1.6 2.2 0 3.6 1.4 3.6 4.1V18h-2.6v-3.7c0-1.1-.5-1.9-1.5-1.9-.8 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8V18H11v-8z" fill="currentColor" />
          </>
        )}
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
