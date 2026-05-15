"use client";

import styles from "./Datenschutz.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function Datenschutz() {
  const { locale } = useLanguage();

const content =
  locale === "mk"
    ? {
        badge: "Правни информации",
        title: "Политика за приватност",

        section1: "1. Општи информации",
        text1:
          "Заштитата на вашите лични податоци е многу важна за нас. Вашите лични податоци ги третираме доверливо и согласно законските прописи за заштита на податоци.",

        section2: "2. Одговорно лице",

        section3: "3. Собирање на податоци на оваа веб-страница",
        text3:
          "При посетата на нашата веб-страница автоматски се собираат информации како тип на прелистувач, оперативен систем или време на пристап. Овие податоци служат за техничка сигурност и подобрување на веб-страницата.",

        section4: "4. WhatsApp комуникација",
        text4:
          "Доколку не контактирате преку WhatsApp, вашите податоци се пренесуваат до WhatsApp (Meta Platforms). Важат правилата за приватност на WhatsApp.",

        section5: "5. Ваши права",
        text5:
          "Во секое време имате право на информации, исправка, бришење или ограничување на обработката на вашите лични податоци.",

        section6: "6. Контакт",
        text6:
          "За прашања во врска со приватноста можете да нè контактирате во секое време:",
      }
    : locale === "sq"
    ? {
        badge: "Ligjore",
        title: "Politika e Privatësisë",

        section1: "1. Informacione të përgjithshme",
        text1:
          "Mbrojtja e të dhënave tuaja personale është shumë e rëndësishme për ne. Ne i trajtojmë të dhënat personale në mënyrë konfidenciale dhe sipas rregullave ligjore për mbrojtjen e të dhënave.",

        section2: "2. Përgjegjësi",

        section3: "3. Mbledhja e të dhënave në këtë faqe",
        text3:
          "Gjatë vizitës në faqen tonë mblidhen automatikisht disa informacione, si tipi i shfletuesit, sistemi operativ ose koha e hyrjes në faqe. Këto të dhëna përdoren për sigurinë teknike dhe përmirësimin e faqes.",

        section4: "4. Komunikimi përmes WhatsApp",
        text4:
          "Nëse na kontaktoni përmes WhatsApp, të dhënat tuaja transmetohen tek WhatsApp (Meta Platforms). Zbatohen rregullat e privatësisë së WhatsApp.",

        section5: "5. Të drejtat tuaja",
        text5:
          "Ju keni të drejtë në çdo kohë për informacion, korrigjim, fshirje ose kufizim të përpunimit të të dhënave tuaja personale.",

        section6: "6. Kontakt",
        text6:
          "Për pyetje rreth privatësisë mund të na kontaktoni në çdo kohë:",
      }
    : {
        badge: "Rechtliches",
        title: "Datenschutzerklärung",

        section1: "1. Allgemeine Hinweise",
        text1:
          "Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO).",

        section2: "2. Verantwortlicher",

        section3: "3. Datenerfassung auf dieser Website",
        text3:
          "Beim Besuch unserer Website werden automatisch Informationen erfasst, z. B. Browsertyp, Betriebssystem oder Uhrzeit des Seitenaufrufs. Diese Daten dienen der technischen Sicherheit und Verbesserung unserer Website.",

        section4: "4. WhatsApp Kommunikation",
        text4:
          "Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten an WhatsApp (Meta Platforms) übermittelt. Es gelten die Datenschutzbestimmungen von WhatsApp.",

        section5: "5. Ihre Rechte",
        text5:
          "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.",

        section6: "6. Kontakt",
        text6:
          "Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:",
      };

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <span className={styles.badge}>{content.badge}</span>

        <h1>{content.title}</h1>

        <div className={styles.section}>
          <h2>{content.section1}</h2>
          <p>{content.text1}</p>
        </div>

        <div className={styles.section}>
          <h2>{content.section2}</h2>
          <p>
            <strong>Bashkim Tours</strong>
            <br />
            [DEIN NAME]
            <br />
            Dervish Cara 4 <br />
            1200 Tetove <br />
            {locale === "mk"
              ? "Северна Македонија"
              : locale === "sq"
              ? "Maqedonia e Veriut"
              : "Nordmazedonien"}
            <br />
            E-Mail: info@bashkimtours.de
          </p>
        </div>

        <div className={styles.section}>
          <h2>{content.section3}</h2>
          <p>{content.text3}</p>
        </div>

        <div className={styles.section}>
          <h2>{content.section4}</h2>
          <p>{content.text4}</p>
        </div>

        <div className={styles.section}>
          <h2>{content.section5}</h2>
          <p>{content.text5}</p>
        </div>

        <div className={styles.section}>
          <h2>{content.section6}</h2>
          <p>
            {content.text6}
            <br />
            E-Mail: info@bashkimtours.de
          </p>
        </div>
      </section>
    </main>
  );
}