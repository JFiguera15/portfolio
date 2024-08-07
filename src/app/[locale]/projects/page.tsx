import Image from "next/image";
import initTranslations from "@/app/i18n";

function ProjectCard({ title, image, text, tech, link, lang }) {

  return <div className="flex flex-col border-4 p-4 border-primary shadow-2xl rounded-2xl bg-secondary text-gray-300 text-center max-w-96 space-y-4 mx-auto max-h-max transition ease-in-out xl:hover:scale-110">
    <span className="text-2xl font-bold">{title}</span>
    <Image
      src={"/" + image}
      width={200}
      height={200}
      alt="Picture of the project" className="mx-auto" />
    <span className="text-lg">{text}</span>
    <span>{lang("tech")}</span>
    <ul className="mx-auto flex flex-row space-x-2">
      {tech.map((t) => (
        <li key={t}>
          <Image
            src={"/" + t + ".svg"}
            alt={t}
            height={32}
            width={32}
          /></li>
      ))}
    </ul>
    <a className="text-sm underline font-semibold hover:text-gray-500" href={link} target="_blank">{lang("repo")}</a>
  </div>;
}

export default async function Projects({ params: { locale } }) {

  const { t } = await initTranslations(locale, ["projects"], 0, 0)

  return (
    <main className="flex flex-col mt-12">
      <div className="mx-auto flex flex-col space-y-4 md:space-y-0 px-4">
        <h1 className="text-4xl text-center text-secondary mb-4 md:mb-12 font-extrabold animate-fadeDown">{t("projectList")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 gap-y-4 md:gap-y-4 xl:pb-24 animate-fadeUp">
          <ProjectCard
            title={t("ttsTitle")}
            text={t("ttsDesc")}
            image="tts.png"
            tech={["Python"]}
            link={"https://github.com/JFiguera15/TTS"}
            lang={t} />
          <ProjectCard
            title={t("gachaTitle")}
            text={t("gachaDesc")}
            image="gachasim.png"
            tech={["Ruby"]}
            link={"https://github.com/JFiguera15/GachaSim"}
            lang={t} />
          <ProjectCard
            title={t("hrTitle")}
            text={t("hrDesc")}
            image="HR.png"
            tech={["ReactJS", "NodeJS"]}
            link={"https://github.com/JFiguera15/GestionTiempo"}
            lang={t} />
          <ProjectCard
            title={t("animaTitle")}
            text={t("animaDesc")}
            image="anima.png"
            tech={["Java"]}
            link={"https://github.com/JFiguera15/Anima"}
            lang={t} />
          <ProjectCard
            title={t("budgetTitle")}
            text={t("budgetDesc")}
            image="budgeting.png"
            tech={["Java"]}
            link={"https://github.com/JFiguera15/budgeting"}
            lang={t} />
          <ProjectCard
            title={t("triquiTitle")}
            text={t("triquiDesc")}
            image="tictactoe.png"
            tech={["Java"]}
            link={"https://github.com/JFiguera15/Triqui"}
            lang={t} />
          <ProjectCard
            title={t("bookTalkTitle")}
            text={t("bookTalkDesc")}
            image="Booktalk.png"
            tech={["NestJS", "GraphQL"]}
            link={"https://github.com/No-Country-simulation/c19-137-m-node-react"}
            lang={t} />
        </div>
      </div>
    </main>
  );
}