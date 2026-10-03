import React from "react";
import styles from "../styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* BRAND & CONTACT INFO */}
        <div className={styles.brandSection}>
          <h2 className={styles.brandLogo}>MAH.</h2>
          <p className={styles.address}>
            123 Industrial Area, Sector 15,<br />
            Karachi, Pakistan
          </p>
          <p className={styles.contact}>📞 +92 300 1234567</p>
          <p className={styles.contact}>📞 +92 321 7654321</p>
          <p className={styles.contact}>✉️ sales@madnanhydraulics.com</p>
        </div>

        {/* HELP SECTION */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Help Us Help You</h4>
          <p className={styles.helpText}>
            Please let us know how we can improve your experience. Contact Us and let us know how we can help you.
          </p>
          <button className={styles.profileBtn}>Company Profile</button>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><a href="#products">View All Products</a></li>
            <li><a href="#terms">Terms and Conditions</a></li>
            <li><a href="#shipping">Shipping Policy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* PARENT GROUP TAGLINE */}
        <div className={styles.groupSection}>
          <p className={styles.groupText}>A COMPANY OF THE MAH GROUP</p>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className={styles.socialIcons}>
        <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
        <a href="#twitter" aria-label="Twitter"><TwitterIcon /></a>
        <a href="#youtube" aria-label="YouTube"><YouTubeIcon /></a>
        <a href="#instagram" aria-label="Instagram"><InstagramIcon /></a>
      </div>

      {/* COPYRIGHT BAR WITH HOVER TOOLTIP */}
      <div className={styles.copyrightBar}>
        <p>
          Copyright ©2026 M Adnan Hydraulics. Develop by{" "}
          <span className={styles.developerHover}>
            Ayan J.
            <span className={styles.tooltipBox}>
              <a href="mailto:here.ayanjamali@gmail.com" className={styles.hireBtn}>
                Hire him?
              </a>
            </span>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;