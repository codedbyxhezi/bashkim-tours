"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function FAQ() {
  const { t, locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs =
    locale === "sq"
      ? [
          {
            q: "Si mund të bëj rezervim?",
            a: "Mund të rezervosh direkt përmes WhatsApp duke zgjedhur rrugën, vendin e nisjes, ditën dhe numrin e personave.",
          },
          {
            q: "A ka ndalesa gjatë rrugës?",
            a: "Po, gjatë udhëtimit ka ndalesa të planifikuara për pushim dhe nevoja të udhëtarëve.",
          },
          {
            q: "A mund të pyes për vende të lira?",
            a: "Po, përmes WhatsApp mund të na dërgosh kërkesë dhe ne të konfirmojmë nëse ka vende të lira.",
          },
          {
            q: "A udhëtoni çdo javë?",
            a: "Po, udhëtimet bëhen çdo javë në drejtimet kryesore mes Maqedonisë së Veriut, Gjermanisë dhe Zvicrës.",
          },
        ]
      : [
          {
            q: "Wie kann ich buchen?",
            a: "Du kannst direkt über WhatsApp buchen, indem du Route, Abfahrtsort, Reisetag und Personenanzahl auswählst.",
          },
          {
            q: "Gibt es Zwischenstopps?",
            a: "Ja, während der Fahrt gibt es geplante Zwischenstopps für Pausen und die Bedürfnisse der Reisenden.",
          },
          {
            q: "Kann ich freie Plätze anfragen?",
            a: "Ja, du kannst uns per WhatsApp eine Anfrage senden und wir bestätigen dir, ob noch Plätze verfügbar sind.",
          },
          {
            q: "Fahrt ihr jede Woche?",
            a: "Ja, wir fahren jede Woche auf den wichtigsten Strecken zwischen Nordmazedonien, Deutschland und der Schweiz.",
          },
        ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.badge}>{t.faq.badge}</span>
          <h2>{t.faq.title}</h2>
          <p>{t.faq.text}</p>
        </div>

        <div className={styles.list}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <span
                    className={`${styles.icon} ${
                      isOpen ? styles.iconOpen : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`${styles.answerWrapper} ${
                    isOpen ? styles.answerOpen : ""
                  }`}
                >
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}