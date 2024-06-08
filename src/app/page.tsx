import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row mt-12 md:mt-24 md:ml-24 md:mb-32">
      <div className="md:h-64 flex flex-col md:flex-row md:space-x-28 space-y-4 md:space-y-0">
        <Image
          src="/picture.jpg"
          width={250}
          height={200}
          alt="Picture of me" className="rounded-full mx-auto" />
        <div className="flex flex-col text-center md:text-left text-secondary space-y-2 md:space-y-4">
          <span className="text-4xl">Hello! My name is</span>
          <span className="text-6xl text-orange-400">Juan Antonio Figuera!</span>
          <span className="text-5xl">A Software Developer.</span>
          <span className="text-3xl">I&apos;ve loved programming ever since high school. I work with both Desktop and Web Development.</span>
          <span className="text-xl">I can speak Spanish, English, a bit of German, and an even smaller bit of Japanese.</span>
          <span className="text-xl">Feel free to go through the links above to check out what kind of stuff I&apos;ve done!</span>
        </div>
      </div>
    </main>
  );
}
