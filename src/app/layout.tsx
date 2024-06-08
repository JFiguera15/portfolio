import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Image from "next/image";

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
      <body className="flex flex-col">
        <ul className="flex flex-row mt-8 space-x-4 font-bold text-xl md:text-3xl justify-center md:justify-end md:pr-10 [&_li:hover]:text-secondary">
          <li className="my-auto cursor-pointer"><Link href="/">About me</Link></li>
          <li className="my-auto"><Link href="/projects">Projects</Link></li>
          <li className="my-auto"><Link href="/skills">Skills</Link></li>
          <li className="my-auto"><Link href="/contact">Contact me</Link></li>
        </ul>
        {children}
        <div className="py-16 md:py-0"></div>
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made by Juan Figuera using NextJS.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="https://www.linkedin.com/in/juan-antonio-figuera/" target="_blank" className="hover:underline me-4 md:me-6">Linkedin</a>
            </li>
            <li>
              <a href="https://github.com/JFiguera15" className="hover:underline me-4 md:me-6" target="_blank">Github</a>
            </li>
          </ul>
        </footer>

      </body>

    </html>
  );
}
