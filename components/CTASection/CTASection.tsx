"use client";

import Link from "next/link";
import styles from "./CTASection.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function CTASection() {
  const { locale } = useLanguage();

const content =
  locale === "mk"
    ? {
        badge: "Започни сега",
        title: "Обезбедете го вашето следно патување",
        text:
          "Пронајдете соодветни линии помеѓу Германија и Северна Македонија и испратете барање за резервација во неколку чекори.",
        primary: "Пребарај билет",
        secondary: "Контактирај нè",
      }
    : locale === "sq"
    ? {
        badge: "Fillo tani",
        title: "Siguro udhëtimin tënd të radhës tani",
        text:
          "Gjej lidhjet e përshtatshme mes Gjermanisë dhe Maqedonisë së Veriut dhe dërgo kërkesën për rezervim në disa hapa.",
        primary: "Kërko bileta",
        secondary: "Na kontakto",
      }
    : {
        badge: "Jetzt starten",
        title: "Sichern Sie sich jetzt Ihre nächste Fahrt",
        text:
          "Finden Sie passende Verbindungen zwischen Deutschland und Nordmazedonien und senden Sie Ihre Buchungsanfrage in wenigen Schritten.",
        primary: "Jetzt Ticket suchen",
        secondary: "Kontakt aufnehmen",
      };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.left}>
            <span className={styles.badge}>{content.badge}</span>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.text}>{content.text}</p>
          </div>

          <div className={styles.right}>
            <Link href="/booking" className={styles.primaryButton}>
              {content.primary}
            </Link>

            <Link href="/contact" className={styles.secondaryButton}>
              {content.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}