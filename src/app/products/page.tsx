import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProductsSection from '@/components/sections/products-section';

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
