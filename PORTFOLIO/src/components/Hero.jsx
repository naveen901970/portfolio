import { HERO_CONTENT } from "../assets/constants";
import profilePic from "../assets/hero.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2, // Reduced stagger for faster sequence
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-24">
      <div className="flex flex-col items-center gap-8 lg:flex-row-reverse lg:items-start lg:justify-between">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="relative mx-auto max-w-md lg:max-w-none"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-full rounded-3xl border-4 border-stone-800/20 shadow-2xl shadow-blue-400/30"
              style={{
                boxShadow: "0 25px 50px -12px rgba(96, 165, 250, 0.3)",
              }}
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2 lg:pr-8"
        >
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h1
              variants={childVariants}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Naveenkumar Reddy K
            </motion.h1>

            <motion.span
              variants={childVariants}
              className="mt-2 bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-300 sm:text-xl"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.a
              variants={childVariants}
              href="https://drive.google.com/file/d/1NufDWpA6dRoKZRRiTwRsUidag72UI5gb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-stone-900 sm:text-base"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;