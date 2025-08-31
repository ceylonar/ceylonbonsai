import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function MuseumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-headline text-primary">Museum</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to our museum. Explore the rich history and artistry of bonsai.
        </p>
      </main>
      <Footer />
    </div>
  );
}
