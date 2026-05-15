"use client";

import { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function Testimonials() {
  const { t, locale } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials =
    locale === "mk"
      ? [
          {
            name: "Arben",
            text: "Многу добра услуга и удобно патување. Повторно би патувал.",
          },
          {
            name: "Elira",
            text: "Сè беше одлично. Брза комуникација и професионални возачи.",
          },
          {
            name: "Blerim",
            text: "Резервацијата преку WhatsApp беше многу лесна. Безбедно и сигурно патување.",
          },
        ]
      : locale === "sq"
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

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

        <div className={styles.mobileCarousel}>
          <article className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.text}>“{testimonials[activeIndex].text}”</p>
            <span className={styles.name}>{testimonials[activeIndex].name}</span>
          </article>

          <div className={styles.controls}>
            <button type="button" onClick={prev}>‹</button>

            <div className={styles.dots}>
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`${styles.dot} ${
                    activeIndex === index ? styles.activeDot : ""
                  }`}
                />
              ))}
            </div>

            <button type="button" onClick={next}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}