'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {
  CUSTOMERS,
  WORK_SAMPLES,
  WHY_OPTIM,
  CATALOGUE,
  CATALOGUE_GROUPS,
  PEXELS,
} from '../lib/catalogue';
import { OFFER_META, META_FALLBACK } from '../lib/offerMeta';

const firstPrice = (offer) => offer?.tiers?.[0]?.p || 'Get a quote';

export function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible');
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="OPTIM Digital home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/optim-logo.png" alt="" />
      <span>
        OPTIM<span className="brand-slash">/</span>DIGITAL
      </span>
    </Link>
  );
}

export function Nav({ solid = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={`site-nav${solid ? ' solid' : ''}${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}
    >
      <div className="nav-shell">
        <Brand />
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/offers">Offers</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className="button button-light nav-cta" href="/#contact">
          Start a project
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>
      <div className="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          <Link href="/#work" onClick={() => setOpen(false)}>
            Work
          </Link>
          <Link href="/offers" onClick={() => setOpen(false)}>
            Offers
          </Link>
          <Link href="/#process" onClick={() => setOpen(false)}>
            Process
          </Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
        <span>Kigali, Rwanda · Printing and branding house</span>
      </div>
    </header>
  );
}

function MomentumRail() {
  return (
    <div
      className="momentum-rail"
      aria-label="OPTIM method: Design, produce, deliver"
    >
      <span className="rail-line" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>Design</span>
      <span>Produce</span>
      <span>Deliver</span>
    </div>
  );
}

export function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (video && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      video.pause();
  }, []);

  return (
    <header className="hero">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/videos/29906414/being-made-factory-machine-newspaper-29906414.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source
          src="https://videos.pexels.com/video-files/29906414/12837349_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-shade" />
      <div className="hero-copy page-wrap">
        <h1 className="text-md:lg">
          <span>Precision in</span>
          <strong className="!m-0">every pixel.</strong>
        </h1>
        <div className="hero-bottom">
          <p>
            Optim is a full-service printing and branding house, from graphic
            design and large-format printing to laser cutting, engraving and
            complete brand identities.
          </p>
          <div className="button-row">
            <Link className="button button-light" href="/offers">
              Explore services <FontAwesomeIcon icon={faChevronRight} />
            </Link>
            <Link className="button button-ghost-light" href="/#contact">
              <FontAwesomeIcon icon={faChevronRight} /> Get a quote
            </Link>
          </div>
        </div>
        <MomentumRail />
      </div>
    </header>
  );
}

function LogoItem({ name, slug, hidden }) {
  const [status, setStatus] = useState('loading');
  return (
    <span className="logo-item" aria-hidden={hidden || undefined}>
      {status === 'loading' && (
        <span className="logo-skeleton" aria-hidden="true" />
      )}
      {status === 'missing' ? (
        <span className="logo-placeholder">{name}</span>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          className="logo-img"
          src={`/logos/${slug}.png`}
          alt={name}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('missing')}
          style={status === 'loading' ? { display: 'none' } : undefined}
        />
      )}
    </span>
  );
}

export function LogoCarousel() {
  const loop = [...CUSTOMERS, ...CUSTOMERS];
  return (
    <section className="logo-strip" aria-label="Customer logos">
      <div className="logo-marquee">
        <div className="logo-track">
          {loop.map((customer, index) => (
            <LogoItem
              key={`${customer.slug}-${index}`}
              name={customer.name}
              slug={customer.slug}
              hidden={index >= CUSTOMERS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="section intro-section">
      <Reveal className="page-wrap intro-grid">
        <div>
          <span className="utility-label">About Optim</span>
          <p className="manifesto">A leading printing and branding house.</p>
        </div>
        <div className="intro-copy">
          <p>
            Optim Digital Marketing Expert specializes in large-format printing,
            design, and branding. With a commitment to quality and innovation,
            we provide high-impact visual solutions that help businesses stand
            out in a competitive market.
          </p>
          <Link className="text-link" href="/offers">
            Explore our services <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="about-display">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-main"
            src={PEXELS.studio}
            alt="Printing press and finished posters inside the Optim studio"
            loading="lazy"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-small"
            src={PEXELS.workshop}
            alt="Colorful inks ready for a print run"
            loading="lazy"
          />
          <span className="about-chip">
            Design, print, cut, engrave and brand under one roof
          </span>
        </div>
      </Reveal>
    </section>
  );
}

export function Work() {
  return (
    <section className="section section-dark work-section" id="work">
      <div className="page-wrap">
        <Reveal className="section-heading heading-split">
          <div>
            <span className="utility-label">Our work</span>
            <h2>
              A glimpse of
              <br />
              what we produce.
            </h2>
          </div>
          <p>
            Print, design, and branding for banks, universities, media houses,
            and clinics across Rwanda.
          </p>
        </Reveal>
        <div className="work-grid">
          {WORK_SAMPLES.map((sample, index) => (
            <Reveal
              className={`work-item work-item-${index + 1}`}
              key={sample.name}
            >
              <Link href="/offers">
                <span className="work-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sample.img}
                    alt={`${sample.name}, representative project imagery`}
                    loading="lazy"
                  />
                  <small>Representative imagery</small>
                </span>
                <span className="work-title">
                  <span>
                    <strong>{sample.name}</strong>
                    <small>{sample.blurb}</small>
                  </span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="reel">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.pexels.com/videos/29975898/factories-factory-fibre-machinery-29975898.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source
              src="https://videos.pexels.com/video-files/29975898/12863423_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <span>Optim in production</span>
        </Reveal>
      </div>
    </section>
  );
}

export function OffersPreview() {
  return (
    <section className="section offers-preview" id="offers">
      <div className="page-wrap">
        <Reveal className="section-heading heading-split">
          <div>
            <span className="utility-label">Our services</span>
            <h2>
              Precision in every pixel,
              <br />
              from design to delivery.
            </h2>
          </div>
          <p>
            Start with a single job or brand everything at once. Design, print,
            and finishing live under one roof.
          </p>
        </Reveal>
        <div className="service-grid">
          {CATALOGUE_GROUPS.map((group) => {
            const offers = CATALOGUE.filter(
              (offer) => offer.group === group.id,
            );
            return (
              <Reveal className="service-card" key={group.id}>
                <Link href={`/offers?group=${group.id}`}>
                  <span className="service-count">
                    {String(offers.length).padStart(2, '0')} services
                  </span>
                  <h3>{group.label}</h3>
                  <p>{group.description}</p>
                  <span className="service-price">{firstPrice(offers[0])}</span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="section-action">
          <Link className="button button-dark" href="/offers">
            Explore all 9 services <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyOptim() {
  return (
    <section className="section flagship" id="why-optim">
      <div className="page-wrap">
        <Reveal className="flagship-intro">
          <span className="utility-label">Why choose Optim</span>
          <h2>
            The preferred partner
            <br />
            for standout visuals.
          </h2>
          <p>
            Our vision is to be the preferred printing and branding partner for
            businesses seeking creative, high-quality, and impactful visual
            solutions.
          </p>
        </Reveal>
        <div className="plan-grid">
          {WHY_OPTIM.map((reason) => (
            <Reveal className="plan-card" key={reason.name}>
              <span className="plan-audience">{reason.for}</span>
              <h3>{reason.name}</h3>
              <ul>
                {reason.items.map((item) => (
                  <li key={item}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link className="text-link" href="/#contact">
                Get a quote <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    {
      n: '01',
      title: 'Design',
      text: 'Bring an idea or a finished file. Our designers create logos, layouts, and artwork ready for production.',
    },
    {
      n: '02',
      title: 'Produce',
      text: 'We print, cut, engrave, and finish with cutting-edge equipment and close checks on quality.',
    },
    {
      n: '03',
      title: 'Deliver',
      text: 'Timely delivery without compromise on quality, so your brand goes public on schedule.',
    },
  ];
  return (
    <section className="section process" id="process">
      <div className="page-wrap">
        <Reveal className="section-heading">
          <span className="utility-label">How we work</span>
          <h2>Design. Produce. Deliver.</h2>
        </Reveal>
        <div className="process-list">
          {steps.map((step) => (
            <Reveal className="process-step" key={step.n}>
              <span>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectInquiryForm({ compact = false }) {
  const [note, setNote] = useState('');
  function createEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const company = data.get('company');
    const subject = `Quote request from ${company || name}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone') || 'Not provided'}`,
      `Service: ${data.get('service')}`,
      `Project size: ${data.get('budget')}`,
      `Timeline: ${data.get('timeline')}`,
      '',
      'Project details:',
      data.get('summary'),
    ].join('\n');
    setNote(
      'Your email app should open with a draft. Review it, then send when ready.',
    );
    window.location.href = `mailto:optimdigitalmarketingexpert@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form
      className={`inquiry-form${compact ? ' compact' : ''}`}
      onSubmit={createEmail}
    >
      <div className="field-pair">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" required />
        </label>
      </div>
      <div className="field-pair">
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone <span>(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="field-pair">
        <label>
          What do you need?
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Select a service
            </option>
            {CATALOGUE.map((offer) => (
              <option key={offer.slug} value={offer.family}>
                {offer.family}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
        <label>
          Project size
          <select name="budget" defaultValue="" required>
            <option value="" disabled>
              Select a size
            </option>
            <option>Single items</option>
            <option>Small batch</option>
            <option>Bulk order</option>
            <option>Ongoing partnership</option>
          </select>
        </label>
      </div>
      <label>
        Preferred timeline
        <select name="timeline" defaultValue="" required>
          <option value="" disabled>
            Select timing
          </option>
          <option>As soon as possible</option>
          <option>Within one month</option>
          <option>Within three months</option>
          <option>Still planning</option>
        </select>
      </label>
      <label>
        Project details
        <textarea
          name="summary"
          rows="4"
          placeholder="What should we print, cut, engrave, or brand for you?"
          required
        />
      </label>
      <div className="form-submit">
        <button className="button button-light" type="submit">
          Create inquiry email <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <p aria-live="polite">
          {note ||
            'This opens a draft in your email app. Nothing is sent automatically.'}
        </p>
      </div>
    </form>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="page-wrap contact-grid">
        <Reveal className="contact-intro">
          <span className="utility-label">Get a quote</span>
          <h2>
            Let us start
            <br />
            your project.
          </h2>
          <p>
            Have a print, design, or branding job in mind? Reach out directly or
            send us a message. We will get back to you quickly.
          </p>
          <a
            className="contact-email"
            href="mailto:optimdigitalmarketingexpert@gmail.com"
          >
            <FontAwesomeIcon icon={faChevronRight} />{' '}
            optimdigitalmarketingexpert@gmail.com
          </a>
          <p>
            +250 788470858
            <br />
            Ikaze House, Remera Kisimenti, 3rd floor, Room 13, Kigali, Rwanda
          </p>
        </Reveal>
        <Reveal>
          <ProjectInquiryForm />
        </Reveal>
      </div>
      <SiteFooter />
    </section>
  );
}

export function OffersCatalogue() {
  const [active, setActive] = useState('all');
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('group');
    if (requested && CATALOGUE_GROUPS.some((group) => group.id === requested))
      setActive(requested);
  }, []);
  const visible =
    active === 'all'
      ? CATALOGUE
      : CATALOGUE.filter((offer) => offer.group === active);
  return (
    <div className="catalogue-browser">
      <div className="filter-row" aria-label="Filter offers">
        <button
          type="button"
          aria-pressed={active === 'all'}
          onClick={() => setActive('all')}
        >
          All <span>{CATALOGUE.length}</span>
        </button>
        {CATALOGUE_GROUPS.map((group) => (
          <button
            key={group.id}
            type="button"
            aria-pressed={active === group.id}
            onClick={() => setActive(group.id)}
          >
            {group.label}{' '}
            <span>
              {CATALOGUE.filter((offer) => offer.group === group.id).length}
            </span>
          </button>
        ))}
      </div>
      <div className="catalogue-list" aria-live="polite">
        {visible.map((offer) => {
          const meta = OFFER_META[offer.slug] || META_FALLBACK;
          const group = CATALOGUE_GROUPS.find(
            (item) => item.id === offer.group,
          );
          return (
            <Link
              className="catalogue-row"
              href={`/offers/${offer.slug}`}
              key={offer.slug}
            >
              <span className="catalogue-icon">
                <FontAwesomeIcon icon={meta.icon} />
              </span>
              <span>
                <small>{group?.label}</small>
                <strong>{offer.family}</strong>
              </span>
              <span className="catalogue-note">{offer.note}</span>
              <span className="catalogue-price">{firstPrice(offer)}</span>
              <FontAwesomeIcon
                className="catalogue-arrow"
                icon={faChevronRight}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap footer-grid">
        <Brand />
        <p>
          Printing, design, and branding
          <br />
          that help businesses stand out.
        </p>
        <nav aria-label="Footer navigation">
          <Link href="/#work">Work</Link>
          <Link href="/offers">Offers</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="footer-meta">
          <span>© 2026 OPTIM Digital</span>
          <span>Kigali, Rwanda</span>
        </div>
      </div>
    </footer>
  );
}
