
'use client';

import { useState } from 'react';
import type { MuseumItem } from '@/lib/museum-data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Trash2, Pencil, PlusCircle } from 'lucide-react';
import { addMuseumItem, updateMuseumItem, deleteMuseumItem } from '@/lib/museum';
import { useToast } from '@/hooks/use-toast';

const emptyItem: Omit<MuseumItem, 'id'> = {
  title: '',
  description: '',
  image: 'https://picsum.photos/800/1200',
  width: 800,
  height: 1200,
  aiHint: '',
};

interface MuseumAdminProps {
  items: MuseumItem[];
  setItems: React.Dispatch<React.SetStateAction<MuseumItem[]>>;
}

export default function MuseumAdmin({ items, setItems }: MuseumAdminProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<MuseumItem> | null>(null);
  const { toast } = useToast();

  const handleEdit = (item: MuseumItem) => {
    setCurrentItem(item);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setCurrentItem({ ...emptyItem });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteMuseumItem(id);
        setItems(items.filter((item) => item.id !== id));
        toast({ title: 'Item Deleted', description: 'The museum item has been removed.' });
      } catch (error) {
        console.error("Failed to delete item", error);
        toast({ title: 'Error', description: 'Could not delete item.', variant: 'destructive' });
      }
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (currentItem) {
      const { name, value } = e.target;
      setCurrentItem({ ...currentItem, [name]: name === 'width' || name === 'height' ? parseInt(value) : value });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentItem) return;

    try {
      if (currentItem.id) {
        // Update existing item
        const { id, ...dataToUpdate } = currentItem;
        await updateMuseumItem(id, dataToUpdate as Omit<MuseumItem, 'id'>);
        setItems(items.map(item => item.id === id ? { ...item, ...dataToUpdate, id } as MuseumItem : item));
        toast({ title: 'Item Updated', description: 'The museum item has been saved.' });
      } else {
        // Add new item
        const newItem = await addMuseumItem(currentItem as Omit<MuseumItem, 'id'>);
        setItems([...items, newItem]);
        toast({ title: 'Item Added', description: 'The new museum item is now in the gallery.' });
      }
      setIsFormOpen(false);
      setCurrentItem(null);
    } catch (error) {
       console.error("Failed to save item", error);
       toast({ title: 'Error', description: 'Could not save item.', variant: 'destructive' });
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddNew}><PlusCircle className="mr-2" />Add New Item</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Image src={item.image} alt={item.title} width={64} height={64} className="rounded-md object-cover" />
                </TableCell>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell className="hidden md:table-cell max-w-xs truncate">{item.description}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(item)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{currentItem && currentItem.id ? 'Edit' : 'Add'} Museum Item</DialogTitle>
          </DialogHeader>
          {currentItem && (
            <form onSubmit={handleFormSubmit} className="grid gap-4 py-4 max-h-[80vh] overflow-y-auto pr-6">
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="md:text-right">Title</label>
                <Input id="title" name="title" value={currentItem.title || ''} onChange={handleFormChange} className="md:col-span-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-start md:items-center gap-4">
                <label htmlFor="description" className="md:text-right">Description</label>
                <Textarea id="description" name="description" value={currentItem.description || ''} onChange={handleFormChange} className="md:col-span-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <label htmlFor="image" className="md:text-right">Image URL</label>
                <Input id="image" name="image" value={currentItem.image || ''} onChange={handleFormChange} className="md:col-span-3" />
              </div>
               <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <label htmlFor="width" className="md:text-right">Width</label>
                <Input id="width" name="width" type="number" value={currentItem.width || ''} onChange={handleFormChange} className="md:col-span-3" />
              </div>
               <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <label htmlFor="height" className="md:text-right">Height</label>
                <Input id="height" name="height" type="number" value={currentItem.height || ''} onChange={handleFormChange} className="md:col-span-3" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <label htmlFor="aiHint" className="md:text-right">AI Hint</label>
                <Input id="aiHint" name="aiHint" value={currentItem.aiHint || ''} onChange={handleFormChange} className="md:col-span-3" />
              </div>
              <div className="flex justify-end col-span-1 md:col-span-4">
                 <Button type="submit">Save</Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
