"use client";

import styles from "./Contact.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

const PHONE = "491234567890";

export default function ContactPage() {
  const { t, locale } = useLanguage();

  const message =
    locale === "sq"
      ? "Përshëndetje, kam një pyetje për Bashkim Tours."
      : "Hallo, ich habe eine Frage zu Bashkim Tours.";

  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <main className={styles.page}>
      <section className={styles.wrapper}>
        <div className={styles.topCard}>
          <div className={styles.topContent}>
            <span className={styles.kicker}>{t.contact.kicker}</span>
            <h1 className={styles.title}>{t.contact.title}</h1>
            <p className={styles.description}>{t.contact.text}</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topButton}
          >
            {t.contact.whatsappButton}
          </a>
        </div>

        <div className={styles.contactGrid}>
          <article className={styles.infoCard}>
            <div className={styles.icon}>📞</div>
            <h2>{t.contact.phone}</h2>
            <p>{t.contact.phoneText}</p>
            <a href="tel:+491234567890">+49 123 4567890</a>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.icon}>📧</div>
            <h2>{t.contact.email}</h2>
            <p>{t.contact.emailText}</p>
            <a href="mailto:info@bashkimtours.de">info@bashkimtours.de</a>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.icon}>💬</div>
            <h2>{t.contact.whatsapp}</h2>
            <p>{t.contact.whatsappText}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.contact.whatsappStart}
            </a>
          </article>
        </div>

        <div className={styles.bottomGrid}>
          <section className={styles.whatsappBox}>
            <span className={styles.smallBadge}>{t.contact.fastBadge}</span>
            <h2>{t.contact.fastTitle}</h2>
            <p>{t.contact.fastText}</p>

            <ul className={styles.features}>
              {t.contact.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              {t.contact.openWhatsapp}
            </a>
          </section>

          <section className={styles.formCard}>
            <h2>{t.contact.formTitle}</h2>
            <p>{t.contact.formText}</p>

            <form className={styles.form}>
              <div className={styles.inputRow}>
                <input type="text" placeholder={t.contact.formName} />
                <input type="email" placeholder={t.contact.formEmail} />
              </div>

              <input type="text" placeholder={t.contact.formSubject} />

              <textarea placeholder={t.contact.formMessage}></textarea>

              <button type="submit">{t.contact.formButton}</button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}