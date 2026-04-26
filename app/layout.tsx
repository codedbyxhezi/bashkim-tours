import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";
import LanguageProvider from "@/components/LanguageProvider/LanguageProvider";

export const metadata = {
  title: 'Bashkim Tours',
  description: 'Reisen zwischen Nordmazedonien, Deutschland und der Schweiz',
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