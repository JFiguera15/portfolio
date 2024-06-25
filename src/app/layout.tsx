import type { Metadata } from "next";
import { Inter, Comfortaa, Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Antonio Figuera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <Navbar/>
        {children}
        <div className="py-16 md:py-12 xl:py-0"></div>
        <Footer/>
      </body>

    </html>
  );
}
