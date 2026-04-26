"use client";

import { useState } from "react";
import styles from "./TourCard.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

type TourCardProps = {
  title: string;
  location: string;
  price: number;
  image: string;
};

export default function TourCard({
  title,
  location,
  price,
  image,
}: TourCardProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const PHONE = "491234567890";

  const message = `Hallo, ich interessiere mich für die Reise "${title}" (${location}). Können Sie mir mehr Informationen geben?`;

  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* CARD */}
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} />
          <span className={styles.badge}>{t.tourCard.badge}</span>
        </div>

        <div className={styles.content}>
          <p className={styles.location}>{location}</p>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.footer}>
            <span className={styles.price}>ab {price} €</span>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.infoButton}
                onClick={() => setOpen(true)}
              >
                {t.tourCardModal.infoButton}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                {t.tourCard.button}
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* MODAL */}
      {open && (
        <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <img src={image} alt={title} className={styles.modalImage} />

            <div className={styles.modalContent}>
              <span className={styles.modalBadge}>
                {t.tourCardModal.badge}
              </span>

              <h2>{title}</h2>
              <p className={styles.modalLocation}>{location}</p>

              <div className={styles.details}>
                <div>
                  <strong>{t.tourCardModal.price}</strong>
                  <span>ab {price} €</span>
                </div>

                <div>
                  <strong>{t.tourCardModal.travelType}</strong>
                  <span>{t.tourCardModal.travelTypeValue}</span>
                </div>

                <div>
                  <strong>{t.tourCardModal.request}</strong>
                  <span>{t.tourCardModal.requestValue}</span>
                </div>
              </div>

              <p className={styles.modalText}>
                {t.tourCardModal.text}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalButton}
              >
                {t.tourCardModal.whatsappButton}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}