import React from 'react';
import Deepesh from "../../public/Deepesh.jpg";
import Nishant from "../../public/Nishant.jpg";
function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className=" text-2xl font-semibold md:text-4xl text-green-600 pt-8">ABOUT-US</h1>
          <p className="p-4 font-semibold text-yellow-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda libero dolorem,
            temporibus blanditiis magni, nemo sapiente modi obcaecati saepe mollitia,
            sed perferendis quo at error tempore quisquam eaque vero similique.
          </p>
        </div>
        <div className='flex'>
          <div className='card-body h-120 w-3 mt-4 borde rounded bg-blue-100 mr-2'>
            <h1 className='font-semibold text-green-800'>Our-Mission</h1>
            <p className="p-4 font-semibold text-yellow-400">
            "Our mission is to provide exceptional service to our customers by offering reliable and efficient scrap
            collection and recycling solutions, while maintaining transparency, integrity, and fair pricing."
            </p>
          </div>
          <div className='card-body h-120 w-3 mt-4 border rounded bg-blue-100 ml-2'>
            <h1 className='font-semibold text-green-800'>Our-Vision</h1>
            <p className="p-4 font-semibold text-yellow-400">
            "To be a leader in advancing the circular economy by ensuring that scrap materials are responsibly 
            recovered, reused, and reintroduced into the supply chain."

            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold md:text-4xl text-green-600 pt-8 text-center">Our-Team</h1>
          <div className="flex flex-wrap justify-center items-center">
            <div className="border-2 p-4 m-2 bg-blue-100 text-center w-60 rounded-lg shadow-lg">
              <img src={Deepesh} alt="Co-founder 1" className="w-24 h-24 rounded-full mx-auto" />
              <h2 className="font-semibold text-green-800 mt-4">Deepesh Dobriyal</h2>
              <p className="text-yellow-400">Co-founder</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://facebook.com/deepesh" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/deepesh" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/deepesh" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/in/deepesh" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="border-2 p-4 m-2 bg-blue-100 text-center w-60 rounded-lg shadow-lg">
              <img src={Nishant} alt="Co-founder 2" className="w-24 h-24 rounded-full mx-auto" />
              <h2 className="font-semibold text-green-800 mt-4">Nishant Raj</h2>
              <p className="text-yellow-400">Co-founder</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://facebook.com/nishant" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/nishant" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/nishant" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/in/nishant" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
