import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Juniper Bonsai Tree',
    category: 'Trees',
    price: '$79.99',
    description: 'A classic, hardy Juniper Procumbens Nana, perfect for beginners.',
    image: 'https://images.unsplash.com/photo-1713372086778-cb578f06b866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxib25zYWklMjBqdW5pcGVyJTIwcHJvZHVjdHxlbnwwfHx8fDE3NTY2NzUzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 600,
    height: 600,
    aiHint: 'bonsai juniper product'
  },
  {
    name: 'Professional Pruning Shears',
    category: 'Tools',
    price: '$45.00',
    description: 'High-carbon steel shears for precise and clean cuts.',
    image: 'https://images.unsplash.com/photo-1626880497648-95d036ed84b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxib25zYWklMjBzaGVhcnN8ZW58MHx8fHwxNzU2Njc1MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 600,
    height: 600,
    aiHint: 'bonsai shears'
  },
  {
    name: 'Ceramic Bonsai Pot',
    category: 'Pots',
    price: '$35.50',
    description: 'A beautiful, frost-resistant ceramic pot with drainage holes.',
    image: 'https://images.unsplash.com/photo-1598350742821-481168f550fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxib25zYWklMjBwb3R8ZW58MHx8fHwxNzU2Njc1MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 600,
    height: 600,
    aiHint: 'bonsai pot'
  },
  {
    name: 'Bonsai Soil Mix',
    category: 'Supplies',
    price: '$19.99',
    description: 'Our premium blend of akadama, pumice, and lava rock for optimal drainage.',
    image: 'https://images.unsplash.com/photo-1718619945252-1daf1cdd6f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxib25zYWklMjBzb2lsfGVufDB8fHx8MTc1NjY3NTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 600,
    height: 600,
    aiHint: 'bonsai soil'
  },
  {
    name: 'Japanese Maple Bonsai',
    category: 'Trees',
    price: '$129.99',
    description: 'Acer Palmatum with stunning seasonal color changes. A true centerpiece.',
    image: 'https://images.unsplash.com/photo-1656197726183-ea1f43d0bf7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxib25zYWklMjBtYXBsZSUyMHByb2R1Y3R8ZW58MHx8fHwxNzU2Njc1MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 600,
    height: 600,
    aiHint: 'bonsai maple product'
  },
  {
    name: 'Concave Cutter',
    category: 'Tools',
    price: '$65.00',
    description: 'Essential for removing branches and creating smooth, hollow cuts that heal beautifully.',
    image: 'https://images.unsplash.com/photo-1646819955875-d1fb88b17fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxib25zYWklMjBjdXR0ZXJ8ZW58MHx8fHwxNzU2Njc1MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 600,
    height: 600,
    aiHint: 'bonsai cutter'
  },
  {
    name: 'Aluminum Training Wire',
    category: 'Supplies',
    price: '$15.00',
    description: 'A set of various gauges to shape and style your bonsai branches.',
    image: 'https://images.unsplash.com/photo-1616391232500-beb47120e5d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Ym9uc2FpJTIwd2lyZXxlbnwwfHx8fDE3NTY2NzUzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    width: 600,
    height: 600,
    aiHint: 'bonsai wire'
  },
  {
    name: 'Glazed Cascade Pot',
    category: 'Pots',
    price: '$55.00',
    description: 'A deep, elegant pot designed for cascading or semi-cascading bonsai styles.',
    image: 'https://images.unsplash.com/photo-1723521891013-81b3de760956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjYXNjYWRlJTIwYm9uc2FpJTIwcG90fGVufDB8fHx8MTc1NjY3NTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    width: 600,
    height: 600,
    aiHint: 'cascade bonsai pot'
  },
];

export default function ProductsSection() {
  return (
    <div className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline text-primary">Selling products</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to cultivate your passion for the art of bonsai.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.name} className="group overflow-hidden flex flex-col">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={product.width}
                    height={product.height}
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={product.aiHint}
                  />
                </div>
              </CardContent>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-headline text-primary">{product.name}</h3>
                <p className="mt-2 text-muted-foreground flex-grow">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-2xl font-semibold text-foreground">{product.price}</p>
                </div>
              </div>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">
                  <ShoppingCart className="mr-2" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
