import { Link } from "react-router-dom";

const genderCategories = [
  {
    name: "Women's Jewellery",
    image: "/src/assets/collection-necklaces.jpg",
    href: "/collections/jewellery",
  },
  {
    name: "Men's Jewellery",
    image: "/src/assets/collection-rings.jpg",
    href: "/collections/jewellery", // Should point to a men's collection later
  },
  {
    name: "Kids' Jewellery",
    image: "/src/assets/collection-bangles.jpg",
    href: "/collections/jewellery", // Should point to a kids' collection later
  },
];

const ShopByGender = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center text-gold mb-12">Shop By Gender</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {genderCategories.map((category) => (
            <Link to={category.href} key={category.name} className="group relative overflow-hidden rounded-lg">
              <img src={category.image} alt={category.name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center">
                <h3 className="text-2xl font-display text-white p-6">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByGender;
