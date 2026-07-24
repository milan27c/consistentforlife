"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-white p-8">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl bg-white transition-opacity ${
                i === active ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
