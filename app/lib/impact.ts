export type ImpactProject = {
  title: string;
  blurb: string;
  image: string;
};

const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

export const IMPACT_PROJECTS: ImpactProject[] = [
  {
    title: "Bright Futures",
    blurb:
      "We bring dependable technology and power to under resourced classrooms, so learning never has to pause.",
    image: PEXELS(1720186),
  },
  {
    title: "Care That Reaches",
    blurb:
      "Trusted appliances and hands on support for families and shelters rebuilding everyday life.",
    image: PEXELS(6646918),
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
