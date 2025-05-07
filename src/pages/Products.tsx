
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskRound, Pill, TestTube, Package } from "lucide-react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("api");

  const handleTabChange = (value: string) => {
    setActiveCategory(value);
    // Update the URL fragment/hash
    window.location.hash = value;
  };

  // Check for hash in URL on component mount and set active tab accordingly
  useState(() => {
    const hash = window.location.hash.replace("#", "");
    if (["api", "excipients", "nutraceuticals", "intermediates"].includes(hash)) {
      setActiveCategory(hash);
    }
  });

  const products = {
    api: [
      { name: "Azythromycin", description: "Macrolide antibiotic used to treat bacterial infections" },
      { name: "Paracetamol", description: "Analgesic and antipyretic medication" },
      { name: "Metformin HCl", description: "Oral diabetes medication that helps control blood sugar levels" },
      { name: "Amoxicillin", description: "Penicillin antibiotic used to treat bacterial infections" },
      { name: "Omeprazole", description: "Proton pump inhibitor that decreases stomach acid production" },
      { name: "Diclofenac Sodium", description: "Non-steroidal anti-inflammatory drug (NSAID)" },
      { name: "Ciprofloxacin", description: "Fluoroquinolone antibiotic for treating bacterial infections" },
      { name: "Atorvastatin Calcium", description: "Medication to treat high cholesterol and reduce heart disease risk" },
      { name: "Losartan Potassium", description: "Angiotensin II receptor blocker used to treat high blood pressure" },
      { name: "Ceftriaxone Sodium", description: "Third-generation cephalosporin antibiotic" }
    ],
    excipients: [
      { name: "Microcrystalline Cellulose", description: "Used as a binding agent, diluent, and disintegrant" },
      { name: "Lactose Monohydrate", description: "Common diluent in tablet and capsule formulations" },
      { name: "Magnesium Stearate", description: "Lubricant in tablet and capsule manufacturing" },
      { name: "Povidone (PVP)", description: "Binder and solubilizer in pharmaceutical formulations" },
      { name: "Croscarmellose Sodium", description: "Super disintegrant for tablet formulations" },
      { name: "Sodium Starch Glycolate", description: "Disintegrant in pharmaceutical formulations" },
      { name: "Talc (Pharmaceutical Grade)", description: "Anti-caking agent and glidant" },
      { name: "Colloidal Silicon Dioxide", description: "Flow aid and anti-caking agent" },
      { name: "Stearic Acid", description: "Tablet and capsule lubricant" },
      { name: "Pregelatinized Starch", description: "Binder, diluent, and disintegrant" }
    ],
    nutraceuticals: [
      { name: "Vitamin A", description: "Essential for vision, immune function, and cell growth" },
      { name: "Vitamin K3", description: "Important for blood clotting and bone health" },
      { name: "Coenzyme Q10", description: "Antioxidant that helps generate energy in cells" },
      { name: "Lutein", description: "Carotenoid important for eye health" },
      { name: "Omega-3 Fatty Acids", description: "Essential fatty acids with heart and brain benefits" },
      { name: "L-Carnitine", description: "Amino acid derivative that helps convert fat into energy" },
      { name: "Glucosamine Sulfate", description: "Supports joint health and cartilage formation" },
      { name: "Lycopene", description: "Carotenoid with antioxidant properties" },
      { name: "Green Tea Extract", description: "Rich in antioxidants with various health benefits" },
      { name: "Curcumin", description: "Active compound in turmeric with anti-inflammatory properties" },
      { name: "Chondroitin Sulfate", description: "Supports joint health and flexibility" },
      { name: "Resveratrol", description: "Natural compound with antioxidant properties" }
    ],
    intermediates: [
      { name: "Acetic Anhydride", description: "Used in synthesis of aspirin and other pharmaceuticals" },
      { name: "Benzaldehyde", description: "Organic compound used in various pharmaceutical syntheses" },
      { name: "Sodium Borohydride", description: "Reducing agent in pharmaceutical synthesis" },
      { name: "Ethyl Acetate", description: "Solvent used in drug extraction and purification" },
      { name: "p-Toluenesulfonic Acid", description: "Catalyst in various pharmaceutical reactions" },
      { name: "Acetone (Pharmaceutical Grade)", description: "Common solvent in pharmaceutical manufacturing" },
      { name: "Dimethylformamide (DMF)", description: "Polar solvent used in pharmaceutical synthesis" },
      { name: "Tetrahydrofuran (THF)", description: "Ether solvent used in pharmaceutical chemistry" },
      { name: "Isopropyl Alcohol", description: "Solvent and disinfectant in pharmaceutical applications" },
      { name: "Methanol (HPLC Grade)", description: "High-purity solvent for analysis and synthesis" }
    ]
  };

  const categoryInfo = {
    api: {
      title: "Active Pharmaceutical Ingredients",
      description: "High-quality active ingredients for pharmaceutical formulations",
      icon: FlaskRound
    },
    excipients: {
      title: "Excipients",
      description: "Essential inactive ingredients for pharmaceutical manufacturing",
      icon: Pill
    },
    nutraceuticals: {
      title: "Nutraceuticals",
      description: "Natural ingredients with health benefits for nutritional supplements",
      icon: TestTube
    },
    intermediates: {
      title: "Intermediates & Chemicals",
      description: "Specialized chemicals for pharmaceutical synthesis",
      icon: Package
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
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="api" className="flex items-center space-x-2" id="api">
                  <FlaskRound className="h-4 w-4" />
                  <span>APIs</span>
                </TabsTrigger>
                <TabsTrigger value="excipients" className="flex items-center space-x-2" id="excipients">
                  <Pill className="h-4 w-4" />
                  <span>Excipients</span>
                </TabsTrigger>
                <TabsTrigger value="nutraceuticals" className="flex items-center space-x-2" id="nutraceuticals">
                  <TestTube className="h-4 w-4" />
                  <span>Nutraceuticals</span>
                </TabsTrigger>
                <TabsTrigger value="intermediates" className="flex items-center space-x-2" id="intermediates">
                  <Package className="h-4 w-4" />
                  <span>Intermediates</span>
                </TabsTrigger>
              </TabsList>

              {Object.keys(products).map((category) => (
                <TabsContent key={category} value={category} className="space-y-8">
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-full mt-1">
                        {categoryInfo[category as keyof typeof categoryInfo].icon && 
                          <categoryInfo[category as keyof typeof categoryInfo].icon className="h-5 w-5 text-primary" />
                        }
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold mb-2">
                          {categoryInfo[category as keyof typeof categoryInfo].title}
                        </h2>
                        <p className="text-muted-foreground">
                          {categoryInfo[category as keyof typeof categoryInfo].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products[category as keyof typeof products].map((product, index) => (
                      <div 
                        key={index} 
                        className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow bg-white"
                      >
                        <h3 className="font-semibold mb-2 text-lg">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {product.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6 mt-6">
                    <h3 className="font-semibold mb-3">Need more information?</h3>
                    <p className="text-muted-foreground mb-3">
                      Our product catalog extends beyond what's listed here. 
                      If you're looking for specific pharmaceutical ingredients 
                      or have questions about our products, please contact us.
                    </p>
                    <div className="flex flex-wrap gap-4">
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
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1583911860204-6865e3c84cdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHF1YWxpdHklMjBjb250cm9sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Quality Control"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="heading-lg">Quality Assurance</h2>
                <p className="text-muted-foreground">
                  At Gautam Tradelink, quality is our highest priority. All products we supply 
                  undergo rigorous testing and quality control measures to ensure they meet 
                  international standards including IP, BP, and USP specifications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary text-primary-foreground rounded-full mt-1">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Certified Products</h3>
                      <p className="text-sm text-muted-foreground">
                        Products supplied with complete documentation and certificates of analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary text-primary-foreground rounded-full mt-1">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Reliable Sourcing</h3>
                      <p className="text-sm text-muted-foreground">
                        Sourced exclusively from approved manufacturers with established quality systems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary text-primary-foreground rounded-full mt-1">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium">Batch Consistency</h3>
                      <p className="text-sm text-muted-foreground">
                        Rigorous testing ensures consistent quality across all product batches
                      </p>
                    </div>
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

export default Products;
