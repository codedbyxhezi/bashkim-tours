import styles from "./Datenschutz.module.css";

export default function Datenschutz() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <span className={styles.badge}>Rechtliches</span>
        <h1>Datenschutzerklärung</h1>

        <div className={styles.section}>
          <h2>1. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Wir behandeln
            Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften (DSGVO).
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. Verantwortlicher</h2>
          <p>
            <strong>Bashkim Tours</strong><br />
            [DEIN NAME]<br />
            [Adresse]<br />
            E-Mail: info@bashkimtours.de
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. Datenerfassung auf dieser Website</h2>
          <p>
            Beim Besuch unserer Website werden automatisch Informationen erfasst,
            z. B. Browsertyp, Betriebssystem oder Uhrzeit des Seitenaufrufs.
            Diese Daten dienen der technischen Sicherheit und Verbesserung unserer Website.
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. WhatsApp Kommunikation</h2>
          <p>
            Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten an WhatsApp
            (Meta Platforms) übermittelt. Es gelten die Datenschutzbestimmungen
            von WhatsApp.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
            oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
            <br />
            E-Mail: info@bashkimtours.de
          </p>
        </div>
      </section>
    </main>
  );
}