import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import LanguageProvider from "@/components/LanguageProvider/LanguageProvider";

export const metadata = {
  title: {
    default: "Bashkim Tours | Udhëtime me autobus",
    template: "%s | Bashkim Tours",
  },

  description:
    "Bashkim Tours ofron udhëtime me autobus mes Maqedonisë së Veriut, Gjermanisë dhe Zvicrës. Busreisen zwischen Nordmazedonien, Deutschland und der Schweiz.",

  keywords: [
    "Bashkim Tours",
    "udhetime me autobus",
    "udhetime Maqedoni Gjermani",
    "autobus Gjermani Maqedoni",
    "autobus Zvicër Maqedoni",
    "bileta autobusi",
    "rezervim bilete autobus",
    "Tetovë Gjermani autobus",
    "Shkup Gjermani autobus",
    "Gostivar Gjermani autobus",
    "Maqedonia e Veriut Gjermani",
    "Maqedonia Zvicër autobus",

    "Busreisen Deutschland Nordmazedonien",
    "Bus nach Mazedonien",
    "Reisen Schweiz Mazedonien",
    "Busreisen Balkan",
    "Tetovo Bus",
    "Skopje Bus",
    "Gostivar Bus",
  ],

  authors: [{ name: "Bashkim Tours" }],
  creator: "Bashkim Tours",
  metadataBase: new URL("https://bashkimtours.com"),

  openGraph: {
    title: "Bashkim Tours | Udhëtime me autobus",
    description:
      "Udhëtime me autobus mes Maqedonisë së Veriut, Gjermanisë dhe Zvicrës. Busreisen zwischen Nordmazedonien, Deutschland und der Schweiz.",
    url: "https://bashkimtours.com",
    siteName: "Bashkim Tours",
    locale: "sq_AL",
    alternateLocale: ["de_DE"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bashkim Tours | Udhëtime me autobus",
    description:
      "Udhëtime me autobus mes Maqedonisë së Veriut, Gjermanisë dhe Zvicrës.",
  },

  icons: {
    icon: "/icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}