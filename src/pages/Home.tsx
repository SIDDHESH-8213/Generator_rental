import React from 'react'

const Home = () => {
  return (
    <div className='relative text-white top-8 ' id='home'>
      <div className='text-center text-5xl font-bold'>
        Power Up your Projects
      </div>
      <div className='text-center text-xl font-light mt-6 text-gray-300'>
      Get the power you need, when you need it.
      
      </div>
      <div className='text-center text-xl font-light mt-1 text-gray-300'>
      Rent high-quality generators for all your project requirements
      </div>

      <div className='text-center mt-8 text-xl'>
        <button className='text-white bg-[#0d6efd] hover:bg-[#0b5ed7] rounded-md mr-10 w-32 h-12 align-middle'>
          View Plans
        </button>
        <button className=' align-middle rounded-md border border-white w-32 h-12 hover:bg-white hover:text-black'>
          Learn More
          </button>
      </div>

    </div>
  )
}

export default Home