import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProductsSection from '@/components/sections/products-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products',
    description: 'Shop for bonsai trees, tools, pots, and supplies. Find everything you need to cultivate your passion for the art of bonsai.',
    openGraph: {
        title: 'Products for Sale | Ceylon Bonsai Museum',
        description: 'Shop for bonsai trees, tools, pots, and supplies.',
    },
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
}
