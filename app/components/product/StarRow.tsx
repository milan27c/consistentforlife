import { Star } from "lucide-react";

export function StarRow({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= Math.round(rating) ? "fill-primary text-primary" : "text-neutral-300"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
