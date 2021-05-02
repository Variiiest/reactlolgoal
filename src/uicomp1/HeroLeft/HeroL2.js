import React, { Component } from 'react'

export class HeroL2 extends Component {
    render() {
        return (
            <div>
                <section>
                <div className="container px-6 py-16 mx-auto">
          <div className="items-center md:flex">
            <div className="w-full md:w-1/2">
              <div className="max-w-lg">
              <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <span className="block">Design Your <span className="block mt-1 text-blue-800 lg:inline lg:mt-0">Beautiful Web</span></span>
          </h1>
          <p className="w-full mx-auto text-base text-left text-gray-800 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 md:mb-0 hover:bg-blue-700 md:w-auto rounded-full">
              Try It Free
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 rounded-full">
              Learn More
            </a>
          </div>
        </div>
      
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
              <img className="w-full h-full max-w-2xl border" src="https://dummyimage.com/620x360/F3F4F7/8693ac" alt="" />
            </div>
          </div>
        </div>
                </section>
                
            </div>
        )
    }
}

export default HeroL2
