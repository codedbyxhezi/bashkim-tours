"use client";

import TourCard from "@/components/TourCard/TourCard";
import styles from "./PopularTrips.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function PopularTrips() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.badge}>{t.popularTrips.badge}</span>
          <h2 className={styles.title}>{t.popularTrips.title}</h2>
          <p className={styles.text}>{t.popularTrips.text}</p>
        </div>

        <div className={styles.grid}>
          <TourCard
            title={t.trips.albaniaTitle}
            location={t.trips.albaniaLocation}
            price={499}
            image="/images/albania.jpg"
          />

          <TourCard
            title={t.trips.kosovoTitle}
            location={t.trips.kosovoLocation}
            price={299}
            image="/images/kosovo.jpg"
          />

          <TourCard
            title={t.trips.montenegroTitle}
            location={t.trips.montenegroLocation}
            price={459}
            image="/images/montenegro.jpg"
          />

          <TourCard
            title={t.trips.turkeyTitle}
            location={t.trips.turkeyLocation}
            price={399}
            image="/images/turkey.jpg"
          />
        </div>
      </div>
    </section>
  );
}