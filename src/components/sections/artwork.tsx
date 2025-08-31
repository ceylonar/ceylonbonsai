
'use client';

import Image from 'next/image';
import { Paintbrush } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getArtworkItems } from '@/lib/artwork';
import type { ArtworkItem } from '@/lib/artwork-data';

export default function ArtworkSection() {
  const [artworkCollection, setArtworkCollection] = useState<ArtworkItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const items = await getArtworkItems();
        setArtworkCollection(items);
      } catch (error) {
        console.error("Failed to fetch artwork items", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return (
        <section id="artwork" className="py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>Loading artwork...</p>
          </div>
        </section>
    );
  }

  return (
    <section id="artwork" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Paintbrush className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 text-4xl md:text-5xl font-headline text-primary">The Art of Bonsai</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore artistic interpretations of bonsai, where nature meets creative expression.
          </p>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {artworkCollection.map((artwork) => (
            <div key={artwork.id} className="group relative overflow-hidden break-inside-avoid">
              <Image
                src={artwork.image}
                alt={artwork.title}
                width={artwork.width}
                height={artwork.height}
                className="object-cover w-full h-auto"
                data-ai-hint={artwork.aiHint}
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-headline text-xl md:text-2xl text-white">{artwork.title}</h3>
                <p className="mt-2 text-sm md:text-base text-white/90">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
