
import { Helmet } from "react-helmet-async";
import { ShieldCheck, Clock, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Gautam Tradelink</title>
        <meta
          name="description"
          content="Discover Gautam Tradelink – your reliable partner for high-quality pharmaceutical raw materials and sourcing solutions."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6 text-[#0F5E59]">About Gautam Tradelink</h1>
              <p className="text-lg opacity-90 text-white">
                Trusted sourcing partner for pharmaceutical raw materials across India and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Who We Are</h2>
              <p className="text-muted-foreground mb-3">
                Based in Mumbai and Gujarat, Gautam Tradelink supplies premium Active Pharmaceutical Ingredients (APIs), Excipients, Nutraceuticals, and Intermediates.
              </p>
              <p className="text-muted-foreground">
                We connect pharmaceutical manufacturers with top-quality, IP/BP/USP-compliant ingredients—always on time, with tailored service.
              </p>
            </div>
          </div>
        </section>

        {/* Values and Advantages */}
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

        {/* Owner and Ethos */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg mb-4">Our Ethos</h2>
              <p className="text-muted-foreground">
                Led by Mr. Vatsalbhai Shah, our team delivers more than products: we provide guidance, reliability, and complete regulatory support to every client.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
