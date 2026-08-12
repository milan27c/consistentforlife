export type ImpactProject = {
  title: string;
  blurb: string;
  image: string;
};

const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    title: "Healthier Mothers",
    blurb:
      "Reliable refrigeration means medicine and vaccines stay safe, so every clinic we reach can offer better care for a better tomorrow.",
    image: "/images/csr/1.png",
  },
  {
    title: "Improved Hygiene",
    blurb:
      "A working refrigerator keeps a clinic cleaner and safer too, giving every mother a more comfortable place to be cared for.",
    image: "/images/csr/2.png",
  },
  {
    title: "Sustainable Support",
    blurb:
      "This is not a one time gift. It is a standing weekly delivery that keeps showing up, district by district, for the long term.",
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
