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
        scrolled && "shadow-md py-2"
      )}
    >
      <div className="container-custom py-2 flex items-center justify-between">
        {/* Logo and Company Name - Visible on all screen sizes */}
        <Link to="/" className="flex items-center space-x-2 md:space-x-3" onClick={closeMenu}>
          <img
            src="/lovable-uploads/0631f6cd-096b-4291-a6bc-01899124a80a.png"
            alt="Gautam Tradelink Logo"
            className="h-8 w-8 md:h-12 md:w-12 rounded-full bg-[#0F5E59] p-1"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-lg md:text-2xl font-bold text-[#0F5E59] leading-tight">
              Gautam Tradelink
            </h1>
            <p className="text-xs md:text-sm font-semibold text-[#00BF7B]">Trusted Sourcing Partner</p>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center">
          <div className="flex space-x-8 xl:space-x-10">
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
          <Button asChild variant="call" size="sm" className="ml-6 xl:ml-10">
            <Link to="/contact">Call Us</Link>
          </Button>
        </nav>

        {/* Mobile Hamburger Menu Button - Only visible on mobile */}
        <div className="lg:hidden">
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

      {/* Mobile Navigation Menu - Slides down when hamburger is clicked */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] bg-white shadow-md lg:hidden transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container-custom py-6 flex flex-col space-y-4">
          <nav className="flex flex-col space-y-3">
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
            <Button asChild variant="call" className="mt-2">
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
