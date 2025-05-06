import { PROJECTS } from "../assets/constants"
import {  FaGithub, FaLinkedin } from 'react-icons/fa6'
import {motion} from"framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
       <motion.h2
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:0.5}}
        className="my-20 text-center text-4xl  text-gray-100">Projects</motion.h2>
       <div>
        {PROJECTS.map((Project,index)=>(
          <div key={index}className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="w-100 lg:w-1/2" >
            <img src={Project.image}  height={450} width={550} alt={Project.title}className="mb-6 rounded"  />
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold text-2xl  text-gray-100">{Project.title}</h3>
            <p className="mb-4 text-stone-400">{Project.description}</p>
            {Project.technologies.map((tech,index)=>(
              <span className="mr-2 rounded bg-stone-900 p-2  text-sm font-medium text-stone-300 " key={index}>{tech}</span>
            ))}
             

             <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/naveenkumar-reddy-k-6bb998221/' target='blank' rel='noopener noreferrer'
            aria-label="LinkedIn">
                <FaLinkedin/>
            </a>
            <a href='https://github.com/naveen901970' target='blank' rel='noopener noreferrer'
            aria-label="GitHub">
                <FaGithub/>
            </a>
            
        </div>
            </motion.div>

            </div>
        ))}
       </div>
    </div>
  )
}

export default Projects