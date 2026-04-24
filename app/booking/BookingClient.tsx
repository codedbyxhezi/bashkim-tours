"use client";

import styles from "./Booking.module.css";

const PHONE = "491234567890";

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

function createWhatsAppUrl(title: string) {
  const message = `Hallo 👋 ich interessiere mich für "${title}". Können Sie mir mehr Informationen geben?`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export default function BookingClient() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Fahrplan & Buchung</span>
          <h1 className={styles.title}>Verfügbare Routen</h1>
          <p className={styles.text}>
            Hier findest du unsere aktuellen Abfahrtsorte, Zeiten und
            Zwischenstopps. Für eine Buchung kannst du direkt per WhatsApp
            anfragen.
          </p>
        </div>
      </section>

      <section className={styles.scheduleSection}>
        <div className={styles.container}>
          <div className={styles.routeGroup}>
            <div className={styles.groupHeading}>
              <span>Deutschland</span>
              <h2>Deutschland ↔ Nordmazedonien</h2>
            </div>

            <div className={styles.scheduleGrid}>
              <article className={styles.scheduleCard}>
                <div className={styles.cardHeader}>
                  <h3>Nisjet nga Gjermania</h3>
                  <p>Abfahrten aus Deutschland</p>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Qyteti</th>
                        <th>Vendndodhja</th>
                        <th>Nisja</th>
                        <th>Arritja</th>
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
                  href={createWhatsAppUrl("Nisjet nga Gjermania")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Route anfragen
                </a>
              </article>

              <article className={styles.scheduleCard}>
                <div className={styles.cardHeader}>
                  <h3>Nisjet nga Maqedonia</h3>
                  <p>Richtung Deutschland</p>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Qyteti</th>
                        <th>Vendndodhja</th>
                        <th>Nisja</th>
                        <th>Arritja</th>
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
                  href={createWhatsAppUrl("Nisjet nga Maqedonia Richtung Deutschland")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Route anfragen
                </a>
              </article>
            </div>
          </div>

          <div className={styles.routeGroup}>
            <div className={styles.groupHeading}>
              <span>Schweiz</span>
              <h2>Schweiz ↔ Nordmazedonien</h2>
            </div>

            <div className={styles.scheduleGrid}>
              <article className={styles.scheduleCard}>
                <div className={styles.cardHeader}>
                  <h3>Nisjet nga Zvicra</h3>
                  <p>Abfahrten aus der Schweiz</p>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={`${styles.table} ${styles.swissTable}`}>
                    <thead>
                      <tr>
                        <th>Qyteti</th>
                        <th>Vendndodhja</th>
                        <th>E mërkurë</th>
                        <th>E premte</th>
                        <th>E shtunë</th>
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
                  href={createWhatsAppUrl("Nisjet nga Zvicra")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Route anfragen
                </a>
              </article>

              <article className={styles.scheduleCard}>
                <div className={styles.cardHeader}>
                  <h3>Nisjet nga Maqedonia</h3>
                  <p>Richtung Schweiz</p>
                </div>

                <div className={styles.tableWrapper}>
                  <table className={`${styles.table} ${styles.swissTable}`}>
                    <thead>
                      <tr>
                        <th>Qyteti</th>
                        <th>Vendndodhja</th>
                        <th>E mërkurë</th>
                        <th>E premte</th>
                        <th>E shtunë</th>
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
                  href={createWhatsAppUrl("Nisjet nga Maqedonia Richtung Schweiz")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Route anfragen
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}