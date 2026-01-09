import BackgroundEffects from "@/components/BackgroundEffects";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden ">
      <BackgroundEffects />
      <div className="relative z-10 flex min-h-screen items-center justify-center ">
        <div className="block max-w-4xl text-center space-y-8 px-4">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-neutral-400 via-white to-neutral-400">
            Ali Hassan
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium text-neutral-300">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
            Self-motivated backend-leaning full stack developer with hands-on
            experience building scalable, secure, and efficient web
            applications. Skilled in API design, database architecture, and
            real-time systems, with solid frontend expertise using modern
            JavaScript frameworks.
          </p>
          <div className="flex justify-center gap-4 pt-6 *:cursor-pointer">
            <button className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition">
              View Projects
            </button>

            <a
              href="/Ali-Hassan-CV.pdf"
              download
              className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition"
            >
              Download CV
            </a>
          </div>
          <Technologies />
          <Projects />
        </div>
      </div>
    </main>
  );
}
