import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="A collection of beautiful bonsai trees"
        fill
        className="object-cover"
        priority
        data-ai-hint="bonsai trees"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold drop-shadow-lg">
          Ceylon Bonsai Museum
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
          Discover the Art of Patience and Legacy in Miniature
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <Link href="#showcase">
              Explore the Collection
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
