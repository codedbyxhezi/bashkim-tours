"use client";

import styles from "./Inlandsfahrten.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

const routes = [
  ["Tetovë → Gostivar → Tetovë", "08:00", "17:00", "Täglich"],
  ["Tetovë → Shkup → Tetovë", "07:00", "18:00", "Täglich"],
  ["Tetovë → Ohër → Tetovë", "06:30", "19:00", "Täglich"],
  ["Tetovë → Strugë → Tetovë", "07:30", "18:30", "Täglich"],
  ["Tetovë → Kërçovë → Tetovë", "09:00", "16:30", "Täglich"],
];

export default function InlandsfahrtenPage() {
  const { locale } = useLanguage();

  const content =
    locale === "sq"
      ? {
          badge: "Linja vendore",
          title: "Udhëtime të përditshme brenda Maqedonisë së Veriut",
          text: "Këtu gjeni disa nga linjat tona të përditshme vendore. Për orare të sakta dhe vende të lira, na kontaktoni direkt.",
          route: "Relacioni",
          departure: "Nisja",
          returnRide: "Kthimi",
          days: "Ditët",
        }
      : {
          badge: "Inlandsfahrten",
          title: "Tägliche Fahrten innerhalb Nordmazedoniens",
          text: "Hier finden Sie einige unserer täglichen Inlandsverbindungen. Für genaue Fahrzeiten und freie Plätze kontaktieren Sie uns direkt.",
          route: "Route",
          departure: "Abfahrt",
          returnRide: "Rückfahrt",
          days: "Tage",
        };

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <div className={styles.hero}>
          <span>{content.badge}</span>
          <h1>{content.title}</h1>
          <p>{content.text}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{content.route}</th>
                  <th>{content.departure}</th>
                  <th>{content.returnRide}</th>
                  <th>{content.days}</th>
                </tr>
              </thead>              

              <tbody>
                {routes.map((route) => (
                  <tr key={route[0]}>
                    <td>{route[0]}</td>
                    <td>{route[1]}</td>
                    <td>{route[2]}</td>
                    <td>{locale === "sq" ? "Çdo ditë" : route[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.contactBox}>
  <h2>
    {locale === "sq"
      ? "Rezervim për udhëtimet vendore"
      : "Reservierung für Inlandsfahrten"}
  </h2>

  <p>
    {locale === "sq"
      ? "Për rezervime dhe orare të sakta na kontaktoni direkt në WhatsApp."
      : "Für Reservierungen und genaue Uhrzeiten kontaktieren Sie uns direkt per WhatsApp."}
  </p>

  <a
    href="https://wa.me/491234567890"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.whatsappButton}
  >
    {locale === "sq"
      ? "Rezervo në WhatsApp"
      : "Per WhatsApp reservieren"}
  </a>
</div>
          </div>
        </div>
      </section>
    </main>
  );
}