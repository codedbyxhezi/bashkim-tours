"use client";

import { usePathname } from "next/navigation";
import styles from "./WhatsAppButton.module.css";

const PHONE_NUMBER = "491234567890"; // ohne +, ohne Leerzeichen

export default function WhatsAppButton() {
  const pathname = usePathname();

  const getMessage = () => {
    switch (pathname) {
      case "/":
        return "Hallo, ich interessiere mich für Bashkim Tours und hätte gerne mehr Informationen.";
      case "/tours":
        return "Hallo, ich interessiere mich für eure Touren und hätte gerne mehr Informationen.";
      case "/booking":
        return "Hallo, ich möchte gerne eine Reise bei Bashkim Tours buchen.";
      case "/contact":
        return "Hallo, ich habe eine Frage an Bashkim Tours.";
      default:
        return "Hallo, ich interessiere mich für Bashkim Tours.";
    }
  };

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    getMessage()
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="WhatsApp kontaktieren"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className={styles.icon}
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16 .5C7.5.5.5 7.3.5 15.6c0 2.7.7 5.2 2 7.5L.5 31.5l8.7-2.3c2.2 1.2 4.8 1.9 7.4 1.9 8.5 0 15.5-6.8 15.5-15.6S24.5.5 16 .5zm0 28.3c-2.3 0-4.6-.6-6.6-1.7l-.5-.3-5.2 1.4 1.4-5.1-.3-.5c-1.3-2-2-4.3-2-6.7C2.8 8.5 8.8 2.8 16 2.8s13.2 5.7 13.2 12.8S23.2 28.8 16 28.8zm7.3-9.6c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-1.9-1.2-1-2-2.2-2.2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.3 3.1 1.5 3.3c.2.2 2.6 4.1 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.2-.7-.4z"
        />
      </svg>

      <span className={styles.text}>WhatsApp</span>
    </a>
  );
}