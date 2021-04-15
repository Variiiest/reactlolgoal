import React, { Component } from 'react'

export class Hero20 extends Component {
    render() {
        return (
            <div>
                 <section className="flex flex-wrap items-center h-screen md">
          <div className="container w-full h-screen bg-white md:w-1/2">
            <div className="mx-5 lg:mx-32 ">
              <a href="/" className="flex items-center w-48 mt-32 mb-4 font-medium text-gray-900 title-font md:mb-0 lg:mt-16">
                <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500">
                </div>
                <h2 className="font-semibold tracking-tighter uppercase transition duration-1000 ease-in-out transform text-blueGray-500 lg:text-md text-bold lg:mr-8">
                  Wickedblocks
                </h2>
              </a>
              <div className="flex mt-16 font-light text-gray-500">
                <div className="pr-4">
                  <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
                    Short Header.
                  </h1>
                </div>
              </div>
              <div className="w-full mt-16 text-base font-medium text-gray-700 sm:md:w-3/3 mb-8leading-relaxed">
                All you have to do is choose the section you need, remove the one that you do not need for that
                project and paste the one you need in that moment. All the section have been given the same
                left/right padding. Because consistence is king. (Bullshit)
              </div>
              <div className="flex mt-12">
                <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div className="hidden w-full h-screen bg-center bg-cover md:w-1/2 lg:block">
            <img src="https://dummyimage.com/1000x1000/F3F4F7/8693ac" className="object-fill w-full h-screen" alt="" />
          </div>
        </section>
            </div>
        )
    }
}

export default Hero20
