const testimonials = [
  {
    quote: "The most beautiful ring I've ever owned. The quality is exceptional and the service was amazing.",
    author: "Priya S.",
  },
  {
    quote: "I found the perfect gift for my wife at HIMA. She was thrilled! Thank you for the wonderful experience.",
    author: "Rahul M.",
  },
  {
    quote: "A trusted family jeweller for years. Their designs are unique and their quality is unmatched.",
    author: "Anjali K.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center text-gold mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-charcoal-darken p-8 rounded-lg shadow-lg">
              <p className="text-porcelain italic">"{testimonial.quote}"</p>
              <p className="text-gold font-semibold mt-4 text-right">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;