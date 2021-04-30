import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Services extends Component {
    render() {
        return (
           
                <>

<section className="text-gray-100 body-font font-bold bg-black">
        <div className="container mx-auto py-12 px-4">
        <div className="lg:text-center mb-8">
      <p className="text-3xl leading-8 font-extrabold tracking-tight  text-gray-100 sm:text-4xl">
        A better way to develop your projects
      </p>
      <p className="mt-4  max-w-2xl text-xl font-bold lg:mx-auto">

     Design your project with less time 

      </p>
    </div>


          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-md">
              
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Web Development</h2>
                <p className="leading-relaxed text-base text-gray-200">We develop web applications that engaging, and are developed with the latest technologies.And If you are programming person use our code snippets for free.</p>
                <Link to="/tailwind" className="text-blue-400 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="secondcolr p-6 rounded-md">
            
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Free Landing Pages</h2>
                <p className="leading-relaxed text-base text-gray-200">We have  developed some landing pages with latest technologies . If you are starting a startup,Landing pages are important.We also matched the color with industry.</p>
                <Link to="/freetemp" className="text-blue-400 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="fifthcolr p-6 rounded-md">
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Frontend Templates Premium </h2>
                <p className="leading-relaxed text-base">We have  developed some landing pages with latest technologies . If you are starting a startup,Landing pages are important.We also matched the color with industry.</p>
                <Link to="/premium" className="text-blue-300 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-gray-900 p-6 rounded-md">
                
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Free FullStack Projects</h2>
                <p className="leading-relaxed text-base">Our free fullstack projects help you to start business with less cost.Also Get assistant for hosting and choosing right domain.</p>
                <Link to="/freetemp" className="text-blue-300 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="fifthcolr p-6 rounded-md">
               
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Full-Stack Premium</h2>
                <p className="leading-relaxed text-base text-gray-200">Our free fullstack projects help you to start business with less cost.Also Get assistant for hosting and choosing right domain.</p>
                <Link to="/premium" className="text-blue-100 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="sixcolr p-6 rounded-md">
                <h2 className="text-2xl text-gray-100 font-bold title-font mb-2">Custom Development</h2>
                <p className="leading-relaxed text-base text-gray-200">Try our free resources , If not working for your project just contact us. We will work with you and help you to start your business.
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
