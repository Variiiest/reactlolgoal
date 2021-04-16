import React, { Component } from 'react'
import {Link  } from "react-router-dom";
 
export class HeroL1 extends Component {
    render() {
        return (
            <div>
                  <section className="text-gray-800 body-font">
                  <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-8">
                    <div className="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0 ">
                      <h2 className="mb-2 text-xs font-bold text-gray-100 title-font">
                        <span className="px-4 py-2 bg-gray-800 rounded-full">We are hiring now</span>
                        </h2>
                      <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-gray-900 lg:text-5xl title-font">
                      Lorem ipsum dolor sit amet consectetur
                      </h1>
                      <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                        <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
                          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-900 bg-white shadow rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(237, 60, 60, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                          </div>
                          <div className="flex-grow">
                            <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font">
                            Lorem ipsum 
                            </h2>
                            <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <Link className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800 ">
                              Learn More
                              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                              </svg>
                              </Link> 
                          </div>
                        </div>
                        <div className="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
                          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-gray-900 bg-white shadow rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(237, 60, 60, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                          </div>
                          <div className="flex-grow">
                            <h2 className="mb-3 text-lg font-medium tracking-tighter text-gray-700 title-font">
                            Lorem ipsum</h2>
                            <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <a href="/" className="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800 ">
                              Learn More
                              <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
                      <img className="object-cover object-center rounded-lg " alt="hero" src="https://dummyimage.com/720x600/F3F4F7/8693ac" />
                    </div>
                  </div>
                </section> 
            </div>
        )
    }
}

export default HeroL1
