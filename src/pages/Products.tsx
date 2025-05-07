
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

              {Object.keys(categoryInfo).map((category) => (
                <TabsContent key={category} value={category} className="space-y-8">
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white rounded-full mt-1">
                        {(() => {
                          const IconComponent = categoryInfo[category as keyof typeof categoryInfo].icon;
                          return <IconComponent className="h-5 w-5 text-primary" />;
                        })()}
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

                  <div className="bg-white p-6 rounded-lg border border-border">
                    <h3 className="text-lg font-medium mb-4">Product Categories Coming Soon</h3>
                    <p className="text-muted-foreground mb-4">
                      Our comprehensive product catalog is currently being updated. Please contact us for specific product inquiries in the meantime.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
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
