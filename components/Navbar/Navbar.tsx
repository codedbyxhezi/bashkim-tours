'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/images/logo.jpg"
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
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/tours"
                onClick={closeMenu}
                className={`${styles.link} ${pathname === '/tours' ? styles.active : ''}`}
              >
                Reisen
              </Link>
            </li>

            <li>
              <Link
                href="/booking"
                onClick={closeMenu}
                className={`${styles.link} ${pathname === '/booking' ? styles.active : ''}`}
              >
                Buchen
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`${styles.link} ${pathname === '/contact' ? styles.active : ''}`}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}