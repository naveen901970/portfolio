import { CONTACT } from "../assets/constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center text-4xl font-bold text-white"
      >
        CONTACT
      </motion.h2>
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-lg text-gray-300"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-lg text-gray-300"
        >
          I'm always open to new opportunities and collaborations!
        </motion.p>
        <motion.a
          href={`tel:${CONTACT.phoneNo}`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="mb-4 block text-lg font-medium text-indigo-400 hover:text-indigo-300"
        >
          {CONTACT.phoneNo}
        </motion.a>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-medium text-indigo-400 hover:text-indigo-300"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
