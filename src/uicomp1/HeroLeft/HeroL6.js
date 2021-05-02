import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HeroL6 extends Component {
    render() {
        return (
            <div>
                       <section className="flex flex-wrap items-center">
          <div className="container w-full bg-gray-50 md:w-1/2">
            <div className="mx-5 lg:mx-20">
              <Link href="#_" className="flex items-center w-48 mt-32 mb-4 font-bold text-gray-700 title-font md:mb-0 lg:mt-16">
                <div className="px-4 rounded-full bg-blue-100">
                Launching Too soon
                </div>
             
              </Link>
              <div className="flex mt-4 font-light text-gray-500">
                <div className="pr-4">
                  <h1 className="mb-2 text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
                  Lorem Ipsum is simply
                  </h1>
                </div>
              </div>
              <div className="w-full mt-8 text-base font-medium text-gray-700  mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </div>
              <div className="flex mt-12">
              <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                    Try It Free
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                  </a>
              </div>
            </div>
          </div>
          <div className="hidden w-full bg-center bg-cover md:w-1/2 lg:block">
            <img src="https://dummyimage.com/1000x1000/F3F4F7/8693ac" className="object-fill w-full h-screen" alt="" />
          </div>
        </section>
            </div>
        )
    }
}

export default HeroL6
