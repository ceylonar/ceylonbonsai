import Image from 'next/image';

const bonsaiCollection = [
  {
    title: 'Legacy in Miniature',
    description: 'Explore ancient trees that tell stories of generations, each a living testament to history.',
    image: 'https://picsum.photos/600/400',
    width: 600,
    height: 400,
    aiHint: 'old bonsai'
  },
  {
    title: 'Techniques and Tributes',
    description: 'Witness the meticulous care and artistry in every branch, a tribute to traditional methods.',
    image: 'https://picsum.photos/600/400',
    width: 600,
    height: 400,
    aiHint: 'bonsai pruning'
  },
  {
    title: 'Nature\'s Sculpture',
    description: 'Discover the dynamic forms and natural beauty sculpted by artists and time itself.',
    image: 'https://picsum.photos/600/400',
    width: 600,
    height: 400,
    aiHint: 'sculpted bonsai'
  },
];

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">Our Bonsai Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A curated collection celebrating the delicate balance between nature and nurture.
          </p>
        </div>
        <div className="space-y-24">
          {bonsaiCollection.map((bonsai, index) => (
            <div key={bonsai.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={`relative w-full shadow-lg ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={bonsai.image}
                  alt={bonsai.title}
                  width={bonsai.width}
                  height={bonsai.height}
                  className="object-cover w-full h-auto"
                  data-ai-hint={bonsai.aiHint}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                 <h3 className="font-headline text-3xl md:text-4xl text-primary">{bonsai.title}</h3>
                 <p className="mt-4 text-lg text-muted-foreground">{bonsai.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
