import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import MuseumGallery from '@/components/sections/museum-gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Museum Collection',
    description: 'Explore our curated collection of bonsai masterpieces at the Ceylon Bonsai Museum. Each tree is a living work of art with a unique story.',
    openGraph: {
        title: 'Museum Collection | Ceylon Bonsai Museum',
        description: 'Explore our curated collection of bonsai masterpieces.',
    },
};

export default function MuseumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <MuseumGallery />
      </main>
      <Footer />
    </div>
  );
}
