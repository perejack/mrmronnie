import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(220 25% 20% / 0.95), hsl(220 25% 20% / 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
            Premium Roofing Solutions for Every Building
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Quality mabati roofing sheets built to withstand Kenya's climate. Durable, affordable, and installed by experts you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-hover transition-smooth text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
              asChild
            >
              <Link to="#products">
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 backdrop-blur-sm transition-smooth text-base md:text-lg px-6 md:px-8 py-5 md:py-6"
              asChild
            >
              <a href="tel:+254737893370">Call Us Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
