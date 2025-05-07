
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/30 opacity-70 blur-lg rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBoYXJtYWNldXRpY2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Pharmaceutical Lab"
              className="relative rounded-lg w-full h-auto object-cover shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="heading-lg">About Gautam Tradelink</h2>
            <p className="text-muted-foreground">
              Gautam Tradelink is a premier supplier of pharmaceutical raw materials, 
              serving clients across India and internationally. Based in Mumbai with a strong 
              presence in Gujarat, we've built our reputation on providing high-quality 
              pharmaceutical ingredients that meet IP, BP, and USP standards.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary text-primary-foreground rounded-full mt-1">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">Rigorous testing and quality control</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary text-primary-foreground rounded-full mt-1">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Extensive Network</h3>
                  <p className="text-sm text-muted-foreground">Sourcing from trusted global suppliers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary text-primary-foreground rounded-full mt-1">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Expertise</h3>
                  <p className="text-sm text-muted-foreground">Deep industry knowledge and experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary text-primary-foreground rounded-full mt-1">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Customer Service</h3>
                  <p className="text-sm text-muted-foreground">Personalized support and consultation</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="mt-4">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
