import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import logoo from '../assets/nn.png';

const iconVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-stone-900/80 backdrop-blur-sm border-b border-stone-700"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center" aria-label="Home">
              <img 
                src={logoo} 
                className="h-12 w-48 object-contain hover:scale-105 transition-transform duration-300" 
                alt="Naveen's logo"
              />
            </a>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  }
                }
              }}
              className="flex items-center space-x-6"
            >
              <motion.a
                variants={iconVariants}
                href='https://www.linkedin.com/in/naveenkumar-reddy-k-6bb998221/'
                target='_blank'
                rel='noopener noreferrer'
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>

              <motion.a
                variants={iconVariants}
                href='https://github.com/naveen901970'
                target='_blank'
                rel='noopener noreferrer'
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;