import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import All from './All'

export class Hero extends Component {
  
    render() {
        return (
            <div>
                
      <section className="w-full px-3 antialiased lg:px-6 bg-gradient-to-tr from-blue-700 to-blue-500">
    <div className="mx-auto max-w-7xl">
      <div className="container pt-32 pb-64 mx-auto text-center sm:px-4">
        <h1 className="text-3xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none">
          <span className="block">We help to develop </span>
          <span
            className="inline-block mt-3 text-white"
          >
            Your Service as quick as possible
          </span>
        </h1>

     
      </div>
    </div>
  </section>


<All/>

<section className="text-gray-800 body-font">
      <div className="container max-w-7xl mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="flex flex-wrap items-center pb-12 bg-gradient-to-b from-gray-200 rounded-2xl sm:px-8 py-12 px-2">
          <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
            <div className="py-2">
              <h1 className="text-3xl lg:text-5xl md:leading-snug tracking-tighter text-gray-900 font-bold">Web Development
              <span className="text-blue-600"> Industry Wise</span></h1>
              <h2 className="text-lg lg:text-2xl lg:leading-7 md:leading-10 py-4 md:py-8 text-gray-600">We develop web applications that engaging, and are developed with the latest technologies.And If you are programming person use our code snippets for free.</h2>
              <Link to="/industries" className="btn-primary">See Industries</Link>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
            <img className="absolute w-full h-full inset-0 object-cover object-center rounded-2xl" src="https://ik.imagekit.io/vpa3fwqdnd/Components/photo-1606857521015-7f9fcf423740_8UZOBTPSb.jpg" alt="" />
            <div className="relative z-10 bg-white rounded-2xl shadow-lg border p-6 w-10/12 -mb-20">
              <div className="flex items-center justify-between w-full sm:w-full">
                <div className="rounded-lg">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-md color1 text-white mb-4">
                   400+
                  </div>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-2">All Components</h2>
                  <p className="leading-relaxed text-base">We have developed some components with latest technologies.</p>
                </div>
                <div></div>
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

export default Hero
