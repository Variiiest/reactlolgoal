import React, { Component } from 'react'

export class Auth6 extends Component {
    render() {
        return (
            <div>
                   <div className="min-w-screen sm:min-h-screen flex items-center justify-center px-5 py-5">
        <div className="text-gray-900 rounded  shadow-2xl w-full overflow-hidden" style={{maxWidth: '1000px'}}>
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-blue-700 py-10 px-10">
            {/*
            Add Any text*/}
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-white shadow-2xl">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-base font-semibold px-1">First name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="text-gray-700 text-lg" /></div>
                      <input type="text" className="w-full -ml-10 pl-4 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Eric" />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-base font-semibold px-1">Last name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="text-gray-700 text-lg" /></div>
                      <input type="text" className="w-full -ml-10 pl-4 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Denever" />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-base font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="text-gray-700 text-lg" /></div>
                      <input type="email" className="w-full -ml-10 pl-4 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="EricDenever@example.com" />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-base font-semibold px-1">Password</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center flex items-center justify-center"><i className="text-gray-700 text-lg" /></div>
                      <input type="password" className="w-full -ml-10 pl-4 pr-3 py-2 rounded border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded px-3 py-3 font-semibold">REGISTER NOW</button>
                  </div>
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

export default Auth6
