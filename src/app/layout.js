import Footer from "./components/Abstracts/Footer";
import Header from "./components/Abstracts/Header";
import "./globals.css";

export const metadata = {
  title: "Top Health AI",
  icons: {
    icon: "/ai.png",
  },
  description:
    "Join the #1 platform connecting U.S. doctors with patients overseas in need of critical second opinions.",
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
