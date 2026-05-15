"use client";

import styles from "./Impressum.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function Impressum() {
  const { locale } = useLanguage();

const content =
  locale === "mk"
    ? {
        badge: "Правни информации",
        title: "Импресум",

        owner: "Сопственик",

        section1: "Одговорност за содржината",
        text1:
          "Содржината на нашата веб-страница е создадена со најголема грижа. Сепак, не можеме да гарантираме точност, целосност или ажурност на содржината.",

        section2: "Одговорност за линкови",
        text2:
          "Нашата веб-страница содржи линкови до надворешни страници на трети лица, врз чија содржина немаме влијание.",
      }
    : locale === "sq"
    ? {
        badge: "Ligjor",
        title: "Informacioni ligjor",

        owner: "Pronari",

        section1: "Përgjegjësia për përmbajtjen",
        text1:
          "Përmbajtja e faqes sonë është krijuar me kujdes maksimal. Megjithatë, nuk mund të garantojmë saktësinë, plotësinë ose aktualitetin e përmbajtjes.",

        section2: "Përgjegjësia për lidhjet",
        text2:
          "Faqja jonë përmban lidhje drejt faqeve të jashtme të palëve të treta, mbi përmbajtjen e të cilave nuk kemi ndikim.",
      }
    : {
        badge: "Rechtliches",
        title: "Impressum",

        owner: "Inhaber",

        section1: "Haftung für Inhalte",
        text1:
          "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",

        section2: "Haftung für Links",
        text2:
          "Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.",
      };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <span className={styles.badge}>{content.badge}</span>

        <h1>{content.title}</h1>

        <div className={styles.block}>
          <p>
            <strong>Bashkim Tours</strong>
            <br />
            {content.owner}: [DEIN NAME]
            <br />
            Dervish Cara 4
            <br />
            1200 Tetove
            <br />
            {locale === "mk"
              ? "Северна Македонија"
              : locale === "sq"
              ? "Maqedonia e Veriut"
              : "Nordmazedonien"}
          </p>

          <p>
            Telefon: +49 XXX XXX
            <br />
            E-Mail: info@bashkimtours.de
          </p>
        </div>

        <div className={styles.section}>
          <h2>{content.section1}</h2>
          <p>{content.text1}</p>
        </div>

        <div className={styles.section}>
          <h2>{content.section2}</h2>
          <p>{content.text2}</p>
        </div>
      </section>
    </main>
  );
}