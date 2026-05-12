'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '@/components/LanguageProvider/LanguageProvider';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  const changeLanguage = (lang: 'de' | 'sq' | 'mk') => {
    setLocale(lang);
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/images/logo-dark.png"
            alt="Bashkim Tours Logo"
            width={170}
            height={60}
            className={styles.logoImage}
            priority
          />
        </Link>

        <button
          className={styles.burger}
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`}></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
              >
                {t.navbar.home}
              </Link>
            </li>

            <li>
              <Link
                href="/tours"
                onClick={closeMenu}
                className={`${styles.link} ${pathname === '/tours' ? styles.active : ''}`}
              >
                {t.navbar.tours}
              </Link>
            </li>

            <li>
              <Link
                href="/booking"
                onClick={closeMenu}
                className={`${styles.link} ${pathname === '/booking' ? styles.active : ''}`}
              >
                {t.navbar.booking}
              </Link>
            </li>

            <li>
              <Link
                href="/informacion"
                onClick={closeMenu}
                className={`${styles.link} ${
                  pathname === "/informacion" ? styles.active : ""
                }`}
              >
                {t.navbar.information}
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}
              >
                {t.navbar.contact}
              </Link>
            </li>

            <li className={styles.languageItem}>
              <div className={styles.languageSwitch}>
                <button
                  type="button"
                  onClick={() => changeLanguage('de')}
                  className={`${styles.languageButton} ${
                    locale === 'de' ? styles.languageActive : ''
                  }`}
                  aria-label="Deutsch auswählen"
                >
                  <Image src="/images/flags/de.png" alt="Deutsch" width={20} height={15} />
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage('sq')}
                  className={`${styles.languageButton} ${
                    locale === 'sq' ? styles.languageActive : ''
                  }`}
                  aria-label="Shqip auswählen"
                >
                  <Image src="/images/flags/al.png" alt="Shqip" width={20} height={15} />
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage('mk')}
                  className={`${styles.languageButton} ${
                    locale === 'mk' ? styles.languageActive : ''
                  }`}
                  aria-label="Македонски auswählen"
                >
                  <Image src="/images/flags/mk.png" alt="Македонски" width={20} height={15} />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}