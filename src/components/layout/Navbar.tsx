import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Brochure", path: "/brochure" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 bg-white shadow-sm",
        scrolled && "shadow-md py-3"
      )}
    >
      <div className="container-custom py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <img
            src="/lovable-uploads/0631f6cd-096b-4291-a6bc-01899124a80a.png"
            alt="Gautam Tradelink Logo"
            className="h-10 w-10 rounded-full bg-[#0F5E59] p-1"
          />
          <h1 className="text-xl font-bold text-[#0F5E59]">
            Gautam Tradelink
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
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

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-[#0F5E59] hover:text-[#0E766E] hover:bg-[#E7F9F3]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] bg-white shadow-md lg:hidden transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container-custom py-6 flex flex-col space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={cn(
                  "px-4 py-2 rounded-md transition-colors",
                  location.pathname === link.path
                    ? "bg-[#E7F9F3] text-[#0E766E]"
                    : "text-[#0F5E59] hover:bg-[#E7F9F3]/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="call">
              <Link to="/contact" onClick={closeMenu}>
                Call Us
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
