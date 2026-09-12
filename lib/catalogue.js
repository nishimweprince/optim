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
    name: 'Digital marketing',
    img: PEXELS.hero,
    blurb: 'SEO, Google Ads, social and content that grow revenue.',
  },
  {
    name: 'Branding',
    img: PEXELS.portrait,
    blurb: 'Laser, large-format and DTF, produced in-house.',
  },
  {
    name: 'Design',
    img: PEXELS.studio,
    blurb: 'Websites, graphics, logos and complete brand kits.',
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

// Service explorer: Optim's three main offerings.
export const CATALOGUE = [
  {
    slug: 'seo',
    group: 'digital',
    family: 'Optim SEO',
    note: 'Rank higher, get found',
    tiers: [
      {
        t: 'Local SEO',
        p: 'Quoted per month',
        target: 'Local businesses',
        items: [
          'Google Business and reviews',
          'Local keywords',
          'Monthly articles',
        ],
      },
      {
        t: 'Growth SEO',
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
    slug: 'google-ads',
    group: 'digital',
    family: 'Optim Google Ads',
    note: 'Search ads that convert',
    tiers: [
      {
        t: 'Starter',
        p: 'Quoted per month',
        target: 'First-time advertisers',
        items: ['Campaign setup', 'Ad copy and creative', 'Weekly tuning'],
      },
      {
        t: 'Scale',
        p: 'Quoted per month',
        target: 'Businesses ready to grow',
        items: [
          'Full-funnel structure',
          'Retargeting and testing',
          'Exec dashboard',
        ],
      },
    ],
  },
  {
    slug: 'social-media',
    group: 'digital',
    family: 'Optim Social Media Marketing',
    note: 'Feeds that sell',
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
          'Boosts and analytics',
        ],
      },
    ],
  },
  {
    slug: 'content-creation',
    group: 'digital',
    family: 'Optim Content Creation',
    note: 'Photo, video, copy',
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
        t: 'Always-on',
        p: 'Quoted per month',
        target: 'Brands publishing weekly',
        items: ['Monthly shoot', 'Editing and copy', 'Publishing calendar'],
      },
    ],
  },
  {
    slug: 'laser',
    group: 'branding',
    family: 'Optim Laser Cutting and Engraving',
    note: 'Wood, acrylic, metal, leather',
    tiers: [
      {
        t: 'Laser Cutting',
        p: 'Quoted per project',
        target: 'Signage, decor, models',
        items: [
          'Precision cutting',
          'Intricate detail at any scale',
          'Finishing included',
        ],
      },
      {
        t: 'Laser Engraving',
        p: 'Quoted per project',
        target: 'Gifts, awards, marking',
        items: [
          'Personalized engraving',
          'Premium durable finish',
          'Single pieces to batches',
        ],
      },
    ],
  },
  {
    slug: 'large-format',
    group: 'branding',
    family: 'Optim Large Format Printing',
    note: 'Billboards, banners, wraps',
    tiers: [
      {
        t: 'Banners and Posters',
        p: 'Quoted per project',
        target: 'Events, shops, promos',
        items: [
          'High-resolution output',
          'Bold, eye-catching visuals',
          'Fast turnaround',
        ],
      },
      {
        t: 'Wraps and Wall Graphics',
        p: 'Quoted per project',
        target: 'Branding at scale',
        items: ['Billboards', 'Vehicle wraps', 'Wall graphics'],
      },
    ],
  },
  {
    slug: 'dtf-printing',
    group: 'branding',
    family: 'Optim DTF Printing',
    note: 'Custom apparel printing',
    tiers: [
      {
        t: 'Small Batch',
        p: 'Quoted per project',
        target: 'Teams, events, merch tests',
        items: [
          'Vibrant full-color prints',
          'T-shirts and corporate wear',
          'Durable, wash-proof finish',
        ],
      },
      {
        t: 'Bulk Apparel',
        p: 'Quoted per project',
        target: 'Uniforms and large runs',
        items: [
          'Volume pricing',
          'Consistent quality',
          'Sizes and variants handled',
        ],
      },
    ],
  },
  {
    slug: 'web-development',
    group: 'design',
    family: 'Optim Web Development',
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
        t: 'Business and E-commerce',
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
    slug: 'graphic-design',
    group: 'design',
    family: 'Optim Graphic Design',
    note: 'Marketing and social graphics',
    tiers: [
      {
        t: 'Essentials',
        p: 'Quoted per project',
        target: 'Everyday brand needs',
        items: [
          'Social media graphics',
          'Flyers, posters, brochures',
          'Print-ready files',
        ],
      },
      {
        t: 'Campaign',
        p: 'Quoted per project',
        target: 'Launches and promos',
        items: [
          'Campaign visual system',
          'Multi-format asset set',
          'Art direction',
        ],
      },
    ],
  },
  {
    slug: 'logo-brand-kit',
    group: 'design',
    family: 'Optim Logo and Brand Kit',
    note: 'Complete identity systems',
    tiers: [
      {
        t: 'Logo',
        p: 'Quoted per project',
        target: 'New businesses',
        items: ['Logo creation', 'Colors and typography', 'Core file set'],
      },
      {
        t: 'Full Brand Kit',
        p: 'Quoted per project',
        target: 'Businesses going to market',
        items: [
          'Logo system and guidelines',
          'Templates and stationery',
          'Launch-ready asset kit',
        ],
      },
    ],
  },
];

export const CATALOGUE_GROUPS = [
  {
    id: 'digital',
    label: 'Digital Marketing',
    description: 'SEO, Google Ads, social media and content that grow revenue.',
  },
  {
    id: 'branding',
    label: 'Branding',
    description: 'Laser, large-format and DTF production, in-house.',
  },
  {
    id: 'design',
    label: 'Design',
    description: 'Web development, graphic design, logos and brand kits.',
  },
];
