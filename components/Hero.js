import { Download, Github} from "lucide-react";
import {SiLeetcode} from "react-icons/si";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center pt-40 pb-20 px-4 text-white relative z-10">
      <h1 className="text-5xl md:text-6xl font-playfair text-rose-100 drop-shadow-[0_0_10px_#ffd700] animate-fade-in-slow">
        Welcome to  Vishalakshi's Code Forest
      </h1>
      <p className="mt-4 text-lg max-w-xl text-white/80">
        A magical realm where my code glows, creativity flows, and projects bloom. Feel free to roam here! ✨
      </p>
      <div className=" flex gap-4">
      <a
        href="https://github.com/Vishalakshi-9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-yellow-100 text-yellow-100 px-2 py-1 mt-4 rounded hover:bg-yellow-100 hover:text-black transition"
      >
        <Github size={18} />
        GitHub
      </a>
      <a
        href="https://leetcode.com/u/vishuuuuu902/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-yellow-100 text-yellow-100 px-2 py-1 mt-4 rounded hover:bg-yellow-100 hover:text-black transition"
      >
        <SiLeetcode size={18} color="yellow-100" />
        LeetCode
      </a>
      </div>

     

<a
  href="/xperi.pdf"
  target="_blank"
  className="inline-flex items-center gap-2 border-2 border-yellow-100 text-yellow-100 px-4 py-2 mt-4 rounded hover:bg-yellow-100 hover:text-black transition"
>
  <Download size={18} />
  Download Resume
</a>



      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-60 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

    </section>


  );
}
