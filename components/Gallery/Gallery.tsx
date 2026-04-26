"use client";

import styles from "./Gallery.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function Gallery() {
  const { t } = useLanguage();

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
            <div className={styles.smallImage}>
              <img src="/images/bus2.jpg" alt="Bus innen" />
            </div>

            <div className={styles.smallImage}>
              <img src="/images/travel1.jpg" alt="Reise" />
            </div>

            <div className={styles.smallImage}>
              <img src="/images/travel2.jpg" alt="Pause" />
            </div>

            <div className={styles.smallImage}>
              <img src="/images/bus3.jpg" alt="Bus außen" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}