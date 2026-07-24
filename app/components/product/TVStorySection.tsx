import Image from "next/image";

const HIGHLIGHTS = [
  {
    heading: "Dynamic Color, 100% Color Volume",
    body: "Wide color gamut technology brings dynamic, vibrant color to every frame, replacing older display methods with richer reproduction and more lifelike mood across cinema, sports, and everyday viewing.",
    image: "/images/products-home-page/TV/products/2.png",
    fit: "contain" as const,
    bg: "bg-white",
  },
  {
    heading: "Mini LED Precision Dimming",
    body: "Thousands of independently controlled dimming zones deliver deeper blacks and more refined contrast, so rock textures stay sharp and shadow detail never gets crushed.",
    image: "/gradients/LG_Electronics_Gradient_04_RGB.jpg",
    fit: "cover" as const,
    bg: "bg-ink",
  },
  {
    heading: "AI Processor Gen8",
    body: "An advanced processor performs nano scale image optimization in real time, upscaling lower resolution content and mapping tone dynamically so every scene looks intentional.",
    image: "/images/products-home-page/TV/products/4.png",
    fit: "contain" as const,
    bg: "bg-white",
  },
  {
    heading: "Slim Linear Flow Design",
    body: "A refined 70.8mm profile with a solid metallic back and tasteful linear ridges, built to sit flush against a wall or stand quietly on a media console.",
    image: "/images/products-home-page/TV/products/1 all images/1C.png",
    fit: "contain" as const,
    bg: "bg-white",
  },
];

const SMART_CHIPS = [
  { title: "Content discovery", value: "AI Concierge", caption: "Personalized picks" },
  { title: "Search everything", value: "Multi AI Search", caption: "One search bar" },
  { title: "Connected home", value: "Home Hub", caption: "Works with Matter" },
  { title: "For live sport", value: "Sports Alert", caption: "Scores & fixtures" },
  { title: "Ambient display", value: "Gallery Mode", caption: "Auto brightness" },
  { title: "Hands free", value: "Voice Recognition", caption: "Built in mic" },
];

export default function TVStorySection() {
  return (
    <div className="flex flex-col gap-16">
      {/* Full-bleed cinematic intro */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]">
        <Image
          src="/images/hero/pathum2.png"
          alt="Family watching a wall mounted smart TV in a modern living room"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-12">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            Filmmaker Mode &middot; Dolby Atmos
          </p>
          <p className="mt-3 max-w-xl font-heading text-2xl font-semibold text-white sm:text-4xl">
            Every scene, exactly as it was made to be seen.
          </p>
        </div>
      </div>

      {/* Alternating feature rows */}
      <div className="flex flex-col gap-16">
        {HIGHLIGHTS.map((item, i) => (
          <div
            key={item.heading}
            className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-14 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:w-1/2 ${item.bg}`}>
              <Image
                src={item.image}
                alt={item.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={item.fit === "contain" ? "object-contain p-8" : "object-cover"}
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

      {/* Full-bleed sports & sound moment */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]">
        <Image
          src="/images/products-home-page/TV/banner.png"
          alt="Fan watching a live cricket match on a large smart TV"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/25" />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-8 sm:p-12">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            Sports Alert &middot; Immersive Sound
          </p>
          <p className="mt-3 max-w-xl font-heading text-2xl font-semibold text-white sm:text-4xl">
            Feel every match, from the front row.
          </p>
        </div>
      </div>

      {/* Smart features */}
      <div>
        <h3 className="font-heading text-xl font-semibold text-ink sm:text-2xl">
          Smart features, made simple
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SMART_CHIPS.map((chip) => (
            <div
              key={chip.value}
              className="flex flex-col justify-between rounded-2xl bg-neutral-50 p-4 text-center"
            >
              <p className="font-body text-[0.65rem] font-semibold uppercase tracking-wide text-neutral-500">
                {chip.title}
              </p>
              <p className="my-3 font-heading text-base font-bold text-ink">{chip.value}</p>
              <p className="font-body text-[0.65rem] text-neutral-500">{chip.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
