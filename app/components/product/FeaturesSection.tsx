import Image from "next/image";
import type { ProductDetail } from "../../lib/product";

export default function FeaturesSection({
  chips,
  highlights,
}: {
  chips: ProductDetail["featureChips"];
  highlights: ProductDetail["featureHighlights"];
}) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Key Features
      </h2>

      {/* Feature chips */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {chips.map((chip) => (
          <div
            key={chip.title}
            className="flex flex-col justify-between rounded-2xl bg-neutral-50 p-4 text-center"
          >
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-wide text-neutral-500">
              {chip.title}
            </p>
            <p className="my-3 font-heading text-2xl font-bold text-ink">{chip.value}</p>
            <p className="font-body text-[0.65rem] text-neutral-500">{chip.caption}</p>
          </div>
        ))}
      </div>

      {/* Feature highlights */}
      <div className="mt-16 flex flex-col gap-16">
        {highlights.map((item, i) => (
          <div
            key={item.heading}
            className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-14 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:w-1/2">
              <Image
                src={item.image}
                alt={item.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="font-heading text-xl font-semibold text-ink sm:text-2xl">
                {item.heading}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-neutral-600 sm:text-base">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
