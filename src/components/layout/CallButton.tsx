import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CallButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <a
      href="tel:+919867041134"
      className="fixed bottom-6 right-6 z-40 lg:hidden"
      onClick={handleAnimation}
    >
      <Button
        size="lg"
        className={cn(
          "rounded-full w-14 h-14 bg-[#0E766E] shadow-lg hover:bg-[#0E766E]/90 transition-all",
          isAnimating && "animate-pulse"
        )}
      >
        <Phone className="h-6 w-6 text-white" />
      </Button>
    </a>
  );
};

export default CallButton;
