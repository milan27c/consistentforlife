import { Plus } from "lucide-react";
import type { ProductDetail } from "../../lib/product";

export default function FaqSection({ faqs }: { faqs: ProductDetail["faqs"] }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Frequently Asked Questions
      </h2>
      <div className="mt-8 divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-body text-sm font-semibold text-ink marker:content-none">
              {faq.question}
              <Plus className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-45" strokeWidth={2} />
            </summary>
            <p className="mt-3 font-body text-sm leading-relaxed text-neutral-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
