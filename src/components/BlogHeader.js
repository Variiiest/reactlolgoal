import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class BlogHeader extends Component {
    render() {
        return (
            <div className="bg-gray-800">

<section className="text-gray-100 body-font">
  <div className="container px-2 pb-12 sm:pt-12 mx-auto">

    <div className="flex flex-wrap sm:-m-8 mx-2 -mb-10 mt-4">
      <div className="md:w-2/3 sm:mb-0 mb-6">
      <section className="">
        <div className="bg-gradient-to-r from-pink-500 to-gray-900 lg:mx-8 lg:flex lg:max-w-full lg:shadow-lg rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80")'}} />
          </div>
          <div className="max-w-full px-4 py-12 lg:max-w-6xl lg:w-1/2">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Build Your New <span className="text-indigo-400">Idea</span></h2>
            <p className="mt-4 text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
            <div className="mt-8">
              <Link to="/blogdet" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</Link>
            </div>
          </div>

        </div>
      </section>
      </div>

      <div className="md:w-1/3 sm:mb-0 mb-6">
     
      <div className="flex flex-wrap items-center w-full h-full p-6 mx-auto shadow-xl rounded-xl bg-gray-900 ">
        <div className="flex flex-wrap justify-start mx-auto text-center ">
          <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
            <button className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform  border-2 shadow-xl rounded-xl hover:text-cyan-500 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
              <a href="/" className="focus:outline-none">
                <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" /></svg>
              </a>
            </button>
          </div>
          <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
          <button className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform  border-2 shadow-xl rounded-xl hover:text-cyan-500 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
              <a href="/" className="focus:outline-none">
                <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" /></svg>
              </a>
            </button>
          </div>
          <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
          <button className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform  border-2 shadow-xl rounded-xl hover:text-cyan-500 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
              <a href="/" className="focus:outline-none">
                <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" /></svg>
              </a>
            </button>
          </div>
          <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
          <button className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform  border-2 shadow-xl rounded-xl hover:text-cyan-500 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
              <a href="/" className="focus:outline-none">
                <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" /></svg>
              </a>
            </button>
          </div>
          <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
          <button className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform  border-2 shadow-xl rounded-xl hover:text-cyan-500 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
              <a href="/" className="focus:outline-none">
                <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" /></svg>
              </a>
            </button>
          </div>
          <div className="w-1/3 mx-auto lg:p-3 md:w-1/3 lg:w-full xl:w-1/3 xl:my-2">
          <button className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mx-auto mb-4 transition-all duration-500 ease-in-out transform  border-2 shadow-xl rounded-xl hover:text-cyan-500 bg-gray-900 text-gray-100 hover:bg-gray-800 hover:border-gray-900 border-cyan-400 hover:border-white focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 focus:outline-none ">
              <a href="/" className="focus:outline-none">
                <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor" /></svg>
              </a>
            </button>
          </div>
        </div>
      </div>

     </div>
    </div>
  </div>
</section>

            </div>
        )
    }
}

export default BlogHeader
