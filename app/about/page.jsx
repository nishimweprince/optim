import Link from 'next/link';
import { Nav, Reveal, SiteFooter } from '../../components/sections';
import { PEXELS } from '../../lib/catalogue';

const GALLERY = [
  {
    img: PEXELS.workshop,
    caption: 'Inks mixed and matched for every brand palette.',
  },
  {
    img: PEXELS.portrait,
    caption: 'Laser precision on wood, metal and acrylic.',
  },
  {
    img: PEXELS.city,
    caption: 'Large-format output, ready for the street.',
  },
  {
    img: PEXELS.team,
    caption: 'Craftsmanship behind every finished piece.',
  },
];

export const metadata = { title: 'About | Optim Marketing Agency' };

const REASONS = [
  {
    n: '01',
    title: 'Cutting-edge technology',
    text: 'We use the latest printing equipment and techniques to ensure the highest quality.',
  },
  {
    n: '02',
    title: 'Creative expertise',
    text: 'Our team of designers and branding specialists bring innovative ideas to life.',
  },
  {
    n: '03',
    title: 'Customer focus',
    text: "We focus on customer satisfaction, ensuring that every project meets our clients' expectations.",
  },
  {
    n: '04',
    title: 'Fast turnaround',
    text: 'Timely delivery without compromising on quality.',
  },
];

export default function About() {
  return (
    <main>
      <Nav />
      <header className="hero about-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PEXELS.hero}
          alt="Printing press and finished posters inside the Optim studio"
        />
        <div className="hero-shade" />
        <div className="hero-copy page-wrap">
          <h1>
            <span>A leading printing</span>
            <strong>and branding house.</strong>
          </h1>
          <div className="hero-bottom">
            <p>
              Optim Digital Marketing Expert specializes in large-format
              printing, design, and branding, with high-impact visual solutions
              that help businesses stand out.
            </p>
            <div className="button-row">
              <Link className="button button-light" href="/offers">
                Explore services
              </Link>
              <Link className="button button-ghost-light" href="/#contact">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="section process">
        <div className="page-wrap">
          <Reveal className="section-heading">
            <span className="utility-label">Vision and mission</span>
            <h2>Built to elevate your brand.</h2>
          </Reveal>
          <div className="process-list">
            <Reveal className="process-step">
              <span>01</span>
              <h3>Our vision</h3>
              <p>
                To be the preferred printing and branding partner for businesses
                seeking creative, high-quality, and impactful visual solutions.
              </p>
            </Reveal>
            <Reveal className="process-step">
              <span>02</span>
              <h3>Our mission</h3>
              <p>
                To deliver top-notch printing, design, and branding solutions
                that elevate businesses and create a lasting visual impact.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section about-gallery-section">
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
            <p>Print, design and branding, from the studio floor.</p>
          </Reveal>
          <div className="about-gallery">
            {GALLERY.map((shot, index) => (
              <Reveal
                className={`about-shot about-shot-${index + 1}`}
                key={shot.caption}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.img} alt={shot.caption} loading="lazy" />
                <span>{shot.caption}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section process">
        <div className="page-wrap">
          <Reveal className="section-heading">
            <span className="utility-label">Why choose us</span>
            <h2>Four reasons brands stay.</h2>
          </Reveal>
          <div className="process-list">
            {REASONS.map((reason) => (
              <Reveal className="process-step" key={reason.n}>
                <span>{reason.n}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="catalogue-cta">
        <div className="page-wrap">
          <span className="utility-label">Start your project</span>
          <h2>
            Let Optim bring
            <br />
            your brand to life.
          </h2>
          <Link className="button button-light" href="/#contact">
            Get a quote
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
