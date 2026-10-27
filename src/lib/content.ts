// Central content source for the Polaris Renewable Solutions website.
// Sourced from "Polaris India Company Content 2026 (Humanized)".

export const company = {
  name: "Polaris Renewable Solutions Pvt. Ltd.",
  shortName: "Polaris",
  legalName: "Polaris Renewable Solutions Pvt. Ltd.",
  tagline: "Energy as an asset.",
  description:
    "Polaris Renewable Solutions works with commercial, industrial and utility customers to design, execute, finance and optimise renewable energy projects from concept through long-term operation.",
  email: "info@polarisenergy.in",
  phone: "+91 90848 11911",
  whatsapp: "+91 90848 11911",
  website: "www.polarisenergy.in",
  address: "Gangapur Road, Nashik 422 013, Maharashtra, India",
  founded: 2015,
};

export const offices = [
  {
    name: "Headquarters, India",
    entity: "Polaris Renewable Solutions Pvt. Ltd.",
    address:
      "6, Sankalp Bungalow, Shankar Nagar, Savarkar Nagar, Gangapur Road, Nashik 422 013, Maharashtra, India",
    phone: "+91 90848 11911",
    phones: ["+91 90848 11911", "+91 93729 38936", "+91 77678 31717"],
    email: "info@polarisenergy.in",
  },
  {
    name: "Morocco Office",
    entity: "Polaris Global Energie SARL",
    address:
      "50-52 BIS Boulevard Abdellatif Ben Kaddour, Etage 3, Appt DTE, Casablanca, Kingdom of Morocco",
    phone: "+212 66 06 07626",
    phones: ["+212 66 06 07626", "+212 708 258599"],
    email: "maroc@polarisenergie.ma",
  },
];

// Only `presence` is used now (homepage 'From India to the world').
export const global = {
  presence: [
    {
      market: "India",
      status: "Headquartered in Nashik",
      detail:
        "Pan-India C&I execution with a growing utility-scale portfolio, covering engineering, procurement, project management, finance support and long-term asset services.",
    },
    {
      market: "Morocco",
      status: "Operating base",
      detail:
        "Polaris Global Energie SARL supports C&I, utility-scale and energy-optimisation opportunities in Morocco, with an early C&I rooftop reference in Tangier.",
    },
    {
      market: "MENA",
      status: "Regional partners",
      detail:
        "Regional partners add industrial EPC, fabrication and large-project execution capability where required, while international project exposure strengthens our approach to safety, standards, supply chain and project controls.",
    },
  ],
};

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Polarisenergysolutions/",
  },
  {
    label: "X",
    href: "https://x.com/polaris_nashik",
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/polaris-renewable-solutions-pvt-ltd",
  },
  // TODO: replace with the real Polaris YouTube channel URL before launch.
  { label: "YouTube", href: "https://www.youtube.com/" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/polaris_solar_solutions/",
  },
];

