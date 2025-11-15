import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-charcoal-darken/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-display text-porcelain">{product.name}</h3>
        <p className="mt-2 text-xl font-semibold text-gold">{product.price}</p>
        <div className="mt-4 flex justify-center items-center">
          <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-charcoal">
            Add to Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
