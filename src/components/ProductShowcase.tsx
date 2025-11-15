import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { allProducts } from "@/lib/mockData";

// Get a selection of products for the showcase
const showcaseProducts = [
  ...allProducts.diamond.slice(0, 3),
  ...allProducts.gold.slice(0, 3),
  ...allProducts.gemstone.slice(0, 2),
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-charcoal-darken">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center text-gold mb-12">Featured Products</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {showcaseProducts.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-gold border-gold hover:bg-gold hover:text-charcoal" />
          <CarouselNext className="text-gold border-gold hover:bg-gold hover:text-charcoal" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductShowcase;
