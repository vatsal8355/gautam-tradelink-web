import { Helmet } from "react-helmet-async";
import { ShieldCheck, Clock, Eye, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description:
        "We ensure all our products meet the highest IP, BP, and USP standards through strict quality control and testing protocols.",
    },
    {
      icon: Clock,
      title: "Timeliness",
      description:
        "We understand the criticality of timely deliveries in the pharmaceutical industry and maintain reliable supply chains.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Consistency",
      description:
        "Our rigorous quality control ensures batch-to-batch consistency for all pharmaceutical ingredients we supply.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "We maintain open communication and transparency in all our business dealings and sourcing processes.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Gautam Tradelink</title>
        <meta
          name="description"
          content="Learn about Gautam Tradelink, your trusted pharmaceutical sourcing partner with decades of experience in supplying high-quality pharmaceutical raw materials."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6 text-[#0F5E59]">About Gautam Tradelink</h1>
              <p className="text-lg opacity-90 text-white">
                Your trusted sourcing partner for pharmaceutical raw materials and
                active ingredients.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg mb-10">Our Company</h2>
              <p className="text-muted-foreground mb-4">
                Gautam Tradelink is a leading supplier of pharmaceutical raw materials,
                specifically focused on Active Pharmaceutical Ingredients (APIs),
                Excipients, Nutraceuticals, and Chemical Intermediates. Based in
                Mumbai with a strong presence in Gujarat, we've built a reputation
                for quality and reliability in the pharmaceutical industry.
              </p>
              <p className="text-muted-foreground mb-4">
                Under the leadership of our proprietor, Mr. Vatsalbhai Shah, we have
                developed an extensive network of suppliers and manufacturers, allowing
                us to source the highest quality products that meet international standards.
              </p>
              <p className="text-muted-foreground">
                Our team consists of industry professionals with deep knowledge of
                pharmaceutical raw materials and regulatory requirements, enabling
                us to provide not just products but comprehensive sourcing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                At Gautam Tradelink, our business is built on a foundation of
                strong values that guide everything we do.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="p-3 bg-primary/10 text-primary rounded-full w-fit mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Why Choose Gautam Tradelink</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We stand apart in the pharmaceutical sourcing industry through our
                commitment to excellence and customer satisfaction.
              </p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Quality Commitment
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We source only the highest quality products that meet IP, BP, 
                      and USP standards, ensuring your formulations have the best 
                      ingredients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Industry Expertise
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our team brings years of experience in pharmaceutical 
                      ingredient sourcing, providing valuable insights and guidance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Competitive Pricing
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our established supplier network allows us to offer 
                      high-quality products at competitive market rates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Reliable Supply Chain
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We maintain strong relationships with manufacturers to 
                      ensure consistent availability and timely delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Personalized Service
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We work closely with each client to understand their unique 
                      requirements and provide tailored sourcing solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-full text-white mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Documentation Support
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We provide comprehensive documentation for all products, 
                      helping you meet regulatory requirements with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
