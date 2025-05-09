
import React from "react";
import { LucideIcon } from "lucide-react";

interface CategoryDescriptionProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const CategoryDescription = ({ title, description, icon: IconComponent }: CategoryDescriptionProps) => {
  return (
    <div className="bg-muted p-6 rounded-lg">
      <div className="flex md:items-start md:space-x-4">
        <div className="hidden md:block p-3 bg-white rounded-full mt-1">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
        
        {/* Mobile only version */}
        <div className="md:hidden flex flex-col items-center text-center w-full mb-4">
          <div className="p-3 bg-white rounded-full mb-3">
            <IconComponent className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
        
        {/* Desktop only version */}
        <div className="hidden md:block">
          <h2 className="text-xl font-semibold mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryDescription;
