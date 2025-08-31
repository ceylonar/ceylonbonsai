'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; {year || new Date().getFullYear()} Ceylon Bonsai Museum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
