// @ts-nocheck
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const bonsaiGallery = [
  {
    title: 'Ancient Juniper',
    description: 'A symbol of resilience, this Juniper has been trained for over 150 years, showcasing the art of deadwood (jin and shari).',
    image: 'https://images.unsplash.com/photo-1615794799010-49687e006646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxib25zYWklMjBqdW5pcGVyfGVufDB8fHx8MTc1NjY3NTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 1200,
    aiHint: 'bonsai juniper'
  },
  {
    title: 'Flowering Azalea',
    description: 'A vibrant Satsuki Azalea in full bloom. It is celebrated for its brilliant pink flowers that cover the entire canopy in late spring.',
    image: 'https://images.unsplash.com/photo-1752562466420-0f931fb618b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjBhemFsZWF8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 800,
    aiHint: 'bonsai azalea'
  },
  {
    title: 'Japanese Maple',
    description: 'The elegant and iconic Japanese Maple, with its delicate, star-shaped leaves that turn a fiery red in the autumn.',
    image: 'https://images.unsplash.com/photo-1671366442931-0066431bd8b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Ym9uc2FpJTIwbWFwbGV8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 1000,
    aiHint: 'bonsai maple'
  },
  {
    title: 'Windswept Pine',
    description: 'This Black Pine is styled in the Fukinagashi (windswept) style, evoking a tree clinging to a windswept coastline.',
    image: 'https://images.unsplash.com/photo-1755372873864-59c747015e5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxib25zYWklMjBwaW5lfGVufDB8fHx8MTc1NjY3NTQyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 900,
    aiHint: 'bonsai pine'
  },
  {
    title: 'Miniature Jade',
    description: 'A charming Dwarf Jade styled as a Mame (miniature) bonsai, perfect for indoor display and easy to care for.',
    image: 'https://images.unsplash.com/photo-1695287743636-d2bd8f1d4784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Ym9uc2FpJTIwamFkZXxlbnwwfHx8fDE3NTY2NzU0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 1200,
    aiHint: 'bonsai jade'
  },
  {
    title: 'Forest Planting',
    description: 'A Yose-ue (forest planting) of several Trident Maples, creating a miniature woodland landscape in a single pot.',
    image: 'https://images.unsplash.com/photo-1645391989895-e600dab3f447?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjBmb3Jlc3R8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1200,
    height: 800,
    aiHint: 'bonsai forest'
  },
  {
    title: 'Gnarled Olive',
    description: 'An ancient olive tree with gnarled, character-rich bark, telling a story of age and survival.',
    image: 'https://images.unsplash.com/photo-1630246571862-4177df5be78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjBvbGl2ZSUyMHRyZWV8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 900,
    height: 1200,
    aiHint: 'bonsai olive tree'
  },
  {
    title: 'Weeping Willow',
    description: 'A graceful weeping willow bonsai, its delicate branches cascading downwards, creating a sense of tranquility.',
    image: 'https://images.unsplash.com/photo-1723209249565-dfa2ec592924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjB3aWxsb3d8ZW58MHx8fHwxNzU2Njc1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 1000,
    aiHint: 'bonsai willow'
  },
];


export default function MuseumGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline text-primary">Museum Collection</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our curated collection of bonsai masterpieces, each a living work of art.
            </p>
          </div>
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {bonsaiGallery.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden break-inside-avoid cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className="object-cover w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-headline text-xl text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/80 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && closeLightbox()}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 border-0 bg-transparent flex items-center justify-center">
          {selectedImage && (
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={selectedImage.width}
                height={selectedImage.height}
                className="object-contain w-full h-full max-h-[90vh]"
                data-ai-hint={selectedImage.aiHint}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                <h3 className="font-headline text-2xl">{selectedImage.title}</h3>
                <p className="mt-2 text-base text-white/90">{selectedImage.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
