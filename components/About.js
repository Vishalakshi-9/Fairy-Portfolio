import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 mt-34"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center border border-2 border-yellow-100 px-6 py-6 rounded-xl bg-sage-500 bg-opacity-50 backdrop-blur-sm"
      >
         <h2 className="text-4xl font-playfair drop-shadow-[0_0_10px_#ffd700] text-rose-100 mb-6">
          🌼 About Me
        </h2>
        <p className="text-lg text-yellow-100 font-light leading-relaxed">
          Hi, I&apos;m <strong>Vishalakshi Kumari</strong>, a B.Tech student in Computer Science & Engineering at KIIT, with a passion for transforming code into beautiful, intuitive experiences. I'm an aspiring software developer who loves solving real-world problems through clean, efficient code.
        </p>
        <p className="text-lg text-yellow-100 font-light mt-4">
          I enjoy building creative UIs, experimenting with animation and design, and working on products that feel magical and meaningful. When I&apos;m not coding, you&apos;ll find me exploring ideas, sipping tea, or solving LeetCode challenges. Thanks for stopping by — I hope my portfolio brings a bit of bloom and wonder to your day! 🌼
        </p>
        <Image src={'/images/Resume_pic.png'} width={100} height={100} alt="Resume Picture"
        className=" border-2 border-yellow-100 drop-shadow-[0_0_10px_#fff200] rounded-full mx-auto mt-4 transition-all"/>
      </motion.div>
    </section>
  );
}
