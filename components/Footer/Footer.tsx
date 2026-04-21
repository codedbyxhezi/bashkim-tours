import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandCard}>
            <span className={styles.badge}>Bashkim Tours</span>
            <h3 className={styles.brandTitle}>
              Reisen zwischen Deutschland und Nordmazedonien
            </h3>
            <p className={styles.brandText}>
              Moderne Ticketbuchung, persönliche Beratung und zuverlässige
              Verbindungen für Ihre nächste Reise.
            </p>

            <div className={styles.infoPills}>
              <span>Busreisen</span>
              <span>Tickets</span>
              <span>Hin & Zurück</span>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Navigation</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/tours">Reisen</Link>
              </li>
              <li>
                <Link href="/booking">Buchen</Link>
              </li>
              <li>
                <Link href="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Kontakt</h4>
            <div className={styles.contactList}>
              <p>
                <span>Telefon</span>
                +49 123 456789
              </p>
              <p>
                <span>E-Mail</span>
                info@bashkimtours.com
              </p>
              <p>
                <span>Strecken</span>
                Deutschland ↔ Nordmazedonien
              </p>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Service</h4>
            <div className={styles.serviceCard}>
              <p className={styles.serviceTitle}>Schnelle Anfrage</p>
              <p className={styles.serviceText}>
                Finden Sie passende Fahrten und senden Sie uns Ihre Buchungsanfrage
                einfach online.
              </p>
              <Link href="/booking" className={styles.cta}>
                Jetzt buchen
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Bashkim Tours. Alle Rechte vorbehalten.</p>

          <div className={styles.bottomLinks}>
            <Link href="/contact">Impressum</Link>
            <Link href="/contact">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}