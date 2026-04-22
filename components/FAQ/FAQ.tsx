'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqItems = [
  {
    question: 'Wie kann ich eine Reise buchen?',
    answer:
      'Du kannst deine Reise ganz einfach über unsere Buchungsseite oder direkt per WhatsApp anfragen. Wir melden uns schnellstmöglich bei dir zurück.',
  },
  {
    question: 'Von wo aus starten die Reisen?',
    answer:
      'Unsere Reisen starten je nach Route von verschiedenen Orten in Deutschland. Die genauen Abfahrtsorte teilen wir dir bei der Buchung mit.',
  },
  {
    question: 'Kann ich auch kurzfristig buchen?',
    answer:
      'Ja, kurzfristige Buchungen sind je nach Verfügbarkeit möglich. Am besten kontaktierst du uns direkt per WhatsApp, damit wir dir sofort weiterhelfen können.',
  },
  {
    question: 'Wie bezahle ich meine Reise?',
    answer:
      'Die Zahlungsinformationen erhältst du im Rahmen der Buchung. Bei Fragen zu Preisen oder Zahlungsarten helfen wir dir gerne persönlich weiter.',
  },
  {
    question: 'Was passiert, wenn sich meine Pläne ändern?',
    answer:
      'Melde dich in so einem Fall so früh wie möglich bei uns. Wir schauen gemeinsam nach der besten Lösung für deine Umbuchung oder Änderung.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.badge}>FAQ</span>
          <h2>Häufige Fragen</h2>
          <p>
            Hier findest du Antworten auf die wichtigsten Fragen rund um unsere
            Reisen und Buchungen.
          </p>
        </div>

        <div className={styles.list}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    +
                  </span>
                </button>

                <div className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ''}`}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}