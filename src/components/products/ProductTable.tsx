
import React from "react";

interface ProductPair {
  name: string;
  use: string;
}

interface ProductTableProps {
  productPairs: ProductPair[];
}

const ProductTable = ({ productPairs }: ProductTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse mb-6">
        <thead className="bg-muted">
          <tr>
            <th className="text-left p-3 font-medium">Chemical Name</th>
            <th className="text-left p-3 font-medium">Application/Use</th>
          </tr>
        </thead>
        <tbody>
          {productPairs.map((pair, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-muted/40" : ""}>
              <td className="p-3 font-medium text-[#0F5E59]">{pair.name}</td>
              <td className="p-3">{pair.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
