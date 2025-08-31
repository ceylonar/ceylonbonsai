
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
import Image from 'next/image';

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
    if (mounted) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mounted]);

  const Logo = () => (
     <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary whitespace-nowrap">
      <Image
        src="https://i.postimg.cc/6388jPpW/ed153779-6d-6d-4cde-9f44-20fda73f8319-removalai-preview.png"
        alt="Ceylon Bonsai Museum Logo"
        width={40}
        height={40}
        className="h-10 w-10"
      />
      <span className="hidden sm:inline">Ceylon Bonsai Museum</span>
    </Link>
  );

  // Render a placeholder on the server and during initial client render
  if (!mounted) {
    return (
      <header
        className={cn(
          'sticky top-0 z-50 w-full',
          'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 h-[56px]">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 bg-muted/50 rounded-full" />
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
        scrolled ? 'bg-background/30' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 h-[56px]">
          <Logo />
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative transition-colors duration-300 hover:text-primary',
                    pathname === link.href ? 'text-primary' : 'text-foreground/80',
                     scrolled && (pathname === link.href ? 'text-primary' : 'text-white/80'),
                     scrolled && 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]'
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
                    <div className="mb-4">
                       <Logo />
                    </div>
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
