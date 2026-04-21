'use client';

import { useState } from 'react';
import styles from './BookingForm.module.css';

type BookingData = {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  persons: number;
  date: string;
};

export default function BookingForm() {
  const [form, setForm] = useState<BookingData>({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    persons: 1,
    date: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === 'persons' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert('Buchungsanfrage wurde gesendet');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="fullName">Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Ihr vollständiger Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="ihre@email.de"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Telefon</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="+49 ..."
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="destination">Reiseziel</label>
          <select
            id="destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            required
          >
            <option value="">Bitte wählen</option>
            <option value="Albanien">Albanien</option>
            <option value="Kosovo">Kosovo</option>
            <option value="Montenegro">Montenegro</option>
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="persons">Personen</label>
          <input
            id="persons"
            name="persons"
            type="number"
            min="1"
            value={form.persons}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="date">Reisedatum</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Anfrage senden
      </button>
    </form>
  );
}