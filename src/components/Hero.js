import React, { Component } from 'react'



export class Hero extends Component {
  render() {
    return (
      <div>
        <section className=" body-font secondcolr bg3 text-gray-100">
          <div className="container flex sm:px-12 px-5 sm:py-24 py-12 md:flex-row flex-col items-center">

            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl mb-2">
                <span className="block xl:inline">
                  Learn the code 
</span>

              </h1>

              <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
                <span className="block text-blue-200 xl:inline">Beginner to advanced</span>
              </h1>
              <p className="mt-3 text-base font-bold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Learn the code for free. Our beginner-friendly tracks will help you to be elevete your skills..
          </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="shadow-lg rounded">
                  <a href="/" className="flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-400 hover:bg-blue-300 md:text-sm rounded">
                    Get started
              </a>
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
