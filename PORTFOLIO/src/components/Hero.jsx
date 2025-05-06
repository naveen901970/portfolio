import { HERO_CONTENT } from "../assets/constants"
import profilePic from "../assets/hero.jpg"
import{motion} from"framer-motion";

const containerVariants ={
   hidden:{opacity:0, x:-100},
   visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildern:0.5,
    }
   }
}

const childVariants={
  hidden:{opacity:0, x:-100},
  visible:{opacity:1,x:0, transition:{duration:0.5}}
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 ">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:p-8">
            <motion.img src={profilePic} className="border border-stone-900 rounded-3xl w-100 shadow-lg shadow-blue-300 p-6 rounded-lg"
            height={650}width={650}
            initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.5}}/>
            </div>
            </div>
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10">
   <motion.h2 
  variants={childVariants}
  className="pb-1 text-2xl tracking-tight lg:text-4xl text-white"
>
  NAVEENKUMAR REDDY K
</motion.h2>

                <motion.span variants={childVariants}
                className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent ">Full Stack Developer</motion.span>
                <motion.p variants={childVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-white pl-0">{HERO_CONTENT}</motion.p>
             <motion.a 
  variants={childVariants}
  href="https://drive.google.com/file/d/1NufDWpA6dRoKZRRiTwRsUidag72UI5gb/view?usp=drivesdk" 
  target="_blank"
  rel="noopener noreferrer" 
  className="bg-white text-stone-800 rounded-full p-4 text-sm mb-10"
>
  Download Resume
</motion.a>
            </motion.div>
      </div>
    </div>
  )
}

export default Hero