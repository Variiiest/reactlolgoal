import React, { Component } from 'react'

export class FrontendBanner extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-200 body-font px-2">
                    <div className="container flex flex-col px-5 py-8 mt-8 mx-auto md:flex-row lg:px-8 bg-gradient-to-r from-green-800 to-blue-600 rounded-md">
                        <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
                        </div>
                        <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 mt-2 sm:mt-12">
                            <div className="py-2">
                                <div className="grid text-center grid-cols-6">
                                    <div className="flex items-center justify-center ">
                                        <div class="w-12 h-12 inline-flex items-center justify-center bg-blue-900 mb-4 flex-shrink-0">

                                        </div>

                                    </div>
                                    <div className="flex items-center justify-center ">
                                        <div class="w-12 h-12 inline-flex items-center justify-center bg-blue-400 text-indigo-500 mb-4 flex-shrink-0">

                                        </div>

                                    </div>
                                    <div className="flex items-center justify-center ">
                                        <div class="w-12 h-12 inline-flex items-center justify-center bg-indigo-700 text-indigo-500 mb-4 flex-shrink-0">

                                        </div>

                                    </div>
                                    <div className="flex items-center justify-center ">
                                        <div class="w-12 h-12 inline-flex items-center justify-center bg-blue-700 text-indigo-500 mb-4 flex-shrink-0">

                                        </div>

                                    </div>
                                    <div className="flex items-center justify-center ">
                                        <div class="w-12 h-12 inline-flex items-center justify-center bg-gray-900 text-indigo-500 mb-4 flex-shrink-0">

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-white lg:text-5xl title-font">
                                Medium length display headline.</h1>
                            <p className="mb-8 text-base leading-relaxed text-left text-gray-200 ">Deploy
                            your mvp in
              minutes, not days. WT offers you a a wide selection swapable sections for your landing page.</p>
                            <div className="flex flex-col justify-left lg:flex-row">
                                <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-gray-900 rounded-lg hover:bg-gray-800  focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                    Action
              </button>
                                <p className="mt-2 text-sm text-left text-gray-100 md:ml-6 md:mt-0">
                                    It will take you to candy shop.
                <br className="hidden lg:block" />
                                    <a href="/" className="inline-flex items-center font-semibold text-blue-900 md:mb-2 lg:mb-0 hover:text-blue-400 ">
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

export default FrontendBanner
