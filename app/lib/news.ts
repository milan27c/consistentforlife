export type NewsItem = {
  heading: string;
  /** Only the large lead story carries a subheading. */
  sub?: string;
  image: string;
  large?: boolean;
};

export const NEWS: NewsItem[] = [
  {
    heading: "LG Electronics Releases Second-Quarter 2026 Financial Results",
    sub: "Operating Profit Surges 147 Percent Year-Over-Year on High-Value Product Sales and Improved Cost Competitiveness",
    image: "/images/news/1.png",
    large: true,
  },
  {
    heading:
      "LG Electronics Launches Mid Static Ducted Unit, Delivering “Comfort Anywhere”",
    image: "/images/news/2.png",
  },
  {
    heading:
      "LG Electronics Unveils Next-Generation Smart Telematics Solution at MWC Barcelona 2026",
    image: "/images/news/3.png",
  },
  {
    heading: "A New Reality in Pure Color: How LG Micro RGB evo AI Redefines Cloud Gaming",
    image: "/images/news/4.png",
  },
  {
    heading: "LG InstaView Refrigerator Surpasses 5.3 Million in Global Sales",
    image: "/images/news/5.png",
  },
];
