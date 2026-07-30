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
  );
}
