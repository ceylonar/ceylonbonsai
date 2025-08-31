import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-bold font-headline">
            Ceylon Bonsai Museum
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="#showcase" className="hover:text-accent transition-colors duration-300">
              Showcase
            </Link>
            <Link href="#about" className="hover:text-accent transition-colors duration-300">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
