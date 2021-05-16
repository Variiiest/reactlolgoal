import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Nav =[
  {
    name:"Tailwind Blocks",
    url:"/tailwind",
  },
  {
    name:"Django Blocks",
    url:"/django",
  },
  {
    name:"Free Resources",
    url:"/freetemp",
  },

 
]




export class Navbar extends Component {


  constructor(props) {
    super(props);
    this.state = {
      openList3: false,
    };
  }


  setListOpen3() {
    this.setState({
      openList3: !this.state.openList3,
    });
  }
  render() {
    return (
<>

     
      <section>
      <div className="font-bold bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-3xl font-bold textcolor1">
                  <span className="font-bold">lol</span>goal.com
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button type="button" className="bg-gray-900 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false" onClick={() => this.setListOpen()}>
                <span className="sr-only">Open menu</span>
               
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
              {Nav.map((data,key)=>
                  <Link to={data.url} key={data.name} className="text-gray-800 group inline-flex items-center text-base hover:text-black focus:outline-none font-bold pl-4">
                  <span>{data.name}</span>
                </Link> )}
              </div>
            
              <div className="relative">
                <button type="button" className="text-gray-800 group inline-flex items-center text-base hover:text-black focus:outline-none font-bold">
                  <span>More</span>
                </button>
              </div>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="." className="whitespace-nowrap text-base text-gray-800 hover:text-black">
                Sign in
              </a>
              <a href="." className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </a>
            </div>
          </div>
        </div>
    
        <div className={"absolute top-0 inset-x-0 transition transform origin-top-right" + (this.state.openList ? "" : " hidden")}>
          <div className="shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-900 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
              <a className="flex title-font items-center md:justify-start justify-center text-black" href=".">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-white">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-900 text-white">
            
            </div>
                  </div>
      <span className="ml-3 text-3xl font-bold text-green-400">geneX</span>
    </a>
                <div className="-mr-2">
                  <button type="button" className="bg-gray-900 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => this.setListOpen()}>
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="." className="-m-3 p-3 flex items-center ">
                    {/* Heroicon name: outline/chart-bar */}
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="ml-3 text-base text-black">
                      Analytics
                    </span>
                  </a>
                  <a href="." className="-m-3 p-3 flex items-center ">
                    {/* Heroicon name: outline/cursor-click */}
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span className="ml-3 text-base text-black">
                      Engagement
                    </span>
                  </a>
                  <a href="." className="-m-3 p-3 flex items-center ">
                    {/* Heroicon name: outline/shield-check */}
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="ml-3 text-base text-black">
                      Security
                    </span>
                  </a>
                  <a href="." className="-m-3 p-3 flex items-center ">
                    {/* Heroicon name: outline/view-grid */}
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span className="ml-3 text-base text-black">
                      Integrations
                    </span>
                  </a>
                  <a href="." className="-m-3 p-3 flex items-center ">
                    {/* Heroicon name: outline/refresh */}
                    <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="ml-3 text-base text-black">
                      Automations
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="." className="text-base text-black ">
                  Pricing
                </a>
                <a href="." className="text-base text-black ">
                  Docs
                </a>
                <a href="." className="text-base text-black ">
                  Help Center
                </a>
                <a href="." className="text-base text-black ">
                  Guides
                </a>
                <a href="." className="text-base text-black ">
                  Events
                </a>
                <a href="." className="text-base text-black ">
                  Security
                </a>
              </div>
              <div>
                <a href="." className="w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
                <p className="mt-6 text-center text-base text-gray-800">
                  Existing customer?
                  <a href="." className="text-green-500 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
      </>
    )
  }
}

export default Navbar

