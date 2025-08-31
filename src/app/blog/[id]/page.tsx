import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BlogPost from '@/components/sections/blog-post';
import type { Metadata } from 'next';

type BlogPostPageProps = {
    params: { id: string };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const excerpt = post.content.substring(0, 155) + '...';

  return {
    title: post.title,
    description: excerpt,
    openGraph: {
      title: post.title,
      description: excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image,
          width: post.width,
          height: post.height,
          alt: post.title,
        },
      ],
    },
     twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: excerpt,
      images: [post.image],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

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
