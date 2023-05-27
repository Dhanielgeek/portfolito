import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <div name = "home" className=' w-full h-screen bg-[#080f23]'>
        {/* container */}
        <motion.div 
           initial={{opacity: 0, x : 200}} 
           animate={{opacity :1 , x : 0}}
           exist = {{opacity : 0 , x : 200}}
        className=' max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full'>
            <p className=' text-gray-200 text-lg font-mono'>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-extrabold bg-gradient-to-r from-green-500 via-orange-700 to-blue-500 text-transparent bg-clip-text'>Daniel Ben</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer.</h2>
            <p className=' text-[#838aa4] max-w-[700px] py-4'>Nigerian based front-end developer living in Lagos focused on crafting clean, creative and user-friendly experiences, I build beautiful and powerful websites and  applications.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 duration-300 transition-all ease-in-out hover:border-blue-400 rounded-md'>View Projects
                <span className='group-hover:rotate-45 duration-300'>
                  <HiArrowNarrowRight className=' ml-3'/>
                </span>
                     </button>
            </div>
        </motion.div>
    </div>
  )
}

export default Home