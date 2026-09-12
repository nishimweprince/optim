import Link from 'next/link';
import { Nav, OffersCatalogue, SiteFooter } from '../../components/sections';

export const metadata = { title: 'Services | Optim Marketing Agency' };

export default function OffersIndex() {
  return (
    <main>
      <Nav solid />
      <section className="inner-hero catalogue-hero">
        <div className="page-wrap">
          <span className="utility-label">Brand, content, digital, print</span>
          <h1>
            Clear services.
            <br />
            Honest quotes.
          </h1>
          <div className="inner-hero-copy">
            <p>
              Choose one focused service or combine several into one plan. Every
              engagement is quoted for your goals, channels and timelines.
            </p>
            <span>10 services · 3 disciplines</span>
          </div>
        </div>
      </section>
      <section className="catalogue-section">
        <div className="page-wrap">
          <OffersCatalogue />
        </div>
      </section>
      <section className="catalogue-cta">
        <div className="page-wrap">
          <span className="utility-label">Need a joined-up plan?</span>
          <h2>
            Start with the goal.
            <br />
            We will map the right mix.
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
