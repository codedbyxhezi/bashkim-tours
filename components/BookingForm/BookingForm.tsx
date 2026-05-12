"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

type TripType = "oneway" | "return";

type FormData = {
  fullName: string;
  phone: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  persons: number;
  note: string;
};

const PHONE = "491234567890"; // deine echte WhatsApp Nummer ohne +

export default function BookingForm() {
  const { locale } = useLanguage();
  const [tripType, setTripType] = useState<TripType>("oneway");

  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    from: "Deutschland",
    to: "Nordmazedonien",
    departureDate: "",
    returnDate: "",
    persons: 1,
    note: "",
  });

  const content =
    locale === "sq"
      ? {
          badge: "Rezervim",
          title: "Rezervo udhëtimin tënd",
          text: "Plotëso të dhënat dhe zgjidh nëse dëshiron ta dërgosh si kërkesë online ose përmes WhatsApp.",
          oneWay: "Një drejtim",
          returnTrip: "Vajtje-ardhje",
          fullName: "Emri i plotë",
          phone: "Telefoni",
          from: "Nga",
          to: "Për në",
          departureDate: "Data e nisjes",
          returnDate: "Data e kthimit",
          persons: "Persona",
          note: "Shënim opsional",
          onlineButton: "Dërgo kërkesën online",
          whatsappButton: "Dërgo në WhatsApp",
          alert: "Rezervimi online do të aktivizohet së shpejti.",
        }
      : {
          badge: "Buchung",
          title: "Buche deine Reise",
          text: "Fülle deine Daten aus und wähle, ob du die Anfrage online oder direkt per WhatsApp senden möchtest.",
          oneWay: "Einzelfahrt",
          returnTrip: "Hin & Zurück",
          fullName: "Vollständiger Name",
          phone: "Telefon",
          from: "Von",
          to: "Nach",
          departureDate: "Hinreise",
          returnDate: "Rückreise",
          persons: "Personen",
          note: "Optionale Nachricht",
          onlineButton: "Online-Anfrage senden",
          whatsappButton: "Per WhatsApp senden",
          alert: "Online-Buchung wird bald aktiviert.",
        };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "persons" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(content.alert);
  };

  const whatsappMessage =
    locale === "sq"
      ? `Përshëndetje, dua të bëj një rezervim.

Lloji i udhëtimit: ${tripType === "return" ? "Vajtje-ardhje" : "Një drejtim"}
Emri: ${form.fullName}
Telefoni: ${form.phone}
Nga: ${form.from}
Për në: ${form.to}
Data e nisjes: ${form.departureDate}
${tripType === "return" ? `Data e kthimit: ${form.returnDate}` : ""}
Persona: ${form.persons}
Shënim: ${form.note || "-"}

Ju lutem më konfirmoni nëse ka vende të lira.
Faleminderit!`
      : `Hallo, ich möchte eine Reise buchen.

Reiseart: ${tripType === "return" ? "Hin & Zurück" : "Einzelfahrt"}
Name: ${form.fullName}
Telefon: ${form.phone}
Von: ${form.from}
Nach: ${form.to}
Hinreise: ${form.departureDate}
${tripType === "return" ? `Rückreise: ${form.returnDate}` : ""}
Personen: ${form.persons}
Nachricht: ${form.note || "-"}

Bitte bestätigen Sie mir, ob noch Plätze verfügbar sind.
Vielen Dank!`;

  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className={styles.box}>
      <div className={styles.header}>
        <span>{content.badge}</span>
        <h2>{content.title}</h2>
        <p>{content.text}</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.tripSwitch}>
          <button
            type="button"
            className={tripType === "oneway" ? styles.activeTrip : ""}
            onClick={() => setTripType("oneway")}
          >
            {content.oneWay}
          </button>

          <button
            type="button"
            className={tripType === "return" ? styles.activeTrip : ""}
            onClick={() => setTripType("return")}
          >
            {content.returnTrip}
          </button>
        </div>

        <div className={styles.grid}>
          <div className={styles.field}>
            <label>{content.fullName}</label>
            <input
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>{content.phone}</label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>{content.from}</label>
            <select name="from" value={form.from} onChange={handleChange}>
              <option value="Deutschland">Deutschland</option>
              <option value="Schweiz">Schweiz</option>
              <option value="Nordmazedonien">Nordmazedonien</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>{content.to}</label>
            <select name="to" value={form.to} onChange={handleChange}>
              <option value="Nordmazedonien">Nordmazedonien</option>
              <option value="Deutschland">Deutschland</option>
              <option value="Schweiz">Schweiz</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>{content.departureDate}</label>
            <input
              name="departureDate"
              type="date"
              value={form.departureDate}
              onChange={handleChange}
              required
            />
          </div>

          {tripType === "return" && (
            <div className={styles.field}>
              <label>{content.returnDate}</label>
              <input
                name="returnDate"
                type="date"
                value={form.returnDate}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className={styles.field}>
            <label>{content.persons}</label>
            <input
              name="persons"
              type="number"
              min="1"
              value={form.persons}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.field}>
          <label>{content.note}</label>
          <textarea
            name="note"
            rows={4}
            value={form.note}
            onChange={handleChange}
          />
        </div>

        <div className={styles.actions}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            {content.whatsappButton}
          </a>
        </div>
      </form>
    </section>
  );
}