import React from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <div className='relative flex justify-between w-full text-white items-center h-[80px]'>
      <div className='ml-20'>Logo</div>

      <div className='absolute flex right-40'>
        <Link
          to='home'
          smooth={true}
          duration={500}
          className='mr-8 cursor-pointer'
        >
          Home
        </Link>
        <Link
          to='about'
          smooth={true}
          duration={500}
          className='mr-8 cursor-pointer'
        >
          About
        </Link>
        <Link
          to='pricing'
          smooth={true}
          duration={500}
          className='mr-8 cursor-pointer'
        >
          Rental-Plans
        </Link>
        <Link
          to='contact'
          smooth={true}
          duration={500}
          className='mr-8 cursor-pointer'
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
