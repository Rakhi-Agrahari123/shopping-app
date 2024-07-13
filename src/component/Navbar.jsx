import React from 'react';
import logo from './../assets/logo1.png';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { IoLogInOutline } from 'react-icons/io5';
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';
import Navitem from './Navitem';
import { useRef, useEffect } from 'react';




function Navbar() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    
    <nav className="p-4  sticky top-0 z-10 border-b border-pink bg-red-600" >
      <div> 
        {/* firstrow */}
        <section className='flex item-center justify-between p-3'>
          <div className="flex space-x-2 items-center">
            <img className="h-8" src={logo}></img>
            <h1 className="text-xl tracking-wide font-semibold text-white">Shopping</h1>
          </div>
          <div className="w-96">
            <input
            ref={inputRef}
              type="text"
              placeholder="Search Here"
              className="w-full p-2 font-normal bg-white border  rounded-md text-center border-red-800 "
            />
          </div>
          <div className='flex items-center gap-8'>
            <Link to="">
              <IoLogInOutline className="text-2xl text-white hover:animate-bounce" />
              <span className="text-xs font-normal hover:underline hover:onclick hover:text-blue-950 text-white ">
                Sign In
              </span>
            </Link>

            <Link to="">
              <GoHeart className="text-2xl text-white hover:animate-bounce" />
              <span className="text-xs font-normal hover:underline hover:onclick hover:text-blue-950 text-white">Favrout</span>
            </Link>

            <Link to="">
              <HiOutlineShoppingBag className="text-2xl text-white hover:animate-bounce" />
              <span className="text-xs font-normal hover:underline hover:onclick hover:text-blue-950 text-white">Add Cart</span>
            </Link>
          </div>
        </section>

        {/* second row */}
        <section >
          <div className='flex justify-center items-center'>
         <ul className='flex items-center gap-10 text-white'>
            <Navitem to='/' text='Home' />
            <Navitem to='/men' text='Men' />
            <Navitem to='/women' text='Woman' />
            <Navitem to='/' text='Kids' />
          

         </ul>
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;