import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import MuseumGallery from '@/components/sections/museum-gallery';

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
