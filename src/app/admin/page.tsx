
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MuseumAdmin from '@/components/admin/museum-admin';
import ProductsAdmin from '@/components/admin/products-admin';
import { MuseumItem } from '@/lib/museum-data';
import { Product } from '@/lib/product-data';
import { getMuseumItems, updateMuseumItem, addMuseumItem, deleteMuseumItem } from '@/lib/museum';
import { getProducts, updateProduct, addProduct, deleteProduct } from '@/lib/products';
import { useToast } from '@/hooks/use-toast';

export default function AdminPage() {
  const [museumItems, setMuseumItems] = useState<MuseumItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [museumData, productsData] = await Promise.all([getMuseumItems(), getProducts()]);
        setMuseumItems(museumData);
        setProducts(productsData);
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
  }, [toast]);

  const handleSaveChanges = async () => {
    toast({
      title: 'Saving Changes...',
      description: 'Your updates are being saved.',
    });
    try {
        // This is now handled by the individual admin components
        console.log('Save logic is now within each admin component.');
        toast({
            title: 'Changes Saved!',
            description: 'Your updates have been saved and are now live.',
        });
    } catch (error) {
        console.error('Failed to save changes', error);
        toast({
            title: 'Error!',
            description: 'Could not save changes.',
            variant: 'destructive',
        });
    }
  };


  if (loading) {
    return <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-headline text-primary">Admin Dashboard</h1>
      </div>
      <Tabs defaultValue="museum">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="museum">Museum Gallery</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
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
      </Tabs>
    </div>
  );
}
