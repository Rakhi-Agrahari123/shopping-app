import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { IoCallOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (

<footer className='border-2 border-red-600 bg-slate-800'>    
    <div className= 'relative  grid grid-rows-5 grid-cols-3 container mx-auto py-0 p-3  text-white' >


    <div className='w-full h-full col-span-3 text-center font-extrabold text-1xl mt-4 mb-'>
    <h1 ><span className='hover:text-red-600 delay-100 '>Back to top</span></h1>
    </div>

        <div className=' text-center m-2 boder-2 border-white mt-0'> 
            
            <ol >
                <li className='font-bold mb-3 '>Get to Know Us</li>
                <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>About Us</li>
                <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Careers</li>
                <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Press Releases</li>
                <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Amazon Science</li>
            </ol>
            

        </div>

        <div className=' m-4 mt-0 text-center'> 
            
            <ol>
                <li className='font-bold mb-3'>Connect with Us</li>
                
                <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Facebook</li>
                <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Twitter</li>
                <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Instagram</li>
                
            </ol>
            

            </div>
        <div className=' boder  m-4 mt-0 text-center col'> <ol>
            <li className='font-bold mb-3'>Make Money with Us</li>
            <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Sell on Amazon</li>
            <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Sell under Amazon Accelerator</li>
            <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>100% Purchase Protection</li>
            <li className='hover:underline hover:text-yellow-200 hover:animate-bounce'>Help</li>
            </ol>
            </div>
            
            <div className='align-middle row-span-1  m-5 text-lg py-1 '>
            <div className=' '>
                <ul className=''>
            <li><IoCallOutline /></li>
            <li><TiSocialFacebook /></li>
            <li><TiSocialYoutube /></li>
            <li><SlSocialInstagram /></li>
            <li><SlSocialGoogle /></li>
            <li><CiMail /></li> 
             </ul>
            </div>
            
            
            
            

            </div>
            </div>
        
        
        
        </footer>
        
  )
}

export default Footer