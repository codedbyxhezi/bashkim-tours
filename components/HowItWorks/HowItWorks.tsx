"use client";

import styles from "./HowItWorks.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function HowItWorks() {
  const { locale } = useLanguage();

const content =
  locale === "mk"
    ? {
        title: "Како функционира",
        subtitle: "До вашето патување во само неколку чекори",
        steps: [
          {
            number: "01",
            title: "Избери патување",
            text:
              "Изберете ја вашата посакувана релација и датум.",
          },
          {
            number: "02",
            title: "Резервирај билет",
            text:
              "Резервирајте брзо и лесно преку WhatsApp.",
          },
          {
            number: "03",
            title: "Патувај",
            text:
              "Влезете во автобусот и уживајте во удобно патување.",
          },
        ],
      }
    : locale === "sq"
    ? {
        title: "Si funksionon",
        subtitle: "Në vetëm disa hapa drejt udhëtimit tënd",
        steps: [
          {
            number: "01",
            title: "Zgjidh udhëtimin",
            text:
              "Zgjidh drejtimin dhe datën që të përshtatet më shumë.",
          },
          {
            number: "02",
            title: "Rezervo biletën",
            text:
              "Rezervo shpejt dhe lehtë përmes WhatsApp.",
          },
          {
            number: "03",
            title: "Udhëto",
            text:
              "Hipu në autobus dhe shijo një udhëtim të rehatshëm.",
          },
        ],
      }
    : {
        title: "So funktioniert es",
        subtitle: "In nur wenigen Schritten zu Ihrer Reise",
        steps: [
          {
            number: "01",
            title: "Fahrt auswählen",
            text:
              "Wählen Sie Ihre gewünschte Strecke und das passende Datum aus.",
          },
          {
            number: "02",
            title: "Ticket buchen",
            text:
              "Reservieren Sie Ihr Ticket schnell und einfach online.",
          },
          {
            number: "03",
            title: "Einsteigen & reisen",
            text:
              "Steigen Sie ein und genießen Sie eine komfortable Fahrt.",
          },
        ],
      };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.subtitle}>{content.subtitle}</p>

        <div className={styles.grid}>
          {content.steps.map((step, index) => (
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