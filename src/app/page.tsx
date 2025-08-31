import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ShowcaseSection from '@/components/sections/showcase';
import AboutSection from '@/components/sections/about';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ShowcaseSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
