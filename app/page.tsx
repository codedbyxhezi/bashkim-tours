import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.heroSection}>
      
      {/* Overlay */}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          
          <p className={styles.label}>Bashkim Tours</p>

          <h1 className={styles.title}>
            Reisen zwischen Deutschland und Nordmazedonien
          </h1>

          <p className={styles.text}>
            Buchen Sie Ihre Fahrt einfach online und finden Sie passende Verbindungen
            für Ihre nächste Reise.
          </p>

          {/* SUCHBEREICH */}
          <div className={styles.searchWrapper}>
            
            {/* INPUT BOX */}
            <div className={styles.searchBox}>
              
              <div className={styles.field}>
                <label htmlFor="from">Von</label>
                <select id="from" defaultValue="Deutschland">
                  <option>Deutschland</option>
                  <option>Nordmazedonien</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="to">Nach</label>
                <select id="to" defaultValue="Nordmazedonien">
                  <option>Nordmazedonien</option>
                  <option>Deutschland</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="date">Datum</label>
                <input id="date" type="date" />
              </div>

              <div className={styles.field}>
                <label htmlFor="persons">Personen</label>
                <input id="persons" type="number" min="1" defaultValue="1" />
              </div>

            </div>

            {/* BUTTON AUSSERHALB */}
            <Link href="/booking" className={styles.searchButton}>
              Tickets suchen
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}