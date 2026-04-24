import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* TEXT */}
        <div className={styles.heading}>
          <span className={styles.badge}>Galerie</span>
          <h2 className={styles.title}>
            Unterwegs mit Bashkim Tours
          </h2>
          <p className={styles.text}>
            Einblicke in unsere Busse, Reisen und Erlebnisse unterwegs.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          
          {/* BIG IMAGE */}
          <div className={styles.big}>
            <img src="/images/bus1.jpg" alt="Bus" />
          </div>

          {/* SMALL IMAGES */}
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