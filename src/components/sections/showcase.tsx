import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const bonsaiCollection = [
  {
    title: 'Legacy in Miniature',
    description: 'Explore ancient trees that tell stories of generations, each a living testament to history.',
    image: 'https://picsum.photos/400/300',
    aiHint: 'old bonsai'
  },
  {
    title: 'Techniques and Tributes',
    description: 'Witness the meticulous care and artistry in every branch, a tribute to traditional methods.',
    image: 'https://picsum.photos/400/301',
    aiHint: 'bonsai pruning'
  },
  {
    title: 'Nature\'s Sculpture',
    description: 'Discover the dynamic forms and natural beauty sculpted by artists and time itself.',
    image: 'https://picsum.photos/400/302',
    aiHint: 'sculpted bonsai'
  },
];

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline" style={{color: 'hsl(var(--primary))'}}>Our Bonsai Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A curated collection celebrating the delicate balance between nature and nurture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonsaiCollection.map((bonsai) => (
            <Card key={bonsai.title} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border-border/50 group">
              <CardHeader className="p-0 overflow-hidden">
                <Image
                  src={bonsai.image}
                  alt={bonsai.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={bonsai.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                 <CardTitle className="font-headline text-2xl" style={{color: 'hsl(var(--primary))'}}>{bonsai.title}</CardTitle>
                 <CardDescription className="mt-2 text-base text-muted-foreground">{bonsai.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
