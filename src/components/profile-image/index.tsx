import { motion } from "motion/react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto sm:mt-5"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full rounded-full object-cover border-4 border-profile-main shadow-profile-glow relative z-10 transition-colors duration-300"
      />
      <div className="absolute inset-0 rounded-full border-2 border-profile-main/25 scale-110 transition-colors duration-300 z-0" />
      <div className="absolute inset-0 rounded-full bg-profile-main/10 blur-xl scale-105 z-0" />
      
    </motion.div>
  );
}
