export type NewsCategory = "Company News" | "Product Launch" | "Innovation" | "Our Story";

export type NewsSection = {
  /** Optional subheading introducing this block of the article. */
  heading?: string;
  paragraphs: string[];
};

export type NewsItem = {
  slug: string;
  heading: string;
  /** Only the homepage lead story carries a subheading. */
  sub?: string;
  excerpt: string;
  body: NewsSection[];
  category: NewsCategory;
  /** ISO date, e.g. "2026-07-24". */
  date: string;
  image: string;
  /** Gets the big 2x2 tile in the homepage bento (exactly one item should have this). */
  large?: boolean;
  /** Included in the homepage "Latest News" teaser strip. */
  homeFeature?: boolean;
  /** Included in the newsroom hero carousel. */
  featured?: boolean;
};

export const NEWS: NewsItem[] = [
  {
    slug: "q2-2026-financial-results",
    heading: "Second Quarter 2026 Financial Results",
    sub: "Operating profit surges 147 percent year over year on high value product sales and improved cost competitiveness",
    excerpt:
      "Consolidated revenue and operating profit both reached their highest second quarter levels on record, led by premium appliances, entertainment, and a fast growing subscription business.",
    body: [
      {
        heading: "A Record Quarter Across the Board",
        paragraphs: [
          "Second quarter 2026 results mark the strongest quarter in company history, with consolidated revenue reaching 23.83 trillion won, up 14.9 percent from the same period last year, and operating profit climbing to 1.58 trillion won, a jump of 147 percent and the highest either figure has reached in a second quarter.",
          "Leadership pointed to a mix of premium product sales, tighter cost discipline, and one time tariff refunds as the driving forces behind the jump, alongside continued momentum from a packed calendar of major sporting events that lifted demand for large screens and home entertainment setups worldwide.",
        ],
      },
      {
        heading: "Appliances Cross a New Threshold",
        paragraphs: [
          "Home appliances led every division, surpassing 7 trillion won in quarterly revenue for the first time on record at 7.08 trillion won, while holding an operating margin near 10 percent, proof that premium, dependable appliances are still finding buyers even as household budgets stay tight.",
          "Entertainment products followed with 5.11 trillion won in revenue and 219 billion won in operating profit, carried by steady demand for premium OLED and QNED style displays as households upgrade their main screen and by continued expansion into fast growing markets across the Global South.",
        ],
      },
      {
        heading: "Vehicles and Climate Systems Hold Steady",
        paragraphs: [
          "Vehicle solutions posted its second straight quarter above 3 trillion won in revenue, closing at 3.03 trillion won with 191 billion won in operating profit and a margin above 6 percent, cementing the division as a dependable, business focused source of income even as automakers navigate a slower new car market.",
          "Eco solutions matched that momentum, delivering 2.73 trillion won in revenue and 236 billion won in operating profit while holding an 8.6 percent margin, supported by expanding air conditioner sales overseas and steady replacement demand for climate control systems already installed in homes and buildings.",
        ],
      },
      {
        heading: "A Business Built on More Than One Purchase",
        paragraphs: [
          "Business to business sales reached 6.50 trillion won, up 5 percent year over year and now more than a third of total revenue, while the subscription business, where customers pay over time for appliances with built in care and upgrades, grew 5 percent to 660 billion won, a signal that reliability minded ownership is resonating well beyond a single purchase.",
          "Looking ahead, leadership reaffirmed a focus on long term reliability as the foundation of the product roadmap, prioritizing durability and after sales support over short lived feature cycles, while pointing to two newer growth areas, a robot actuator business and cooling systems built for AI data centers, as the next chapters in that same story.",
        ],
      },
    ],
    category: "Company News",
    date: "2026-07-30",
    image: "/images/news/1.png",
    large: true,
    homeFeature: true,
    featured: true,
  },
  {
    slug: "mid-static-ducted-unit-launch",
    heading: "Introducing the Mid Static Ducted Unit, Built for Comfort Anywhere",
    excerpt:
      "A compact ducted unit built for tight ceiling spaces, delivering quiet, evenly balanced comfort to homes and small commercial spaces alike.",
    body: [
      {
        heading: "Comfort Anywhere, By Design",
        paragraphs: [
          "The new mid static ducted unit is designed for residential and light commercial spaces where ceiling room is limited, standing just 245 millimeters tall and 692 millimeters deep, with a capacity range from 5 to 54 thousand BTU per hour, built around a simple idea the team calls comfort anywhere.",
          "The compact footprint is meant to expand where a ducted system can realistically go, older buildings with shallow ceiling voids, small commercial spaces retrofitted after the fact, additions where a bulkier unit simply would not fit, without asking installers to compromise on airflow or capacity.",
        ],
      },
      {
        heading: "Built for Tight Installations",
        paragraphs: [
          "Rear or bottom air intake, plus side or bottom service access, gives installers real flexibility in tight builds, while automatic external static pressure control keeps airflow consistent by adjusting fan speed on its own as duct length and layout change from one installation to the next.",
          "Smart control through the connected home app lets a building manager or homeowner adjust power, temperature, operation mode, and scheduling remotely, useful for a small commercial space where nobody is on site to walk over to a thermostat.",
        ],
      },
      {
        heading: "Quiet by Engineering",
        paragraphs: [
          "A hybrid sirocco fan, which blends the strengths of a sirocco fan and a turbo fan, works alongside a dual band acoustic meta structure to keep operation down to about 20.5 decibels, quieter than a typical library, while still reaching up to 150 pascals of external static pressure.",
        ],
      },
      {
        heading: "Reliability Where It Counts",
        paragraphs: [
          "Underneath, a high efficiency motor with high viscosity lubrication and a double coated shaft is paired with a built in drain pump rated for 900 millimeters of lift, and a corrugated fin heat exchanger that improves drainage and keeps performance steady over time.",
          "Insulation throughout carries antimicrobial protection, and a dual sensor system, one in the indoor unit and one in the remote controller, works together to automatically find the most balanced comfort setting for a room rather than relying on a single fixed reading.",
        ],
      },
      {
        heading: "Availability",
        paragraphs: [
          "Remote monitoring and control are available through the connected home app, so building managers and homeowners alike can check on a unit without a service visit.",
          "The unit begins shipping in August across the Middle East, Africa, Asia, and Europe, with installation support and an extended warranty for early adopters.",
        ],
      },
    ],
    category: "Product Launch",
    date: "2026-07-29",
    image: "/images/news/2.png",
    homeFeature: true,
  },
  {
    slug: "instaview-refrigerator-5-3-million",
    heading: "InstaView Refrigerator Surpasses 5.3 Million in Global Sales",
    excerpt:
      "A decade after its debut, the knock twice, see inside refrigerator door has passed 5.3 million units sold worldwide, roughly one unit every minute since launch.",
    body: [
      {
        heading: "A Decade, One Knock at a Time",
        paragraphs: [
          "InstaView refrigerators have now sold more than 5.3 million units globally since the line launched in 2016, a milestone reached on its tenth anniversary and equal to roughly one unit sold every minute over that span.",
          "Reaching that number took steady, unglamorous growth rather than one dramatic launch year, a decade of the same door design quietly becoming the default expectation for a premium refrigerator rather than a novelty feature bolted onto one.",
        ],
      },
      {
        heading: "Where the Growth Is Coming From",
        paragraphs: [
          "North America remains the strongest market at close to 30 percent of cumulative sales, while Europe has embraced the line for its energy efficiency, and demand is climbing steadily across Asia and Latin America as more households look for premium, dependable appliances.",
        ],
      },
      {
        heading: "A Small Habit With a Big Payoff",
        paragraphs: [
          "The knock twice, see inside door remains the signature idea: a glass panel that lights up with two knocks, letting anyone check what is inside without opening the door and losing cold air in the process, a small habit that adds up to real energy savings over a decade of use.",
        ],
      },
      {
        heading: "Recognition That Keeps Coming",
        paragraphs: [
          "The design has picked up recognition along the way, including a Red Dot Design Award, an iF Design Award, an IDEA award, and a CES Innovation Award, evidence that a good idea can keep earning its keep years after it first shipped.",
        ],
      },
      {
        heading: "From Feature to Habit",
        paragraphs: [
          "What has changed most is how customers talk about it. Early reviews focused on convenience and energy savings, the practical case for the feature. A decade in, reviews increasingly describe it as part of how a household enjoys its kitchen day to day, less a spec and more a habit.",
          "As one appliance leader put it, the milestone reflects success in creating not just an innovative feature, but a more convenient and enjoyable kitchen experience, one that keeps customers coming back for the next one.",
          "Ten years on, the team is already applying the same thinking to newer refrigerator lines, looking for the next small daily friction worth designing away.",
        ],
      },
    ],
    category: "Company News",
    date: "2026-07-24",
    image: "/images/news/5.png",
    homeFeature: true,
  },
  {
    slug: "micro-rgb-evo-ai-cloud-gaming",
    heading: "A New Reality in Pure Color: How Micro RGB evo AI Redefines Cloud Gaming",
    excerpt:
      "A new display technology pairs independently addressable micro LEDs with an onboard AI processor, bringing console quality color and motion handling to cloud gaming.",
    body: [
      {
        heading: "A New Standard for Color",
        paragraphs: [
          "Micro RGB evo AI brings a new standard of color to cloud gaming, pairing independently addressable micro LEDs with an onboard AI processor built around a dual AI engine that continuously tunes contrast and motion scene by scene.",
          "Reviewers describe the picture as not only bright and high contrast, but exceptionally rich in color, even during fast moving action sequences that usually punish lesser panels.",
        ],
      },
      {
        heading: "Certified, Not Just Claimed",
        paragraphs: [
          "Independent testing bodies have certified the panel for its color accuracy and coverage. One certification validates a high purity RGB color spectrum, while another confirms full color coverage and fine grained control across the entire color range, the kind of third party validation that separates a marketing claim from a measurable result.",
        ],
      },
      {
        heading: "Built to Handle Fast Motion",
        paragraphs: [
          "Micro dimming adds deeper contrast by controlling brightness across far smaller zones than typical LCD backlighting, while AI powered upscaling sharpens lower resolution streams, which matters more than ever now that so much play happens over a network connection rather than from a disc or a download.",
          "A 330 level motion booster paired with variable refresh rate support keeps fast scenes clean and free of artifacts, addressing the single biggest visual complaint players have historically had with streamed gaming on a large screen.",
        ],
      },
      {
        heading: "Console Grade Tools, Streamed",
        paragraphs: [
          "For the first time, console grade gaming tools, including a black stabilizer that brightens dark scenes without washing out the rest of the picture, blue light reduction for long sessions, quick controller pairing, and settings tuned by game genre, are now available for cloud gaming too, not just for consoles plugged in over a cable.",
          "A single, unified gaming portal brings together thousands of titles, cloud based and free to play alike, so players can move between services without juggling inputs or digging through a separate menu for every platform.",
        ],
      },
      {
        heading: "Where the Living Room Is Headed",
        paragraphs: [
          "The panel is aimed squarely at a shift already underway: fewer living rooms with a dedicated console tucked under the television, and more where the television has quietly become the console.",
        ],
      },
    ],
    category: "Innovation",
    date: "2026-07-23",
    image: "/images/news/4.png",
    homeFeature: true,
    featured: true,
  },
  {
    slug: "smart-telematics-mwc-2026",
    heading: "Unveiling the Next Generation Smart Telematics Solution at MWC Barcelona 2026",
    excerpt:
      "A connected vehicle platform for automakers, built to keep drivers informed and safe without pulling attention from the road, unveiled this week at Mobile World Congress in Barcelona.",
    body: [
      {
        heading: "One Module, Fewer Compromises",
        paragraphs: [
          "At Mobile World Congress in Barcelona, we unveiled a next generation telematics platform built for automakers who want to bring real time connectivity into their vehicles without adding complexity for the driver.",
          "The system combines a control unit and an antenna into a single module capable of handling multiple signal types at once, including next generation mobile networks, GPS, vehicle to everything communication, and satellite positioning, eliminating the traditional fin shaped antenna on the roof and giving designers a cleaner exterior to work with while simplifying the wiring and assembly process.",
        ],
      },
      {
        heading: "Built to Survive Everything a Vehicle Does",
        paragraphs: [
          "Engineers tested the platform across extreme conditions, from desert heat to arctic cold, holding it to the same reliability standard applied to every connected product that leaves the building, since a telematics module that fails is not just an inconvenience but a safety concern.",
          "Predictive maintenance alerts are built to flag developing issues, a worn component or a battery trending toward failure, before they turn into a breakdown, giving drivers and fleet managers a window to act rather than react.",
        ],
      },
      {
        heading: "A Market Already Being Led",
        paragraphs: [
          "Independent research already places the platform's maker at the top of the global telematics market, holding close to a quarter of it, a position built on years of designing the antennas, network hardware, and system architecture that make a connected vehicle actually work end to end rather than assembling parts from separate suppliers.",
        ],
      },
      {
        heading: "What Automaker Partners Are Saying",
        paragraphs: [
          "Automaker partners at the show praised how little retooling the platform required to integrate with existing vehicle architectures, a detail that could speed adoption across multiple vehicle lines rather than requiring a ground up redesign.",
        ],
      },
      {
        heading: "What's Next",
        paragraphs: [
          "Select vehicle lines will begin shipping with the platform later this year, with additional automaker partnerships expected to follow as the connected car category keeps expanding.",
        ],
      },
    ],
    category: "Innovation",
    date: "2026-03-03",
    image: "/images/news/3.png",
    homeFeature: true,
  },
  {
    slug: "outdoor-party-speaker-launch",
    heading: "A Powerful New Party Speaker Built for Outdoor Freedom",
    excerpt:
      "A rugged, high output speaker built to keep the music going well past sunset, wherever the party moves next.",
    body: [
      {
        heading: "Built for Wherever the Party Moves",
        paragraphs: [
          "Built for backyards, beaches, and everywhere in between, the new outdoor party speaker pairs high output sound with a rugged shell rated to handle splashes, dust, and the occasional drop, the kind of speaker that is meant to get knocked around a little.",
          "Power tops out at 220 watts when plugged into wall power and 210 watts on battery alone, delivered through two 5.25 inch woofers and two tweeters tuned for outdoor listening, where sound has to compete with wind, distance, and a crowd.",
        ],
      },
      {
        heading: "Power That Lasts as Long as the Night Does",
        paragraphs: [
          "A replaceable battery rated at 99 watt hours, combined with playback enhancing technology, is good for up to 36 hours on a single charge, and the pack can be swapped out entirely rather than waiting around for a recharge in the middle of a party.",
        ],
      },
      {
        heading: "Rugged Enough to Get Knocked Around",
        paragraphs: [
          "The shell carries an IP68 rating and has been run through seven separate durability tests for dust and water exposure, the kind of standard usually reserved for equipment built to work outdoors every day, not just survive the occasional rained out afternoon.",
        ],
      },
      {
        heading: "Sound That Adjusts Itself",
        paragraphs: [
          "Sound tuning happens in real time: the system reads what is playing and adjusts automatically, adapts its output to the surrounding space, and widens the perceived soundstage so a single speaker can fill more of a yard than its size would suggest. A lighting ring syncs to the music for a bit of visual energy after dark.",
          "Two units can be paired wirelessly for stereo sound across a bigger space, and a companion app lets anyone adjust sound profiles and lighting patterns from a phone rather than fumbling with a dial in the dark.",
        ],
      },
      {
        heading: "A Shape Borrowed From a Duffel Bag",
        paragraphs: [
          "The shape borrows from a duffel bag rather than a typical speaker box, with a top handle and a flexible rope handle for carrying it upright, a durable fabric exterior, and protective bumpers on the sides, a design that earned a Red Dot Design Award this year.",
        ],
      },
      {
        heading: "Availability",
        paragraphs: [
          "It is rolling out in select markets this month, with additional territories following later in the year.",
        ],
      },
    ],
    category: "Product Launch",
    date: "2026-08-10",
    image: "/images/news/outdoor-party-speaker-launch-new.png",
  },
  {
    slug: "linearcooling-ai-gourmet-dinner-ideas",
    heading: "How Even Cooling and AI Gourmet Turn What's Already in Your Fridge Into Dinner",
    excerpt:
      "A refrigerator feature that turns what is already inside into dinner suggestions, cutting down on food waste and last minute takeout runs.",
    body: [
      {
        heading: "The Real Obstacle Isn't the Food",
        paragraphs: [
          "Busy schedules have quietly changed how people manage a kitchen. Groceries get bought with good intentions, then plans shift, dinners get skipped, and by midweek nobody is quite sure what is still good in the back of the fridge.",
          "That uncertainty is often the real obstacle, more than the food itself. When people are not cooking regularly, they lose the intuitive sense of how long something has been sitting, and it becomes easier to order in than risk a questionable ingredient, even when it would have been perfectly fine to use.",
        ],
      },
      {
        heading: "Half the Answer Is Steadier Cooling",
        paragraphs: [
          "Even temperature cooling addresses half of that problem by holding steady internal temperatures and reducing the swings that quietly degrade food quality, so ingredients, even ones pushed to the back of a shelf, stay usable for longer than expected.",
        ],
      },
      {
        heading: "The Other Half Is a Quick Photo",
        paragraphs: [
          "A new AI powered feature addresses the other half. A quick photo of what is on the shelves is enough for the system to recognize common ingredients and suggest a handful of ways to use them before they go to waste, right down to swapping in whatever is already on hand for an ingredient a recipe calls for but the fridge does not have.",
          "It works alongside a conversational assistant built into the refrigerator's display, so a question as simple as what can I make with this can return a real answer instead of an empty search bar, no separate app or device required.",
        ],
      },
      {
        heading: "Closing the Gap Between Having and Using",
        paragraphs: [
          "Together, the two pieces cover the full cycle, keeping food fresh and then closing the gap between having ingredients and knowing what to do with them, which is usually where good intentions quietly fall apart.",
        ],
      },
      {
        heading: "What's Next",
        paragraphs: [
          "The feature rolls out first on select refrigerator models this fall, with more recipe sources and language support planned for early next year.",
        ],
      },
    ],
    category: "Innovation",
    date: "2026-08-06",
    image: "/images/news/linearcooling-ai-gourmet-dinner-ideas.png",
  },
  {
    slug: "ifa-2026-invitation",
    heading: "An Invitation to Experience Innovation in Tune With You at IFA 2026",
    excerpt:
      "An open invitation to see this year's newest home electronics and entertainment lineup in person at IFA in Berlin.",
    body: [
      {
        heading: "A Stand Built Around One Idea",
        paragraphs: [
          "This year's presence at IFA in Berlin runs September 4 through 8, and the stand is built around one idea: technology that adapts to a household rather than asking the household to adapt to it.",
          "The theme for this year's showcase is innovation in tune with you, a phrase meant to describe the whole stand rather than any single product on it, three focus areas, living spaces, energy, and connectivity, working together rather than being demonstrated as separate booths.",
        ],
      },
      {
        heading: "A Connected Home That Adapts",
        paragraphs: [
          "The centerpiece is an expanded version of last year's connected appliance showcase, built further around European living patterns, bringing products, services, and AI powered experiences together on one floor rather than presenting them as separate categories.",
        ],
      },
      {
        heading: "What Visitors Will See",
        paragraphs: [
          "Visitors will get a close look at this year's newest displays, with an emphasis on picture and sound quality tuned for how people actually watch, alongside the AI features now built into everyday appliances rather than sold as an add on.",
        ],
      },
      {
        heading: "The Sustainability Corner",
        paragraphs: [
          "A dedicated sustainability corner walks through the repair and take back programs behind the durability promise that runs through the whole lineup, the same reliability story that shows up everywhere else in the portfolio.",
        ],
      },
      {
        heading: "Plan Your Visit",
        paragraphs: [
          "The stand occupies Hall 18 at Messe Berlin for the full run of the show, with hands on demonstrations available throughout, plus press and partner briefings scheduled across the opening days.",
        ],
      },
      {
        heading: "Can't Make It to Berlin?",
        paragraphs: [
          "For anyone who cannot make it to Berlin in person, highlights from the stand will be shared on our channel afterward.",
        ],
      },
    ],
    category: "Company News",
    date: "2026-08-06",
    image: "/images/news/ifa-2026-invitation.png",
    featured: true,
  },
  {
    slug: "ultraview-windshield-display",
    heading: "How the UltraView Windshield Display Is Redefining the Future of Vehicle Displays",
    excerpt:
      "A windshield mounted display that projects speed, navigation, and hazard alerts directly into the driver's line of sight, without blocking the view ahead.",
    body: [
      {
        heading: "Too Many Screens, Too Little Attention",
        paragraphs: [
          "Modern vehicle interiors have a fragmentation problem. Navigation, safety alerts, entertainment, vehicle controls, and connected services are often spread across several separate screens, which means a driver's eyes are constantly shifting between the road and one display or another.",
        ],
      },
      {
        heading: "A Widening Gap Automakers Have to Close",
        paragraphs: [
          "As vehicles become more software defined, automakers face a real tension: add more digital functions without adding to that visual load. Vehicle safety assessment programs are tightening their standards around exactly this kind of eyes on the road interaction, and industry analysts project windshield mounted display hardware to grow from around 10 million units in 2025 to more than 25 million by 2032.",
        ],
      },
      {
        heading: "Not More Screens, Better Placed Information",
        paragraphs: [
          "Our answer is not more screens. The idea behind the new windshield display is to deliver the right information, in the right place, at the right time, rather than adding yet another panel to glance at.",
        ],
      },
      {
        heading: "How the System Works",
        paragraphs: [
          "The system works through two parts. A compact, focus free augmented reality head up display projects driving critical information, speed, safety alerts, and navigation cues, at a virtual distance aligned with the road ahead. A separate hover screen presents navigation details, vehicle status, climate controls, and media at a perceived distance of about 1.2 meters, closer to where a passenger might hold a tablet.",
          "The two parts share a single optical system rather than working as separate hardware bolted together, and the balance between them shifts automatically depending on what is happening on the road, leaning more on the road aligned layer during a complex intersection and more on the hover screen while parked or cruising on an open highway.",
        ],
      },
      {
        heading: "Why Placement Matters",
        paragraphs: [
          "By placing different types of information at their own intended distance and position, the system cuts down on unnecessary eye movement rather than asking the driver to refocus back and forth between a close dashboard and a distant road.",
        ],
      },
      {
        heading: "Compact by Design",
        paragraphs: [
          "The hardware itself is compact, about 15 liters in total, and covers a combined field of view of 25 by 7 degrees. When switched off, there is no black masking across the windshield, so outward visibility and the interior's look are unaffected when the display is not in use.",
        ],
      },
      {
        heading: "What This Looks Like on the Road",
        paragraphs: [
          "In practice, that might mean a pedestrian alert appearing directly in a driver's forward view at a busy intersection, an outline of the road ahead overlaid during heavy rain when visibility drops, updated lane guidance appearing as a route recalculates around congestion, or, while parked and waiting, a large virtual screen for a few minutes of entertainment without straining to see a small dashboard display.",
        ],
      },
      {
        heading: "Recognition for Early Stage Innovation",
        paragraphs: [
          "The system was recently named a finalist for a leading automotive industry innovation award that recognizes early stage, not yet commercialized ideas that have already proven themselves through real pilot programs rather than concept sketches alone, a signal that the technology is closer to production than a typical concept car feature.",
        ],
      },
      {
        heading: "A Windshield That Does More",
        paragraphs: [
          "For drivers, the goal is fewer gaze shifts and information that is easier to recognize at a glance. For automakers, it is a more flexible way to design a digital cockpit, with a compact optical footprint that eases packaging constraints and no black masking to compromise the interior's finish.",
          "The idea, ultimately, is that a windshield does not have to stay a simple pane of glass. Treated as an intelligent information surface, it can support a calmer, more intuitive experience behind the wheel instead of adding to what a driver already has to keep track of.",
        ],
      },
    ],
    category: "Innovation",
    date: "2026-08-05",
    image: "/images/news/ultraview-windshield-display.png",
    featured: true,
  },
  {
    slug: "laundry-as-a-total-business-solution",
    heading: "Beyond the Machine: Laundry as a Total Business Solution",
    excerpt:
      "Beyond the machine, a look at how commercial laundry has grown into a full service partnership with hotels, hospitals, and senior care facilities.",
    body: [
      {
        heading: "From Selling Machines to Standing Behind Them",
        paragraphs: [
          "For years, commercial laundry meant selling a machine and walking away. Increasingly, for operations that run around the clock, hotels, hospitals, senior care facilities, it means something closer to a long term partnership, complete with maintenance plans, usage monitoring, and on site support.",
        ],
      },
      {
        heading: "A Market That Rewards Less Hassle",
        paragraphs: [
          "The market itself has shifted. Operational efficiency has overtaken raw capacity and performance as the main concern for buyers, and rising labor and energy costs are pushing hospitality and senior care operators in particular toward equipment that reduces their day to day burden rather than just doing the wash.",
        ],
      },
      {
        heading: "Not Just a Bigger Version of a Home Machine",
        paragraphs: [
          "A commercial washer is not simply a bigger version of a home machine. Where a home appliance is designed around convenience, a commercial unit is operational infrastructure, and durability, serviceability, energy use, and uptime all matter as much as wash quality.",
        ],
      },
      {
        heading: "A Lineup Built for Scale",
        paragraphs: [
          "The lineup spans six models built around that idea, washers in three capacities up to 30 kilograms, dryers in two capacities up to 30 kilograms, and an all in one washer dryer that handles a 25 kilogram wash and a 16 kilogram dry in a single footprint, sized for operations that cannot afford to run a laundry room in shifts.",
        ],
      },
      {
        heading: "Reading Every Load",
        paragraphs: [
          "Load sensing technology reads the weight of each load and adjusts water, detergent, energy use, and cycle length accordingly, and during drying the system monitors how items are drying to avoid wasting energy or overdrying fabric that is already done.",
        ],
      },
      {
        heading: "Balancing Act",
        paragraphs: [
          "A dynamic balancing system detects and corrects load imbalance during the spin cycle, which allows for spin speeds up to 1100 revolutions per minute, better water extraction, and less time spent in the dryer afterward, a small change that adds up across dozens of loads a day.",
        ],
      },
      {
        heading: "Where the Energy Savings Come From",
        paragraphs: [
          "Heat pump drying technology cuts energy use compared to conventional dryers, including what the team describes as the industry's first heat pump combination washer dryer and one of the largest capacity heat pump dryers available, with a ductless design that gives operators more flexibility in where units can be installed.",
        ],
      },
      {
        heading: "Maintenance Rebuilt Around Downtime",
        paragraphs: [
          "Maintenance was redesigned around a simple piece of feedback: downtime is the real cost. Front access service panels mean routine maintenance takes less time and fewer people, and a companion app gives operators a live dashboard across dozens of machines at once, with an open connection available for teams that want to plug the equipment into their own payment or management systems rather than adopt a new one.",
          "The motor at the center of it all draws on more than two decades of refinement and carries a five year limited warranty, the kind of commitment that only makes sense once durability, not just wash performance, becomes the actual product being sold.",
        ],
      },
      {
        heading: "Getting There",
        paragraphs: [
          "Getting there required building entirely new testing infrastructure sized for commercial equipment rather than home appliances, new facilities, new installations, and a fair amount of trial and error. The team describes the day the first units passed inspection and shipped to a customer as one of the more memorable milestones in the process, the shift from equipment manufacturer to a genuine operating partner finally made real.",
        ],
      },
    ],
    category: "Our Story",
    date: "2026-08-04",
    image: "/images/news/laundry-as-a-total-business-solution.png",
  },
  {
    slug: "bringing-classic-painting-instruction-to-the-living-room",
    heading: "Bringing a Classic Painting Show to the Biggest Screen in the House",
    excerpt:
      "A new content partnership brings hundreds of episodes of calm, brush by brush painting instruction to the same screen already playing everything else in the house.",
    body: [
      {
        heading: "Decades of Instruction, One Screen",
        paragraphs: [
          "A new content partnership brings decades of gentle, brush by brush painting instruction to the living room, available through the same screen already playing everything else in the house.",
        ],
      },
      {
        heading: "Hundreds of Episodes, Easy to Find",
        paragraphs: [
          "The collection spans hundreds of episodes, all easily searchable by season, color palette, or subject, from mountain landscapes to quiet forest scenes, the kind of programming built to be put on in the background and genuinely watched anyway.",
          "Each half hour episode follows the same unhurried format that made the original series a fixture of public television decades ago, one canvas, one instructor, no rush to a commercial break or a dramatic reveal, just a landscape slowly taking shape.",
        ],
      },
      {
        heading: "Part of a Bigger Gallery",
        paragraphs: [
          "It sits inside the television's built in content hub alongside a wider gallery of artwork, so a household can move between a slow painting lesson and a rotating wall of art without leaving the same screen or opening a new app.",
        ],
      },
      {
        heading: "Low Friction by Design",
        paragraphs: [
          "New viewers get a short trial period on the premium tier before deciding whether to continue, low friction by design for something meant to be discovered on a lazy afternoon rather than sought out.",
        ],
      },
      {
        heading: "A Deliberate Bet on Slower Television",
        paragraphs: [
          "It is a small, deliberate bet on slower, more mindful programming at a time when most recommendations are optimized for the opposite, and early viewership suggests plenty of people are happy to sit still for a while and watch someone else work.",
        ],
      },
      {
        heading: "What's Next",
        paragraphs: [
          "The full collection is available now, with more classic, calming programming planned to join it over time.",
        ],
      },
    ],
    category: "Our Story",
    date: "2026-08-03",
    image: "/images/news/bringing-classic-painting-instruction-to-the-living-room.png",
  },
  {
    slug: "the-refrigerator-door-that-never-stopped-opening",
    heading: "Each Sunny Weekend, the Refrigerator Door Never Stopped Opening",
    excerpt:
      "A weekend at home, a full house, and a refrigerator door that barely closed, a small story about why cooling built for real life matters.",
    body: [
      {
        heading: "The Weekend the Door Never Closed",
        paragraphs: [
          "Some Saturdays, the refrigerator door barely gets a rest. Neighbors drop by, kids raid the shelves between games, and someone is always looking for the last cold drink in the back, the kind of weekend that turns hosting into a full time job by early afternoon.",
          "By four o'clock the ice trays are empty twice over, the fruit platter has been picked at by a dozen different hands, and somebody's toddler has opened the door three times just to feel the cold air on a hot day, the kind of afternoon a refrigerator either handles quietly or does not handle at all.",
        ],
      },
      {
        heading: "A Stress Test No Lab Can Replicate",
        paragraphs: [
          "It is the kind of everyday stress test no lab can fully replicate: dozens of open and close cycles in a single afternoon, each one asking the compressor to recover fast enough that nothing inside starts to warm before the next round of guests arrives.",
        ],
      },
      {
        heading: "Learning a Household's Rhythm",
        paragraphs: [
          "AI Fresh is built with exactly that pattern in mind. Rather than reacting after the door has already been opened repeatedly, it learns a household's habits over a few weeks, recognizes when heavy use is coming, typically a sunny weekend with a full house, and starts cooling in advance so temperature swings stay minimal even as the door keeps swinging.",
          "That kind of steady, anticipatory cooling is what keeps a fruit platter crisp and a cheese board holding its texture from the first guest to the last, instead of the slow, unnoticed decline that usually sets in a few hours into a long gathering.",
        ],
      },
      {
        heading: "Reading the Room Itself",
        paragraphs: [
          "The same thinking applies to the room itself. DualCool AI uses built in sensors to read temperature and humidity, then automatically adjusts airflow and direction as a space fills with people and the air changes around them, no manual thermostat fiddling required mid party.",
        ],
      },
      {
        heading: "Designed to Disappear",
        paragraphs: [
          "Both systems work quietly in the background by design. The point is not a new setting to learn or a dial to remember to adjust, it is one less thing to think about while everyone is actually hosting.",
        ],
      },
      {
        heading: "The Quiet Kind of Reliability",
        paragraphs: [
          "It is a small, unglamorous kind of reliability, the sort you only really notice on the one weekend when everyone shows up at once and nothing runs out, warms up, or gets uncomfortable.",
        ],
      },
    ],
    category: "Our Story",
    date: "2026-07-29",
    image: "/images/news/the-refrigerator-door-that-never-stopped-opening.png",
  },
  {
    slug: "robotics-business-center-launch",
    heading: "Establishing a Robotics Business Center to Accelerate Future Growth",
    excerpt:
      "A new business center focused on robotics and physical AI consolidates strategy, data, and manufacturing under one roof, with production of key components planned at home.",
    body: [
      {
        heading: "A New Organization, Reporting to the Top",
        paragraphs: [
          "A new robotics business center is now operating as its own end to end organization, covering business development, sales, and operations, reporting directly to executive leadership rather than sitting inside an existing division.",
        ],
      },
      {
        heading: "Physical AI as a Standalone Priority",
        paragraphs: [
          "The move arrived ahead of the usual annual reorganization cycle, a deliberate signal that robotics, and specifically physical AI, technology that lets a machine perceive and act in the real world rather than just process information, is being treated as a standalone strategic priority rather than a side project inside a larger team.",
        ],
      },
      {
        heading: "Led From the Factory Floor",
        paragraphs: [
          "Leading the center is an executive who spent years inside the company's production engineering research group, someone who has spent as much time on a factory floor as in a strategy meeting, a background that shapes how the center is being built.",
        ],
      },
      {
        heading: "A Data Factory for Training Robots",
        paragraphs: [
          "A dedicated data factory sits inside the new organization, tasked with collecting the operational data needed to train and improve a robot foundation model. Construction is already underway at a research campus in Seoul, with operations expected to begin later this year.",
          "The thinking behind it is straightforward, a robot that has to navigate the real world needs far more operational data than one that only has to answer questions, and building that pipeline early is treated as just as important as building the robots themselves.",
        ],
      },
      {
        heading: "One Unified Approach",
        paragraphs: [
          "The center is designed to pull together robotics capabilities that had been developing separately across the wider group, consolidating them into what leadership is calling one unified approach, while staying open to partnerships with outside technology companies rather than building everything alone.",
        ],
      },
      {
        heading: "Three Markets, One Pool of Parts",
        paragraphs: [
          "Strategy spans three markets at once: industrial robotics for factories and warehouses, commercial robotics for businesses like hospitality and retail, and residential robotics for the home, each pulling from the same pool of finished products, core components such as actuators, and shared data.",
        ],
      },
      {
        heading: "Building the Muscle at Home",
        paragraphs: [
          "Domestic production of actuators, the motors and joints that let a robot move with precision, is also part of the plan, drawing on more than 60 years of accumulated motor technology expertise, a reminder that this new venture is being built on decades of unglamorous mechanical engineering rather than starting from zero.",
        ],
      },
    ],
    category: "Company News",
    date: "2026-06-30",
    image: "/images/news/robotics-business-center-launch.png",
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return NEWS.find((item) => item.slug === slug);
}

export function formatNewsDate(date: string): string {
  const d = new Date(`${date}T00:00:00`);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
