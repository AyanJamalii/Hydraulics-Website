import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const navigate = useNavigate();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  // Products Category Navigation Handler
  const handleCategoryNav = (e, categoryKey) => {
    e.preventDefault();
    closeMobileMenu();
    setIsProductsDropdownOpen(false);

    // /products page par routing with category state
    navigate("/products", { state: { category: categoryKey } });
  };

  const whatsappNumber = "923001234567";
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
          
          {/* Products Dropdown */}
          <li 
            className={styles.dropdownContainer}
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <Link 
              to="/products" 
              className={styles.dropdownTrigger}
              onClick={(e) => handleCategoryNav(e, 'all')}
            >
              Products <KeyboardArrowDownIcon className={styles.arrowIcon} />
            </Link>

            {isProductsDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <a href="/products" onClick={(e) => handleCategoryNav(e, 'hoses')}>
                    Hydraulic Hoses
                  </a>
                </li>
                <li>
                  <a href="/products" onClick={(e) => handleCategoryNav(e, 'fittings')}>
                    Fittings & Adapters
                  </a>
                </li>
                <li>
                  <a href="/products" onClick={(e) => handleCategoryNav(e, 'valves')}>
                    Valves & Pumps
                  </a>
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

      {/* Mobile Sidebar */}
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
                  <a href="/products" onClick={(e) => handleCategoryNav(e, 'all')}>All Products</a>
                  <a href="/products" onClick={(e) => handleCategoryNav(e, 'hoses')}>Hydraulic Hoses</a>
                  <a href="/products" onClick={(e) => handleCategoryNav(e, 'fittings')}>Fittings & Adapters</a>
                  <a href="/products" onClick={(e) => handleCategoryNav(e, 'valves')}>Valves & Pumps</a>
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