import { Shield, Award, Truck, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All our products come with manufacturer warranties and quality certifications.",
    },
    {
      icon: Award,
      title: "Expert Installation",
      description: "Professional installation services by certified and experienced technicians.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable nationwide delivery ensuring your materials arrive on time.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated team is always available to answer your questions and provide guidance.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're committed to providing exceptional roofing solutions and unmatched customer service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center space-y-4 p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-background/10 transition-smooth shadow-elegant hover:shadow-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                <reason.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold">
                {reason.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
