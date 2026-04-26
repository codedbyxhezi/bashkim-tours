"use client";

import TourCard from "@/components/TourCard/TourCard";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";
import styles from "./Tours.module.css";

export default function ToursPage() {
  const { t } = useLanguage();

  const trips = [
    {
      title: t.trips.albaniaTitle,
      location: t.trips.albaniaLocation,
      price: 499,
      image: "/images/albania.jpg",
    },
    {
      title: t.trips.kosovoTitle,
      location: t.trips.kosovoLocation,
      price: 299,
      image: "/images/kosovo.jpg",
    },
    {
      title: t.trips.montenegroTitle,
      location: t.trips.montenegroLocation,
      price: 459,
      image: "/images/montenegro.jpg",
    },
    {
      title: t.trips.turkeyTitle,
      location: t.trips.turkeyLocation,
      price: 699,
      image: "/images/turkey.jpg",
    },
  ];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>{t.popularTrips.badge}</span>
          <h1 className={styles.title}>{t.popularTrips.title}</h1>
          <p className={styles.text}>{t.popularTrips.text}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {trips.map((trip) => (
              <TourCard
                key={trip.title}
                title={trip.title}
                location={trip.location}
                price={trip.price}
                image={trip.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}