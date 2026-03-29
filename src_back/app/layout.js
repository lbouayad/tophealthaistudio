import Footer from "./components/Abstracts/Footer";
import Header from "./components/Abstracts/Header";
import "./globals.css";

export const metadata = {
  title: "Top Health AI Studio",
  description:
    "Responsible AI Education & Research for Healthcare. Advancing clinically defensible AI through structured evaluation, prototype-based testing, and interdisciplinary collaboration.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bgWhite">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
