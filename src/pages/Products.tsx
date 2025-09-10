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
    if (["api", "excipients", "vitamins", "nutraceuticals"].includes(hash)) {
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
        "Acesulfame K",
        "Aspartame",
        "Citric Acid IP Mono/ Anhydrous",
        "Croscarmellose Sodium",
        "Crospovidone",
        "Ethylcellulose",
        "Folic Acid",
        "Glycine",
        "Glycerin",
        "HPMC E-5, E-15",
        "HPMC K 100M",
        "Inositol",
        "Lactose Monohydrate",
        "Magnesium Stearate",
        "Mannitol",
        "Microcrystalline Cellulose",
        "Neotame",
        "Omega 3/6 Fatty Acids",
        "Polyethylene Glycol (PEG)",
        "Propylparaben",
        "PVPK 30",
        "Sodium Citrate",
        "Sorbic acid",
        "Sorbitol",
        "Starch IP",
        "Stearic Acid",
        "Sucralose",
        "Talc (Pharmacuetical Grade)",
        "Taurine (Not for medical)",
        "Titanium Dioxide",
        "Xanathan Gum"
      ],
      aminoAcids: {
        title: "Amino Acids",
        description: "High-purity amino acids are used as building blocks for active ingredients, as excipients to enhance drug stability and release, in nutritional supplements, and as essential components in cell culture and media for drug research and production.",
        products: [
          "L-Arginine",
          "L-Aspartic Acid",
          "L-Cysteine",
          "L-Glutamic Acid",
          "L-Glutamine",
          "L-Histidine",
          "L-Isoleucine",
          "L-Leucine",
          "L-Lysine",
          "L-Methionine",
          "L-Phenylalanine",
          "L-Proline",
          "L-Threonine",
          "L-Tryptophan",
          "L-Tyrosine",
          "L-Valine"
        ]
      }
    },
    vitamins: {
      title: "Vitamins",
      description: "Vitamins are essential organic nutrients, needed in small amounts for growth, development, and the normal functioning of the body, which cannot be synthesized in sufficient quantities and must be obtained from diet or supplements.",
      icon: Package,
      products: [
        "Inositol",
        "Vitamin A Acetate/Palmitate (Derivates Available)",
        "Vitamin B1 (Thiamine)",
        "Vitamin B2 (Riboflavin)",
        "Vitamin B3 (Niacin/Niacinamide)",
        "Vitamin B5 (Calcium D Pantothenate) Feed Grade available",
        "Vitamin B6 (Pyridoxine HCl)",
        "Vitamin B7 (Biotin)",
        "Vitamin B9 (Folic Acid)",
        "Vitamin B12",
        "Vitamin C Plain/Coated (Ascorbic acid)",
        "Vitamin D2 Pure/Stabilised",
        "Vitamin D3 Pure/Stabalised",
        "Vitamin E 98%/50% (Liquid/Powder)",
        "Vitamin K1",
        "Vitamin K2 (Menaquinone-7)"
      ]
    },
    nutraceuticals: {
      title: "Nutraceuticals",
      description: "Natural ingredients with health benefits for nutritional supplements",
      icon: TestTube,
      products: [
        "Alpha-Lipoic Acid",
        "Astaxanthin",
        "Beta Carotene (Synthetic/Natural)",
        "Coenzyme Q10 (CoQ10)",
        "Creatine Monohydrate",
        "Curcumin",
        "Ginkgo Biloba",
        "Grape Seed Extract",
        "Inositol",
        "Lutein",
        "Lycopene",
        "Melatonin",
        "Omega 3/6 Fatty Acids",
        "Psyllium Husk",
        "Resveratrol",
        "Soy Protein Hydrolysate",
        "Spirulina",
        "Whey Protein Concentrate/ Isolate",
        "Zeaxanthin"
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
