// Optim services and customers, based on https://www.optim.rw/
// Full-service printing and branding house, Kigali, Rwanda.
// Every job is quoted individually, so tiers carry scope labels instead of fixed prices.

const px = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

export const PEXELS = {
  hero: px(6620972),
  studio: px(6620963),
  team: px(6620983),
  shoot: px(9550363),
  city: px(716272),
  workshop: px(6620993),
  portrait: px(7254423),
};

// Logo files live in public/logos/<slug>.png. Slugs without a file render a
// labeled placeholder until the real logo is added.
export const CUSTOMERS = [
  { name: 'Ecobank', slug: 'ecobank' },
  { name: 'Pesapal', slug: 'pesapal' },
  { name: 'African Leadership University', slug: 'alu' },
  { name: 'Rwanda Forensic Institute', slug: 'rfi' },
  { name: 'Davis College Akilah', slug: 'akilah' },
  { name: 'Fine FM 93.1', slug: 'fine-fm' },
  { name: 'Radiant Yacu', slug: 'radiant-yacu' },
  { name: 'Rwanda Broadcasting Agency', slug: 'rba' },
  { name: 'Legacy Clinics', slug: 'legacy-clinics' },
  { name: 'Rwanda Education Board', slug: 'reb' },
  { name: 'Umutanguha Finance', slug: 'umutanguha' },
  { name: 'Gasabo Gold Refinery', slug: 'ggr' },
];

export const WORK_SAMPLES = [
  {
    name: 'Large-format printing',
    img: PEXELS.city,
    blurb: 'Billboards, banners and wall graphics with bold, eye-catching visuals.',
  },
  {
    name: 'Graphic design',
    img: PEXELS.hero,
    blurb: 'Logos, marketing materials and brand identities, designed for print.',
  },
  {
    name: 'UV and laser work',
    img: PEXELS.portrait,
    blurb: 'Direct-to-surface printing, precision cutting and premium engraving.',
  },
];

export const WHY_OPTIM = [
  {
    name: 'Cutting-edge technology',
    for: 'Quality without compromise',
    items: ['Latest printing equipment and techniques', 'High-resolution output on many materials', 'Consistent quality on every run'],
  },
  {
    name: 'Creative expertise',
    for: 'Ideas brought to life',
    items: ['Designers and branding specialists in house', 'Logos, identities and campaign visuals', 'Guidance from concept to finished piece'],
  },
  {
    name: 'Customer focus',
    for: 'Projects that meet expectations',
    items: ['Clear quotes before work begins', 'Close communication on every project', 'Satisfaction checked before delivery'],
  },
  {
    name: 'Fast turnaround',
    for: 'On time, every time',
    featured: true,
    items: ['Timely delivery as standard', 'Same-day options on selected work', 'No compromise on quality for speed'],
  },
];

