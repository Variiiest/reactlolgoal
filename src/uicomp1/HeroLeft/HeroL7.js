import React, { Component } from 'react'

export class HeroL7 extends Component {
    render() {
        return (
            <div>
                          <section className="flex flex-col items-center md:flex-row">
        <div className="hidden w-full bg-gray-200 bg-left-bottom bg-cover lg:block md:w-1/3 xl:w-1/3">
         
          <img src="https://dummyimage.com/600x1024/F3F4F7/8693ac" alt="" className="object-cover w-full h-full " />
        </div>
        <div className="flex w-full px-6 md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/2 lg:px-16 xl:px-12 items-left justify-left">
          <div className="w-full">
            <a className="inline-flex items-center mt-12  font-medium text-gray-900 title-font" href="/">
            <div className="px-4 rounded-full bg-blue-100">
                Launching Too soon
                </div>
            </a>
            <h1 className="mt-4 mb-4 font-bold tracking-tighter text-black sm:text-5xl text-4xl title-font">
            Lorem Ipsum is simply text service
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-800 lg:text-1xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="flex">
            <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-800 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto">
                    Try It Free
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                  </a>
        
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default HeroL7
