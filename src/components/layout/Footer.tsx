
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/public/lovable-uploads/0631f6cd-096b-4291-a6bc-01899124a80a.png"
                alt="Gautam Tradelink Logo"
                className="h-10 w-10 bg-white rounded-full p-1"
              />
              <h3 className="text-xl font-semibold">Gautam Tradelink</h3>
            </div>
            <p className="text-sm opacity-80">
              Your trusted sourcing partner for pharmaceutical API and raw materials.
              We provide high-quality sourced IP, BP, USP standard products both locally and globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-secondary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/brochure" className="hover:text-secondary transition-colors">
                  Download Brochure
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products#api" className="hover:text-secondary transition-colors">
                  Active Pharmaceutical Ingredients
                </Link>
              </li>
              <li>
                <Link to="/products#excipients" className="hover:text-secondary transition-colors">
                  Excipients
                </Link>
              </li>
              <li>
                <Link to="/products#nutraceuticals" className="hover:text-secondary transition-colors">
                  Nutraceuticals
                </Link>
              </li>
              <li>
                <Link to="/products#intermediates" className="hover:text-secondary transition-colors">
                  Intermediates & Chemicals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">+91 9867041134</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm flex flex-col">
                  <a href="mailto:Gautamtradelink@hotmail.com" className="hover:text-secondary transition-colors">
                    Gautamtradelink@hotmail.com
                  </a>
                  <a href="mailto:Marketing.gautamtradelink@hotmail.com" className="hover:text-secondary transition-colors">
                    Marketing.gautamtradelink@hotmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  901, Deepak Residency, Bhogilal Fadia Road, Kandivali (west), Mumbai - 400067
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Gautam Tradelink. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-xs opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
