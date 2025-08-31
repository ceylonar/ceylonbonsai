import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BlogSection from '@/components/sections/blog-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Explore insights, stories, and tips from the world of bonsai. Our blog covers everything from beginner guides to advanced techniques.',
    openGraph: {
        title: 'Bonsai Blog | Ceylon Bonsai Museum',
        description: 'Explore insights, stories, and tips from the world of bonsai.',
    },
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
