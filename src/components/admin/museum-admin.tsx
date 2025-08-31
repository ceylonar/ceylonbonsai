
'use client';

import { useState } from 'react';
import { initialBonsaiGallery, MuseumItem } from '@/lib/museum-data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Trash2, Pencil, PlusCircle } from 'lucide-react';

const emptyItem: MuseumItem = {
  id: '',
  title: '',
  description: '',
  image: 'https://picsum.photos/800/1200',
  width: 800,
  height: 1200,
  aiHint: '',
};

export default function MuseumAdmin() {
  const [items, setItems] = useState<MuseumItem[]>(initialBonsaiGallery);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<MuseumItem | null>(null);

  const handleEdit = (item: MuseumItem) => {
    setCurrentItem(item);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setCurrentItem({ ...emptyItem, id: `new-${Date.now()}` });
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (currentItem) {
      const { name, value } = e.target;
      setCurrentItem({ ...currentItem, [name]: name === 'width' || name === 'height' ? parseInt(value) : value });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentItem) return;

    const existingIndex = items.findIndex((item) => item.id === currentItem.id);
    if (existingIndex > -1) {
      const updatedItems = [...items];
      updatedItems[existingIndex] = currentItem;
      setItems(updatedItems);
    } else {
      setItems([...items, currentItem]);
    }
    setIsFormOpen(false);
    setCurrentItem(null);
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
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Image src={item.image} alt={item.title} width={64} height={64} className="rounded-md object-cover" />
                </TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell className="max-w-xs truncate">{item.description}</TableCell>
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
            <DialogTitle>{currentItem && items.find(i => i.id === currentItem.id) ? 'Edit' : 'Add'} Museum Item</DialogTitle>
          </DialogHeader>
          {currentItem && (
            <form onSubmit={handleFormSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="text-right">Title</label>
                <Input id="title" name="title" value={currentItem.title} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="description" className="text-right">Description</label>
                <Textarea id="description" name="description" value={currentItem.description} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="image" className="text-right">Image URL</label>
                <Input id="image" name="image" value={currentItem.image} onChange={handleFormChange} className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="width" className="text-right">Width</label>
                <Input id="width" name="width" type="number" value={currentItem.width} onChange={handleFormChange} className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="height" className="text-right">Height</label>
                <Input id="height" name="height" type="number" value={currentItem.height} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="aiHint" className="text-right">AI Hint</label>
                <Input id="aiHint" name="aiHint" value={currentItem.aiHint} onChange={handleFormChange} className="col-span-3" />
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
