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
    image: 'https://picsum.photos/seed/juniper-product/600/600',
    width: 600,
    height: 600,
    aiHint: 'bonsai juniper product'
  },
  {
    name: 'Professional Pruning Shears',
    category: 'Tools',
    price: '$45.00',
    description: 'High-carbon steel shears for precise and clean cuts.',
    image: 'https://picsum.photos/seed/shears-product/600/600',
    width: 600,
    height: 600,
    aiHint: 'bonsai shears'
  },
  {
    name: 'Ceramic Bonsai Pot',
    category: 'Pots',
    price: '$35.50',
    description: 'A beautiful, frost-resistant ceramic pot with drainage holes.',
    image: 'https://picsum.photos/seed/pot-product/600/600',
    width: 600,
    height: 600,
    aiHint: 'bonsai pot'
  },
  {
    name: 'Bonsai Soil Mix',
    category: 'Supplies',
    price: '$19.99',
    description: 'Our premium blend of akadama, pumice, and lava rock for optimal drainage.',
    image: 'https://picsum.photos/seed/soil-product/600/600',
    width: 600,
    height: 600,
    aiHint: 'bonsai soil'
  },
  {
    name: 'Japanese Maple Bonsai',
    category: 'Trees',
    price: '$129.99',
    description: 'Acer Palmatum with stunning seasonal color changes. A true centerpiece.',
    image: 'https://picsum.photos/seed/maple-product/600/600',
    width: 600,
    height: 600,
    aiHint: 'bonsai maple product'
  },
  {
    name: 'Concave Cutter',
    category: 'Tools',
    price: '$65.00',
    description: 'Essential for removing branches and creating smooth, hollow cuts that heal beautifully.',
    image: 'https://picsum.photos/seed/cutter-product/600/600',
    width: 600,
    height: 600,
    aiHint: 'bonsai cutter'
  },
  {
    name: 'Aluminum Training Wire',
    category: 'Supplies',
    price: '$15.00',
    description: 'A set of various gauges to shape and style your bonsai branches.',
    image: 'https://picsum.photos/seed/wire-product/600/600',
    width: 600,
    height: 600,
    aiHint: 'bonsai wire'
  },
  {
    name: 'Glazed Cascade Pot',
    category: 'Pots',
    price: '$55.00',
    description: 'A deep, elegant pot designed for cascading or semi-cascading bonsai styles.',
    image: 'https://picsum.photos/seed/cascade-pot/600/600',
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
          <h1 className="text-4xl md:text-5xl font-headline text-primary">Our Collection</h1>
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
