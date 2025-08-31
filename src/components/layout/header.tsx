'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 backdrop-blur-sm shadow-sm transition-all duration-300 ${
        scrolled ? 'bg-background/80' : 'bg-background/95'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="text-2xl font-bold font-headline text-primary whitespace-nowrap">
            Ceylon Bonsai Museum
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/museum" className="text-foreground hover:text-primary transition-colors duration-300">
              Museum
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors duration-300">
              Products
            </Link>
            <Link href="/qa-agent" className="text-foreground hover:text-primary transition-colors duration-300">
              Q&A Agent
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-300">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
