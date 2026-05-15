"use client";

import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

const images = [
  { src: "/images/bus1.jpg", alt: "Bus" },
  { src: "/images/bus2.jpg", alt: "Bus innen" },
  { src: "/images/travel1.jpg", alt: "Reise" },
  { src: "/images/travel2.jpg", alt: "Pause" },
  { src: "/images/bus3.jpg", alt: "Bus außen" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.badge}>{t.gallery.badge}</span>
          <h2 className={styles.title}>{t.gallery.title}</h2>
          <p className={styles.text}>{t.gallery.text}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.big}>
            <img src="/images/bus1.jpg" alt="Bus" />
          </div>

          <div className={styles.small}>
            {images.slice(1).map((image) => (
              <div key={image.src} className={styles.smallImage}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.mobileCarousel}>
          <div className={styles.carouselCard}>
            <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
          </div>

          <div className={styles.dots}>
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={`${styles.dot} ${
                  activeIndex === index ? styles.activeDot : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}