export default function Home() {
  return (
    <main className="flex flex-col mt-12">
      <div className="flex flex-col mx-auto">
        <h1 className="text-4xl text-center">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-6">
          <div className="bg-secondary text-black text-xl rounded-md mt-8 border-4 border-orange-400 shadow-xl">
            <span className="font-bold">Web Development</span>
            <ul className="list-disc list-inside ml-3">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="bg-secondary text-black text-xl rounded-md mt-8 border-4 border-orange-400 shadow-xl">
            <span className="font-bold">Desktop Development</span>
            <ul className="list-disc list-inside ml-3">
              <li>Java</li>
              <li>Python</li>
              <li>Ruby</li>
            </ul>
          </div>
          <div className="bg-secondary text-black text-xl rounded-md mt-8 border-4 border-orange-400 shadow-xl">
            <span className="font-bold">Database Management</span>
            <ul className="list-disc list-inside ml-3">
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQLite3</li>
            </ul>
          </div>
          <div className="bg-secondary text-black text-xl rounded-md mt-8 border-4 border-orange-400 shadow-xl">
            <span className="font-bold">General Development skills</span>
            <ul className="list-disc list-inside ml-3">
              <li>Unity</li>
              <li>C/C++</li>
              <li>C#</li>
            </ul>
          </div>
          <div className="bg-secondary text-black text-xl rounded-md mt-8 border-4 border-orange-400 shadow-xl">
            <span className="font-bold">Tools</span>
            <ul className="list-disc list-inside ml-3">
              <li>Git</li>
              <li>Github</li>
              <li>VSCode</li>
            </ul>
          </div>
          <div className="bg-secondary text-black text-xl rounded-md mt-8 border-4 border-orange-400 shadow-xl">
            <span className="font-bold">Others</span>
            <ul className="list-disc list-inside ml-3">
              <li>Photo & Video Editing</li>
              <li>English - Spanish Translation</li>
              <li>Communication</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}