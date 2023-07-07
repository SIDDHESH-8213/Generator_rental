import React from 'react'
import Properties from './Properties'


const Plans = (props) => {
    const {heading, price} = props;
  return (
    <div className='bg-white h-[475px] w-[360px]  mx-10 relative rounded-xl border-gray-300 border '>

        <div className='left-1/2 -translate-x-1/2 flex-col absolute top-1/2 -translate-y-1/2'>
            <div className=' text-base font-medium'>{heading}</div>
            <div className='mt-2 mb-5 text-black font-bold text-6xl'>
                $ {parseInt(price)}
                <span className=' text-sm text-gray-400'>/ mo.</span>
            </div>

            <Properties istr={true} des="1 User" />
            <Properties istr={true} des="shoislj" />
            <Properties istr={true} des="lorem10" />
            <Properties istr={true} des="sjfdos oshdosf osjos" />
            <Properties istr={true} des="sodijfsfj oisdjo " />
            <Properties istr={true} des="sdjfoisjf osjdoif oijsdfo" />
            <Properties istr={false} des="sdjfosijfd oisdjof" />
            <Properties istr={false} des="sidjfosi osidjfos" />

            <button className='text-white bg-[#1b6de9] text-base font-normal rounded-md
            w-[280px] h-[38px] hover:bg-[#0d6dfdf7] hover:text-white mt-2'>Choose Plan</button>
        </div>

        

    </div>
  )
}

export default Plans