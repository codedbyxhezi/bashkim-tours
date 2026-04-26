"use client";

import styles from "./Testimonials.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function Testimonials() {
  const { t, locale } = useLanguage();

  const testimonials =
    locale === "sq"
      ? [
          {
            name: "Arben",
            text: "Shërbim shumë i mirë dhe udhëtim i rehatshëm. Do të udhëtoj përsëri.",
          },
          {
            name: "Elira",
            text: "Gjithçka ishte shumë mirë. Komunikim i shpejtë dhe shoferë profesionalë.",
          },
          {
            name: "Blerim",
            text: "Rezervimi përmes WhatsApp ishte shumë i lehtë. Udhëtim i sigurt dhe korrekt.",
          },
        ]
      : [
          {
            name: "Arben",
            text: "Sehr guter Service und eine komfortable Reise. Ich werde wieder buchen.",
          },
          {
            name: "Elira",
            text: "Alles war sehr gut. Schnelle Kommunikation und professionelle Fahrer.",
          },
          {
            name: "Blerim",
            text: "Die Buchung über WhatsApp war sehr einfach. Sichere und zuverlässige Fahrt.",
          },
        ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.badge}>{t.testimonials.badge}</span>
          <h2>{t.testimonials.title}</h2>
          <p>{t.testimonials.text}</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>“{item.text}”</p>
              <span className={styles.name}>{item.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}