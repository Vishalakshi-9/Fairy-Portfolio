// Starry Owl Messenger Contact Section
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export default function ContactSection() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <section id="contact" className="min-h-screen px-6 py-20 text-center  text-white">
      <h2 className="text-4xl font-playfair text-rose-100 mb-12 drop-shadow-[0_0_10px_#ffd700]">
        🦉 Contact Me
      </h2>
<div className="flex gap-3 item-center justify-center">
<a
  href="vishuuuu902@gmail.com"
  className="inline-flex items-center gap-2 border-2 border-yellow-100 text-yellow-100 px-1 py-2 rounded-xl hover:bg-yellow-100 hover:text-black transition"
>
  <Mail size={18} />
 E-mail Me
</a>
<a
  href="https://www.linkedin.com/in/vishalakshi-kumari-92177a280"
  className="inline-flex items-center gap-2 border-2 border-yellow-100 text-yellow-100 px-1 py-2 rounded-xl hover:bg-yellow-100 hover:text-black transition"
>
  <SiLinkedin size={18} />
 Connect Here
</a>
</div>


      <div className="flex flex-col items-center justify-center space-y-6">
        {!formVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="cursor-pointer"
            onClick={() => setFormVisible(true)}
          >
            <Image
              src="/images/owl.png"
              alt="Owl Messenger"
              width={150}
              height={150} 
              className="hover:scale-105 transition-transform drop-shadow-[0_0_20px_#fff] mt-10"
            />
            <p className="mt-2 text-sm italic text-white">Click the owl to send a message ✨</p>
          </motion.div>
        )}

        <AnimatePresence>
          {formVisible && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg text-left text-gray-900 max-w-md w-full"
            >
              <label className="block mb-4">
                <span className="text-sm font-semibold">Name</span>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded border mt-1"
                  placeholder="Your name"
                />
              </label>
              <label className="block mb-4">
                <span className="text-sm font-semibold">Email</span>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded border mt-1"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block mb-4">
                <span className="text-sm font-semibold">Message</span>
                <textarea
                  rows="4"
                  className="w-full px-3 py-2 rounded border mt-1"
                  placeholder="Your message..."
                ></textarea>
              </label>
              <button
                type="submit"
                className="w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-900 transition"
              >
                Send 🕊️
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
