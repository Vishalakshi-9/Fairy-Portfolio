import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import LittleWitch from './assets/LittleWitch.json';
import Lottie from 'lottie-react';

export default function WelcomeModal({ onClose }) {
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [transition, setTransition] = useState(false);

  const [playYes, { sound: yesSound }] = useSound('/sounds/chime.mp3', {
    volume: muted ? 0 : volume,
    interrupt: true,
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleAccept = () => {
    playYes();
    setTimeout(() => {
      if (yesSound && yesSound.fade) {
        yesSound.fade(volume, 0, 1000); // fade from current volume to 0 in 1s
      }
    }, 2000);
    onClose();
    setTransition(true);
    setTimeout(() => {
      onClose(); 
    }, 2000);
  };

  // const handleDecline = () => {
  //   window.location.href = 'https://www.google.com';
  // };

  return (
    <motion.div
      className="fixed inset-0 bg-blue-950 bg-opacity-60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-purple-100 border-4 border-rose-200 p-8 rounded-xl shadow-lg max-w-md text-center relative font-playfair z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >

        <div className="w-48 mx-auto mb-4">
          <Lottie animationData={transition ? LittleWitch : LittleWitch} loop={!transition} />
        </div>
        <h2 className="text-3xl text-blue-950 font-semibold mb-4">
           Welcome to Fairy Code Forest!🌼
        </h2>
        <p className="mb-6 text-lg">
          Enter a magical space of code, creativity & cute tech. Are you ready?
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={handleAccept}
            className="bg-blue-950 hover:bg-blue-100 text-white hover:text-blue-950 px-4 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer"
          >
            Yes! Let's Go...
          </button>
          {/* <button
            onClick={handleDecline}
            className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg transition duration-300 cursor-pointer"
          >
            No, Thanks...
          </button> */}
        </div>


        <div className="absolute top-0 right-0 mt-2 mr-2 animate-pulse text-gold-500">✨</div>

        {/* Fairy Dust Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute w-2 h-2 bg-gold-500 rounded-full opacity-80 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
