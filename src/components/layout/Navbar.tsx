
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Brochure", path: "/brochure" },
  ];

  // Mobile Navbar Component
  const MobileNavbar = () => (
    <>
      <div className="flex items-center justify-between w-full py-2">
        {/* Logo and company name */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo/gautam-tradelink-logo.jpg"
            alt="Gautam Tradelink Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Hamburger Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-[#0F5E59]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] bg-white shadow-md transition-all duration-300 z-40 overflow-hidden",
          isOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <div className="container-custom flex flex-col space-y-2">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-md transition-colors font-medium",
                  location.pathname === link.path
                    ? "bg-[#E7F9F3] text-[#0E766E]"
                    : "text-[#0F5E59] hover:bg-[#E7F9F3]/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button asChild variant="call" className="w-full">
                <Link to="/contact">Call Us</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );

  // Desktop Navbar Component
  const DesktopNavbar = () => (
    <div className="flex items-center justify-between py-3">
      <Link to="/" className="flex items-center">
        <img
          src="/logo/gautam-tradelink-logo.jpg"
          alt="Gautam Tradelink Logo"
          className="h-16 w-auto"
        />
      </Link>

      <nav className="flex items-center">
        <div className="flex space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-[#0E766E]",
                location.pathname === link.path
                  ? "text-[#0E766E]"
                  : "text-[#0F5E59]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Button asChild variant="call" className="ml-10">
          <Link to="/contact">Call Us</Link>
        </Button>
      </nav>
    </div>
  );

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 bg-white",
        scrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div className="container-custom">
        {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
      </div>
    </header>
  );
};

export default Navbar;
