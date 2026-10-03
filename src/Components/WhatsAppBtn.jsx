import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "../styles/WhatsAppBtn.module.css";

const WhatsAppBtn = () => {
  // Apna WhatsApp number yahan set karein (Country code ke saath, bina + sign ke)
  const phoneNumber = "03324962751";
  const defaultMessage = encodeURIComponent(
    "Hello M Adnan Hydraulics team! I am interested in your hydraulic products and services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className={styles.whatsappIcon} />
    </a>
  );
};

export default WhatsAppBtn;