// Service explorer: all 9 Optim services.
export const CATALOGUE = [
  { slug: 'graphic-design', group: 'design', family: 'Optim Graphic Design', note: 'Logos, print and social graphics', tiers: [
    { t: 'Brand Starter', p: 'Quoted per project', target: 'New and small businesses', items: ['Logo design', 'Business cards', 'Social media graphics'] },
    { t: 'Marketing Pack', p: 'Quoted per project', target: 'Businesses promoting an offer', items: ['Brochures and flyers', 'Posters', 'Coordinated campaign visuals'] },
    { t: 'Full Identity', p: 'Quoted per project', target: 'Businesses building a brand', items: ['Logo and brand identity', 'Marketing materials set', 'Print-ready files for every use'] },
  ]},
  { slug: 'digital-offset-printing', group: 'print', family: 'Optim Digital and Offset Printing', note: 'Short runs and bulk orders', tiers: [
    { t: 'Short Run', p: 'Quoted per project', target: 'Small quantities, fast', items: ['Digital printing', 'Business cards and brochures', 'Ideal for short runs'] },
    { t: 'Bulk and Offset', p: 'Quoted per project', target: 'Magazines, catalogs, volume', items: ['Offset printing', 'Magazines and catalogs', 'Cost-effective for bulk orders'] },
  ]},
  { slug: 'uv-printing', group: 'print', family: 'Optim UV Printing', note: 'Direct printing on hard surfaces', tiers: [
    { t: 'Custom Surfaces', p: 'Quoted per project', target: 'Signage, decor, products', items: ['Direct printing on acrylic, glass, metal and plastic', 'Vibrant, long-lasting colors', 'Small and large pieces'] },
    { t: 'Texture and Finish', p: 'Quoted per project', target: 'Premium branded pieces', items: ['Raised textures', 'High-detail artwork', 'Durable, premium finish'] },
  ]},
  { slug: 'large-format-printing', group: 'large', family: 'Optim Large Format Printing', note: 'Billboards, banners and wraps', tiers: [
    { t: 'Banners and Posters', p: 'Quoted per project', target: 'Events, shops, promotions', items: ['Banners and posters', 'High-resolution output', 'Bold, eye-catching visuals'] },
    { t: 'Wraps and Wall Graphics', p: 'Quoted per project', target: 'Advertising and branding at scale', items: ['Billboards', 'Vehicle wraps', 'Wall graphics'] },
  ]},
  { slug: 'laser-cutting', group: 'craft', family: 'Optim Laser Cutting', note: 'Precision cutting, many materials', tiers: [
    { t: 'Signage and Decor', p: 'Quoted per project', target: 'Shops, offices, interiors', items: ['Wood, acrylic and leather', 'Signage and decorative pieces', 'Intricate, precise designs'] },
    { t: 'Models and Crafts', p: 'Quoted per project', target: 'Architects, makers, brands', items: ['Architectural models', 'Craft and branding elements', 'Fine detail at any scale'] },
  ]},
  { slug: 'laser-engraving', group: 'craft', family: 'Optim Laser Engraving', note: 'Personal and industrial marking', tiers: [
    { t: 'Gifts and Awards', p: 'Quoted per project', target: 'Gifting, recognition, ceremonies', items: ['Wood, metal, glass and acrylic', 'Personalized gifts, awards and plaques', 'Premium, durable finish'] },
    { t: 'Industrial Marking', p: 'Quoted per project', target: 'Equipment, tools, plates', items: ['Permanent marking on metal and more', 'Consistent, legible detail', 'Built to last'] },
  ]},
  { slug: 'cnc-cutting-engraving', group: 'craft', family: 'Optim CNC Cutting and Engraving', note: 'Computer-controlled precision', tiers: [
    { t: 'Signage and Furniture', p: 'Quoted per project', target: 'Interiors, retail, offices', items: ['Wood, metal and acrylic', 'Signage and furniture pieces', 'Computer-controlled precision'] },
    { t: 'Detailed Fabrication', p: 'Quoted per project', target: 'Decorative and functional builds', items: ['Intricate details', 'Repeatable, exact cuts', 'Decorative elements'] },
  ]},
  { slug: 'embroidery-screen-printing', group: 'apparel', family: 'Optim Embroidery and Screen Printing', note: 'Uniforms, apparel, corporate wear', tiers: [
    { t: 'Uniforms and Caps', p: 'Quoted per project', target: 'Teams and staff', items: ['Custom embroidery', 'Uniforms and caps', 'Promotional apparel'] },
    { t: 'Bulk Apparel', p: 'Quoted per project', target: 'Events, merch, corporate wear', items: ['Screen printing at scale', 'T-shirts, bags and corporate wear', 'Vibrant, durable prints'] },
  ]},
  { slug: 'branding-services', group: 'design', family: 'Optim Branding Services', note: 'Complete brand visibility', tiers: [
    { t: 'Logo and Identity', p: 'Quoted per project', target: 'Businesses finding their look', items: ['Logo creation', 'Corporate identity development', 'Consistent visual system'] },
    { t: 'Full Brand Visibility', p: 'Quoted per project', target: 'Businesses going public at scale', items: ['Signage', 'Promotional branding', 'Visibility across every touchpoint'] },
  ]},
];

export const CATALOGUE_GROUPS = [
  { id: 'design', label: 'Design and Brand', description: 'Logos, identities and complete branding solutions.' },
  { id: 'print', label: 'Print', description: 'Digital, offset and UV printing in high resolution.' },
  { id: 'large', label: 'Large Format', description: 'Billboards, banners, wraps and wall graphics.' },
  { id: 'craft', label: 'Cut and Engrave', description: 'Laser and CNC precision on wood, metal and acrylic.' },
  { id: 'apparel', label: 'Apparel and Promo', description: 'Embroidery and screen printing for teams and merch.' },
];
