"use client";

import { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import Link from "next/link";

import WhyUs from "@/components/WhyUs/WhyUs";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import CTASection from "@/components/CTASection/CTASection";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Gallery from "@/components/Gallery/Gallery";
import TravelOverview from "@/components/TravelOverview/TravelOverview";

import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <main className={styles.heroSection}>
        <video
          ref={videoRef}
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
      <div className={styles.desktopOnly}>
        <WhyUs />
        <HowItWorks />
      </div>
      <Gallery />
      <CTASection />
      <Testimonials />
      <FAQ />
    </>
  );
}