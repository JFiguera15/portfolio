import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row mt-12">

      <div className="mx-auto md:h-64 flex flex-col md:flex-row md:space-x-28 space-y-4 md:space-y-0">
        <Image
          src="/picture.jpg"
          width={200}
          height={200}
          alt="Picture of me" className="rounded-full mx-auto" />
        <div className="text-center flex flex-col mt-12">
          <h1 className="text-4xl">Hello! I&apos;m Juan Antonio Figuera, Software Developer</h1>
          <span className="text-2xl">I&apos;ve loved programming ever since I took my first class. I know both Desktop and Web Development. </span>
        </div>
      </div>
    </main>
  );
}