export const nav: {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}[] = [
  { label: "About", href: "/about" },
  { label: "Our Approach", href: "/our-approach" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Commercial & Industrial",
        href: "/solutions/commercial-industrial",
      },
      { label: "Utility Scale", href: "/solutions/utility-scale" },
      { label: "Finance Solutions", href: "/solutions/finance-solutions" },
      {
        label: "Energy Optimisation Consultant",
        href: "/solutions/energy-optimisation-consultant",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "P-ESS", href: "/p-ess" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

// Headline figures, "Polaris at a Glance"
export const stats = [
  { value: "650+", label: "Successful projects" },
  { value: "125 MW+", label: "Installed capacity" },
  { value: "100+", label: "Team members" },
  { value: "2015", label: "Founded in India" },
];

export const glance = [
  { value: "650+", label: "Successful projects" },
  { value: "125 MW+", label: "Installed capacity" },
  { value: "100+", label: "Team members" },
  { value: "2015", label: "Founded in India" },
  { value: "India + Morocco", label: "Operational presence" },
];

// How an engagement runs, condensed from the Solutions lifecycle.
export const process = [
  {
    step: "01",
    title: "Assessment & financial modelling",
    body: "Review load, tariff, site constraints and operating priorities, then compare technical options, commercial models and expected returns before the project structure is decided.",
    image: "/img/process/model-financial.jpg",
  },
  {
    step: "02",
    title: "Engineering & procurement",
    body: "Structural, electrical and energy-yield design built around actual site conditions, with Tier-1 technology chosen for fit, warranty and service support.",
    image: "/img/process/engineering-design.jpg",
  },
  {
    step: "03",
    title: "Construction & commissioning",
    body: "Execution managed with clear project controls, safety systems and QA/QC, then tested, documented and handed over properly.",
    image: "/img/process/epc-execution.jpg",
  },
  {
    step: "04",
    title: "Monitoring & O&M",
    body: "Generation, alarms and equipment health monitored through SCADA, with preventive maintenance and ongoing analysis to keep performance up.",
    image: "/img/process/om-25yr.jpg",
  },
];

// Indicative environmental impact, derived from 125 MW+ installed at a
// ~15% capacity factor and India's ~0.71 tCO2/MWh grid factor. Replace with
// measured portfolio generation once available.
export const impact = {
  note: "Indicative, based on 125 MW+ of installed Polaris capacity.",
  items: [
    { value: "131 GWh", label: "Clean energy generated each year" },
    { value: "93,000 t", label: "CO₂ emissions avoided each year" },
    { value: "1.5M", label: "Mature trees, equivalent annual absorption" },
    { value: "12,000", label: "Indian homes powered for a year" },
  ],
};

export const testimonials = [
  {
    quote:
      "In hospitality, energy planning needs to account for guest comfort and daily operations. We appreciated Polaris' understanding of these priorities and their practical approach to discussing solar for our properties.",
    name: "Mr. Vipin Chandak",
    role: "Director",
    org: "Panchavati Group of Hotels",
  },
  {
    quote:
      "We valued Polaris Renewable Solutions' thoughtful approach to our energy requirements. Their clear explanations helped us consider how solar could support both our business priorities and sustainability goals.",
    name: "Mr. Y. M. Singh",
    role: "Director",
    org: "Samsonite Asia Pvt. Ltd.",
  },
  {
    quote:
      "Polaris approached our requirements with patience and professionalism. We valued their willingness to answer questions and help us understand the options available for our business.",
    name: "Mr. N. P. Kedar",
    role: "Director",
    org: "RM Drip & Sprinkler Systems Ltd.",
  },
  {
    quote:
      "Polaris Renewable Solutions brought clarity to our solar discussions. Their team took the time to understand our requirements and explain the technical and commercial considerations in a practical way.",
    name: "Mr. Sanjay Kacheria",
    role: "Director",
    org: "Neo Wheels Ltd",
  },
  {
    quote:
      "An energy solution must work with the realities of daily operations. We appreciated the Polaris team's focus on understanding our facility and discussing practical considerations alongside the system design.",
    name: "Mr. Sachin Dalvi",
    role: "General Manager",
    org: "Zenith Metaplast Pvt. Ltd.",
  },
];

// Homepage "Our Solutions", the four offering categories. Each has its
// own page at /solutions/<slug>.
export type CoveragePoint = { title: string; body: string };

export type OfferingCta = { label: string; href: string };
export type IconName =
  | "coins"
  | "cycle"
  | "calendar"
  | "tower"
  | "partners"
  | "battery"
  | "loop"
  | "trend"
  | "cost"
  | "scale"
  | "gauge"
  | "shield"
  | "mountain"
  | "blocks"
  | "pie"
  | "target"
  | "checklist"
  | "doc"
  | "bars"
  | "cashflow"
  | "percent"
  | "roof"
  | "land"
  | "plug"
  | "monitor"
  | "sun"
  | "sunbattery";

export type OfferingOutcome = {
  title: string;
  body: string;
  icon: IconName;
  // A supplied icon file; used instead of the illustration when set.
  iconSrc?: string;
};
export type OfferingChecklistItem = { title: string; body: string };
export type OfferingScopeItem = {
  title: string;
  body?: string;
  icon: IconName;
  // Opens as a checklist when present.
  checklist?: OfferingChecklistItem[];
};
export type OfferingStep = {
  title: string;
  body?: string;
  icon: IconName;
  // A photo for the step card; falls back to the illustration.
  image?: string;
};
export type OfferingFaq = { q: string; a?: string };

export type Offering = {
  slug: string;
  // Short label + one-liner: used by the nav, footer and homepage cards.
  title: string;
  summary: string;
  // Page content, from "Solution Pages Content for Polaris Website".
  heroHeadline: string;
  intro: string;
  heroCta: OfferingCta;
  // Hero photo. `projectSlug` adds a caption chip from that real project.
  heroImage: { src: string; alt: string; projectSlug?: string };
  outcomes: OfferingOutcome[];
  scope: OfferingScopeItem[];
  howItWorks: { steps: OfferingStep[]; receive?: string[] };
  waysToPay?: {
    options?: { label: string; icon: IconName }[];
    table?: { columns: string[]; rows: string[][] };
    scenarios?: {
      heading: string;
      items: { when: string; then: string; icon: IconName }[];
    };
    note?: string;
    link?: OfferingCta;
  };
  // Questions are from the content doc. The doc had no answers, so the
  // answers below are DRAFTS written from existing site content, not
  // client-approved copy. Review before treating as final. The FAQ section
  // only renders entries that have an answer.
  faq: OfferingFaq[];
};

// The "current 15-item list" for Utility Scale: 6 scope-of-work items plus
// 9 electrical-infrastructure & grid-evacuation items.
const utilityScope: Record<string, OfferingChecklistItem> = {
  engineering: {
    title: "Project engineering",
    body: "Feasibility, front-end engineering, layouts, detailed design and energy-yield studies",
  },
  civil: {
    title: "Civil & site development",
    body: "Survey coordination, earthworks, grading, foundations, piling, trenches and roads",
  },
  mechanical: {
    title: "Mechanical execution",
    body: "Assembly and alignment of tracker or fixed-tilt structures, module installation",
  },
  electrical: {
    title: "Electrical & power systems",
    body: "DC/AC networks, inverters, transformers, switchgear, MV/HT systems",
  },
  scada: {
    title: "SCADA & grid integration",
    body: "Monitoring and controls, evacuation systems, grid synchronisation",
  },
  commissioning: {
    title: "Testing & commissioning",
    body: "Pre-commissioning, documentation, handover and final performance checks",
  },
  substation: {
    title: "Substation civil works",
    body: "Foundations and equipment support structures",
  },
  switchgear: {
    title: "HT switchgear",
    body: "11 kV / HT switchgear and panels",
  },
  transformers: {
    title: "Transformers",
    body: "And associated electrical equipment",
  },
  htCabling: {
    title: "HT cabling",
    body: "Power cables, cable trenches and termination systems",
  },
  protection: {
    title: "Protection & control",
    body: "Protection, control and metering panels",
  },
  earthing: {
    title: "Earthing & lightning protection",
    body: "Systems built to code",
  },
  acAux: {
    title: "AC auxiliary systems",
    body: "Supporting the plant's electrical needs",
  },
  cableWorks: {
    title: "Cable works",
    body: "Laying, glanding, termination, identification and ferruling",
  },
  electricalTesting: {
    title: "Electrical testing",
    body: "Protection testing, pre-commissioning and commissioning support",
  },
};

const utilityAll = Object.values(utilityScope);

export const offerings: Offering[] = [
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial",
    summary:
      "On-site and off-site solar, storage and electrical solutions built around industrial load profiles, site conditions and savings goals.",
    heroHeadline:
      "Solar for factories, warehouses and campuses, sized to your load",
    intro:
      "Rooftop, ground-mounted and off-site solar with storage and HT/LT works, designed around how your facility actually uses power.",
    heroCta: { label: "Book a site assessment", href: "/contact" },
    heroImage: {
      src: "/img/projects/kilitch.jpg",
      alt: "Industrial rooftop solar plant at a Polaris client facility",
      projectSlug: "kilitch-healthcare",
    },
    outcomes: [
      {
        title: "Lower power cost",
        icon: "cost",
        iconSrc: "/icons/outcomes/cost-down.svg",
        body: "A large share of daytime consumption at a fixed, lower cost.",
      },
      {
        title: "No production downtime",
        icon: "shield",
        iconSrc: "/icons/outcomes/shield-check.svg",
        body: "Installed inside running plants under industrial safety protocols.",
      },
      {
        title: "Ready for what's next",
        icon: "battery",
        iconSrc: "/icons/outcomes/battery-bolt.svg",
        body: "Electrical design leaves room for batteries and load growth.",
      },
    ],
    scope: [
      {
        title: "Rooftop",
        icon: "roof",
        body: "RCC, metal-sheet and bitumen roofs; zero-penetration mounting where the roof needs it.",
      },
      {
        title: "Ground captive",
        icon: "land",
        body: "Plants on land next to your facility.",
      },
      {
        title: "Off-site",
        icon: "tower",
        body: "Open access and group captive when your roof isn't enough.",
      },
      {
        title: "BESS & hybrid",
        icon: "battery",
        body: "Storage for peak shaving, backup and ToD savings.",
      },
      {
        title: "Electrical & O&M",
        icon: "plug",
        body: "HT/LT, transformers, substations, SCADA and long-term O&M.",
      },
    ],
    howItWorks: {
      steps: [
        {
          title: "Assess your load, tariff and roof structure",
          icon: "gauge",
          image: "/img/process/model-financial.jpg",
        },
        {
          title: "Engineer yield and structure",
          icon: "blocks",
          image: "/img/process/engineering-design.jpg",
        },
        {
          title: "Build inside your live plant",
          icon: "plug",
          image: "/img/process/epc-execution.jpg",
        },
        {
          title: "Monitor via SCADA with preventive O&M",
          icon: "monitor",
          image: "/img/process/om-25yr.jpg",
        },
      ],
    },
    faq: [
      {
        q: "Will the installation affect my roof warranty or structure?",
        a: "We check the roof's structure before any design work, and use zero-penetration mounting where the roof needs it, so the roof isn't drilled into. Warranty terms depend on the roofing material and its manufacturer, so we review your roof's warranty position during the site assessment.",
      },
      {
        q: "Will production be disrupted during installation?",
        a: "No production downtime is the aim: plants are installed inside running facilities under industrial safety protocols, with the work planned around your operations. If a short, planned shutdown is needed for the electrical connection, it is scheduled with your team in advance.",
      },
      {
        q: "How long does a 1 MWp rooftop plant take to install?",
        a: "It depends on the roof's condition, any structural work, equipment lead times and approvals. We give you a project schedule after the site assessment, once we have seen the roof and your electrical layout.",
      },
      {
        q: "Net metering or gross metering: what applies in my state?",
        a: "It depends on your state's regulations and on your connection. We confirm which metering arrangement applies to your site as part of the assessment, and size the plant to suit it.",
      },
      {
        q: "Can we add batteries later?",
        a: "Yes. The electrical design leaves room for batteries and load growth, so storage can be added later without reworking the plant. Battery and hybrid systems are part of our scope, delivered through P-ESS.",
      },
    ],
  },
  {
    slug: "utility-scale",
    title: "Utility Scale",
    summary:
      "Large ground-mounted solar and associated electrical works, from site development and BOS through testing, grid connection and commissioning.",
    heroHeadline: "Ground-mounted solar EPC, from bare site to grid connection",
    intro:
      "Engineering, civil, electrical and HT evacuation under one point of responsibility, so no interface slips between contractors.",
    heroCta: { label: "Share your project scope", href: "/contact" },
    heroImage: {
      src: "/img/projects/shriram.jpg",
      alt: "Ground-mounted solar plant delivered by Polaris",
      projectSlug: "shriram-stone-crusher",
    },
    outcomes: [
      {
        title: "One accountable partner",
        icon: "partners",
        body: "Civil, mechanical and electrical under one contract.",
      },
      {
        title: "Grid connection planned from day one",
        icon: "tower",
        body: "Evacuation is on the critical path, not an afterthought.",
      },
      {
        title: "Built for hard sites",
        icon: "mountain",
        body: "Rock, dust, monsoon and remote logistics.",
      },
    ],
    scope: [
      {
        title: "Full EPC",
        icon: "loop",
        body: "Design, supply, construction and commissioning of the whole plant.",
        checklist: utilityAll,
      },
      {
        title: "BOS only",
        icon: "blocks",
        body: "Everything except modules and inverters.",
        checklist: utilityAll,
      },
      {
        title: "Electrical & evacuation",
        icon: "tower",
        body: "Substation, HT switchgear, transformers, cabling, protection, earthing.",
        checklist: [
          utilityScope.electrical,
          utilityScope.scada,
          utilityScope.substation,
          utilityScope.switchgear,
          utilityScope.transformers,
          utilityScope.htCabling,
          utilityScope.protection,
          utilityScope.earthing,
          utilityScope.acAux,
          utilityScope.cableWorks,
          utilityScope.electricalTesting,
          utilityScope.commissioning,
        ],
      },
      {
        title: "O&M",
        icon: "monitor",
        body: "SCADA monitoring, preventive maintenance and performance reporting.",
      },
    ],
    howItWorks: {
      steps: [
        {
          title: "Site and grid study",
          icon: "gauge",
          image: "/img/process/model-financial.jpg",
        },
        {
          title: "Engineering & procurement",
          icon: "blocks",
          image: "/img/process/engineering-design.jpg",
        },
        {
          title: "Civil, mechanical and electrical execution",
          icon: "plug",
          image: "/img/process/epc-execution.jpg",
        },
        {
          title: "Testing, commissioning and SCADA handover",
          icon: "monitor",
          image: "/img/process/om-25yr.jpg",
        },
      ],
    },
    faq: [
      {
        q: "What project sizes do you take on?",
        a: "Tell us the capacity, site location and grid connection point, and we will confirm whether it is a fit and how we would scope it. Our ground-mounted portfolio includes captive plants of around 1 MWp.",
      },
      {
        q: "Can you do BOS only if we supply modules and inverters?",
        a: "Yes. BOS only covers everything except modules and inverters, which you supply: engineering, civil, mechanical and electrical works, evacuation and commissioning.",
      },
      {
        q: "Do you handle evacuation approvals and utility liaison?",
        a: "Yes. Grid integration is part of our scope: the evacuation line, the substation interface and liaison for the approvals involved. It is planned from day one, because evacuation sits on the critical path.",
      },
      {
        q: "How do you manage monsoon and remote-site logistics?",
        a: "By engineering for them at the start. The site and grid study comes first, followed by a geotechnical survey, site-specific foundation and drainage design, and a construction plan that accounts for the monsoon window and access to the site.",
      },
      {
        q: "Do you offer O&M after commissioning?",
        a: "Yes. O&M is a separate package: SCADA monitoring, preventive maintenance and performance reporting, so the plant keeps delivering after handover.",
      },
    ],
  },
  {
    slug: "finance-solutions",
    title: "Finance Solutions",
    summary:
      "CAPEX, OPEX / RESCO, captive, lease and financing support aligned with your capital, cash-flow and return priorities.",
    heroHeadline:
      "Solar finance options: own it, buy the power, or share a plant",
    intro:
      "We compare CAPEX, RESCO, lease and captive structures against your budget, cash flow and returns, in a model your CFO can sign off.",
    heroCta: { label: "Get a financial comparison", href: "/contact" },
    heroImage: {
      src: "/img/process/model-financial.jpg",
      alt: "Engineers reviewing a load analysis and financial model",
    },
    outcomes: [
      {
        title: "True landed cost",
        icon: "bars",
        body: "Grid, rooftop, open access, captive and storage compared together.",
      },
      {
        title: "Realistic returns",
        icon: "trend",
        body: "IRR and payback built on honest generation, tariff and cost assumptions.",
      },
      {
        title: "Fits the balance sheet",
        icon: "scale",
        body: "A structure matched to your cash-flow priorities.",
      },
    ],
    scope: [
      { title: "IRR, ROI & payback", icon: "trend" },
      { title: "Cash-flow projections", icon: "cashflow" },
      { title: "Depreciation & tax impact", icon: "percent" },
      { title: "Tariff & ToD sensitivity", icon: "gauge" },
      {
        title: "Debt / equity structure & lender documentation",
        icon: "coins",
      },
      { title: "Policy and subsidy review", icon: "doc" },
    ],
    howItWorks: {
      steps: [
        { title: "Share bills and site details", icon: "doc" },
        { title: "We model every option side by side", icon: "bars" },
        { title: "Board-ready business case", icon: "checklist" },
        { title: "Lender coordination and documentation", icon: "partners" },
      ],
    },
    waysToPay: {
      // Doc columns: Upfront investment · Who owns the asset · Who runs O&M
      // · Savings profile · Best for. Cell values for "Who runs O&M" and
      // "Savings profile" weren't supplied yet, so only the three columns
      // with source content are shown.
      table: {
        columns: [
          "Model",
          "Upfront investment",
          "Who owns the asset",
          "Best for",
        ],
        rows: [
          [
            "CAPEX",
            "High",
            "You",
            "Profitable firms wanting maximum lifetime savings and tax benefits",
          ],
          [
            "OPEX / RESCO",
            "Zero",
            "Developer",
            "Firms that want savings without using capital",
          ],
          [
            "Lease",
            "Low",
            "Lessor, then you",
            "Firms that want to spread cost and own later",
          ],
          [
            "Open access / captive",
            "Varies",
            "You or a developer",
            "Large loads with limited roof space",
          ],
          [
            "Group captive",
            "Equity share",
            "Group of consumers",
            "Mid-to-large users who want long-term low-cost power",
          ],
        ],
      },
      scenarios: {
        heading: "Which fits you?",
        items: [
          {
            when: "Capital available and tax appetite",
            then: "CAPEX",
            icon: "coins",
          },
          { when: "Want savings without capex", then: "RESCO", icon: "cycle" },
          {
            when: "Large load, not enough roof",
            then: "Open access or group captive",
            icon: "tower",
          },
        ],
      },
    },
    faq: [
      {
        q: "Which model gives the highest long-term savings?",
        a: "Ownership (CAPEX) typically gives the highest lifetime savings, because you keep all of the generation and claim the tax benefits. It also needs the most capital, so we compare it against the other models on your own numbers.",
      },
      {
        q: "Can we move from RESCO to ownership later?",
        a: "That depends on the contract. A buy-out option can be written into a RESCO agreement, and lease structures end in ownership. If you may want to own the plant later, we build that into the structure up front.",
      },
      {
        q: "How does accelerated depreciation affect returns?",
        a: "Under CAPEX, depreciation changes the after-tax cost of the plant and therefore its payback and IRR. We model it against your tax position, and your finance or tax advisers should confirm the current rate and your eligibility.",
      },
      {
        q: "What is group captive and who is eligible?",
        a: "Group captive is a co-investment structure in which a group of consumers shares ownership of a plant and takes its power under captive-power rules. Eligibility depends on those rules, including shareholding and consumption requirements, so we check it against your state and your load.",
      },
      {
        q: "Do you arrange loans?",
        a: "We help you arrange the financing: we structure the debt and equity case, prepare the lender documentation and coordinate with lenders and NBFCs for projects that need funding.",
      },
    ],
  },
  {
    slug: "energy-optimisation-consultant",
    title: "Energy Optimisation Consultant",
    summary:
      "A practical energy plan based on load, tariff, solar, storage, demand management and power-sourcing analysis.",
    heroHeadline: "Energy optimisation: know what to fix before you invest",
    intro:
      "A phased plan built from 12 months of bills and load data, with solar, storage, open access and demand options ranked by cost and return.",
    heroCta: { label: "Start with your last 12 bills", href: "/contact" },
    heroImage: {
      src: "/img/bess-plant.jpg",
      alt: "Battery energy storage alongside a solar plant",
    },
    outcomes: [
      {
        title: "See where the money goes",
        icon: "pie",
        body: "A clear breakdown of energy, demand and ToD cost.",
      },
      {
        title: "Right-sized, not biggest",
        icon: "target",
        body: "The combination that fits your operations and economics.",
      },
      {
        title: "A plan you can measure",
        icon: "checklist",
        body: "Phased steps with KPIs to track savings.",
      },
    ],
    scope: [
      { title: "Tariff, demand & power factor", icon: "gauge" },
      { title: "On-site solar potential", icon: "sun" },
      { title: "Off-site sourcing (open access, captive)", icon: "tower" },
      { title: "Battery sizing (peak shaving, backup)", icon: "battery" },
      { title: "Solar + storage combinations", icon: "sunbattery" },
      { title: "Financial comparison of models", icon: "bars" },
    ],
    howItWorks: {
      // The doc has "[x days]" / "[x weeks]" durations still to fill in.
      steps: [
        {
          title: "Share data",
          icon: "doc",
          body: "12 months of bills and load data.",
        },
        {
          title: "Analysis",
          icon: "pie",
          body: "Consumption, tariff and every realistic option modelled.",
        },
        {
          title: "Roadmap",
          icon: "checklist",
          body: "Phased plan with outcomes and KPIs, walked through with your team.",
        },
        {
          title: "Implementation & monitoring",
          icon: "monitor",
          body: "Support to execute and track results.",
        },
      ],
    },
    faq: [
      {
        q: "What data do we need to share?",
        a: "Twelve months of electricity bills and, where available, load or interval data. A site walk-through follows, so we can see the roof, land and electrical layout.",
      },
      {
        q: "How long does the review take?",
        a: "It depends on how quickly we receive your data and how many options need to be modelled. We confirm the timeline when we scope the review.",
      },
      {
        q: "Is it free? Are we obliged to build with Polaris?",
        a: "There is no obligation to build with Polaris. The review stands alone as a report and roadmap, and you decide what to do with it. We confirm the commercial terms for the review when we scope it.",
      },
      {
        q: "Does it cover battery storage?",
        a: "Yes. Battery sizing for peak shaving and backup is part of the review, along with solar + storage combinations ranked on cost and return.",
      },
      {
        q: "Can you review multiple sites together?",
        a: "Yes. Share the bills and load data for each site and tell us how they are connected through ownership or supply, and we will scope a combined review that compares options across them.",
      },
    ],
  },
];

export const solutions = [
  {
    slug: "capex",
    title: "CAPEX, Asset ownership",
    summary:
      "Turnkey EPC for clients who want to own the asset and capture the long-term savings directly.",
    points: [
      "Turnkey EPC delivery",
      "The client owns the asset",
      "Long-term savings captured directly",
      "Monitoring and O&M support after commissioning",
    ],
  },
  {
    slug: "opex",
    title: "OPEX / RESCO",
    summary:
      "Low or zero upfront investment structures where power is supplied under an agreed commercial framework, subject to project bankability and contract terms.",
    points: [
      "Low or zero upfront investment",
      "Power supplied under an agreed commercial framework",
      "Subject to project bankability and contract terms",
    ],
  },
  {
    slug: "open-access",
    title: "Open Access / Captive",
    summary:
      "Off-site power sourcing for businesses that need renewable energy at scale and want to reduce landed power cost.",
    points: [
      "Off-site renewable power at scale",
      "Aimed at reducing landed power cost",
      "Compared against on-site solar and grid supply",
    ],
  },
  {
    slug: "group-captive",
    title: "Group Captive",
    summary:
      "Co-investment structures that combine long-term renewable energy sourcing with captive-power regulations.",
    points: [
      "Co-investment structure",
      "Long-term renewable energy sourcing",
      "Aligned with captive-power regulations",
    ],
  },
  {
    slug: "lease",
    title: "Lease-based models",
    summary:
      "Structured payments that can reduce the initial capital burden and provide a defined route to ownership.",
    points: [
      "Reduced initial capital burden",
      "Structured payments",
      "A defined route to ownership",
    ],
  },
  {
    slug: "bess",
    title: "BESS & energy optimisation",
    summary:
      "BESS and solar + storage hybrid systems sized for peak shaving, demand management, backup and tariff optimisation.",
    points: [
      "Peak shaving and demand management",
      "Tariff optimisation",
      "Backup and reliability",
      "Selection based on chemistry, safety, BMS / EMS capability and duty cycle",
    ],
  },
  {
    slug: "epc",
    title: "End-to-end EPC & lifecycle management",
    summary:
      "One point of responsibility from feasibility and design through construction, commissioning, monitoring and long-term support.",
    points: [
      "Engineering to execution",
      "SCADA, monitoring and analytics",
      "O&M and performance optimisation",
      "Testing, commissioning and documented handover",
    ],
  },
  {
    slug: "advisory",
    title: "Project finance facilitation",
    summary:
      "Financial modelling, lender / NBFC coordination, documentation, applicable policy or subsidy review, and support with investment structuring.",
    points: [
      "Financial modelling",
      "Lender / NBFC coordination",
      "Documentation and investment structuring",
      "Policy or subsidy review",
    ],
  },
];

export const advantages = [
  {
    title: "Engineering-led approach",
    body: "Project decisions are supported by qualified technical teams, design reviews, simulation, structural analysis and performance modelling.",
  },
  {
    title: "Technology agnosticism",
    body: "Equipment is selected for the project, on performance, bankability, warranty and serviceability, rather than tied to a single brand.",
  },
  {
    title: "Proven industrial track record",
    body: "Work across live factories and demanding sites has built a practical understanding of safety, shutdowns, access, roof conditions and production continuity.",
  },
  {
    title: "Financial intelligence",
    body: "We connect engineering choices to IRR, payback, cash flow, tariff exposure and long-term operating economics.",
  },
  {
    title: "Full lifecycle ownership",
    body: "One point of responsibility from feasibility and design through construction, commissioning, monitoring and long-term support.",
  },
  {
    title: "Multi-geography capability",
    body: "Our India experience is complemented by an operating presence in Morocco and exposure to different engineering and project-delivery environments.",
  },
];

// Homepage "Why Polaris" trust row, a curated subset of `advantages`,
// tightened for a scannable 4-up.
export const trust = [
  {
    title: "Engineering-led approach",
    body: "Project decisions are supported by qualified technical teams, design reviews, simulation, structural analysis and performance modelling.",
  },
  {
    title: "One standard, every project",
    body: "A consistent approach to engineering, safety and quality, regardless of project size or location.",
  },
  {
    title: "Financial intelligence",
    body: "We connect engineering choices to IRR, payback, cash flow, tariff exposure and long-term operating economics.",
  },
  {
    title: "Full lifecycle ownership",
    body: "One point of responsibility from feasibility and design through construction, commissioning, monitoring and long-term support.",
  },
];

// Careers page
export const careers = {
  intro:
    "Polaris is a multidisciplinary, engineering-led team delivering energy projects across India and Morocco. We hire people who want to own an outcome end to end: the financial model, the design, the build and the long-term performance that follows.",
  roles:
    "Electrical and structural engineers, project managers, site engineers and energy analysts.",
  culture: [
    {
      title: "Engineering owns the call",
      body: "Systems are sized on fit and physics, not on a sales target. If you can defend the number, you make the decision.",
    },
    {
      title: "One team, whole lifecycle",
      body: "You follow a project from feasibility through commissioning into O&M, no hand-offs to a team that never saw the site.",
    },
    {
      title: "Cross-border by default",
      body: "Indian projects and Morocco operations run to the same standards. Good work travels; so can you.",
    },
    {
      title: "Financially literate",
      body: "Everyone here can read an IRR model. Understanding why a project makes sense is part of the job, not a finance silo.",
    },
  ],
  email: "info@polarisenergy.in",
};

// Homepage "Who we serve", industry segments, drawn from Polaris's
// live C&I project base.
export const segments = [
  {
    name: "Pharmaceutical",
    note: "Clean-room-grade power reliability with zero-penetration rooftop mounting on live facilities.",
  },
  {
    name: "Food & Beverage",
    note: "Centralised inverter architecture across large, non-uniform warehouse and plant roofs.",
  },
  {
    name: "Building Materials",
    note: "Terrain-engineered ground-mount with HT evacuation, delivered through the monsoon window.",
  },
  {
    name: "Manufacturing & Composites",
    note: "East-west racking and high-density layouts that flatten the daily generation profile.",
  },
  {
    name: "Mining & Minerals",
    note: "Robust structures for high-dust environments with 11 kV HT evacuation over distance.",
  },
  {
    name: "Warehousing & Logistics",
    note: "Fast rooftop deployment across multi-site portfolios under a single accountable team.",
  },
];

export const projects = [
  {
    name: "Kilitch Healthcare India Ltd.",
    slug: "kilitch-healthcare",
    image: "/img/projects/kilitch.jpg",
    images: ["/img/projects/kilitch.jpg"],
    location: "India",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "1.25 MWp",
    generation: "16.5 lakh units / year",
    savings: "₹12 lakh (approx. €10K)",
    status: "Commissioned",
    year: 2026,
    blurb:
      "Zero-penetration mounting across several roof levels and orientations, delivered inside a live manufacturing facility with future BESS integration in view.",
    highlights: [
      "Designed across several roof levels and orientations to make better use of the available area and generation potential.",
      "Used a zero-penetration mounting system to preserve roof integrity without drilling or structural modification.",
      "Planned the DC and AC system to reduce electrical losses and support consistent long-term generation.",
      "Completed the work inside a live manufacturing facility while maintaining plant operations and industrial safety controls.",
      "Kept future BESS integration in view while developing the electrical architecture.",
    ],
  },
  {
    name: "General Mills India Pvt. Ltd.",
    slug: "general-mills",
    image: "/img/projects/general-mills.jpg",
    images: ["/img/projects/general-mills.jpg"],
    location: "India",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "1.20 MWp",
    generation: "16 lakh units / year",
    savings: "₹15–20 lakh (approx. €14K–18.5K)",
    status: "Commissioned",
    year: 2025,
    blurb:
      "Delivered for a US-headquartered multinational under stringent safety and compliance requirements, with a centralised inverter architecture across non-uniform rooftops.",
    highlights: [
      "Delivered for a US-headquartered multinational under stringent safety and compliance requirements.",
      "Worked across multiple rooftops and orientations to make the best use of a non-uniform site layout.",
      "Used a centralised inverter architecture to manage complex cable routing without compromising system efficiency.",
      "Developed a clear cable-routing and protection plan for safe execution inside an operating facility.",
      "Designed the system with long-term reliability and maintainability in mind.",
    ],
  },
  {
    name: "Shriram Stone Crusher",
    slug: "shriram-stone-crusher",
    image: "/img/projects/shriram.jpg",
    images: ["/img/projects/shriram.jpg"],
    location: "India",
    tech: "Ground-Mounted Solar",
    model: "CAPEX",
    capacity: "1.10 MWp",
    generation: "14.5 lakh units / year",
    savings: "₹13.8 lakh (approx. €12.8K)",
    status: "Commissioned",
    year: 2025,
    blurb:
      "Controlled rock excavation, levelling and about 0.5 km of 11 kV HT evacuation, completed in 85 days despite heavy rainfall and a dust-intensive site.",
    highlights: [
      "Prepared a difficult site through controlled rock excavation and land levelling before installation began.",
      "Developed the layout and foundation approach around uneven and rugged ground conditions.",
      "Designed and executed approximately 0.5 km of 11 kV HT evacuation for reliable grid connection.",
      "Installed the dedicated HT transmission infrastructure required for safe long-distance power transfer.",
      "Completed the project in 85 days despite heavy rainfall, remote-site logistics and a dust-intensive operating environment.",
      "Selected and designed the system for durability in harsh industrial conditions.",
    ],
  },
  {
    name: "Forcon Infra Pvt. Ltd.",
    slug: "forcon-infra",
    image: "/img/projects/forcon.jpg",
    images: ["/img/projects/forcon.jpg"],
    location: "India",
    tech: "Ground-Mounted Solar",
    model: "CAPEX",
    capacity: "1 MWp",
    generation: "—",
    savings: "—",
    status: "Commissioned",
    year: 2025,
    blurb:
      "Designed for a high-dust mining environment with an 11 kV HT evacuation system, delivered from design to commissioning in a 45-day window.",
    highlights: [
      "Designed for a high-dust mining environment, with durability and long-term generation performance as key priorities.",
      "Built an 11 kV HT evacuation system to move power efficiently over distance.",
      "Sized and routed cables with protection and reliability across the full transmission route in mind.",
      "Completed design, installation and commissioning in a 45-day window.",
      "Adjusted module layout and tilt to improve generation under difficult site conditions.",
      "Provided earthing and lightning protection suited to an exposed mining-site environment.",
    ],
  },
  {
    name: "Indore Composite Pvt. Ltd.",
    slug: "indore-composite",
    image: "/img/projects/indore-composite.jpg",
    images: ["/img/projects/indore-composite.jpg"],
    location: "India",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "1 MWp",
    generation: "—",
    savings: "—",
    status: "Commissioned",
    year: 2025,
    blurb:
      "East-west racking on a high shed roof to raise module density and spread generation more evenly through the day.",
    highlights: [
      "Designed around the facility's east-west orientation so generation is spread more effectively through the day.",
      "Used the available shed height and roof geometry to increase module density through an east-west racking layout.",
      "Developed the structural and layout design around the actual roof conditions, with safety kept as a primary constraint.",
      "Focused on stable generation, wind loading and long-term structural performance.",
    ],
  },
  {
    name: "Advanced Enzyme Technologies Ltd.",
    slug: "advanced-enzyme-technologies",
    image: "/img/projects/advanced-enzyme.jpg",
    images: ["/img/projects/advanced-enzyme.jpg"],
    location: "India",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "1 MWp",
    generation: "—",
    savings: "—",
    status: "Commissioned",
    year: 2025,
    blurb:
      "A 1 MWp industrial rooftop solar plant delivered under the CAPEX model, and an important C&I credential in the Polaris portfolio.",
    // TODO: replace with verified project-specific engineering, execution and
    // performance details. The source deck repeated the Forcon Infra mining
    // highlights on this page, so only location, year, model, type and
    // capacity are confirmed.
    highlights: [
      "1 MWp industrial rooftop solar installation, delivered under the CAPEX (asset ownership) model.",
      "Completed in 2025 as part of the Polaris C&I portfolio in India.",
    ],
  },
];

export const clients = [
  "Bisleri",
  "Reliance",
  "Samsonite",
  "Indian Oil",
  "Parle",
  "General Mills",
  "Kilitch Healthcare",
  "Advanced Enzyme Technologies",
  "Seven Hills Beverages",
  "Indore Composite",
  "Forcon Infra",
  "Shriram Stone Crusher",
];

// Real Polaris client/partner logos. Files live in /public/img/clients/.
export const clientLogos = [
  { name: "Bisleri", src: "/img/clients/bisleri.svg" },
  { name: "Reliance Industries", src: "/img/clients/reliance.svg" },
  { name: "Samsonite", src: "/img/clients/samsonite.svg" },
  { name: "Indian Oil", src: "/img/clients/indian-oil.svg" },
  { name: "Parle Products", src: "/img/clients/parle.svg" },
  { name: "Hindustan Petroleum", src: "/img/clients/hindustan-petroleum.svg" },
  { name: "Siemens", src: "/img/clients/siemens.svg" },
  { name: "Radisson Hotels", src: "/img/clients/radisson.svg" },
  { name: "Gabriel", src: "/img/clients/gabriel.svg" },
  { name: "Haldex", src: "/img/clients/haldex.svg" },
  { name: "Mahle", src: "/img/clients/mahle.svg" },
];

export const values = [
  {
    title: "Our purpose",
    body: "To give businesses greater control over their energy cost, supply and long-term performance.",
  },
  {
    title: "Our mission",
    body: "To bring engineering, finance and execution together so energy investments deliver measurable business value.",
  },
  {
    title: "Our vision",
    body: "To build Polaris into a globally respected energy engineering company known for reliable projects and commercially sound solutions.",
  },
];

// Given its own dedicated section on the About page, not grouped with the
// three values above.
export const philosophy = {
  title: "Energy as an asset.",
  body: "A roof, a parcel of land, a load curve or a tariff can all create value when they are understood together. Our job is to turn that opportunity into a practical, investable energy solution.",
};

export const milestones = [
  {
    year: "2015–16",
    title: "Foundation",
    text: "Polaris Renewable Solutions enters the renewable energy sector and starts building its project and market base.",
  },
  {
    year: "2017",
    title: "Industrial entry",
    text: "The first major industrial solar project for Seven Hills Beverages (Bisleri) marks the move into C&I execution.",
  },
  {
    year: "2018",
    title: "1 MW milestone",
    text: "Cumulative installations cross the 1 MW mark.",
  },
  {
    year: "2019",
    title: "Regional expansion",
    text: "Cumulative installations reach approximately 7 MW across Maharashtra and Gujarat.",
  },
  {
    year: "2021–23",
    title: "Scaling operations",
    text: "The portfolio reaches approximately 20 MW and the team grows to more than 40 people.",
  },
  {
    year: "2024–26",
    title: "Integrated energy platform",
    text: "The portfolio crosses 100 MW, utility-scale work expands and the group establishes an operating presence in Morocco.",
  },
];

// TODO: replace every founder's `linkedin` with their real profile URL
// before launch, these are placeholders.
export const founders = [
  {
    name: "Pushkar Panchakshari",
    honorific: "Mr.",
    role: "CEO",
    photo: "/img/team/pushkar.jpg",
    linkedin: "https://www.linkedin.com/in/pushkar-panchakshari-b01116401/",
    bio: [
      "Leads Polaris' overall strategy, financial planning, investor relationships and international growth. His cross-sector experience supports the development of practical CAPEX, OPEX, captive and investor-led energy structures.",
    ],
  },
  {
    name: "Swapnil Tajanpure",
    honorific: "Mr.",
    role: "Director – Technical & Operations",
    photo: "/img/team/swapnil.jpg",
    linkedin: "https://www.linkedin.com/in/swapnil-tajanpure-8953571ab/",
    bio: [
      "Leads engineering standards, technical planning, project execution and commissioning, with a focus on safety, performance, maintainability and long asset life.",
    ],
  },
  {
    name: "Kunwar Gujral",
    honorific: "Mr.",
    role: "Director – Sales & Marketing",
    photo: "/img/team/kunwar.jpg",
    linkedin: "https://www.linkedin.com/in/gunpreet-gujral-334255102/",
    bio: [
      "Leads client relationships and commercial strategy across India and Morocco, helping customers turn complex energy requirements into clear and workable solutions.",
    ],
  },
];

// Wider team, grouped by department, from the "Our Team" page of the Polaris
// India Company Deck 2026. Excluded on purpose: Ronak Sanghvi and Rhythm
// Kothari. Where the deck shows two related departments above a row of names
// without saying who sits under which, they're merged into one group rather
// than guessed at.
export const team = [
  {
    title: "India Team",
    departments: [
      {
        department: "Marketing, Sales & Business Development",
        members: [
          { name: "Vivek Bachke", photo: "/img/team/vivek-bachke.jpg" },
          { name: "Yogesh Dusane", photo: "/img/team/yogesh-dusane.jpg" },
          { name: "Sandeep Lavate", photo: "/img/team/sandeep-lavate.jpg" },
        ],
      },
      {
        department: "Finance, Accounting & Compliance",
        members: [
          { name: "Archana Agaste", photo: "/img/team/archana-agaste.jpg" },
          { name: "Rutuja Diwan", photo: "/img/team/rutuja-diwan.jpg" },
        ],
      },
      {
        department: "End-to-End Operations",
        members: [
          {
            name: "Akshay Tajanpure",
            photo: "/img/team/akshay-tajanpure.jpg",
          },
          { name: "Ankush Shinde", photo: "/img/team/ankush-shinde.jpg" },
        ],
      },
      {
        department: "Regulatory Liaison & Project Commissioning",
        members: [
          { name: "Lalit Awari", photo: "/img/team/lalit-awari.jpg" },
          { name: "Gajanan Ganore", photo: "/img/team/gajanan-ganore.jpg" },
        ],
      },
      {
        department: "Engineering & Design",
        members: [
          {
            name: "Ajay Gowardhane",
            photo: "/img/team/ajay-gowardhane.jpg",
          },
          { name: "Mayuri Khade", photo: "/img/team/mayuri-khade.jpg" },
        ],
      },
      {
        department: "Execution & Project Delivery Management",
        members: [
          { name: "Mukesh Kumar", photo: "/img/team/mukesh-kumar.jpg" },
          { name: "Abhishek Kolpe", photo: "/img/team/abhishek-kolpe.jpg" },
          { name: "Raosaheb Bhoye", photo: "/img/team/raosaheb-bhoye.jpg" },
          {
            name: "Dnayneshwar Pardhe",
            photo: "/img/team/dnayneshwar-pardhe.jpg",
          },
        ],
      },
      {
        department: "Procurement & Supply Chain Management",
        members: [
          { name: "Ameya Kadve", photo: "/img/team/ameya-kadve.jpg" },
          { name: "Mayur Patil", photo: "/img/team/mayur-patil.jpg" },
          { name: "Vishal Dalvi", photo: "/img/team/vishal-dalvi.jpg" },
          { name: "Sanket Kharat", photo: "/img/team/sanket-kharat.jpg" },
          { name: "Ankush Kapase", photo: "/img/team/ankush-kapase.jpg" },
        ],
      },
    ],
  },
];

export const leadership = [
  {
    name: "CA Archana Choudhary",
    role: "Principal Advisor, Finance",
    photo: "/img/team/archana.jpg",
    bio: "Brings project-finance, tax-structuring and capital-planning experience to project evaluation and investment proposals.",
  },
  {
    name: "Adv. Prathamesh Kashikar",
    role: "Chief Legal Counsel",
    photo: "/img/team/prathamesh.jpg",
    bio: "Advises on commercial contracts, regulatory compliance and legal risk across projects and partnerships.",
  },
  {
    name: "Nilesh Zambre",
    role: "Principal Partner, Strategy",
    photo: "/img/team/nilesh.jpg",
    bio: "Supports market positioning, business development and long-term growth planning, with a focus on aligning energy opportunities with client business priorities.",
  },
  {
    name: "Sushil Kakad",
    role: "Associate Partner, HT Power Infrastructure",
    photo: "/img/team/sushil.jpg",
    bio: "Brings specialist experience in grid connectivity, substations and high-tension industrial electrical infrastructure.",
  },
  {
    name: "Sameer Sonawane",
    role: "Associate, Brand & Growth Strategy",
    photo: "/img/team/sameer.jpg",
    bio: "Leads brand and communication strategy, helping translate technical and commercial capability into clear communication for industrial and institutional audiences.",
  },
];

// "The Solar Opportunity", the C&I case for structured solar
export const opportunity = {
  intro:
    "For industrial and commercial businesses, power cost and reliability have a direct impact on margins and operations. At the same time, expansion plans, decarbonisation goals and more complex power-procurement options are making energy decisions harder. The question is no longer simply whether to install solar, but how to build an energy plan that works technically and financially.",
  drivers: [
    {
      title: "Cost competitiveness",
      body: "For many industrial facilities, electricity is one of the largest recurring operating costs. Renewable energy can lower long-term exposure to tariff increases and make power costs more predictable.",
    },
    {
      title: "Industrial decarbonisation",
      body: "Customers, investors and global supply chains increasingly expect visible progress on energy-related emissions. Renewable energy gives businesses a practical way to reduce and track that impact.",
    },
    {
      title: "Energy resilience",
      body: "Peak demand, outages, power-quality issues and dependence on a single source of supply can all affect operations. Solar, storage and grid infrastructure work best when they are planned together.",
    },
    {
      title: "Scale & complexity",
      body: "As projects move from rooftops to multi-megawatt captive and utility-scale plants, coordination becomes more important across engineering, land, grid, finance, construction and long-term operation.",
    },
    {
      title: "Integrated energy systems",
      body: "Industrial energy is moving beyond solar alone. The stronger solutions combine generation, storage, power procurement, grid infrastructure, controls, data and finance around the needs of the site.",
    },
    {
      title: "Global execution standards",
      body: "Industrial clients expect strong local execution, but they also expect engineering, safety and quality practices that stand up to international scrutiny.",
    },
  ],
  financials: [
    {
      metric: "Energy cost reduction",
      value: "True landed cost",
      note: "Grid power, on-site solar, open access, captive supply and storage compared together, not solar in isolation.",
    },
    {
      metric: "IRR & payback",
      value: "Realistic returns",
      note: "Modelled on realistic assumptions for investment, generation, tariff escalation, finance, tax and operating costs.",
    },
    {
      metric: "Cash-flow impact",
      value: "Fit to the balance sheet",
      note: "CAPEX, OPEX / RESCO, captive, lease and financing options weighed against cash-flow priorities.",
    },
    {
      metric: "Demand & tariff",
      value: "Load and tariff fit",
      note: "Demand charges, Time-of-Day exposure and load patterns reviewed to see where solar and storage help.",
    },
    {
      metric: "Lifecycle value",
      value: "Beyond commissioning",
      note: "Designed for long-term generation, maintainability, monitoring and reliability, not just day-one output.",
    },
  ],
  context:
    "We help businesses see the full picture: what they consume, what they pay, what they can generate or store, and which investment structure gives them the strongest long-term result. Our job is to give management a clear techno-commercial comparison of the available options before capital is committed.",
};

export const insights = [
  {
    slug: "capex-vs-opex-for-industrial-solar",
    image: "/img/projects/kilitch.jpg",
    title: "CAPEX vs OPEX: choosing the right structure for industrial solar",
    date: "2026-01-20",
    category: "Financial structuring",
    excerpt:
      "Ownership, cash flow, depreciation and control pull in different directions. A framework for matching the commercial model to the balance sheet.",
    body: [
      {
        paragraphs: [
          "Every industrial solar conversation eventually arrives at the same question: who owns the asset? The answer isn't a technical one, it's a balance-sheet decision, and it's usually made before a single panel is specified. Get it wrong and you either tie up capital a growing business needed elsewhere, or hand away savings you could have kept.",
        ],
      },
      {
        heading: "The two poles",
        paragraphs: [
          "Under CAPEX, you invest in and fully own the plant. It's the route that lets you capture the long-term savings directly, it brings depreciation and tax treatment into the picture, and you keep control of the asset, but it uses your capital and your balance sheet.",
          "Under OPEX / RESCO, the plant is financed and operated by a third party and you pay for the power it supplies under an agreed commercial framework, subject to project bankability and contract terms. Upfront investment is low or zero, and day-to-day operation sits with the provider, but you don't capture the full economics an owned asset would deliver.",
        ],
      },
      {
        heading: "What the numbers actually say",
        paragraphs: [
          "Payback, IRR and cash-flow outcomes depend on system size, tariff, finance terms, tax position and operating cost, which is why we model them for each site rather than quote a single figure. Depreciation and tax impact can shift the picture materially for a business with the profit to absorb it, and tariff escalation matters more the longer the horizon. Whichever structure you choose, the difference comes down to who carries the investment, who captures the savings and how that shows up on your books.",
        ],
      },
      {
        heading: "The routes in between",
        paragraphs: [
          "CAPEX and OPEX aren't the only two options. A lease-based structure gives you positive cash flow from day one on fixed payments, with ownership transferring to you at the end of the tenure, a middle path for businesses that want eventual ownership without the full upfront outlay. Group-captive and open-access structures go further still, letting you source power off-site across multiple facilities under a shared equity or wheeling arrangement, useful where roof space is the constraint rather than capital.",
        ],
      },
      {
        heading: "How we help clients decide",
        paragraphs: [
          "We don't lead with a structure, we lead with a financial model. Every Polaris engagement starts with your load profile and site conditions, then a techno-commercial comparison covering IRR, payback, depreciation, tax impact and cash flow for each route that fits your books. The structure follows the numbers, not the other way round, and the same team that builds the case stays accountable for it through commissioning and into long-term operation.",
        ],
      },
    ],
  },
  {
    slug: "reading-a-solar-proposal-like-a-cfo",
    image: "/img/bess-plant.jpg",
    title: "Reading a solar proposal like a CFO",
    date: "2025-11-12",
    category: "Advisory",
    excerpt:
      "IRR, payback, NPV, tax impact and energy cost reduction, the five measures that should decide an industrial solar investment, and the assumptions behind each.",
    body: [
      {
        paragraphs: [
          "Most solar proposals lead with the wrong number. A rupee-per-watt price or a headline capacity figure tells you almost nothing about whether the investment makes financial sense. A proposal built to survive a CFO's review leads with five measures instead, and is explicit about the assumptions behind each one.",
        ],
      },
      {
        heading: "The five measures",
        paragraphs: [
          "IRR, the annualised return the project generates, modelled on realistic assumptions for investment, generation, tariff escalation, finance, tax and operating costs.",
          "Simple payback, how long before cumulative savings recover the investment, compared across CAPEX, OPEX / RESCO, captive and lease structures.",
          "NPV, the project's value in today's rupees once future cash flows are discounted, which is what lets different structures be compared fairly.",
          "Depreciation and tax impact, which can materially change after-tax cash flow for an owned asset and should be assessed against your own tax position.",
          "Energy cost reduction, the true landed cost of grid power, on-site solar, open access, captive supply and storage compared side by side rather than solar in isolation.",
        ],
      },
      {
        heading: "The assumptions behind each",
        paragraphs: [
          "Every one of those five measures is only as good as the generation estimate underneath it. Ask what degradation curve the model assumes, what tariff escalation it's pricing in, and, most importantly, how the generation figure was derived. A model built on a genuine load analysis and site-specific simulation, not a regional average, is the difference between a plant that tracks its estimate and one that quietly underperforms for years.",
        ],
      },
      {
        heading: "Red flags in a weak proposal",
        paragraphs: [
          "If a proposal doesn't show IRR and payback explicitly, that's a flag. If there's no depreciation schedule, that's a flag. And if there's no long-term O&M plan beyond commissioning, that's the biggest one, it's how solar assets end up orphaned, generating below their modelled output with nobody accountable for the gap.",
        ],
      },
      {
        heading: "What we build instead",
        paragraphs: [
          "Every Polaris proposal starts from a decision-grade techno-commercial comparison, IRR, payback, depreciation and cash flow, so management can see the options clearly before capital is committed. The same thinking carries into monitoring, O&M and performance support after commissioning.",
        ],
      },
    ],
  },
  {
    slug: "engineering-for-long-term-uptime",
    image: "/img/solar-rooftop.jpg",
    title: "Engineering for long-term uptime, not just a quick payback",
    date: "2025-09-03",
    category: "Engineering",
    excerpt:
      "Zero-penetration mounting, corrosion-grade structures and HT evacuation design, the choices that separate an asset from an orphaned system.",
    body: [
      {
        paragraphs: [
          "A solar system can hit an attractive headline payback number and still be a poor asset. Payback measures the first few years; the engineering decisions made at design stage determine whether the years after that hold up. The gap between those two timeframes is where most underperforming installations are born.",
        ],
      },
      {
        heading: "The roof is not a formality",
        paragraphs: [
          "On a live manufacturing facility, we've delivered zero-penetration mounting across several roof levels and orientations, with no drilling or structural modification to the roof and the electrical architecture developed with future BESS integration in view. On a rooftop in Morocco, the same zero-penetration principle was re-engineered for bitumen-sheet roofing and coastal conditions, with a Magnis-coated structure for corrosion resistance. Same discipline, different site physics.",
        ],
      },
      {
        heading: "Terrain and HT evacuation aren't afterthoughts",
        paragraphs: [
          "A ground-mounted plant for a stone-crushing operation required partial rock excavation and an 11 kV HT evacuation run over half a kilometre, completed in 85 days despite heavy rainfall. A separate ground-mount in a high-dust mining environment needed its own 11 kV HT evacuation system and was designed, installed and commissioned in a 45-day window. Those timelines are a consequence of getting the terrain and evacuation engineering right the first time, so construction doesn't stall on a redesign.",
        ],
      },
      {
        heading: "Standards that don't change by postcode",
        paragraphs: [
          "Engineering and design are aligned with applicable Indian and internationally recognised codes and practices on every project we deliver, in India or in Morocco. It's the same reviewing discipline applied to a rooftop in India and one in Tangier, because the asset has to stand up to whichever inspector, insurer or lender looks at it next.",
        ],
      },
      {
        heading: "The engineering doesn't stop at commissioning",
        paragraphs: [
          "SCADA monitoring, alarms and equipment-health tracking, plus preventive maintenance and ongoing analysis, are what keep a well-engineered system performing as designed. For us, handover is not the end of the project; it is the start of the operating life of the asset, and someone stays responsible for it.",
        ],
      },
    ],
  },
  {
    slug: "group-captive-open-access-explained",
    image: "/img/projects/shriram.jpg",
    title: "Group captive and open access, explained",
    date: "2025-06-18",
    category: "Policy",
    excerpt:
      "How off-site structures unlock scale for multi-facility manufacturers, equity thresholds, compliance and landed-tariff maths.",
    body: [
      {
        paragraphs: [
          "Not every manufacturer can put meaningful solar capacity on their own roof, the load is too large, the roof too small, or the operations spread across sites that don't get equal sun. Off-site structures exist precisely for that mismatch, letting generation happen where the land and irradiation are best and the power be delivered to where it's actually consumed.",
        ],
      },
      {
        heading: "What group captive means",
        paragraphs: [
          'Under India\'s captive generation rules, a plant qualifies as "captive" when the consuming entity (or entities) holds not less than 26% equity in the generating company and collectively consumes not less than 51% of the electricity generated, on an annual basis. Structured correctly, that qualification exempts the arrangement from a large share of the cross-subsidy and transmission charges an ordinary third-party power purchase would attract, which is where most of the landed-cost advantage comes from.',
        ],
      },
      {
        heading: "What open access means",
        paragraphs: [
          "Open access lets a consumer buy power from a generator that isn't the local utility and have it wheeled to their connection over the shared grid, for a regulated set of charges rather than the retail tariff. It's the mechanism that makes it possible for a plant built on cheap, sunny, available land in one district to serve a factory load in another, the two don't need to be adjacent, only connected to the same grid.",
        ],
      },
      {
        heading: "The landed-tariff maths",
        paragraphs: [
          "The number that actually matters is landed cost: generation cost, plus wheeling and transmission charges, plus any applicable cross-subsidy surcharge, compared against the grid tariff the facility pays today. Done well, that comparison shows where off-site renewable power genuinely lowers landed cost, and by how much, so the decision rests on the numbers for your load rather than a headline saving.",
        ],
      },
      {
        heading: "Where this fits our solutions",
        paragraphs: [
          "Our Open Access and Group Captive structures cover off-site power sourcing at scale and co-investment arrangements that combine long-term renewable energy sourcing with captive-power regulations, always compared against on-site solar and grid supply. It's the route we recommend most often to manufacturers with multiple facilities and a load too large, or too dispersed, for rooftop CAPEX alone.",
        ],
      },
    ],
  },
];
