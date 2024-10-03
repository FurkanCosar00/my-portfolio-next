import { IBM_Plex_Mono, Ubuntu } from 'next/font/google'
import "./globals.css";
import Header from "/app/components/header/page.jsx"
import Footer from "/app/components/footer/page.jsx"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'], // Tüm ağırlıklar
  style: ['normal', 'italic'], // Normal ve italik stiller
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Ubuntu için tüm ağırlıklar
  style: ['normal', 'italic'], // Normal ve italik stiller
})

export const metadata = {
  title: "Portfolio Page",
  description: "Welcome To My Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} ${ubuntu.className}`}>
        <Header />

        <div className="container">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
