'use client';

import { useMounted } from '@/hooks/use-mounted';

export default function Footer() {
  const mounted = useMounted();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-muted-foreground text-sm h-5">
          {mounted && (
             <p>&copy; {year} Ceylon Bonsai Museum. All rights reserved.</p>
          )}
        </div>
      </div>
    </footer>
  );
}
