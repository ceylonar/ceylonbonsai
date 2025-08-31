import Image from 'next/image';
import { Paintbrush } from 'lucide-react';

const artworkCollection = [
  {
    title: 'Serenity in Ink',
    description: 'A traditional ink wash painting capturing the spirit of a windswept bonsai.',
    image: 'https://images.unsplash.com/photo-1676182123614-3e1f67fd38f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxib25zYWklMjBwYWludGluZ3xlbnwwfHx8fDE3NTY2NzMyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 1080,
    aiHint: 'bonsai painting'
  },
  {
    title: 'Digital Zen',
    description: 'Modern digital art interpreting the bonsai form with vibrant colors and abstract shapes.',
    image: 'https://images.unsplash.com/photo-1611387729672-25583e070328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJvbnNhaSUyMGFydHxlbnwwfHx8fDE3NTY2NzMyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 1080,
    aiHint: 'abstract bonsai art'
  },
  {
    title: 'Sculpted from Light',
    description: 'A photographic artwork playing with light and shadow to highlight the bonsai\'s form.',
    image: 'https://images.unsplash.com/photo-1632161286719-5afe9b5d954b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxib25zYWklMjB0cmVlfGVufDB8fHx8MTc1NjY3MzQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 1350,
    aiHint: 'bonsai tree'
  },
  {
    title: 'Ethereal Weave',
    description: 'A delicate digital weaving of light and color, capturing the essence of a bonsai\'s spirit.',
    image: 'https://images.unsplash.com/photo-1683491175728-5921087a95ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkaWdpdGFsJTIwYm9uc2FpJTIwYXJ0fGVufDB8fHx8MTc1NjY3MzI0OHww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 1080,
    aiHint: 'digital bonsai art'
  }
];

export default function ArtworkSection() {
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
        <div className="columns-1 sm:columns-2 md:columns-3 lg:grid-cols-4 gap-4 space-y-4">
          {artworkCollection.map((artwork) => (
            <div key={artwork.title} className="group relative overflow-hidden break-inside-avoid">
              <Image
                src={artwork.image}
                alt={artwork.title}
                width={artwork.width}
                height={artwork.height}
                className="object-cover w-full h-auto"
                data-ai-hint={artwork.aiHint}
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-headline text-2xl text-white">{artwork.title}</h3>
                <p className="mt-2 text-white/90">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
