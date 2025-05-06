import { EXPERIENCES } from "../assets/constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-screen-lg">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Experience
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:max-w-sm sm:mx-auto lg:grid-cols-2 lg:max-w-none">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium uppercase text-gray-400">
                    {exp.year}
                  </p>
                  <motion.a
                    href={exp.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-200 underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cert
                  </motion.a>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-300">@ {exp.company}</p>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-block rounded-full bg-indigo-600 bg-opacity-20 px-3 py-1 text-xs font-medium text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
