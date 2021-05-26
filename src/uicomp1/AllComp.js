import React, { Component } from 'react'
import Tailcompcard from './Tailcompcard'
import { Link } from 'react-router-dom'

export class AllComp extends Component {
  render() {
    return (
      <div>
<section className="text-gray-700 body-font bg-indigo-200">

             <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-8">
               <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0 ">
                 <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-gray-900 lg:text-4xl title-font">
                 How to start with these Codesnippets?
                 </h1>
                 <p className="mb-8 text-base leading-relaxed text-left ">
               We have already built react-tailwind codesnippets ,instructions to create react applications with Codesnippets given below
                 </p>
                 <p className="flex items-center mb-4 text-blue-600 hover:text-blue-500"><span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-2 rounded-full color1 font-bold text-white">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Download the tailwind starter files <Link to="" className="underline ml-4"> Download</Link>
                 </p>
                 <p className="flex items-center mb-4 text-blue-600 hover:text-blue-500"><span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-2 rounded-full color1 font-bold text-white">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Install using yarn or npm .
                 </p>
                 <p className="flex items-center mb-4 text-blue-600 hover:text-blue-500"><span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-2 rounded-full color1 font-bold text-white">
                     <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                       <path fill="none" d="M0 0h24v24H0z" />
                       <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                     </svg>
                   </span>
                   Now start writing your react application.
                 </p>
               </div>
               <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
               <a href="https://kinsta.com?kaid=OPVBTGVTUKMW">
                 <img className="object-cover object-center" alt="hero" src="https://kinsta.com/assets/banners/affiliate/en/600x300%20-%20devkinsta%20-%20dark.png"/>
               </a>
               </div>
             </div>
            
           </section>











        <Tailcompcard />





      </div>
    )
  }
}

export default AllComp
