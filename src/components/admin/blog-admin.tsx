
'use client';

import { useState } from 'react';
import type { BlogPost } from '@/lib/blog-data';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import { Trash2, Pencil, PlusCircle } from 'lucide-react';
import { addBlogPost, updateBlogPost, deleteBlogPost } from '@/lib/blog';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const emptyPost: Omit<BlogPost, 'id'> = {
  title: '',
  content: '',
  image: 'https://picsum.photos/1200/800',
  width: 1200,
  height: 800,
  aiHint: '',
  publishedAt: new Date().toISOString(),
};

interface BlogAdminProps {
  posts: BlogPost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
}

export default function BlogAdmin({ posts, setPosts }: BlogAdminProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<Partial<BlogPost> | null>(null);
  const { toast } = useToast();

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setCurrentPost({ ...emptyPost });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await deleteBlogPost(id);
        setPosts(posts.filter((post) => post.id !== id));
        toast({ title: 'Post Deleted', description: 'The blog post has been removed.' });
      } catch (error) {
        console.error("Failed to delete post", error);
        toast({ title: 'Error', description: 'Could not delete post.', variant: 'destructive' });
      }
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (currentPost) {
      const { name, value } = e.target;
      setCurrentPost({ ...currentPost, [name]: name === 'width' || name === 'height' ? parseInt(value) : value });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPost) return;

    // Ensure publishedAt is an ISO string before saving
    const postToSave = {
        ...currentPost,
        publishedAt: currentPost.publishedAt ? new Date(currentPost.publishedAt).toISOString() : new Date().toISOString()
    };

    try {
      if (postToSave.id) {
        const { id, ...dataToUpdate } = postToSave;
        await updateBlogPost(id, dataToUpdate as BlogPost);
        setPosts(posts.map(p => p.id === id ? { ...p, ...dataToUpdate, id } as BlogPost : p));
        toast({ title: 'Post Updated', description: 'The blog post has been saved.' });
      } else {
        const newPost = await addBlogPost(postToSave as Omit<BlogPost, 'id'>);
        setPosts([newPost, ...posts]);
        toast({ title: 'Post Added', description: 'The new blog post is now live.' });
      }
      setIsFormOpen(false);
      setCurrentPost(null);
    } catch (error) {
       console.error("Failed to save post", error);
       toast({ title: 'Error', description: 'Could not save post.', variant: 'destructive' });
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddNew}><PlusCircle className="mr-2" />Add New Post</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <Image src={post.image} alt={post.title} width={64} height={64} className="rounded-md object-cover" />
                </TableCell>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{currentPost && currentPost.id ? 'Edit' : 'Add'} Blog Post</DialogTitle>
          </DialogHeader>
          {currentPost && (
            <form onSubmit={handleFormSubmit} className="grid gap-4 py-4 max-h-[80vh] overflow-y-auto pr-6">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="text-right">Title</label>
                <Input id="title" name="title" value={currentPost.title || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <label htmlFor="content" className="text-right mt-2">Content</label>
                <Textarea id="content" name="content" value={currentPost.content || ''} onChange={handleFormChange} className="col-span-3" rows={15} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="publishedAt" className="text-right">Date</label>
                <Input id="publishedAt" name="publishedAt" type="date" value={currentPost.publishedAt ? format(new Date(currentPost.publishedAt), 'yyyy-MM-dd') : ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="image" className="text-right">Image URL</label>
                <Input id="image" name="image" value={currentPost.image || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="width" className="text-right">Width</label>
                <Input id="width" name="width" type="number" value={currentPost.width || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
               <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="height" className="text-right">Height</label>
                <Input id="height" name="height" type="number" value={currentPost.height || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="aiHint" className="text-right">AI Hint</label>
                <Input id="aiHint" name="aiHint" value={currentPost.aiHint || ''} onChange={handleFormChange} className="col-span-3" />
              </div>
              <div className="flex justify-end col-span-4 mt-4">
                 <Button type="submit">Save Post</Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
