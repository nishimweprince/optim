import { notFound } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';
import { Nav, SiteFooter } from '../../../components/sections';
import { CATALOGUE, CATALOGUE_GROUPS } from '../../../lib/catalogue';
import { OFFER_META, META_FALLBACK } from '../../../lib/offerMeta';

export function generateStaticParams() {
  return CATALOGUE.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const offer = CATALOGUE.find((item) => item.slug === slug);
  return offer
    ? { title: `${offer.family} | Optim Printing and Branding` }
    : {};
}

export default async function OfferPage({ params }) {
  const { slug } = await params;
  const i = CATALOGUE.findIndex((f) => f.slug === slug);
  if (i < 0) notFound();
  const offer = CATALOGUE[i];
  const meta = OFFER_META[offer.slug] || META_FALLBACK;
  const group = CATALOGUE_GROUPS.find((item) => item.id === offer.group);
  const related = [
    CATALOGUE[(i + 1) % CATALOGUE.length],
    CATALOGUE[(i + 5) % CATALOGUE.length],
    CATALOGUE[(i + 9) % CATALOGUE.length],
  ];

  return (
    <main>
      <Nav solid />
      <article>
        <section className="offer-hero">
          <div className="page-wrap">
            <Link className="back-link" href="/offers">
              <FontAwesomeIcon icon={faChevronRight} /> All services
            </Link>
            <div className="offer-hero-grid">
              <div className="offer-heading">
                <span className="offer-icon">
                  <FontAwesomeIcon icon={meta.icon} />
                </span>
                <span className="utility-label">
                  {group?.label} · {offer.note}
                </span>
                <h1>{offer.family}</h1>
                <p>
                  {meta.tagline} Every option is a clear scope, quoted for your
                  exact job.
                </p>
                <Link className="button button-dark" href="/#contact">
                  Request this service <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
              <div className="offer-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={meta.cover} alt={`${offer.family} service`} />
                <span>Precision in every pixel</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tier-section">
          <div className="page-wrap">
            <div className="tier-heading">
              <span className="utility-label">Choose your option</span>
              <h2>
                Start at the level
                <br />
                the job requires.
              </h2>
              <p>
                Every job is quoted individually. We confirm materials, sizes,
                and timing before work begins.
              </p>
            </div>
            <div className="tiers">
              {offer.tiers.map((t) => (
                <div className="tier" key={t.t}>
                  <span className="tier-for">Best for {t.target}</span>
                  <h3>{t.t}</h3>
                  <strong>{t.p}</strong>
                  <ul>
                    {t.items.map((x) => (
                      <li key={x}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <Link className="text-link" href="/#contact">
                    Choose this option <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="related-section">
          <div className="page-wrap">
            <div className="related-heading">
              <span className="utility-label">Keep exploring</span>
              <h2>Connected offers.</h2>
            </div>
            <div className="related-grid">
              {related.map((r) => {
                const m = OFFER_META[r.slug] || META_FALLBACK;
                return (
                  <Link key={r.slug} href={`/offers/${r.slug}`}>
                    <span>
                      <FontAwesomeIcon icon={m.icon} />
                    </span>
                    <strong>{r.family}</strong>
                    <small>{r.tiers[0].p}</small>
                    <FontAwesomeIcon
                      className="related-arrow"
                      icon={faChevronRight}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section className="offer-bottom-cta">
          <div className="page-wrap">
            <span className="utility-label">Ready to print?</span>
            <h2>Let Optim bring your brand to life.</h2>
            <Link className="button button-light" href="/#contact">
              Get a quote <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
