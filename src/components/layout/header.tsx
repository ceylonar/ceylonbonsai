'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/museum', label: 'Museum' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/qa-agent', label: 'Q&A Agent' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-lg shadow-sm transition-all duration-300 ${
        scrolled ? 'bg-background/80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold font-headline text-primary whitespace-nowrap">
              Ceylon Bonsai Museum
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative transition-colors duration-300 hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-foreground/80'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}