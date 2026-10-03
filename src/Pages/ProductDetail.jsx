import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { menProducts, womenProducts, juniorProducts } from "../Data/Products"; 
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();

  // Merge all products
  const allProducts = [...menProducts, ...womenProducts, ...juniorProducts];
  const product = allProducts.find((p) => p.id.toString() === id);

  // Fallback images array
  const images = product?.images || [];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundContent}>
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const specs = product.specifications || {};
  const applications = product.applications || [];

  return (
    <div className={styles.productDetailContainer}>
      {/* Left: Product Images */}
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img 
            src={images[selectedImage] || ""} 
            alt={product.title}
            className={styles.productImage}
          />
        </div>

        {/* Image Thumbnails */}
        {images.length > 1 && (
          <div className={styles.thumbnailContainer} style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                onClick={() => setSelectedImage(idx)}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  border: selectedImage === idx ? '2px solid #000' : '1px solid #ddd'
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right: Technical Info */}
      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          <h1 className={styles.productName}>{product.title}</h1>
          <div className={styles.productBadge}>Industrial Grade</div>
        </div>

        {/* Price Section */}
        <div className={styles.priceSection}>
          <div className={styles.priceContainer}>
            <span className={styles.priceLabel}>Price</span>
            <span className={styles.price}>PKR {product.price?.toLocaleString()}</span>
          </div>
        </div>

        {/* Description */}
        <div className={styles.productDetails} style={{ marginTop: '20px' }}>
          <h4>Description</h4>
          <p>{product.description}</p>
        </div>

        {/* Technical Specifications */}
        <div className={styles.productDetails} style={{ marginTop: '20px' }}>
          <h4>Technical Specifications</h4>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <strong>Max Pressure:</strong> {specs.maxPressure || "N/A"}
            </div>
            <div className={styles.infoItem}>
              <strong>Flow Rate:</strong> {specs.flowRate || "N/A"}
            </div>
            <div className={styles.infoItem}>
              <strong>Fluid Type:</strong> {specs.fluidType || "N/A"}
            </div>
            <div className={styles.infoItem}>
              <strong>Operating Temp:</strong> {specs.operatingTemp || "N/A"}
            </div>
          </div>
        </div>

        {/* Applications */}
        {applications.length > 0 && (
          <div className={styles.productDetails} style={{ marginTop: '20px' }}>
            <h4>Typical Applications</h4>
            <ul>
              {applications.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;