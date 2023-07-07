import React from 'react'
import insta from "../assets/instagram (3).png"
import twi from "../assets/twitter.png"
import yt from "../assets/youtube (1).png"
import dis from "../assets/discord (1).png"

const End = () => {
  return (
    <div className = "bg-[#212529] realtive h-[200px] items-center flex flex-col  ">
        <div className='text-white text-3xl font-semibold absolute mt-16'>
            Logo
        </div>
        <div className='flex  items-center mt-[115px]  '>
            <img src={insta} alt="" className='mr-4' />
            <img src={twi} alt="" className='mr-4' />
            <img src={yt} alt=""  className='mr-4'/>
            <img src={dis} alt="" className='mr-4' />
        </div>
        
    </div>
  )
}

export default End