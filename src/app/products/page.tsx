import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-headline text-primary">Products</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover our collection of bonsai trees, tools, and accessories.
        </p>
      </main>
      <Footer />
    </div>
  );
}
