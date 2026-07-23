import type { ProductDetail } from "../../lib/product";

export default function SpecsSection({ specs }: { specs: ProductDetail["specs"] }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Specifications
      </h2>
      <dl className="mt-8 divide-y divide-neutral-200 rounded-2xl border border-neutral-200">
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-center justify-between gap-4 px-5 py-4">
            <dt className="font-body text-sm text-neutral-500">{spec.label}</dt>
            <dd className="font-body text-sm font-semibold text-ink">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
