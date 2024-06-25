import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col xl:flex-row mt-12 md:translate-y-16 xl:translate-y-0 xl:mt-44 xl:ml-24 xl:mb-32">
      <div className="xl:h-64 flex flex-col xl:flex-row xl:space-x-28 space-y-4 xl:space-y-0">
        <Image
          src="/picture.jpg"
          width={250}
          height={200}
          alt="Picture of me" className="rounded-full mx-auto animate-fadeUp" />
        <div className="flex flex-col text-center xl:text-left text-secondary space-y-2 xl:space-y-4 px-4 ">
          <span className="text-4xl font-semibold animate-fadeUp">Hello! My name is</span>
          <span className="text-6xl text-primary font-extrabold animate-fadeUp">Juan Antonio Figuera!</span>
          <span className="text-5xl font-bold animate-fadeUp">A Software Developer.</span>
          <span className="text-3xl font-semibold animate-fadeUp">I&apos;ve loved programming ever since high school. I work with both Desktop and Web Development.</span>
          <span className="text-xl font-semibold animate-fadeUp">I can speak Spanish, English, a bit of German, and an even smaller bit of Japanese.</span>
          <span className="text-2xl font-bold animate-fadeUp">Feel free to go through the links above to check out what kind of stuff I&apos;ve done!</span>
        </div>
      </div>
    </main>
  );
}
