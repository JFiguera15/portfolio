import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ul className="flex flex-row mt-8 space-x-4 font-bold text-xl md:text-3xl justify-center md:justify-end md:pr-10 [&_li:hover]:text-secondary">
          <li className="my-auto cursor-pointer"><Link href="/">About me</Link></li>
          <li className="my-auto"><Link href="/projects">Projects</Link></li>
          <li className="my-auto"><Link href="/skills">Skills</Link></li>
          <li className="my-auto"><Link href="/contact">Contact me</Link></li>
        </ul>
        {children}
      </body>

    </html>
  );
}
