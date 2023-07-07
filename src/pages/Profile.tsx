import React from 'react'
import mg from "../assets/tom.png"
import Properties from '../components/Properties'

const Profile = () => {
    return (
        <div className='relative h-[1200px] bg-[#212529]'>


            <div className='left-20 top-10 h-[400px] bg-gray-100 w-[350px] absolute flex flex-col items-center py-7 rounded-md'>
                <img src={mg} alt="" className=' h-48 w-48 rounded-full object-fit' />
                <div className=' mt-5 text-4xl font-semibold'>Kevin Hart</div>
                <div className='mt-2 text-xl text-gray-400'>San Jose, California</div>
                <button className='text-white bg-[#1b6de9] text-base font-normal rounded-md
            w-[180px] h-[38px] hover:bg-[#0d6dfdf7] hover:text-white mt-3'>Edit Profile</button>
            </div>


            <div className='absolute pt-5 px-5 bg-white w-[980px] h-[330px] right-20 top-10'>
                <div className='flex mb-4 '>
                    <span className='w-1/3 text-xl font-semibold'>Full Name</span>
                    <span className='text-gray-400 text-lg font-medium '>Kevin Hart</span>
                </div>
                <hr />
                <div className='flex mb-4 mt-4'>
                    <span className='w-1/3 text-xl font-semibold'>Email id</span>
                    <span className='text-gray-400 text-lg font-medium '>kevin@gmail.com</span>
                </div>
                <hr />
                <div className='flex mb-4 mt-4'>
                    <span className='w-1/3 text-xl font-semibold'>Phone number</span>
                    <span className='text-gray-400 text-lg font-medium '>8999 xxxx</span>
                </div>
                <hr />
                <div className='flex mb-4 mt-4'>
                    <span className='w-1/3 text-xl font-semibold'>Mobile number</span>
                    <span className='text-gray-400 text-lg font-medium '>+91 8988 xxxx</span>
                </div>
                <hr />
                <div className='flex mb-4 mt-4'>
                    <span className='w-1/3 text-xl font-semibold'>Address</span>
                    <span className='text-gray-400 text-lg font-medium '>San Jose, California, USA</span>
                </div>

            </div>

            <div className='absolute top-[400px] right-20 w-[980px] bg-white h-[300px] flex justify-between p-3'>

                <div>
                    <div className='flex  items-center m-4'>
                        <span className='text-2xl font-semibold mr-5'>Plan Purchased</span>
                        <span className='text-xl font-semibold text-gray-400'>Enterprise</span>
                    </div>
                    <hr />
                    <div className=' mt-2 ml-4 font-regular text-xl'>
                        Your plan includes: 
                    </div>
                    
                    <div className='mt-2 ml-4'>
                    <div>
                        <Properties istr='true' des='lorem22'/>
                    </div>
                    <div>
                        <Properties istr='true' des='aisdjfso osjdos'/>
                    </div>
                    <div>
                        <Properties istr='true' des='aoidfo oso '/>
                    </div>
                    <div>
                        <Properties istr='true' des='doifdo osidoo s'/>
                    </div>
                    </div>

                    
                </div>



                <div className='left-1/2 absolute'>
                    <div className='mb-3 text-3xl font-semibold'>
                        Purchase Details:
                    </div>
                    <hr />
                    <div className='mt-2 mb-3 items-center'>
                        <span className='text-xl font-semibold'>Plan: </span>
                        <span className='ml-5 text-xl text-gray-500'>Enterprise</span>
                    </div>
                    <hr />
                    <div className='mt-2 mb-3 items-center'>
                        <span className='text-xl font-semibold'>Amount paid: </span>
                        <span className='ml-5 text-xl text-gray-500'>$49</span>
                    </div>
                    <hr />

                    <div className='mt-2 mb-3 items-center'>
                        <span className='text-xl font-semibold'>Date of payment: </span>
                        <span className='ml-5 text-xl text-gray-500'>dd/mm/yyyy</span>
                    </div>
                    
                </div>
            </div>


        </div>
    )
}

export default Profile