const Footer = () => {
  return (
    <footer className="bg-charcoal-darken border-t border-gray-800">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact & Schemes */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-gold font-display mb-4">Contact & Schemes</h3>
            <div className="space-y-2 text-sm text-porcelain">
              <p><span className="font-semibold">Store Queries & Schemes:</span> 9562-916-916</p>
              <p><span className="font-semibold">Customer Care:</span> +91 22 62300916</p>
              <p><span className="font-semibold">Local Store:</span> CENTRAL Jn. NEDUMKANDAM | Ph: 04868 296789</p>
              <p className="pt-2"><a href="#" className="text-gold hover:underline">Scheme Payment Link &rarr;</a></p>
            </div>
          </div>

          {/* Get To Know Us */}
          <div>
            <h3 className="text-md font-semibold text-porcelain mb-4">Get To Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-gold">About Us</a></li>
              <li><a href="/stores" className="text-gray-400 hover:text-gold">Our Stores</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-gold">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold">CSR</a></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="text-md font-semibold text-porcelain mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/support" className="text-gray-400 hover:text-gold">FAQ</a></li>
              <li><a href="/account/orders" className="text-gray-400 hover:text-gold">Track My Order</a></li>
              <li><a href="/support/ring-size-guide" className="text-gray-400 hover:text-gold">Ring Size Guide</a></li>
              <li><a href="/support/bangle-size-guide" className="text-gray-400 hover:text-gold">Bangle Size Guide</a></li>
              <li><a href="/sitemap" className="text-gray-400 hover:text-gold">Site Map</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-md font-semibold text-porcelain mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/legal/refund" className="text-gray-400 hover:text-gold">Refund Policy</a></li>
              <li><a href="/legal/buyback" className="text-gray-400 hover:text-gold">Buyback Policy</a></li>
              <li><a href="/legal/exchange" className="text-gray-400 hover:text-gold">Exchange Policy</a></li>
              <li><a href="/legal/shipping" className="text-gray-400 hover:text-gold">Shipping Policy</a></li>
              <li><a href="/legal/cancellation" className="text-gray-400 hover:text-gold">Cancellation Policy</a></li>
              <li><a href="/legal/privacy" className="text-gray-400 hover:text-gold">Privacy Policy</a></li>
              <li><a href="/legal/terms" className="text-gray-400 hover:text-gold">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>Hima Gold & Diamonds (Placeholder for full legal name)</p>
          <p>&copy; {new Date().getFullYear()} Hima Gold And Diamonds Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;