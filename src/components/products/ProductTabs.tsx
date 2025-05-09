
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FlaskRound, Pill, TestTube, Package } from "lucide-react";
import ProductDisplay from "./ProductDisplay";

interface CategoryInfo {
  [key: string]: {
    title: string;
    description: string;
    icon: typeof FlaskRound;
    products?: string[];
    productPairs?: { name: string; use: string }[];
  };
}

interface ProductTabsProps {
  activeCategory: string;
  categoryInfo: CategoryInfo;
  onTabChange: (value: string) => void;
}

const ProductTabs = ({ activeCategory, categoryInfo, onTabChange }: ProductTabsProps) => {
  return (
    <Tabs 
      defaultValue={activeCategory} 
      value={activeCategory} 
      onValueChange={onTabChange}
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
        const categoryData = categoryInfo[category];
        
        return (
          <TabsContent key={category} value={category}>
            <ProductDisplay category={category} categoryData={categoryData} />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default ProductTabs;
