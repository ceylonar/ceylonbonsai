
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { getProducts } from '@/lib/products';
import { useEffect, useState } from 'react';
import type { Product } from '@/lib/product-data';
import Link from 'next/link';

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productList = await getProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleOrderNow = (product: Product) => {
    const message = `Hello, I'm interested in ordering the following product:\n\nName: ${product.name}\nPrice: ${product.price}\n\nPlease let me know how to proceed.`;
    const whatsappUrl = `https://wa.me/94719005632?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading) {
    return (
        <div className="py-20 lg:py-24 text-center">
            <p>Loading products...</p>
        </div>
    )
  }

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
          {products.map((product) => {
            const message = `Hello, I'm interested in ordering the following product:\n\n*Product Name:* ${product.name}\n*Price:* ${product.price}`;
            const whatsappUrl = `https://wa.me/94719005632?text=${encodeURIComponent(message)}`;

            return (
              <Card key={product.id} className="group overflow-hidden flex flex-col">
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
                  <Button asChild className="w-full">
                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Order Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
}
