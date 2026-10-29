import type { Faq } from '@/lib/faqs';

/**
 * Long-form SEO copy for service and industry landing pages.
 *
 * DRAFT COPY: written from facts already on the site (projects, cities, process).
 * Review for accuracy and tone before publishing. FAQs here are rendered visibly
 * AND emitted as FAQPage JSON-LD from the same array.
 */
export type LandingContent = {
  intro: string[];
  sections: { heading: string; body: string }[];
  faqs: Faq[];
  related: { href: string; label: string }[];
};

const RELATED_CORE = [
  { href: '/portfolio', label: 'View our portfolio' },
  { href: '/process', label: 'How we deliver' },
  { href: '/contact', label: 'Request a consultation' },
];

export const LANDING: Record<string, LandingContent> = {
  'commercial-fit-outs': {
    intro: [
      'Brand Kettle BuildSpaces is a commercial fit-out company in Indore delivering turnkey office and corporate interiors across India. We take a bare shell to a finished, occupied workplace under a single contract: design, civil works, MEP, lighting, joinery and furniture.',
      'Because we run our own joinery and furniture factory, custom work is prefabricated while site works are under way. That parallel approach shortens timelines without compromising finish quality.',
    ],
    sections: [
      { heading: 'What a turnkey office fit-out includes', body: 'Space planning and 3D visualisation, false ceilings and partitions, electrical and HVAC coordination, flooring, acoustic treatment, reception and workstation joinery, and final handover. One project manager is accountable from the first drawing to the last snag.' },
      { heading: 'Offices, co-working and corporate campuses', body: 'We have delivered workplaces including And Work in Faridabad and Nanokirti, plus co-working and corporate spaces that balance brand expression with day-to-day usability.' },
      { heading: 'Why single-point accountability matters', body: 'Splitting design, contracting and furniture across vendors usually creates delays and finger-pointing. Our design-build model keeps budget, schedule and quality in one team, with a clear scope and milestone-based billing.' },
      { heading: 'Where we work', body: 'Headquartered in Indore, we execute commercial fit-outs in Mumbai, Delhi NCR, Hyderabad, Bengaluru and Bareilly, and across tier-1 and tier-2 cities.' },
    ],
    faqs: [
      { q: 'What does a commercial fit-out company do?', a: 'A commercial fit-out company converts an empty or outdated commercial space into a functional, branded interior. That covers design, civil and structural changes, electrical, HVAC, lighting, joinery and furniture, through to handover.' },
      { q: 'How long does an office fit-out take?', a: 'Timelines depend on size and complexity. Because we prefabricate joinery in our factory while site works proceed, we can run fast-track programmes. Our PNG Jewellers showroom, for instance, was delivered in 27 days.' },
      { q: 'Do you handle both design and construction?', a: 'Yes. Brand Kettle BuildSpaces is a design-build firm, so architecture, interior design, execution and furniture manufacturing sit under one contract.' },
      { q: 'Can you work in cities outside Indore?', a: 'Yes. We deliver in Mumbai, Delhi NCR, Hyderabad, Bengaluru, Bareilly and other cities across India.' },
    ],
    related: [
      { href: '/industries/corporate-offices', label: 'Corporate office interiors' },
      { href: '/services', label: 'All services' },
      ...RELATED_CORE,
    ],
  },

  'retail-fit-outs': {
    intro: [
      'Retail interior design in Indore and across India, built for conversion. We design and fit out stores where layout, lighting and fixtures guide customers toward the product and reflect the brand precisely.',
      'We have built store environments for brands such as Gucci and Giva, working to strict global brand guidelines and tight opening dates.',
    ],
    sections: [
      { heading: 'Store design that supports sales', body: 'We plan customer flow, focal displays, fitting areas and billing zones around how shoppers actually move, then detail lighting and materials to make products look their best.' },
      { heading: 'Brand-compliant execution', body: 'Global and national brands publish detailed fixture and finish standards. Our factory fabricates fixtures in metal, laminate, solid wood and glass to those specifications, which keeps rollouts consistent.' },
      { heading: 'Mall, high-street and flagship formats', body: 'Whether it is a compact mall unit or a multi-level flagship, we manage approvals, site coordination and handover so the store opens on schedule.' },
      { heading: 'Rollouts across multiple outlets', body: 'For brands opening several stores, prefabricated fixtures and a repeatable process cut per-store time and variation.' },
    ],
    faqs: [
      { q: 'What does retail store interior design include?', a: 'It covers store planning, visual merchandising fixtures, lighting, ceiling and flooring, signage zones, billing and storage areas, along with the construction needed to deliver them.' },
      { q: 'Can you follow a brand\'s design manual?', a: 'Yes. We have fabricated fixtures and displays to global brand standards for names including Gucci and Giva.' },
      { q: 'Do you do multi-store rollouts?', a: 'Yes. Factory prefabrication lets us repeat fixtures consistently across locations and reduce on-site time per store.' },
      { q: 'Do you offer retail interior design in Indore?', a: 'Yes. Indore is our home base, and we also deliver retail projects in Mumbai, Delhi NCR, Hyderabad and Bengaluru.' },
    ],
    related: [
      { href: '/jewellery-showrooms', label: 'Jewellery showrooms' },
      { href: '/industries/apparel-fashion-retail', label: 'Apparel and fashion retail' },
      ...RELATED_CORE,
    ],
  },

  'jewellery-showrooms': {
    intro: [
      'Jewellery showroom interior designers in Indore with national delivery. Jewellery retail demands secure display, precise lighting and a sense of occasion, and we engineer all three into one coherent fit-out.',
      'Our jewellery portfolio includes PNG Jewellers, Giva, Malabar Gold and Indriya.',
    ],
    sections: [
      { heading: 'Lighting that makes jewellery shine', body: 'High-CRI lighting renders gold, diamonds and gemstones accurately. We layer accent, display and ambient lighting so each counter draws attention without glare.' },
      { heading: 'Security built into the design', body: 'Display counters, glazing, vault-adjacent areas and sightlines are planned together so security supports the experience rather than interrupting it.' },
      { heading: 'Bespoke display counters', body: 'Counters, wall units and seating are made in our own factory using laminates, metals, stone and glass, finished to the brand\'s look.' },
      { heading: 'Fast-track delivery', body: 'Fixtures are prefabricated while civil and electrical work proceeds on site. This is how we handed over the PNG Jewellers showroom in 27 days.' },
    ],
    faqs: [
      { q: 'What makes jewellery showroom design different?', a: 'Jewellery stores need accurate colour rendering, secure display solutions and a premium atmosphere. Lighting, counter design and security layout are planned together.' },
      { q: 'How quickly can a jewellery showroom be fitted out?', a: 'With parallel prefabrication and site works, we completed the PNG Jewellers showroom in 27 days. Timelines vary with size and scope.' },
      { q: 'Do you manufacture the display counters yourselves?', a: 'Yes. Display counters and millwork are fabricated in our in-house factory.' },
      { q: 'Which jewellery brands have you worked with?', a: 'Our jewellery work includes PNG Jewellers, Giva, Malabar Gold and Indriya.' },
    ],
    related: [
      { href: '/retail-fit-outs', label: 'Retail fit-outs' },
      { href: '/custom-furniture', label: 'Custom furniture and joinery' },
      ...RELATED_CORE,
    ],
  },

  'custom-furniture': {
    intro: [
      'Custom furniture manufacturer in Indore producing bespoke and modular pieces for commercial and residential projects. Our factory sits next to our design team, so furniture is drawn, built and installed as part of the same programme.',
    ],
    sections: [
      { heading: 'Made to the space, not off the shelf', body: 'Reception desks, workstations, display units, wardrobes, wall panelling and seating are made to the exact dimensions and finish of your interior.' },
      { heading: 'Materials and finishes', body: 'We work with solid wood, engineered boards, high-pressure laminates, metals, glass and acoustic panels, chosen for durability and appearance.' },
      { heading: 'Modular systems for scale', body: 'Modular designs allow repeat production for multi-outlet brands and easy reconfiguration for growing offices.' },
      { heading: 'Factory to site, one team', body: 'Because manufacturing and installation sit with the same company, tolerances are checked early and site fixes are rare.' },
    ],
    faqs: [
      { q: 'Do you make custom furniture for homes as well as businesses?', a: 'Yes. We produce bespoke furniture for residential interiors, offices, retail stores, showrooms and institutions.' },
      { q: 'Can furniture be ordered without a full interior project?', a: 'Yes, subject to scope. Contact us with drawings or requirements and we will advise on feasibility and timelines.' },
      { q: 'What materials do you use?', a: 'Solid wood, engineered boards, laminates, metal, glass and acoustic materials, depending on the brief and budget.' },
      { q: 'Do you install what you manufacture?', a: 'Yes. Our teams handle delivery and installation on site.' },
    ],
    related: [
      { href: '/residential-interiors', label: 'Residential interiors' },
      { href: '/library-institutional-furniture', label: 'Institutional furniture' },
      ...RELATED_CORE,
    ],
  },

  'residential-interiors': {
    intro: [
      'Luxury home interior designers in Indore creating premium residences with the same engineering discipline we bring to commercial projects. From space planning to final styling, your home is designed, built and furnished by one accountable team.',
    ],
    sections: [
      { heading: 'Design led by how you live', body: 'We begin with routines, storage needs and entertaining habits, then shape layouts, materials and lighting around them.' },
      { heading: 'Bespoke joinery throughout', body: 'Wardrobes, kitchens, TV units, panelling and furniture are made in our factory so that every piece fits and finishes consistently.' },
      { heading: 'Turnkey execution', body: 'Civil changes, electrical, plumbing coordination, false ceilings, flooring and painting are managed by our project team, with regular updates and a clear schedule.' },
      { heading: 'Apartments, villas and penthouses', body: 'We handle homes of different sizes, from compact apartments to large independent villas.' },
    ],
    faqs: [
      { q: 'What is included in luxury home interior design?', a: 'Concept and layout design, 3D visuals, material selection, bespoke furniture and joinery, execution and handover.' },
      { q: 'Do you take on turnkey home projects in Indore?', a: 'Yes. We manage design and execution end to end for homes in Indore and select other cities.' },
      { q: 'Can I see completed work first?', a: 'Our portfolio shows completed projects, and you can request a consultation to discuss relevant examples.' },
      { q: 'Is furniture made specifically for my home?', a: 'Yes. We manufacture custom furniture and joinery sized to your interior.' },
    ],
    related: [
      { href: '/custom-furniture', label: 'Custom furniture' },
      ...RELATED_CORE,
    ],
  },

  'library-institutional-furniture': {
    intro: [
      'Educational and institutional furniture manufacturer supplying schools, colleges, libraries and public institutions. Our furniture is designed for daily heavy use, student comfort and straightforward maintenance.',
    ],
    sections: [
      { heading: 'Built to last', body: 'Reinforced joints, durable laminates and tested hardware help furniture stand up to years of constant use.' },
      { heading: 'Library shelving and reading spaces', body: 'We build shelving, study carrels, reading tables and issue desks, planned for clear sightlines and easy access.' },
      { heading: 'Classrooms and labs', body: 'Desks, benches, storage and teacher stations are sized for different age groups and teaching styles.' },
      { heading: 'Supply and installation at scale', body: 'Factory production and organised delivery allow us to furnish multiple rooms or campuses on a defined schedule.' },
    ],
    faqs: [
      { q: 'What institutional furniture do you manufacture?', a: 'Library shelving, reading tables, classroom desks and benches, lab furniture, storage and administrative furniture.' },
      { q: 'Can furniture be customised to our campus?', a: 'Yes. Dimensions, finishes and colours can be tailored to the space and your branding.' },
      { q: 'Do you handle bulk orders?', a: 'Yes. Our factory is set up for repeat and bulk production with phased delivery.' },
      { q: 'Do you install the furniture?', a: 'Yes. We deliver and install on site.' },
    ],
    related: [
      { href: '/industries/government-institutions', label: 'Government and institutional interiors' },
      { href: '/custom-furniture', label: 'Custom furniture' },
      ...RELATED_CORE,
    ],
  },
};

