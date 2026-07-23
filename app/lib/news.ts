export type NewsItem = {
  tag: string;
  heading: string;
  image: string;
  large?: boolean;
};

const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1000`;

export const NEWS: NewsItem[] = [
  {
    tag: "Company",
    heading: "A new chapter for Consistent For Life",
    image: PEXELS(273209),
    large: true,
  },
  {
    tag: "Expansion",
    heading: "Now serving 12 new cities across the region",
    image: PEXELS(302769),
  },
  {
    tag: "Inside the Team",
    heading: "Behind the scenes, building products that last",
    image: PEXELS(3153201),
  },
  {
    tag: "Sustainability",
    heading: "Our 2026 Sustainability Report is here",
    image: PEXELS(1367269),
  },
  {
    tag: "Sustainability",
    heading: "Committed to cleaner energy, every day",
    image: PEXELS(9799732),
  },
];
