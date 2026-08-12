import Breadcrumb, { type Crumb } from "./Breadcrumb";

export default function BreadcrumbBar({ items }: { items: Crumb[] }) {
  return (
    <div className="w-full border-b border-neutral-200 bg-warm-grey">
      <div className="section-px pb-4 pt-16 sm:pb-5 sm:pt-20">
        <Breadcrumb items={items} />
      </div>
    </div>
  );
}
