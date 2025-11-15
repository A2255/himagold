import { Link } from "react-router-dom";

const navCategories = [
  "Diamond", "Gold", "Gemstone", "Uncut Diamond", "Platinum", 
  "Gold Coins", "Silver", "Jewellery"
];

const Navbar = () => {
  return (
    <header className="bg-charcoal sticky top-0 z-40 shadow-md border-b-2 border-gold/20">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gold font-display tracking-wider">
          HIMA GOLD AND DIAMONDS
        </Link>

        {/* Main Navigation */}
        <nav className="flex justify-center items-center space-x-8">
          <Link 
            to="/" 
            className="text-porcelain hover:text-gold transition-colors font-semibold relative group"
          >
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {navCategories.map(category => (
            <Link 
              key={category} 
              to={`/collections/${category.toLowerCase().replace(' ', '-')}`} 
              className="text-porcelain hover:text-gold transition-colors font-semibold relative group"
            >
              <span>{category}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;