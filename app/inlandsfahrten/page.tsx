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
    locale === "mk"
      ? {
          badge: "Внатрешни линии",
          title: "Дневни патувања низ Северна Македонија",
          text: "Тука можете да најдете дел од нашите дневни линии. За точни термини и слободни места контактирајте нè директно.",
          route: "Релација",
          departure: "Поаѓање",
          returnRide: "Враќање",
          days: "Денови",
          everyDay: "Секој ден",
          reservation: "Резервација за внатрешни линии",
          reservationText:
            "За резервации и точни информации контактирајте нè директно преку WhatsApp.",
          whatsapp: "Резервирај преку WhatsApp",
        }
      : locale === "sq"
      ? {
          badge: "Linja vendore",
          title: "Udhëtime të përditshme brenda Maqedonisë së Veriut",
          text: "Këtu gjeni disa nga linjat tona të përditshme vendore. Për orare të sakta dhe vende të lira, na kontaktoni direkt.",
          route: "Relacioni",
          departure: "Nisja",
          returnRide: "Kthimi",
          days: "Ditët",
          everyDay: "Çdo ditë",
          reservation: "Rezervim për udhëtimet vendore",
          reservationText:
            "Për rezervime dhe orare të sakta na kontaktoni direkt në WhatsApp.",
          whatsapp: "Rezervo në WhatsApp",
        }
      : {
          badge: "Inlandsfahrten",
          title: "Tägliche Fahrten innerhalb Nordmazedoniens",
          text: "Hier finden Sie einige unserer täglichen Inlandsverbindungen. Für genaue Fahrzeiten und freie Plätze kontaktieren Sie uns direkt.",
          route: "Route",
          departure: "Abfahrt",
          returnRide: "Rückfahrt",
          days: "Tage",
          everyDay: "Täglich",
          reservation: "Reservierung für Inlandsfahrten",
          reservationText:
            "Für Reservierungen und genaue Uhrzeiten kontaktieren Sie uns direkt per WhatsApp.",
          whatsapp: "Per WhatsApp reservieren",
        };

  return (
    <main className={styles.page}>
      <section className={styles.container}>
        <div className={styles.hero}>
          <span>{content.badge}</span>
          <h1>{content.title}</h1>
          <p>{content.text}</p>
        </div>

        <div className={styles.routes}>
          {routes.map((route) => (
            <div key={route[0]} className={styles.routeCard}>
              <div className={styles.routeTop}>
                <h3>{route[0]}</h3>
              </div>

              <div className={styles.routeInfo}>
                <div>
                  <span>{content.departure}</span>
                  <strong>{route[1]}</strong>
                </div>

                <div>
                  <span>{content.returnRide}</span>
                  <strong>{route[2]}</strong>
                </div>

                <div>
                  <span>{content.days}</span>
                  <strong>{content.everyDay}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contactBox}>
          <h2>{content.reservation}</h2>

          <p>{content.reservationText}</p>

          <a
            href="https://wa.me/491234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            {content.whatsapp}
          </a>
        </div>
      </section>
    </main>
  );
}