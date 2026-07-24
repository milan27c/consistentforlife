"use client";

import Image from "next/image";
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
    links: ["Our story", "Company history", "Careers"],
  },
  {
    heading: "Shop",
    links: ["All products", "New releases", "Featured products", "Categories"],
  },
  {
    heading: "Support",
    links: ["Contact us", "Help center", "Product manuals", "Warranty info"],
  },
  {
    heading: "Our Identity",
    links: ["Logo & wordmark", "Color & gradient", "Photography", "Typography"],
  },
  {
    heading: "Newsroom",
    links: ["Press releases", "Media kit"],
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
    <footer className="bg-[#E0D5C7]">

      {/* Link columns */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-neutral-300 px-6 py-14 sm:grid-cols-3 md:px-10 lg:grid-cols-6 lg:px-16">
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
      <div className="flex flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-16">
        <a
          href="#"
          className="inline-flex items-center gap-2 font-body text-sm font-semibold text-neutral-600 underline underline-offset-2 transition-colors hover:text-ink"
        >
          <Globe className="h-4 w-4" strokeWidth={1.75} />
          Global, English
        </a>
        <div className="flex items-center gap-3">
          <SocialIcon label="Facebook" href="https://facebook.com" icon="/images/social/fb.png" />
          <SocialIcon label="Instagram" href="https://instagram.com" icon="/images/social/instagram.png" />
          <SocialIcon label="TikTok" href="https://tiktok.com" icon="/images/social/tiktok.png" />
          <SocialIcon label="YouTube" href="https://youtube.com" icon="/images/social/youtube.png" />
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-neutral-300 px-6 py-8 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <nav className="flex flex-wrap gap-x-2 gap-y-1 font-body text-xs text-neutral-600">
            {LEGAL_LINKS.map((link, i) => (
              <span key={link} className="flex items-center gap-2">
                <a href="#" className="transition-colors hover:text-ink">
                  {link}
                </a>
                {i < LEGAL_LINKS.length - 1 && <span className="text-neutral-400">|</span>}
              </span>
            ))}
          </nav>
          <p className="font-body text-xs text-neutral-600">
            Copyright &copy; {new Date().getFullYear()} Consistent For Life. All Rights Reserved
          </p>
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
      className="flex h-10 w-10 items-center justify-center rounded-full bg-ink transition-colors hover:bg-primary"
      title={label}
    >
      <Image src={icon} alt={label} width={20} height={20} />
    </a>
  );
}