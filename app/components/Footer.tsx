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
    <footer className="bg-[#E5E0D6]">
      {/* Link columns */}
      <div className="border-b border-neutral-300">
        <div className="section-px grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-6">
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
      </div>

      {/* Language + social */}
      <div className="section-px flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
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
      <div className="border-t border-neutral-300">
        <div className="section-px py-8">
          <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-3 lg:items-center">
            <nav className="flex flex-wrap justify-center gap-x-2 gap-y-1 font-body text-xs text-neutral-600 lg:justify-start">
              {LEGAL_LINKS.map((link, i) => (
                <span key={link} className="flex items-center gap-2">
                  <a href="#" className="transition-colors hover:text-ink">
                    {link}
                  </a>
                  {i < LEGAL_LINKS.length - 1 && <span className="text-neutral-400">|</span>}
                </span>
              ))}
            </nav>
            <div className="flex items-center gap-2 font-body text-sm text-neutral-500 lg:justify-self-center">
              <span>Powered by</span>
              <Image
                src="/images/lgprimary.svg"
                alt=""
                aria-hidden="true"
                width={77}
                height={34}
                className="h-6 w-auto"
              />
            </div>
            <p className="font-body text-xs text-neutral-600 lg:justify-self-end">
              Copyright &copy; {new Date().getFullYear()} Consistent For Life. All Rights Reserved
            </p>
          </div>
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
