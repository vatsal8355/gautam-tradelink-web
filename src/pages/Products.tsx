import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskRound, Pill, TestTube, Package, ShieldCheck } from "lucide-react";

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
        "Aceclofenac",
        "Amoxicillin",
        "Amoxicillin Trihydrate",
        "Atorvastatin Calcium",
        "Azythromycin",
        "Cefotaxime sodium sterile",
        "Ceftriaxone Sodium",
        "Ciprofloxacin",
        "Diclofenac Sodium",
        "Enrofloxacin",
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
      ]
    },
    excipients: {
      title: "Excipients",
      description: "Essential inactive ingredients for pharmaceutical manufacturing",
      icon: Pill,
      products: [
        "Aspartame",
        "Benzalkonium chloride – Preservative",
        "Butylated hydroxyanisole (BHA) – Antioxidant",
        "Butylated hydroxytoluene (BHT) – Antioxidant",
        "Calcium phosphate",
        "Croscarmellose Sodium",
        "Gelatin",
        "Glycine",
        "HPMC pthalate",
        "Lactose",
        "Lactose Monohydrate",
        "Magnesium Stearate",
        "Mannitol",
        "Methylparaben – Preservative",
        "Microcrystalline Cellulose",
        "Potassium citrate",
        "Povidone (PVP)",
        "Propylparaben – Preservative",
        "Sodium lauryl sulfate – Surfactant",
        "Sodium Starch Glycolate",
        "Sorbitol",
        "Stearic Acid",
        "Talc (Pharmacuetical Grade)"
      ]
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
        "Dbiotin",
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
      products: [
        "P-aminophenol – Intermediate for paracetamol",
        "2,4-Dichlorobenzyl alcohol – Used in throat lozenges",
        "Benzyl chloride – Used in antihistamine synthesis",
        "Phenylacetic acid – Intermediate for penicillin derivatives",
        "Chlorhexidine base – Intermediate for antiseptics",
        "4-Hydroxycoumarin – Intermediate in anticoagulants like warfarin",
        "Isobutylbenzene – Precursor to ibuprofen",
        "4-Isobutylacetophenone – Ibuprofen intermediate",
        "4-Aminosalicylic acid – Anti-TB drug intermediate",
        "Epichlorohydrin – Intermediate for beta blockers",
        "Lactic acid – Used in synthesis of lactate salts",
        "Succinic acid – Intermediate for some anesthetics",
        "2-Chlorobenzyl chloride – Used in antihistamines",
        "Diethyl malonate – Used in barbiturate synthesis",
        "Ethyl acetoacetate – Building block in drug synthesis",
        "Acetyl chloride – Acylating agent in various APIs",
        "Methylamine – Basic amine used in antidepressants",
        "Dimethylamine – Used in antihistamines and CNS drugs",
        "Chloroacetyl chloride – Used in anti-inflammatory synthesis",
        "Hydrazine hydrate – Used in anti-TB and cancer drugs",
        "Phenol – Starting material for antiseptics",
        "Aniline – Intermediate for sulfa drugs",
        "2-Amino-5-methylthiazole – Intermediate in antibiotic synthesis",
        "3,4-Dihydroxybenzaldehyde – Dopamine-related drug intermediate",
        "3-Nitrobenzaldehyde – Intermediate for cardiovascular drugs",
        "2,6-Dichloroaniline – Used in antihistamines",
        "Toluene diisocyanate – Intermediate in some corticosteroids",
        "1,2,4-Triazole – Antifungal intermediate",
        "Piperazine – Base for many anthelmintics and antipsychotics",
        "Piperidine – Core structure in many antihistamines",
        "N-Methylpiperazine – Used in cardiovascular agents",
        "Benzimidazole – Key structure in antiparasitic drugs",
        "Naphthol – Intermediate for anti-inflammatory drugs",
        "1-Naphthylamine – Used in analgesic synthesis",
        "Thiazole – Found in anti-infective drugs",
        "Imidazole – Core of antifungals like ketoconazole",
        "Chlorobenzene – Used in muscle relaxants",
        "Isatin – Intermediate in antidepressants",
        "Phthalic anhydride – Used in antiepileptics",
        "N-Phenylpiperazine – Intermediate in antipsychotics",
        "2,4-Dinitrophenol – Historical intermediate for metabolic drugs",
        "Methyl iodide – Methylating agent in many syntheses",
        "Formic acid – Used in reduction and API modification",
        "Thionyl chloride – Chlorinating agent",
        "Trichloroacetic acid – Used in protein precipitation, API synthesis",
        "2-Methylimidazole – Intermediate in anti-ulcer drugs",
        "Benzylamine – Used in cardiovascular agents",
        "Cyclohexylamine – Used in synthesis of stimulants"
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
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl text-white">
              <h1 className="heading-xl mb-6">Our Products</h1>
              <p className="text-lg opacity-90">
                High-quality pharmaceutical raw materials sourced to meet IP, BP, and USP standards.
              </p>
            </div>
          </div>
        </section>

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

            <Tabs 
              defaultValue={activeCategory} 
              value={activeCategory} 
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 mb-[3rem] sm:mb-8">
                <TabsTrigger 
                  value="api" 
                  className="flex items-center justify-center space-x-2 py-3 px-2 md:py-1.5 md:px-3" 
                  id="api"
                >
                  <FlaskRound className="h-4 w-4" />
                  <span>APIs</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="excipients" 
                  className="flex items-center justify-center space-x-2 py-3 px-2 md:py-1.5 md:px-3" 
                  id="excipients"
                >
                  <Pill className="h-4 w-4" />
                  <span>Excipients</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="nutraceuticals" 
                  className="flex items-center justify-center space-x-2 py-3 px-2 md:py-1.5 md:px-3" 
                  id="nutraceuticals"
                >
                  <TestTube className="h-4 w-4" />
                  <span>Nutraceuticals</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="intermediates" 
                  className="flex items-center justify-center space-x-2 py-3 px-2 md:py-1.5 md:px-3" 
                  id="intermediates"
                >
                  <Package className="h-4 w-4" />
                  <span>Intermediates</span>
                </TabsTrigger>
              </TabsList>

              {Object.keys(categoryInfo).map((category) => (
                <TabsContent key={category} value={category} className="space-y-8 pt-[2.5rem] sm:pt-0">
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="flex md:items-start md:space-x-4">
                      <div className="hidden md:block p-3 bg-white rounded-full mt-1">
                        {(() => {
                          const IconComponent = categoryInfo[category as keyof typeof categoryInfo].icon;
                          return <IconComponent className="h-5 w-5 text-primary" />;
                        })()}
                      </div>
                      
                      {/* Mobile only version */}
                      <div className="md:hidden flex flex-col items-center text-center w-full mb-4">
                        <div className="p-3 bg-white rounded-full mb-3">
                          {(() => {
                            const IconComponent = categoryInfo[category as keyof typeof categoryInfo].icon;
                            return <IconComponent className="h-5 w-5 text-primary" />;
                          })()}
                        </div>
                        <h2 className="text-xl font-semibold mb-2">
                          {categoryInfo[category as keyof typeof categoryInfo].title}
                        </h2>
                        <p className="text-muted-foreground">
                          {categoryInfo[category as keyof typeof categoryInfo].description}
                        </p>
                      </div>
                      
                      {/* Desktop only version */}
                      <div className="hidden md:block">
                        <h2 className="text-xl font-semibold mb-2">
                          {categoryInfo[category as keyof typeof categoryInfo].title}
                        </h2>
                        <p className="text-muted-foreground">
                          {categoryInfo[category as keyof typeof categoryInfo].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-medium mb-4">Our Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {categoryInfo[category as keyof typeof categoryInfo].products.map((product, index) => (
                        <div key={index} className="p-3 bg-muted rounded-md text-center">
                          <span className="font-medium text-[#0F5E59]">{product}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                      <a href="/contact" className="btn-primary inline-flex">
                        Contact Us
                      </a>
                      <a href="/brochure" className="btn-outline inline-flex">
                        Download Brochure
                      </a>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="section-padding bg-[#E7F9F3]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Quality Assurance</h2>
              <p className="text-[#0F5E59] mb-10">
                At Gautam Tradelink, quality is our highest priority. All products we supply 
                undergo rigorous testing and quality control measures to ensure they meet 
                international standards including IP, BP, and USP specifications.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-[#0F5E59] text-white rounded-full mb-4">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium text-[#0F5E59] mb-2">Certified Products</h3>
                  <p className="text-sm text-[#0F5E59]/80">
                    Products supplied with complete documentation and certificates of analysis
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-[#0F5E59] text-white rounded-full mb-4">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium text-[#0F5E59] mb-2">Reliable Sourcing</h3>
                  <p className="text-sm text-[#0F5E59]/80">
                    Sourced exclusively from approved manufacturers with established quality systems
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-[#0F5E59] text-white rounded-full mb-4">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium text-[#0F5E59] mb-2">Batch Consistency</h3>
                  <p className="text-sm text-[#0F5E59]/80">
                    Rigorous testing ensures consistent quality across all product batches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
