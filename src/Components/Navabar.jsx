import React, {useState} from 'react'
import Logo from '../Images/logodb.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsPersonDashFill} from 'react-icons/bs'
import {Link}  from 'react-scroll'

const Navabar = () => {

const [navtoggle, setnavtoggle] = useState(false)

const HandleClick = ()=>{
  setnavtoggle(!navtoggle)
}
  return (
    <div className='fixed w-full h-[80px] bg-[#031544] flex justify-between items-center px-4 text-gray-300'>
      <div className=''>
        <img src={Logo} alt='' className='w-[90px]'/>
      </div>
        <ul className='hidden md:flex'>
          <li className=' text-xl hover:text-[#9ba5c9] duration-300 transition-all ease-in-out'>
          <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
          </li>
          <li className=' text-xl hover:text-[#9ba5c9] duration-300 transition-all ease-in-out'>
          <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
          </li>
          <li className=' text-xl hover:text-[#9ba5c9] duration-300 transition-all ease-in-out'>
          <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
          </li>
          <li className=' text-xl hover:text-[#9ba5c9] duration-300 transition-all ease-in-out'>
          <Link  to="projects"  smooth={true}  duration={500} >
          Projects
        </Link>
          </li>
          <li className=' text-xl hover:text-[#9ba5c9] duration-300 transition-all ease-in-out'>
          <Link  to="Contacts"  smooth={true}  duration={500} >
          Contacts
        </Link>
          </li>
        </ul>
      
{/* hambuger menu */}
<div className='md:hidden z-20' onClick={HandleClick}>
    {  !navtoggle ? <FaBars/> : <FaTimes/>  }
</div>
{/* mobile */}
<ul className={ !navtoggle ? "hidden" : ' absolute top-0 left-0 w-full h-screen bg-[#031544] flex justify-center items-center flex-col'}>
          <li className='py-6 text-2xl  hover:text-[#9ba5c9] duration-300 transition-all ease-in-out '>
          <Link onClick={HandleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link>
          </li>
          <li className='py-6 text-2xl  hover:text-[#9ba5c9] duration-300 transition-all ease-in-out '>
          <Link onClick={HandleClick} to="about"  smooth={true}  duration={500} >
          About
        </Link>
          </li>
          <li className='py-6 text-2xl  hover:text-[#9ba5c9] duration-300 transition-all ease-in-out '>
          <Link onClick={HandleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
          </li>
          <li className='py-6 text-2xl  hover:text-[#9ba5c9] duration-300 transition-all ease-in-out '>
          <Link onClick={HandleClick} to="projects"  smooth={true}  duration={500} >
          Projects
        </Link>
          </li>
          <li className='py-6 text-2xl  hover:text-[#9ba5c9] duration-300 transition-all ease-in-out '>
          <Link onClick={HandleClick}  to="Contacts"  smooth={true}  duration={500} >
          Contacts
        </Link>
          </li>
         
</ul>


{/* social icons */}
<div className=' hidden xl:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1] rounded-lg'> 
      <a  className='flex justify-between items-center w-full text-gray-200' href='https://www.linkedin.com/in/daniel-ben-671883271/'>Linkedin <FaLinkedin size={30}/>
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515] rounded-lg'>
    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Dhanielgeek'>Github <FaGithub size={30} /> </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee] rounded-lg'>
    <a className='flex justify-between items-center w-full text-gray-200' href='https://twitter.com/dhaniel_knightz'>Twitter <FaTwitter size={30}/> </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c71610] rounded-lg'>
    <a className='flex justify-between items-center w-full text-gray-300' href='danielbenevolent1@gmail.com'>Gmail <HiOutlineMail size={30}/> </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#51d968] rounded-lg'>
    <a className='flex justify-between items-center w-full text-gray-100' href='https://drive.google.com/file/d/10VodI_Qh_-ApphAKq3R8rdwEhBzu-aKb/view?usp=share_link'>Resume <BsPersonDashFill size={30}/> </a>
    </li>
  </ul>
</div>
    </div>
  )
}

export default Navabar