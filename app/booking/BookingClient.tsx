"use client";

import { useMemo, useState } from "react";
import styles from "./Booking.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

const PHONE = "491234567890"; // deine Nummer ohne +

const germanyRoutes = [
  ["Dortmund", "ZOB Steinstrasse", "04:30", "21:15"],
  ["Bochum", "Wittener Straße am Bahnhof", "05:00", "20:45"],
  ["Essen", "Hauptbahnhof", "05:25", "20:20"],
  ["Duisburg", "Merkator Straße", "06:00", "19:45"],
  ["Düsseldorf", "Fernbusstelle Worringer Straße 140", "06:30", "19:15"],
  ["Leverkusen", "Hauptbahnhof", "07:20", "18:25"],
  ["Bonn", "Hauptbahnhof", "08:30", "17:15"],
  ["Frankfurt", "Hbf Südseite", "11:00", "14:45"],
  ["Mannheim", "ZOB Heinrich-von-Stephan-Straße", "12:30", "13:15"],
  ["Karlsruhe", "ZOB Südseite Hauptbahnhof", "13:30", "12:15"],
  ["Stuttgart", "Airport Busterminal", "15:00", "10:45"],
  ["Ulm", "Fernbushaltestelle Ulm-Böfingen", "16:15", "09:30"],
  ["München", "Zentraler Omnibusbahnhof Hackerbrücke", "17:50", "07:30"],
];

const germanyMacedoniaRoutes = [
  ["Ohër", "Stacioni i Autobuseve", "04:00", "18:00"],
  ["Strugë", "Stacioni i Autobuseve", "04:15", "17:45"],
  ["Kërçovë", "Stacioni i Autobuseve", "05:00", "17:00"],
  ["Gostivar", "Stacioni i Autobuseve", "06:00", "16:00"],
  ["Tetovë", "Stacioni i Autobuseve", "07:00", "15:00"],
  ["Shkup", "Stacioni i Autobuseve", "08:00", "14:00"],
  ["Kumanovë", "Stacioni i Autobuseve", "09:00", "13:00"],
];

const swissRoutes = [
  ["Sion", "Xhamia", "13:00", "13:00", "06:00"],
  ["Lausanne", "Parking du Velodrome", "14:00", "14:00", "07:00"],
  ["Bern", "Carparkplatz Neufeld", "15:30", "15:30", "08:30"],
  ["Wiedlisbach", "Baselstrasse 26A", "16:30", "16:30", "09:00"],
  ["Olten", "Busterminal Bahnhof SBB", "17:30", "17:30", "09:30"],
  ["Basel", "Badischer Bahnhof", "16:00", "16:00", "08:00"],
  ["Luzern", "Raststätte Neuenkirch", "20:00", "20:00", "08:00"],
  ["Zürich", "Carparkplatz Sihlquai", "19:00", "19:00", "11:00"],
  ["Frauenfeld", "Marktplatz", "18:00", "18:00", "10:00"],
  ["Will", "Bahnhof SBB", "17:30", "17:30", "09:30"],
  ["St. Gallen", "Lagerstrasse", "17:00", "17:00", "09:00"],
  ["Amriswil", "Egelmoosstrasse Parking te stadioni", "16:30", "16:30", "08:30"],
  ["Kreuzlingen", "Bärenplatz", "16:00", "16:00", "08:00"],
  ["Sargans", "Bahnhof SBB", "15:00", "15:00", "07:00"],
  ["Chur", "Bahnhofplatz", "14:00", "14:00", "06:00"],
  ["Bellinzona", "Marche", "21:00", "21:00", "15:00"],
];

const swissMacedoniaRoutes = [
  ["Prilep", "Stacioni i Autobuseve", "08:30", "-", "08:30"],
  ["Kërçovë", "Stacioni i Autobuseve", "09:30", "16:00", "10:00"],
  ["Gostivar", "Stacioni i Autobuseve", "11:00", "18:00", "11:00"],
  ["Tetovë", "Stacioni i Autobuseve", "12:00", "18:30", "12:00"],
  ["Shkup", "Stacioni i Autobuseve", "13:00", "19:00", "13:00"],
  ["Kumanovë", "Stacioni i Autobuseve", "14:00", "19:30", "14:00"],
];

