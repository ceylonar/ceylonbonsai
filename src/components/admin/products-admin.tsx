
'use client';

import { useState } from 'react';
import type { Product } from '@/lib/product-data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Trash2, Pencil, PlusCircle } from 'lucide-react';
import { addProduct, updateProduct, deleteProduct } from '@/lib/products';
import { useToast } from '@/hooks/use-toast';

const emptyProduct: Omit<Product, 'id'> = {
  name: '',
  category: '',
  price: '',
  description: '',
  image: 'https://picsum.photos/600/600',
  width: 600,
  height: 600,
  aiHint: '',
};

interface ProductsAdminProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export default function ProductsAdmin({ products, setProducts }: ProductsAdminProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product> | null>(null);
  const { toast } = useToast();

  const handleEdit = (product: Product) => {
    setCurrentProduct(product);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setCurrentProduct({ ...emptyProduct });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        setProducts(products.filter((product) => product.id !== id));
        toast({ title: 'Product Deleted', description: 'The product has been removed from the store.' });
      } catch (error) {
        console.error("Failed to delete product", error);
        toast({ title: 'Error', description: 'Could not delete product.', variant: 'destructive' });
      }
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (currentProduct) {
      const { name, value } = e.target;
      setCurrentProduct({ ...currentProduct, [name]: name === 'width' || name === 'height' ? parseInt(value) : value });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProduct) return;

    try {
      if (currentProduct.id) {
        const { id, ...dataToUpdate } = currentProduct;
        await updateProduct(id, dataToUpdate as Omit<Product, 'id'>);
        setProducts(products.map(p => p.id === id ? { ...p, ...dataToUpdate, id } as Product : p));
        toast({ title: 'Product Updated', description: 'The product has been saved.' });
      } else {
        const newProduct = await addProduct(currentProduct as Omit<Product, 'id'>);
        setProducts([...products, newProduct]);
        toast({ title: 'Product Added', description: 'The new product is now available in the store.' });
      }
      setIsFormOpen(false);
      setCurrentProduct(null);
    } catch (error) {
      console.error("Failed to save product", error);
      toast({ title: 'Error', description: 'Could not save product.', variant: 'destructive' });
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddNew}><PlusCircle className="mr-2"/>Add New Product</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Image src={product.image} alt={product.name} width={64} height={64} className="rounded-md object-cover" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{currentProduct && currentProduct.id ? 'Edit' : 'Add'} Product</DialogTitle>
          </DialogHeader>
          {currentProduct && (
            <form onSubmit={handleFormSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">Name</label>
                <Input id="name" name="name" value={currentProduct.name || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="category" className="text-right">Category</label>
                <Input id="category" name="category" value={currentProduct.category || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="price" className="text-right">Price</label>
                <Input id="price" name="price" value={currentProduct.price || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="description" className="text-right">Description</label>
                <Textarea id="description" name="description" value={currentProduct.description || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="image" className="text-right">Image URL</label>
                <Input id="image" name="image" value={currentProduct.image || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="width" className="text-right">Width</label>
                <Input id="width" name="width" type="number" value={currentProduct.width || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="height" className="text-right">Height</label>
                <Input id="height" name="height" type="number" value={currentProduct.height || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="aiHint" className="text-right">AI Hint</label>
                <Input id="aiHint" name="aiHint" value={currentProduct.aiHint || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="flex justify-end col-span-4">
                 <Button type="submit">Save</Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
