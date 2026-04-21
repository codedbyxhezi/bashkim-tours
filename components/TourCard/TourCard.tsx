import styles from './TourCard.module.css';

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
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <p className={styles.location}>{location}</p>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.footer}>
          <span className={styles.price}>ab {price} €</span>
          <button className={styles.button}>Buchen</button>
        </div>
      </div>
    </article>
  );
}