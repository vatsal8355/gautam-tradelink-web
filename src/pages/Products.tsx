import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FlaskRound, Pill, TestTube, Package } from "lucide-react";
import ProductHero from "@/components/products/ProductHero";
import ProductTabs from "@/components/products/ProductTabs";
import ProductQualitySection from "@/components/products/ProductQualitySection";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("api");

  const handleTabChange = (value: string) => {
    setActiveCategory(value);
    // Update the URL fragment/hash
    window.location.hash = value;
  };

  // Check for hash in URL on component mount and set active tab accordingly
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (["api", "excipients", "nutraceuticals", "intermediates"].includes(hash)) {
      setActiveCategory(hash);
    }
  }, []);

  const categoryInfo = {
    api: {
      title: "Active Pharmaceutical Ingredients",
      description: "High-quality active ingredients for pharmaceutical formulations",
      icon: FlaskRound,
      products: [
        "Acetaminophen",
        "Aceclofenac",
        "Amoxicillin Trihydrate",
        "Atorvastatin Calcium",
        "Azythromycin",
        "Ceftriaxone Sodium",
        "Ciprofloxacin",
        "Diclofenac Sodium",
        "Enrofloxacin",
        "Febuxostat",
        "Ibuprofen",
        "Levamisole HCL",
        "Losartan Potassium",
        "Metformin HCl",
        "Montelukast sodium",
        "Omeprazole",
        "Rutin",
        "Sertraline",
        "Simvastatin",
        "Sucralfate",
        "Telmisartan",
        "Tritinoin",
        "Warfin"
      ].sort((a, b) => a.localeCompare(b))
    },
    excipients: {
      title: "Excipients",
      description: "Essential inactive ingredients for pharmaceutical manufacturing",
      icon: Pill,
      products: [
        "Aspartame",
        "Benzalkonium chloride",
        "Butylated hydroxyanisole (BHA)",
        "Butylated hydroxytoluene (BHT)",
        "Calcium phosphate",
        "Croscarmellose Sodium",
        "Ethylcellulose",
        "Glycine",
        "HPMC pthalate",
        "Lactose Monohydrate",
        "Magnesium Stearate",
        "Mannitol",
        "Methylparaben",
        "Microcrystalline Cellulose",
        "Potassium citrate",
        "Povidone (PVP)",
        "Propylparaben",
        "Sodium lauryl sulfate",
        "Sodium Starch Glycolate",
        "Sorbitol",
        "Stearic Acid",
        "Talc (Pharmacuetical Grade)",
        "Xanathan Gum"
      ].sort((a, b) => a.localeCompare(b))
    },
    nutraceuticals: {
      title: "Nutraceuticals",
      description: "Natural ingredients with health benefits for nutritional supplements",
      icon: TestTube,
      products: [
        "Astaxanthin",
        "Beta Carotene (Synthetic/Natural)",
        "Beta-glucan",
        "Coenzyme Q10",
        "Curcumin",
        "D-biotin",
        "Folic acid",
        "Glucosamine sulfate",
        "Green Tea Extract",
        "Inositol",
        "L-Carnitine",
        "Lycopene",
        "Lutein",
        "Melatonin",
        "Niacin (Vitamin B3)",
        "Omega-3 Fatty Acids",
        "Resveratrol",
        "Riboflavin (Vitamin B2)",
        "Selenium",
        "Thiamine (Vitamin B1)",
        "Vitamin A",
        "Vitamin C (plain/coated)",
        "Vitamin E"
      ]
    },
    intermediates: {
      title: "Intermediates & Chemicals",
      description: "Specialized chemicals for pharmaceutical synthesis",
      icon: Package,
      productPairs: [
        { name: "1,2,4-Triazole", use: "Antifungal intermediate" },
        { name: "1-Naphthylamine", use: "Used in analgesic synthesis" },
        { name: "2,4-Dichlorobenzyl alcohol", use: "Used in throat lozenges" },
        { name: "2,4-Dinitrophenol", use: "Historical intermediate for metabolic drugs" },
        { name: "2,6-Dichloroaniline", use: "Used in antihistamines" },
        { name: "2-Amino-5-methylthiazole", use: "Intermediate in antibiotic synthesis" },
        { name: "2-Chlorobenzyl chloride", use: "Used in antihistamines" },
        { name: "2-Methylimidazole", use: "Intermediate in anti-ulcer drugs" },
        { name: "3,4-Dihydroxybenzaldehyde", use: "Dopamine-related drug intermediate" },
        { name: "3-Nitrobenzaldehyde", use: "Intermediate for cardiovascular drugs" },
        { name: "4-Aminosalicylic acid", use: "Anti-TB drug intermediate" },
        { name: "4-Hydroxycoumarin", use: "Intermediate in anticoagulants like warfarin" },
        { name: "4-Isobutylacetophenone", use: "Ibuprofen intermediate" },
        { name: "Acetyl chloride", use: "Acylating agent in various APIs" },
        { name: "Aniline", use: "Intermediate for sulfa drugs" },
        { name: "Benzimidazole", use: "Key structure in antiparasitic drugs" },
        { name: "Benzyl chloride", use: "Used in antihistamine synthesis" },
        { name: "Benzylamine", use: "Used in cardiovascular agents" },
        { name: "Chlorhexidine base", use: "Intermediate for antiseptics" },
        { name: "Chloroacetyl chloride", use: "Used in anti-inflammatory synthesis" },
        { name: "Chlorobenzene", use: "Used in muscle relaxants" },
        { name: "Cyclohexylamine", use: "Used in synthesis of stimulants" },
        { name: "Diethyl malonate", use: "Used in barbiturate synthesis" },
        { name: "Dimethylamine", use: "Used in antihistamines and CNS drugs" },
        { name: "Epichlorohydrin", use: "Intermediate for beta blockers" },
        { name: "Ethyl acetoacetate", use: "Building block in drug synthesis" },
        { name: "Formic acid", use: "Used in reduction and API modification" },
        { name: "Hydrazine hydrate", use: "Used in anti-TB and cancer drugs" },
        { name: "Imidazole", use: "Core of antifungals like ketoconazole" },
        { name: "Isatin", use: "Intermediate in antidepressants" },
        { name: "Isobutylbenzene", use: "Precursor to ibuprofen" },
        { name: "Lactic acid", use: "Used in synthesis of lactate salts" },
        { name: "Methyl iodide", use: "Methylating agent in many syntheses" },
        { name: "Methylamine", use: "Basic amine used in antidepressants" },
        { name: "N-Methylpiperazine", use: "Used in cardiovascular agents" },
        { name: "N-Phenylpiperazine", use: "Intermediate in antipsychotics" },
        { name: "Naphthol", use: "Intermediate for anti-inflammatory drugs" },
        { name: "P-aminophenol", use: "Intermediate for paracetamol" },
        { name: "Phenol", use: "Starting material for antiseptics" },
        { name: "Phenylacetic acid", use: "Intermediate for penicillin derivatives" },
        { name: "Phthalic anhydride", use: "Used in antiepileptics" },
        { name: "Piperazine", use: "Base for many anthelmintics and antipsychotics" },
        { name: "Piperidine", use: "Core structure in many antihistamines" },
        { name: "Succinic acid", use: "Intermediate for some anesthetics" },
        { name: "Thiazole", use: "Found in anti-infective drugs" },
        { name: "Thionyl chloride", use: "Chlorinating agent" },
        { name: "Toluene diisocyanate", use: "Intermediate in some corticosteroids" },
        { name: "Trichloroacetic acid", use: "Used in protein precipitation, API synthesis" }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Products | Gautam Tradelink</title>
        <meta
          name="description"
          content="Explore our comprehensive range of high-quality pharmaceutical ingredients including APIs, excipients, nutraceuticals, and chemical intermediates."
        />
      </Helmet>

      <main>
        <ProductHero />

        {/* Products Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="mb-12">
              <p className="text-muted-foreground mb-8">
                At Gautam Tradelink, we offer a comprehensive range of pharmaceutical ingredients 
                categorized into four main groups. All our products are sourced from trusted 
                manufacturers and undergo rigorous quality testing to meet international standards.
              </p>
            </div>

            <ProductTabs 
              activeCategory={activeCategory} 
              categoryInfo={categoryInfo}
              onTabChange={handleTabChange}
            />
          </div>
        </section>

        <ProductQualitySection />
      </main>
    </>
  );
};

export default Products;
