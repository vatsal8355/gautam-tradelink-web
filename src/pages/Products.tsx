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
    if (["api", "excipients", "nutraceuticals"].includes(hash)) {
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
        "Albendazole",
        "Amlodipine",
        "Amoxicillin Trihydrate",
        "Atorvastatin Calcium",
        "Azythromycin",
        "Ceftriaxone Sodium",
        "Celecoxib",
        "Ciprofloxacin",
        "Diclofenac Sodium",
        "Domperidone",
        "Drotaverine HCL",
        "Enrofloxacin",
        "Esomeprazole",
        "Etoricoxib",
        "Febuxostat",
        "Hydroquinone",
        "Ibuprofen",
        "Losartan Potassium",
        "Metformin HCL",
        "Montelukast sodium",
        "Mycophenolate Mofetil",
        "Nitrofurantoin Mono",
        "Omeprazole",
        "Prednisone",
        "Simvastatin",
        "Sitagliptin",
        "Sucralfate",
        "Telmisartan",
        "Trimethoprim",
        "Tropicamide",
        "Xylometazoline"
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
    }
  };

  return (
    <>
      <Helmet>
        <title>Products | Gautam Tradelink</title>
        <meta
          name="description"
          content="Explore our comprehensive range of high-quality pharmaceutical ingredients including APIs, excipients, and nutraceuticals."
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
                categorized into three main groups. All our products are sourced from trusted 
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
