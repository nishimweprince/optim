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
  'brand-identity': {
    icon: faPenToSquare,
    tagline: 'Identities built to be remembered.',
    cover: cover(6620972),
  },
  'social-media': {
    icon: faImages,
    tagline: 'Feeds that post, reply and report, every week.',
    cover: cover(6620963),
  },
  'content-studio': {
    icon: faLightbulb,
    tagline: 'One shoot in, a month of content out.',
    cover: cover(9550363),
  },
  'digital-advertising': {
    icon: faFlag,
    tagline: 'Customer acquisition, not just advertising.',
    cover: cover(716272),
  },
  'seo-content': {
    icon: faChartBar,
    tagline: 'Rankings that compound month after month.',
    cover: cover(6620983),
  },
  'web-digital': {
    icon: faCompass,
    tagline: 'Fast sites that turn visits into enquiries.',
    cover: cover(6620993),
  },
  'lifecycle-crm': {
    icon: faStar,
    tagline: 'WhatsApp and email journeys that close leads.',
    cover: cover(14331366),
  },
  'print-production': {
    icon: faGem,
    tagline: 'Print, large-format and finishing under one roof.',
    cover: cover(7254423),
  },
  'activations-events': {
    icon: faCircleCheck,
    tagline: 'Launches with concept, staging and coverage.',
    cover: cover(7254429),
  },
};

export const META_FALLBACK = {
  icon: faFileLines,
  tagline: '',
  cover: cover(6620972),
};
export const CONTACT_ICONS = { mail: faEnvelopeOpen, bell: faBell };
