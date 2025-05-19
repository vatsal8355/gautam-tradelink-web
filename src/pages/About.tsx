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
        {/* Visually appealing full-width company description */}
        <section className="w-full bg-white border-b border-muted py-16">
          <div className="container-custom max-w-none">
            <div className="relative">
              {/* Decorative background for subtle visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E7F9F3]/50 via-white/30 to-[#F1F0FB]/60 opacity-75 pointer-events-none" />
              <div className="relative z-10">
                <h1 className="hero-heading mb-8 text-left md:text-center">About Gautam Tradelink</h1>
                <p className="text-xl md:text-2xl text-[#0F5E59] leading-relaxed md:leading-10 font-medium tracking-wide px-0 md:px-8 w-full text-justify">
                  Gautam Tradelink is a trusted proprietorship specializing in the trading and distribution of pharmaceutical raw materials, APIs, excipients, nutraceuticals, intermediates, and chemicals. With a proven track record, we serve a diverse spectrum of pharmaceutical companies from emerging enterprises to large-scale manufacturing units across India.
                  <br /><br />
                  Our head office in Mumbai anchors a strong presence in Gujarat and beyond, positioning us to supply the heart of India’s pharmaceutical industry with reliable products and exceptional service.
                  <br /><br />
                  We have built our reputation on quality assurance, timely delivery, and ethical business practices making us the preferred sourcing partner for manufacturers who prioritize compliance, efficiency, and trusted relationships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proprietor and Team Details - Leadership & Expertise */}
        <section className="bg-[#E7F9F3] border-b border-muted py-12 md:py-16">
          <div className="container-custom max-w-5xl mx-auto flex flex-col items-center justify-center">
            <div className="flex-1 w-full text-left md:text-center px-0 md:px-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0F5E59] mb-4">Leadership &amp; Expertise</h2>
              <p className="text-muted-foreground text-lg mb-3">
                At the helm of Gautam Tradelink is our proprietor, Mr. Vatsalbhai Shah, whose deep-rooted industry expertise guides our organization forward. With significant experience spanning both pharmaceutical and chemical industries, Mr. Shah brings strategic insight into evolving market needs and steadfast commitment to upholding regulatory excellence.
              </p>
              <p className="text-muted-foreground text-lg mb-3">
                His leadership ensures product authenticity, streamlined procurement, and ethical operations at every stage. This has empowered our clients to make confident sourcing decisions and consistently stay ahead of regulatory changes.
              </p>
              <p className="text-muted-foreground text-lg">
                Backed by a skilled team of professionals with multifaceted knowledge and operational precision, Gautam Tradelink functions as a collaborative partner—delivering tailored solutions, sharing market intelligence, and responding proactively to client challenges. Our teamwork and dedication fuel the sustained business growth and compliance of those we serve.
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
