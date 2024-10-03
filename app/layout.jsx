import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Page",
  description: "Welcome To My Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <header className="header">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </header>

        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
