import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'



export class Hero extends Component {
  render() {
    return (
      <div>


<section className="w-full px-6 pb-24 antialiased bghero">
        <div className="mx-auto max-w-7xl">
          <div className="container max-w-lg px-4 py-20 mx-auto text-left md:max-w-none md:text-center">
            <h1 className="text-3xl font-bold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-4xl lg:text-5xl"><span className="inline md:block">We help to develop</span> <span className="relative mt-2 mb-2 text-blue-700 md:inline-block">  Your startup quickly</span></h1>
            <div className="mx-auto mt-5 text-gray-600 md:mt-6 md:max-w-lg md:text-center lg:text-xl font-bold">LolGoal helps to design, develop software products that delight your customers and empower your business </div>
            <div className="flex flex-col items-center mt-12 text-center">
              <span className="relative inline-flex w-full md:w-auto">
                <Link to="/tailwind" type="button" className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-blue-700 border border-transparent md:w-auto hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 rounded-full">
                Try It Free
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
                </Link>
               
              </span>
             
            </div>
          </div>
        </div>
      </section>
      


<Product/>

             
      </div>
    )
  }
}

export default Hero
