import React, { Component } from 'react'

export class HeroL5 extends Component {
    render() {
        return (
            <div>
                          <section className="px-2 py-32 md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-bold tracking-tighter text-left text-gray-900 lg:text-5xl title-font">
                  <span className="block xl:inline">Lorem ipsum dol </span>
                  <span className="block text-blue-700 xl:inline">Lorem ipsum dolor</span>
                </h1>
                <p className="mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                    Try It Free
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                  </a>
                  <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md border sm:rounded-xl">
                <img src="https://dummyimage.com/720x400/F3F4F7/8693ac" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default HeroL5
