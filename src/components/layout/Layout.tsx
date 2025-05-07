
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CallButton from "./CallButton";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Gautam Tradelink - Trusted Sourcing Partner</title>
        <meta name="description" content="Your trusted sourcing partner for pharmaceutical API and raw materials." />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
      <CallButton />
    </HelmetProvider>
  );
};

export default Layout;
