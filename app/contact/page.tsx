"use client";

import styles from "./Contact.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

const PHONE = "491234567890";

export default function ContactPage() {
  const { locale } = useLanguage();

  const content =
    locale === "sq"
      ? {
          badge: "Kontakt",
          title: "Na kontakto shpejt dhe lehtë",
          text: "Për rezervime, vende të lira apo pyetje rreth udhëtimit — jemi këtu për të ndihmuar.",
          whatsapp: "Shkruaj në WhatsApp",
          phone: "Telefon",
          email: "E-Mail",
          address: "Adresa",
          addressText: "Maqedonia e Veriut",
          formTitle: "Dërgo një mesazh",
          formText: "Plotëso formularin dhe ne do të përgjigjemi sa më shpejt.",
          name: "Emri yt",
          subject: "Subjekti",
          message: "Mesazhi yt",
          send: "Dërgo mesazhin",
        }
      : {
          badge: "Kontakt",
          title: "Kontaktiere uns schnell und einfach",
          text: "Für Buchungen, freie Plätze oder Fragen rund um deine Reise — wir helfen dir gerne weiter.",
          whatsapp: "Auf WhatsApp schreiben",
          phone: "Telefon",
          email: "E-Mail",
          address: "Adresse",
          addressText: "Nordmazedonien",
          formTitle: "Nachricht senden",
          formText: "Fülle das Formular aus und wir melden uns schnellstmöglich zurück.",
          name: "Dein Name",
          subject: "Betreff",
          message: "Deine Nachricht",
          send: "Nachricht senden",
        };

  const whatsappMessage =
    locale === "sq"
      ? "Përshëndetje, kam një pyetje për Bashkim Tours."
      : "Hallo, ich habe eine Frage zu Bashkim Tours.";

  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className={styles.page}>
      <section className={styles.wrapper}>
        <div className={styles.heroCard}>
          <div>
            <span className={styles.badge}>{content.badge}</span>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            {content.whatsapp}
          </a>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.leftColumn}>
            <a
              href="tel:+491234567890"
              className={styles.contactCard}
            >
              <span>{content.phone}</span>
              <h2>+49 123 4567890</h2>
            </a>

            <a
              href="mailto:info@bashkimtours.de"
              className={styles.contactCard}
            >
              <span>{content.email}</span>
              <h2>info@bashkimtours.de</h2>
            </a>

            <div className={styles.contactCard}>
              <span>{content.address}</span>

              <h2>
                Bashkim Tours <br />
                Dervish Cara 4 <br />
                1200 Tetove
                <br />
                {" "}
                {locale === "sq"
                  ? "Maqedonia e Veriut"
                  : "Nordmazedonien"}
              </h2>
            </div>
          </div>

          <section className={styles.formPanel}>
            <span className={styles.formBadge}>{content.badge}</span>
            <h2>{content.formTitle}</h2>
            <p>{content.formText}</p>

            <form className={styles.form}>
              <input type="text" placeholder={content.name} />
              <input type="email" placeholder="E-Mail" />
              <input type="text" placeholder={content.subject} />
              <textarea placeholder={content.message}></textarea>

              <button type="submit">{content.send}</button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}