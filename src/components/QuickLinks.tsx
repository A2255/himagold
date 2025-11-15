import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Best Sellers", image: "/src/assets/collection-rings.jpg", href: "/collections/best-sellers" },
  { name: "New Arrivals", image: "/src/assets/collection-necklaces.jpg", href: "/collections/new-arrivals" },
  { name: "Coins & Bars", image: "/src/assets/collection-bangles.jpg", href: "/collections/gold-coins" },
  { name: "Gold Jhumka", image: "/src/assets/collection-rings.jpg", href: "/collections/earrings" },
  { name: "Rings", image: "/src/assets/collection-rings.jpg", href: "/collections/rings" },
  { name: "Bangles", image: "/src/assets/collection-bangles.jpg", href: "/collections/bangles" },
  { name: "Earrings", image: "/src/assets/collection-rings.jpg", href: "/collections/earrings" },
  { name: "Mangalsutra", image: "/src/assets/collection-necklaces.jpg", href: "/collections/jewellery" },
  { name: "Gold Chain", image: "/src/assets/collection-necklaces.jpg", href: "/collections/jewellery" },
];

const QuickLinks = () => {
  return (
    <section className="py-12 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-start flex-wrap gap-4 text-center">
          {quickLinks.map((link) => (
            <Link to={link.href} key={link.name} className="flex flex-col items-center space-y-2 group w-24">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold/50 group-hover:border-gold transition-all">
                <img src={link.image} alt={link.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-semibold text-porcelain group-hover:text-gold transition-colors">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;

