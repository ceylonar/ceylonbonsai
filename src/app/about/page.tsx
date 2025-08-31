import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutSection from '@/components/sections/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about the mission, vision, and passion behind the Ceylon Bonsai Museum. Discover our dedication to the art of bonsai and our community.',
    openGraph: {
        title: 'About Us | Ceylon Bonsai Museum',
        description: 'Learn about the mission, vision, and passion behind the Ceylon Bonsai Museum.',
    },
};

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
