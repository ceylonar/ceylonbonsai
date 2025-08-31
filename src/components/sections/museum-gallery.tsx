
// @ts-nocheck
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { bonsaiGallery } from '@/lib/museum-data';


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
