
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
      className="fixed bottom-6 right-6 z-40"
      onClick={handleAnimation}
    >
      <Button
        size="lg"
        className={cn(
          "rounded-full w-14 h-14 bg-secondary shadow-lg hover:bg-secondary/90 transition-all",
          isAnimating && "animate-pulse"
        )}
      >
        <Phone className="h-6 w-6 text-foreground" />
      </Button>
    </a>
  );
};

export default CallButton;
