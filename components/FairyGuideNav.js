import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import Wizard from './assets/Wizard.json';

const navItems = [
  { label: "Home", id: "#hero", img: "/images/home.png" },
  { label: "About", id: "#about", img: "/images/about.png" },
  { label: "Projects", id: "#projects", img: "/images/projects.png" },
  { label: "Skills", id: "#skills", img: "/images/skills.png" },
  { label: "Contact", id: "#contact", img: "/images/contact.png" },
];

export default function FairyGuideNav() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    const sparkle = document.createElement("div");
    sparkle.className = "fixed inset-0 pointer-events-none z-[99] sparkle-burst";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setOpen(false);
    if (open) window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <div className="fixed top-6 left-6 z-[100]">
      {/* Fairy Button */}
      <button
        onClick={handleToggle}
        aria-label="Toggle fairy navigation"
        className="w-24 h-24 rounded-full cursor-pointer drop-shadow-xl" // Increased size
      >
        <Lottie animationData={Wizard} loop style={{ width: 96, height: 96 }} /> {/* Increased animation size */}
      </button>

      {/* Whispering Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 15 }}
            className="absolute top-2 left-80 p-4 rounded-xl flex flex-row gap-20 w-64 text-white" 
          >
            {navItems.map((item, index) => (
                <motion.a
                        key={item.label}
                        href={item.id}
                        whileHover={{ y: -6, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="flex flex-col items-center group "
                      >
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={60}
                          height={60}
                          className="hover:drop-shadow-[0_0_6px_gold] transition duration-300 rounded-full"
                        />
                        <span className="text-[11px] text-white mt-1">{item.label}</span>
                      </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
