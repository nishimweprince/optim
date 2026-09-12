'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
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
          <Link href="/offers">Services</Link>
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
            Services
          </Link>
          <Link href="/#process" onClick={() => setOpen(false)}>
            Process
          </Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
        <span>Kigali, Rwanda · Marketing agency</span>
      </div>
    </header>
  );
}

function MomentumRail() {
  return (
    <div
      className="momentum-rail"
      aria-label="OPTIM method: Strategy, create, scale"
    >
      <span className="rail-line" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>Strategy</span>
      <span>Create</span>
      <span>Scale</span>
    </div>
  );
}

export function Hero() {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      video.pause();
    if (video.readyState >= 3) setReady(true);
  }, []);

  return (
    <header className={`hero${ready ? '' : ' hero-loading'}`}>
      {!ready && <div className="hero-skeleton" aria-hidden="true" />}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/videos/29906414/being-made-factory-machine-newspaper-29906414.jpeg?auto=compress&cs=tinysrgb&w=1920"
        onLoadedData={() => setReady(true)}
        onError={() => setReady(true)}
      >
        <source
          src="https://videos.pexels.com/video-files/29906414/12837349_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-shade" />
      <div className="hero-copy page-wrap">
        <h1>
          <span>Precision in</span>
          <strong>every pixel.</strong>
        </h1>
        <div className="hero-bottom">
          <p>
            Optim is a full-service marketing agency in Kigali. Strategy, brand,
            content, digital and print, planned together and produced under one
            roof.
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

function LogoItem({ name, logo, hidden }) {
  return (
    <span className="logo-item" aria-hidden={hidden || undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="logo-img"
        src={logo}
        alt={hidden ? '' : name}
        loading="eager"
      />
    </span>
  );
}

export function LogoCarousel() {
  const loop = [...CUSTOMERS, ...CUSTOMERS];
  return (
    <section className="logo-strip" aria-label="Selected Optim customers">
      <div className="logo-strip-head page-wrap">
        <span className="utility-label">Trusted by</span>
        <span>12 organisations across Rwanda</span>
      </div>
      <div className="logo-marquee">
        <div className="logo-track">
          {loop.map((customer, index) => (
            <LogoItem
              key={`${customer.slug}-${index}`}
              name={customer.name}
              logo={customer.logo}
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
          <p className="manifesto">A full-service marketing agency.</p>
        </div>
        <div className="intro-copy">
          <p>
            Optim plans and produces marketing across brand, content, digital
            and print, so the work ships faster and performs.
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
            Strategy, brand, content, digital and print, one team
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
            Campaigns for banks, universities, media houses and clinics across
            Rwanda.
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
  const sectionRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    const panels = [...section.querySelectorAll('[data-service-index]')];
    let frame;
    const updateActiveGroup = () => {
      const navHeight = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--nav-height',
        ),
      );
      const trigger = navHeight + Math.min(180, window.innerHeight * 0.28);
      let current = 0;
      panels.forEach((panel, index) => {
        if (panel.getBoundingClientRect().top <= trigger) current = index;
      });
      setActiveGroup(current);
      frame = undefined;
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveGroup);
    };
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    updateActiveGroup();
    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  function scrollToGroup(index) {
    const panel = sectionRef.current?.querySelector(
      `[data-service-index="${index}"]`,
    );
    if (!panel) return;
    setActiveGroup(index);
    panel.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
  }

  return (
    <section className="section offers-preview" id="offers" ref={sectionRef}>
      <div className="page-wrap services-scroll-layout">
        <aside className="services-sticky">
          <span className="utility-label">Our services</span>
          <h2>Five disciplines. One team.</h2>
          <p>From first idea to launch, one connected workflow.</p>
          <div className="service-index" aria-label="Service disciplines">
            {CATALOGUE_GROUPS.map((group, index) => (
              <button
                type="button"
                key={group.id}
                aria-current={activeGroup === index ? 'step' : undefined}
                onClick={() => scrollToGroup(index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {group.label}
              </button>
            ))}
          </div>
          <Link className="button button-dark" href="/offers">
            Explore all 9 services <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </aside>
        <div className="service-stack">
          {CATALOGUE_GROUPS.map((group, index) => {
            const offers = CATALOGUE.filter(
              (offer) => offer.group === group.id,
            );
            return (
              <article
                className={`service-panel service-panel-${group.id}${activeGroup === index ? ' is-active' : ''}`}
                data-service-index={index}
                key={group.id}
              >
                <Link href={`/offers?group=${group.id}`}>
                  <span className="service-panel-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>
                      <i aria-hidden="true" /> {offers.length} service
                      {offers.length === 1 ? '' : 's'}
                    </span>
                  </span>
                  <span className="service-panel-body">
                    <span>
                      <h3>{group.label}</h3>
                      <p>{group.description}</p>
                    </span>
                    <span className="service-press-mark" aria-hidden="true">
                      <i />
                      <i />
                      <b>{group.label.slice(0, 1)}</b>
                    </span>
                  </span>
                  <span className="service-panel-footer">
                    <span className="service-offer-list">
                      {offers.map((offer) => (
                        <span key={offer.slug}>
                          {offer.family.replace('Optim ', '')}
                        </span>
                      ))}
                    </span>
                    <span className="service-explore">
                      Explore discipline{' '}
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyOptim() {
  return (
    <section className="section flagship" id="why-optim">
      <div className="page-wrap why-layout">
        <Reveal className="why-lead">
          <span className="utility-label">Why choose Optim</span>
          <h2>
            Every channel,
            <br />
            one team.
          </h2>
          <p>
            Strategy, creative, media and production stay connected from brief
            to results.
          </p>
          <div className="why-register" aria-hidden="true">
            <i />
            <i />
            <span>
              <small>One connected workflow</small>
              Brief <b>→</b> results
            </span>
          </div>
        </Reveal>
        <div className="why-reasons">
          {WHY_OPTIM.map((reason, index) => (
            <Reveal className="why-reason" key={reason.name}>
              <span className="why-reason-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="why-reason-copy">
                <span>{reason.for}</span>
                <h3>{reason.name}</h3>
              </div>
              <ul>
                {reason.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">↳</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="why-action">
          <span>Bring the brief. We will carry it to results.</span>
          <Link className="button button-light" href="/#contact">
            Start a project <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    {
      n: '01',
      title: 'Strategy',
      text: 'Positioning, channels and budgets decided before anything is made.',
    },
    {
      n: '02',
      title: 'Create',
      text: 'Brand, content and campaigns produced in-house by one team.',
    },
    {
      n: '03',
      title: 'Scale',
      text: 'Launched, measured and tuned until the numbers move.',
    },
  ];
  return (
    <section className="section process" id="process">
      <div className="page-wrap">
        <Reveal className="section-heading">
          <span className="utility-label">How we work</span>
          <h2>Strategy. Create. Scale.</h2>
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
    const subject = `New business from ${company || name}`;
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
            <option>Single project</option>
            <option>Campaign</option>
            <option>Monthly retainer</option>
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
          placeholder="What should we market, launch, or grow?"
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
            Have a marketing goal in mind? Reach out or send a message. We will
            get back to you quickly.
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
        <p>Full-service marketing for ambitious brands.</p>
        <nav aria-label="Footer navigation">
          <Link href="/#work">Work</Link>
          <Link href="/offers">Services</Link>
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
