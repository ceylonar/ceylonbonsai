import { BookOpen } from 'lucide-react';

export default function WhatIsBonsaiSection() {
  return (
    <section id="what-is-bonsai" className="py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <BookOpen className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 text-4xl md:text-5xl font-headline text-primary">
            What is Bonsai?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Bonsai is the Japanese art of growing ornamental, artificially dwarfed trees or shrubs in pots. It is a practice of patience and dedication, where the grower cultivates a miniature but realistic representation of nature in a pot. The ultimate goal of growing a bonsai is to create a miniaturized but realistic representation of nature in the form of a tree.
          </p>
        </div>
      </div>
    </section>
  );
}
