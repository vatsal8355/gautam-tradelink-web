
import React from "react";
import { ShieldCheck } from "lucide-react";

const ProductQualitySection = () => {
  return (
    <section className="section-padding bg-[#E7F9F3]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Quality Assurance</h2>
          <p className="text-[#0F5E59] mb-10">
            At Gautam Tradelink, quality is our highest priority. All products we supply 
            undergo rigorous testing and quality control measures to ensure they meet 
            international standards including IP, BP, and USP specifications.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-[#0F5E59] text-white rounded-full mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-[#0F5E59] mb-2">Certified Products</h3>
              <p className="text-sm text-[#0F5E59]/80">
                Products supplied with complete documentation and certificates of analysis
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-[#0F5E59] text-white rounded-full mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-[#0F5E59] mb-2">Reliable Sourcing</h3>
              <p className="text-sm text-[#0F5E59]/80">
                Sourced exclusively from approved manufacturers with established quality systems
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-[#0F5E59] text-white rounded-full mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-[#0F5E59] mb-2">Batch Consistency</h3>
              <p className="text-sm text-[#0F5E59]/80">
                Rigorous testing ensures consistent quality across all product batches
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductQualitySection;
