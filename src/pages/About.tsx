
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

const CompanyGist = () => (
  <section className="bg-white border-b border-muted pb-0">
    <div className="container-custom py-16 flex flex-col lg:flex-row items-start gap-12">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F5E59] mb-4">Our Company</h2>
        <p className="text-base text-muted-foreground mb-4">
          Gautam Tradelink is a trusted proprietorship specializing in the trading and distribution of pharmaceutical raw materials, APIs, excipients, nutraceuticals, intermediates, and chemicals. With a proven track record, we serve a diverse spectrum of pharmaceutical companies—from emerging enterprises to large-scale manufacturing units across India.
        </p>
        <p className="text-base text-muted-foreground mb-4">
          Our head office in Mumbai anchors a strong presence in Gujarat and beyond, positioning us to supply the heart of India’s pharmaceutical industry with reliable products and exceptional service.
        </p>
        <p className="text-base text-muted-foreground">
          We have built our reputation on quality assurance, timely delivery, and ethical business practices—making us the preferred sourcing partner for manufacturers who prioritize compliance, efficiency, and trusted relationships.
        </p>
      </div>
      {/* Company quick facts (Horizontal card) */}
      <div className="rounded-xl bg-[#E7F9F3] border border-[#ccede3] p-7 w-full max-w-md lg:max-w-sm mx-auto lg:mx-0 shadow-sm">
        <h3 className="text-xl font-semibold text-[#0F5E59] mb-3">Company Details</h3>
        <ul className="flex flex-wrap gap-y-4 gap-x-6 text-sm text-[#0F5E59]">
          <li className="w-1/2"> <span className="font-medium">Company:</span> Gautam Tradelink </li>
          <li className="w-1/2"> <span className="font-medium">Type:</span> Proprietorship </li>
          <li className="w-1/2"> <span className="font-medium">Location:</span> Mumbai, Gujarat (India) </li>
          <li className="w-1/2"> <span className="font-medium">Services:</span> Trading & Distribution </li>
          <li className="w-1/2"> <span className="font-medium">Products:</span> APIs, Excipients, Nutraceuticals, Intermediates, Chemicals </li>
          <li className="w-1/2"> <span className="font-medium">Clientele:</span> Small to Large Pharma Manufacturers </li>
        </ul>
      </div>
    </div>
  </section>
);

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
        <CompanyGist />

        {/* Value Proposition */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-2">What Sets Us Apart</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Powered by experience and driven by integrity, Gautam Tradelink offers seamless access to premium pharmaceutical ingredients with an unwavering focus on quality, reliability, and personalized service. Our commitment extends beyond sourcing—we build lasting relationships that help our clients grow and succeed in a competitive industry.
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
        {/* Removed Mission, Ethos & Leadership as per instructions */}
      </main>
    </>
  );
};

export default About;

