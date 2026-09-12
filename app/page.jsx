import {
  Nav,
  Hero,
  LogoCarousel,
  Intro,
  Work,
  OffersPreview,
  WhyOptim,
  Process,
  Contact,
} from '../components/sections';

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <LogoCarousel />
      <Intro />
      <Work />
      <OffersPreview />
      <WhyOptim />
      <Process />
      <Contact />
    </main>
  );
}
