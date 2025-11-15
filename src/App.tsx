import { Routes, Route, Outlet } from 'react-router-dom';
import Index from '@/pages/Index';
import Story from '@/pages/Story';
import Collections from '@/pages/Collections';
import NotFound from '@/pages/NotFound';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductDetail from '@/pages/ProductDetail';

// Main layout component
const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="collections" element={<Collections />} />
      {/* Example of a nested route, e.g., /collections/gold */}
      <Route path="collections/:slug" element={<Collections />} /> 
      <Route path="product/:slug" element={<ProductDetail />} />
      <Route path="offers" element={<div>Offers Page</div>} />
      <Route path="custom-jewellery" element={<div>Custom Jewellery Page</div>} />
      <Route path="stores" element={<div>Stores Page</div>} />
      <Route path="gold-rate" element={<div>Gold Rate Page</div>} />
      <Route path="about" element={<Story />} />
      <Route path="blog" element={<div>Blog Page</div>} />
      <Route path="support" element={<div>Support Page</div>} />
      <Route path="account" element={<div>Account Page</div>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;


