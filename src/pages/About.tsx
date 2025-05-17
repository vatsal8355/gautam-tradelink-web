
import { Helmet } from "react-helmet-async";
import { Award, BriefcaseBusiness, DollarSign, ShieldCheck, User, FileText } from "lucide-react";

const valueCards = [
  {
    icon: Award,
    title: "Quality Commitment",
    text: "We source only the highest quality products that meet IP, BP, and USP standards, ensuring your formulations have the best ingredients."
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Expertise",
    text: "Our team brings years of experience in pharmaceutical ingredient sourcing, providing valuable insights and guidance."
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    text: "Our established supplier network allows us to offer high-quality products at competitive market rates."
  },
  {
    icon: ShieldCheck,
    title: "Reliable Supply Chain",
    text: "We maintain strong relationships with manufacturers to ensure consistent availability and timely delivery."
  },
  {
    icon: User,
    title: "Personalized Service",
    text: "We work closely with each client to understand their unique requirements and provide tailored sourcing solutions."
  },
  {
    icon: FileText,
    title: "Documentation Support",
    text: "We provide comprehensive documentation for all products, helping you meet regulatory requirements with ease."
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Gautam Tradelink</title>
        <meta
          name="description"
          content="Discover the unmatched sourcing standards, experience, and client service of Gautam Tradelink – your reliable partner in pharmaceutical raw material supply."
        />
      </Helmet>
      <main className="min-h-screen bg-muted">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-white border-b border-muted">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-4">About Gautam Tradelink</h1>
              <p className="text-lg text-muted-foreground mb-2">
                Trusted Sourcing Partner for Pharmaceutical Excellence
              </p>
              <p className="text-base text-muted-foreground">
                Based in Mumbai and Gujarat, we connect manufacturers across India and beyond with premium pharmaceutical ingredients—delivered on time, every time.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-2">What Sets Us Apart</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                With a steadfast focus on quality, reliability, and tailored client service, Gautam Tradelink provides a comprehensive, trusted solution for pharmaceutical raw materials and sourcing.
              </p>
            </div>
            {/* Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto animate-fade-in">
              {valueCards.map((card, i) => (
                <div
                  key={card.title}
                  className="bg-white rounded-xl p-6 shadow-md border border-muted flex flex-col items-start gap-3 hover:shadow-lg hover-scale transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-full mb-2">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-[#0F5E59]">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg mb-3">Our Mission</h2>
              <p className="text-base text-muted-foreground mb-3">
                To empower pharmaceutical manufacturers with safe, high-quality, and fully compliant active ingredients, excipients, nutraceuticals, and intermediates—sourced from trusted suppliers and backed by diligent service.
              </p>
              <p className="text-base text-muted-foreground">
                Every batch is batch-tested and IP/BP/USP-compliant, ensuring your formulations meet the highest benchmarks.
              </p>
            </div>
          </div>
        </section>

        {/* Ethos / Leadership */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg mb-3">Our Ethos & Leadership</h2>
              <p className="text-base text-muted-foreground">
                Led by <span className="font-semibold text-[#0E766E]">Mr. Vatsalbhai Shah</span>, our dedicated team delivers more than products—we provide clear guidance, regulatory support, and personalized solutions tailored to your needs.<br />
                <span className="block mt-2">Gautam Tradelink is committed to building long-term partnerships rooted in trust, transparency, and results.</span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
