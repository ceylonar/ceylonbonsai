
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { initialBonsaiGallery, MuseumItem } from '@/lib/museum-data';
import { initialProducts, Product } from '@/lib/product-data';
import MuseumAdmin from '@/components/admin/museum-admin';
import ProductsAdmin from '@/components/admin/products-admin';

export default function AdminPage() {
  const [museumItems, setMuseumItems] = useState<MuseumItem[]>(initialBonsaiGallery);
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleSaveChanges = () => {
    // In a real application, you would send this data to your backend/API
    console.log('Saving changes:', { museumItems, products });
    alert('Changes saved to console! In a real app, this would save to a database.');
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-headline text-primary">Admin Dashboard</h1>
        <Button onClick={handleSaveChanges}>Save All Changes</Button>
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
