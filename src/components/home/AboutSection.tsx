import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-[#E7F9F3]">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-6">About Gautam Tradelink</h2>
          <p className="text-[#0F5E59] max-w-3xl mx-auto">
            Gautam Tradelink is a Premium supplier of pharmaceutical raw materials, 
            serving clients across India and internationally. Based in Mumbai with a strong 
            presence in Gujarat, we've built our reputation on providing high-quality 
            pharmaceutical ingredients that meet IP, BP, and USP standards.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="p-2 bg-[#0F5E59] text-white rounded-full mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-medium text-[#0F5E59] mb-2">Quality Assurance</h3>
            <p className="text-sm text-[#0F5E59]/80 text-center">Rigorous testing and quality control</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-2 bg-[#0F5E59] text-white rounded-full mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-medium text-[#0F5E59] mb-2">Extensive Network</h3>
            <p className="text-sm text-[#0F5E59]/80 text-center">Sourcing from trusted global suppliers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-2 bg-[#0F5E59] text-white rounded-full mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-medium text-[#0F5E59] mb-2">Expertise</h3>
            <p className="text-sm text-[#0F5E59]/80 text-center">Deep industry knowledge and experience</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-2 bg-[#0F5E59] text-white rounded-full mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-medium text-[#0F5E59] mb-2">Customer Service</h3>
            <p className="text-sm text-[#0F5E59]/80 text-center">Personalized support and consultation</p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="explore">
            <Link to="/about">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
