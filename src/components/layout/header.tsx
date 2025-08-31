'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useMounted } from '@/hooks/use-mounted';
import { useState, useEffect } from 'react';

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
  const mounted = useMounted();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
       <header
        className={cn(
          'sticky top-0 z-50 w-full',
           'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 h-[52px]">
            <Link href="/" className="text-xl font-bold font-headline text-primary whitespace-nowrap">
              Ceylon Bonsai Museum
            </Link>
             <div className="flex items-center gap-4">
                <div className="h-8 w-8 bg-muted/50 rounded-full animate-pulse" />
                <div className="md:hidden">
                   <div className="h-10 w-10" />
                </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 backdrop-blur-lg shadow-sm transition-all duration-300',
        scrolled ? 'bg-background/80' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <Link href="/" className="text-xl font-bold font-headline text-primary whitespace-nowrap">
            Ceylon Bonsai Museum
          </Link>
          <div className="flex items-center gap-4">
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
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-4 p-6">
                    <Link href="/" className="text-xl font-bold font-headline text-primary mb-4">
                      Ceylon Bonsai Museum
                    </Link>
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          'text-lg transition-colors duration-300 hover:text-primary',
                          pathname === link.href ? 'text-primary font-semibold' : 'text-foreground/80'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
