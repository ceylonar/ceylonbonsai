import Image from 'next/image';

const bonsaiCollection = [
  {
    title: 'Legacy in Miniature',
    description: 'Explore ancient trees that tell stories of generations, each a living testament to history.',
    image: 'https://images.unsplash.com/photo-1641412722397-3be359096577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxib25zYWklMjB0cmVlfGVufDB8fHx8MTc1NjY3MzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 1080,
    height: 720,
    aiHint: 'old bonsai'
  },
  {
    title: 'Techniques and Tributes',
    description: 'Witness the meticulous care and artistry in every branch, a tribute to traditional methods.',
    image: 'https://images.unsplash.com/photo-1690775937793-79a0f80fbbd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8c3JpJTIwbGFua2FuJTIwYm9uc2FpfGVufDB8fHx8MTc1NjY3MzYzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 600,
    aiHint: 'bonsai pruning'
  },
  {
    title: 'Nature\'s Sculpture',
    description: 'Discover the dynamic forms and natural beauty sculpted by artists and time itself.',
    image: 'https://images.unsplash.com/photo-1729111146534-b21ffd532682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8Ym9uc2FpJTIwdHJlZSUyMGltYWdlfGVufDB8fHx8MTc1NjY3MzcxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 800,
    height: 600,
    aiHint: 'sculpted bonsai'
  },
];

export default function ShowcaseSection() {
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
            <div key={bonsai.title} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
