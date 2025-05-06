import { EXPERIENCES } from "../assets/constants";
import { motion } from "framer-motion";

const Experience = () => {
  console.log(EXPERIENCES); // Check if data is available

  return (
    <div className="pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} // Fixed opacity issue
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center  text-gray-100">
           <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1 }}
  className="w-full lg:w-1/4"
>
  <p className="mb-2 text-sm text-stone-400">
    {experience.year}
  </p>
  <a
    href="https://drive.google.com/file/d/1C2qTTuRsi-Kc7iLz3WPmIefsNb5puPHq/view?usp=drivesdk" // Replace with actual certificate link
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs text-blue-400 underline hover:text-blue-600 transition"
  >
    View Certificate
  </a>
</motion.div>


            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Fixed animation
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4" // Fixed tailwind class
            >
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>

              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;