'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 250);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${styles.button} ${visible ? styles.show : ''}`}
      onClick={scrollTop}
    >
      <span className={styles.icon}>↑</span>
      <span className={styles.ring}></span>
    </button>
  );
}