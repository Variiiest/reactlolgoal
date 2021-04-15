import React, { Component } from 'react'

export class Hero19 extends Component {
    render() {
        return (
            <div>
                <section className="flex flex-col items-center h-screen md:flex-row bg-gray-900">
        <div className="hidden w-full h-screen bg-gray-200 bg-left-bottom bg-cover lg:block md:w-1/3 xl:w-1/3">
          {/*- image will be full height and occupy the whole with of this div.*/}
          <img src="https://dummyimage.com/600x1024/F3F4F7/8693ac" alt="" className="object-cover w-full h-full " />
        </div>
        <div className="flex w-full h-screen px-6 bg-gray-900 md:max-w-md lg:max-w-full md:w-1/2 xl:w-1/2 lg:px-16 xl:px-12 items-left justify-left">
          <div className="w-full h-100">
            <a className="inline-flex items-center w-48 mt-32 mb-20 font-medium text-gray-900 title-font md:mb-16 md:mt-32" href="/">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500">
              </div>
              <h2 className="font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-blueGray-500 lg:text-md text-bold lg:mr-8">
                Wicked Blocks
              </h2>
            </a>
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-black lg:text-left lg:text-5xl title-font">
              Medium length display headline.
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-900 lg:text-1xl">
              Tailwind CSS templates
              with a wicked design.
              Professionally designed and 100% responsive static templates for startups and personal use.
            </p>
            <div className="flex">
              <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Action
              </button>
              <p className="mt-2 text-sm text-center text-gray-600 md:ml-6 md:mt-0 sm:text-left">
                It will take you to candy shop.
                <br className="hidden lg:block" />
                <a href="/" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                  Learn More
                  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
            </div>
        )
    }
}

export default Hero19
