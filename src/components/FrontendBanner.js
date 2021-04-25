import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BadgeFive from './BadgeFive'

export class FrontendBanner extends Component {
    render() {
        return (
            <div>
                <section className="text-gray-900 body-font px-2">
                    <div className="container flex flex-col px-5 py-4 mt-8 mx-auto md:flex-row lg:px-4 bg-white rounded-md shadow">
                        <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/3">
                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/450x300/F3F4F7/8693ac" />
                        </div>
                        <div className="flex flex-col items-start text-left lg:flex-grow md:w-2/3 md:pl-16 mt-2">
                        <h1 className="text-lg font-bold tracking-tighter text-left text-black lg:text-xl title-font firstcolr">
                               {this.props.industry} Industry</h1>
                          <BadgeFive/>
                            <h1 className="mb-4 text-2xl font-bold tracking-tighter text-left text-black lg:text-5xl title-font">
                               {this.props.industry} Industry</h1>
                            <p className="mb-8 text-base leading-relaxed text-left text-gray-800 font-bold">Deploy
                            your mvp in
              minutes, not days. WT offers you a a wide selection swapable sections for your landing page.</p>
                            <div className="flex flex-col justify-left lg:flex-row">
                                <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-gray-900 rounded-lg hover:bg-gray-800  focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                                    Action
              </button>
                                <p className="mt-2 text-sm text-left text-gray-100 md:ml-6 md:mt-0">
                                    It will take you to candy shop.
                <br className="hidden lg:block" />
                                    <Link to={this.props.link} className="inline-flex items-center font-semibold text-blue-900 md:mb-2 lg:mb-0 hover:text-blue-400 ">
                                        Learn More
                  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                                        </svg>
                                    </Link>
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
