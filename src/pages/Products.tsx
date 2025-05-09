
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
      productPairs: [
        { name: "P-aminophenol", use: "Intermediate for paracetamol" },
        { name: "2,4-Dichlorobenzyl alcohol", use: "Used in throat lozenges" },
        { name: "Benzyl chloride", use: "Used in antihistamine synthesis" },
        { name: "Phenylacetic acid", use: "Intermediate for penicillin derivatives" },
        { name: "Chlorhexidine base", use: "Intermediate for antiseptics" },
        { name: "4-Hydroxycoumarin", use: "Intermediate in anticoagulants like warfarin" },
        { name: "Isobutylbenzene", use: "Precursor to ibuprofen" },
        { name: "4-Isobutylacetophenone", use: "Ibuprofen intermediate" },
        { name: "4-Aminosalicylic acid", use: "Anti-TB drug intermediate" },
        { name: "Epichlorohydrin", use: "Intermediate for beta blockers" },
        { name: "Lactic acid", use: "Used in synthesis of lactate salts" },
        { name: "Succinic acid", use: "Intermediate for some anesthetics" },
        { name: "2-Chlorobenzyl chloride", use: "Used in antihistamines" },
        { name: "Diethyl malonate", use: "Used in barbiturate synthesis" },
        { name: "Ethyl acetoacetate", use: "Building block in drug synthesis" },
        { name: "Acetyl chloride", use: "Acylating agent in various APIs" },
        { name: "Methylamine", use: "Basic amine used in antidepressants" },
        { name: "Dimethylamine", use: "Used in antihistamines and CNS drugs" },
        { name: "Chloroacetyl chloride", use: "Used in anti-inflammatory synthesis" },
        { name: "Hydrazine hydrate", use: "Used in anti-TB and cancer drugs" },
        { name: "Phenol", use: "Starting material for antiseptics" },
        { name: "Aniline", use: "Intermediate for sulfa drugs" },
        { name: "2-Amino-5-methylthiazole", use: "Intermediate in antibiotic synthesis" },
        { name: "3,4-Dihydroxybenzaldehyde", use: "Dopamine-related drug intermediate" },
        { name: "3-Nitrobenzaldehyde", use: "Intermediate for cardiovascular drugs" },
        { name: "2,6-Dichloroaniline", use: "Used in antihistamines" },
        { name: "Toluene diisocyanate", use: "Intermediate in some corticosteroids" },
        { name: "1,2,4-Triazole", use: "Antifungal intermediate" },
        { name: "Piperazine", use: "Base for many anthelmintics and antipsychotics" },
        { name: "Piperidine", use: "Core structure in many antihistamines" },
        { name: "N-Methylpiperazine", use: "Used in cardiovascular agents" },
        { name: "Benzimidazole", use: "Key structure in antiparasitic drugs" },
        { name: "Naphthol", use: "Intermediate for anti-inflammatory drugs" },
        { name: "1-Naphthylamine", use: "Used in analgesic synthesis" },
        { name: "Thiazole", use: "Found in anti-infective drugs" },
        { name: "Imidazole", use: "Core of antifungals like ketoconazole" },
        { name: "Chlorobenzene", use: "Used in muscle relaxants" },
        { name: "Isatin", use: "Intermediate in antidepressants" },
        { name: "Phthalic anhydride", use: "Used in antiepileptics" },
        { name: "N-Phenylpiperazine", use: "Intermediate in antipsychotics" },
        { name: "2,4-Dinitrophenol", use: "Historical intermediate for metabolic drugs" },
        { name: "Methyl iodide", use: "Methylating agent in many syntheses" },
        { name: "Formic acid", use: "Used in reduction and API modification" },
        { name: "Thionyl chloride", use: "Chlorinating agent" },
        { name: "Trichloroacetic acid", use: "Used in protein precipitation, API synthesis" },
        { name: "2-Methylimidazole", use: "Intermediate in anti-ulcer drugs" },
        { name: "Benzylamine", use: "Used in cardiovascular agents" },
        { name: "Cyclohexylamine", use: "Used in synthesis of stimulants" }
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

              {Object.keys(categoryInfo).map((category) => {
                const categoryData = categoryInfo[category as keyof typeof categoryInfo];
                const isIntermediates = category === "intermediates";
                
                return (
                  <TabsContent key={category} value={category} className="space-y-8 pt-[2.5rem] sm:pt-0">
                    <div className="bg-muted p-6 rounded-lg">
                      <div className="flex md:items-start md:space-x-4">
                        <div className="hidden md:block p-3 bg-white rounded-full mt-1">
                          {(() => {
                            const IconComponent = categoryData.icon;
                            return <IconComponent className="h-5 w-5 text-primary" />;
                          })()}
                        </div>
                        
                        {/* Mobile only version */}
                        <div className="md:hidden flex flex-col items-center text-center w-full mb-4">
                          <div className="p-3 bg-white rounded-full mb-3">
                            {(() => {
                              const IconComponent = categoryData.icon;
                              return <IconComponent className="h-5 w-5 text-primary" />;
                            })()}
                          </div>
                          <h2 className="text-xl font-semibold mb-2">
                            {categoryData.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {categoryData.description}
                          </p>
                        </div>
                        
                        {/* Desktop only version */}
                        <div className="hidden md:block">
                          <h2 className="text-xl font-semibold mb-2">
                            {categoryData.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {categoryData.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg border border-border">
                      <h3 className="text-lg font-medium mb-4">Our Products</h3>
                      
                      {isIntermediates ? (
                        // Special layout for intermediates with name-use pairs
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse mb-6">
                            <thead className="bg-muted">
                              <tr>
                                <th className="text-left p-3 font-medium">Chemical Name</th>
                                <th className="text-left p-3 font-medium">Application/Use</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categoryInfo.intermediates.productPairs.map((pair, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-muted/40" : ""}>
                                  <td className="p-3 font-medium text-[#0F5E59]">{pair.name}</td>
                                  <td className="p-3">{pair.use}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        // Original grid layout for other categories
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {categoryData.products.map((product, index) => (
                            <div key={index} className="p-3 bg-muted rounded-md text-center">
                              <span className="font-medium text-[#0F5E59]">{product}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
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
                );
              })}
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
