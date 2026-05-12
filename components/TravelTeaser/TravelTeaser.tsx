"use client";

import Link from "next/link";
import styles from "./TravelTeaser.module.css";
import { useLanguage } from "@/components/LanguageProvider/LanguageProvider";

export default function TravelTeaser() {
  const { locale } = useLanguage();

  const content =
    locale === "sq"
      ? {
          badge: "Udhëtime të preferuara",
          title: "Zbulo disa nga destinacionet tona",
          text: "Shiko disa udhëtime të njohura dhe hap faqen e udhëtimeve për më shumë detaje.",
          button: "Shiko udhëtimet",
          items: [
            { title: "Gjermani", image: "/images/germany.jpg" },
            { title: "Zvicër", image: "/images/swiss.jpg" },
            { title: "Shqipëri", image: "/images/albania.jpg" },
            { title: "Mal i Zi", image: "/images/montenegro.jpg" },
            { title: "Turqi", image: "/images/turkey.jpg" },
          ],
        }
      : {
          badge: "Beliebte Reisen",
          title: "Entdecke einige unserer Reiseziele",
          text: "Sieh dir ein paar beliebte Reisen an und öffne die Reiseseite für mehr Details.",
          button: "Reisen ansehen",
          items: [
            { title: "Deutschland", image: "/images/germany.jpg" },
            { title: "Schweiz", image: "/images/swiss.jpg" },
            { title: "Albanien", image: "/images/albania.jpg" },
            { title: "Montenegro", image: "/images/montenegro.jpg" },
            { title: "Türkei", image: "/images/turkey.jpg" },
          ],
        };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.badge}>{content.badge}</span>
          <h2>{content.title}</h2>
          <p>{content.text}</p>

          <Link href="/tours" className={styles.button}>
            {content.button}
          </Link>
        </div>

        <div className={styles.cards}>
          {content.items.map((item, index) => (
            <Link href="/tours" key={item.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.cardContent}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}