
import React from "react";
import { Link } from "react-router-dom";
import CategoryDescription from "./CategoryDescription";
import ProductGrid from "./ProductGrid";
import ProductTable from "./ProductTable";
import { LucideIcon } from "lucide-react";

interface ProductCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  products?: string[];
  productPairs?: { name: string; use: string }[];
  aminoAcids?: {
    title: string;
    description: string;
  };
}

interface ProductDisplayProps {
  category: string;
  categoryData: ProductCategory;
}

const ProductDisplay = ({ category, categoryData }: ProductDisplayProps) => {
  const isIntermediates = category === "intermediates";

  return (
    <div className="space-y-8 pt-[2.5rem] sm:pt-0">
      <CategoryDescription 
        title={categoryData.title}
        description={categoryData.description}
        icon={categoryData.icon}
      />

      <div className="bg-white p-6 rounded-lg border border-border">
        <h3 className="text-lg font-medium mb-4">Our Products</h3>
        
        {isIntermediates && categoryData.productPairs ? (
          <ProductTable productPairs={categoryData.productPairs} />
        ) : (
          categoryData.products && <ProductGrid products={categoryData.products} />
        )}
        
        {categoryData.aminoAcids && (
          <div className="mt-8">
            <h4 className="text-md font-medium mb-3">{categoryData.aminoAcids.title}</h4>
            <p className="text-muted-foreground mb-4 text-sm">{categoryData.aminoAcids.description}</p>
          </div>
        )}
        
        <div className="mt-6 text-center text-muted-foreground italic">
          <p>This is just a selection of our most popular products. 
          Contact us for our full product catalog and specific requirements.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/contact" className="btn-primary inline-flex">
            Contact Us
          </Link>
          <Link to="/brochure" className="btn-outline inline-flex">
            Download Brochure
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
