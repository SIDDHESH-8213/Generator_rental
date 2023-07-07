import React from 'react'

const Contact = () => {
  return (
    <div className='h-[600px] bg-gray-100 text-center top-4' id='contact'>
      <div>
        <img src="" alt="" />
        <div className='font-bold text-3xl mt-16 '>Get in touch</div>
        <div>We'd love to hear from you</div>

        <div className='flex flex-col items-center mt-8'>
          <input type="text" name = "" id="" placeholder='Full Name' className='w-[600px] border p-2 rounded-md mt-4' />
          <input type="text" name="" id="" placeholder='Email Address' className='w-[600px] border p-2 rounded-md mt-4' />
          <input type="text" name = "" id = "" placeholder='Mobile numbar' className='w-[600px] border p-2 rounded-md mt-4' />
          <input type="text" placeholder='Message' className='w-[600px] h-[150px] border px-2 rounded-md mt-4' />

          <button className='text-white text-xl bg-[#0d6efd] hover:bg-[#0b5ed7] rounded-md  w-[600px] h-10 mt-6'>Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Contact