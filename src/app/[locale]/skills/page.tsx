import initTranslations from "@/app/i18n";
import Image from "next/image";


export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["skills"], 0, 0)

  return (
    <main className="flex flex-col mt-12 px-4">
      <div className="flex flex-col mx-auto">
        <h1 className="text-4xl text-center text-secondary font-extrabold animate-fadeDown">{t("mySkills")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 md:gap-x-6 animate-fadeUp">
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("webDev")}</span>
            <ul className="ml-3 mt-4 space-y-3">
              <li className="flex space-x-2"><Image src={"/html5.svg"} alt="HTML" width={24} height={24}/><span>HTML</span></li>
              <li className="flex space-x-2"><Image src={"/css.svg"} alt="CSS" width={24} height={24}/><span>CSS</span></li>
              <li className="flex space-x-2"><Image src={"/javascript.svg"} alt="Javascript" width={24} height={24}/><span>JavaScript</span></li>
              <li className="flex space-x-2"><Image src={"/ReactJS.svg"} alt="ReactJS" width={24} height={24}/><span>ReactJS</span></li>
              <li className="flex space-x-2"><Image src={"/NextJS.svg"} alt="NextJS" width={24} height={24}/><span>NextJS</span></li>
              <li className="flex space-x-2"><Image src={"/NodeJS.svg"} alt="NodeJS" width={24} height={24}/><span>NodeJS</span></li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("desktopDev")}</span>
            <ul className="ml-3 mt-4 space-y-3">
              <li className="flex space-x-2"><Image src={"/Java.svg"} alt="Java" width={24} height={24}/><span>Java</span></li>
              <li className="flex space-x-2"><Image src={"/Python.svg"} alt="Python" width={24} height={24}/><span>Python</span></li>
              <li className="flex space-x-2"><Image src={"/Ruby.svg"} alt="Ruby" width={24} height={24}/><span>Ruby</span></li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("db")}</span>
            <ul className="ml-3 mt-4 space-y-3">
              <li className="flex space-x-2"><Image src={"/mysql.svg"} alt="MySQL" width={24} height={24}/><span>MySQL</span></li>
              <li className="flex space-x-2"><Image src={"/postgresql.svg"} alt="PostgreSQL" width={24} height={24}/><span>PostgreSQL</span></li>
              <li className="flex space-x-2"><Image src={"/sqlite.svg"} alt="SQLite3" width={24} height={24}/><span>SQLite3</span></li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("generalSkills")}</span>
            <ul className="ml-3 mt-4 space-y-3">
              <li className="flex space-x-2"><Image src={"/unity_dark.svg"} alt="Unity" width={24} height={24}/><span>Unity</span></li>
              <li className="flex space-x-2"><Image src={"/c++.svg"} alt="C++" width={24} height={24}/><span>C++</span></li>
              <li className="flex space-x-2"><Image src={"/csharp.svg"} alt="C#" width={24} height={24}/><span>C#</span></li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("tools")}</span>
            <ul className="ml-3 mt-4 space-y-3">
              <li className="flex space-x-2"><Image src={"/git.svg"} alt="C#" width={24} height={24}/><span>Git</span></li>
              <li className="flex space-x-2"><Image src={"/github.svg"} alt="C#" width={24} height={24}/><span>Github</span></li>
              <li className="flex space-x-2"><Image src={"/vscode.svg"} alt="C#" width={24} height={24}/><span>VSCode</span></li>
            </ul>
          </div>
          <div className="bg-secondary text-gray-300 text-xl rounded-md mt-8 p-4 border-4 border-primary transition ease-in-out xl:hover:scale-110">
            <span className="font-bold">{t("others")}</span>
            <ul className="ml-3 mt-4 space-y-3">
              <li className="flex space-x-2"><span>📷</span><span>{t("editing")}</span></li>
              <li className="flex space-x-2"><span>📝</span><span>{t("translation")}</span></li>
              <li className="flex space-x-2"><span>🗣</span><span>{t("communication")}</span></li>
              <li className="flex space-x-2"><span>🤝</span><span>{t("teamwork")}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}