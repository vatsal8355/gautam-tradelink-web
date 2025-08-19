import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FileText, Download, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Brochure = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Function to handle brochure download
  const downloadBrochure = () => {
    // Create a link to the PDF file in the public directory
    const pdfUrl = "/Gautam Tradelink- Product.pdf";
    
    // Create a virtual link element
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Gautam Tradelink- Product.pdf"; // Set the download filename
    
    // Append to the document body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show toast notification
    toast({
      title: "Download Started",
      description: "Your brochure download has started.",
    });
  };

  // Function to handle inquiry submission
  const submitInquiry = () => {
    window.location.href = "/contact";
  };

  const productCategories = {
    api: {
      title: "Active Pharmaceutical Ingredients",
      description: "High-quality active ingredients for pharmaceutical formulations",
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
    }
  };

  return (
    <>
      <Helmet>
        <title>Product Brochure | Gautam Tradelink</title>
        <meta
          name="description"
          content="Download our comprehensive product brochure to learn more about Gautam Tradelink's pharmaceutical raw materials and services."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl text-white">
              {/* Updated color and shadow for heading */}
              <h1 className="heading-xl mb-6 text-white drop-shadow-md">
                Company Brochure
              </h1>
              <p className="text-lg opacity-90">
                Access detailed information about our company and our extensive product range.
              </p>
            </div>
          </div>
        </section>

        {/* Brochure Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="grid md:grid-cols-3">
                {/* Left Side - Preview */}
                <div className="md:col-span-1 bg-muted p-8 flex flex-col items-center justify-center">
                  <div className="w-48 h-64 bg-primary/5 border border-primary/20 rounded-md flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img 
                        src="/lovable-uploads/fc557fc8-41e3-4536-b0a1-feb7c4146f70.png" 
                        alt="Gautam Tradelink Logo" 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white text-xs py-1 px-2 text-center">
                      Product Brochure
                    </div>
                  </div>
                  <h3 className="font-semibold text-center text-lg">
                    Gautam Tradelink
                    <br />
                    Product Brochure
                  </h3>

                  <Button 
                    onClick={downloadBrochure} 
                    className="mt-6"
                    size="sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
                
                {/* Right Side - Content */}
                <div className="md:col-span-2 p-8">
                  <h2 className="heading-md mb-4">Company & Product Overview</h2>
                  
                  <p className="text-muted-foreground mb-6">
                    Our comprehensive brochure provides detailed information about 
                    Gautam Tradelink and our extensive product catalog. Explore our 
                    products and services below or download the complete brochure.
                  </p>

                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="products">Products</TabsTrigger>
                      <TabsTrigger value="quality">Quality</TabsTrigger>
                      <TabsTrigger value="contact">Contact</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                      <h3 className="text-xl font-semibold">Company Profile</h3>
                      <p>
                         Gautam Tradelink is a premium supplier of pharmaceutical raw materials, 
                         specializing in Active Pharmaceutical Ingredients (APIs), Excipients, 
                         and Nutraceuticals. We serve pharmaceutical 
                         manufacturers worldwide with high-quality ingredients that meet international standards.
                      </p>

                      <div className="mt-6 space-y-3">
                        <h4 className="text-lg font-medium">Our Mission</h4>
                        <p className="text-muted-foreground">
                          To be a trusted and reliable sourcing partner for the pharmaceutical industry 
                          by providing high-quality raw materials and excellent customer service.
                        </p>

                        <h4 className="text-lg font-medium">Our Vision</h4>
                        <p className="text-muted-foreground">
                          To become the preferred supplier of pharmaceutical raw materials globally, 
                          known for quality, reliability, and customer satisfaction.
                        </p>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-lg font-medium">Why Choose Us?</h4>
                        <ul className="mt-3 space-y-2 list-disc pl-5 text-muted-foreground">
                          <li>Extensive product range covering all major pharmaceutical categories</li>
                          <li>All products sourced from approved manufacturers with quality systems</li>
                          <li>Products meet IP, BP, and USP standards</li>
                          <li>Complete documentation with every order</li>
                          <li>Competitive pricing and flexible terms</li>
                          <li>Responsive customer service</li>
                        </ul>
                      </div>
                    </TabsContent>

                    <TabsContent value="products">
                      <div className="space-y-8">
                         <h3 className="text-xl font-semibold">Our Product Categories</h3>
                         <p className="text-muted-foreground">
                           We offer a comprehensive range of products across three main categories. 
                           Below is a selection of our most popular products in each category.
                         </p>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-medium text-primary">{productCategories.api.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{productCategories.api.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {productCategories.api.products.slice(0, 9).map((product, index) => (
                                <div key={index} className="text-sm p-2 bg-muted/50 rounded">{product}</div>
                              ))}
                            </div>
                            {productCategories.api.products.length > 9 && (
                              <p className="text-xs text-muted-foreground mt-2">
                                +{productCategories.api.products.length - 9} more products available
                              </p>
                            )}
                          </div>

                          <div>
                            <h4 className="text-lg font-medium text-primary">{productCategories.excipients.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{productCategories.excipients.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {productCategories.excipients.products.slice(0, 9).map((product, index) => (
                                <div key={index} className="text-sm p-2 bg-muted/50 rounded">{product}</div>
                              ))}
                            </div>
                            {productCategories.excipients.products.length > 9 && (
                              <p className="text-xs text-muted-foreground mt-2">
                                +{productCategories.excipients.products.length - 9} more products available
                              </p>
                            )}
                          </div>

                          <div>
                            <h4 className="text-lg font-medium text-primary">{productCategories.nutraceuticals.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{productCategories.nutraceuticals.description}</p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                              {productCategories.nutraceuticals.products.slice(0, 9).map((product, index) => (
                                <div key={index} className="text-sm p-2 bg-muted/50 rounded">{product}</div>
                              ))}
                            </div>
                            {productCategories.nutraceuticals.products.length > 9 && (
                              <p className="text-xs text-muted-foreground mt-2">
                                +{productCategories.nutraceuticals.products.length - 9} more products available
                              </p>
                            )}
                          </div>

                        </div>

                        <p className="text-center text-muted-foreground italic text-sm">
                          This is just a selection of our most popular products.
                          Contact us for our full product catalog and specific requirements.
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="quality" className="space-y-4">
                      <h3 className="text-xl font-semibold">Quality Assurance</h3>
                      <p>
                        At Gautam Tradelink, quality is our highest priority. All products we supply 
                        undergo rigorous testing and quality control measures to ensure they meet 
                        international standards including IP, BP, and USP specifications.
                      </p>

                      <div className="mt-6 space-y-4">
                        <div>
                          <h4 className="text-lg font-medium">Certification & Documentation</h4>
                          <p className="text-muted-foreground">
                            All our products are supplied with complete documentation including:
                          </p>
                          <ul className="mt-2 space-y-1 list-disc pl-5 text-muted-foreground">
                            <li>Certificate of Analysis (COA)</li>
                            <li>Material Safety Data Sheet (MSDS)</li>
                            <li>Certificate of Origin where applicable</li>
                            <li>Stability data when required</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium">Sourcing Standards</h4>
                          <p className="text-muted-foreground">
                            We source our products exclusively from manufacturers who:
                          </p>
                          <ul className="mt-2 space-y-1 list-disc pl-5 text-muted-foreground">
                            <li>Maintain strict quality control systems</li>
                            <li>Follow Good Manufacturing Practices (GMP)</li>
                            <li>Undergo regular audits</li>
                            <li>Have necessary certifications for their operations</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium">Quality Control Process</h4>
                          <p className="text-muted-foreground">
                            Our quality control process includes:
                          </p>
                          <ul className="mt-2 space-y-1 list-disc pl-5 text-muted-foreground">
                            <li>Verification of all incoming materials</li>
                            <li>Testing against pharmacopoeial standards</li>
                            <li>Ensuring batch-to-batch consistency</li>
                            <li>Proper storage and handling conditions</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="contact" className="space-y-4">
                      <h3 className="text-xl font-semibold">Contact Information</h3>
                      <p className="text-muted-foreground">
                        We're here to answer your questions and help you find the right products 
                        for your needs. Get in touch with our team using the contact details below.
                      </p>

                      <div className="mt-6 space-y-6">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-primary/10 rounded-full mt-1">
                            <Phone className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium">Phone</h4>
                            <p className="text-muted-foreground">Vatsalbhai Shah: +91 9867041134</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-primary/10 rounded-full mt-1">
                            <Mail className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium">Email</h4>
                            <p className="text-muted-foreground">Gautamtradelink@hotmail.com</p>
                            <p className="text-muted-foreground">Marketing.gautamtradelink@hotmail.com</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-primary/10 rounded-full mt-1">
                            <MapPin className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-medium">Office Address</h4>
                            <p className="text-muted-foreground">
                              901, Deepak Residency, Bhogilal Fadia Road,
                              <br />
                              Kandivali (west), Mumbai - 400067
                            </p>
                            <p className="text-sm mt-1">
                              <a 
                                href="https://maps.app.goo.gl/GZNrfEuecCwjwu9E7?g_st=iw" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80"
                              >
                                View on Google Maps →
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <h4 className="text-lg font-medium">Business Hours</h4>
                          <div className="mt-2 space-y-1">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Monday - Saturday:</span>
                              <span>10:00 AM - 6:30 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Sunday:</span>
                              <span>Closed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button onClick={downloadBrochure}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Brochure (PDF)
                    </Button>
                    
                    <Button variant="outline" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Custom Requirements?</h3>
              <p className="text-muted-foreground mb-4">
                If you're looking for specific products that may not be listed in our brochure, 
                or have custom requirements, please get in touch with our team. We work with an 
                extensive network of manufacturers and can source a wide range of pharmaceutical 
                raw materials to meet your needs.
              </p>
              <Link to="/contact" className="btn-primary inline-flex">
                Submit Inquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Brochure;
