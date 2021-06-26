import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import All from './All'

export class Hero extends Component {
  
    render() {
        return (
            <div>
                
      <section className="w-full px-3 antialiased lg:px-6 bg-blue-700 dark:bg-gray-800">
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

<section className="text-gray-700 dark:text-gray-200 body-font">
      <div className="container max-w-7xl mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="flex flex-wrap items-center pb-12 bg-gradient-to-b from-gray-200 dark:from-gray-900 rounded sm:px-8 py-12 px-2">
          <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
            <div className="py-2">
              <h1 className="text-3xl lg:text-5xl md:leading-snug tracking-tighter font-bold">UIKits
              </h1>
              <h2 className="text-lg lg:text-2xl lg:leading-7 md:leading-10 py-4 md:py-8">We develop web applications that engaging, and are developed with the latest technologies.And If you are programming person use our code snippets for free.</h2>
              <Link to="/industries" className="btn-primary">See Industries</Link>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
            <img className="absolute w-full h-full inset-0 object-cover object-center rounded" src="https://ik.imagekit.io/vpa3fwqdnd/Components/Hinterrhein_JgUb_ltVI.svg" alt="" />
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded shadow-lg border dark:border-black p-6 w-10/12 -mb-20">
              <div className="flex items-center justify-between w-full sm:w-full">
                <div className="rounded-lg">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-md color1 text-white mb-4">
                   400+
                  </div>
                  <h2 className="text-lg font-bold title-font mb-2">All Components</h2>
                  <p className="leading-relaxed text-base">We have developed some components with latest technologies.</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>

    <section className="text-gray-700 dark:text-gray-200">
      <div className="container max-w-7xl mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="flex flex-wrap items-center pb-12 bg-gradient-to-b from-gray-200 dark:from-gray-900 rounded sm:px-8 py-12 px-2">
        <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
            <img className="absolute w-full h-full inset-0 object-cover object-center rounded" src="https://ik.imagekit.io/vpa3fwqdnd/Components/Inn_KqZYwSf5u.svg" alt="" />
          </div>
          <div className="md:w-1/2 lg:w-2/3 w-full md:pl-20 md:pr-6">
            <div className="py-2">
              <h1 className="text-3xl lg:text-5xl md:leading-snug tracking-tighter font-bold">DarkMode Enabled Templates
    </h1>
              <h2 className="text-lg lg:text-2xl lg:leading-7 md:leading-10 py-4 md:py-8">We develop web applications that engaging, and are developed with the latest technologies.And If you are programming person use our code snippets for free.</h2>
              <Link to="/industries" className="btn-primary">See Industries</Link>
            </div>
          </div>
      
        </div>
      </div>
     
    </section>

 


    <section className="text-gray-700 dark:text-gray-200">
      <div className="container max-w-7xl mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="flex flex-wrap items-center pb-12 bg-gradient-to-b from-gray-200 dark:from-gray-900 rounded sm:px-8 py-12 px-2 ">
          <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
            <div className="py-2">
              <h1 className="text-3xl lg:text-5xl md:leading-snug tracking-tighter font-bold">Complex Functions </h1>
              <h2 className="text-lg lg:text-2xl lg:leading-7 md:leading-10 py-4 md:py-8">We develop web applications that engaging, and are developed with the latest technologies.And If you are programming person use our code snippets for free.</h2>
              <Link to="/industries" className="btn-primary">See Industries</Link>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
            <img className="absolute w-full h-full inset-0 object-cover object-center" src="https://ik.imagekit.io/vpa3fwqdnd/Components/Linth_Koqt0Ex4E.svg" alt="" />
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded shadow-lg border dark:border-black p-6 w-10/12 -mb-20">
              <div className="flex items-center justify-between w-full sm:w-full">
                <div className="rounded-lg">
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-md color1 text-white mb-4">
                   400+
                  </div>
                  <h2 className="text-lg font-bold title-font mb-2">All Components</h2>
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
