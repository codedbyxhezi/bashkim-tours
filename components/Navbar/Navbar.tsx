'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={160}
            height={60}
            className={styles.logoImage}
          />
        </Link>

        <nav>
          <ul className={styles.navList}>
            <li>
              <Link
                href="/"
                className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/tours"
                className={`${styles.link} ${pathname === '/tours' ? styles.active : ''}`}
              >
                Reisen
              </Link>
            </li>

            <li>
              <Link
                href="/booking"
                className={`${styles.link} ${pathname === '/booking' ? styles.active : ''}`}
              >
                Buchen
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
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