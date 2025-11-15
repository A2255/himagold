import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/hero-jewellery.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl md:text-7xl font-display text-gold leading-tight">Timeless Elegance, Modern Design</h1>
        <p className="mt-4 text-lg md:text-xl text-porcelain max-w-2xl">
          Discover exquisite jewellery that tells your story. Handcrafted with passion, designed for a lifetime.
        </p>
        <div className="mt-8 space-x-4">
          <Link to="/collections" className="bg-gold text-charcoal px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold-dark transition-colors">
            Shop Collections
          </Link>
          <Link to="/custom-jewellery" className="border border-gold text-gold px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold hover:text-charcoal transition-colors">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;