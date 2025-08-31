import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ShowcaseSection from '@/components/sections/showcase';
import AboutSection from '@/components/sections/about';
import VisionMissionSection from '@/components/sections/vision-mission';
import WhatIsBonsaiSection from '@/components/sections/what-is-bonsai';
import ArtworkSection from '@/components/sections/artwork';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ShowcaseSection />
        <VisionMissionSection />
        <WhatIsBonsaiSection />
        <ArtworkSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
