
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MuseumAdmin from '@/components/admin/museum-admin';
import ProductsAdmin from '@/components/admin/products-admin';
import BlogAdmin from '@/components/admin/blog-admin';
import { MuseumItem } from '@/lib/museum-data';
import { Product } from '@/lib/product-data';
import { BlogPost } from '@/lib/blog-data';
import { getMuseumItems } from '@/lib/museum';
import { getProducts } from '@/lib/products';
import { getBlogPosts } from '@/lib/blog';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { KeyRound } from 'lucide-react';
import { useMounted } from '@/hooks/use-mounted';

const ADMIN_PASSWORD = "PV00326465";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [museumItems, setMuseumItems] = useState<MuseumItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const mounted = useMounted();

  useEffect(() => {
    if (!isAuthenticated) return;
    async function loadData() {
      try {
        setLoading(true);
        const [museumData, productsData, blogData] = await Promise.all([
            getMuseumItems(), 
            getProducts(),
            getBlogPosts()
        ]);
        setMuseumItems(museumData);
        setProducts(productsData);
        setBlogPosts(blogData);
      } catch (error) {
        console.error("Failed to load data", error);
        toast({
          title: 'Error',
          description: 'Failed to load data from Firestore.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [isAuthenticated, toast]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };
  
  if (!mounted) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-secondary">
        <Card className="w-full max-w-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-primary text-center">
              <KeyRound className="mx-auto h-10 w-10 mb-4 text-primary" />
              Admin Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm text-destructive text-center">{error}</p>}
              <Button type="submit" className="w-full">
                Unlock
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">Loading Admin Dashboard...</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-headline text-primary">Admin Dashboard</h1>
      </div>
      <Tabs defaultValue="museum">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="museum">Museum Gallery</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
        </TabsList>
        <TabsContent value="museum">
          <Card>
            <CardHeader>
              <CardTitle>Manage Museum Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <MuseumAdmin items={museumItems} setItems={setMuseumItems} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Manage Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductsAdmin products={products} setProducts={setProducts} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="blog">
          <Card>
            <CardHeader>
              <CardTitle>Manage Blog Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <BlogAdmin posts={blogPosts} setPosts={setBlogPosts} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
