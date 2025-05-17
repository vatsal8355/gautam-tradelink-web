import { Helmet } from "react-helmet-async";
import { ShieldCheck, Clock, Eye, Award } from "lucide-react";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import CompanyOverviewSection from "@/components/about/CompanyOverviewSection";
import ValuesSection from "@/components/about/ValuesSection";
import EthosSection from "@/components/about/EthosSection";

const About = () => {
  return (
    <main>
      <AboutHeroSection />
      <CompanyOverviewSection />
      <ValuesSection />
      <EthosSection />
    </main>
  );
};

export default About;
