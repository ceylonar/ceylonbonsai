
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BlogPost from '@/components/sections/blog-post';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <BlogPost id={params.id} />
      </main>
      <Footer />
    </div>
  );
}
