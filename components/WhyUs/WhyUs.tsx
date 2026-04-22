import styles from './WhyUs.module.css';

const features = [
  {
    title: 'Zuverlässige Fahrten',
    text: 'Pünktliche Abfahrten und sichere Verbindungen zwischen Deutschland und Nordmazedonien.',
    icon: '🚌',
  },
  {
    title: 'Einfache Buchung',
    text: 'Tickets schnell und unkompliziert online reservieren – ohne Aufwand.',
    icon: '🎫',
  },
  {
    title: 'Komfortable Reise',
    text: 'Moderne Busse mit Komfort für eine angenehme lange Fahrt.',
    icon: '💺',
  },
  {
    title: 'Persönlicher Support',
    text: 'Wir helfen Ihnen bei Fragen jederzeit weiter – schnell und zuverlässig.',
    icon: '📞',
  },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Warum Bashkim Tours?</h2>
        <p className={styles.subtitle}>
          Ihre Vorteile auf einen Blick
        </p>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}