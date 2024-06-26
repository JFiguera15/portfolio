import Image from "next/image";
import initTranslations from "../i18n";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["home"], 0, 0)

  return (
    <main className="flex flex-col xl:flex-row mt-12 md:translate-y-16 xl:translate-y-0 xl:mt-44 xl:ml-24 xl:mb-32">
      <div className="xl:h-64 flex flex-col xl:flex-row xl:space-x-28 space-y-4 xl:space-y-0">
        <Image
          src="/picture.jpg"
          width={250}
          height={200}
          alt="Picture of me" className="rounded-full mx-auto animate-fadeUp" />
        <div className="flex flex-col text-center xl:text-left text-secondary space-y-2 xl:space-y-4 px-4 ">
          <span className="text-4xl font-semibold animate-fadeUp">{t("greeting")}</span>
          <span className="text-6xl text-primary font-extrabold animate-fadeUp">{t("name")}</span>
          <span className="text-5xl font-bold animate-fadeUp">{t("title")}</span>
          <span className="text-3xl font-semibold animate-fadeUp">{t("devTypes")}</span>
          <span className="text-xl font-semibold animate-fadeUp">{t("languages")}</span>
          <span className="text-2xl font-bold animate-fadeUp">{t("links")}</span>
        </div>
      </div>
    </main>
  );
}
