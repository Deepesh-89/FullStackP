import React from 'react'
import Map from './Map';

function Join() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl text-green-600 pt-8">CONTACT-US</h1>
        </div>
        <div className='flex items-center justify-center'>
          <div className='border rounded bg-blue-100 mr-1'>
            <form action="">
            <div className="mt-4 space-y-2 ">
               <span>Name</span><br />
               <input type="text"
               placeholder="Enter your name" className="w-80 px-3 py-1 border rounded-md outline-none"
               /> 
            </div>
            <div className="mt-4 space-y-2 ">
               <span>Email</span><br />
               <input type="email"
               placeholder="Enter your email" className="w-80 px-3 py-1 border rounded-md outline-none"
               /> 
            </div>
            <div className="mt-4 space-y-2 ">
               <span>Password</span><br />
               <input type="number"
               placeholder="Enter your password" className="w-80 px-3 py-1 border rounded-md outline-none"
               /> 
            </div>
            <div className="mt-4 space-y-2 ">
               <span>Mobile</span><br />
               <input type="number"
               placeholder="Enter your mobile no." className="w-80 px-3 py-1 border rounded-md outline-none"
               /> 
            </div>
            <div className="mt-4 space-y-2 ">
               <span>Message</span><br />
               <input type="text"
               placeholder="Your Message" className="w-80 px-3 py-1 border rounded-md outline-none"
               /> 
            </div>
            </form>
          </div>
          <div className='border rounded bg-blue-100 ml-1'>
            <h1>GoogleMap</h1>
          <Map/>
          </div>
        </div>
        
    </div>
    </>
  )
}

export default Join;

