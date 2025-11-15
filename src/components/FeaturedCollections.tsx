import { Link } from "react-router-dom";

const collections = [
  {
    name: "Gold Rings",
    image: "/src/assets/collection-rings.jpg",
    href: "/collections/rings",
  },
  {
    name: "Necklaces",
    image: "/src/assets/collection-necklaces.jpg",
    href: "/collections/necklaces",
  },
  {
    name: "Bangles",
    image: "/src/assets/collection-bangles.jpg",
    href: "/collections/bangles",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center text-gold mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link to={collection.href} key={collection.name} className="group relative overflow-hidden rounded-lg">
              <img src={collection.image} alt={collection.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-display text-white">{collection.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;