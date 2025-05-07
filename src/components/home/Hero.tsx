
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-28 overflow-hidden bg-gradient-to-br from-primary to-primary/90">
      <div className="absolute inset-0 bg-abstract-pattern opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="heading-xl">
              Your Trusted Pharmaceutical Sourcing Partner
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              High-quality pharmaceutical APIs, excipients, nutraceuticals, and chemical intermediates sourced to IP, BP, and USP standards.
            </p>
            <div className="grid grid-cols-2 gap-3 py-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-sm">Quality Assurance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="text-sm">Timely Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-sm">Quality Consistency</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-full">
                  <Eye className="h-5 w-5" />
                </div>
                <span className="text-sm">Transparency</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button asChild size="lg" className="bg-secondary text-foreground hover:bg-secondary/90">
                <Link to="/products">
                  View Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-secondary/50 opacity-75 rounded-lg blur"></div>
              <div className="relative bg-white rounded-lg p-5">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Pharmaceutical Products"
                  className="w-full h-80 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
