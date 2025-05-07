
import { Helmet } from "react-helmet";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Brochure = () => {
  // Function to simulate brochure download
  const downloadBrochure = () => {
    // Placeholder for actual download functionality
    // In a real implementation, this would trigger download of an actual PDF file
    console.log("Brochure download triggered");
    
    // Show toast notification
    const event = new CustomEvent("toast", {
      detail: {
        title: "Download Started",
        description: "Your brochure download has started.",
        type: "success"
      }
    });
    window.dispatchEvent(event);
    
    // Simulating download behavior
    setTimeout(() => {
      alert("In a real implementation, this would download the actual brochure PDF. For now, this is just a simulation.");
    }, 500);
  };

  return (
    <>
      <Helmet>
        <title>Download Brochure | Gautam Tradelink</title>
        <meta
          name="description"
          content="Download our product brochure to learn more about Gautam Tradelink's pharmaceutical raw materials and services."
        />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl text-white">
              <h1 className="heading-xl mb-6">Download Our Brochure</h1>
              <p className="text-lg opacity-90">
                Access detailed information about our products and services.
              </p>
            </div>
          </div>
        </section>

        {/* Brochure Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid md:grid-cols-5">
                  {/* Left Side - Preview */}
                  <div className="md:col-span-2 bg-muted p-8 flex flex-col items-center justify-center">
                    <div className="w-48 h-64 bg-primary/5 border border-primary/20 rounded-md flex items-center justify-center mb-4">
                      <FileText className="h-16 w-16 text-primary opacity-60" />
                    </div>
                    <h3 className="font-semibold text-center text-lg">
                      Gautam Tradelink
                      <br />
                      Product Brochure
                    </h3>
                  </div>
                  
                  {/* Right Side - Content */}
                  <div className="md:col-span-3 p-8">
                    <h2 className="heading-md mb-4">Company & Product Brochure</h2>
                    
                    <p className="text-muted-foreground mb-6">
                      Our comprehensive brochure provides detailed information about 
                      Gautam Tradelink and our extensive product catalog. Download 
                      it to learn more about:
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start space-x-3">
                        <span className="text-primary">•</span>
                        <span>Complete product listings with specifications</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary">•</span>
                        <span>Quality standards and certifications</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary">•</span>
                        <span>Company overview and capabilities</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-primary">•</span>
                        <span>Ordering and delivery information</span>
                      </li>
                    </ul>
                    
                    <Button 
                      onClick={downloadBrochure} 
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure (PDF)
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-primary/5 rounded-xl p-6">
                <h3 className="font-semibold mb-4">Need More Information?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have specific questions or need detailed information about particular 
                  products that may not be covered in our brochure, please don't hesitate to 
                  contact us directly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="btn-primary">
                    Contact Us
                  </a>
                  <a href="tel:+919867041134" className="btn-outline">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Brochure;
