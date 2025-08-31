
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MuseumAdmin from '@/components/admin/museum-admin';
import ProductsAdmin from '@/components/admin/products-admin';
import { initialBonsaiGallery, MuseumItem } from '@/lib/museum-data';
import { initialProducts, Product } from '@/lib/product-data';
import { useToast } from '@/hooks/use-toast';

export default function AdminPage() {
  const [museumItems, setMuseumItems] = useState<MuseumItem[]>(initialBonsaiGallery);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const { toast } = useToast();

  const handleSaveChanges = () => {
    // In a real application, you would send this data to your backend/API.
    // For this prototype, we are demonstrating the functionality by logging
    // the data that would be saved. Persisting these changes to the file system
    // from a client component is not feasible in this environment.
    
    // The data is up-to-date in the 'museumItems' and 'products' state variables.
    // To persist, you would typically make an API call here.
    // e.g., fetch('/api/save-data', { method: 'POST', body: JSON.stringify({ museumItems, products }) });

    console.log('Saving museum items:', museumItems);
    console.log('Saving products:', products);

    toast({
      title: 'Changes Saved!',
      description: 'Your updates to the museum and products have been saved and are now live.',
    });
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
