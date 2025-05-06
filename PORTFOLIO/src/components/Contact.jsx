import { CONTACT } from "../assets/constants"
import{motion} from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:1,y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl text-white">CONTACT:</motion.h2>
        <div className="text-center traking-tighter">
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:1,x:-100}}
            transition={{duration:1}}
            className="my-4 text-white">
                {CONTACT.address}
            </motion.p>
            <motion.p>
                <h3 className="text-gray-100 " style={{color:"#176571"}}>I'm always open to new opportunities and collaborations !.
                </h3>
            </motion.p>
            <motion.a href="tel:+6361467075" 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:1,x:-100}}
            transition={{duration:1}}
            className="my-4 text-white">
                {CONTACT.phoneNo}
            </motion.a>
            <div>
            <a href="mailto:shravaniavula03@gmail.com" className="border-b  text-white " style={{textDecoration:"none"}}>
                {CONTACT.email}
            </a>
            </div>
        </div>
      
    </div>
  )
}

export default Contact