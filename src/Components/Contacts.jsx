import React from 'react'

const Contacts = () => {
  return (
    <div className='bg-[#080f23] w-full h-screen  flex justify-center items-center p-4' name= "Contacts">
        <form method='POST' action='https://getform.io/f/48c81118-7f16-4863-8037-7a4101730d1d' className='flex flex-col w-full max-w-[600px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-300 inline text-gray-300'>Contacts</p>
                <p className='py-4 text-gray-300'>Submit this Form or Send me a direct Email : <a className=' text-red-400' href='danielbenevoloent1@gmail.com'>Danielbenevoloent1@gmail.com</a>  </p>
            </div>
            <input type='text' className='bg-[#ccd6f6] p-2 text-black' placeholder='Name' name='name' required/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type=' email' placeholder='Email' name='name' required/>
            <textarea name='Message' rows='10' className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
            <button className='border-2 hover:bg-red-600 hover:border-red-600 px-4 py-2 mx-auto flex items-center my-3 text-gray-300 rounded-md'>Let's Work</button>
        </form>
    </div>
  )
}

export default Contacts