import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-gradient-hero flex items-center justify-center">
            <span className="text-lg md:text-xl font-display font-bold text-primary-foreground">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-display font-bold text-primary">Mabati Rolling Mills</span>
            <span className="text-xs text-muted-foreground hidden sm:block">Premium Roofing Solutions</span>
          </div>
        </Link>

        <a
          href="tel:+254737893370"
          className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-smooth shadow-elegant hover:shadow-hover"
        >
          <Phone className="h-4 w-4" />
          <span className="text-sm md:text-base font-medium">+254 737 893370</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
