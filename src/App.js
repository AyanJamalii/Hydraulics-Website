import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer";
import Home from "./Pages/Home.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Junior from "./Pages/Junior.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import WhatsAppBtn from "./Components/WhatsAppBtn.jsx"; // <-- WhatsApp Component import kar liya

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      easing: "ease-out-cubic", 
      once: true,    // animate only once per scroll
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/junior" element={<Junior />} />
      </Routes>
      <Footer />
      <WhatsAppBtn /> {/* <-- Global Floating Button */}
    </Router>
  );
}

export default App;