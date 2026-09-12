import {
  faImages,
  faLightbulb,
  faCompass,
  faPenToSquare,
  faFlag,
  faStar,
  faGem,
  faCircleCheck,
  faChartBar,
  faFileLines,
  faEnvelopeOpen,
  faBell,
} from '@fortawesome/free-regular-svg-icons';

const cover = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

export const OFFER_META = {
  seo: {
    icon: faChartBar,
    tagline: 'Rank higher when customers search.',
    cover: cover(6620983),
  },
  'google-ads': {
    icon: faFlag,
    tagline: 'Search ads that pay for themselves.',
    cover: cover(9550363),
  },
  'social-media': {
    icon: faImages,
    tagline: 'Feeds that post, reply and sell, every week.',
    cover: cover(6620972),
  },
  'content-creation': {
    icon: faLightbulb,
    tagline: 'Photo, video and copy, ready to publish.',
    cover: cover(6620963),
  },
  laser: {
    icon: faGem,
    tagline: 'Precision cutting and engraving, any material.',
    cover: cover(7254423),
  },
  'large-format': {
    icon: faStar,
    tagline: 'Billboards, banners and wraps at full scale.',
    cover: cover(716272),
  },
  'dtf-printing': {
    icon: faImages,
    tagline: 'Vibrant apparel prints, from one tee to bulk.',
    cover: cover(14331366),
  },
  'web-development': {
    icon: faCompass,
    tagline: 'Fast sites that turn visits into enquiries.',
    cover: cover(6620993),
  },
  'graphic-design': {
    icon: faPenToSquare,
    tagline: 'Graphics that look sharp everywhere.',
    cover: cover(7254429),
  },
  'logo-brand-kit': {
    icon: faCircleCheck,
    tagline: 'Logos and kits built to be remembered.',
    cover: cover(7480241),
  },
};

export const META_FALLBACK = {
  icon: faFileLines,
  tagline: '',
  cover: cover(6620972),
};
export const CONTACT_ICONS = { mail: faEnvelopeOpen, bell: faBell };
