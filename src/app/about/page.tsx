import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutSection from '@/components/sections/about';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
