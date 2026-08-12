import { SHOWCASE, type ShowcaseProduct } from "./showcase";

const findCategory = (tab: string) => SHOWCASE.find((c) => c.tab === tab)!;

export type AiPillar = {
  id: string;
  tab: string;
  heading: string;
  tagline: string;
  body: string;
  banner: string;
  products: ShowcaseProduct[];
};

export const AI_PILLARS: AiPillar[] = [
  {
    id: "delightful",
    tab: "Delightful Life",
    heading: "Every story, tuned to you",
    tagline: "Entertainment that learns what your household loves.",
    body: "Built in intelligence studies how your family actually watches and listens, quietly adjusting picture, sound, and recommendations so every evening looks and sounds right, without a single settings menu.",
    banner: findCategory("TV").banner,
    products: [...findCategory("TV").products, ...findCategory("Audio").products].slice(0, 6),
  },
  {
    id: "effortless",
    tab: "Effortless Life",
    heading: "Daily life, minus the effort",
    tagline: "Smart help for the tasks that never really end.",
    body: "From sorting a mixed laundry load to keeping a kitchen running smoothly, intelligence handles the small daily decisions so your family gets more evening back and fewer chores to think about.",
    banner: findCategory("Appliances").banner,
    products: [...findCategory("Appliances").products, ...findCategory("Computing").products].slice(0, 6),
  },
  {
    id: "wellcared",
    tab: "Well Cared Life",
    heading: "Comfort that looks after you",
    tagline: "Air and climate, quietly optimized for our weather.",
    body: "Built for tropical heat and humidity, intelligent sensors read the room and adjust airflow in real time, holding a steady, comfortable temperature through the hottest afternoon and the most humid evening.",
    banner: findCategory("Air Conditioning").banner,
    products: findCategory("Air Conditioning").products,
  },
];

export type AiCategoryIcon = "tv" | "audio" | "appliances" | "ac" | "computing";

export type AiCategory = {
  id: string;
  icon: AiCategoryIcon;
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  features: { label: string; description: string }[];
  cta: string;
  ctaHref: string;
};

export const AI_CATEGORIES: AiCategory[] = [
  {
    id: "tv",
    icon: "tv",
    eyebrow: "Home Entertainment",
    heading: "Evolves to match your every mood",
    body: "Built in intelligence studies how your household actually watches, reading each scene and adjusting picture and sound in real time, so movie night, the big match, and a quiet evening rerun all look exactly right.",
    image: findCategory("TV").banner,
    features: [
      { label: "Smart Voice", description: "Recognizes who is speaking and tunes replies to that person." },
      { label: "Smart Search", description: "Finds a show from a description, not just an exact title." },
      { label: "Smart Picture", description: "Reads every scene and adjusts contrast and color automatically." },
      { label: "Smart Sound", description: "Balances dialogue and effects for the room you are sitting in." },
    ],
    cta: "Explore Home Entertainment",
    ctaHref: "/products",
  },
  {
    id: "audio",
    icon: "audio",
    eyebrow: "Sound",
    heading: "Sounds uniquely right, wherever you are",
    body: "A built in listening engine reads the space around a speaker, the size of the room, what is playing, even how loud the crowd is, and tunes itself in real time, so the sound stays full and clear from a quiet porch to a full house party.",
    image: findCategory("Audio").banner,
    features: [
      { label: "Smart Sound", description: "Analyzes the room and tunes output automatically." },
      { label: "Smart Lighting", description: "Syncs light and color to the beat of what is playing." },
      { label: "Smart Pairing", description: "Links two speakers instantly for fuller, wider sound." },
    ],
    cta: "Explore Sound",
    ctaHref: "/products",
  },
  {
    id: "appliances",
    icon: "appliances",
    eyebrow: "Home Care",
    heading: "Lightens your every load",
    body: "Sensors read fabric type, load size, and soil level automatically, choosing the gentlest cycle that still gets the job done, so a mixed load of school uniforms and delicate fabrics comes out right the first time.",
    image: findCategory("Appliances").banner,
    features: [
      { label: "Smart Wash", description: "Reads fabric and soil level to pick the right cycle." },
      { label: "Smart Dry", description: "Senses moisture and stops the moment clothes are ready." },
      { label: "Smart Fresh", description: "Learns your household's rhythm and cools ahead of a busy day." },
    ],
    cta: "Explore Home Care",
    ctaHref: "/products",
  },
  {
    id: "ac",
    icon: "ac",
    eyebrow: "Comfort",
    heading: "Comforts with perfectly tuned cooling",
    body: "Radar sensors detect exactly where people are sitting in a room and direct airflow accordingly, while intelligent power management keeps electricity use in check, steady, even cooling through the warmest afternoons without a spike on the bill.",
    image: findCategory("Air Conditioning").banner,
    features: [
      { label: "Smart Air", description: "Detects occupants and directs airflow their way." },
      { label: "Dual Inverter", description: "Adjusts compressor speed for steadier, quieter cooling." },
      { label: "Smart Clean", description: "Runs a freeze and clean cycle to keep the unit fresh." },
    ],
    cta: "Explore Comfort",
    ctaHref: "/products",
  },
  {
    id: "computing",
    icon: "computing",
    eyebrow: "Work And Play",
    heading: "Powers everything you do",
    body: "A hybrid approach blends on device processing with cloud power, so a laptop can summarize a document, tidy a photo, or hold a conversation, quickly, and without sending every request out to the internet.",
    image: findCategory("Computing").banner,
    features: [
      { label: "On Device Chat", description: "Handles everyday questions instantly, even offline." },
      { label: "Cloud Chat", description: "Taps deeper cloud power for heavier tasks." },
    ],
    cta: "Explore Computing",
    ctaHref: "/products",
  },
];

export const AI_FAQS: { question: string; answer: string }[] = [
  {
    question: "What does affectionate intelligence actually mean?",
    answer:
      "It is our name for technology that goes beyond a spec sheet, features that sense what is happening in your home, understand the pattern behind it, and quietly take care of the small decisions so you do not have to.",
  },
  {
    question: "How does smart picture work on an AI television?",
    answer:
      "An onboard processor reads each scene as it plays, brightness, motion, and color, and adjusts the picture automatically, so a bright afternoon match and a dim night scene both look their best without you touching a remote.",
  },
  {
    question: "Is smart wash safe for delicate fabrics?",
    answer:
      "Yes. Sensors read fabric type and soil level before choosing a cycle, and the gentlest setting is always applied first, so sarees, school uniforms, and everyday cottons in the same load all come out cared for.",
  },
  {
    question: "How does smart air personalize cooling for a home here?",
    answer:
      "Radar sensors track where people are actually sitting and direct airflow toward them, while the system continuously balances comfort against energy use, built with tropical heat and humidity in mind rather than a milder climate.",
  },
  {
    question: "Does any of this keep working during a power interruption?",
    answer:
      "Core cooling, washing, and entertainment functions run locally on the appliance itself, so day to day use continues normally. Only cloud connected features, like remote app control, need a stable connection to work.",
  },
  {
    question: "Where can I ask a question in person?",
    answer:
      "Visit any authorized showroom near you. Our team can walk through any of these features in person and help you find the right model for your home.",
  },
];

export const AI_STORY_SLUGS = [
  "the-refrigerator-door-that-never-stopped-opening",
  "micro-rgb-evo-ai-cloud-gaming",
  "robotics-business-center-launch",
];
