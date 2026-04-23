'use client';

import styles from './Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PopularTrips from '@/components/PopularTrips/PopularTrips';
import WhyUs from '@/components/WhyUs/WhyUs';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import CTASection from '@/components/CTASection/CTASection';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';

export default function Home() {
  const router = useRouter();

  const [from, setFrom] = useState('Deutschland');
  const [to, setTo] = useState('Nordmazedonien');
  const [date, setDate] = useState('');
  const [persons, setPersons] = useState(1);

  const handleSearch = () => {
    const params = new URLSearchParams({
      from,
      to,
      date,
      persons: String(persons),
    });

    router.push(`/booking?${params.toString()}`);
  };

  return (
    <>
      <main className={styles.heroSection}>
        <div className={styles.overlay}></div>

        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.label}>Bashkim Tours</p>

            <h1 className={styles.title}>
              Reisen zwischen Nordmazedonien und Deutschland
            </h1>

            <p className={styles.text}>
              Buchen Sie Ihre Fahrt einfach online und finden Sie passende
              Verbindungen für Ihre nächste Reise.
            </p>

            <div className={styles.searchWrapper}>
              <div className={styles.searchBox}>
                <div className={styles.field}>
                  <label htmlFor="from">Von</label>
                  <select
                    id="from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value="Deutschland">Deutschland</option>
                    <option value="Nordmazedonien">Nordmazedonien</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="to">Nach</label>
                  <select
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value="Nordmazedonien">Nordmazedonien</option>
                    <option value="Deutschland">Deutschland</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="date">Datum</label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="persons">Personen</label>
                  <input
                    id="persons"
                    type="number"
                    min="1"
                    value={persons}
                    onChange={(e) => setPersons(Number(e.target.value))}
                  />
                </div>
              </div>

              <button
                type="button"
                className={styles.searchButton}
                onClick={handleSearch}
              >
                Tickets suchen
              </button>
            </div>
          </div>
        </div>
      </main>

      <PopularTrips />
      <WhyUs />
      <HowItWorks />
      <CTASection />
      <Testimonials />
      <FAQ />
    </>
  );
}