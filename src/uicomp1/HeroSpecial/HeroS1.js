import React, { Component } from 'react'

export class HeroS1 extends Component {
    render() {
        return (
            <div>
                   <div className="pt-4 mx-auto bg-blue-900">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 max-w-full px-8 flex flex-col justify-center">
              <div className="md:text-6xl text-4xl text-green-300">Awesome tool for your future team</div>
              <div className="md:text-2xl text-xl mt-4 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className="my-5 h-16">
                <div className="shadow-md font-bold py-2 px-4 hover:text-white
               cursor-pointer text-gray-900 bg-green-400 rounded text-lg text-center w-48">Join us now</div>
              </div>
            </div>
            <div className="flex md:justify-end w-full md:w-1/2 -mt-4">
              <div className="">
                <div className="shadow-2xl max-w-md z-10">
                  <img alt="card img" className="object-cover" src="https://images.unsplash.com/photo-1617984303651-8629f678da2b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=720"/> 
                  <div className="text-2xl p-10 text-gray-100 bg-black bg-opacity-60"><q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</q></div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }
}

export default HeroS1
