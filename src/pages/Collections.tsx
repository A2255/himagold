import ProductCard from "@/components/ProductCard";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { allProducts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
};

const Collections = () => {
  const { slug } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const collectionName = slug ? slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) : "All Collections";

  useEffect(() => {
    const categoryKey = slug as keyof typeof allProducts;
    setProducts(allProducts[categoryKey] || allProducts.default);
  }, [slug]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-gray-400">
        <Link to="/" className="hover:text-gold">Home</Link>
        <span> / </span>
        <Link to="/collections" className="hover:text-gold">Collections</Link>
        {slug && <span> / {collectionName}</span>}
      </div>

      <h1 className="text-4xl font-display text-gold mb-8">{collectionName}</h1>

      <div className="grid grid-cols-1">
        <div className="col-span-1">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center text-porcelain col-span-full py-16">
              <p className="text-lg">No products found in the "{collectionName}" collection yet.</p>
              <p className="text-gray-400 mt-2">Please check back soon or explore our other collections!</p>
              <Link to="/collections">
                <Button variant="outline" className="mt-6 border-gold text-gold hover:bg-gold hover:text-charcoal">
                  View All Collections
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;


