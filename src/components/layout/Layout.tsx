
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CallButton from "./CallButton";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change with enhanced reliability
  useEffect(() => {
    // Method 1: Instant scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Method 2: Backup scroll after slight delay to ensure content is rendered
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    
    // Method 3: Using requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Gautam Tradelink - Trusted Sourcing Partner</title>
        <meta name="description" content="Your trusted sourcing partner for pharmaceutical API and raw materials." />
        <link rel="icon" href="/lovable-uploads/fc557fc8-41e3-4536-b0a1-feb7c4146f70.png" type="image/png" />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
      <CallButton />
    </HelmetProvider>
  );
};

export default Layout;
