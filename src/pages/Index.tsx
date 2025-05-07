
import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/ProductCategories";
import AboutSection from "@/components/home/AboutSection";
import ContactCTA from "@/components/home/ContactCTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gautam Tradelink - Trusted Pharmaceutical Sourcing Partner</title>
        <meta
          name="description"
          content="Gautam Tradelink provides high-quality pharmaceutical API, excipients, nutraceuticals, and intermediates sourced to IP, BP, USP standards. Your trusted sourcing partner."
        />
      </Helmet>
      <main>
        <Hero />
        <ProductCategories />
        <AboutSection />
        <ContactCTA />
      </main>
    </>
  );
};

export default Index;
