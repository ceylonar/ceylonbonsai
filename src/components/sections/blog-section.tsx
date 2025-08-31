
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getBlogPosts } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog-data';
import { Calendar } from 'lucide-react';

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const postList = await getBlogPosts();
        setPosts(postList);
      } catch (error) {
        console.error("Failed to fetch blog posts", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="py-20 lg:py-24 text-center">Loading blog posts...</div>;
  }

  return (
    <div className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline text-primary">Our Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, stories, and tips from the world of bonsai.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="group overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={post.aiHint}
                    />
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="text-xl font-headline text-primary mb-2">
                   <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time dateTime={post.publishedAt}>
                    {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                  </time>
                </div>
                <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
                  {post.content}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                 <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={`/blog/${post.id}`}>Read More &rarr;</Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
