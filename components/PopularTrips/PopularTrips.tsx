import styles from './PopularTrips.module.css';
import Image from 'next/image';
import Link from 'next/link';

const trips = [
  {
    from: 'Dortmund',
    to: 'Ohër',
    price: '70€',
    duration: '18h',
    image: '/images/skopje.jpg',
  },
  {
    from: 'Tetovo',
    to: 'Stuttgart',
    price: '75€',
    duration: '17h',
    image: '/images/tetovo.jpg',
  },
  {
    from: 'Hamburg',
    to: 'Skopje',
    price: '80€',
    duration: '20h',
    image: '/images/hamburg.jpg',
  },
  {
    from: 'Berlin',
    to: 'Tetovo',
    price: '78€',
    duration: '19h',
    image: '/images/berlin.jpg',
  },
];

export default function PopularTrips() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Beliebte Fahrten</h2>
        <p className={styles.subtitle}>
          Entdecken Sie unsere beliebtesten Verbindungen
        </p>

        <div className={styles.grid}>
          {trips.map((trip, index) => (
            <div key={index} className={styles.card}>
              
              {/* IMAGE */}
              <div className={styles.imageWrapper}>
                <Image
                  src={trip.image}
                  alt={`${trip.from} nach ${trip.to}`}
                  fill
                  className={styles.image}
                />
                <div className={styles.overlay}></div>
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                <div className={styles.route}>
                  {trip.from} → {trip.to}
                </div>

                <div className={styles.info}>
                  <span>⏱ {trip.duration}</span>
                  <span className={styles.price}>{trip.price}</span>
                </div>

                <Link href="/booking" className={styles.button}>
                  Fahrt ansehen
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
        <div className={styles.whatsappHint}>
        <p>Noch Fragen? Schreib uns direkt auf WhatsApp.</p>

        <a
          href="https://wa.me/491234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
        Jetzt auf WhatsApp schreiben
        </a>
      </div>
    </section>
  );
}