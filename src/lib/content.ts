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

export const regions = [
  { label: "India", href: "/" },
  { label: "Global", href: "/global" },
];

export const global = {
  eyebrow: "Polaris Global",
  title: "Built in India. Growing internationally.",
  intro:
    "Polaris operates through Polaris Renewable Solutions Pvt. Ltd. in India and Polaris Global Energie SARL in Morocco. Working across both markets gives us practical exposure to different regulations, climates, industrial environments and project-delivery requirements.",
  entity: {
    name: "Polaris Global Energie SARL",
    incorporated: "2025",
    base: "Casablanca, Kingdom of Morocco",
    directors:
      "Directed by the Polaris founding team, bringing the same engineering and commercial approach to every market.",
  },
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
  why: [
    {
      title: "One standard, every project",
      body: "Engineering and design aligned with applicable Indian and internationally recognised codes, with the same QA/QC, HSE and commissioning discipline regardless of project size or location.",
    },
    {
      title: "Financial modelling travels",
      body: "IRR, payback, cash flow and tariff exposure are compared for each proposal, in local terms, so management sees the trade-offs before capital is committed.",
    },
    {
      title: "Full lifecycle, one responsibility",
      body: "One point of responsibility from feasibility and design through construction, commissioning, monitoring and long-term support, across both markets.",
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
// own page at /solutions/<slug>; `relatedSolutions` lists the commercial
// models (from `solutions`, by slug) shown inline on that page.
export type CoveragePoint = { title: string; body: string };

export type OfferingStep = { title: string; body: string };
export type OfferingCta = { label: string; href: string };
export type OfferingModelItem = { slug: string; title: string; body: string };
export type OfferingStat = { value: string; label: string };

export const offerings: {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  heroHeadline: string;
  heroCtas: OfferingCta[];
  challenge: { heading: string; items: CoveragePoint[] };
  // Page-specific "Own it, or just buy the power" style section. When
  // present, this drives the "Commercial models" section instead of the
  // generic relatedSolutions lookup below.
  commercialModels?: {
    heading: string;
    items: OfferingModelItem[];
    link?: OfferingCta;
  };
  pointsHeading?: string;
  points: CoveragePoint[];
  extra?: { heading: string; items: CoveragePoint[] };
  howWeDeliver: { heading: string; steps: OfferingStep[] };
  // ⚠️ DUMMY PLACEHOLDER FIGURES until real project data is supplied —
  // do not treat these as verified performance claims.
  outcomes?: { heading: string; stats: OfferingStat[] };
  ctaBlock: { heading: string; body: string; cta: OfferingCta };
  relatedOfferingLinks: OfferingCta[];
  relatedSolutions: string[];
}[] = [
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial",
    summary:
      "On-site and off-site solar, storage and electrical solutions built around industrial load profiles, site conditions and savings goals.",
    intro:
      "Rooftop, ground-mounted and open-access solar, with storage and electrical upgrades, engineered around your load profile and your tariff. Built to cut your power bill from month one.",
    heroHeadline: "Solar that works as hard as your plant does",
    heroCtas: [
      { label: "Book a free energy assessment", href: "/contact" },
      { label: "See C&I projects", href: "/projects" },
    ],
    challenge: {
      heading: "Power is one of your biggest controllable costs",
      items: [
        {
          title: "Rising tariffs",
          body: "Industrial tariffs and demand charges go up almost every year, squeezing margins.",
        },
        {
          title: "Peak-hour penalties",
          body: "Time-of-day tariffs and contract-demand breaches add costs no one budgeted for.",
        },
        {
          title: "ESG pressure",
          body: "Customers, lenders and parent companies now ask for renewable share and Scope 2 reporting.",
        },
        {
          title: "Live-site risk",
          body: "You can't stop production for a solar install, and a poorly engineered system is a fire and downtime risk.",
        },
      ],
    },
    pointsHeading: "One partner for the whole energy system",
    points: [
      {
        title: "Industrial rooftop solar",
        body: "Designed around roof load, orientation and shading, using your roof area efficiently",
      },
      {
        title: "Ground-mounted captive solar",
        body: "For sites with spare land",
      },
      {
        title: "Open Access & Group Captive",
        body: "Off-site solar when your roof isn't enough",
      },
      {
        title: "BESS & hybrid systems",
        body: "Storage to shave peaks and shift solar into evening shifts (via P-ESS)",
      },
      {
        title: "Electrical infrastructure",
        body: "LT/HT panels, transformers, cabling and protection, upgraded where needed",
      },
      {
        title: "SCADA monitoring",
        body: "Live generation, alarms and performance on one dashboard",
      },
      {
        title: "Long-term O&M",
        body: "Cleaning, preventive maintenance and performance guarantees over 25 years",
      },
    ],
    extra: {
      heading: "Engineered for 25 years, not for the handover",
      items: [
        {
          title: "Tier-1 modules and inverters",
          body: "Chosen on performance, not on commission",
        },
        {
          title: "Structural checks",
          body: "On every roof before design",
        },
        {
          title: "Generation matched to your load",
          body: "So less power is exported at low value",
        },
        {
          title: "Reduced electrical losses",
          body: "Through correct cable sizing and layout",
        },
        {
          title: "Space kept for future expansion",
          body: "Room for storage and load growth",
        },
        {
          title: "Safety systems and permits",
          body: "For live industrial sites",
        },
      ],
    },
    commercialModels: {
      heading: "Own it, or just buy the power",
      items: [
        {
          slug: "capex",
          title: "CAPEX",
          body: "You own the asset and claim depreciation benefits. Highest lifetime savings.",
        },
        {
          slug: "opex",
          title: "OPEX / RESCO",
          body: "Zero upfront cost. Pay only for the units generated, at a tariff below grid.",
        },
        {
          slug: "lease",
          title: "Lease",
          body: "Fixed monthly payments, ownership at the end of the term.",
        },
        {
          slug: "open-access",
          title: "Open Access / Group Captive",
          body: "Off-site renewable power at scale.",
        },
      ],
      link: {
        label: "Compare models in detail",
        href: "/solutions/finance-solutions",
      },
    },
    howWeDeliver: {
      heading: "From your electricity bill to a working plant",
      steps: [
        {
          title: "Assess",
          body: "12 months of bills, load data and a site survey. You get a techno-commercial report with IRR and payback.",
        },
        {
          title: "Engineer",
          body: "Layout, structure and electrical design for your roof or land, with Tier-1 equipment chosen on fit and warranty.",
        },
        {
          title: "Build",
          body: "Safe execution on a live site, with QA/QC at every stage and zero disruption to production.",
        },
        {
          title: "Perform",
          body: "SCADA monitoring and O&M so the plant delivers what was promised, year after year.",
        },
      ],
    },
    // ⚠️ DUMMY PLACEHOLDER FIGURES, not verified project data — the brief
    // gave these as bracketed placeholders ("[XX]%" etc). Swap for real
    // numbers before treating this as a live performance claim.
    outcomes: {
      heading: "What a typical C&I project delivers",
      stats: [
        { value: "35%", label: "Reduction in grid power cost" },
        { value: "4-year", label: "Payback on CAPEX projects" },
        { value: "1,200 t", label: "CO₂ avoided per MWp per year" },
        { value: "99%", label: "Plant availability under Polaris O&M" },
      ],
    },
    ctaBlock: {
      heading: "Find out what solar can save your plant",
      body: "Share 12 months of electricity bills. We'll come back with a system size, a savings estimate and the right commercial model.",
      cta: { label: "Book a free assessment", href: "/contact" },
    },
    relatedOfferingLinks: [
      { label: "Finance Solutions", href: "/solutions/finance-solutions" },
      {
        label: "Energy Optimisation",
        href: "/solutions/energy-optimisation-consultant",
      },
      { label: "P-ESS", href: "/p-ess" },
    ],
    relatedSolutions: ["capex", "opex", "lease", "epc"],
  },
  {
    slug: "utility-scale",
    title: "Utility Scale",
    summary:
      "Large ground-mounted solar and associated electrical works, from site development and BOS through testing, grid connection and commissioning.",
    intro:
      "Civil, mechanical, electrical and grid-integration scope under one contract, for developers, IPPs and businesses sourcing power at scale.",
    heroHeadline: "Ground-mounted solar, delivered from land to grid",
    heroCtas: [
      { label: "Discuss your project", href: "/contact" },
      { label: "See ground-mounted projects", href: "/projects" },
    ],
    challenge: {
      heading: "Large projects fail at the interfaces",
      items: [
        {
          title: "Too many contractors",
          body: "Separate civil, electrical and grid vendors mean gaps, delays and blame.",
        },
        {
          title: "Grid connection delays",
          body: "Approvals, substation work and protection studies hold up commissioning.",
        },
        {
          title: "Difficult sites",
          body: "Uneven terrain, soil and drainage drive cost overruns if not engineered early.",
        },
        {
          title: "Returns at risk",
          body: "Every week of delay and every % of lost generation hits the project IRR.",
        },
      ],
    },
    pointsHeading: "Full EPC scope, one point of responsibility",
    points: [
      {
        title: "Project engineering",
        body: "PV layout, energy yield studies, structural and electrical design",
      },
      {
        title: "Civil & site development",
        body: "Land grading, foundations, roads, drainage and fencing",
      },
      {
        title: "Mechanical execution",
        body: "Mounting structures and module installation",
      },
      {
        title: "Electrical systems",
        body: "DC/AC cabling, inverters, switchgear, transformers and protection",
      },
      {
        title: "Grid integration",
        body: "Evacuation line, substation interface and liaison for approvals",
      },
      {
        title: "Testing & commissioning",
        body: "Pre-commissioning tests, performance checks and handover",
      },
      {
        title: "SCADA & O&M",
        body: "Remote monitoring and long-term maintenance",
      },
    ],
    extra: {
      heading: "Engineering standards",
      items: [
        {
          title: "Yield modelling",
          body: "Before layout is locked",
        },
        {
          title: "Geotechnical survey",
          body: "And site-specific foundation design",
        },
        {
          title: "Tier-1, technology-agnostic equipment",
          body: "Selected on fit, not on commission",
        },
        {
          title: "Protection studies",
          body: "And grid-code compliance",
        },
        {
          title: "Documented QA/QC and HSE plans",
          body: "On every site",
        },
      ],
    },
    howWeDeliver: {
      heading: "Built to schedule, commissioned to spec",
      steps: [
        {
          title: "Feasibility",
          body: "Land, irradiation, grid availability and a bankable yield estimate.",
        },
        {
          title: "Engineering & procurement",
          body: "Detailed design and Tier-1 procurement against a fixed schedule.",
        },
        {
          title: "Construction & commissioning",
          body: "Parallel civil, mechanical and electrical work, with QA/QC and HSE on site.",
        },
        {
          title: "Operations",
          body: "SCADA monitoring and O&M to protect generation and IRR.",
        },
      ],
    },
    ctaBlock: {
      heading: "Have land, a PPA or a power requirement?",
      body: "Tell us about your site and capacity. We'll come back with a feasibility view and an EPC plan.",
      cta: { label: "Discuss your project", href: "/contact" },
    },
    relatedOfferingLinks: [
      { label: "Finance Solutions", href: "/solutions/finance-solutions" },
      { label: "Our Approach", href: "/our-approach" },
      { label: "Global", href: "/global" },
    ],
    relatedSolutions: ["open-access", "group-captive", "epc"],
  },
  {
    slug: "finance-solutions",
    title: "Finance Solutions",
    summary:
      "CAPEX, OPEX / RESCO, captive, lease and financing support aligned with your capital, cash-flow and return priorities.",
    intro:
      "We compare ownership, RESCO, captive, lease and financing options against your budget, cash flow and return targets, so your board sees the trade-offs before capital is committed.",
    heroHeadline: "The right commercial model, before the first panel goes up",
    heroCtas: [
      { label: "Get a financial model for your site", href: "/contact" },
      { label: "Talk to our team", href: "/contact" },
    ],
    challenge: {
      heading: "The best system can still be the wrong deal",
      items: [
        {
          title: "Capital competes",
          body: "Solar has to beat other uses of capex in your plant.",
        },
        {
          title: "Too many options",
          body: "CAPEX, RESCO, lease and group captive each shift risk and returns differently.",
        },
        {
          title: "Vendor bias",
          body: "Most installers push the model that suits their balance sheet, not yours.",
        },
        {
          title: "Hard to defend",
          body: "Finance teams need numbers they can audit, not a brochure.",
        },
      ],
    },
    pointsHeading: "A business case your CFO can sign off",
    points: [
      {
        title: "IRR, ROI & payback",
        body: "For each model, on your actual tariff and load",
      },
      {
        title: "Cash-flow modelling",
        body: "Month-by-month, over the full asset life",
      },
      {
        title: "Depreciation & tax impact",
        body: "What ownership does to your tax position",
      },
      {
        title: "Tariff sensitivity",
        body: "What happens if grid tariffs rise slower or faster",
      },
      {
        title: "Debt & equity scenarios",
        body: "Leverage options and their effect on returns",
      },
      {
        title: "Investment-grade documentation",
        body: "Reports banks and boards accept",
      },
    ],
    extra: {
      heading: "Why Polaris",
      items: [
        {
          title: "Engineering and finance in one team",
          body: "So the model matches what will actually be built",
        },
        {
          title: "Model-neutral",
          body: "We earn from delivering the project, not from pushing one structure",
        },
        {
          title: "Assumptions shown openly",
          body: "So your finance team can stress-test them",
        },
      ],
    },
    howWeDeliver: {
      heading: "From bill to board approval",
      steps: [
        {
          title: "Collect",
          body: "12 months of bills, load data and your finance parameters (hurdle rate, tax rate, budget).",
        },
        {
          title: "Model",
          body: "Each viable model is sized and priced on the same assumptions.",
        },
        {
          title: "Compare",
          body: "A side-by-side view of IRR, payback, NPV and risk.",
        },
        {
          title: "Close",
          body: "Support with lenders, investors and internal approvals, then hand over to execution.",
        },
      ],
    },
    ctaBlock: {
      heading: "See your numbers before you commit",
      body: "Send us your last 12 months of bills. We'll return a side-by-side comparison of every viable model.",
      cta: { label: "Get my financial model", href: "/contact" },
    },
    relatedOfferingLinks: [
      {
        label: "Commercial & Industrial",
        href: "/solutions/commercial-industrial",
      },
      { label: "Utility Scale", href: "/solutions/utility-scale" },
      {
        label: "Energy Optimisation",
        href: "/solutions/energy-optimisation-consultant",
      },
    ],
    relatedSolutions: [
      "capex",
      "opex",
      "open-access",
      "group-captive",
      "lease",
      "advisory",
    ],
  },
  {
    slug: "energy-optimisation-consultant",
    title: "Energy Optimisation Consultant",
    summary:
      "A practical energy plan based on load, tariff, solar, storage, demand management and power-sourcing analysis.",
    intro:
      "An independent energy roadmap for your facility. We review how you use power and show where solar, storage, open access and demand management will pay back, and where they won't.",
    heroHeadline: "Know where every rupee of your power bill goes",
    heroCtas: [
      { label: "Book an energy review", href: "/contact" },
      { label: "See a sample report", href: "/insights" },
    ],
    challenge: {
      heading: "Most sites overpay for power without knowing why",
      items: [
        {
          title: "Hidden demand charges",
          body: "Short peaks set your contract demand and billing for the whole month.",
        },
        {
          title: "Wrong tariff fit",
          body: "Time-of-day rates reward shifting load, but few plants plan for it.",
        },
        {
          title: "Oversized proposals",
          body: "Vendors quote the biggest system, not the one with the best return.",
        },
        {
          title: "Piecemeal decisions",
          body: "Solar, storage and open access are bought separately, without a single plan.",
        },
      ],
    },
    pointsHeading: "A full picture of your energy use",
    points: [
      {
        title: "Bills & load data",
        body: "12 months of bills and interval data to find the real load profile",
      },
      {
        title: "Tariff & demand exposure",
        body: "Where demand charges and ToD rates are costing you",
      },
      {
        title: "On-site solar potential",
        body: "Roof and land, sized to your daytime load",
      },
      {
        title: "Off-site sourcing",
        body: "Open access and group captive options in your state",
      },
      {
        title: "BESS sizing",
        body: "Storage for peak shaving and evening shifts",
      },
      {
        title: "Solar + storage options",
        body: "Combined scenarios and their returns",
      },
      {
        title: "Financial comparison",
        body: "IRR and payback for each option",
      },
      {
        title: "Phased implementation plan",
        body: "What to do first, next and later",
      },
      {
        title: "Post-commissioning monitoring",
        body: "Checking that savings actually arrive",
      },
    ],
    extra: {
      heading: "Start with advice, go as far as you need",
      items: [
        {
          title: "Energy review only",
          body: "A standalone report and roadmap",
        },
        {
          title: "BESS & energy optimisation",
          body: "Design and supply of storage and demand management through P-ESS",
        },
        {
          title: "Project finance facilitation",
          body: "Funding support for the recommended projects",
        },
        {
          title: "End-to-end EPC & lifecycle management",
          body: "Polaris delivers and runs the plan",
        },
      ],
    },
    howWeDeliver: {
      heading: "A roadmap in 4–6 weeks",
      steps: [
        {
          title: "Data collection",
          body: "Bills, load data and a site walk-through.",
        },
        {
          title: "Analysis",
          body: "Load profile, tariff exposure and technical potential.",
        },
        {
          title: "Options",
          body: "2–3 scenarios with costs, savings and returns.",
        },
        {
          title: "Roadmap",
          body: "A phased plan with a presentation to management.",
        },
      ],
    },
    ctaBlock: {
      heading: "Get a clear energy plan for your facility",
      body: "Start with your bills. We'll show you where the savings are and what to do first.",
      cta: { label: "Book an energy review", href: "/contact" },
    },
    relatedOfferingLinks: [
      { label: "P-ESS", href: "/p-ess" },
      { label: "Finance Solutions", href: "/solutions/finance-solutions" },
      {
        label: "Commercial & Industrial",
        href: "/solutions/commercial-industrial",
      },
    ],
    relatedSolutions: ["bess", "advisory", "epc"],
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
  {
    name: "Indore International",
    slug: "indore-international",
    image: "/img/projects/morocco.jpg",
    images: ["/img/projects/morocco.jpg"],
    location: "Tangier, Morocco",
    tech: "Industrial Rooftop Solar",
    model: "CAPEX",
    capacity: "600 kWp",
    generation: "—",
    savings: "≈ €83,000 (MAD 908,000)",
    status: "Ongoing",
    year: 2026,
    blurb:
      "An early C&I reference for Polaris in Morocco: a zero-penetration, Magnis-coated structure engineered for bitumen-sheet roofing and coastal conditions.",
    imageCaption: "Indicative 3D render for visual representation only.",
    highlights: [
      "An early C&I reference for Polaris in Morocco, showing the company's growing international footprint.",
      "Developed a mounting approach around the bitumen-sheet roof and the site's specific constraints.",
      "Specified Magnis-coated structural material to improve corrosion resistance in coastal conditions.",
      "Used a zero-penetration mounting approach to reduce leakage risk and protect the roof.",
      "Designed for the wind and environmental conditions of the Tangier region, with international safety and performance requirements in view.",
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
