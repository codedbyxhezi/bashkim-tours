"use client";

import { useState } from "react";
import styles from "./Booking.module.css";

type RouteItem = {
  id: number;
  title: string;
  location: string;
  day: string;
  price: number;
  stops: string[];
};

const routes: RouteItem[] = [
  {
    id: 1,
    title: "Stuttgart → Skopje",
    location: "Abfahrt ab Stuttgart",
    day: "Jeden Freitag",
    price: 120,
    stops: ["Ulm", "München", "Salzburg", "Belgrad", "Skopje"],
  },
  {
    id: 2,
    title: "München → Gostivar",
    location: "Abfahrt ab München",
    day: "Jeden Samstag",
    price: 115,
    stops: ["Salzburg", "Belgrad", "Skopje", "Tetovo", "Gostivar"],
  },
  {
    id: 3,
    title: "Frankfurt → Ohrid",
    location: "Abfahrt ab Frankfurt",
    day: "Jeden Sonntag",
    price: 130,
    stops: ["Würzburg", "Nürnberg", "Belgrad", "Bitola", "Ohrid"],
  },
  {
    id: 4,
    title: "Nürnberg → Gostivar",
    location: "Abfahrt ab Nürnberg",
    day: "Jeden Donnerstag",
    price: 110,
    stops: ["München", "Salzburg", "Belgrad", "Skopje", "Tetovo", "Gostivar"],
  },
  {
    id: 5,
    title: "Stuttgart → Tetovo",
    location: "Abfahrt ab Stuttgart",
    day: "Jeden Mittwoch",
    price: 118,
    stops: ["Ulm", "München", "Salzburg", "Belgrad", "Skopje", "Tetovo"],
  },
  {
    id: 6,
    title: "München → Skopje",
    location: "Abfahrt ab München",
    day: "Jeden Montag",
    price: 105,
    stops: ["Salzburg", "Belgrad", "Niš", "Kumanovo", "Skopje"],
  },
];

const PHONE = "491234567890";

export default function BookingClient() {
  const [openRouteId, setOpenRouteId] = useState<number | null>(null);

  const toggleStops = (id: number) => {
    setOpenRouteId((prev) => (prev === id ? null : id));
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Buchung</span>
          <h1 className={styles.title}>Verfügbare Routen</h1>
          <p className={styles.text}>
            Wähle deine passende Route und klicke auf „Zwischenstopps“, um alle
            Haltestellen zu sehen. Für eine schnelle Anfrage kannst du uns direkt
            per WhatsApp schreiben.
          </p>
        </div>
      </section>

      <section className={styles.routesSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {routes.map((route) => {
              const isOpen = openRouteId === route.id;

              const message = `Hallo 👋 ich interessiere mich für die Route "${route.title}" (${route.day}) für ab ${route.price} €. Können Sie mir mehr Infos geben?`;

              const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(
                message
              )}`;

              return (
                <article key={route.id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.routeBadge}>Verfügbar</span>
                    <h2 className={styles.cardTitle}>{route.title}</h2>
                    <p className={styles.cardLocation}>{route.location}</p>
                  </div>

                  <div className={styles.infoBox}>
                    <div className={styles.infoRow}>
                      <span className={styles.label}>Reisetag</span>
                      <span className={styles.value}>{route.day}</span>
                    </div>

                    <div className={styles.infoRow}>
                      <span className={styles.label}>Preis</span>
                      <span className={styles.price}>ab {route.price} €</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={styles.stopsButton}
                    onClick={() => toggleStops(route.id)}
                    aria-expanded={isOpen}
                  >
                    <span>Zwischenstopps</span>
                    <span
                      className={`${styles.stopsIcon} ${
                        isOpen ? styles.stopsIconOpen : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`${styles.stopsWrapper} ${
                      isOpen ? styles.stopsWrapperOpen : ""
                    }`}
                  >
                    <ul className={styles.stopsList}>
                      {route.stops.map((stop) => (
                        <li key={stop} className={styles.stopItem}>
                          {stop}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    Route anfragen
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}