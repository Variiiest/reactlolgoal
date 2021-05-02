import React, { Component } from 'react'

export class Card4 extends Component {
    render() {
        return (
            <div>
                <div className="bg-gray-900 py-12 flex justify-center items-center">
        <div className="max-w-sm bg-gray-800  p-6 rounded-md tracking-wide shadow-lg">
          <div id="header" className="flex items-center mb-4"> 
            <img alt="avatar" className="w-20 h-20 rounded-full border-2 border-blue-400" src="https://source.unsplash.com/random"/>
            <div  className="leading-5 ml-6 sm">
              <h4  className="text-xl font-semibold">John Doe</h4>
              <h5 className="font-semibold text-blue-600">Designer</h5>
            </div>
          </div>
          <div>
            <q className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
        
            <div className="flex items-center my-10">
              <input type="email" className="bg-gray-700 rounded-l-md w-full text-base md:text-lg px-3 py-2 focus:outline-none" placeholder="Enter Your Email" />
              <button className="text-white focus:outline-none font-bold px-3 py-2 text-base md:text-lg rounded-r-md bg-gray-900">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Card4
