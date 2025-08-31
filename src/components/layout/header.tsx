import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold font-headline text-primary">
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
