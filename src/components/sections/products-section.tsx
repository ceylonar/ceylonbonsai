
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { products } from '@/lib/product-data';


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
