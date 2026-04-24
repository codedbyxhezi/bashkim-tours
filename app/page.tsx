import Link from "next/link";
import styles from "./Home.module.css";

import PopularTrips from "@/components/PopularTrips/PopularTrips";
import WhyUs from "@/components/WhyUs/WhyUs";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import CTASection from "@/components/CTASection/CTASection";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Gallery from "@/components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <main className={styles.heroSection}>
        <div className={styles.overlay}></div>

        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.label}>Bashkim Tours</p>

            <h1 className={styles.title}>
              Nordmazedonien • Deutschland • Schweiz
            </h1>

            <p className={styles.text}>
              Sicher und komfortabel unterwegs - jede Woche.
            </p>

            <div className={styles.buttonWrapper}>
              <Link href="/booking" className={styles.searchButton}>
                Tickets anzeigen
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PopularTrips />
      <WhyUs />
      <HowItWorks />
      <Gallery />
      <CTASection />
      <Testimonials />
      <FAQ />
    </>
  );
}