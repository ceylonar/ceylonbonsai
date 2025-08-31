import Image from 'next/image';
import { Paintbrush } from 'lucide-react';

const artworkCollection = [
  {
    title: 'Serenity in Ink',
    description: 'A traditional ink wash painting capturing the spirit of a windswept bonsai.',
    image: 'https://cdn.shopify.com/s/files/1/0356/0076/0877/files/AdobeStock_179294033_1024x1024.jpg?v=1717144004',
    width: 1024,
    height: 1024,
    aiHint: 'bonsai painting'
  },
  {
    title: 'Digital Zen',
    description: 'Modern digital art interpreting the bonsai form with vibrant colors and abstract shapes.',
    image: 'https://cdn.shopify.com/s/files/1/0356/0076/0877/files/AdobeStock_179294033_1024x1024.jpg?v=1717144004',
    width: 1024,
    height: 1024,
    aiHint: 'abstract bonsai art'
  },
  {
    title: 'Sculpted from Light',
    description: 'A photographic artwork playing with light and shadow to highlight the bonsai\'s form.',
    image: 'https://cdn.shopify.com/s/files/1/0356/0076/0877/files/AdobeStock_179294033_1024x1024.jpg?v=1717144004',
    width: 1024,
    height: 1024,
    aiHint: 'bonsai photography'
  },
  {
    title: 'Ethereal Weave',
    description: 'A delicate digital weaving of light and color, capturing the essence of a bonsai\'s spirit.',
    image: 'https://cdn.shopify.com/s/files/1/0356/0076/0877/files/AdobeStock_179294033_1024x1024.jpg?v=1717144004',
    width: 1024,
    height: 1024,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artworkCollection.map((artwork) => (
            <div key={artwork.title} className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                src={artwork.image}
                alt={artwork.title}
                width={artwork.width}
                height={artwork.height}
                className="object-cover w-full h-full"
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
