import React from 'react'
import HTML from '../Images/html.png'
import CSS from '../Images/css.png'
import JAVASCRIPT from '../Images/javascript.png'
import TAILWIND from '../Images/tailwind.png'
import FIREBASE from '../Images/firebase.png'
import GITHUB from '../Images/github.png'
import REDUX from '../Images/Redux.png'
import REACT from '../Images/react.png'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <div name= "skills" className='bg-[#080f23] text-gray-300 w-full h-[120vh]'>
        {/* container */}
        <motion.div 
    initial={{opacity: 0, x : 200}} 
    animate={{opacity :1 , x : 0}}
    exist = {{opacity : 0 , x : 200}}
         className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div>
        <p className='text-4xl font-bold border-b-4 border-gray-300 inline'>Skills</p>
        <p className='py-4'>Here are my Skillset</p>
          </div>
          <div className='w-full  grid grid-cols-2  sm:grid-cols-4 text-center py-8 rounded-md'>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='html'/>
                <p>HTML</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='html'/>
                <p>CSS</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JAVASCRIPT} alt='html'/>
                <p>Javascript</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={TAILWIND} alt='html'/>
                <p>Tailwind CSS</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={FIREBASE} alt='html'/>
                <p>Firebase</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={REDUX} alt='html'/>
                <p>Redux</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GITHUB} alt='html'/>
                <p>Github</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={REACT} alt='html'/>
                <p>React</p>
            </div>
          </div>
        </motion.div>
    </div>
  )
}

export default Skills