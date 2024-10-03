import localFont from "next/font/local";
import "./globals.css";
import Header from "/app/components/header/page.jsx"

export const metadata = {
  title: "Portfolio Page",
  description: "Welcome To My Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <header className="header">
          <Header />
        </header>

        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
