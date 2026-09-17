import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-display font-bold text-primary">Product Not Found</h1>
            <Button asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const phoneNumber = "+254 737 893370";
  const whatsappMessage = `Hi! I'm interested in ${product.name}. Can you provide more details?`;
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-8 md:py-12 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <Button asChild variant="ghost" className="mb-6 hover:bg-secondary">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6 animate-scale-in">
                <Card className="overflow-hidden shadow-elegant">
                  <div className="aspect-square bg-background p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Card>
                
                <Card className="gradient-card shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-bold text-primary mb-4">
                      Available Variants & Pricing
                    </h3>
                    <div className="space-y-3">
                      {product.variants.map((variant) => (
                        <div
                          key={variant.gauge}
                          className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border"
                        >
                          <span className="font-medium text-primary">{variant.gauge} Gauge</span>
                          <span className="text-xl font-display font-bold text-accent">
                            KSh {variant.pricePerMeter.toLocaleString()}/m
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 animate-slide-up">
                <div>
                  <h1 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <Card className="gradient-card shadow-elegant">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-display font-bold text-primary">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="space-y-4 p-6 rounded-2xl bg-gradient-hero text-primary-foreground">
                  <h3 className="text-2xl font-display font-bold">
                    Ready to Order?
                  </h3>
                  <p className="text-primary-foreground/80">
                    Contact us now to place your order or get a custom quote for your project.
                  </p>
                  <div className="flex flex-col gap-4 pt-2">
                    <Button
                      size="lg"
                      className="w-full h-14 sm:h-16 text-base sm:text-lg bg-accent hover:bg-accent/90 text-accent-foreground shadow-hover transition-smooth font-semibold"
                      asChild
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                        Order via WhatsApp
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      className="w-full h-14 sm:h-16 text-base sm:text-lg bg-white/90 hover:bg-white text-primary border-2 border-white shadow-lg hover:shadow-xl transition-smooth font-semibold"
                      asChild
                    >
                      <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>
                        <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                        Call to Order: {phoneNumber}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary text-center mb-8 md:mb-12">
              Other Products You Might Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct, index) => (
                  <Card 
                    key={relatedProduct.id} 
                    className="group overflow-hidden gradient-card border-border hover:border-accent/50 transition-smooth shadow-elegant hover:shadow-hover animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square overflow-hidden bg-secondary/20">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-contain p-6 group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-xl font-display font-bold text-primary">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedProduct.description}
                      </p>
                      <Button 
                        asChild 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                      >
                        <Link to={`/product/${relatedProduct.id}`}>View Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
