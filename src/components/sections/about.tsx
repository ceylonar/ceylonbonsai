import { Sprout } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Sprout className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 text-4xl md:text-5xl font-headline text-primary">
            About Our Museum
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our mission is to preserve and promote the timeless art of bonsai, 
            celebrating the rich cultural heritage of Ceylon and fostering a 
            community of enthusiasts dedicated to the harmony between nature 
            and human creativity. We are a sanctuary for these living sculptures, 
            a place for learning, reflection, and inspiration.
          </p>
        </div>
      </div>
    </section>
  );
}
