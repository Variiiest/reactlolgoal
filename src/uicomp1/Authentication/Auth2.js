import React, { Component } from 'react'

export class Auth2 extends Component {
    render() {
        return (
            <div>
                   <div className="bg-gray-50 flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md text-gray-900">
          <h1 className="font-bold text-center text-2xl mb-5">Login</h1>  
          <div className="bg-gray-100 shadow-2xl w-full rounded divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
              <input type="text" className="border-2 focus:outline-none hover:border-blue-500 rounded px-4 py-3 mt-1 mb-5 text-sm w-full"/>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
              <input type="text" className="focus:outline-none hover:border-blue-500 rounded px-4 py-3 mt-1 mb-5 text-sm w-full border-2" />
              <button type="button" className="transition duration-200 bg-blue-600 hover:bg-blue-800 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-4 rounded text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-1">
                <button type="button" className="transition duration-200 text-white w-full py-3 rounded text-sm shadow-sm hover:shadow-md font-bold text-center bg-blue-400 inline-block">Twitter</button>
                <button type="button" className="transition duration-200 border border-gray-200 text-gray-100 bg-red-500 w-full py-3 rounded text-sm shadow-sm hover:shadow-md font-bold text-center inline-block">Google</button>
                <button type="button" className="transition duration-200 border border-gray-200 text-gray-100 bg-black w-full py-3 rounded text-sm shadow-sm hover:shadow-md font-bold text-center inline-block">Github</button>
              </div>
            </div>
            <div className="py-5">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <button className="transition duration-200 mx-5 px-5 py-3 cursor-pointer font-bold text-sm rounded text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                   
                    <span className="inline-block ml-1">Forgot Password</span>
                  </button>
                </div>
                <div className="text-center sm:text-right whitespace-nowrap">
                  <button className="transition duration-200 mx-5 px-5 py-3 cursor-pointer font-bold text-sm rounded text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  
                    <span className="inline-block ml-1">Register</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
            </div>
        )
    }
}

export default Auth2
