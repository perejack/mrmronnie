import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-display font-bold">
              Mabati Rolling Mills
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Your trusted partner for premium quality mabati roofing solutions across Kenya.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="tel:+254737893370" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Phone className="h-4 w-4" />
                +254 737 893370
              </a>
              <a 
                href="mailto:info@mabatirolling.co.ke" 
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Mail className="h-4 w-4" />
                info@mabatirolling.co.ke
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Business Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Mabati Rolling Mills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
