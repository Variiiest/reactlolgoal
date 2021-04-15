import React, { Component } from 'react'

export class HeroSix extends Component {
    render() {
        return (
            <div>
                <section className="w-full px-6 pb-12 antialiased bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
            <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Start Crafting Your</span> <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-blue-600 md:inline-block">Next Great Idea</span></h1>
            <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">Simplifying the creation of landing pages, blog pages, application pages and so much more!</div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <a href="#_" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-blue-700 border border-transparent md:w-auto hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 rounded-full">
                  Purchase Now
                </a>
                <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">only $15/mo</span>
              </span>
              <a href="." className="mt-3 text-sm text-blue-700">Learn More</a>
            </div>
          </div>
          {/* End Main Hero Content */}
        </div>
      </section>
    
            </div>
        )
    }
}

export default HeroSix
