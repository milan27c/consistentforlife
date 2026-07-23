import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="font-body text-sm text-neutral-500 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`truncate font-body text-sm ${
                  isLast ? "text-ink" : "text-neutral-500"
                }`}
              >
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight className="h-3.5 w-3.5 text-neutral-300" strokeWidth={2} />}
          </span>
        );
      })}
    </nav>
  );
}
