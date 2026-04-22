import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <span className={styles.badge}>Jetzt starten</span>
            <h2 className={styles.title}>Sichern Sie sich jetzt Ihre nächste Fahrt</h2>
            <p className={styles.text}>
              Finden Sie passende Verbindungen zwischen Deutschland und
              Nordmazedonien und senden Sie Ihre Buchungsanfrage in wenigen
              Schritten.
            </p>
          </div>

          <div className={styles.right}>
            <Link href="/booking" className={styles.primaryButton}>
              Jetzt Ticket suchen
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}