import React, { Component } from 'react'

export class HeroL2 extends Component {
  render() {
    return (
      <div>
        <section className="bg-gray-400">
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center md:flex">
              <div className="w-full md:w-1/2">
                <div className="max-w-lg">
                  <div className="max-w-6xl px-5 mx-auto space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight text-left text-white sm:text-5xl md:text-6xl">
                      <span className="block">Design Your <span className="block mt-1 text-gray-900 lg:inline lg:mt-0">Beautiful Web</span></span>
                    </h1>
                    <p className="w-full mx-auto text-base text-left text-white md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <div className="relative flex flex-col md:flex-row md:space-x-4">
                      <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-gray-900 md:mb-0 hover:bg-gray-800 md:w-auto rounded-full">
                        Try It Free
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <line x1={5} y1={12} x2={19} y2={12} />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                      <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-white hover:text-gray-600 rounded-full">
                        Learn More
                     </a>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex items-center justify-center w-full mt-6 md:mt-0 md:w-1/2">
                <img className="w-full h-full max-w-2xl shadow-2xl rounded-2xl" src="https://source.unsplash.com/collection/190727/620x360/" alt="" />
              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default HeroL2
