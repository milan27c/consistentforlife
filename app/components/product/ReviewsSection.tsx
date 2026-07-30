import type { ProductDetail } from "../../lib/product";
import { StarRow } from "./StarRow";

export default function ReviewsSection({
  rating,
  reviewCount,
  recommendPercent,
  reviews,
}: {
  rating: number;
  reviewCount: number;
  recommendPercent: number;
  reviews: ProductDetail["reviews"];
}) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Reviews
      </h2>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-neutral-50 p-6">
        <span className="font-heading text-4xl font-bold text-ink">{rating.toFixed(1)}</span>
        <div>
          <StarRow rating={rating} />
          <p className="mt-1 font-body text-sm text-neutral-500">{reviewCount} reviews</p>
        </div>
        <p className="w-full font-body text-sm text-neutral-500 sm:ml-auto sm:w-auto">
          {recommendPercent}% of reviewers recommend this product
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex flex-col rounded-2xl bg-white p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-body text-sm font-semibold text-ink">{review.name}</p>
              <p className="font-body text-xs text-neutral-400">{review.date}</p>
            </div>
            <StarRow rating={review.rating} className="mt-1.5" />
            <p className="mt-3 font-body text-sm leading-relaxed text-neutral-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
