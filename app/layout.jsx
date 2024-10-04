import { IBM_Plex_Mono, Ubuntu } from 'next/font/google'
import "./globals.css";
import Header from "/app/components/header/page.jsx"
import Footer from "/app/components/footer/page.jsx"

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
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
