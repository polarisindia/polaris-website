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
];

// Headline figures, "Polaris at a Glance"
export const stats = [
  { value: "650+", label: "Successful projects" },
  { value: "100 MW+", label: "Installed capacity" },
  { value: "100+", label: "Team members" },
  { value: "2015", label: "Founded in India" },
];

export const glance = [
  { value: "650+", label: "Successful projects" },
  { value: "100 MW+", label: "Installed capacity" },
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

// Indicative environmental impact, derived from 100 MW+ installed at a
// ~15% capacity factor and India's ~0.71 tCO2/MWh grid factor. Replace with
// measured portfolio generation once available.
export const impact = {
  note: "Indicative, based on 100 MW+ of installed Polaris capacity.",
  items: [
    { value: "131 GWh", label: "Clean energy generated each year" },
    { value: "93,000 t", label: "CO₂ emissions avoided each year" },
    { value: "1.5M", label: "Mature trees, equivalent annual absorption" },
    { value: "12,000", label: "Indian homes powered for a year" },
  ],
};

// ⚠️ PLACEHOLDER TESTIMONIALS, representative, role-attributed copy used to
// build the section. Replace with real, client-approved quotes and names
// before this site is published.
// Placeholder names, illustrative quotes, not real clients. Swap in real
// names (and drop this note) before launch.
export const testimonials = [
  {
    quote:
      "Polaris didn't hand us a datasheet, they handed us an IRR model our CFO could sign off in one meeting. The plant has tracked the generation estimate within 2% since day one.",
    name: "Rohan Mehta",
    role: "Head of Projects",
    org: "Pharmaceutical manufacturer, Maharashtra",
  },
  {
    quote:
      "We went with the OPEX route to avoid the capex hit. Billing is clean, savings show up every month, and we've had zero operational involvement.",
    name: "Anjali Deshmukh",
    role: "VP, Operations",
    org: "Packaged-foods company, Gujarat",
  },
  {
    quote:
      "The site had rock, a monsoon window and a 0.5 km HT run. They engineered around all three and still commissioned in under 90 days.",
    name: "Vikram Rathi",
    role: "Plant Head",
    org: "Building-materials group, Central India",
  },
];

// Homepage "Our Solutions", the four offering categories. Each has its
// own page at /solutions/<slug>; `relatedSolutions` lists the commercial
// models (from `solutions`, by slug) shown inline on that page.
export const offerings: {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  pointsHeading?: string;
  points: string[];
  extra?: { heading: string; items: string[] };
  relatedSolutions: string[];
}[] = [
  {
    slug: "commercial-industrial",
    title: "Commercial & Industrial",
    summary:
      "On-site and off-site solar, storage and electrical solutions built around industrial load profiles, site conditions and savings goals.",
    intro:
      "Solar, storage and electrical solutions built around the way your facility operates. Polaris works with manufacturing plants, warehouses, commercial facilities, institutional campuses and multi-site businesses. Each project starts with the customer's energy use, site conditions and operating priorities, not with a pre-selected product.",
    pointsHeading: "Core capabilities",
    points: [
      "Industrial rooftop solar: RCC, metal sheet, bitumen and specialised roof configurations",
      "Ground-mounted captive solar for industrial facilities",
      "On-site and off-site solar solutions",
      "Open Access and Group Captive structures",
      "BESS and solar + storage hybrid systems",
      "HT / LT electrical infrastructure, transformers, substations and evacuation systems",
      "SCADA, monitoring, analytics and performance management",
      "Long-term O&M and asset optimisation",
    ],
    extra: {
      heading: "What we focus on",
      items: [
        "Use available roof and land area efficiently without compromising structural safety",
        "Match generation as closely as possible to the facility's actual consumption pattern",
        "Reduce electrical losses through well-planned DC and AC design",
        "Allow for future storage, load growth and plant expansion wherever practical",
        "Work safely inside live industrial facilities with minimum disruption to operations",
      ],
    },
    relatedSolutions: ["capex", "opex", "lease", "epc"],
  },
  {
    slug: "utility-scale",
    title: "Utility Scale",
    summary:
      "Large ground-mounted solar and associated electrical works, from site development and BOS through testing, grid connection and commissioning.",
    intro:
      "Large-project execution across civil, mechanical, electrical and grid-integration scopes. For large ground-mounted projects, Polaris brings together engineering, civil works, BOS, electrical systems, grid evacuation, testing and commissioning. We focus on keeping each interface clear so the project can move from site development to grid connection without gaps in responsibility.",
    pointsHeading: "Scope of work",
    points: [
      "Project engineering: feasibility, front-end engineering, layouts, detailed design, energy-yield studies and performance modelling",
      "Civil & site development: survey coordination, earthworks, grading, foundations, piling, trenches, roads and supporting site infrastructure",
      "Mechanical execution: assembly and alignment of tracker or fixed-tilt structures, module installation and mechanical completion",
      "Electrical & power systems: DC and AC networks, inverters, transformers, switchgear, MV / HT systems, earthing and lightning protection",
      "SCADA & grid integration: plant monitoring and controls, evacuation systems, grid synchronisation and performance verification",
      "Testing & commissioning: pre-commissioning, testing, documentation, handover and final performance checks",
    ],
    extra: {
      heading: "Electrical infrastructure & grid evacuation",
      items: [
        "Substation civil foundations and equipment support structures",
        "11 kV / HT switchgear and panels",
        "Transformers and associated electrical equipment",
        "HT power cables, cable trenches and termination systems",
        "Protection, control and metering panels",
        "Earthing and lightning protection systems",
        "AC auxiliary systems",
        "Cable laying, glanding, termination, identification and ferruling",
        "Electrical testing, protection testing, pre-commissioning and commissioning support",
      ],
    },
    relatedSolutions: ["open-access", "group-captive", "epc"],
  },
  {
    slug: "finance-solutions",
    title: "Finance Solutions",
    summary:
      "CAPEX, OPEX / RESCO, captive, lease and financing support aligned with your capital, cash-flow and return priorities.",
    intro:
      "A good energy project also needs the right commercial structure. We compare ownership, third-party investment, captive, lease and financing options against the client's budget, cash flow and return expectations. This helps management see the trade-offs clearly before capital is committed.",
    pointsHeading: "What we evaluate",
    points: [
      "IRR, ROI and payback analysis",
      "Cash-flow modelling and scenario comparison",
      "Depreciation and tax-impact assessment",
      "Tariff and escalation sensitivity",
      "Debt / equity and financing assumptions",
      "Investment-grade project documentation",
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
      "A practical energy roadmap before you commit to an asset or commercial model. Sometimes the right first step is not a project, it is a clear view of the energy problem. Polaris reviews how a facility buys, uses and manages power, then identifies where solar, storage, open access, demand management or other measures can make a meaningful difference. The result is a phased plan, not a product pitch. We are not trying to sell the biggest system, we are trying to recommend the combination that works best for the client's operations and economics.",
    pointsHeading: "What we review",
    points: [
      "12 months of electricity bills and load data, where available",
      "Tariffs, demand charges, power factor and Time-of-Day exposure",
      "On-site solar potential and usable roof / land area",
      "Open Access, captive and off-site power sourcing options",
      "BESS sizing for peak shaving, demand management, backup and tariff optimisation",
      "Solar + storage options and future expansion requirements",
      "Financial comparison of CAPEX, OPEX / RESCO, captive and financing structures",
      "A phased implementation plan with expected outcomes and measurable KPIs",
      "Post-commissioning monitoring, analysis and performance improvement",
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
  {
    title: "Our philosophy",
    body: "Energy as an asset. A roof, a parcel of land, a load curve or a tariff can all create value when they are understood together. Our job is to turn that opportunity into a practical, investable energy solution.",
  },
];

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

// Wider team, from the "Our Team" page of the Polaris India Company Deck
// 2026. Names only: the deck's function groupings couldn't be matched to
// individual names reliably. Leadership above is listed separately.
// Excluded on purpose: Ronak Sanghvi and Rhythm Kothari.
export const team = [
  {
    region: "India",
    members: [
      "Vivek Bachke",
      "Yogesh Dusane",
      "Sandeep Lavate",
      "Archana Agaste",
      "Rutuja Diwan",
      "Akshay Tajanpure",
      "Ankush Shinde",
      "Lalit Awari",
      "Gajanan Ganore",
      "Mukesh Kumar",
      "Abhishek Kolpe",
      "Raosaheb Bhoye",
      "Dnayneshwar Pardhe",
      "Ameya Kadve",
      "Mayur Patil",
      "Vishal Dalvi",
      "Sanket Kharat",
    ],
  },
  {
    region: "Morocco",
    members: ["Khalid Belkiss", "Tawfik Sellam", "Hiba Oulkiss"],
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
