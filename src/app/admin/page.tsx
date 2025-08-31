
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MuseumAdmin from '@/components/admin/museum-admin';
import ProductsAdmin from '@/components/admin/products-admin';

export default function AdminPage() {
  const handleSaveChanges = () => {
    // In a real application, you would gather data from child components
    // and send it to your backend/API.
    // For now, this is a placeholder.
    console.log('Saving changes action triggered.');
    alert('Changes saved to console! In a real app, this would save to a database.');
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-headline text-primary">Admin Dashboard</h1>
        {/* Note: In a real app, you'd likely lift state up or use a state manager
            to collect changes before saving. This button is a placeholder. */}
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
              <MuseumAdmin />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Manage Products</CardTitle>
            </CardHeader>
            <CardContent>
              <ProductsAdmin />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
