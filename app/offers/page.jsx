import Link from 'next/link';
import { Nav, OffersCatalogue, SiteFooter } from '../../components/sections';

export const metadata = { title: 'Services | Optim Printing and Branding' };

export default function OffersIndex() {
  return (
    <main>
      <Nav solid />
      <section className="inner-hero catalogue-hero">
        <div className="page-wrap">
          <span className="utility-label">Design, print, cut, engrave, brand</span>
          <h1>Clear services.<br />Honest quotes.</h1>
          <div className="inner-hero-copy">
            <p>Choose one focused service or combine several to brand everything at once. Every job is quoted individually for your exact materials, sizes, and quantities.</p>
            <span>9 services · 5 disciplines</span>
          </div>
        </div>
      </section>
      <section className="catalogue-section"><div className="page-wrap"><OffersCatalogue /></div></section>
      <section className="catalogue-cta"><div className="page-wrap"><span className="utility-label">Need a joined-up plan?</span><h2>Start with the project.<br />We will map the right service.</h2><Link className="button button-light" href="/#contact">Get a quote</Link></div></section>
      <SiteFooter />
    </main>
  );
}
