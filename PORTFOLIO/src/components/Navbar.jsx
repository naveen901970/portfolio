import {  FaGithub, FaLinkedin } from 'react-icons/fa6'
import logoo from '../assets/nn.png'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logoo} className='h-33 w-56  mx-2 rounded-full ' alt='logo'></img>
            </a>
        </div>
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
    </nav>
  )
}

export default Navbar