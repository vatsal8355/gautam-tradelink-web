import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#E7F9F3]">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="hero-heading mb-6">
              Quality Pharmaceutical<br />Raw Materials & APIs
            </h1>
            <p className="hero-subheading mx-auto mb-6">
              Premium supplier of Pharmaceutical Raw materials, API, Excipients, Nutraceuticals,<br />Intermediates and Chemicals for all your pharmaceutical needs.
            </p>
            <p className="text-[#0F5E59] font-medium mb-8">
              Featuring premium-quality Azythromycin and other essential APIs
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="explore">
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button asChild variant="contact">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="brochure">
              <Link to="/brochure">View Brochure</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
