import { Cta } from "@/components/mvpblocks/Cta";
import FeaturesSection from "@/components/mvpblocks/FeaturesSection";
import { Footer } from "@/components/mvpblocks/Footer";
import Header from "@/components/mvpblocks/Header";
import Hero from "@/components/mvpblocks/Hero";
import { HowItWorks } from "@/components/mvpblocks/HowWorks";
import { PainSection } from "@/components/mvpblocks/PainSection";
import { SolutionSection } from "@/components/mvpblocks/SoluctionSection";
import { WhyChoose } from "@/components/mvpblocks/WhyChoose";
import { WhySection } from "@/components/mvpblocks/WhySection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PainSection />
      <WhySection />
      <SolutionSection />
      <HowItWorks />
      <FeaturesSection />
      <WhyChoose />
      <Cta />
      <Footer />
    </>
  );
}
