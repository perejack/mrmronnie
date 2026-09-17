import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-workers.jpg";

const About = () => {
  const features = [
    "Over 20 years of industry experience",
    "ISO certified manufacturing processes",
    "Wide range of roofing solutions",
    "Expert installation services",
    "Competitive pricing with no hidden costs",
    "Nationwide delivery across Kenya",
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
                About Mabati Rolling Mills
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are Kenya's trusted supplier of premium quality mabati roofing materials. With decades of experience, we provide durable roofing solutions that protect what matters most to you.
              </p>
            </div>
            
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant hover:shadow-hover transition-smooth">
              <img
                src={aboutImage}
                alt="Professional roofing installation team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-hero rounded-2xl -z-10 blur-2xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
