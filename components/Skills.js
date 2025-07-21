import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Zap } from "lucide-react";

// const skillDeck = [
//   {
//     label: "Frontend",
//     icon: <Code size={18} />,
//     tip: "Building beautiful and interactive UIs with spell-like precision.",
//     skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"]
//   },
//   {
//     label: "UI/UX Design",
//     icon: <Layout size={18} />,
//     tip: "Crafting intuitive designs and interactions that enchant users.",
//     skills: ["Figma", "Lottie", "Responsive Design", "Framer Motion", "Microinteractions"]
//   },
//   {
//     label: "Backend",
//     icon: <Database size={18} />,
//     tip: "Weaving powerful backend logic and secure data scrolls.",
//     skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs", "JWT"]
//   },
//   {
//     label: "Tools",
//     icon: <Zap size={18} />,
//     tip: "Empowering my workflow with magical development tools.",
//     skills: ["Git", "GitHub", "Vercel", "Postman", "Render", "Netlify"]
//   }
// ];

const skillDeck = [
  {
    label: "Languages",
    icon: <Code size={18} />,
    tip: "Fluent in spellbinding syntaxes to craft logic and magic.",
    skills: ["Java", "Python", "JavaScript", "HTML", "CSS", "C++ (basics)"]
  },
  {
    label: "Frontend",
    icon: <Layout size={18} />,
    tip: "Weave enchanting interfaces and visual magic.",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "JavaScript"]
  },
  {
    label: "Backend",
    icon: <Database size={18} />,
    tip: "Build sturdy magical engines and secure spellbooks.",
    skills: ["Flask", "Node.js", "Express.js", "RESTful APIs", "JWT"]
  },
  {
    label: "Frameworks",
    icon: <Zap size={18} />,
    tip: "Frameworks to conjure structured enchantments.",
    skills: ["React", "Next.js", "Flask"]
  },
  {
    label: "Libraries",
    icon: <Zap size={18} />,
    tip: "Powerful potions for data sorcery and user delight.",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "@hello-pangea/dnd", "Framer Motion", "Lottie"]
  },
  {
    label: "Databases",
    icon: <Database size={18} />,
    tip: "Scrolls to preserve mystical knowledge and logs.",
    skills: ["MySQL", "MongoDB", "Firebase"]
  },
  {
    label: "Developer Tools",
    icon: <Zap size={18} />,
    tip: "Wands and artifacts used in everyday spell-crafting.",
    skills: [
      "VS Code", "Eclipse", "Google Colab",
      "Git", "GitHub", "JIRA", "Command Prompt",
      "Postman", "Render", "Netlify", "Vercel"
    ]
  },
  {
    label: "Core CS Concepts",
    icon: <Code size={18} />,
    tip: "Foundational runes for crafting powerful digital spells.",
    skills: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management",
      "Software Engineering",
      "Operating Systems",
      "RESTful APIs",
      "Design Patterns"
    ]
  }
];


export default function SkillsSection() {
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleFlip = (label) => {
    setFlippedCard((prev) => (prev === label ? null : label));
  };

  return (
    <section id="skills" className="min-h-screen px-6 py-20 text-center text-rose-100">
      <h2 className="text-4xl font-playfair text-rose-100 mb-12 drop-shadow-[0_0_10px_#ffd700]">🌼 My Skills Deck</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto cursor-pointer">
        {skillDeck.map((card) => {
          const isFlipped = flippedCard === card.label;
          return (
            <div key={card.label} className="perspective" onClick={() => toggleFlip(card.label)}>
              <div
                className={`relative w-full h-64 transition-transform duration-700 preserve-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="card-face front bg-yellow-50 text-green-800">
                  <div className="text-2xl flex items-center gap-2">
                    {card.icon}
                    <span className="font-bold">{card.label}</span>
                  </div>
                  <p className="text-xs italic mt-2">Click to flip and reveal ✨</p>
                </div>

                {/* Back Side */}
                <div className="card-face back bg-yellow-100 text-red-800 transform rotate-y-180 overflow-y-auto w-72">
                  <p className="text-lg font-semibold mb-1">🍄 {card.label}</p>
                  <p className="text-sm italic mb-3">{card.tip}</p>
                  <ul className="text-xs text-center flex flex-wrap gap-4 justify-center">
                    {card.skills.map((s, idx) => (
                      <li key={idx} className="border border-2 px-2 border-red-900 rounded-full flex justify-center items-center">✨{s}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-green-800 italic">Click again to flip back</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 0.75rem;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
        }
        .card-face.back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
