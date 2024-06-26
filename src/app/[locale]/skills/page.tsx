import initTranslations from "@/app/i18n";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["skills"], 0, 0)

  return (
    <main className="flex flex-col mt-12 px-4">
      <div className="flex flex-col mx-auto">
        <h1 className="text-4xl text-center text-secondary font-extrabold animate-fadeDown">{t("mySkills")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-x-6 animate-fadeUp">
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("webDev")}</span>
            <ul className="list-disc list-inside ml-3">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("desktopDev")}</span>
            <ul className="list-disc list-inside ml-3">
              <li>Java</li>
              <li>Python</li>
              <li>Ruby</li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("db")}</span>
            <ul className="list-disc list-inside ml-3">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQLite3</li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("generalSkills")}</span>
            <ul className="list-disc list-inside ml-3">
              <li>Unity</li>
              <li>C/C++</li>
              <li>C#</li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("tools")}</span>
            <ul className="list-disc list-inside ml-3">
              <li>Git</li>
              <li>Github</li>
              <li>VSCode</li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("others")}</span>
            <ul className="list-disc list-inside ml-3">
              <li>{t("editing")}</li>
              <li>{t("translation")}</li>
              <li>{t("communication")}</li>
              <li>{t("teamwork")}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}