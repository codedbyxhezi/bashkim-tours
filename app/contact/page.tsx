import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Kontakt</span>
            <h1 className={styles.title}>Wir sind für Sie da</h1>
            <p className={styles.text}>
              Haben Sie Fragen zu Tickets, Fahrten oder Buchungen? Kontaktieren Sie
              uns direkt. Wir helfen Ihnen schnell und persönlich weiter.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.mainCard}>
              <h2 className={styles.cardTitle}>Kontakt aufnehmen</h2>
              <p className={styles.cardText}>
                Für Anfragen zu Reisen zwischen Deutschland und Nordmazedonien
                erreichen Sie uns per Telefon oder E-Mail.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Telefon</span>
                  <p>+49 123 456789</p>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>E-Mail</span>
                  <p>info@bashkimtours.com</p>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Strecken</span>
                  <p>Deutschland ↔ Nordmazedonien</p>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Servicezeiten</span>
                  <p>Montag bis Samstag, 09:00 – 18:00</p>
                </div>
              </div>
            </div>

            <div className={styles.sideColumn}>
              <div className={styles.sideCard}>
                <h3>Warum Bashkim Tours?</h3>
                <p>
                  Zuverlässige Verbindungen, persönliche Beratung und schnelle Hilfe
                  bei Ihrer Reiseplanung.
                </p>
              </div>

              <div className={styles.sideCard}>
                <h3>Schnelle Buchung</h3>
                <p>
                  Finden Sie passende Fahrten bequem online und senden Sie Ihre
                  Anfrage in wenigen Schritten.
                </p>
              </div>

              <div className={styles.sideCard}>
                <h3>Persönlicher Support</h3>
                <p>
                  Wir unterstützen Sie bei Fragen zu Fahrten, Zeiten und verfügbaren
                  Verbindungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}