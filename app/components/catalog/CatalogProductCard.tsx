import Image from "next/image";
import Link from "next/link";
import type { CatalogProduct } from "../../lib/catalog";
import { lkr } from "../../lib/product";

export default function CatalogProductCard({ product }: { product: CatalogProduct }) {
  return (
    <article className="group">
      <Link
        href={`/products/${product.slug}`}
        className="block relative aspect-square overflow-hidden rounded-2xl bg-neutral-100"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </Link>
      <h3 className="mt-4 font-heading text-base font-semibold leading-snug text-ink line-clamp-3" title={product.name}>
        {product.name}
      </h3>
      <p className="mt-1 font-body text-lg font-semibold text-primary">{lkr(product.price)}</p>
      <Link
        href={`/products/${product.slug}`}
        className="mt-3 inline-flex items-center rounded-full border border-ink/25 px-4 py-2 font-body text-xs font-semibold text-ink transition-colors hover:border-primary hover:bg-primary hover:text-white"
      >
        View Product
      </Link>
    </article>
  );
}
