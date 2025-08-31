
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
    // We are updating the data in the data files for this prototype.
    // Note: This approach with fs.writeFileSync will only work in a Node.js environment (like Next.js build/dev server)
    // and is not suitable for a production client-side application. It's for demonstration.
    console.log('Saving museum items:', museumItems);
    console.log('Saving products:', products);

    // The following would be an API call in a real app.
    // For this prototype, we just show a success message.
    toast({
      title: 'Changes Saved!',
      description: 'Your updates to the museum and products have been saved.',
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
