import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Dropdown States
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  // WhatsApp Business Inquiry Link Config
  const whatsappNumber = "923001234567"; // Client ka WhatsApp Number
  const whatsappMsg = encodeURIComponent("Hi! I would like to inquire about Madnan Hydraulics products.");

  return (
    <>
      <div data-aos="fade-down" className={styles.navbar}>
        <button 
          className={styles.hamburgerBtn} 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon className={styles.hamburgerIcon} />
        </button>

        <div className={styles.leftGroup}>
          <div className={styles.logo}>
            <Link to="/">MAH.</Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          
          {/* Products Dropdown Item */}
          <li 
            className={styles.dropdownContainer}
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <Link to="/products" className={styles.dropdownTrigger}>
              Products <KeyboardArrowDownIcon className={styles.arrowIcon} />
            </Link>

            {isProductsDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link to="/products?category=pumps">Hydraulic Pumps</Link>
                </li>
                <li>
                  <Link to="/products?category=valves">Valves & Controls</Link>
                </li>
                <li>
                  <Link to="/products?category=cylinders">Hydraulic Cylinders</Link>
                </li>
                <li>
                  <Link to="/products?category=hoses">Hoses & Fittings</Link>
                </li>
                <li>
                  <Link to="/products?category=motors">Motors & Power Packs</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Right CTA Button (Inquiry instead of Cart) */}
        <div className={styles.rightGroup}>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.whatsappNavBtn}
          >
            <WhatsAppIcon className={styles.waIcon} />
            <span className={styles.waText}>Inquire</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <div 
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={closeMobileMenu}
      >
        <div 
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.mobileMenuHeader}>
            <h3>MAH.</h3>
            <button className={styles.closeBtn} onClick={closeMobileMenu}>
              <CloseIcon />
            </button>
          </div>
          
          <nav className={styles.mobileMenuNav}>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
            
            {/* Mobile Dropdown Group */}
            <div className={styles.mobileDropdownGroup}>
              <div 
                className={styles.mobileDropdownHeader}
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              >
                <span>Products</span>
                <KeyboardArrowDownIcon 
                  style={{ 
                    transform: isMobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: '0.3s ease' 
                  }} 
                />
              </div>

              {isMobileProductsOpen && (
                <div className={styles.mobileSubMenu}>
                  <Link to="/products" onClick={closeMobileMenu}>All Products</Link>
                  <Link to="/products?category=pumps" onClick={closeMobileMenu}>Hydraulic Pumps</Link>
                  <Link to="/products?category=valves" onClick={closeMobileMenu}>Valves & Controls</Link>
                  <Link to="/products?category=cylinders" onClick={closeMobileMenu}>Hydraulic Cylinders</Link>
                  <Link to="/products?category=hoses" onClick={closeMobileMenu}>Hoses & Fittings</Link>
                  <Link to="/products?category=motors" onClick={closeMobileMenu}>Motors & Power Packs</Link>
                </div>
              )}
            </div>

            <Link to="/about" onClick={closeMobileMenu}>About Us</Link>
            <Link to="/services" onClick={closeMobileMenu}>Services</Link>
            <Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;