import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import WhatsAppButton from "@/components/WhatsApp/WhatsAppButton";

export const metadata = {
  title: 'Bashkim Tours',
  description: 'Reisen zwischen Deutschland und Nordmazedonien',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}