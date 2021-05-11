import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Services extends Component {
    render() {
        return (
           
                <>

{/* 
<section className="text-gray-800 body-font">
             <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
               <div className="flex flex-col items-start w-full pt-0 mb-16 text-center lg:flex-grow xl:mr-10 md:pr-12 md:mb-0 ">                        
                 <div className="flex flex-wrap w-full mt-2 -mx-4 text-center">
                   <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                   <div className="inline-flex items-center justify-center flex-shrink-0 sm:w-32  sm:h-32 w-16 h-16 mb-5 text-gray-900 bg-black bg-opacity-60 shadow rounded-full">
                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(237, 60, 260, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                               </div>
                   </div>
                   <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                   <div className="inline-flex items-center justify-center flex-shrink-0 sm:w-32  sm:h-32 w-16 h-16 mb-5 text-gray-900 bg-black bg-opacity-60 shadow rounded-full">
                           

                           </div>
                               </div>
                   <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                   <div className="inline-flex items-center justify-center flex-shrink-0 sm:w-32  sm:h-32 w-16 h-16 mb-5 text-gray-900 bg-black bg-opacity-60 shadow rounded-full">
                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(37, 60, 160, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                               </div>
                   </div>
                   <div className="w-1/4 p-4 mt-4 sm:w-1/4">
                   <div className="inline-flex items-center justify-center flex-shrink-0 sm:w-32  sm:h-32 w-16 h-16 mb-5 text-gray-900 bg-black bg-opacity-60 shadow rounded-full">
                               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(27, 60, 220, 1)', transform: '', msFilter: ''}}><path d="M10 3H4C3.447 3 3 3.447 3 4v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1V4C11 3.447 10.553 3 10 3zM20 13h-6c-.553 0-1 .447-1 1v6c0 .553.447 1 1 1h6c.553 0 1-.447 1-1v-6C21 13.447 20.553 13 20 13zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S19.206 3 17 3zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4S9.206 13 7 13z" /></svg>
                               </div>
                   </div>
                 </div>
               </div>
            
             </div>
           </section>  */}





<section className="text-blue-800 body-font font-bold sticky top-0">
<div className="lg:text-center mb-8 mt-12 mx-auto p-4">
      <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl">
        A better way to develop your projects
      </p>
      <p className="mt-4  max-w-2xl text-xl font-bold lg:mx-auto text-blue-300">
     Design your project with less time 
      </p>
    </div>
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-wrap">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="px-6 py-8 rounded-md bg-white bg-opacity-10 hover:bg-opacity-5 border-t-4 border-green-500 transition duration-200 hover:shadow-xl transform hover:scale-105">
                <h2 className="text-2xl text-green-200 font-bold title-font mb-2">Web Development</h2>
                <p className="leading-relaxed text-base text-gray-300">We develop web applications that engaging, and are developed with the latest technologies.And If you are programming person use our code snippets for free.</p>
                <Link to="/tailwind" className="text-blue-600 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="px-6 py-8 rounded-md bg-white bg-opacity-10 hover:bg-opacity-5 border-t-4 border-blue-500 transition duration-200 hover:shadow-xl transform hover:scale-105">
            
                <h2 className="text-2xl text-blue-300 font-bold title-font mb-2">Free Landing Pages</h2>
                <p className="leading-relaxed text-base text-gray-300">We have  developed some landing pages with latest technologies . If you are starting a startup,Landing pages are important.We also matched the color with industry.</p>
                <Link to="/freetemp" className="text-blue-600 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="px-6 py-8 rounded-md bg-white bg-opacity-10 hover:bg-opacity-5 border-t-4 border-pink-500 transition duration-200 hover:shadow-xl transform hover:scale-105">
                <h2 className="text-2xl text-pink-200 font-bold title-font mb-2">Frontend Templates Premium </h2>
                <p className="leading-relaxed text-base text-gray-300">We have  developed some landing pages with latest technologies . If you are starting a startup,Landing pages are important.We also matched the color with industry.</p>
                <Link to="/premium" className="text-blue-600 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="px-6 py-8 rounded-md bg-white bg-opacity-10 hover:bg-opacity-5 border-t-4 border-yellow-500 transition duration-200 hover:shadow-xl transform hover:scale-105">
                
                <h2 className="text-2xl text-yellow-200 font-bold title-font mb-2">Free FullStack Projects</h2>
                <p className="leading-relaxed text-base text-gray-300">Our free fullstack projects help you to start business with less cost.Also Get assistant for hosting and choosing right domain.</p>
                <Link to="/freetemp" className="text-blue-600 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="px-6 py-8 rounded-md bg-white bg-opacity-10 hover:bg-opacity-5 border-t-4 border-indigo-500 transition duration-200 hover:shadow-xl transform hover:scale-105">
               
                <h2 className="text-2xl text-indigo-200 font-bold title-font mb-2">Full-Stack Premium</h2>
                <p className="leading-relaxed text-base text-gray-300">Our free fullstack projects help you to start business with less cost.Also Get assistant for hosting and choosing right domain.</p>
                <Link to="/premium" className="text-blue-600 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="px-6 py-8 rounded-md bg-white bg-opacity-10 hover:bg-opacity-5 border-t-4 border-red-500 transition duration-200 hover:shadow-xl transform hover:scale-105">
                <h2 className="text-2xl text-red-200 font-bold title-font mb-2">Custom Development</h2>
                <p className="leading-relaxed text-base text-gray-300">Try our free resources , If not working for your project just contact us. We will work with you and help you to start your business.
</p>
                <Link to="/contact" className="text-blue-400 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



</>
        )
    }
}

export default Services
