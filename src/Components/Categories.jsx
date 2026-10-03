import React from "react";
import styles from "../styles/Home.module.css";

const categories = [
  { id: 1, name: "Hydraulic Hoses & Assemblies" },
  { id: 2, name: "Industrial Pumps & Motors" },
  { id: 3, name: "Control Valves & Actuators" },
  { id: 4, name: "Fittings & Adapters" },
  { id: 5, name: "Hydraulic Cylinders" },
  { id: 6, name: "Power Units & Accessories" },
];

const Categories = () => {
  return (
    <section data-aos="fade-up" className={styles.categoriesSection}>
      <h2 className={styles.categoriesHeading}>Our Product <span>Categories</span></h2>
      <p className={styles.categoriesSubheading}>
        Explore our wide range of high-performance hydraulic solutions
      </p>

      <div className={styles.categoryGrid}>
        {categories.map((cat) => (
          <div key={cat.id} className={styles.categoryCard}>
            {/* Light Color Placeholder Box for Image */}
            <div className={styles.imagePlaceholder}>
              <span>Image Preview</span>
            </div>
            <h3 className={styles.categoryName}>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;