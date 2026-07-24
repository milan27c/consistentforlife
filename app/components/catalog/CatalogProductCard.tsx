import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "../../lib/catalog";
import { lkr } from "../../lib/product";

export default function CatalogProductCard({ product }: { product: CatalogProduct }) {
  const mrp = Math.round(product.price * 1.3);
  const savings = mrp - product.price;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-shadow hover:shadow-md"
    >
      <div className="px-4 pt-4 pb-0">
        <h3
          className="font-heading text-sm font-semibold leading-snug text-ink line-clamp-2 min-h-[2.2rem]"
          title={product.name}
        >
          {product.name}
        </h3>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden bg-white px-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-auto flex flex-col gap-3 px-4 py-3">
        <div>
          <p className="font-body text-[0.65rem] font-semibold text-primary">
            Save {lkr(savings)}
          </p>
          <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
            <span className="font-heading text-base font-bold text-ink">{lkr(product.price)}</span>
            <span className="font-body text-[0.7rem] text-neutral-400 line-through">{lkr(mrp)}</span>
          </div>
        </div>
        <div className="pointer-events-none self-start rounded-lg bg-primary px-3 py-2 font-body text-xs font-semibold text-white">
          Buy Now
        </div>
      </div>
    </Link>
  );
}
