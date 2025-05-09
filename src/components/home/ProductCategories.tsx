
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { FlaskRound, Pill, TestTube, Package } from "lucide-react";

const categories = [
  {
    id: "api",
    title: "Active Pharmaceutical Ingredients",
    icon: FlaskRound,
    description: "High-quality active ingredients for pharmaceutical formulations",
    examples: ["Aceclofenac", "Metformin HCl", "Azythromycin"],
    bgClass: "bg-primary/5"
  },
  {
    id: "excipients",
    title: "Excipients",
    icon: Pill,
    description: "Essential inactive ingredients for pharmaceutical manufacturing",
    examples: ["Microcrystalline Cellulose", "Lactose Monohydrate", "Aspartame"],
    bgClass: "bg-secondary/10"
  },
  {
    id: "nutraceuticals",
    title: "Nutraceuticals",
    icon: TestTube,
    description: "Natural ingredients with health benefits for nutritional supplements",
    examples: ["Vitamin A", "Vitamin C (plain/coated)", "Beta Carotene"],
    bgClass: "bg-emerald-50"
  },
  {
    id: "intermediates",
    title: "Intermediates & Chemicals",
    icon: Package,
    description: "Specialized chemicals for pharmaceutical synthesis",
    examples: ["P-aminophenol", "Benzyl chloride", "Lactic acid"],
    bgClass: "bg-amber-50"
  }
];

const ProductCategories = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our Product Categories</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of high-quality pharmaceutical ingredients,
            all sourced and distributed according to international standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={cn(
                "rounded-xl p-6 card-hover",
                category.bgClass
              )}
            >
              <div className="flex flex-col h-full">
                <div className="p-3 bg-white rounded-full w-fit mb-4 shadow-sm">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {category.description}
                </p>
                
                <div className="mt-auto">
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Featured Products:</p>
                    <ul className="space-y-1">
                      {category.examples.map((example, i) => (
                        <li key={i} className="text-sm">{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/products#${category.id}`} 
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    View All Products →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
