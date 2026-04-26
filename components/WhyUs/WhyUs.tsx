"use client";

import styles from "./WhyUs.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function WhyUs() {
  const { locale } = useLanguage();

  const content =
    locale === "sq"
      ? {
          title: "Pse Bashkim Tours?",
          subtitle: "Avantazhet tuaja në një shikim",
          features: [
            {
              title: "Udhëtime të besueshme",
              text: "Nisje në kohë dhe lidhje të sigurta mes Gjermanisë dhe Maqedonisë së Veriut.",
              icon: "🚌",
            },
            {
              title: "Rezervim i lehtë",
              text: "Rezervo biletën shpejt dhe lehtë pa komplikime.",
              icon: "🎫",
            },
            {
              title: "Udhëtim i rehatshëm",
              text: "Autobusë modernë për një udhëtim të gjatë dhe të këndshëm.",
              icon: "💺",
            },
            {
              title: "Mbështetje personale",
              text: "Të ndihmojmë në çdo kohë për çdo pyetje – shpejt dhe saktë.",
              icon: "📞",
            },
          ],
        }
      : {
          title: "Warum Bashkim Tours?",
          subtitle: "Ihre Vorteile auf einen Blick",
          features: [
            {
              title: "Zuverlässige Fahrten",
              text: "Pünktliche Abfahrten und sichere Verbindungen zwischen Deutschland und Nordmazedonien.",
              icon: "🚌",
            },
            {
              title: "Einfache Buchung",
              text: "Tickets schnell und unkompliziert online reservieren – ohne Aufwand.",
              icon: "🎫",
            },
            {
              title: "Komfortable Reise",
              text: "Moderne Busse mit Komfort für eine angenehme lange Fahrt.",
              icon: "💺",
            },
            {
              title: "Persönlicher Support",
              text: "Wir helfen Ihnen bei Fragen jederzeit weiter – schnell und zuverlässig.",
              icon: "📞",
            },
          ],
        };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.subtitle}>{content.subtitle}</p>

        <div className={styles.grid}>
          {content.features.map((item, index) => (
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