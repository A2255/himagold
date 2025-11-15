const promises = [
  { title: "Complete Transparency", icon: "🔍" },
  { title: "Complimentary Insurance", icon: "🛡️" },
  { title: "Lifetime Maintenance", icon: "🛠️" },
  { title: "100% HUID Compliant Gold", icon: "🏅" },
  { title: "Fair Price Policy", icon: "⚖️" },
  { title: "Zero Deduction Gold Exchange", icon: "🔄" },
  { title: "Responsibly Sourced", icon: "🌍" },
  { title: "Guaranteed Buyback", icon: "🤝" },
  { title: "Tested & Certified Diamonds", icon: "💎" },
  { title: "Fair Labour Practices", icon: "👥" },
  { title: "Easy Exchange", icon: "↔️" },
  { title: "14 Days Return Policy", icon: "↩️" },
];

const HimaPromises = () => {
  return (
    <section className="py-20 bg-charcoal-darken">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-center text-gold mb-12">The HIMA Promises</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {promises.map((promise) => (
            <div key={promise.title} className="flex flex-col items-center">
              <div className="text-4xl mb-3">{promise.icon}</div>
              <h3 className="font-semibold text-porcelain">{promise.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HimaPromises;
