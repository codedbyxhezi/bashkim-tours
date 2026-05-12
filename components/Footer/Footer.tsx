"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.glowOne}></div>
      <div className={styles.glowTwo}></div>

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandCard}>
            <span className={styles.badge}>Bashkim Tours</span>
            <h3 className={styles.brandTitle}>{t.footer.title}</h3>
            <p className={styles.brandText}>{t.footer.text}</p>

            <div className={styles.infoPills}>
              <span>Busreisen</span>
              <span>Tickets</span>
              <span>Hin & Zurück</span>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>{t.footer.navigation}</h4>
            <ul className={styles.links}>
              <li><Link href="/">{t.navbar.home}</Link></li>
              <li><Link href="/tours">{t.navbar.tours}</Link></li>
              <li><Link href="/booking">{t.navbar.booking}</Link></li>
              <li><Link href="/informacion">{t.navbar.information}</Link></li>
              <li><Link href="/contact">{t.navbar.contact}</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>{t.footer.contact}</h4>
            <div className={styles.contactList}>
              <p><span>Telefon</span>+49 123 456789</p>
              <p><span>E-Mail</span>info@bashkimtours.com</p>
              <p><span>Adresse</span>Dervish Cara 4 <br /> 1200 Tetovë</p>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>{t.footer.service}</h4>
            <div className={styles.serviceCard}>
              <p className={styles.serviceTitle}>{t.footer.quickRequest}</p>
              <p className={styles.serviceText}>{t.footer.serviceText}</p>
              <Link href="/booking" className={styles.cta}>
                {t.footer.bookNow}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Bashkim Tours. {t.footer.rights}</p>

          <div className={styles.bottomLinks}>
            <Link href="/impressum">{t.footer.impressum}</Link>
            <Link href="/datenschutz">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}