import { Eye, Goal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">
            Our Vision & Mission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Guiding our journey in the art of bonsai.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-t-4 border-primary bg-card">
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-accent/20 rounded-full">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 font-headline text-3xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed px-4">
                To be a world-renowned center for bonsai art, inspiring a global community to appreciate the profound connection between nature, patience, and artistic expression, creating a legacy that transcends generations.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-t-4 border-primary bg-card">
            <CardHeader className="items-center text-center">
              <div className="p-4 bg-accent/20 rounded-full">
                <Goal className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4 font-headline text-3xl text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground leading-relaxed px-4">
                To curate and preserve a diverse collection of masterpiece bonsai, to educate enthusiasts of all levels through workshops and exhibitions, and to foster a serene environment for the contemplation and celebration of this living art form.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