/** Industry-vertical pages served at /industries/[slug]. */
export type Industry = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroSubtitle: string;
  image: string;
  content: LandingContent;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: 'corporate-offices',
    name: 'Corporate Offices',
    title: 'Corporate Office Interior Design & Fit-Out in Indore',
    description: 'Office interior design and turnkey corporate fit-outs in Indore and across India. Workspaces designed for productivity, brand and growth by Brand Kettle BuildSpaces.',
    heroSubtitle: 'Workplaces designed for productivity, culture and brand.',
    image: '/imgs/commercial/brandkettle1.jpg',
    content: {
      intro: [
        'Office interior design in Indore that balances focus, collaboration and brand. We plan, build and furnish corporate offices of every size under one contract.',
      ],
      sections: [
        { heading: 'Planning around how teams work', body: 'We map departments, meeting needs and growth plans before drawing, so the layout supports real working patterns.' },
        { heading: 'Comfort and wellbeing', body: 'Acoustics, daylight, ventilation and ergonomic furniture are considered from the start, because they shape daily comfort and performance.' },
        { heading: 'Brand in every detail', body: 'Reception, boardrooms and breakout areas carry your identity through materials, graphics and custom joinery.' },
        { heading: 'Minimal disruption', body: 'Phased work and prefabricated furniture shorten time on site, which matters when you are relocating or expanding.' },
      ],
      faqs: [
        { q: 'How much does office interior design cost in Indore?', a: 'Cost depends on area, specification and scope. After a brief and site visit, we provide a scoped estimate. Contact us to begin.' },
        { q: 'Can you fit out a co-working space?', a: 'Yes. We have delivered co-working and corporate spaces, including And Work in Faridabad.' },
        { q: 'Do you manage furniture and workstations?', a: 'Yes. Workstations, storage and meeting furniture are made in our own factory.' },
      ],
      related: [
        { href: '/commercial-fit-outs', label: 'Commercial fit-outs' },
        ...RELATED_CORE,
      ],
    },
  },
  {
    slug: 'hotels-hospitality',
    name: 'Hotels & Hospitality',
    title: 'Hotel & Hospitality Interior Design and Fit-Out',
    description: 'Turnkey hotel, resort and lounge interiors across India by Brand Kettle BuildSpaces, including work for Ramada Encore Bareilly and Havana Lounge.',
    heroSubtitle: 'Hospitality interiors that guests remember.',
    image: '/imgs/commercial/havana-lounge-bareilly-1.jpg',
    content: {
      intro: [
        'Hospitality interior design for hotels, lounges and guest spaces. Our projects include Ramada Encore in Bareilly and Havana Lounge in Bareilly.',
      ],
      sections: [
        { heading: 'Guest experience first', body: 'Arrival, lobby, rooms and dining are designed as one journey, with lighting and materials that set the mood.' },
        { heading: 'Durable finishes for heavy use', body: 'Hospitality interiors take daily wear. We specify finishes and fabricate joinery that retain appearance with regular cleaning and traffic.' },
        { heading: 'Phased and fast-track delivery', body: 'We plan around opening dates and can phase work to keep parts of a property operational.' },
      ],
      faqs: [
        { q: 'Do you design and build hotel interiors?', a: 'Yes. We provide design and turnkey execution for hotels, lounges and hospitality venues.' },
        { q: 'Can you renovate while the hotel operates?', a: 'We can phase works to limit disruption, depending on the property and scope.' },
        { q: 'Do you make hotel furniture?', a: 'Yes. Beds, headboards, wardrobes, lobby seating and reception desks can be made in our factory.' },
      ],
      related: [
        { href: '/industries/restaurants-cafes', label: 'Restaurants and cafés' },
        ...RELATED_CORE,
      ],
    },
  },
  {
    slug: 'restaurants-cafes',
    name: 'Restaurants & Cafés',
    title: 'Restaurant & Café Interior Design and Fit-Out',
    description: 'Turnkey restaurant, café and F&B outlet interiors by Brand Kettle BuildSpaces, including Pret A Manger Delhi.',
    heroSubtitle: 'Food and beverage spaces designed to run well and look right.',
    image: '/imgs/commercial/havana-lounge-bareilly-1.jpg',
    content: {
      intro: [
        'Restaurant and café interior design in Indore and across India. We deliver F&B outlets that work in the kitchen and in the dining room, including the Pret A Manger outlet in Delhi.',
      ],
      sections: [
        { heading: 'Layouts that serve both guests and staff', body: 'Seating density, service routes and kitchen adjacency are planned together to support smooth service.' },
        { heading: 'Atmosphere through lighting and materials', body: 'Lighting, textures and acoustics shape how a venue feels. We tune them to your concept and clientele.' },
        { heading: 'Brand and chain rollouts', body: 'We follow brand guidelines for chains and replicate fixtures consistently across outlets.' },
      ],
      faqs: [
        { q: 'Do you handle kitchen and MEP coordination?', a: 'Yes. We coordinate civil, electrical, plumbing and ventilation work as part of a turnkey fit-out.' },
        { q: 'How long does a café fit-out take?', a: 'It depends on size and approvals. Prefabricated joinery shortens site time considerably.' },
        { q: 'Can you work to a franchise design manual?', a: 'Yes. We have delivered to global brand standards, including for Pret A Manger.' },
      ],
      related: [
        { href: '/industries/hotels-hospitality', label: 'Hotels and hospitality' },
        ...RELATED_CORE,
      ],
    },
  },
  {
    slug: 'apparel-fashion-retail',
    name: 'Apparel & Fashion Retail',
    title: 'Apparel & Fashion Store Interior Design and Fit-Out',
    description: 'Fashion and apparel store fit-outs, including luxury flagships, by Brand Kettle BuildSpaces. Brand-compliant, fast, and finished to detail.',
    heroSubtitle: 'Fashion retail spaces with luxury-grade finish.',
    image: '/imgs/commercial/brandkettle1.jpg',
    content: {
      intro: [
        'Apparel and fashion store interiors from boutiques to flagships. We have fabricated fixtures and fit-outs for luxury brand Gucci, working to demanding finish standards.',
      ],
      sections: [
        { heading: 'Merchandising-led design', body: 'Rails, shelving, mannequins and focal points are planned around the collection and how it is sold.' },
        { heading: 'Luxury-grade finishing', body: 'Metals, stone, glass and fine veneers are fabricated and installed with close tolerances.' },
        { heading: 'Fitting rooms and service areas', body: 'Comfortable, well-lit fitting rooms and efficient stockrooms support both customers and staff.' },
      ],
      faqs: [
        { q: 'Can you build luxury fashion stores?', a: 'Yes. We have worked with luxury brand Gucci and follow detailed brand specifications.' },
        { q: 'Do you handle mall approvals?', a: 'We coordinate mall design submissions and site requirements as part of delivery.' },
        { q: 'Can fixtures be reused across stores?', a: 'Yes. Modular, factory-made fixtures make multi-store rollouts consistent.' },
      ],
      related: [
        { href: '/retail-fit-outs', label: 'Retail fit-outs' },
        ...RELATED_CORE,
      ],
    },
  },
  {
    slug: 'banquet-halls',
    name: 'Banquet Halls',
    title: 'Banquet Hall & Event Venue Interior Design',
    description: 'Banquet hall and event venue interiors by Brand Kettle BuildSpaces: ceilings, lighting, stages, acoustics and furniture, delivered turnkey.',
    heroSubtitle: 'Event venues built for scale and celebration.',
    image: '/imgs/commercial/havana-lounge-bareilly-1.jpg',
    content: {
      intro: [
        'Banquet hall interior design for weddings, receptions and corporate events. We design and build large-span venues where ceilings, lighting, stage and acoustics work together.',
      ],
      sections: [
        { heading: 'Flexible large spaces', body: 'Layouts that can be partitioned or opened up let one venue host events of different sizes.' },
        { heading: 'Lighting and ceilings', body: 'Layered lighting and ceiling design set the atmosphere and photograph well.' },
        { heading: 'Acoustics and comfort', body: 'Sound treatment, ventilation and durable furniture keep guests comfortable through long events.' },
      ],
      faqs: [
        { q: 'Do you build stages and bar counters?', a: 'Yes. Stages, bar counters, décor panels and furniture are part of the turnkey scope.' },
        { q: 'Can you complete a venue before the wedding season?', a: 'We plan backwards from your opening date, using factory prefabrication to protect the schedule.' },
        { q: 'Do you cover acoustics?', a: 'Yes. We specify and install acoustic treatment suited to the hall.' },
      ],
      related: [
        { href: '/industries/hotels-hospitality', label: 'Hotels and hospitality' },
        ...RELATED_CORE,
      ],
    },
  },
  {
    slug: 'government-institutions',
    name: 'Government & Institutions',
    title: 'Government & Institutional Interior Fit-Out',
    description: 'Interior fit-outs and furniture for government offices, schools and institutions by Brand Kettle BuildSpaces.',
    heroSubtitle: 'Durable, compliant interiors for public institutions.',
    image: '/imgs/commercial/brandkettle1.jpg',
    content: {
      intro: [
        'Interior fit-outs and furniture for government offices, educational institutions and public buildings, with a focus on durability, documentation and on-time delivery.',
      ],
      sections: [
        { heading: 'Clear scope and documentation', body: 'Detailed BOQs, drawings and progress reports support transparent project management and approvals.' },
        { heading: 'Durable by design', body: 'Materials and hardware are selected for heavy daily use and low maintenance.' },
        { heading: 'Furniture manufactured in-house', body: 'Offices, libraries and classrooms can be furnished from one factory, with consistent quality.' },
      ],
      faqs: [
        { q: 'Do you work on institutional and government projects?', a: 'Yes. We handle interiors and furniture for institutions, subject to tender and eligibility requirements.' },
        { q: 'Can you supply furniture only?', a: 'Yes. Library, classroom and office furniture can be supplied and installed.' },
        { q: 'How do you report progress?', a: 'Through scheduled site updates, drawings and milestone documentation agreed at the start.' },
      ],
      related: [
        { href: '/library-institutional-furniture', label: 'Institutional furniture' },
        ...RELATED_CORE,
      ],
    },
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

