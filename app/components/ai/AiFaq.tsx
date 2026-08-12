import { Plus } from "lucide-react";
import { AI_FAQS } from "../../lib/ai";

export default function AiFaq() {
  return (
    <section className="bg-warm-grey py-20 sm:py-24 md:py-28">
      <div className="section-px">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 font-body text-sm text-neutral-600 sm:text-base">
            A few common questions about how our intelligent features actually work.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white shadow-sm sm:mt-16">
          {AI_FAQS.map((faq) => (
            <details key={faq.question} className="group px-6 py-6 sm:px-10 sm:py-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-body text-base font-semibold text-ink marker:content-none transition-colors sm:text-lg">
                {faq.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-200 group-hover:border-neutral-300 group-open:rotate-45 group-open:border-primary group-open:text-primary">
                  <Plus className="h-4 w-4" strokeWidth={2} />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-neutral-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
