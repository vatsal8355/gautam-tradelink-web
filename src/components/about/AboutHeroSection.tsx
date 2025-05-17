
import { Helmet } from "react-helmet-async";

const AboutHeroSection = () => (
  <>
    <Helmet>
      <title>About Us | Gautam Tradelink</title>
      <meta
        name="description"
        content="Discover Gautam Tradelink – your reliable partner for high-quality pharmaceutical raw materials and sourcing solutions."
      />
    </Helmet>
    <section className="pt-32 pb-16 bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-6 text-[#0F5E59]">
            About Gautam Tradelink
          </h1>
          <p className="text-lg opacity-90 text-white">
            Trusted sourcing partner for pharmaceutical raw materials across India and beyond.
          </p>
        </div>
      </div>
    </section>
  </>
);

export default AboutHeroSection;
