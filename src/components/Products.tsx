import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of high-quality mabati roofing solutions, each designed to meet specific needs and budgets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden gradient-card border-border hover:border-accent/50 transition-smooth shadow-elegant hover:shadow-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden bg-secondary/20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 group-hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.variants.map((variant) => (
                    <div
                      key={variant.gauge}
                      className="flex items-baseline gap-1 px-3 py-1 rounded-full bg-secondary text-xs"
                    >
                      <span className="font-medium text-primary">{variant.gauge}</span>
                      <span className="text-muted-foreground">KSh {variant.pricePerMeter}/m</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                >
                  <Link to={`/product/${product.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
