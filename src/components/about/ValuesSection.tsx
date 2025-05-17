
import { ShieldCheck, Clock, Eye, Award } from "lucide-react";

const ValuesSection = () => (
  <section className="section-padding bg-muted">
    <div className="container-custom">
      <div className="text-center mb-8">
        <h2 className="heading-lg mb-2">Why Partners Trust Us</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We build lasting relationships with reliable service and a focus on quality.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col items-center">
          <div className="p-3 bg-primary/10 text-primary rounded-full mb-3">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="font-semibold mb-2">Quality Focus</h3>
          <p className="text-sm text-muted-foreground text-center">Strict standards & batch-tested products</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col items-center">
          <div className="p-3 bg-primary/10 text-primary rounded-full mb-3">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="font-semibold mb-2">On-time Delivery</h3>
          <p className="text-sm text-muted-foreground text-center">Reliable supply chain across India</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col items-center">
          <div className="p-3 bg-primary/10 text-primary rounded-full mb-3">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="font-semibold mb-2">Transparency</h3>
          <p className="text-sm text-muted-foreground text-center">Clarity in sourcing, pricing, & communication</p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col items-center">
          <div className="p-3 bg-primary/10 text-primary rounded-full mb-3">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="font-semibold mb-2">Service</h3>
          <p className="text-sm text-muted-foreground text-center">Personalized solutions & full documentation</p>
        </div>
      </div>
    </div>
  </section>
);

export default ValuesSection;
