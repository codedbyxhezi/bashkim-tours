import styles from "./Contact.module.css";

const PHONE = "491234567890";

export default function ContactPage() {
  const message = "Hallo 👋 ich habe eine Frage zu Bashkim Tours.";
  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <main className={styles.page}>
      <section className={styles.wrapper}>
        <div className={styles.topCard}>
          <div className={styles.topContent}>
            <span className={styles.kicker}>Kontakt</span>
            <h1 className={styles.title}>Lass uns deine Reise planen</h1>
            <p className={styles.description}>
              Ob Buchung, Rückfrage oder individuelle Anfrage — wir helfen dir
              schnell, persönlich und unkompliziert weiter.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topButton}
          >
            Direkt auf WhatsApp schreiben
          </a>
        </div>

        <div className={styles.contactGrid}>
          <article className={styles.infoCard}>
            <div className={styles.icon}>📞</div>
            <h2>Telefon</h2>
            <p>Erreiche uns direkt für schnelle Fragen und kurzfristige Anliegen.</p>
            <a href="tel:+491234567890">+49 123 4567890</a>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.icon}>📧</div>
            <h2>E-Mail</h2>
            <p>Schreib uns jederzeit, wenn du Informationen oder Hilfe brauchst.</p>
            <a href="mailto:info@bashkimtours.de">info@bashkimtours.de</a>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.icon}>💬</div>
            <h2>WhatsApp</h2>
            <p>Am schnellsten antworten wir dir direkt über WhatsApp.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat jetzt starten
            </a>
          </article>
        </div>

        <div className={styles.bottomGrid}>
          <section className={styles.whatsappBox}>
            <span className={styles.smallBadge}>Schnell & direkt</span>
            <h2>WhatsApp ist der schnellste Weg</h2>
            <p>
              Für Buchungen, freie Plätze, Zwischenstopps oder allgemeine Fragen
              bekommst du hier am schnellsten eine Antwort.
            </p>

            <ul className={styles.features}>
              <li>Schnelle Rückmeldung</li>
              <li>Persönlicher Kontakt</li>
              <li>Ideal für Buchungsanfragen</li>
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              Jetzt WhatsApp öffnen
            </a>
          </section>

          <section className={styles.formCard}>
            <h2>Oder schreib uns eine Nachricht</h2>
            <p>
              Nutze das Formular, wenn du uns lieber direkt über die Website
              kontaktieren möchtest.
            </p>

            <form className={styles.form}>
              <div className={styles.inputRow}>
                <input type="text" placeholder="Dein Name" />
                <input type="email" placeholder="Deine E-Mail" />
              </div>

              <input type="text" placeholder="Betreff" />

              <textarea placeholder="Deine Nachricht"></textarea>

              <button type="submit">Nachricht senden</button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}