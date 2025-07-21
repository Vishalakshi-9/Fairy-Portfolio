// Lantern-themed Projects Section
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Taskella - The Blossom Dashboard",
    description: [
      "Developed a floral-themed Kanban dashboard visualizing tasks as seeds bloom in flowers across workflow stages.",
      "Designed efficient data structures and algorithms for smooth drag-and-drop interactions.",
      "Implemented unit testing to ensure software quality, scalability, and maintainability."
    ],
    tech: ["React", "TailwindCSS", "Framer Motion", "@hello-pangea/dnd", "JavaScript"],
    link: "https://taskella-nqc8.vercel.app/",
    img: "/images/Taskella.png",
    lantern: "/images/lantern.png"
  },
  {
    title: "PrepBloom – AI-Powered Mock Interview Platform",
    description: [
      "Developed an interactive platform simulating real-time interviews using Next.js and Gemini AI.",
      "Applied object-oriented design and modular architecture for scalability and maintainability.",
      "Integrated Clerk for secure authentication and Drizzle ORM with PostgreSQL for efficient data handling.",
      "Focused on performance optimization and secure coding practices."
    ],
    tech: ["Next.js", "React", "Gemini AI", "Clerk", "Drizzle ORM", "PostgreSQL", "Tailwind CSS"],
    link: "https://prep-bloom-9fat.vercel.app/",
    img: "/images/prepbloom.png",
    lantern: "/images/lantern.png"
  }
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleProject = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-center text-rose-100">
      <h2 className="text-4xl font-playfair text-rose-100 mb-12 drop-shadow-[0_0_10px_#ffd700]">
        🏮 Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto border border-1 border-yellow-200 rounded-xl py-5 backdrop-blur-sm">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => toggleProject(i)}
          >
            <motion.img
              src={project.lantern}
              alt="Lantern"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="w-25 h-25 mb-2 hover:scale-105 transition-transform drop-shadow-[0_0_10px_#ffd700]"
            />
            <p className="text-lg font-playfair text-yellow-100 drop-shadow mt-2">{project.title}</p>

            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/90 rounded-xl p-4 shadow-xl text-left text-rose-800 backdrop-blur-md mt-4 max-w-sm "
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <Image src={project.img} width={700} height={700} alt="" />
                  <ul className="text-sm mb-3 list-disc list-inside space-y-1">
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 text-xs font-medium">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-200 text-yellow-900 px-2 py-1 rounded shadow"
                      >
                        ✨ {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="block mt-4 text-xs underline text-green-800 hover:text-green-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Peep inside↗
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
