
import { Helmet } from "react-helmet-async";
import { Award, BriefcaseBusiness, DollarSign, ShieldCheck, User, FileText } from "lucide-react";

const valueCards = [
  {
    icon: Award,
    title: "Quality Commitment",
    text: "Sourcing only the highest quality ingredients that meet global standards (IP, BP, USP), we enable formulations built on excellence."
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Expertise",
    text: "Years of domain experience and robust market knowledge streamline your ingredient procurement with accuracy and speed."
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    text: "Our established supplier network enables access to the best market rates without compromising product integrity."
  },
  {
    icon: ShieldCheck,
    title: "Reliable Supply Chain",
    text: "Consistent fulfillment and timely delivery, thanks to trusted relationships with leading manufacturers and logistics partners."
  },
  {
    icon: User,
    title: "Personalized Service",
    text: "A dedicated, responsive team collaborates closely to understand client needs, providing tailored sourcing strategies and solutions."
  },
  {
    icon: FileText,
    title: "Documentation Support",
    text: "Comprehensive, accurate documentation accompanies every order to help you meet your compliance and regulatory needs."
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Gautam Tradelink</title>
        <meta
          name="description"
          content="Discover the sourcing standards, experience, and client service of Gautam Tradelink—your reliable partner in pharmaceutical raw material supply."
        />
      </Helmet>
      <main className="min-h-screen bg-muted">
        {/* New visually appealing full-width company section */}
        <section className="bg-white border-b border-muted">
          <div className="container-custom py-20 flex flex-col items-center justify-center text-center relative">
            {/* Subtle decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E7F9F3] via-white/60 to-[#F1F0FB] opacity-50 pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F5E59] mb-6 drop-shadow">
                Our Company
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-5 leading-relaxed">
                Gautam Tradelink is a trusted proprietorship specializing in the trading and distribution of pharmaceutical raw materials, APIs, excipients, nutraceuticals, intermediates, and chemicals. With a proven track record, we serve a diverse spectrum of pharmaceutical companies from emerging enterprises to large-scale manufacturing units across India.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-5 leading-relaxed">
                Our head office in Mumbai anchors a strong presence in Gujarat and beyond, positioning us to supply the heart of India’s pharmaceutical industry with reliable products and exceptional service.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We have built our reputation on quality assurance, timely delivery, and ethical business practices – making us the preferred sourcing partner for manufacturers who prioritize compliance, efficiency, and trusted relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Proprietor and Team Details */}
        <section className="bg-[#E7F9F3] border-b border-muted py-12 md:py-16">
          <div className="container-custom max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-lg w-32 h-32 md:w-40 md:h-40 border-4 border-[#0E766E]/10">
              <User className="text-primary w-16 h-16 md:w-20 md:h-20" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0F5E59] mb-3">Leadership & Expertise</h3>
              <p className="text-muted-foreground text-lg mb-3">
                Under the exemplary leadership of our proprietor, Mr. Vatsalbhai Shah, Gautam Tradelink has flourished through vision, expertise, and a resolute commitment to ethical business conduct.
              </p>
              <p className="text-muted-foreground text-lg mb-3">
                With over two decades of hands-on experience in pharmaceutical distribution, Mr. Shah’s guidance ensures product authenticity, seamless procurement, and lasting partnerships. His industry insight empowers our clients to make informed decisions and anticipate regulatory shifts.
              </p>
              <p className="text-muted-foreground text-lg">
                Our team comprises experienced professionals who bring technical know-how, operational precision, and a passion for delivering solutions tailored to each client’s requirements. United by a culture of trust, teamwork, and continuous learning, we offer not just products, but a journey towards sustained business growth and compliance.
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
                Powered by experience and driven by integrity, Gautam Tradelink offers seamless access to premium pharmaceutical ingredients with an unwavering focus on quality, reliability, and personalized service. Our commitment extends beyond sourcing—we build lasting relationships that help our clients grow and succeed in a competitive industry.
              </p>
            </div>
            {/* Value Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto animate-fade-in">
              {valueCards.map((card) => (
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
      </main>
    </>
  );
};

export default About;
