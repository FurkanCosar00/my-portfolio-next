import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Portfolio Page",
  description: "Welcome To My Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
