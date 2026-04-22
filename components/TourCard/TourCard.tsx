"use client";

import styles from "./TourCard.module.css";

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
  const PHONE = "491234567890";

  const message = `Hallo 👋 ich interessiere mich für die Reise "${title}" (${location}). Können Sie mir mehr Infos geben?`;

  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />

        <span className={styles.badge}>Beliebt</span>
      </div>

      <div className={styles.content}>
        <p className={styles.location}>{location}</p>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.footer}>
          <span className={styles.price}>ab {price} €</span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Anfragen
          </a>
        </div>
      </div>
    </article>
  );
}