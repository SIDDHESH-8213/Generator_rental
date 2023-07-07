import React from 'react'

const Feature = (props) => {
    const {logo, title, description} = props;
  return (
    <div className='w-[370px]'>
        <div>
            <img src={logo} alt="imgg" className='h-14 w-14'/>
        </div>
        <div className='mt-2 text-2xl text-black font-bold'>
            {title}
        </div>
        <div className='mt-2 align-middle font-regular text-black'>
            {description}
        </div>
    </div>
  )
}

export default Feature