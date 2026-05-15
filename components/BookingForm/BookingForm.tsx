"use client";

import { useState } from "react";
import styles from "./BookingForm.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

type TripType = "oneway" | "return";
type Country = "" | "Deutschland" | "Schweiz" | "Nordmazedonien";

type FormData = {
  fullName: string;
  phone: string;
  from: Country;
  fromCity: string;
  to: Country;
  toCity: string;
  departureDate: string;
  returnDate: string;
  persons: number;
  note: string;
};

const PHONE = "491234567890";

const cities: Record<Exclude<Country, "">, string[]> = {
  Deutschland: [
    "Dortmund",
    "Bochum",
    "Essen",
    "Duisburg",
    "Düsseldorf",
    "Leverkusen",
    "Bonn",
    "Frankfurt",
    "Mannheim",
    "Karlsruhe",
    "Stuttgart",
    "Ulm",
    "München",
  ],
  Schweiz: [
    "Zürich",
    "Basel",
    "Bern",
    "Lausanne",
    "Luzern",
    "St. Gallen",
    "Sion",
    "Olten",
    "Chur",
    "Bellinzona",
  ],
  Nordmazedonien: [
    "Tetovë",
    "Shkup",
    "Gostivar",
    "Ohër",
    "Strugë",
    "Kërçovë",
    "Kumanovë",
    "Prilep",
  ],
};

