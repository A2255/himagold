import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { allProducts } from "@/lib/mockData";
import { useEffect, useState } from "react";

// Flatten all products into a single array to make searching by slug easier
const allProductsFlat = Object.values(allProducts).flat();

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
  description: string;
  details: { label: string; value: string }[];
};

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    const foundProduct = allProductsFlat.find(p => p.slug === slug);
    setProduct(foundProduct);
  }, [slug]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-display text-gold mb-4">Product Not Found</h1>
        <p className="text-porcelain mb-8">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/collections">
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
            Back to Collections
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-gray-400">
        <Link to="/" className="hover:text-gold">Home</Link>
        <span> / </span>
        <Link to="/collections" className="hover:text-gold">Collections</Link>
        <span> / {product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
          {/* Thumbnails would go here */}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-display text-gold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-porcelain mb-6">{product.price}</p>
          <p className="text-porcelain mb-8">{product.description}</p>

          <div className="border-t border-b border-gray-800 py-6 mb-8">
            <h3 className="text-lg font-semibold text-porcelain mb-4">Product Details</h3>
            <ul className="space-y-2">
              {product.details.map(detail => (
                <li key={detail.label} className="flex justify-between text-porcelain">
                  <span className="font-semibold">{detail.label}:</span>
                  <span>{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal">Try at Store</Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal">Book Video Call</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

