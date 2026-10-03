import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Card.module.css";

const Card = ({ products = [], limit }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let displayCards = products;
  if (limit) {
    displayCards = isMobile ? products.slice(0, 3) : products.slice(0, limit);
  }

  return (
    <div data-aos="fade-up" className={styles.grid}>
      {displayCards.map((card) => {
        // Direct first image pick karein naye array layout se
        const currentImg = card.images ? card.images[0] : "";

        return (
          <div
            key={card.id}
            className={styles.card}
            onClick={() => navigate(`/product/${card.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.cardImg}>
              <img src={currentImg} alt={card.title} />
            </div>
            <div className={styles.cardBody}>
              <h6>{card.title}</h6>
              <div className={styles.bottomRow}>
                <p>PKR {card.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;