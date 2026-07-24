export type ImpactProject = {
  title: string;
  blurb: string;
  image: string;
};

const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    title: "Caring for Mothers, Building a Healthier Tomorrow",
    blurb:
      "We donated 25 refrigerators to rural maternal clinics, helping ensure reliable storage for essential medicines and better care for mothers and babies.",
    image: "/images/csr/1.png",
  },
  {
    title: "Supporting Maternal Care with Everyday Comfort",
    blurb:
      "We donated washing machines to rural maternal clinics, helping maintain cleaner, safer, and more comfortable environments for mothers and newborns.",
    image: "/images/csr/2.png",
  },
  {
    title: "Building Brighter Futures Through Education",
    blurb:
      "By equipping rural school computer labs with monitors, we're helping students unlock new opportunities through digital education.",
    image: "/images/csr/3.png",
  },
  {
    title: "Renew and Reuse",
    blurb:
      "Repair workshops and take back programs that keep good products working and out of landfill.",
    image: PEXELS(9799732),
  },
  {
    title: "Community Kitchens",
    blurb:
      "Reliable refrigeration and volunteers keeping fresh meals flowing to neighbourhoods in need.",
    image: PEXELS(6591154),
  },
  {
    title: "Health on the Move",
    blurb:
      "Cold chain and clinic equipment reaching remote communities, one visit at a time.",
    image: PEXELS(4021775),
  },
  {
    title: "Cleaner Neighbourhoods",
    blurb:
      "Local clean up drives and recycling that protect the places our customers call home.",
    image: PEXELS(5029857),
  },
];
