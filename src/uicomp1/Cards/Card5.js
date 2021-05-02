import React, { Component } from 'react'

export class Card5 extends Component {
    render() {
        return (
            <div className="bg-gray-900 py-12">
                <div className="bg-gray-800 shadow-2xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto rounded">
        <div className="flex justify-center">
          <img src="https://source.unsplash.com/random" alt="" className="rounded-full mx-auto w-32 h-32 border-4 border-green-300 -mt-12" />
        </div>
        <div className="mt-6">
     
          <h1 className="font-bold text-center text-3xl text-gray-100">
        
          John Doe</h1>
          <p className="text-center text-sm text-gray-300 font-medium">Full Stack Developer</p>
        
          <div className="flex items-center pb-10 m-5">
              <input type="email" className="bg-gray-700 rounded-l-md w-full text-base md:text-lg px-3 py-2 focus:outline-none" placeholder="Enter Your Email" />
              <button className="text-white focus:outline-none font-bold px-3 py-2 text-base md:text-lg rounded-r-md bg-gray-900">Subscribe</button>
            </div>
          </div>
      
      </div>
            </div>
        )
    }
}

export default Card5
