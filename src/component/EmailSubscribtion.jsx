import { Input } from 'postcss'
import React from 'react'

function EmailSubscribtion() {
  return (
    <div className=' container mx-auto bg-black text-center  w-full h-full text-justify-center m-0 rounded-md border-2 border-white '>
      <h3 className='text-white '>Ready to watch? Enter your email to create or restart your membership.</h3>
    <h2 className='p-6 flex justify-center  h-full  '>
    <form className='text-center p-3 text-lg' >
      <input className='text-center'  placeholder="Enter Your email" />
    </form>

    <button className='bg-red-600 text-white ml-3 text-sl rounded-md hover:text-black hover:bg-yellow border-white border-e-4 h-10'>Subscription</button>
    </h2>
</div>
  )
}

export default EmailSubscribtion