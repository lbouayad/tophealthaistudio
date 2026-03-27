import Footer from "./components/Abstracts/Footer";
import Header from "./components/Abstracts/Header";
import "./globals.css";

export const metadata = {
  title: "Applina | Health AI Prototype Validation",
  description:
    "Applina is the platform for publishing, testing, and validating health and wellness AI prototypes in realistic environments before deployment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-bgWhite"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
