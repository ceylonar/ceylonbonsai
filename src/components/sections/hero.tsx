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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 p-4 max-w-4xl mx-auto flex flex-col items-center">
        <Image
          src="https://i.postimg.cc/6388jPpW/ed153779-6d-6d-4cde-9f44-20fda73f8319-removalai-preview.png"
          alt="Ceylon Bonsai Museum Logo"
          width={480}
          height={480}
          className="mb-6"
        />
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold drop-shadow-lg leading-tight">
          Ceylon Bonsai Museum
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
          Discover the Art of Patience and Legacy in Miniature
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="rounded-full">
            <Link href="#showcase">
              Explore the Collection
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
