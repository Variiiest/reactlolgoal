import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SecondNav from './SecondNav'

export class Header extends Component {
  render() {
    return (
      <div>
        <SecondNav/>
        <section class="text-gray-700 dark:text-gray-200 body-font dark:bg-black px-5 py-12">
    <div class="container flex flex-col items-center mx-auto md:flex-row lg:px-8 rounded-2xl">
      <div class="flex flex-col w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:items-start md:mb-0">
        <h1 class="mb-8 mt-4 text-4xl font-bold tracking-tighter text-left text-gray-700 dark:text-gray-200 lg:text-5xl title-font">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div class="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-white bg-gradient-to-b from-blue-600 to-red-300 shadow rounded-full p-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
            </div>
            <div class="flex-grow">
              <h2 class="mb-3 text-2xl font-bold tracking-tighter text-gray-700 dark:text-gray-200 title-font">
                Lorem ipsum
              </h2>
              <p class="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> <Link to="#_" class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div class="flex flex-col items-start p-4 mb-6 text-left md:w-1/2 md:mb-0">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-white bg-gradient-to-b from-blue-600 to-red-300 shadow rounded-full p-2">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
</svg>
            </div>
            <div class="flex-grow">
              <h2 class="mb-3 text-lg font-medium tracking-tighter text-gray-700 dark:text-gray-200 title-font">
                Lorem ipsum
              </h2>
              <p class="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> <Link to="#_" class="inline-flex items-center font-semibold text-blue-700 md:mb-2 lg:mb-0 hover:text-blue-800">
                Learn More
                <svg
                  class="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
        <img class="object-cover object-center rounded-lg" alt="hero" src="https://ik.imagekit.io/vpa3fwqdnd/Components/Rho_éne_JQuSBX_dL.svg" />
      </div>
    </div>
  </section>







      </div>
    )
  }
}

export default Header