const routeOptions = [
  {
    label: "Deutschland → Nordmazedonien",
    cities: germanyRoutes.map((route) => route[0]),
    days: ["Freitag"],
  },
  {
    label: "Nordmazedonien → Deutschland",
    cities: germanyMacedoniaRoutes.map((route) => route[0]),
    days: ["Freitag"],
  },
  {
    label: "Schweiz → Nordmazedonien",
    cities: swissRoutes.map((route) => route[0]),
    days: ["Mittwoch", "Freitag", "Samstag"],
  },
  {
    label: "Nordmazedonien → Schweiz",
    cities: swissMacedoniaRoutes.map((route) => route[0]),
    days: ["Mittwoch", "Freitag", "Samstag"],
  },
];

function createQuickWhatsAppUrl(route: string) {
  const message = `Hallo, ich möchte eine Reise buchen.

Route: ${route}
Abfahrtsort:
Ziel:
Datum:
Personen:

Bitte bestätigen Sie mir, ob noch Plätze verfügbar sind.
Vielen Dank!`;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

function createPreparedWhatsAppUrl({
  direction,
  city,
  day,
  persons,
}: {
  direction: string;
  city: string;
  day: string;
  persons: number;
}) {
  const message = `Hallo, ich möchte eine Reise buchen.

Route: ${direction}
Abfahrtsort: ${city}
Reisetag: ${day}
Personen: ${persons}

Bitte bestätigen Sie mir, ob noch Plätze verfügbar sind.
Falls keine Plätze verfügbar sind, informieren Sie mich bitte über eine Alternative.

Vielen Dank!`;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export default function BookingClient() {
  const { t } = useLanguage();

  const [direction, setDirection] = useState(routeOptions[0].label);
  const [city, setCity] = useState(routeOptions[0].cities[0]);
  const [day, setDay] = useState(routeOptions[0].days[0]);
  const [persons, setPersons] = useState(1);

  const selectedRoute = useMemo(() => {
    return routeOptions.find((route) => route.label === direction) ?? routeOptions[0];
  }, [direction]);

  const handleDirectionChange = (value: string) => {
    const nextRoute =
      routeOptions.find((route) => route.label === value) ?? routeOptions[0];

    setDirection(nextRoute.label);
    setCity(nextRoute.cities[0]);
    setDay(nextRoute.days[0]);
  };

  const preparedWhatsAppUrl = createPreparedWhatsAppUrl({
    direction,
    city,
    day,
    persons,
  });

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>{t.booking.badge}</span>
          <h1 className={styles.title}>{t.booking.title}</h1>
          <p className={styles.text}>{t.booking.subtitle}</p>
        </div>
      </section>

      <section className={styles.requestSection}>
        <div className={styles.container}>
          <div className={styles.requestBox}>
            <div className={styles.requestIntro}>
              <span>{t.booking.quickRequest}</span>
              <h2>{t.booking.requestTitle}</h2>
              <p>{t.booking.requestText}</p>
            </div>

            <div className={styles.requestForm}>
              <div className={styles.formField}>
                <label htmlFor="direction">{t.booking.direction}</label>
                <select
                  id="direction"
                  value={direction}
                  onChange={(event) => handleDirectionChange(event.target.value)}
                >
                  {routeOptions.map((route) => (
                    <option key={route.label} value={route.label}>
                      {route.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formField}>
                <label htmlFor="city">{t.booking.city}</label>
                <select
                  id="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                >
                  {selectedRoute.cities.map((cityOption) => (
                    <option key={cityOption} value={cityOption}>
                      {cityOption}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formField}>
                <label htmlFor="day">{t.booking.day}</label>
                <select
                  id="day"
                  value={day}
                  onChange={(event) => setDay(event.target.value)}
                >
                  {selectedRoute.days.map((dayOption) => (
                    <option key={dayOption} value={dayOption}>
                      {dayOption}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formField}>
                <label htmlFor="persons">{t.booking.persons}</label>
                <input
                  id="persons"
                  type="number"
                  min="1"
                  value={persons}
                  onChange={(event) => setPersons(Number(event.target.value))}
                />
              </div>
            </div>

            <a
              href={preparedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.requestButton}
            >
              {t.booking.whatsappButton}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.scheduleSection}>
        <div className={styles.container}>
          <div className={styles.routeGroup}>
            <div className={styles.groupHeading}>
              <span>{t.booking.germany}</span>
              <h2>{t.booking.germanyTitle}</h2>
            </div>

            <div className={styles.scheduleGrid}>
              <article className={styles.scheduleCard}>
                <div className={styles.cardHeader}>
                  <h3>Nisjet nga Gjermania</h3>
                  <p>{t.booking.fromGermany}</p>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>{t.booking.tableCity}</th>
                        <th>{t.booking.tableLocation}</th>
                        <th>{t.booking.departure}</th>
                        <th>{t.booking.arrival}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {germanyRoutes.map((route) => (
                        <tr key={route[0]}>
                          <td>{route[0]}</td>
                          <td>{route[1]}</td>
                          <td>{route[2]}</td>
                          <td>{route[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <a
                  href={createQuickWhatsAppUrl("Deutschland → Nordmazedonien")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  {t.booking.routeRequest}
                </a>
              </article>

              <article className={styles.scheduleCard}>
                <div className={styles.cardHeader}>
                  <h3>Nisjet nga Maqedonia</h3>
                  <p>{t.booking.toGermany}</p>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>{t.booking.tableCity}</th>
                        <th>{t.booking.tableLocation}</th>
                        <th>{t.booking.departure}</th>
                        <th>{t.booking.arrival}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {germanyMacedoniaRoutes.map((route) => (
                        <tr key={route[0]}>
                          <td>{route[0]}</td>
                          <td>{route[1]}</td>
                          <td>{route[2]}</td>
                          <td>{route[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <a
                  href={createQuickWhatsAppUrl("Nordmazedonien → Deutschland")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  {t.booking.routeRequest}
                </a>
              </article>
            </div>
          </div>

          <div className={styles.routeGroup}>
            <div className={styles.groupHeading}>
              <span>{t.booking.switzerland}</span>
              <h2>{t.booking.switzerlandTitle}</h2>
            </div>

            <div className={styles.scheduleGrid}>
              <article className={styles.scheduleCard}>
                <div className={styles.cardHeader}>
                  <h3>Nisjet nga Zvicra</h3>
                  <p>{t.booking.fromSwitzerland}</p>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={`${styles.table} ${styles.swissTable}`}>
                    <thead>
                      <tr>
                        <th>{t.booking.tableCity}</th>
                        <th>{t.booking.tableLocation}</th>
                        <th>{t.booking.wednesday}</th>
                        <th>{t.booking.friday}</th>
                        <th>{t.booking.saturday}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {swissRoutes.map((route) => (
                        <tr key={route[0]}>
                          <td>{route[0]}</td>
                          <td>{route[1]}</td>
                          <td>{route[2]}</td>
                          <td>{route[3]}</td>
                          <td>{route[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <a
                  href={createQuickWhatsAppUrl("Schweiz → Nordmazedonien")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  {t.booking.routeRequest}
                </a>
              </article>

              <article className={styles.scheduleCard}>
                <div className={styles.cardHeader}>
                  <h3>Nisjet nga Maqedonia</h3>
                  <p>{t.booking.toSwitzerland}</p>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={`${styles.table} ${styles.swissTable}`}>
                    <thead>
                      <tr>
                        <th>{t.booking.tableCity}</th>
                        <th>{t.booking.tableLocation}</th>
                        <th>{t.booking.wednesday}</th>
                        <th>{t.booking.friday}</th>
                        <th>{t.booking.saturday}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {swissMacedoniaRoutes.map((route) => (
                        <tr key={route[0]}>
                          <td>{route[0]}</td>
                          <td>{route[1]}</td>
                          <td>{route[2]}</td>
                          <td>{route[3]}</td>
                          <td>{route[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <a
                  href={createQuickWhatsAppUrl("Nordmazedonien → Schweiz")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  {t.booking.routeRequest}
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}