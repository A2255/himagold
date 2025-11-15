import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <section className="bg-charcoal-darken py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/src/assets/heritage-craftsmanship.jpg" alt="Craftsmanship" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-4xl font-display text-gold mb-6">A Legacy of Trust</h2>
          <p className="text-porcelain mb-6">
            For generations, HIMA Gold & Diamonds has been a hallmark of trust and exquisite craftsmanship. Our journey is rooted in a passion for creating timeless pieces that celebrate life's most precious moments.
          </p>
          <Link to="/about" className="text-gold font-semibold hover:underline">
            Discover Our Story &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;