import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function QAAgentSection() {
  return (
    <section id="qa-agent-intro" className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Bot className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 text-4xl md:text-5xl font-headline text-primary">
            Bonsai Q&A Agent
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Have a question about your bonsai? Struggling with a specific problem? Our AI-powered Q&A Agent is here to help. Get instant answers to your questions about bonsai care, history, styling, and troubleshooting any issues you might have.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/qa-agent">
                Ask the Agent
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
