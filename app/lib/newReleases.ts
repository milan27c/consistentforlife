export type NewRelease = {
  image: string;
  alt: string;
  caption: string;
};

export const NEW_RELEASES: NewRelease[] = [
  {
    image: "/images/new-products/1A.png",
    alt: "A family on the sofa watching a football match on a large wall mounted screen",
    caption: "OLED evo: Stadium Energy, Living Room Precision",
  },
  {
    image: "/images/new-products/2A.png",
    alt: "A child asleep in a starlit bedroom while the wall mounted air conditioner cools the room",
    caption: "AS-Q18JNXE: Powerful Cooling, Even at 55°C",
  },
  {
    image: "/images/new-products/3.png",
    alt: "A matt black front load washing machine with its door open in a bright laundry room",
    caption: "More Space to Breathe, Less Time to Wait",
  },
  {
    image: "/images/new-products/4A.png",
    alt: "A family cooking together in an open kitchen beside a matt black fridge with a lit glass panel",
    caption: "Knock Twice, Discover Everything Inside",
  },
];
