import React from 'react'

const Contact = () => {
  return (
    <div className='bg-pink-500 w-full h-screen '>
      <div className='font-bold text-3xl flex items-center justify-center '>
      <h1 className='mt-8'>Contact</h1></div>
      <div className='w-[88%] md:w-[40%] h-[60%] md:h-[60%] lg:w-[40%] lg:h-[60%] xl:w-[40%] xl:h-[80%] border-2 border-black mx-auto rounded-md mt-6  '>
      <div className='flex items-center justify-center flex-col gap-12'>
      <input className='w-80 h-12 mt-20 rounded-md' type='text' placeholder='Name' name='name' required/>
      <input className='w-80 h-12 rounded-md'  type='email' placeholder='Email' name='email' required/>
          <textarea className='w-80 h-20 rounded-md' name='message' placeholder='Write Message' rows={8} required/>
          <button className='bg-blue-800 w-32 h-12 rounded-md hover:bg-blue-600 font-bold'>Submit</button> </div>
        </div>
      </div>

  )
}

export default Contact