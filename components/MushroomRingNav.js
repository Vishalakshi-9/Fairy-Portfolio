import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "About", href: "#about", img: "/images/about.png" },
  { label: "Skills", href: "#skills", img: "/images/skills.png" },
  { label: "Projects", href: "#projects", img: "/images/projects.png" },
  { label: "Contact", href: "#contact", img: "/images/contact.png" },
];

export default function MushroomRingNav() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Central glowing orb */}
      <div className="absolute z-10 text-center">
        <h1 className="text-2xl md:text-4xl font-playfair text-white drop-shadow-[0_0_12px_#f8bbd0] animate-fade-in">
          Choose Your Path 🍄
        </h1>
        <p className="mt-2 text-white/80 text-sm">Click a mushroom to explore the forest</p>
      </div>

      {/* Glowing Mushrooms in a Ring */}
      <div className="relative w-80 h-80 md:w-[26rem] md:h-[26rem]">
        {navItems.map((item, i) => {
          const angle = (i / navItems.length) * 2 * Math.PI;
          const x = 50 + 42 * Math.cos(angle); // position in %
          const y = 50 + 42 * Math.sin(angle);

          return (
            <motion.a
              key={item.label}
              href={item.href}
              className="absolute w-14 h-14 md:w-16 md:h-16 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ top: `${y}%`, left: `${x}%` }}
              whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
              transition={{ type: "tween", duration: 0.4 }}
            >
              <Image
                src={item.img}
                alt={item.label}
                width={64}
                height={64}
                className="drop-shadow-[0_0_10px_gold] hover:drop-shadow-[0_0_16px_gold] transition duration-300"
              />
            </motion.a>
          );
        })}
      </div>

      {/* Optional: sparkles behind */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold-300 rounded-full opacity-70 animate-float1"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
