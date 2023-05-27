import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#080f23] text-gray-300'>
        <motion.div
            initial={{opacity: 0, x : 200}} 
            animate={{opacity :1 , x : 0}}
            exist = {{opacity : 0 , x : 200}}        
         className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full flex flex-col justify-center items-center  gap-8'>
                <div className=' sm:text-right pb-8 pl-2'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>
                      About</p>
                </div>
                <div></div>
                <div className=' max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  '>
                  <div className=' sm:text-right text-4xl font-bold'>
                    <p>Hi👋,I'm Daniel, Nice to meet you,Please take a look around.</p>
                  </div>
                  <div>
                    <p>I'm a passionate web developer about building excellent software that improves the lives of people everyday.I'm dedicated to quest of developing solutions that leverage on best practice technologies.Also passionate</p>
                  </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About;