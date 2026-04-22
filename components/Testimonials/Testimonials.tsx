import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Arben, Stuttgart',
    text: 'Sehr zuverlässiger Service, freundlicher Kontakt und eine angenehme Reise von Anfang bis Ende. Absolut empfehlenswert.',
  },
  {
    name: 'Elira, München',
    text: 'Die Buchung war unkompliziert und alles hat perfekt funktioniert. Man fühlt sich direkt gut aufgehoben.',
  },
  {
    name: 'Besnik, Frankfurt',
    text: 'Pünktlich, professionell und sehr freundlich. Ich würde jederzeit wieder mit Bashkim Tours reisen.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.badge}>Kundenstimmen</span>
          <h2>Was unsere Kunden sagen</h2>
          <p>
            Vertrauen, Komfort und persönlicher Service stehen bei Bashkim Tours
            an erster Stelle.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>&ldquo;{item.text}&rdquo;</p>
              <span className={styles.name}>{item.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}