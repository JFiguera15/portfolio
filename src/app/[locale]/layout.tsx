import type { Metadata } from "next";
import { Inter, Comfortaa, Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import i18nConfig from "@@/i18nConfig";
import TranslationsProvider from "./components/TranslationsProvider";
import initTranslations from "../i18n";

const gabarito = Gabarito({ subsets: ["latin"] });
const i18nNamespaces = ["common", "contactMe"]

export const metadata: Metadata = {
  title: "Juan Antonio Figuera",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces, 0, 0)
  return (
    <html lang={locale}>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}>
        <body className={gabarito.className}>
          <Navbar />
          {children}
          <div className="py-16 md:py-12 xl:py-0"></div>
          <Footer params={{ locale }} />
        </body>
      </TranslationsProvider>
    </html>
  );
}
