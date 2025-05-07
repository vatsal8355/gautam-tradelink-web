
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CallButton from "./CallButton";
import { Helmet } from "react-helmet";

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Gautam Tradelink - Trusted Sourcing Partner</title>
        <meta name="description" content="Your trusted sourcing partner for pharmaceutical API and raw materials." />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
      <CallButton />
    </>
  );
};

export default Layout;
