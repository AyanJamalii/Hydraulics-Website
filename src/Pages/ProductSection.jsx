    // import React, { useState, useEffect } from 'react';
    // import { useLocation } from 'react-router-dom';
    // import productsData from '../Data/productsData';
    // import Card from '../Components/Card'; // Aapka existing Card component
    // import styles from '../styles/ProductSection.module.css';

    // const categories = [
    //   { id: 'all', name: 'All Products' },
    //   { id: 'hoses', name: 'Hydraulic Hoses' },
    //   { id: 'fittings', name: 'Fittings & Adapters' },
    //   { id: 'valves', name: 'Valves & Pumps' },
    // ];

    // const ProductSection = () => {
    //   const [selectedCategory, setSelectedCategory] = useState('all');
    //   const location = useLocation();

    //   // Navbar dropdown se specific category trigger karne ke liye
    //   useEffect(() => {
    //     if (location.state && location.state.category) {
    //       setSelectedCategory(location.state.category);
    //     }
    //   }, [location]);

    //   const filteredProducts = selectedCategory === 'all' 
    //     ? productsData 
    //     : productsData.filter(item => item.category === selectedCategory);

    //   return (
    //     <section id="products-section" className={styles.sectionContainer}>
    //       <h2 className={styles.sectionTitle}>Our Products</h2>

    //       {/* Top Circular Category Badges */}
    //       <div className={styles.categoryWrapper}>
    //         {categories.map((cat) => (
    //           <div 
    //             key={cat.id}
    //             onClick={() => setSelectedCategory(cat.id)}
    //             className={`${styles.categoryCircle} ${selectedCategory === cat.id ? styles.activeCategory : ''}`}
    //           >
    //             <span>{cat.name}</span>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Dynamic Products Grid using existing Card */}
    //       <div className={styles.productGrid}>
    //         {filteredProducts.map(product => (
    //           <Card key={product.id} data={product} />
    //         ))}
    //       </div>
    //     </section>
    //   );
    // };

    // export default ProductSection;