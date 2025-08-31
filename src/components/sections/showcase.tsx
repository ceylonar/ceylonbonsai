
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getShowcaseItems } from '@/lib/showcase';
import type { ShowcaseItem } from '@/lib/showcase-data';

export default function ShowcaseSection() {
  const [bonsaiCollection, setBonsaiCollection] = useState<ShowcaseItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const items = await getShowcaseItems();
        setBonsaiCollection(items);
      } catch (error) {
        console.error("Failed to fetch showcase items", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);
  
  if (loading) {
    return (
        <section id="showcase" className="py-24 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>Loading showcase...</p>
          </div>
        </section>
    );
  }

  return (
    <section id="showcase" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline text-primary tracking-tight">Our Bonsai Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A curated collection celebrating the delicate balance between nature and nurture.
          </p>
        </div>
        <div className="space-y-28">
          {bonsaiCollection.map((bonsai, index) => (
            <div key={bonsai.id} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className={`relative w-full h-full shadow-2xl rounded-lg overflow-hidden ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={bonsai.image}
                  alt={bonsai.title}
                  width={bonsai.width}
                  height={bonsai.height}
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                  data-ai-hint={bonsai.aiHint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                 <h3 className="font-headline text-3xl md:text-4xl text-primary">{bonsai.title}</h3>
                 <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{bonsai.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
