// components/MushroomNav.js
import { motion } from 'framer-motion';
import Image from 'next/image';

const navItems = [
  { label: 'Home', id: '#hero', img: '/images/home.png' },
  { label: 'About', id: '#about', img: '/images/about.png' },
  { label: 'Projects', id: '#projects', img: '/images/projects.png' },
  { label: 'Skills', id: '#code', img: '/images/skills.png' },
  { label: 'Contact', id: '#contact', img: '/images/contact.png' },
];

export default function MushroomNav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-10 px-8 py-4 backdrop-blur-md rounded-full border border-yellow-400 shadow-2xl">
      {navItems.map((item, idx) => (
        <motion.a
          key={idx}
          href={item.id}
          whileHover={{ y: -6, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex flex-col items-center group"
        >
          <Image
            src={item.img}
            alt={item.label}
            width={40}
            height={40}
            className="hover:drop-shadow-[0_0_6px_gold] transition duration-300"
          />
          <span className="text-[11px] text-white mt-1">{item.label}</span>
        </motion.a>
      ))}
    </nav>
  );
}