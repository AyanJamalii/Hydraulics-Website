import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import allProducts from "../Data/Products";
import Card from "../Components/Card";
import styles from "../styles/Products.module.css";

const categories = [
  { id: "all", name: "All Products" },
  { id: "pumps", name: "Pumps & Motors" },
  { id: "valves", name: "Valves & Controls" },
  { id: "fittings", name: "Cylinders & Accessories" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.category) {
      const cat = location.state.category;
      if (cat === "hoses") {
        setSelectedCategory("fittings");
      } else {
        setSelectedCategory(cat);
      }
    }
  }, [location.state]);

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((item) => item.category === selectedCategory);

  return (
    <div className={styles.productsPage}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Our Products</h1>
        <p className={styles.pageSubtitle}>
          Explore our wide range of high-performance hydraulic components
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className={styles.filterContainer}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`${styles.filterBtn} ${
              selectedCategory === cat.id ? styles.activeFilterBtn : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Render */}
      {filteredProducts && filteredProducts.length > 0 ? (
        <Card products={filteredProducts} />
      ) : (
        <p className={styles.noProducts}>No products found in this category.</p>
      )}
    </div>
  );
};

export default Products;