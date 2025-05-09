
import React from "react";

interface ProductGridProps {
  products: string[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product: string, index: number) => (
        <div key={index} className="p-3 bg-muted rounded-md text-center">
          <span className="font-medium text-[#0F5E59]">{product}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
