"use client";

import Link from "next/link";
import styles from "./TravelOverview.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function TravelOverview() {
  const { locale } = useLanguage();

const content =
  locale === "mk"
    ? {
        badge: "Наши услуги",
        title: "Патувања за секоја дестинација",
        subtitle:
          "Од дневни линии до летни патувања - Bashkim Tours ве поврзува со најважните дестинации.",

        cards: [
          {
            title: "Внатрешни линии",
            text:
              "Дневни врски помеѓу Тетово, Скопје, Гостивар, Охрид и други градови.",
            image: "/images/macedonia.jpg",
            button: "Погледни информации",
            href: "/inlandsfahrten",
          },

          {
            title: "Линии до Германија и Швајцарија",
            text:
              "Редовни патувања кон Германија и Швајцарија во текот на целата година.",
            image: "/images/germany.jpg",
            button: "Погледни возен ред",
            href: "/booking",
          },

          {
            title: "Летни патувања",
            text:
              "Летни дестинации кон Албанија и Турција со специјални понуди.",
            image: "/images/albania.jpg",
            button: "Погледни патувања",
            href: "/tours",
          },
        ],
      }
    : locale === "sq"
    ? {
        badge: "Shërbimet tona",
        title: "Udhëtime për çdo destinacion",
        subtitle:
          "Nga linjat e përditshme deri te pushimet verore - Bashkim Tours ju lidh me destinacionet më të rëndësishme.",

        cards: [
          {
            title: "Udhëtime brenda vendit",
            text:
              "Lidhje të përditshme mes Tetovës, Shkupit, Gostivarit, Ohrit dhe qyteteve tjera.",
            image: "/images/macedonia.jpg",
            button: "Shiko informacionet",
            href: "/inlandsfahrten",
          },

          {
            title: "Linja për Gjermani & Zvicër",
            text:
              "Udhëtime të rregullta drejt Gjermanisë dhe Zvicrës gjatë gjithë vitit.",
            image: "/images/germany.jpg",
            button: "Shiko oraret",
            href: "/booking",
          },

          {
            title: "Pushime verore",
            text:
              "Destinacione verore drejt Shqipërisë dhe Turqisë me oferta speciale.",
            image: "/images/albania.jpg",
            button: "Shiko udhëtimet",
            href: "/tours",
          },
        ],
      }
    : {
        badge: "Unsere Leistungen",
        title: "Reisen für jedes Ziel",
        subtitle:
          "Von täglichen Linienfahrten bis zu Sommerreisen - Bashkim Tours verbindet Sie mit den wichtigsten Reisezielen.",

        cards: [
          {
            title: "Inlandsfahrten",
            text:
              "Tägliche Verbindungen zwischen Tetovë, Shkup, Gostivar, Ohër und weiteren Städten.",
            image: "/images/macedonia.jpg",
            button: "Informationen ansehen",
            href: "/inlandsfahrten",
          },

          {
            title: "Linien nach Deutschland & Schweiz",
            text:
              "Regelmäßige Fahrten nach Deutschland und in die Schweiz das ganze Jahr über.",
            image: "/images/germany.jpg",
            button: "Fahrpläne ansehen",
            href: "/booking",
          },

          {
            title: "Sommerreisen",
            text:
              "Sommerreisen nach Albanien und in die Türkei mit attraktiven Angeboten.",
            image: "/images/albania.jpg",
            button: "Reisen ansehen",
            href: "/tours",
          },
        ],
      };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.badge}>{content.badge}</span>
          <h2>{content.title}</h2>
          <p>{content.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {content.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={card.image} alt={card.title} />
              </div>

              <div className={styles.content}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>

                <Link href={card.href} className={styles.button}>
                  {card.button}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}