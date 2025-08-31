
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { getBlogPost } from '@/lib/blog';
import type { BlogPost as BlogPostType } from '@/lib/blog-data';

export default function BlogPost({ id }: { id: string }) {
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const fetchedPost = await getBlogPost(id);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setError('Blog post not found.');
        }
      } catch (err) {
        console.error("Failed to fetch post", err);
        setError('Failed to load the blog post.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="py-20 lg:py-24 text-center">Loading post...</div>;
  }

  if (error) {
    return <div className="py-20 lg:py-24 text-center text-destructive">{error}</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <article className="py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-headline text-primary text-center">{post.title}</h1>
            <div className="mt-4 flex items-center justify-center text-muted-foreground">
              <Calendar className="h-5 w-5 mr-2" />
              <time dateTime={post.publishedAt}>
                {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </time>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.aiHint}
            />
          </div>

          <div className="prose prose-lg max-w-none mx-auto text-foreground prose-p:leading-relaxed prose-headings:text-primary prose-a:text-primary hover:prose-a:underline">
             {post.content.split('\\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
