import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="section-padding bg-[#0F5E59] relative overflow-hidden">
      <div className="absolute inset-0 bg-abstract-pattern opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how Gautam Tradelink can meet your pharmaceutical sourcing needs with our quality products and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#E7F9F3] text-[#0F5E59] hover:bg-[#E7F9F3]/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-[#E7F9F3] text-[#0F5E59] hover:bg-[#E7F9F3]/90">
              <Link to="/brochure">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
