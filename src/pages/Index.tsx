import Hero from '@/components/Hero';
import FeaturedCollections from '@/components/FeaturedCollections';
import BrandStory from '@/components/BrandStory';
import HimaPromises from '@/components/HimaPromises';
import QuickLinks from '@/components/QuickLinks';
import ProductShowcase from '@/components/ProductShowcase';
import ShopByGender from '@/components/ShopByGender';
import NewArrivals from '@/components/NewArrivals';

const Index = () => {
  return (
    <>
      <Hero />
      <QuickLinks />
      <FeaturedCollections />
      <ProductShowcase />
      <ShopByGender />
      <NewArrivals />
      <BrandStory />
      <HimaPromises />
      {/* Placeholder for Bridal Section */}
      <div className="py-20 text-center text-porcelain">Brides of Hima - Coming Soon</div>
    </>
  );
};

export default Index;
