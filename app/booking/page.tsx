'use client';

import styles from './Booking.module.css';
import { useSearchParams } from 'next/navigation';

const trips = [
  {
    id: 1,
    countryFrom: 'Nordmazedonien',
    countryTo: 'Deutschland',
    from: 'Skopje',
    to: 'München',
    departure: '08:00',
    arrival: '02:00',
    duration: '18h',
    price: '70€',
    seats: '12 Plätze frei',
    type: 'Direktfahrt',
  },
  {
    id: 2,
    countryFrom: 'Nordmazedonien',
    countryTo: 'Deutschland',
    from: 'Tetovo',
    to: 'Stuttgart',
    departure: '10:00',
    arrival: '03:00',
    duration: '17h',
    price: '75€',
    seats: '8 Plätze frei',
    type: 'Direktfahrt',
  },
  {
    id: 3,
    countryFrom: 'Deutschland',
    countryTo: 'Nordmazedonien',
    from: 'Hamburg',
    to: 'Skopje',
    departure: '06:00',
    arrival: '02:00',
    duration: '20h',
    price: '80€',
    seats: '5 Plätze frei',
    type: '1 Zwischenstopp',
  },
  {
    id: 4,
    countryFrom: 'Deutschland',
    countryTo: 'Nordmazedonien',
    from: 'Berlin',
    to: 'Tetovo',
    departure: '07:30',
    arrival: '02:30',
    duration: '19h',
    price: '78€',
    seats: '9 Plätze frei',
    type: 'Direktfahrt',
  },
  {
    id: 5,
    countryFrom: 'Nordmazedonien',
    countryTo: 'Deutschland',
    from: 'Kumanovo',
    to: 'Frankfurt',
    departure: '09:15',
    arrival: '00:45',
    duration: '15h 30min',
    price: '73€',
    seats: '14 Plätze frei',
    type: 'Direktfahrt',
  },
  {
    id: 6,
    countryFrom: 'Deutschland',
    countryTo: 'Nordmazedonien',
    from: 'München',
    to: 'Skopje',
    departure: '11:00',
    arrival: '05:30',
    duration: '18h 30min',
    price: '72€',
    seats: '6 Plätze frei',
    type: '1 Zwischenstopp',
  },
];

export default function BookingPage() {
  const searchParams = useSearchParams();

  const from = searchParams.get('from') || 'Deutschland';
  const to = searchParams.get('to') || 'Nordmazedonien';
  const date = searchParams.get('date') || '';
  const persons = searchParams.get('persons') || '1';

  const filteredTrips = trips.filter(
    (trip) => trip.countryFrom === from && trip.countryTo === to
  );

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.badge}>Tickets buchen</span>
            <h1 className={styles.title}>Finden Sie Ihre passende Fahrt</h1>
            <p className={styles.description}>
              Vergleichen Sie verfügbare Verbindungen zwischen Deutschland und
              Nordmazedonien und wählen Sie die passende Reise für Ihr Datum.
            </p>
          </div>

          <div className={styles.searchSummary}>
            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Von</span>
              <strong>{from}</strong>
            </div>

            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Nach</span>
              <strong>{to}</strong>
            </div>

            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Datum</span>
              <strong>{date || 'Nicht ausgewählt'}</strong>
            </div>

            <div className={styles.summaryItem}>
              <span className={styles.summaryLabel}>Personen</span>
              <strong>{persons}</strong>
            </div>
          </div>
        </section>

        <section className={styles.resultsSection}>
          <div className={styles.resultsTop}>
            <div>
              <p className={styles.resultsLabel}>Suchergebnisse</p>
              <h2 className={styles.resultsTitle}>Verfügbare Fahrten</h2>
            </div>

            <div className={styles.resultInfo}>
              <span>{filteredTrips.length} Fahrten gefunden</span>
            </div>
          </div>

          <div className={styles.tripList}>
            {filteredTrips.length > 0 ? (
              filteredTrips.map((trip) => (
                <article key={trip.id} className={styles.tripCard}>
                  <div className={styles.cardLeft}>
                    <div className={styles.routeTop}>
                      <span className={styles.route}>
                        {trip.from} → {trip.to}
                      </span>
                      <span className={styles.tripType}>{trip.type}</span>
                    </div>

                    <div className={styles.timeGrid}>
                      <div className={styles.timeItem}>
                        <span className={styles.smallLabel}>Abfahrt</span>
                        <p>{trip.departure}</p>
                      </div>

                      <div className={styles.timeItem}>
                        <span className={styles.smallLabel}>Ankunft</span>
                        <p>{trip.arrival}</p>
                      </div>

                      <div className={styles.timeItem}>
                        <span className={styles.smallLabel}>Dauer</span>
                        <p>{trip.duration}</p>
                      </div>

                      <div className={styles.timeItem}>
                        <span className={styles.smallLabel}>Verfügbarkeit</span>
                        <p>{trip.seats}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardRight}>
                    <div className={styles.priceBlock}>
                      <span className={styles.smallLabel}>Preis ab</span>
                      <div className={styles.price}>{trip.price}</div>
                    </div>

                    <button className={styles.bookButton}>Jetzt buchen</button>
                  </div>
                </article>
              ))
            ) : (
              <div className={styles.emptyState}>
                <h3>Keine Fahrten gefunden</h3>
                <p>
                  Für diese Auswahl sind aktuell keine Demo-Verbindungen vorhanden.
                  Probieren Sie eine andere Strecke.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.infoCard}>
            <h3>Wichtige Hinweise</h3>
            <p>
              Preise und verfügbare Plätze dienen aktuell als Demo für die
              Testphase. Später kann die Seite mit echtem Backend und Live-Daten
              verbunden werden.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Persönliche Unterstützung</h3>
            <p>
              Bei Fragen zu Ihrer Verbindung oder Buchung können Sie uns
              jederzeit über die Kontaktseite erreichen.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}