import {
  faImages,
  faLightbulb,
  faCompass,
  faPenToSquare,
  faFlag,
  faStar,
  faGem,
  faCircleCheck,
  faFileLines,
  faEnvelopeOpen,
  faBell,
} from '@fortawesome/free-regular-svg-icons';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

const cover = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

export const OFFER_META = {
  'graphic-design': {
    icon: faPenToSquare,
    tagline:
      'Logos, marketing materials and identities that look sharp in print.',
    cover: cover(6620972),
  },
  'digital-offset-printing': {
    icon: faImages,
    tagline: 'Crisp short runs and cost-effective bulk, one roof.',
    cover: cover(9550363),
  },
  'uv-printing': {
    icon: faLightbulb,
    tagline: 'Vibrant direct printing on acrylic, glass, metal and plastic.',
    cover: cover(6620993),
  },
  'large-format-printing': {
    icon: faFlag,
    tagline: 'Billboards, banners and wraps with bold, eye-catching visuals.',
    cover: cover(716272),
  },
  'laser-cutting': {
    icon: faCompass,
    tagline: 'Precision cutting for signage, models and decor.',
    cover: cover(7254429),
  },
  'laser-engraving': {
    icon: faStar,
    tagline: 'Personalized gifts, awards and permanent marking.',
    cover: cover(7254423),
  },
  'cnc-cutting-engraving': {
    icon: faGem,
    tagline: 'Computer-controlled precision for signage and furniture.',
    cover: cover(7480241),
  },
  'embroidery-screen-printing': {
    icon: faShirt,
    tagline: 'Uniforms, caps and corporate wear that last.',
    cover: cover(14331366),
  },
  'branding-services': {
    icon: faCircleCheck,
    tagline: 'Complete branding, from logo to signage to promo.',
    cover: cover(6620963),
  },
};

export const META_FALLBACK = {
  icon: faFileLines,
  tagline: '',
  cover: cover(6620972),
};
export const CONTACT_ICONS = { mail: faEnvelopeOpen, bell: faBell };
