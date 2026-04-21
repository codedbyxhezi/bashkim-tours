import styles from './Booking.module.css';

const trips = [
  {
    id: 1,
    from: 'München',
    to: 'Skopje',
    date: '12.09.2026',
    departure: '07:00',
    arrival: '22:30',
    duration: '15h 30min',
    price: '89€',
    seats: '12 Plätze frei',
  },
  {
    id: 2,
    from: 'Stuttgart',
    to: 'Tetovo',
    date: '12.09.2026',
    departure: '08:15',
    arrival: '23:10',
    duration: '14h 55min',
    price: '95€',
    seats: '8 Plätze frei',
  },
  {
    id: 3,
    from: 'Hamburg',
    to: 'Skopje',
    date: '13.09.2026',
    departure: '06:30',
    arrival: '23:50',
    duration: '17h 20min',
    price: '109€',
    seats: '5 Plätze frei',
  },
  {
    id: 4,
    from: 'Skopje',
    to: 'Frankfurt',
    date: '14.09.2026',
    departure: '09:00',
    arrival: '21:45',
    duration: '12h 45min',
    price: '84€',
    seats: '14 Plätze frei',
  },
  {
    id: 5,
    from: 'Tetovo',
    to: 'Berlin',
    date: '14.09.2026',
    departure: '10:20',
    arrival: '23:40',
    duration: '13h 20min',
    price: '92€',
    seats: '9 Plätze frei',
  },
  {
    id: 6,
    from: 'Kumanovo',
    to: 'Düsseldorf',
    date: '15.09.2026',
    departure: '07:40',
    arrival: '20:55',
    duration: '13h 15min',
    price: '88€',
    seats: '11 Plätze frei',
  },
];

export default function BookingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.badge}>Ticketbuchung</span>
            <h1 className={styles.title}>
              Busreisen zwischen Deutschland und Nordmazedonien
            </h1>
            <p className={styles.description}>
              Finden Sie verfügbare Fahrten, vergleichen Sie Zeiten und wählen
              Sie die passende Verbindung für Ihre Reise.
            </p>
          </div>
        </section>

        <section className={styles.searchSection}>
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

            <button className={styles.searchButton}>Tickets suchen</button>
          </div>
        </section>

        <section className={styles.resultsSection}>
          <div className={styles.resultsHeader}>
            <div>
              <p className={styles.resultsLabel}>Verfügbare Fahrten</p>
              <h2 className={styles.resultsTitle}>
                Aktuelle Verbindungen für Ihre Strecke
              </h2>
            </div>

            <div className={styles.resultsInfo}>
              <span>{trips.length} Fahrten gefunden</span>
            </div>
          </div>

          <div className={styles.tripList}>
            {trips.map((trip) => (
              <article key={trip.id} className={styles.tripCard}>
                <div className={styles.tripMain}>
                  <div className={styles.routeBlock}>
                    <p className={styles.city}>{trip.from}</p>
                    <p className={styles.time}>{trip.departure}</p>
                  </div>

                  <div className={styles.centerBlock}>
                    <p className={styles.duration}>{trip.duration}</p>
                    <div className={styles.line}></div>
                    <p className={styles.date}>{trip.date}</p>
                  </div>

                  <div className={styles.routeBlock}>
                    <p className={styles.city}>{trip.to}</p>
                    <p className={styles.time}>{trip.arrival}</p>
                  </div>
                </div>

                <div className={styles.tripMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Preis</span>
                    <span className={styles.price}>{trip.price}</span>
                  </div>

                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Verfügbarkeit</span>
                    <span className={styles.seats}>{trip.seats}</span>
                  </div>

                  <button className={styles.bookButton}>Jetzt buchen</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}