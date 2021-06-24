import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
         
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7xl">
          <div className="flex flex-wrap md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-tight text-xl mb-3">Services</h2>
              <nav className="list-none mb-10">
                <li>
                 <Link to="/" className="text-gray-400 hover:text-white">Landing Pages </Link>
                </li>
                <li>
                 <Link to="/" className="text-gray-400 hover:text-white">TailwindBlocks</Link>
                </li>
                <li>
                 <Link to="/" className="text-gray-400 hover:text-white">Blog</Link>
                </li>
                <li>
                 <Link to="/" className="text-gray-400 hover:text-white">RandomUI</Link>
                </li>
              </nav>
            </div>
        
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-tight text-xl mb-3">Paths</h2>
              <nav className="list-none mb-10">
                <li>
                 <Link to="#_" className="text-gray-400 hover:text-white">JavaScript</Link>
                </li>
                <li>
                 <Link to="#_" className="text-gray-400 hover:text-white">ReactJS</Link>
                </li>
                <li>
                 <Link to="#_" className="text-gray-400 hover:text-white">Django</Link>
                </li>
               
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white text-xl mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Email</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-blue-900 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex btn-primary">Subscribe</button>
              </div>
              <Link to="/">Terms and Conditions</Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-co max-w-7xl">
           <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <p className="text-2xl ">lolgoal.com</p>
            </Link>
        
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
             <Link to="/" className="text-gray-400">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
             </Link>
             <Link to="/" className="ml-3 text-gray-400">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
             </Link>
             <Link to="/" className="ml-3 text-gray-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
             </Link>
             <Link to="/" className="ml-3 text-gray-400">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
             </Link>
            </span>
          </div>
        </div>
      </footer>
        </div>
    )
}
