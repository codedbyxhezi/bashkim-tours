import styles from "./Impressum.module.css";

export default function Impressum() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <span className={styles.badge}>Rechtliches</span>
        <h1>Impressum</h1>

        <div className={styles.block}>
          <p>
            <strong>Bashkim Tours</strong>
            <br />
            Inhaber: [DEIN NAME]
            <br />
            [Straße + Hausnummer]
            <br />
            [PLZ + Ort]
            <br />
            Nordmazedonien
          </p>

          <p>
            Telefon: +49 XXX XXX
            <br />
            E-Mail: info@bashkimtours.de
          </p>
        </div>

        <div className={styles.section}>
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Haftung für Links</h2>
          <p>
            Unsere Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben.
          </p>
        </div>
      </section>
    </main>
  );
}