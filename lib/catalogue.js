// Optim services and customers, based on https://www.optim.rw/
// Full-service marketing agency, Kigali, Rwanda.
// Every job is quoted individually, so tiers carry scope labels instead of fixed prices.

const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

export const PEXELS = {
  hero: px(6620972),
  studio: px(6620963),
  team: px(6620983),
  shoot: px(9550363),
  city: px(716272),
  workshop: px(6620993),
  portrait: px(7254423),
};

// Verified against Optim's published customer page on 2026-09-12.
// Assets are the exact marks published at https://www.optim.rw/customers.html.
export const CUSTOMERS = [
  { name: 'Ecobank', slug: 'ecobank', logo: '/logos/ecobank.jpg' },
  { name: 'Pesapal', slug: 'pesapal', logo: '/logos/pesapal.png' },
  {
    name: 'African Leadership University',
    slug: 'alu',
    logo: '/logos/alu.jpg',
  },
  {
    name: 'Rwanda Forensic Institute',
    slug: 'rfi',
    logo: '/logos/rfi.jpg',
  },
  {
    name: 'Davis College Akilah',
    slug: 'akilah',
    logo: '/logos/akilah.png',
  },
  { name: 'Fine FM 93.1', slug: 'fine-fm', logo: '/logos/fine-fm.jpg' },
  {
    name: 'Radiant Yacu',
    slug: 'radiant-yacu',
    logo: '/logos/radiant-yacu.png',
  },
  {
    name: 'Rwanda Broadcasting Agency',
    slug: 'rba',
    logo: '/logos/rba.png',
  },
  {
    name: 'Legacy Clinics',
    slug: 'legacy-clinics',
    logo: '/logos/legacy-clinics.png',
  },
  {
    name: 'Rwanda Education Board',
    slug: 'reb',
    logo: '/logos/reb.png',
  },
  {
    name: 'Umutanguha Finance',
    slug: 'umutanguha',
    logo: '/logos/umutanguha.png',
  },
  {
    name: 'Gasabo Gold Refinery',
    slug: 'ggr',
    logo: '/logos/ggr.png',
  },
];

export const WORK_SAMPLES = [
  {
    name: 'Brand campaigns',
    img: PEXELS.hero,
    blurb: 'Identities and campaign visuals that carry across every channel.',
  },
  {
    name: 'Content production',
    img: PEXELS.shoot,
    blurb: 'Photo and video shoots built for feeds, ads and print.',
  },
  {
    name: 'Digital and print',
    img: PEXELS.city,
    blurb: 'Ads, sites and large-format that launch together.',
  },
];

export const WHY_OPTIM = [
  {
    name: 'Strategy first',
    for: 'Work that performs',
    items: [
      'Every brief starts from the outcome you need',
      'Channels planned together, budgets weighted to impact',
    ],
  },
  {
    name: 'One connected team',
    for: 'No handoffs',
    items: [
      'Brand, content, media and production side by side',
      'One idea stays coherent across every channel',
    ],
  },
  {
    name: 'Made to ship',
    for: 'Fast and finished',
    items: [
      'Campaigns produced in-house, from shoot to large-format',
      'Timely delivery without trading away quality',
    ],
  },
  {
    name: 'Measured monthly',
    for: 'Proof, not promises',
    items: [
      'Clear reporting on what moved and what comes next',
      'Winning work scaled, weak work cut',
    ],
  },
];

