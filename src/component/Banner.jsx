import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Slide} from 'react-awesome-reveal';
import  './Hero';

function Banner() {

  return (
    <Slide triggerOnce>
    <div className='bg-red-600 grid grid-cols-2 p-6 m-0 '  >
      {/* 1st column */}
      <div>
        {/* 1st row */}
        <div> 
            <p className='text-3xl font-bold text-white'>Unlock the savings</p>
        </div>
        {/* 2ndRow*/}
        <div>
            <p className='text-2xl font-semibold '>
                Flat 50% off on everything
                </p>
                <button className='bg-white  px-4 py-2 text-red-600 rounded-full hover:text-sky-600 blue hover:bg-black'>
                    Shop Now    <   FiArrowRightCircle  className='animate-bounce  block ms-6' /> </button> </div>
      </div>
      {/* 2nd column */}
      <div>
        <div><p className='text-white font-bold text-8xl'>
            Flat <span className='underline text-sky-500 '> 50% </span>off</p>
            <p className='text-white'>
                Available able on our all store</p></div>
      </div>
    </div>
    </Slide>
  );
}

export default Banner;

// unlock the saving 
//flat 50% off on everthing