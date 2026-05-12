'use client';

import styles from './Home.module.css';
import Link from 'next/link';
import WhyUs from '@/components/WhyUs/WhyUs';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import CTASection from '@/components/CTASection/CTASection';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import Gallery from '@/components/Gallery/Gallery';
import { useLanguage } from '@/components/LanguageProvider/LanguageProvider';
import TravelOverview from '@/components/TravelOverview/TravelOverview';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <main className={styles.heroSection}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.heroVideo}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className={styles.overlay}></div>

        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.label}>Bashkim Tours</p>

            <h1 className={styles.title}>{t.hero.title}</h1>

            <p className={styles.text}>{t.hero.subtitle}</p>

            <div className={styles.buttonWrapper}>
              <Link href="/booking" className={styles.searchButton}>
                {t.hero.button}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <TravelOverview />
      <WhyUs />
      <HowItWorks />
      <Gallery />
      <CTASection />
      <Testimonials />
      <FAQ />
    </>
  );
}