import { EXPERIENCES } from "../assets/constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Experience
      </motion.h2>

      <div className="space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row lg:items-start lg:space-x-8"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <p className="mb-2 text-sm text-stone-400">
                {exp.year}
              </p>
              {/* Enhanced certificate link */}
              <motion.a
                href={exp.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent underline-offset-2"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.9, rotate: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                View Certificate →
              </motion.a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="w-full lg:w-3/4"
            >
              <h3 className="mb-2 text-xl font-semibold text-white">
                {exp.role} <span className="text-sm text-stone-500">@ {exp.company}</span>
              </h3>
              <p className="mb-4 text-stone-400">
                {exp.description}
              </p>
              <div className="flex flex-wrap">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="mr-2 mb-2 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}