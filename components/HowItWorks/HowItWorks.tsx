import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Fahrt auswählen',
    text: 'Wählen Sie Ihre gewünschte Strecke und das passende Datum aus.',
  },
  {
    number: '02',
    title: 'Ticket buchen',
    text: 'Reservieren Sie Ihr Ticket schnell und einfach online.',
  },
  {
    number: '03',
    title: 'Einsteigen & reisen',
    text: 'Steigen Sie ein und genießen Sie eine komfortable Fahrt.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>So funktioniert es</h2>
        <p className={styles.subtitle}>
          In nur wenigen Schritten zu Ihrer Reise
        </p>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.number}>{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}