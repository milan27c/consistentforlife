export default function SupportSection() {
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Support
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          {
            title: "Warranty",
            body: "10 years on the compressor, 5 years on all other parts, from the date of purchase.",
          },
          {
            title: "Installation",
            body: "Professional installation can be scheduled after purchase through our support team.",
          },
          {
            title: "Need help",
            body: "Our support team is available every day to help with setup, service, or general questions.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-neutral-50 p-6">
            <h3 className="font-heading text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-neutral-600">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
