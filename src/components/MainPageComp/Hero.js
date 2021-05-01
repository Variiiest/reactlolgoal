import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class Hero extends Component {
  render() {
    return (
      <div>


              <section className="px-2 py-12 md:px-0 bg-black" >
        <div className="container sm:items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
         
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold tracking-tight text-left sm:text-4xl md:text-6xl text-center uppercase">
            <span className="block">React | Tailwind<span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-pink-500 lg:inline lg:mt-0"> | Django</span></span>
          </h1>

          <h1 className="text-2xl tracking-tight font-extrabold sm:text-4xl mb-2 text-green-500">
                <span className="block xl:inline">
                  We help to develop your startup quickely.
</span>

              </h1>

          <p className="w-full mx-auto text-base text-left text-white md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl text-center">
          LolGoal helps to design, develop software products that delight your customers and empower your business .
          </p>
          <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <Link to="/tailwind" className="flex items-center w-full btn1">
              Try It Free
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
        
          </div>
        </div>
      </section> 
      </div>
    )
  }
}

export default Hero