export default function BookingForm() {
  const { locale } = useLanguage();
  const [tripType, setTripType] = useState<TripType>("oneway");

  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    from: "",
    fromCity: "",
    to: "",
    toCity: "",
    departureDate: "",
    returnDate: "",
    persons: 1,
    note: "",
  });

  const content =
    locale === "mk"
      ? {
          badge: "Резервација",
          title: "Резервирај го твоето патување",
          text: "Пополнете ги податоците и испратете го барањето директно преку WhatsApp.",
          oneWay: "Еден правец",
          returnTrip: "Повратен билет",
          fullName: "Име и презиме",
          phone: "Телефон",
          from: "Од држава",
          fromCity: "Град на поаѓање",
          to: "До држава",
          toCity: "Град на пристигнување",
          chooseCountry: "Избери држава",
          chooseCity: "Избери град",
          departureDate: "Датум на поаѓање",
          returnDate: "Датум на враќање",
          persons: "Патници",
          note: "Опционална порака",
          whatsappButton: "Испрати преку WhatsApp",
        }
      : locale === "sq"
      ? {
          badge: "Rezervim",
          title: "Rezervo udhëtimin tënd",
          text: "Plotëso të dhënat dhe dërgo kërkesën direkt në WhatsApp.",
          oneWay: "Një drejtim",
          returnTrip: "Vajtje-ardhje",
          fullName: "Emri i plotë",
          phone: "Telefoni",
          from: "Nga shteti",
          fromCity: "Qyteti i nisjes",
          to: "Për në shtetin",
          toCity: "Qyteti i mbërritjes",
          chooseCountry: "Zgjidh shtetin",
          chooseCity: "Zgjidh qytetin",
          departureDate: "Data e nisjes",
          returnDate: "Data e kthimit",
          persons: "Persona",
          note: "Shënim opsional",
          whatsappButton: "Dërgo në WhatsApp",
        }
      : {
          badge: "Buchung",
          title: "Buche deine Reise",
          text: "Fülle deine Daten aus und sende deine Anfrage direkt per WhatsApp.",
          oneWay: "Einzelfahrt",
          returnTrip: "Hin & Zurück",
          fullName: "Vollständiger Name",
          phone: "Telefon",
          from: "Von Land",
          fromCity: "Abfahrtsstadt",
          to: "Nach Land",
          toCity: "Zielstadt",
          chooseCountry: "Land wählen",
          chooseCity: "Stadt wählen",
          departureDate: "Hinreise",
          returnDate: "Rückreise",
          persons: "Personen",
          note: "Optionale Nachricht",
          whatsappButton: "Per WhatsApp senden",
        };

  const getCountryLabel = (country: Country) => {
    if (country === "Nordmazedonien") {
      if (locale === "mk") return "Северна Македонија";
      if (locale === "sq") return "Maqedonia e Veriut";
      return "Nordmazedonien";
    }

    if (country === "Deutschland") {
      if (locale === "mk") return "Германија";
      if (locale === "sq") return "Gjermani";
      return "Deutschland";
    }

    if (country === "Schweiz") {
      if (locale === "mk") return "Швајцарија";
      if (locale === "sq") return "Zvicër";
      return "Schweiz";
    }

    return "";
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    if (name === "from") {
      setForm((prev) => ({
        ...prev,
        from: value as Country,
        fromCity: "",
      }));
      return;
    }

    if (name === "to") {
      setForm((prev) => ({
        ...prev,
        to: value as Country,
        toCity: "",
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: name === "persons" ? Number(value) : value,
    }));
  };

  const fromLabel = getCountryLabel(form.from);
  const toLabel = getCountryLabel(form.to);

  const whatsappMessage =
    locale === "mk"
      ? `Здраво, сакам да направам резервација.

Тип на патување: ${tripType === "return" ? "Повратен билет" : "Еден правец"}
Име: ${form.fullName || "-"}
Телефон: ${form.phone || "-"}
Од: ${fromLabel || "-"} - ${form.fromCity || "-"}
До: ${toLabel || "-"} - ${form.toCity || "-"}
Датум на поаѓање: ${form.departureDate || "-"}
${tripType === "return" ? `Датум на враќање: ${form.returnDate || "-"}` : ""}
Патници: ${form.persons}
Порака: ${form.note || "-"}

Ве молам потврдете дали има слободни места.
Ви благодарам!`
      : locale === "sq"
      ? `Përshëndetje, dua të bëj një rezervim.

Lloji i udhëtimit: ${tripType === "return" ? "Vajtje-ardhje" : "Një drejtim"}
Emri: ${form.fullName || "-"}
Telefoni: ${form.phone || "-"}
Nga: ${fromLabel || "-"} - ${form.fromCity || "-"}
Për në: ${toLabel || "-"} - ${form.toCity || "-"}
Data e nisjes: ${form.departureDate || "-"}
${tripType === "return" ? `Data e kthimit: ${form.returnDate || "-"}` : ""}
Persona: ${form.persons}
Shënim: ${form.note || "-"}

Ju lutem më konfirmoni nëse ka vende të lira.
Faleminderit!`
      : `Hallo, ich möchte eine Reise buchen.

Reiseart: ${tripType === "return" ? "Hin & Zurück" : "Einzelfahrt"}
Name: ${form.fullName || "-"}
Telefon: ${form.phone || "-"}
Von: ${fromLabel || "-"} - ${form.fromCity || "-"}
Nach: ${toLabel || "-"} - ${form.toCity || "-"}
Hinreise: ${form.departureDate || "-"}
${tripType === "return" ? `Rückreise: ${form.returnDate || "-"}` : ""}
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

      <form className={styles.form}>
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
            <select
              name="from"
              value={form.from}
              onChange={handleChange}
              required
            >
              <option value="">{content.chooseCountry}</option>
              <option value="Deutschland">{getCountryLabel("Deutschland")}</option>
              <option value="Schweiz">{getCountryLabel("Schweiz")}</option>
              <option value="Nordmazedonien">
                {getCountryLabel("Nordmazedonien")}
              </option>
            </select>
          </div>

          <div className={styles.field}>
            <label>{content.fromCity}</label>
            <select
              name="fromCity"
              value={form.fromCity}
              onChange={handleChange}
              disabled={!form.from}
              required
            >
              <option value="">{content.chooseCity}</option>
              {form.from &&
                cities[form.from].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>

          <div className={styles.field}>
            <label>{content.to}</label>
            <select name="to" value={form.to} onChange={handleChange} required>
              <option value="">{content.chooseCountry}</option>
              <option value="Nordmazedonien">
                {getCountryLabel("Nordmazedonien")}
              </option>
              <option value="Deutschland">{getCountryLabel("Deutschland")}</option>
              <option value="Schweiz">{getCountryLabel("Schweiz")}</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>{content.toCity}</label>
            <select
              name="toCity"
              value={form.toCity}
              onChange={handleChange}
              disabled={!form.to}
              required
            >
              <option value="">{content.chooseCity}</option>
              {form.to &&
                cities[form.to].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
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