import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx"; // <-- Dedicated Products Page
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import WhatsAppBtn from "./Components/WhatsAppBtn.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> {/* <-- Main Products Route */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
      <WhatsAppBtn />
    </Router>
  );
}

export default App;