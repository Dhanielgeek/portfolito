import React from 'react'
//import image of work
import manage from '../Images/manage.png'
import weather from '../Images/weather.png'
import food from '../Images/food.png'

const Projects = () => {
  return (
    <div className='w-full md:h-screen text-gray-300 bg-[#080f23]' name='projects'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
            <div className=' pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-300 inline'>Projects</p>
                <p className='py-6'>Few of of my Projects</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${weather})`}} 
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wide text-green-900'>
                            Weather App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://weatherappbydhaniel.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        <a href='https://github.com/Dhanielgeek/Weather-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Image})`}} 
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wide'>
                            CLothing E-commerce app
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://slimbrand.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        <a href='https://github.com/Dhanielgeek/clothe-commerce'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${manage})`}} 
                 className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wide'>
                            Tailwind Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://managelandingpagebydhaniel.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        <a href='https://github.com/Dhanielgeek/manageTail'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${food})`}} 
                 className=' shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wide text-orange-600'>
                            Food app with Firebase
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://destiny-testsite.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> 
                        <a href='https://github.com/Dhanielgeek/food-ap'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects