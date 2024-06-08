import Image from "next/image";


function ProjectCard({ title, image, text, tech, link }) {
  return <div className="flex flex-col border-4 border-orange-400 shadow-xl rounded-md bg-secondary text-black text-center max-w-96 space-y-4 mx-auto max-h-max">
    <span className="text-2xl font-bold">{title}</span>
    <Image
      src="/picture.jpg"
      width={200}
      height={200}
      alt="Picture of me" className="mx-auto" />
    <span className="text-lg">{text}</span>
    <span>Technologies used:</span>
    <ul className="mx-auto flex flex-row space-x-2">
      {tech.map((t) => (
        <li key={t}>
          <Image
            src={t + ".svg"}
            alt={t}
            height={32}
            width={32}
          /></li>
      ))}
    </ul>
    <a className="text-sm" href={link} target="_blank">Repository</a>
  </div>;
}

export default function Projects() {
  return (
    <main className="flex flex-col mt-12">
      <div className="mx-auto flex flex-col space-y-4 md:space-y-0">
        <h1 className="text-4xl text-center mb-4 md:mb-12">List of projects I&apos;ve made:</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-4 space-y-4 md:space-y-0 ">
          <ProjectCard
            title={"Automatic TTS Reader"}
            text={"This program automatically detects the text on a section of the screen and reads it automatically in different languages."}
            image="hola"
            tech={["Python"]}
            link={"https://github.com/JFiguera15/TTS"} />
          <ProjectCard
            title={"Gacha Simulator"}
            text={"Simulates the experience of pulling in a gacha, and provides statistics. Currently based on Honkai Star rail numbers and characters."}
            image="hola"
            tech={["Ruby"]}
            link={"https://github.com/JFiguera15/GachaSim"} />
            <ProjectCard
            title={"HR Management System"}
            text={"Project made for my thesis, information system that allows to manage employee information, as well as vacation time."}
            image="hola"
            tech={["ReactJS", "NodeJS"]}
            link={"https://github.com/JFiguera15/GestionTiempo"} />
        </div>
      </div>
    </main>
  );
}