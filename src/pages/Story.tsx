import { Clock, Heart, Award, Users } from "lucide-react";
import heritageImage from "@/assets/heritage-craftsmanship.jpg";

const Story = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Our Heritage of Excellence
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A story of passion, trust, and timeless craftsmanship spanning over three decades
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <img 
                src={heritageImage} 
                alt="Heritage craftsmanship" 
                className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-display text-4xl font-bold text-foreground">
                Where It All Began
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In 1995, with a vision to bring authentic, high-quality jewellery to the heart of Nedumkandam, Hima Gold & Diamonds opened its doors. What started as a small family venture has grown into one of the most trusted names in Kerala's jewellery industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our founder believed that jewellery is more than just adornment—it's a celebration of life's precious moments, a symbol of love and commitment that passes through generations. This philosophy remains at the core of everything we do.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every piece that leaves our store carries with it the mark of our commitment to purity, quality, and craftsmanship. We take pride in being part of your family's most cherished celebrations, from weddings to anniversaries, and every milestone in between.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-6 rounded-2xl bg-muted shadow-elegant animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-maroon-gold mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl font-bold text-primary mb-2">30+</h3>
              <p className="text-muted-foreground font-medium">Years of Excellence</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-muted shadow-elegant animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-maroon-gold mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl font-bold text-primary mb-2">10,000+</h3>
              <p className="text-muted-foreground font-medium">Happy Families</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-muted shadow-elegant animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-maroon-gold mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl font-bold text-primary mb-2">100%</h3>
              <p className="text-muted-foreground font-medium">Certified Gold</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-muted shadow-elegant animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-maroon-gold mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl font-bold text-primary mb-2">3</h3>
              <p className="text-muted-foreground font-medium">Generations Served</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-2xl p-8 shadow-elegant animate-fade-in">
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide our customers with the finest quality jewellery that celebrates their special moments. We are committed to maintaining the highest standards of purity, craftsmanship, and customer service, ensuring that every piece we create becomes a treasured heirloom.
              </p>
            </div>

            <div className="bg-muted rounded-2xl p-8 shadow-elegant animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Kerala's most trusted and loved jewellery destination, where tradition meets innovation. We envision a future where every family in our region proudly wears jewellery from Hima Gold & Diamonds, knowing they've chosen the best in quality, design, and value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
