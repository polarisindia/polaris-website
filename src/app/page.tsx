import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import {
  IntroStatement,
  ClientStrip,
  Footprint,
  Expertise,
  Process,
  BrandPromise,
  ProjectsRail,
  ImpactBand,
  Testimonials,
  LatestNews,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <ClientStrip />
      <Expertise />
      <Process />
      <BrandPromise />
      <ProjectsRail />
      <ImpactBand />
      <Testimonials />
      <Footprint />
      <LatestNews />
      <CTA />
    </>
  );
}
