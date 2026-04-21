import TourCard from '@/components/TourCard/TourCard';
import styles from './Tours.module.css';

const tours = [
  {
    title: 'Sommerreise nach Albanien',
    location: 'Albanien',
    price: 499,
    image: '/images/albania.jpg',
  },
  {
    title: 'Städtereise Kosovo',
    location: 'Kosovo',
    price: 299,
    image: '/images/kosovo.jpg',
  },
  {
    title: 'Familienurlaub nach Montenegro',
    location: 'Montenegro',
    price: 459,
    image: '/images/montenegro.jpg',
  },
];

export default function ToursPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Unsere Angebote</p>
          <h1>Beliebte Reisen</h1>
          <p>
            Finden Sie passende Reisen, Urlaubspakete und Tickets für Ihre nächste Fahrt.
          </p>
        </div>

        <div className={styles.grid}>
          {tours.map((tour) => (
            <TourCard
              key={tour.title}
              title={tour.title}
              location={tour.location}
              price={tour.price}
              image={tour.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}