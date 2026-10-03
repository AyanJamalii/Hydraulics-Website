import React from "react";
import styles from "../styles/Home.module.css";
import Categories from "../Components/Categories";

// Swiper modules and components import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { 
    id: 1, 
    type: "image", 
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    type: "image", 
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    type: "image", 
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop" 
  },
];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* HERO SLIDER SECTION WITH TOUCH SWIPE & DESKTOP ARROWS */}
      <section id="hero-section" data-aos="fade-up" className={styles.homeBox}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className={styles.mySwiper}
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id} className={styles.slide}>
              {s.type === "video" ? (
                <video
                  src={s.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.media}
                />
              ) : (
                <img src={s.src} alt={`Slide ${s.id}`} className={styles.media} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* OVERVIEW / SERVICES SECTION */}
      <section id="services-section" data-aos="fade-up" className={styles.overviewSection}>
        <h2 className={styles.sectionHeading}>
          Welcome to <span> M Adnan Hydraulics </span>
        </h2>
        <p className={styles.sectionDescription}>
          We are a trusted provider of high-performance hydraulic solutions, industrial fittings, and machinery equipment. Our goal is to supply engineering components built for high durability, precision, and zero pressure leakage in challenging industrial environments.
        </p>

        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Engineering Reliability</h3>
            <p>
              Delivering high-pressure hose assemblies and hydraulic units tested to withstand demanding industrial pressures.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Tailored Solutions</h3>
            <p>
              Custom fittings, power units, and control valve setups designed according to your exact machinery requirements.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Quality Standards</h3>
            <p>
              Sourcing high-grade raw materials and ISO-certified fluid components to ensure seamless continuous operation.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS / CATEGORIES SECTION */}
      <section id="products-section">
        <Categories />
      </section>

      {/* COMBINED ABOUT & CONTACT CTA SECTION */}
      <section id="about-section" data-aos="fade-up" className={styles.combinedSection}>
        <div className={styles.combinedContainer}>
          <p className={styles.tagline}>" ABOUT OUR BRAND "</p>
          <h2 className={styles.brandTitle}>Built On Quality & Trust</h2>
          <p className={styles.brandText}>
            At <strong>M Adnan Hydraulics</strong>, we are committed to delivering high-performance hydraulic solutions and heavy-duty machinery parts. What started as a vision to provide dependable industrial engineering components has grown into a trusted partner for hundreds of clients. We focus on durability, precision engineering, and fair pricing to ensure your operations run without downtime.
          </p>

          <div className={styles.divider}></div>

          {/* CONTACT SECTION TARGET */}
          <div id="contact-section">
            <h3 className={styles.ctaTitle}>Need Custom Hydraulic Equipment?</h3>
            <p className={styles.ctaSubtext}>
              Contact our technical team for assistance, product quotes, or custom machinery configuration.
            </p>
            <a href="mailto:sales@madnanhydraulics.com" className={styles.contactBtn}>
              Contact Our Technical Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;