// Service explorer: all 9 Optim agency services.
export const CATALOGUE = [
  {
    slug: 'brand-identity',
    group: 'brand',
    family: 'Optim Brand Identity',
    note: 'Logos, systems, guidelines',
    tiers: [
      {
        t: 'Logo and Identity',
        p: 'Quoted per project',
        target: 'New and growing businesses',
        items: [
          'Logo creation',
          'Colors, type and visual system',
          'Brand guidelines',
        ],
      },
      {
        t: 'Full Identity',
        p: 'Quoted per project',
        target: 'Businesses going to market',
        items: [
          'Naming support',
          'Complete identity and templates',
          'Launch-ready asset kit',
        ],
      },
    ],
  },
  {
    slug: 'social-media',
    group: 'content',
    family: 'Optim Social Media',
    note: 'Always-on feeds that perform',
    tiers: [
      {
        t: 'Starter',
        p: 'Quoted per month',
        target: 'Small businesses',
        items: ['Content calendar', 'Design and short video', 'Monthly report'],
      },
      {
        t: 'Growth',
        p: 'Quoted per month',
        target: 'Growing brands',
        items: [
          'Multi-platform publishing',
          'Community management',
          'Campaign boosts and analytics',
        ],
      },
    ],
  },
  {
    slug: 'content-studio',
    group: 'content',
    family: 'Optim Content Studio',
    note: 'Photo and video production',
    tiers: [
      {
        t: 'Shoot Day',
        p: 'Quoted per project',
        target: 'Feeds, ads, launches',
        items: [
          'Photo and video crew',
          'Edited photos and reels',
          'Captions and cutdowns',
        ],
      },
      {
        t: 'Campaign Production',
        p: 'Quoted per project',
        target: 'Bigger launches',
        items: [
          'Concept and scripting',
          'Multi-location shoot',
          'Full campaign asset set',
        ],
      },
    ],
  },
  {
    slug: 'digital-advertising',
    group: 'growth',
    family: 'Optim Digital Advertising',
    note: 'Paid media that converts',
    tiers: [
      {
        t: 'Starter',
        p: 'Quoted per month',
        target: 'First-time advertisers',
        items: [
          'Meta and Google setup',
          'Ad creative',
          'Lead capture and weekly tuning',
        ],
      },
      {
        t: 'Scale',
        p: 'Quoted per month',
        target: 'Businesses ready to grow',
        items: [
          'Full-funnel campaigns',
          'Retargeting and testing',
          'Exec dashboard',
        ],
      },
    ],
  },
  {
    slug: 'seo-content',
    group: 'growth',
    family: 'Optim SEO and Content',
    note: 'Visibility that compounds',
    tiers: [
      {
        t: 'Local',
        p: 'Quoted per month',
        target: 'Local businesses',
        items: [
          'Google Business and reviews',
          'Local keywords',
          'Monthly articles',
        ],
      },
      {
        t: 'Growth',
        p: 'Quoted per month',
        target: 'Businesses playing long',
        items: [
          'Technical and on-page SEO',
          'Content engine',
          'Authority building',
        ],
      },
    ],
  },
  {
    slug: 'web-digital',
    group: 'digital',
    family: 'Optim Web and Digital',
    note: 'Sites built to convert',
    tiers: [
      {
        t: 'Launch Site',
        p: 'Quoted per project',
        target: 'New businesses',
        items: [
          'Up to 5 pages, mobile-first',
          'WhatsApp and lead forms',
          'Basic SEO',
        ],
      },
      {
        t: 'Business and Commerce',
        p: 'Quoted per project',
        target: 'Selling online',
        items: [
          'Up to 12 pages or full store',
          'Payments and analytics',
          'Blog and integrations',
        ],
      },
    ],
  },
  {
    slug: 'lifecycle-crm',
    group: 'growth',
    family: 'Optim Lifecycle and CRM',
    note: 'Turn leads into customers',
    tiers: [
      {
        t: 'Capture',
        p: 'Quoted per project',
        target: 'Businesses missing follow-up',
        items: [
          'WhatsApp and email setup',
          'Lead capture and routing',
          'Follow-up scripts',
        ],
      },
      {
        t: 'Automate',
        p: 'Quoted per project',
        target: 'Scaling sales teams',
        items: [
          'Automated journeys',
          'CRM integration',
          'Reminders and win-back flows',
        ],
      },
    ],
  },
  {
    slug: 'print-production',
    group: 'print',
    family: 'Optim Print and Production',
    note: 'Everything physical, in-house',
    tiers: [
      {
        t: 'Print Essentials',
        p: 'Quoted per project',
        target: 'Everyday brand needs',
        items: [
          'Digital and offset printing',
          'Business cards to catalogs',
          'Embroidery and apparel',
        ],
      },
      {
        t: 'Large Format and Finish',
        p: 'Quoted per project',
        target: 'Visibility at scale',
        items: [
          'Billboards, banners, wraps',
          'UV, laser and CNC work',
          'Signage and installation',
        ],
      },
    ],
  },
  {
    slug: 'activations-events',
    group: 'brand',
    family: 'Optim Activations and Events',
    note: 'Launches people remember',
    tiers: [
      {
        t: 'Launch',
        p: 'Quoted per project',
        target: 'Product and promo launches',
        items: [
          'Concept and branding',
          'Event collateral and merch',
          'Coverage and reels',
        ],
      },
      {
        t: 'Flagship',
        p: 'Quoted per project',
        target: 'Major brand moments',
        items: [
          'Full experience design',
          'Staging, signage and staff kits',
          'Highlight film',
        ],
      },
    ],
  },
];

export const CATALOGUE_GROUPS = [
  {
    id: 'brand',
    label: 'Brand and Strategy',
    description: 'Identity, positioning and launches people remember.',
  },
  {
    id: 'content',
    label: 'Content and Social',
    description: 'Always-on feeds plus photo and video production.',
  },
  {
    id: 'growth',
    label: 'Growth and Media',
    description: 'Paid media, search and journeys that convert.',
  },
  {
    id: 'digital',
    label: 'Web and Digital',
    description: 'Sites and stores built to turn visits into enquiries.',
  },
  {
    id: 'print',
    label: 'Print and Production',
    description: 'Everything physical, produced in-house in Kigali.',
  },
];
