import React from 'react'
import Plans from '../components/Plans'

const Pricing = () => {
  return (
    <div className='h-[750px] bg-gray-100  relative ' id='pricing'>

      <div className='top-[75px] absolute text-center text-black font-semibold text-4xl left-1/2 -translate-x-1/2 '>
        Pay as you grow
      </div>

      <div className='top-[125px] absolute text-center text-black font-light text-xl left-1/2 -translate-x-1/2 '>
        With no hassle pricing plans
      </div>

      <div className='flex justify-around -translate-x-1/2 left-1/2 top-[200px]  absolute'>
      <Plans heading = "Free" price = {0}/>
      <Plans heading = "Pro" price = "9"/>
      <Plans heading = "Enterprise" price = "49"/>
      </div>
      
    </div>
  )
}

export default Pricing