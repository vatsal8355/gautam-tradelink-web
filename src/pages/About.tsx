
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Gautam Tradelink</title>
        <meta
          name="description"
          content="Discover the expertise, reliability, and client service of Gautam Tradelink – your trusted partner in pharmaceutical raw material supply."
        />
      </Helmet>
      <main className="min-h-screen bg-muted">
        {/* Company Gist - Full Width, No Details Card */}
        <section className="bg-white border-b border-muted pb-0">
          <div className="container-custom py-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F5E59] mb-6 text-center">Our Company</h2>
            <div className="max-w-3xl text-base md:text-lg text-muted-foreground mb-8 text-center space-y-5">
              <p>
                Gautam Tradelink is a trusted proprietorship specializing in the trading and distribution of pharmaceutical raw materials, APIs, excipients, nutraceuticals, intermediates, and chemicals. With a proven track record, we serve a diverse spectrum of pharmaceutical companies from emerging enterprises to large-scale manufacturing units across India.
              </p>
              <p>
                Our head office in Mumbai anchors a strong presence in Gujarat and beyond, positioning us to supply the heart of India’s pharmaceutical industry with reliable products and exceptional service.
              </p>
              <p>
                We have built our reputation on quality assurance, timely delivery, and ethical business practices making us the preferred sourcing partner for manufacturers who prioritize compliance, efficiency, and trusted relationships.
              </p>
              <p>
                <span className="font-semibold text-[#0F5E59]">Director’s Expertise & Vision:</span> 
                <br />
                Under the strategic leadership of our director, Gautam Tradelink thrives on a profound understanding of the pharmaceutical market, regulatory know-how, and commitment to operational excellence. Decades of industry experience empower us to anticipate trends, source premium products, and support clients with insights that simplify sourcing processes.
              </p>
              <p>
                <span className="font-semibold text-[#0F5E59]">Experienced & Dedicated Team:</span>
                <br />
                Our team is comprised of skilled professionals with extensive backgrounds in pharmaceutical supply chain management, logistics, and client service. Collaboration, transparency, and a results-driven mindset define our workspace—enabling us to exceed expectations and deliver solutions tailored to each client’s needs.
              </p>
              <p>
                <span className="font-semibold text-[#0F5E59]">Trusted Partnerships & Continuous Growth:</span>
                <br />
                Over the years, we have forged lasting partnerships with reputed manufacturers and clients nationwide. We believe in continuous improvement, ongoing learning, and adapting to industry advancements—ensuring our offerings evolve in step with our clients’ ambitions.
              </p>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart (Kept & Highlighted) */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-lg mb-2">What Sets Us Apart</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Powered by experience and driven by integrity, Gautam Tradelink offers seamless access to premium pharmaceutical ingredients with an unwavering focus on quality, reliability, and personalized service. Our commitment extends beyond sourcing—we build lasting relationships that help our clients grow and succeed in a competitive industry.
              </p>
            </div>
            {/* Visual value cards can remain here, optionally adapt content if needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto animate-fade-in">
              {/* Example value cards */}
              <div
                className="bg-white rounded-xl p-6 shadow-md border border-muted flex flex-col items-start gap-3 hover:shadow-lg hover-scale transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-full mb-2">
                  {/* Award icon or replace as needed */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F5E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89l-2.2 2.2c-.6.6-.59 1.57.01 2.17l.6.61c.6.59 1.55.6 2.14.01l2.2-2.2"/><path d="M15.79 13.89l2.2 2.2c.6.6.59 1.57-.01 2.17l-.6.61c-.6.59-1.55.6-2.14.01l-2.2-2.2"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-[#0F5E59]">Quality Commitment</h3>
                <p className="text-sm text-muted-foreground">We source only the highest quality products that meet IP, BP, and USP standards, ensuring your formulations have the best ingredients.</p>
              </div>
              <div
                className="bg-white rounded-xl p-6 shadow-md border border-muted flex flex-col items-start gap-3 hover:shadow-lg hover-scale transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-full mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F5E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3h-8v4h8V3z"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-[#0F5E59]">Industry Expertise</h3>
                <p className="text-sm text-muted-foreground">Our team brings years of experience in pharmaceutical ingredient sourcing, providing valuable insights and guidance.</p>
              </div>
              <div
                className="bg-white rounded-xl p-6 shadow-md border border-muted flex flex-col items-start gap-3 hover:shadow-lg hover-scale transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-full mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F5E59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-[#0F5E59]">Reliable Supply Chain</h3>
                <p className="text-sm text-muted-foreground">We maintain strong relationships with manufacturers to ensure consistent availability and timely delivery.</p>
              </div>
              {/* Add more cards if needed */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

